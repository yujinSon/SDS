package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.UserService;
import com.example.gameproject.dto.request.UserDto;
import com.example.gameproject.dto.response.UserResponse;
import com.example.gameproject.security.jwt.JwtTokenProvider;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;

    // 회원가입 API
    @PostMapping("/join")
    public ResponseEntity<String> join(@Valid @RequestBody UserDto userDto) {
        userService.join(userDto);
        return ResponseEntity.status(200).body("Join success");
    }

    // 로그인 API
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto userDto) {
        UserResponse token = userService.login(userDto);
        if(token == null)
            return ResponseEntity.status(400).body("Fail");
        else {
            System.out.println("token : "+token.toString());
            return ResponseEntity.status(200).body(token);
        }
    }

    @GetMapping("/relic")
    public ResponseEntity<?> myRelics(@RequestHeader String Authorization){
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        List<Long> res = userService.getMyRelic(email);
        return ResponseEntity.status(200).body(res);
    }
    @PostMapping("/newgame")
    public ResponseEntity<?> newgame(@RequestHeader String Authorization){
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        userService.reStart(email);
        return ResponseEntity.status(200).body("ok");
    }
}
