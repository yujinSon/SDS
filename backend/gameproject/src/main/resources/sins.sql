-- user --  
 INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('1', '200', 'asd@naver.com', 'sdjla', '1', '1', 'fdgdf');
INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('2', '200', 'asd@naver.com', 'sdjla', '1', '1', 'fdgdf');
INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('3', '100', 'afffff@naver.com', 'sdsadsdjla', '1', '1', 'fdgdf');
INSERT INTO `sins`.`user` (`id`, `best_score`, `email`, `username`, `stage`, `sub_stage`, `password`) VALUES ('4', '110', 'asadd@naver.com', 'sdjla', '1', '1', 'fsadas');

-- 환경 --    
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('1', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('2', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('1', '환경', '환경병진', '1');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('2', '환경', '환경병진2', '2');
UPDATE `sins`.`character_stat` SET `character_id` = '1' WHERE (`id` = '1');
UPDATE `sins`.`character_stat` SET `character_id` = '2' WHERE (`id` = '2');


-- 안보 --  
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('3', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('4', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('3', '안보', '안보병진', '3');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('4', '안보', '안보병진2', '4');
UPDATE `sins`.`character_stat` SET `character_id` = '3' WHERE (`id` = '3');
UPDATE `sins`.`character_stat` SET `character_id` = '4' WHERE (`id` = '4');

-- 질병 --  
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('5', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('6', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('5', '질병', '질병병진', '5');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('6', '질병', '질병병진2', '6');
UPDATE `sins`.`character_stat` SET `character_id` = '5' WHERE (`id` = '5');
UPDATE `sins`.`character_stat` SET `character_id` = '6' WHERE (`id` = '6');

-- 사회 --  
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('7', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('8', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('7', '사회', '사회병진', '7');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('8', '사회', '사회병진2', '8');
UPDATE `sins`.`character_stat` SET `character_id` = '7' WHERE (`id` = '7');
UPDATE `sins`.`character_stat` SET `character_id` = '8' WHERE (`id` = '8');

-- 범죄 --  
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('9', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('9', '범죄', '범죄병진', '9');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('10', '범죄', '범죄병진2', '10');
UPDATE `sins`.`character_stat` SET `character_id` = '9' WHERE (`id` = '9');
UPDATE `sins`.`character_stat` SET `character_id` = '10' WHERE (`id` = '10');

-- 인구 --  
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('11', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('12', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('11', '인구', '인구병진', '11');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('12', '인구', '인구병진2', '12');
UPDATE `sins`.`character_stat` SET `character_id` = '11' WHERE (`id` = '11');
UPDATE `sins`.`character_stat` SET `character_id` = '12' WHERE (`id` = '12');

-- 경제 --  
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('13', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`character_stat` (`id`, `ad`, `add_ad`, `add_ap`, `add_avoid`, `add_critical`, `add_hp`, `add_speed`, `ap`, `avoid`, `critical`, `hp`, `speed`) VALUES ('14', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('13', '경제', '경제병진', '13');
INSERT INTO `sins`.`default_character` (`id`, `class_name`, `sub_name`, `character_stat_id`) VALUES ('14', '경제', '경제병진-2', '14');
UPDATE `sins`.`character_stat` SET `character_id` = '13' WHERE (`id` = '13');
UPDATE `sins`.`character_stat` SET `character_id` = '14' WHERE (`id` = '14');

-- 빌런들 -- 
-- 보스 --
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('1', '10', '10', '10', '환경', '10', '10', 1, '10', '10', '환경 보스');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('2', '10', '10', '10', '안보', '10', '10', 1, '10', '10', '안보 보스');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('3', '10', '10', '10', '질병', '10', '10', 1, '10', '10', '질병 보스');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('4', '10', '10', '10', '사회', '10', '10', 1, '10', '10', '사회 보스');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('5', '10', '10', '10', '범죄', '10', '10', 1, '10', '10', '범죄 보스');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('6', '10', '10', '10', '인구', '10', '10', 1, '10', '10', '인구 보스');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('7', '10', '10', '10', '경제', '10', '10', 1, '10', '10', '경제 보스');

-- 쫄따구 --
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('8', '10', '10', '10', '환경', '10', '10', 0, '10', '10', '환경쫄따구-1');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('9', '10', '10', '10', '환경', '10', '10', 0, '10', '10', '환경쫄따구-2');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('10', '10', '10', '10', '환경', '10', '10', 0, '10', '10', '환경쫄따구-3');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('11', '10', '10', '10', '안보', '10', '10', 0, '10', '10', '안보쫄따구-1');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('12', '10', '10', '10', '안보', '10', '10', 0, '10', '10', '안보쫄따구-2');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('13', '10', '10', '10', '안보', '10', '10', 0, '10', '10', '안보쫄따구-3');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('14', '10', '10', '10', '질병', '10', '10', 0, '10', '10', '질병쫄따구-1');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('15', '10', '10', '10', '질병', '10', '10', 0, '10', '10', '질병쫄따구-2');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('16', '10', '10', '10', '질병', '10', '10', 0, '10', '10', '질병쫄따구-3');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('17', '10', '10', '10', '사회', '10', '10', 0, '10', '10', '사회쫄따구-1');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('18', '10', '10', '10', '사회', '10', '10', 0, '10', '10', '사회쫄따구-2');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('19', '10', '10', '10', '사회', '10', '10', 0, '10', '10', '사회쫄따구-3');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('20', '10', '10', '10', '범죄', '10', '10', 0, '10', '10', '범죄쫄따구-1');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('21', '10', '10', '10', '범죄', '10', '10', 0, '10', '10', '범죄쫄따구-2');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('22', '10', '10', '10', '범죄', '10', '10', 0, '10', '10', '범죄쫄따구-3');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('23', '10', '10', '10', '인구', '10', '10', 0, '10', '10', '인구쫄따구-1');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('24', '10', '10', '10', '인구', '10', '10', 0, '10', '10', '인구쫄따구-2');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('25', '10', '10', '10', '인구', '10', '10', 0, '10', '10', '인구쫄따구-3');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('26', '10', '10', '10', '경제', '10', '10', 0, '10', '10', '경제쫄따구-1');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('27', '10', '10', '10', '경제', '10', '10', 0, '10', '10', '경제쫄따구-2');
INSERT INTO `sins`.`villain` (`id`, `ad`, `ap`, `avoid`, `class_name`, `critical`, `hp`, `is_boss`, `max_hp`, `speed`, `sub_name`) VALUES ('28', '10', '10', '10', '경제', '10', '10', 0, '10', '10', '경제쫄따구-3');

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
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('2', 'hp', '0', '0', 'maxhp', 0, '환경스킬1', '0', '0', '200', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('3', 'hp', '0', '0', 'maxhp', 0, '환경스킬2', '0', '1', '100', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('4', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('5', 'hp', '0', '0', 'maxhp', 0, '환경스킬1', '0', '0', '200', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('6', 'hp', '0', '0', 'maxhp', 0, '환경스킬2', '0', '1', '100', '2');
-- 안보 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('7', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('8', 'hp', '0', '0', 'maxhp', 0, '안보스킬1', '0', '0', '200', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('9', 'hp', '0', '0', 'maxhp', 0, '안보스킬2', '0', '1', '100', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('10', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('11', 'hp', '0', '0', 'maxhp', 0, '안보스킬1', '0', '0', '200', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('12', 'hp', '0', '0', 'maxhp', 0, '안보스킬2', '0', '1', '100', '4');
-- 질병 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('13', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('14', 'hp', '0', '0', 'maxhp', 0, '질병스킬1', '0', '0', '200', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('15', 'hp', '0', '0', 'maxhp', 0, '질병스킬2', '0', '1', '100', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('16', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('17', 'hp', '0', '0', 'maxhp', 0, '질병스킬1', '0', '0', '200', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('18', 'hp', '0', '0', 'maxhp', 0, '질병스킬2', '0', '1', '100', '6');
-- 사회 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('19', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('20', 'hp', '0', '0', 'maxhp', 0, '사회스킬1', '0', '0', '200', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('21', 'hp', '0', '0', 'maxhp', 0, '사회스킬2', '0', '1', '100', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('22', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '8');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('23', 'hp', '0', '0', 'maxhp', 0, '사회스킬1', '0', '0', '200', '8');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('24', 'hp', '0', '0', 'maxhp', 0, '사회스킬2', '0', '1', '100', '8');
-- 범죄 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('25', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('26', 'hp', '0', '0', 'maxhp', 0, '범죄스킬1', '0', '0', '200', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('27', 'hp', '0', '0', 'maxhp', 0, '범죄스킬2', '0', '1', '100', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('28', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '10');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('29', 'hp', '0', '0', 'maxhp', 0, '범죄스킬1', '0', '0', '200', '10');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('30', 'hp', '0', '0', 'maxhp', 0, '범죄스킬2', '0', '1', '100', '10');

-- 인구 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('31', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('32', 'hp', '0', '0', 'maxhp', 0, '인구스킬1', '0', '0', '200', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('33', 'hp', '0', '0', 'maxhp', 0, '인구스킬2', '0', '1', '100', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('34', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '12');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('35', 'hp', '0', '0', 'maxhp', 0, '인구스킬1', '0', '0', '200', '12');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('36', 'hp', '0', '0', 'maxhp', 0, '인구스킬2', '0', '1', '100', '12');

-- 경제 --            
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('37', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('38', 'hp', '0', '0', 'maxhp', 0, '경제스킬1', '0', '0', '200', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('39', 'hp', '0', '0', 'maxhp', 0, '경제스킬2', '0', '1', '100', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('40', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '14');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('41', 'hp', '0', '0', 'maxhp', 0, '경제스킬1', '0', '0', '200', '14');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `character_id`) VALUES ('42', 'hp', '0', '0', 'maxhp', 0, '경제스킬2', '0', '1', '100', '14');

-- 보스 스킬 --
-- 환경 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('43', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('44', 'hp', '0', '0', 'maxhp', 0, '환경보스스킬1', '0', '0', '200', '1');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('45', 'hp', '0', '0', 'maxhp', 0, '환경보스스킬1', '0', '0', '200', '1');

-- 안보 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('46', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('47', 'hp', '0', '0', 'maxhp', 0, '안보보스스킬1', '0', '0', '200', '2');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('48', 'hp', '0', '0', 'maxhp', 0, '안보보스스킬2', '0', '0', '200', '2');
-- 질병 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('49', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('50', 'hp', '0', '0', 'maxhp', 0, '질병보스스킬1', '0', '0', '300', '3');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('51', 'hp', '0', '0', 'maxhp', 0, '질병보스스킬2', '0', '0', '300', '3');
-- 사회 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('52', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('53', 'hp', '0', '0', 'maxhp', 0, '사회보스스킬1', '0', '0', '200', '4');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('54', 'hp', '0', '0', 'maxhp', 0, '사회보스스킬2', '0', '0', '300', '4');
-- 범죄 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('55', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('56', 'hp', '0', '0', 'maxhp', 0, '범죄보스스킬1', '0', '0', '200', '5');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('57', 'hp', '0', '0', 'maxhp', 0, '범죄보스스킬2', '0', '0', '300', '5');
-- 인구 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('58', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('59', 'hp', '0', '0', 'maxhp', 0, '인구보스스킬1', '0', '0', '200', '6');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('60', 'hp', '0', '0', 'maxhp', 0, '인구보스스킬2', '0', '0', '300', '6');
-- 경제 --            
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('61', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('62', 'hp', '0', '0', 'maxhp', 0, '경제보스스킬1', '0', '0', '200', '7');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('63', 'hp', '0', '0', 'maxhp', 0, '경제보스스킬2', '0', '0', '300', '7');

-- 쫄다구 스킬 --   
-- 환경 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('64', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '8');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('65', 'hp', '0', '0', 'maxhp', 0, '환경쫄따구스킬1', '0', '0', '200', '8');

-- 안보 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('66', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '9');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('67', 'hp', '0', '0', 'maxhp', 0, '안보쫄따구스킬1', '0', '0', '200', '9');

-- 질병 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('68', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '10');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('69', 'hp', '0', '0', 'maxhp', 0, '질병쫄따구스킬1', '0', '0', '200', '10');

-- 사회 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('70', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '11');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('71', 'hp', '0', '0', 'maxhp', 0, '사회쫄따구스킬1', '0', '0', '200', '11');

-- 범죄 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('72', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '12');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('73', 'hp', '0', '0', 'maxhp', 0, '범죄쫄따구스킬1', '0', '0', '200', '12');

-- 인구 --
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('74', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '13');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('75', 'hp', '0', '0', 'maxhp', 0, '인구쫄따구스킬1', '0', '0', '200', '13');

-- 경제 --            
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('76', 'hp', '0', '0', 'maxhp', 0, '일반 공격', '0', '0', '100', '14');
INSERT INTO `sins`.`skill` (`id`, `stat`, `cool_time`, `duration_turn`, `factor`, `is_range`, `skill_name`, `skill_num`, `skill_target`, `value`, `villain_id`) VALUES ('77', 'hp', '0', '0', 'maxhp', 0, '경제쫄따구스킬1', '0', '0', '200', '14');
