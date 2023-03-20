package com.example.gameproject.api.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.gameproject.db.entity.Artifact;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Vo.MyCharacterVo;
import com.example.gameproject.db.repository.ArtifactRepository;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.dto.response.RelicResponse;

import lombok.Builder;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Builder
public class ShopService {

	private final MyCharacterRepository myCharacterRepository;
	private final ArtifactRepository artifactRepository;

	// //영입기능
	// @Transactional
	// public void addCharacter(long userId){
	//
	// }

	//휴식 기능
	@Transactional
	public void updateHp(long userId){
		List<MyCharacter> myCharacterList = myCharacterRepository.findAllByUser_Id(userId);
		for(int i=0; i<myCharacterList.size(); i++){
			MyCharacter myCharacter = myCharacterList.get(i);
			myCharacter.updateHP();
			myCharacterRepository.save(myCharacter);
		}
	}

	// @Transactional
	// public RelicResponse getRelic(long userId){
	// 	long number = (long)Math.random()*20;
	// 	Artifact artifact = artifactRepository.findById(number).orElse(null);
	// 	RelicResponse relic = ;
	// 	return relic;
	// }
}
