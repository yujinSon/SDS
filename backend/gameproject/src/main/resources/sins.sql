-- user --  
INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('1', '200', 'asd@naver.com', '고병진', '1', '1', 'fdgdf');
INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('2', '200', 'asd@naver.com', '손민혁', '1', '1', 'fdgdf');
INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('3', '100', 'afffff@naver.com', '박용찬', '1', '1', 'fdgdf');
INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('4', '110', 'asadd@naver.com', '손유진', '1', '1', 'fsadas');

-- 환경 (힐 위주의 계열)--
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('1', '80', '18', '10', '5', '5', '5', '5', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('2', '80', '18', '10', '5', '5', '5', '5', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('1', '환경', '환경운동가 유진', '1');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('2', '환경', '환경지킴이 유진', '2');
UPDATE `sins`.`character_stat` SET `character_id` = '1' WHERE (`id` = '1');
UPDATE `sins`.`character_stat` SET `character_id` = '2' WHERE (`id` = '2');


-- 안보 (ad가 중점으로 둔 기준치)--
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('3', '40', '10', '70', '9', '5', '5', '5', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('4', '40', '10', '60', '9', '5', '5', '15', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('3', '안보', '안보전문가 용찬', '3');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('4', '안보', '군인 용찬', '4');
UPDATE `sins`.`character_stat` SET `character_id` = '3' WHERE (`id` = '3');
UPDATE `sins`.`character_stat` SET `character_id` = '4' WHERE (`id` = '4');

-- 질병 (buff를 중점으로 둔다.)--
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('5', '70', '15', '5', '5', '50', '7', '5', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('6', '70', '15', '5', '5', '50', '7', '5', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('5', '질병', '질병관리자 민수', '5');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('6', '질병', '질병전문가 민수', '6');
UPDATE `sins`.`character_stat` SET `character_id` = '5' WHERE (`id` = '5');
UPDATE `sins`.`character_stat` SET `character_id` = '6' WHERE (`id` = '6');

-- 사회 (회피에 중점을 둔다.)--
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('7', '30', '7', '5', '5', '90', '10', '5', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('8', '30', '7', '5', '5', '90', '10', '5', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('7', '사회', '사회전문가 정빈', '7');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('8', '사회', '사회학 교수 정빈', '8');
UPDATE `sins`.`character_stat` SET `character_id` = '7' WHERE (`id` = '7');
UPDATE `sins`.`character_stat` SET `character_id` = '8' WHERE (`id` = '8');

-- 범죄 (크리티컬에 중점을 둔다.)--
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('9', '40', '5', '70', '15', '5', '5', '15', '6', '5', '1', '0', '1');
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('10', '40', '5', '70', '15', '5', '5', '15', '6', '5', '1', '0', '1');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('9', '범죄', '경찰관 병진', '9');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('10', '범죄', '프로파일러 병진', '10');
UPDATE `sins`.`character_stat` SET `character_id` = '9' WHERE (`id` = '9');
UPDATE `sins`.`character_stat` SET `character_id` = '10' WHERE (`id` = '10');

-- 인구 (hp에 중점을 둔다.)--
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('11', '70', '7', '10', '7', '10', '5', '5', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('12', '70', '7', '10', '7', '10', '5', '5', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('11', '인구', '인류애 민혁', '11');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('12', '인구', '생명지킴이 민혁', '12');
UPDATE `sins`.`character_stat` SET `character_id` = '11' WHERE (`id` = '11');
UPDATE `sins`.`character_stat` SET `character_id` = '12' WHERE (`id` = '12');

-- 경제 (ap에 중점을 둔다.)--
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('13', '50', '5', '60', '20', '40', '20', '5', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`character_stat` (`id`, `hp`, `add_hp`, `ad`, `add_ad`, `ap`, `add_ap`, `speed`, `add_speed`, `avoid`, `add_avoid`, `critical`, `add_critical`) VALUES ('14', '50', '5', '60', '20', '40', '20', '5', '3', '5', '1', '0', '1');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('13', '경제', '경제전문가 기성', '13');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('14', '경제', '경제학교수 기성', '14');
UPDATE `sins`.`character_stat` SET `character_id` = '13' WHERE (`id` = '13');
UPDATE `sins`.`character_stat` SET `character_id` = '14' WHERE (`id` = '14');

-- 빌런들 --
-- 보스 --
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('1', '10', '0', '50', '환경', '0', '150', 1, '150', '10', '지구온난화');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('2', '60', '0', '12', '안보', '25', '180', 1, '180', '20', '핵(Nuclear)');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('3', '40', '0', '14', '질병', '9', '250', 1, '250', '30', '코로나');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('4', '70', '0', '16', '사회', '0', '600', 1, '600', '20', '음주운전');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('5', '150', '0', '0', '범죄', '11', '500', 1, '500', '50', '살인');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('6', '10', '0', '20', '인구', '0', '900', 1, '900', '5', '저출산');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('7', '80', '0', '22', '경제', '40', '700', 1, '700', '70', '저성장');

-- 쫄따구 --
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('8', '15', '0', '5', '환경', '0', '50', 0, '50', '5', '수질오염');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('9', '12', '0', '5', '환경', '0', '60', 0, '60', '5', '대기오염');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('10', '10', '0', '5', '환경', '0', '70', 0, '70', '5', '토양오염');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('11', '10', '0', '5', '안보', '10', '80', 0, '80', '7', '탱크');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('12', '10', '0', '5', '안보', '10', '100', 0, '100', '7', '무인기');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('13', '10', '0', '5', '안보', '10', '120', 0, '120', '7', '총');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('14', '10', '0', '5', '질병', '0', '110', 0, '110', '13', '메르스');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('15', '10', '0', '5', '질병', '0', '120', 0, '120', '13', '콜레라');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('16', '10', '0', '5', '질병', '0', '140', 0, '140', '13', '조류독감');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('17', '10', '0', '30', '사회', '0', '200', 0, '200', '16', '인종차별');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('18', '10', '0', '25', '사회', '0', '240', 0, '240', '16', '알콜중독');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('19', '10', '0', '20', '사회', '0', '280', 0, '280', '16', '사기');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('20', '10', '0', '5', '범죄', '5', '170', 0, '170', '19', '학교폭력');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('21', '10', '0', '5', '범죄', '5', '190', 0, '190', '19', '마약');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('22', '10', '0', '5', '범죄', '5', '210', 0, '210', '19', '도박');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('23', '10', '0', '5', '인구', '10', '350', 0, '350', '10', '노령화');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('24', '10', '0', '5', '인구', '10', '400', 0, '400', '10', '재정 악화');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('25', '10', '0', '5', '인구', '10', '450', 0, '450', '10', '과도한 노동');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('26', '10', '0', '5', '경제', '10', '380', 0, '380', '40', '경제 불균형');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('27', '10', '0', '5', '경제', '10', '430', 0, '430', '35', '고용 불안');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('28', '10', '0', '5', '경제', '10', '480', 0, '480', '30', '의욕 상실');

-- 유뭃 (21개) --
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('1', 0, '분리수거', 'hp', '환경', '600');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('2', 0, '전기차', 'hp', '환경', '600');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('3', 1, '다회용품', 'hp', '환경', '300');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('4', 0, '전쟁의 아픔', 'ad', '안보', '100');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('5', 0, '군사훈련', 'ad', '안보', '100');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('6', 1, '역사의식', 'hp', '안보', '50');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('7', 0, '마스크', 'hp', '질병', '600');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('8', 0, '질병관리본부', 'ap', '질병', '80');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('9', 1, '백신', 'hp', '질병', '300');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('10', 0, '안전모', 'ap', '사회', '150');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('11', 0, '차별금지', 'ap', '사회', '150');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('12', 1, '공공예절', 'ap', '사회', '80');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('13', 0, '소년원', 'ad', '범죄', '100');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('14', 0, '네티켓', 'speed', '범죄', '80');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('15', 1, '법전', 'speed', '범죄', '40');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('16', 0, '어린이집', 'hp', '인구', '300');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('17', 0, '육아휴직', 'critical', '인구', '20');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('18', 1, '정규직 채용', 'critical', '인구', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('19', 0, '청년', 'ad', '경제', '150');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('20', 0, '시간', 'ap', '경제', '230');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('21', 1, '중소기업', 'avoid', '경제', '5');

-- 전체 유물 (3개) --
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('22', 1, '3팀의 가호', 'avoid', '전체', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('23', 1, 'SSAFY 명찰', 'critical', '전체', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('24', 1, '7전 8기', 'hp', '전체', '1000');

-- 스킬 --
-- 캐릭터 스킬 --
-- 환경 -----------------------------------------------------------------------------------------------------------------------------------------------`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('1', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('2', 'hp', '0', '0', 'hp', 0, '양치컵 사용', '1', '1', '50', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('3', 'avoid', '6', '3', 'hp', 0, '세탁망 사용', '2', '1', '5', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('4', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('5', 'hp', '3', '0', 'hp', 0, '지하철 이용', '1', '1', '200', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('6', 'speed', '4', '2', 'hp', 1, '버스 이용', '2', '1', '10', '2');
-- 안보 -----------------------------------------------------------------------------------------------------------------------------------------------`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('7', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('8', 'ad', '6', '2', 'ad', 0, '안보의식 향상', '1', '1', '100', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('9', 'hp', '3', '0', 'ad', 0, '정보 보호 강화', '2', '0', '200', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('10', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('11', 'hp', '8', '0', 'ad', 0, '간첩 신고', '1', '0', '400', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('12', 'hp', '8', '0', 'ad', 1, '관련 기술혁신', '2', '0', '70', '4');
-- 질병 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('13', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('14', 'hp', '7', '0', 'ap', 1, '손 씻기', '1', '1', '150', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('15', 'hp', '2', '0', 'maxHp', 0, '마스크 착용', '2', '1', '80', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('16', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('17', 'hp', '3', '0', 'maxHp', 0, '익힌 음식 먹기', '1', '1', '100', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('18', 'hp', '2', '0', 'ap', 0, '예방 접종', '2', '0', '200', '6');
-- 사회 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('19', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('20', 'hp', '4', '0', 'ap', 0, '가벼운 운동', '1', '0', '300', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('21', 'ap', '4', '3', 'ap', 0, '소화기 사용법 숙지', '2', '1', '50', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('22', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '8');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('23', 'speed', '2', '2', 'ap', 0, '안전밸트 착용', '1', '1', '20', '8');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('24', 'hp', '6', '0', 'ap', 1, '정속 주행', '2', '0', '100', '8');
-- 범죄 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('25', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('26', 'hp', '2', '0', 'ad', 0, '개인 보안 강화', '1', '0', '180', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('27', 'ad', '10', '2', 'ad', 0, '올바른 신고정신', '2', '1', '250', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('28', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '10');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('29', 'hp', '5', '0', 'ad', 0, '범죄 예방교육', '1', '0', '300', '10');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('30', 'ad', '10', '2', 'ad', 1, '올바른 시민 의식 강화', '2', '1', '60', '10');

-- 인구 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('31', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('32', 'critical', '3', '1', 'hp', 1, '경각심 가지기', '1', '1', '2', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('33', 'hp', '0', '0', 'hp', 0, '관련 제도 확인', '2', '1', '50', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('34', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '12');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('35', 'avoid', '6', '2', 'hp', 0, '결혼 문화의 변화 인식', '1', '1', '5', '12');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('36', 'hp', '8', '0', 'maxHp', 1, '어린이집 지원', '2', '1', '50', '12');

-- 경제 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('37', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('38', 'ad', '5', '2', 'ap', 0, '지역상점 이용', '1', '1', '100', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('39', 'hp', '3', '0', 'ap', 0, '자기계발', '2', '0', '250', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('40', 'hp', '0', '0', 'ad', 0, '일반 공격', '0', '0', '100', '14');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('41', 'hp', '3', '0', 'ad', 0, '선거참여', '1', '0', '180', '14');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('42', 'ap', '5', '2', 'ad', 0, '직원 복지 개선', '2', '1', '100', '14');

-- 보스 스킬 --
-- 환경 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('43', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '10', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('44', 'hp', '0', '0', 'maxhp1', 1, '이산화탄소 배출', '3', '0', '20', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('45', 'hp', '0', '0', 'maxhp1', 0, '해수면 상승', '3', '1', '20', '1');

-- 안보 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('46', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '60', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('47', 'ad', '0', '2', 'maxhp1', 1, '핵 개발', '3', '1', '10', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('48', 'hp', '0', '0', 'maxhp1', 1, '국가 도발', '3', '1', '30', '2');
-- 질병 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('49', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '40', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('50', 'ad', '0', '4', 'maxhp1', 1, '감염 4', '3', '1', '20', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('51', 'hp', '0', '0', 'maxhp1', 0, '집단 감염', '3', '0', '50', '3');
-- 사회 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('52', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '70', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('53', 'hp', '0', '0', 'maxhp1', 0, '무분별한 공격', '3', '1', '100', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('54', 'hp', '0', '0', 'maxhp1', 0, '음주사고', '3', '1', '130', '4');
-- 범죄 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('55', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '150', '5');
-- INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('56', 'hp', '0', '0', 'maxhp1', 0, '칼 찌르기', '3', '0', '200', '5');
-- INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('57', 'hp', '0', '0', 'maxhp1', 0, '준비하기', '3', '0', '300', '5');
-- 인구 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('58', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '10', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('59', 'hp', '0', '0', 'maxhp1', 0, '인구감소', '3', '1', '9999', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('60', 'hp', '0', '0', 'maxhp1', 0, '비혼', '3', '0', '50', '6');
-- 경제 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('61', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '80', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('62', 'hp', '0', '0', 'maxhp1', 1, '은행 파산', '3', '1', '150', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('63', 'hp', '0', '0', 'maxhp1', 1, '주가 하락', '3', '1', '250', '7');

-- 쫄다구 스킬 --
-- 환경 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('64', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '15', '8');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('65', 'hp', '0', '0', 'maxhp1', 0, '폐수 배출', '3', '0', '20', '8');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('66', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '12', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('67', 'hp', '0', '0', 'maxhp1', 1, '미세먼지 발포', '3', '0', '5', '9');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('68', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '10', '10');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('69', 'hp', '0', '0', 'maxhp1', 1, '폐기물 매립', '3', '1', '5', '10');

-- 안보 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('70', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '15', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('71', 'hp', '0', '0', 'maxhp1', 1, '광역 포격', '3', '1', '10', '11');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('72', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '20', '12');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('73', 'hp', '0', '0', 'maxhp1', 1, '정찰', '3', '0', '10', '12');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('74', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '25', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('75', 'hp', '0', '0', 'maxhp1', 1, '수류탄 투척', '3', '1', '10', '13');


-- 질병 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('76', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '15', '14');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('77', 'ad', '0', '3', 'maxhp1', 1, '감염 1', '3', '1', '5', '14');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('78', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '15', '15');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('79', 'ad', '0', '3', 'maxhp1', 1, '감염 2', '3', '1', '5', '15');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('80', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '10', '16');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('81', 'ad', '0', '3', 'maxhp1', 1, '감염 3', '3', '1', '5', '16');

-- 사회 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('82', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '30', '17');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('83', 'hp', '0', '0', 'maxhp1', 0, '동양인 차별', '3', '1', '30', '17');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('84', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '30', '18');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('85', 'hp', '0', '0', 'maxhp1', 0, '알코올 섭취', '3', '1', '30', '18');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('86', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '30', '19');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('87', 'hp', '0', '0', 'maxhp1', 0, '갈취', '3', '1', '30', '19');

-- 범죄 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('88', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '60', '20');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('89', 'hp', '0', '0', 'maxhp1', 0, '고데기', '3', '1', '100', '20');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('90', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '55', '21');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('91', 'speed', '0', '2', 'maxhp1', 1, '마약뿌리기', '3', '1', '20', '21');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('92', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '60', '22');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('93', 'hp', '0', '0', 'maxhp1', 0, '도박질하기', '3', '1', '100', '22');


-- 인구 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('94', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '80', '23');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('95', 'hp', '0', '0', 'maxhp1', 1, '사회적 고립', '3', '0', '100', '23');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('96', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '70', '24');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('97', 'hp', '0', '0', 'maxhp1', 1, '뺴앗기', '3', '0', '100', '24');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('98', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '60', '25');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('99', 'hp', '0', '0', 'maxhp1', 1, '투기', '3', '0', '100', '25');


-- 경제 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('100', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '90', '26');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('101', 'hp', '0', '0', 'maxhp1', 0, '부익부빈익빈', '3', '0', '200', '26');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('102', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '95', '27');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('103', 'hp', '0', '0', 'maxhp1', 0, '실직시키기', '3', '1', '200', '27');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('104', 'hp', '0', '0', 'ad', 0, '일반 공격', '3', '1', '100', '28');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('105', 'hp', '0', '0', 'maxhp1', 0, '의욕 쇠퇴', '3', '0', '200', '28');
