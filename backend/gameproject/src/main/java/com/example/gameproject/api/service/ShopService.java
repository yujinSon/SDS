package com.example.gameproject.api.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;
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
		random.setSeed(System.currentTimeMillis()); //시간에 따라 시드를 설정

		List<Artifact> artifactList = artifactRepository.findAll();
		List<UserArtifact> relicList = userArtifactRepository.findAllByUser_Id(userId);
		// numberList에 모든 유물 번호 저장(api 여러번 호출하면 중복되니까 set사용)
		Set<Long> numberList = new LinkedHashSet<>();
		for(int i=0;i<artifactList.size();i++){
			numberList.add(artifactList.get(i).getId());
		}

		//numberLsit에 내 유물 리스트에 존재하는 유물은 삭제
		for(int i =0;i<numberList.size();i++){
			for(int j=0;j<relicList.size();j++){
				long existValue = relicList.get(j).getArtifact().getId();
				if(numberList.contains(existValue)){
					numberList.remove(existValue);
				}
			}
		}

		//추가할 수 있는 유물이 없으면 null 리턴
		if(numberList.size()==0) return null;

		int bound = numberList.size();
		int value = random.nextInt(bound);//bound가 6이면 0~5까지만 랜덤으로 나온다

		System.out.println("value : "+ value);
		Object[] arrayList = numberList.toArray();
		long pos = (long) arrayList[value];

		System.out.println("arrayList : "+ arrayList.length+"value : " + value);

		// 중계 테이블에 artifact 저장
		UserArtifact userArtifact = UserArtifact.builder()
			.user(userRepository.findById(userId).orElse(null))
			.artifact(artifactRepository.findById(pos).orElse(null))
			.build();
		userArtifactRepository.save(userArtifact);

		//output 데이터 형식으로 저장
		Artifact artifact = artifactRepository.findById(pos).orElse(null);
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
