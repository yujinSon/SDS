package com.example.gameproject.db.entity;

import com.example.gameproject.dto.request.UserDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import com.example.gameproject.dto.request.MapSaveRequest;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;

@Entity
@Getter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    @Setter
    private String password;

    @Enumerated(EnumType.STRING)
    @Setter
    private Role role;

    @CreationTimestamp  //자동으로 만들어준다
    private Timestamp createTime;
    private String provider;    // oauth2를 이용할 경우 어떤 플랫폼을 이용하는지
    private String providerId;

    private int bestScore;
    private int stage;
    private int subStage;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<MyCharacter> myCharacters = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserArtifact> userArtifacts = new ArrayList<>();

    public void gameOverUpdate(){
        this.stage = 1;
        this.subStage = 1;
    }

    public void stageUpdate(int stage, int subStage) {
        this.stage = stage;
        this.subStage = subStage;
    }


    public void reGame() {
        this.stage = 1;
        this.subStage = 1;
    }

    public void gameWin() {
        if (this.subStage == 4) {
            this.subStage = 1;
            this.stage += 1;
        } else {
            this.subStage += 1;
        }
    }


    @Builder(builderClassName = "UserDetailRegister", builderMethodName = "userDetailRegister")
    public User(String username, String password, String email, Role role) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    @Builder(builderClassName = "OAuth2Register", builderMethodName = "oauth2Register")
    public User(String username, String password, String email, Role role, String provider, String providerId) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        this.provider = provider;
        this.providerId = providerId;
    }

    @Builder
    public User(UserDto userDto){
        this.email = userDto.getEmail();
    }



}
