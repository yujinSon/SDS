package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.entity.UserArtifact;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.UserArtifactRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.request.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserArtifactRepository userArtifactRepository;

    @Autowired
    MyCharacterRepository myCharacterRepository;

    public String registerUser(UserDto userDto){
        boolean isExist = userRepository.existsByEmail(userDto.getEmail());
        //존재한다면 회원가입 불가
        if(isExist)
            return "Existed";
        //존재하지 않으면 회원가입
        else {
            User user = new User(userDto);
            userRepository.save(user);
            return "Success";
        }
    }

    public User loginUser(UserDto userDto){
        User user = userRepository.findByEmail(userDto.getEmail());
        if(user == null)
            return null;
        else return user;
    }

    public List<Long> getMyRelic(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        List<UserArtifact> myArtifact = userArtifactRepository.findAllByUser_Id(userId);
        List<Long> res = new ArrayList<>();
        for (UserArtifact uaf : myArtifact) {
            res.add(uaf.getArtifact().getId());
        }
        return res;

    }


    @Transactional
    public void reStart(long userId) {
        User user = userRepository.getById(userId);

        // 마이캐릭터 삭제
        List<MyCharacter> myCharacters = myCharacterRepository.getMyCharacters(userId);
        for (MyCharacter mch : myCharacters) {
            myCharacterRepository.delete(mch);
        }

        // 스테이지 1 - 1 로 초기화
        user.reGame();
        userRepository.save(user);
    }
}
