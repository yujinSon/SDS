-- user --  
INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('1', '200', 'asd@naver.com', '고병진', '1', '1', 'fdgdf');
INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('2', '200', 'asd@naver.com', '손민혁', '1', '1', 'fdgdf');
INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('3', '100', 'afffff@naver.com', '박용찬', '1', '1', 'fdgdf');
INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('4', '110', 'asadd@naver.com', '손유진', '1', '1', 'fsadas');

-- 환경 (힐 위주의 계열)--
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('1', '10', '3', '20', '1', '3', '8', '5', '30', '12', '12', '110', '10');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('2', '10', '4', '20', '2', '4', '9', '6', '25', '15', '16', '100', '10');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('1', '환경', '환경운동가 유진', '1');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('2', '환경', '환경지킴이 유진', '2');
UPDATE `sins`.`character_stat` SET `character_id` = '1' WHERE (`id` = '1');
UPDATE `sins`.`character_stat` SET `character_id` = '2' WHERE (`id` = '2');


-- 안보 (ad가 중점으로 둔 기준치)--
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('3', '50', '10', '5', '2', '3', '8', '5', '2', '10', '20', '100', '10');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('4', '40', '10', '5', '2', '3', '9', '1', '2', '10', '50', '100', '1');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('3', '안보', '안보전문가 용찬', '3');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('4', '안보', '군인 용찬', '4');
UPDATE `sins`.`character_stat` SET `character_id` = '3' WHERE (`id` = '3');
UPDATE `sins`.`character_stat` SET `character_id` = '4' WHERE (`id` = '4');

-- 질병 (buff를 중점으로 둔다.)--
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('5', '10', '3', '20', '1', '4', '8', '5', '30', '12', '12', '110', '10');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('6', '10', '4', '20', '1', '5', '9', '6', '25', '15', '16', '100', '10');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('5', '질병', '질병관리자 민수', '5');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('6', '질병', '질병전문가 민수', '6');
UPDATE `sins`.`character_stat` SET `character_id` = '5' WHERE (`id` = '5');
UPDATE `sins`.`character_stat` SET `character_id` = '6' WHERE (`id` = '6');

-- 사회 (회피에 중점을 둔다.)--
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('7', '20', '10', '10', '4', '2', '15', '5', '18', '30', '15', '120', '5');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('8', '30', '8', '10', '5', '2', '18', '4', '20', '40', '18', '130', '8');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('7', '사회', '사회전문가 정빈', '7');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('8', '사회', '사회학 교수 정빈', '8');
UPDATE `sins`.`character_stat` SET `character_id` = '7' WHERE (`id` = '7');
UPDATE `sins`.`character_stat` SET `character_id` = '8' WHERE (`id` = '8');

