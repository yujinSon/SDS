package com.example.gameproject.api.service;

import java.util.Collections;

import com.example.gameproject.db.entity.Role;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.request.UserDto;
import com.example.gameproject.dto.response.UserResponse;
import com.example.gameproject.security.jwt.JwtTokenProvider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;

    @Transactional
    public Long join(UserDto userDto){
        if (userRepository.existsByEmail(userDto.getEmail())) {
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");
        }

        User user = User.builder()
            .username(userDto.getEmail())
            .email(userDto.getEmail())
            .password(passwordEncoder.encode(userDto.getPassword()))  //비밀번호 인코딩
            .role(Role.ROLE_USER)         //roles는 최초 USER로 설정
            .build();

        return userRepository.save(user).getId();
    }

    @Transactional
    public UserResponse login(UserDto userDto){
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

    // @Autowired
    // UserRepository userRepository;
    //
    // public String registerUser(UserDto userDto){
    //     boolean isExist = userRepository.existsByEmail(userDto.getEmail());
    //     //존재한다면 회원가입 불가
    //     if(isExist)
    //         return "Existed";
    //     //존재하지 않으면 회원가입
    //     else {
    //         User user = new User(userDto);
    //         userRepository.save(user);
    //         return "Success";
    //     }
    // }

    // public User loginUser(UserDto userDto){
    //     User user = userRepository.findByEmail(userDto.getEmail());
    //     if(user == null)
    //         return null;
    //     else return user;
    // }
}
