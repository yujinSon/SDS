package com.example.gameproject.auth;

import com.example.gameproject.auth.userInfo.OAuth2UserInfo;
import com.example.gameproject.db.entity.Role;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PrincipalOauth2UserService extends DefaultOAuth2UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        System.out.println(111111);
        System.out.println(userRequest.getAccessToken());
        OAuth2User oAuth2User = super.loadUser(userRequest);
        System.out.println(oAuth2User);
        OAuth2UserInfo oAuth2UserInfo = null;
        String provider = userRequest.getClientRegistration().getRegistrationId();

//        if(provider.equals("google")){
//            oAuth2UserInfo = new GoogleUserInfo(oAuth2User.getAttributes());
//        }
//        else if(provider.equals("naver")){
//            oAuth2UserInfo = new NaverUserInfo(oAuth2User.getAttributes());
//        }
        if(provider.equals("kakao")){	//추가
            oAuth2UserInfo = new KakaoUserInfo(oAuth2User.getAttributes());
        }

        String providerId = oAuth2UserInfo.getProviderId();
        String username = provider+"_"+providerId;

        String uuid = UUID.randomUUID().toString().substring(0, 6);
        String password = bCryptPasswordEncoder.encode("패스워드"+uuid);

        String email = oAuth2UserInfo.getEmail();
        Role role = Role.ROLE_USER;

        User byUsername = userRepository.findByUsername(username);
        //DB에 없는 사용자라면 회원가입처리
        if(byUsername == null){
            byUsername = User.oauth2Register()
                    .username(username).password(password).email(email).role(role)
                    .provider(provider).providerId(providerId)
                    .build();
            userRepository.save(byUsername);
        }

        return new PrincipalDetails(byUsername, oAuth2UserInfo);
    }
}