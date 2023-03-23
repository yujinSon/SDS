package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.Map;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.MapRepository;
import com.example.gameproject.db.repository.UserRepository;
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

    public List<LoadMapDto> LoadMap(Long userId) {
        List<LoadMapDto> res = new ArrayList<>();
        User user = userRepository.findById(userId).orElse(new User());

        int myStage = user.getStage();
        int myStep = user.getSubStage();
        List<Map> myMapList = mapRepository.getMyMap(myStage, myStep);
        res.add(new LoadMapDto(myMapList, user));

        return res;

    }

}
