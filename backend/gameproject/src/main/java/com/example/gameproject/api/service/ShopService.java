package com.example.gameproject.api.service;

import java.util.*;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.gameproject.db.entity.Artifact;
import com.example.gameproject.db.entity.CharacterStat;
import com.example.gameproject.db.entity.DefaultCharacter;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.entity.UserArtifact;
import com.example.gameproject.db.repository.ArtifactRepository;
import com.example.gameproject.db.repository.CharacterStatRepository;
import com.example.gameproject.db.repository.DefaultCharacterRepository;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.SkillRepository;
import com.example.gameproject.db.repository.UserArtifactRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.request.ShopAddRequest;
import com.example.gameproject.dto.request.ShopChangeRequest;
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
	private final SkillRepository skillRepository;
	private final DefaultCharacterRepository defaultCharacterRepository;
	private final CharacterStatRepository characterStatRepository;

	//단순 영입 기능
	@Transactional
	public void addCharacter(String email, List<ShopAddRequest> characterList){
		long userId = userRepository.findByEmail(email).orElseThrow().getId();
		User user = userRepository.findById(userId).orElse(null);

		// 영입시 유물 효과 적용 - 먼저 내 유물리스트 뽑기
		List<Artifact> myArtifacts = new ArrayList<>();
		for (UserArtifact userArtifact : user.getUserArtifacts()) {
			myArtifacts.add(userArtifact.getArtifact());
		}

		//내캐릭터에 캐릭터 추가
		for(int i=0;i<characterList.size();i++) {
			ShopAddRequest character = characterList.get(i);
			DefaultCharacter defaultCharacter = defaultCharacterRepository.findBySubName(character.getSubClassName());
			CharacterStat characterStat = characterStatRepository.findByDefaultCharacterId(defaultCharacter.getId());
			//비어있는 pos번호를 캐릭터 정보에 추가해 저장
			int pos = 0;
			Set<Integer> posList = new LinkedHashSet<>(Arrays.asList(0,1,2));//pos값 초기화
			List<MyCharacter> existMycharacter = myCharacterRepository.findByUserId(userId);
			for(int j=0;j<existMycharacter.size();j++){
				posList.remove(existMycharacter.get(j).getPos());
			}
			Iterator iter = posList.iterator();
			if(iter.hasNext()) {
				pos = (int)iter.next();
			}
			MyCharacter myCharacter = MyCharacter.builder()
				.user(user)
				.defaultCharacter(defaultCharacter)
				.level(character.getLevel())//프론트에서 오는 캐릭터 데이터 값으로 저장
				.hp(character.getHp())
				.ad(character.getAd())
				.ap(character.getAp())
				.speed(character.getSpeed())
				.critical(character.getCritical())
				.avoid(character.getAvoid())
				.maxHp(character.getMaxHP())
				.pos(pos)
				.addHp(characterStat.getAddHp())//DB에 있는 캐릭터 데이터 값을 가져와 저장
				.addAd(characterStat.getAddAd())
				.addAp(characterStat.getAddAp())
				.addSpeed(characterStat.getAddSpeed())
				.addAvoid(characterStat.getAddAvoid())
				.addCritical(characterStat.getAddCritical())
				.statPoint((character.getLevel()-1)*5)
				.build();

			for (Artifact myArtifact : myArtifacts) {
				if (myArtifact.isRange() == true) {
					// 전체 효과 인경우
					System.out.println("전테 효과 스텟 : " + myArtifact.getStat());
					addStat(myCharacter, myArtifact.getStat(), myArtifact.getValue());
				} else if (myArtifact.getTargetClass().equals(myCharacter.getDefaultCharacter().getClassName())) {
					// 특정 클래스 효과인경우
					System.out.println("특정 효과 스텟 : " + myArtifact.getStat());
					addStat(myCharacter, myArtifact.getStat(), myArtifact.getValue());
				}
			}

			myCharacterRepository.save(myCharacter);

		}
	}

	//캐릭터 변경
	@Transactional
	public void changeCharacter(String email, List<ShopChangeRequest> characterList){
		long userId = userRepository.findByEmail(email).orElseThrow().getId();
		User user = userRepository.findById(userId).orElse(null);

		// 영입시 유물 효과 적용 - 먼저 내 유물리스트 뽑기
		List<Artifact> myArtifacts = new ArrayList<>();
		for (UserArtifact userArtifact : user.getUserArtifacts()) {
			myArtifacts.add(userArtifact.getArtifact());
		}

		//변경할 캐릭터 저장
		for(int i=0;i<characterList.size();i++) {
			ShopChangeRequest character = characterList.get(i);
			int pos = character.getPos();
			myCharacterRepository.findByUserIdAndPos(userId, pos);
			myCharacterRepository.deleteByUserIdAndPos(userId,pos);

			DefaultCharacter defaultCharacter = defaultCharacterRepository.findBySubName(character.getSubClassName());
			CharacterStat characterStat = characterStatRepository.findByDefaultCharacterId(defaultCharacter.getId());
			MyCharacter myCharacter = MyCharacter.builder()
				.user(user)
				.defaultCharacter(defaultCharacter)
				.level(character.getLevel())
				.hp(character.getHp())
				.ad(character.getAd())
				.ap(character.getAp())
				.speed(character.getSpeed())
				.critical(character.getCritical())
				.avoid(character.getAvoid())
				.maxHp(character.getMaxHP())
				.pos(character.getPos())
				.addHp(characterStat.getAddHp())
				.addAd(characterStat.getAddAd())
				.addAp(characterStat.getAddAp())
				.addSpeed(characterStat.getAddSpeed())
				.addAvoid(characterStat.getAddAvoid())
				.addCritical(characterStat.getAddCritical())
				.statPoint((character.getLevel()-1)*5)
				.build();

			for (Artifact myArtifact : myArtifacts) {
				if (myArtifact.isRange() == true) {
					// 전체 효과 인경우
					System.out.println("전테 효과 스텟 : " + myArtifact.getStat());
					addStat(myCharacter, myArtifact.getStat(), myArtifact.getValue());
				} else if (myArtifact.getTargetClass().equals(myCharacter.getDefaultCharacter().getClassName())) {
					// 특정 클래스 효과인경우
					System.out.println("특정 효과 스텟 : " + myArtifact.getStat());
					addStat(myCharacter, myArtifact.getStat(), myArtifact.getValue());
				}
			}

			myCharacterRepository.save(myCharacter);
		}
	}

	//휴식 기능
	@Transactional
	public void updateHp(String email){
		long userId = userRepository.findByEmail(email).orElseThrow().getId();
		List<MyCharacter> myCharacterList = myCharacterRepository.findAllByUser_Id(userId);
		for(int i=0; i<myCharacterList.size(); i++){
			MyCharacter myCharacter = myCharacterList.get(i);
			myCharacter.updateHP();
			myCharacterRepository.save(myCharacter);
		}
	}

	@Transactional
	public RelicResponse getRelic(String email){
		String [] className = {"x", "환경", "안보", "질병", "사회", "범죄", "인구", "경제"};
		Random random = new Random();
		random.setSeed(System.currentTimeMillis()); //시간에 따라 시드를 설정
		long userId = userRepository.findByEmail(email).orElseThrow().getId();
		User user = userRepository.findById(userId).orElse(null);
		List<Artifact> artifactList = artifactRepository.findByClass(className[user.getStage()]);
		List<UserArtifact> myUserArtifact = userArtifactRepository.findAllByUser_Id(userId);
		List<Artifact> myArtifact = new ArrayList<>();
		for (UserArtifact uaf : myUserArtifact) {
			myArtifact.add(uaf.getArtifact());
		}



		UserArtifact myPick = null;
		for (int i=0; i < 6; i++) {
			int idx = random.nextInt(6-i);// 0 ~ 5 랜덤으로 뽑기
			if (!myArtifact.contains(artifactList.get(idx))) {
				// 랜덤으로 뽑은 유물이 새 유물이라면
				myPick = new UserArtifact(user, artifactList.get(idx));
				userArtifactRepository.save(myPick);
				break;
			} else {
				artifactList.remove(idx);
			}
		}

		// 내 DB에 있는 케릭터들에게 유물 효과 적용 --
		List<MyCharacter> myCharacters = myCharacterRepository.getMyCharacters(userId);
		for (MyCharacter myCharacter : myCharacters) {
			if (myCharacter.getDefaultCharacter().getClassName().equals(myPick.getArtifact().getTargetClass())) {
				addStat(myCharacter, myPick.getArtifact().getStat(), myPick.getArtifact().getValue());
				myCharacterRepository.save(myCharacter);
			} else if (myPick.getArtifact().getTargetClass().equals("전체")) {
				addStat(myCharacter, myPick.getArtifact().getStat(), myPick.getArtifact().getValue());
				myCharacterRepository.save(myCharacter);
			}
		}

		RelicResponse res = new RelicResponse(myPick.getArtifact());
		return res;
	}

	// 효과 적용 함수
	// 효과 적용이기 떄문에 저장하지는 않음
	public void addStat(MyCharacter myCharacter, String stat, int value) {
		if (stat.equals("hp")) {
			myCharacter.addHp(value);
			// 유물효과 적용할때 maxHp도 늘려줌
			myCharacter.addMaxHp(value);
		} else if (stat.equals(("ad"))) {
			myCharacter.addAd(value);
		} else if (stat.equals(("ap"))) {
			myCharacter.addAp(value);
		} else if (stat.equals(("speed"))) {
			myCharacter.addSpeed(value);
		} else if (stat.equals(("avoid"))) {
			myCharacter.addAvoid(value);
		} else {
			// critical
			myCharacter.addCritical(value);
		}
	}
}
