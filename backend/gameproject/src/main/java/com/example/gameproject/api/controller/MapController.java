package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.LoadMapService;
import com.example.gameproject.dto.response.LoadMapDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/map")
public class MapController {

    @Autowired
    private LoadMapService loadMapService;

    @GetMapping(value = "/load")
    public ResponseEntity<?> getMyMap() throws Exception {
        Long userId = 1L; // 유저 아이디 가져와야함.
        List<LoadMapDto> res = loadMapService.LoadMap(userId);
        return ResponseEntity.ok(res);
    }
}
