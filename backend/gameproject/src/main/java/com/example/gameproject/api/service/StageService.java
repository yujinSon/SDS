package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.dto.response.MyCharacterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@Transactional(readOnly = true)
public class StageService {

    @Autowired
    private MyCharacterRepository myCharacterRepository;


    public List<MyCharacter> BalttleSetting(int stage, int step){
        // 캐릭터 객체 받기
        int userId = 2; // 나중에 로그인 구현시 바꿔줘야될 부분
        List<MyCharacter> myCharacter = myCharacterRepository.getMyCharacters(userId);

        return myCharacter;
    }


}
