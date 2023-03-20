package com.example.gameproject.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PutMapping;

import com.example.gameproject.db.entity.Artifact;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.entity.UserArtifact;
import com.example.gameproject.db.entity.Vo.MyCharacterVo;
import com.example.gameproject.db.repository.ArtifactRepository;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.UserArtifactRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.response.RelicResponse;

import lombok.Builder;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Builder
public class ShopService {

	private final MyCharacterRepository myCharacterRepository;
	private final ArtifactRepository artifactRepository;
	private final UserArtifactRepository userArtifactRepository;
	private final UserRepository userRepository;

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

	@Transactional
	public RelicResponse getRelic(long userId){
		Random random = new Random();
		random.setSeed(System.currentTimeMillis());
		List<Artifact> artifactList = artifactRepository.findAll();
		List<UserArtifact> relicList = userArtifactRepository.findAllByUser_Id(userId);
		List<Long> numberList = new ArrayList<>();
		for(int i=0;i<artifactList.size();i++){
			numberList.add(artifactList.get(i).getId());
		}

		for(int i =0;i<numberList.size();i++){
			for(int j=0;j<relicList.size();j++){
				if(numberList.get(i) == relicList.get(j).getArtifact().getId()){
					numberList.remove(i);
				}
			}
		}

		System.out.println("숫자배열리스트 : ");
		for(int i=0;i<numberList.size();i++){
			System.out.print(numberList.get(i));
		}
		if(numberList.size()==0) return null;

		int bound = numberList.size()-1;
		long value = random.nextInt(bound)+1;
		numberList.remove(Long.valueOf(value));

		// System.out.println("list size() : "+relicList.size());
		// if(relicList.size()>0) {
		// 	for (int i = 0; i < relicList.size(); i++) {
		// 		if (value == relicList.get(i).getArtifact().getId()) {
		// 			value = random.nextInt(bound) + 1;
		// 			i = -1;
		// 		}
		// 	}
		// }

		System.out.println("value : " + value);

		// 중계 테이블에 artifact 저장
		UserArtifact userArtifact = UserArtifact.builder()
			.user(userRepository.findById(userId).orElse(null))
			.artifact(artifactRepository.findById(value).orElse(null))
			.build();
		userArtifactRepository.save(userArtifact);
		//output 데이터 형식으로 저장
		Artifact artifact = artifactRepository.findById(value).orElse(null);
		RelicResponse result = null;
		if(artifact!=null) {
			RelicResponse relic = RelicResponse.builder()
				.name(artifact.getName())
				.isRange(artifact.isRange())
				.targetClass(artifact.getTargetClass())
				.stat(artifact.getStat())
				.value(artifact.getValue())
				.build();
			result = relic;
		}
		return result;
	}
}
