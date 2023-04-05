SELECT * FROM youtube.youtube_wordtokenizing;
select subject, count(*) from youtube_wordtokenizing group by subject;

select * from youtube_wordtokenizing where subject = "환경" and length(name) >= 8;

-- 환경 : 분리수거기, 마스크, 다회용품 --
select * from youtube.youtube_wordtokenizing where subject = "환경" and length(name) >= 10 limit 20;

-- 범죄 : 소년원, 사이버보안, 법전 -- 
select * from youtube.youtube_wordtokenizing where subject = "범죄" and length(name) >= 10 limit 20;

-- 인구 : 어린이집, 육아휴직, 정규직 채용 -- 
select * from youtube.youtube_wordtokenizing where subject = "인구" and length(name) >= 10 limit 20;

-- 안보 : 자주국방, 군사훈련서, 핵미사일 -- 
select * from youtube.youtube_wordtokenizing where subject = "안보" and length(name) >= 10 limit 20;

-- 질병 : 백신, 질병관리본부, 비상대책위원회 -- 
select * from youtube.youtube_wordtokenizing where subject = "질병" and length(name) >= 10 limit 20;

-- 사회 : 인종차별 방지법, 안전장치, 음주운전 방지법 -- 
select * from youtube.youtube_wordtokenizing where subject = "사회" and length(name) >= 10 limit 30;

-- 경제 : 0000 --
