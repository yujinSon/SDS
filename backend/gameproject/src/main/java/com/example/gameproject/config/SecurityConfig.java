package com.example.gameproject.config;

import com.example.gameproject.auth.PrincipalOauth2UserService;
import com.example.gameproject.security.jwt.JwtAuthenticationFilter;
import com.example.gameproject.security.jwt.JwtTokenProvider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;

// @Configuration
@RequiredArgsConstructor
@EnableWebSecurity  //Spring Security 설정 활성화
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    // @Autowired
    // private PrincipalOauth2UserService principalOauth2UserService;

//     @Override
//     protected void configure(HttpSecurity http) throws Exception {
//         http.csrf().disable();
//         http.authorizeRequests()
// //                .antMatchers("/admin/**").hasRole("ROLE_ADMIN")
//                 .anyRequest().permitAll()
//                 .and()
//                 .logout()
//                 .logoutSuccessUrl("/") // 로그아웃 시 해당 URL로 돌아간다.
//                 .and()					//추가
//                 .oauth2Login()				// OAuth2기반의 로그인인 경우
// //                .loginPage("/loginForm")		// 인증이 필요한 URL에 접근하면 /loginForm으로 이동
//                 .defaultSuccessUrl("https://j8a303.p.ssafy.io/api/oauth/loginInfo") // 로그인에 성공했을 때 URL을 직접 넣어줌으로써 해결함
// //                .failureUrl("/joinForm")		// 로그인 실패 시 /loginForm으로 이동
//                 .userInfoEndpoint()			// 로그인 성공 후 사용자정보를 가져온다.
//                 .userService(principalOauth2UserService);	//사용자정보를 처리할 때 사용한다
//     }

    private final JwtTokenProvider jwtTokenProvider;

    //암호화에 필요한 PasswordEncoder Bean 등록
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    //authenticationManager Bean 등록
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            //h2 콘솔 사용
            .csrf().disable().headers().frameOptions().disable()
            .and()

            //세션 사용 안함
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()

            //URL 관리
            .authorizeRequests()
            .antMatchers("/api/users/join", "/api/users/login").permitAll()
            .anyRequest().authenticated()
            .and()

            // JwtAuthenticationFilter를 먼저 적용
            .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
    }

}
