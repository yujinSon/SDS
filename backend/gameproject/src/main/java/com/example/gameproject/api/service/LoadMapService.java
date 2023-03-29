package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.Map;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.MapRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.request.MapSaveRequest;
import com.example.gameproject.dto.response.LoadMapDto;
import com.example.gameproject.dto.response.MapDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LoadMapService {

    @Autowired
    MapRepository mapRepository;

    @Autowired
    UserRepository userRepository;

    public LoadMapDto LoadMap(Long userId) {
        User user = userRepository.findById(userId).orElse(new User());

        int myStage = user.getStage();
        int myStep = user.getSubStage();
        List<Map> myMapList = mapRepository.getMyMap(myStage, myStep);
        LoadMapDto res = new LoadMapDto(myMapList, user);

        return res;

    }

    @Transactional
    public void saveMapStatus(long userId, MapSaveRequest mapSaveRequest){
        User user = userRepository.findById(userId).orElse(null);
        System.out.println("stage : "+ user.getNowStage()+"subStage : " + user.getNowSubStage());
        user.changeNowMap(mapSaveRequest);
        System.out.println("stage1 : "+ user.getNowStage()+"subStage1 : " + user.getNowSubStage());
        userRepository.save(user);
        User user2 = userRepository.findById(userId).orElse(null);
        System.out.println("stage2 : "+ user2.getNowStage()+"subStage2 : " + user2.getNowSubStage());

    }
}
