package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.*;
import com.example.gameproject.db.repository.*;
import com.example.gameproject.dto.request.UserDto;
import com.example.gameproject.dto.response.UserResponse;
import com.example.gameproject.security.jwt.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class UserService {
    //main에 올려보기

    @Autowired
    UserArtifactRepository userArtifactRepository;
    @Autowired
    MyCharacterRepository myCharacterRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;
    private final CoolTimeRepository coolTimeRepository;
    private final EffectTimeRepository effectTimeRepository;

    @Transactional
    public void join(UserDto userDto){
        if (userRepository.existsByEmail(userDto.getEmail())) {
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");
        }else {
            User user = User.builder()
                .username(userDto.getEmail())
                .email(userDto.getEmail())
                .password(passwordEncoder.encode(userDto.getPassword()))  //비밀번호 인코딩
                .role(Role.ROLE_USER)         //roles는 최초 USER로 설정
                .build();
            userRepository.save(user);
        }
    }

    @Transactional
    public UserResponse login (UserDto userDto){
        User user = userRepository.findByEmail(userDto.getEmail())
            .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 E-MAIL 입니다."));
        if (!passwordEncoder.matches(userDto.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        // 로그인에 성공하면 email, roles 로 토큰 생성 후 반환
        String token = jwtTokenProvider.createToken(user.getUsername(), user.getRole());
        UserResponse userResponse = UserResponse.builder()
            .token(token)
            .build();
        return userResponse;
    }

    public List<Long> getMyRelic(String email){
        long userId = userRepository.findByEmail(email).orElseThrow().getId();
        User user = userRepository.findById(userId).orElse(null);
        List<UserArtifact> myArtifact = userArtifactRepository.findAllByUser_Id(userId);
        List<Long> res = new ArrayList<>();
        for (UserArtifact uaf : myArtifact) {
            res.add(uaf.getArtifact().getId());
        }
        return res;
    }

    @Transactional
    public void reStart(String email){
        long userId = userRepository.findByEmail(email).orElseThrow().getId();
        User user = userRepository.getById(userId);

        // 마이캐릭터 삭제
        List<MyCharacter> myCharacters = myCharacterRepository.getMyCharacters(userId);
        for (MyCharacter mch : myCharacters) {
            myCharacterRepository.delete(mch);
        }

        // 스테이지 1 - 1 로 초기화
        user.reGame();
        userRepository.save(user);
        
        // 유물삭제
        List<UserArtifact> myArtifact = userArtifactRepository.findAllByUser_Id(userId);
        for (UserArtifact uaf : myArtifact) {
            userArtifactRepository.delete(uaf);
        }
        
        
        // 쿨타임 이펙트 타임 삭제
        List<CoolTime> coolTimes = coolTimeRepository.findAll();
        List<EffectTime> effectTimes = effectTimeRepository.findAll();
        for (CoolTime coolTime : coolTimes) {
            if (coolTime.getMyCharacter().getUser().getId() == userId) {
                coolTimeRepository.delete(coolTime);
            }
        }

        for (EffectTime effectTime : effectTimes) {
            if (effectTime.getMyCharacter().getUser().getId() == userId) {
                effectTimeRepository.delete(effectTime);
            }
        }
        

    }
}
