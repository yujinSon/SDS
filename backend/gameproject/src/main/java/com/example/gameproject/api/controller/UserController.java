package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.UserService;
import com.example.gameproject.auth.PrincipalDetails;
import com.example.gameproject.db.entity.Role;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.request.UserDto;
import com.example.gameproject.dto.response.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
//@RequestMapping("/api")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


//    @GetMapping("/loginForm")
//    public String loginForm(){
//        return "login";
//    }

    @GetMapping("/joinForm")
    public String joinForm(){
        return "join";
    }

//    @PostMapping("/join")
//    public String join(@ModelAttribute User user){
//        user.setRole(Role.ROLE_USER);
//
//        String encodePwd = bCryptPasswordEncoder.encode(user.getPassword());
//        user.setPassword(encodePwd);
//
//        userRepository.save(user);  //반드시 패스워드 암호화해야함
//        return "redirect:/loginForm";
//    }

//    @GetMapping("/user")
//    @ResponseBody
//    public String user(){
//        return "user";
//    }
//
//    @GetMapping("/manager")
//    @ResponseBody
//    public String manager(){
//        return "manager";
//    }
//
//    @GetMapping("/admin")
//    @ResponseBody
//    public String admin(){
//        return "admin";
//    }



//    // 로컬 로그인의 경우에만 해당
//    @GetMapping("/form/loginInfo")
//    @ResponseBody
//    public String formLoginInfo(Authentication authentication, @AuthenticationPrincipal PrincipalDetails principalDetails){
//
//        PrincipalDetails principal = (PrincipalDetails) authentication.getPrincipal();
//        User user = principal.getUser();
//        System.out.println(user);
//        //User(id=2, username=11, password=$2a$10$m/1Alpm180jjsBpYReeml.AzvGlx/Djg4Z9/JDZYz8TJF1qUKd1fW, email=11@11, role=ROLE_USER, createTime=2022-01-30 19:07:43.213, provider=null, providerId=null)
//
//        User user1 = principalDetails.getUser();
//        System.out.println(user1);
//        //User(id=2, username=11, password=$2a$10$m/1Alpm180jjsBpYReeml.AzvGlx/Djg4Z9/JDZYz8TJF1qUKd1fW, email=11@11, role=ROLE_USER, createTime=2022-01-30 19:07:43.213, provider=null, providerId=null)
//        //user == user1
//
//        return user.toString();
//    }


    @GetMapping("/oauth/loginInfo")
    @ResponseBody
    public String oauthLoginInfo(Authentication authentication, @AuthenticationPrincipal OAuth2User oAuth2UserPrincipal){
        String s = authentication.getName();
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        System.out.println(oAuth2User.getName());
        Map<String, Object> attributes = oAuth2User.getAttributes();
        System.out.println(attributes);
        System.out.println(oAuth2User.getAuthorities());
        // PrincipalOauth2UserService의 getAttributes내용과 같음

        Map<String, Object> attributes1 = oAuth2UserPrincipal.getAttributes();
        // attributes == attributes1

//        return attributes.toString();     //세션에 담긴 user가져올 수 있음음
        return s;
    }


    @GetMapping("/loginInfo")
    @ResponseBody
    public String loginInfo(Authentication authentication, @AuthenticationPrincipal PrincipalDetails principalDetails){
        String result = "";

        PrincipalDetails principal = (PrincipalDetails) authentication.getPrincipal();
        if(principal.getUser().getProvider() == null) {
            result = result + "Form 로그인 : " + principal;
        }else{
            result = result + "OAuth2 로그인 : " + principal;
        }
        return result;
    }

    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody UserDto userDto){
        System.out.println(userDto.getEmail());
        String result = userService.registerUser(userDto);
        if(result.equals("Existed"))
            return ResponseEntity.status(400).body("FAIL");
        else
            return ResponseEntity.status(200).body("OK");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDto userDto){
        User user = userService.loginUser(userDto);
        LoginDto loginDto = LoginDto.builder().email(user.getEmail()).build();
        if(user == null)
            return ResponseEntity.status(400).body("Fail");
        else
            return ResponseEntity.status(200).body(loginDto);
    }

    @GetMapping("/relic")
    public ResponseEntity<?> myRelics(){
        long userId = 1l;
        List<Long> res = userService.getMyRelic(userId);
        return ResponseEntity.status(200).body(res);
    }

    @PostMapping("/newgame")
    public ResponseEntity<?> newgame(){
        long userId = 1l;
        userService.reStart(userId);
        return ResponseEntity.status(200).body("ok");
    }
}