-- 범죄 (크리티컬에 중점을 둔다.)--
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('9', '30', '15', '9', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('10', '40', '20', '9', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('9', '범죄', '경찰관 병진', '9');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('10', '범죄', '프로파일러 병진', '10');
UPDATE `sins`.`character_stat` SET `character_id` = '9' WHERE (`id` = '9');
UPDATE `sins`.`character_stat` SET `character_id` = '10' WHERE (`id` = '10');

-- 인구 (hp에 중점을 둔다.)--
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('11', '20', '10', '5', '25', '3', '10', '3', '5', '20', '10', '160', '5');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('12', '20', '10', '5', '10', '3', '30', '3', '5', '15', '10', '190', '5');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('11', '인구', '인구문제에 심각한 민혁', '11');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('12', '인구', '생명지킴이 민혁', '12');
UPDATE `sins`.`character_stat` SET `character_id` = '11' WHERE (`id` = '11');
UPDATE `sins`.`character_stat` SET `character_id` = '12' WHERE (`id` = '12');

-- 경제 (ap에 중점을 둔다.)--
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('13', '10', '10', '25', '8', '8', '13', '4', '40', '14', '20', '80', '5');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('14', '8', '10', '15', '8', '15', '13', '4', '50', '14', '15', '90', '4');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('13', '경제', '경제전문가 기성', '13');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('14', '경제', '경제학교수 기성', '14');
UPDATE `sins`.`character_stat` SET `character_id` = '13' WHERE (`id` = '13');
UPDATE `sins`.`character_stat` SET `character_id` = '14' WHERE (`id` = '14');

-- 빌런들 --
-- 보스 --
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('1', '10', '10', '10', '환경', '10', '10', 1, '10', '10', '지구온난화');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('2', '10', '10', '10', '안보', '10', '10', 1, '10', '10', '핵(Nuclear)');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('3', '10', '10', '10', '질병', '10', '10', 1, '10', '10', '코로나');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('4', '10', '10', '10', '사회', '10', '10', 1, '10', '10', '음주운전');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('5', '10', '10', '10', '범죄', '10', '10', 1, '10', '10', '살인');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('6', '10', '10', '10', '인구', '10', '10', 1, '10', '10', '저출산');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('7', '10', '10', '10', '경제', '10', '10', 1, '10', '10', '저성장');

-- 쫄따구 --
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('8', '10', '10', '10', '환경', '10', '10', 0, '10', '10', '수질오염');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('9', '10', '10', '10', '환경', '10', '10', 0, '10', '10', '대기오염');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('10', '10', '10', '10', '환경', '10', '10', 0, '10', '10', '토양오염');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('11', '10', '10', '10', '안보', '10', '10', 0, '10', '10', '탱크');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('12', '10', '10', '10', '안보', '10', '10', 0, '10', '10', '무인기');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('13', '10', '10', '10', '안보', '10', '10', 0, '10', '10', '총');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('14', '10', '10', '10', '질병', '10', '10', 0, '10', '10', '메르스');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('15', '10', '10', '10', '질병', '10', '10', 0, '10', '10', '콜레라');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('16', '10', '10', '10', '질병', '10', '10', 0, '10', '10', '조류독감');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('17', '10', '10', '10', '사회', '10', '10', 0, '10', '10', '인종차별');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('18', '10', '10', '10', '사회', '10', '10', 0, '10', '10', '알콜중독');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('19', '10', '10', '10', '사회', '10', '10', 0, '10', '10', '사기');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('20', '10', '10', '10', '범죄', '10', '10', 0, '10', '10', '학교폭력');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('21', '10', '10', '10', '범죄', '10', '10', 0, '10', '10', '마약');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('22', '10', '10', '10', '범죄', '10', '10', 0, '10', '10', '갈취');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('23', '10', '10', '10', '인구', '10', '10', 0, '10', '10', '노령화');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('24', '10', '10', '10', '인구', '10', '10', 0, '10', '10', '해외 이주');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('25', '10', '10', '10', '인구', '10', '10', 0, '10', '10', '과도한 노동');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('26', '10', '10', '10', '경제', '10', '10', 0, '10', '10', '경제 불균형');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('27', '10', '10', '10', '경제', '10', '10', 0, '10', '10', '고용 불안');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('28', '10', '10', '10', '경제', '10', '10', 0, '10', '10', '의욕 상실');

-- 유뭃 (21개) --
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('1', 1, '환경유물-1', 'hp', '환경', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('2', 0, '환경유물-2', 'hp', '환경', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('3', 0, '환경유물-3', 'hp', '환경', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('4', 0, '안보유물-1', 'hp', '안보', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('5', 1, '안보유물-2', 'hp', '안보', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('6', 1, '안보유물-3', 'hp', '안보', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('7', 1, '질병유물-3', 'hp', '질병', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('8', 1, '질병유물-1', 'hp', '질병', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('9', 1, '질병유물-2', 'hp', '질병', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('10', 1, '사회유물-1', 'hp', '사회', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('11', 1, '사회유물-2', 'hp', '사회', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('12', 1, '사회유물-3', 'hp', '사회', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('13', 1, '범죄유물-1', 'hp', '범죄', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('14', 1, '범죄유물-2', 'hp', '범죄', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('15', 1, '범죄유물-3', 'hp', '범죄', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('16', 1, '인구유물-1', 'hp', '인구', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('17', 1, '인구유물-2', 'hp', '인구', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('18', 1, '인구유물-3', 'hp', '인구', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('19', 1, '경제유물-1', 'hp', '경제', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('20', 1, '경제유물-2', 'hp', '경제', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('21', 1, '경제유물-3', 'hp', '경제', '10');

-- 전체 유물 (3개) --
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('23', 1, '전체유물-1', 'hp', '전체', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('24', 1, '전체유물-2', 'hp', '전체', '10');
INSERT INTO `sins`.`artifact` (`id`, `is_range`, `name`, `stat`, `target_class`, `value`) VALUES ('25', 1, '전체유물-3', 'hp', '전체', '10');

-- 스킬 --
-- 캐릭터 스킬 --
-- 환경 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('1', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('2', 'hp', '0', '0', 'maxhp', 0, '양치컵 사용', '0', '0', '200', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('3', 'hp', '0', '0', 'maxhp', 0, '세탁망 사용', '0', '1', '100', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('4', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('5', 'hp', '0', '0', 'maxhp', 0, '지하철 이용', '0', '0', '200', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('6', 'hp', '0', '0', 'maxhp', 0, '버스 이용', '0', '1', '100', '2');
-- 안보 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('7', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('8', 'hp', '0', '0', 'maxhp', 0, '안보의식 향상', '0', '0', '200', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('9', 'hp', '0', '0', 'maxhp', 0, '정보보호', '0', '1', '100', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('10', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('11', 'hp', '0', '0', 'maxhp', 0, '간첩 신고', '0', '0', '200', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('12', 'hp', '0', '0', 'maxhp', 0, '관련 기술혁신', '0', '1', '100', '4');
-- 질병 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('13', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('14', 'hp', '0', '0', 'maxhp', 0, '손 씻기', '0', '0', '200', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('15', 'hp', '0', '0', 'maxhp', 0, '마스크 착용', '0', '1', '100', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('16', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('17', 'hp', '0', '0', 'maxhp', 0, '익힌 음식 먹기', '0', '0', '200', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('18', 'hp', '0', '0', 'maxhp', 0, '예방 접종', '0', '1', '100', '6');
-- 사회 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('19', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('20', 'hp', '0', '0', 'maxhp', 0, '소화기 사용법 숙지', '0', '0', '200', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('21', 'hp', '0', '0', 'maxhp', 0, '가벼운 운동', '0', '1', '100', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('22', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '8');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('23', 'hp', '0', '0', 'maxhp', 0, '안전밸트 착용', '0', '0', '200', '8');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('24', 'hp', '0', '0', 'maxhp', 0, '정속 주행', '0', '1', '100', '8');
-- 범죄 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('25', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('26', 'hp', '0', '0', 'maxhp', 0, '개인 보안 강화', '0', '0', '200', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('27', 'hp', '0', '0', 'maxhp', 0, '올바른 신고정신', '0', '1', '100', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('28', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '10');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('29', 'hp', '0', '0', 'maxhp', 0, '범죄 예방교육', '0', '0', '200', '10');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('30', 'hp', '0', '0', 'maxhp', 0, '올바른 시민 의식', '0', '1', '100', '10');

-- 인구 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('31', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('32', 'hp', '0', '0', 'maxhp', 0, '경각심 가지기', '0', '0', '200', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('33', 'hp', '0', '0', 'maxhp', 0, '관련 제도 확인', '0', '1', '100', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('34', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '12');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('35', 'hp', '0', '0', 'maxhp', 0, '결혼 문화 변화 인식', '0', '0', '200', '12');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('36', 'hp', '0', '0', 'maxhp', 0, '어린이집 지원', '0', '1', '100', '12');

-- 경제 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('37', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('38', 'hp', '0', '0', 'maxhp', 0, '지역 상점 이용', '0', '0', '200', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('39', 'hp', '0', '0', 'maxhp', 0, '자기 계발', '0', '1', '100', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('40', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '14');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('41', 'hp', '0', '0', 'maxhp', 0, '선거참여', '0', '0', '200', '14');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('42', 'hp', '0', '0', 'maxhp', 0, '자원봉사', '0', '1', '100', '14');

-- 보스 스킬 --
-- 환경 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('43', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('44', 'hp', '0', '0', 'maxhp', 0, '이산화탄소 배출', '0', '0', '200', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('45', 'hp', '0', '0', 'maxhp', 0, '해수면 상승', '0', '0', '200', '1');

-- 안보 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('46', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('47', 'hp', '0', '0', 'maxhp', 0, '핵 개발', '0', '0', '200', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('48', 'hp', '0', '0', 'maxhp', 0, '국가 도발', '0', '0', '200', '2');
-- 질병 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('49', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('50', 'hp', '0', '0', 'maxhp', 0, '감염', '0', '0', '300', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('51', 'hp', '0', '0', 'maxhp', 0, '집단 감염', '0', '0', '300', '3');
-- 사회 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('52', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('53', 'hp', '0', '0', 'maxhp', 0, '무분별한 공격', '0', '0', '200', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('54', 'hp', '0', '0', 'maxhp', 0, '음주사고', '0', '0', '300', '4');
-- 범죄 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('55', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('56', 'hp', '0', '0', 'maxhp', 0, '칼 찌르기', '0', '0', '200', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('57', 'hp', '0', '0', 'maxhp', 0, '준비하기', '0', '0', '300', '5');
-- 인구 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('58', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('59', 'hp', '0', '0', 'maxhp', 0, '인구감소', '0', '0', '200', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('60', 'hp', '0', '0', 'maxhp', 0, '준비하기', '0', '0', '300', '6');
-- 경제 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('61', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('62', 'hp', '0', '0', 'maxhp', 0, '은행 파산', '0', '0', '200', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('63', 'hp', '0', '0', 'maxhp', 0, '주가 하락', '0', '0', '300', '7');

-- 쫄다구 스킬 --
-- 환경 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('64', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '8');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('65', 'hp', '0', '0', 'maxhp', 0, '폐수 배출', '0', '0', '200', '8');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('64', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('65', 'hp', '0', '0', 'maxhp', 0, '미세먼지 발포', '0', '0', '200', '9');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('64', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '10');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('65', 'hp', '0', '0', 'maxhp', 0, '폐기물 매립', '0', '0', '200', '10');

-- 안보 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('66', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('67', 'hp', '0', '0', 'maxhp', 0, '포격', '0', '0', '200', '11');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('66', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '12');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('67', 'hp', '0', '0', 'maxhp', 0, '정찰', '0', '0', '200', '12');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('66', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('67', 'hp', '0', '0', 'maxhp', 0, '수류탄 투척', '0', '0', '200', '13');


-- 질병 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('68', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '14');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('69', 'hp', '0', '0', 'maxhp', 0, '감염', '0', '0', '200', '14');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('68', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '15');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('69', 'hp', '0', '0', 'maxhp', 0, '감염', '0', '0', '200', '15');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('68', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '16');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('69', 'hp', '0', '0', 'maxhp', 0, '감염', '0', '0', '200', '16');

-- 사회 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('70', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '17');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('71', 'hp', '0', '0', 'maxhp', 0, '동양인 차별', '0', '0', '200', '17');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('70', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '18');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('71', 'hp', '0', '0', 'maxhp', 0, '알코올 섭취', '0', '0', '200', '18');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('70', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '19');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('71', 'hp', '0', '0', 'maxhp', 0, '갈취', '0', '0', '200', '19');

-- 범죄 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('72', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '20');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('73', 'hp', '0', '0', 'maxhp', 0, '고데기', '0', '0', '200', '20');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('72', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '21');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('73', 'hp', '0', '0', 'maxhp', 0, '마약뿌리기', '0', '0', '200', '21');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('72', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '22');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('73', 'hp', '0', '0', 'maxhp', 0, '도박질하기', '0', '0', '200', '22');


-- 인구 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('74', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '23');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('75', 'hp', '0', '0', 'maxhp', 0, '사회적 고립', '0', '0', '200', '23');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('74', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '24');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('75', 'hp', '0', '0', 'maxhp', 0, '뺴앗기', '0', '0', '200', '24');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('74', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '25');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('75', 'hp', '0', '0', 'maxhp', 0, '투기', '0', '0', '200', '25');


-- 경제 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('76', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '26');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('77', 'hp', '0', '0', 'maxhp', 0, '부익부빈익빈', '0', '0', '200', '26');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('76', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '27');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('77', 'hp', '0', '0', 'maxhp', 0, '실직시키기', '0', '0', '200', '27');

INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('76', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '28');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('77', 'hp', '0', '0', 'maxhp', 0, '의욕 쇠퇴', '0', '0', '200', '28');
