---
title: "Project"
permalink: /project/
layout: single
# 목차
toc: true  
toc_sticky: true
---

'첫 단추를 잘 꿰어야한다'  
프로젝트들을 만들면서 처음 설계가 아주 중요하다는 것을 느끼게 되었습니다.


# Project 1 : Java Swing을 이용한 인사 관리 프로그램
[Java Swing을 이용한 인사 관리 프로그램 git](https://github.com/Sn-Hn/java_Personal_manager)  
[Java Swing을 이용한 인사 관리 프로그램 blog (아직 blog에 올리지 못함)]  
- 학원 출결 관리, 인사 관리를 보고 만들어 본 **Java Swing** 프로그램입니다.  
- 개발 환경 : Eclipse, SQL Developer(Oracle 11g)  
- 구성 내용 (기본적인 내용)  
  1. 인사 관리 프로그램에 정보를 등록해야 입실/퇴실 가능  
  1. 회원 관리 CRUD 구현
  1. Thread를 이용하여 현재 시간을 출력하고, 그 시간으로 입/퇴실 구현  
  1. 정보를 등록하면 그 회원의 출석, 결석, 조퇴, 지각등 출석률과 수당이 출력 (Jtable)  
  1. 처음 등록 시 출석률 0%로 출력되는데, 출석률이 80% 이상이 되어야 수당 출력(그 전까지는 0)  
  1. 입실 기준 (09:30) 퇴실 기준(18:30) 입/퇴실 8시간을 채워야 정상 출석 (입실 시 10분 뒤까지 인정, 퇴실 시 10분 전까지 인정. 즉, 정상 출석 시 09:40 이전 입실, 18:20 이후 퇴실)  
  1. 입/퇴실 사이 시간이 4시간을 넘지 못하면 결석! 4시간이 넘고 8시간을 넘지 못하면 시간 계산을 통하여 지각 또는 조퇴  
    - ex) 09:40 이전 입실 18:20 이후 퇴실 -> 정상 출석.  
    - 09:40 이후 14:30 이전 입실 후 18:20 이후 퇴실 -> 지각  
    - 09:40 이후 14:30 이전 입실 후 4시간을 채우지 못하고 퇴실 -> 결석  
    - 09:40 이전 입실 14:30 이후 18:20 이전 퇴실 -> 조퇴  
    - 09:40 이후 14:30 이전 입실 후 4시간 채우고 18:20 이전 퇴실 -> 지각 + 조퇴  
    - 결석일수는 결석 + (지각+조퇴)/3 즉, 지각과 조퇴를 합쳐서 3번했다면 1일의 결석처리  
    - 출석, 결석, 지각, 조퇴는 이런식으로 구현  
  1. 출석률은 Oracle Database 11g를 이용하여 단위기간의 주말을 제외한 평일 수를 구하여 출석일수를 나누어 구현  
  1. 회원의 입/퇴실 정보를 Database에 저장하여 한 눈으로 볼 수 있게 Jtable에 출력  
  1. 회원 검색 기능 구현  
  1. 회원의 입/퇴실 정보 검색 기능 구현  
  
  
# Project 2 : JSP를 이용한 재단 웹 페이지 (SAFETY)
[JSP를 이용한 재단 웹 페이지(SAFETY) git](https://github.com/Sn-Hn/Team_Project)  
[JSP를 이용한 재단 웹 페이지(SAFETY) blog (아직 blog에 올리지 못함)]  
- 재단 홈페이지인 세이브 더 칠드런 본따 만든 **JSP** 웹 사이트입니다.  
- 개발 환경 : Eclipse, SQL Developer(Oracle 11g), Tomcat9.0  
- 구성 내용
  1. 메인, 회원가입, 로그인, 후원(결제), Google Map API, FAQ, 1:1문의, 마이페이지  

# Project 3 : Spring Framework를 이용한 업무 협업 웹 페이지
[Spring Framework를 이용한 업무 협업 웹 페이지 git](https://github.com/Sn-Hn/Assemble_Team)  
[Spring Framework를 이용한 업무 협업 웹 페이지 blog (아직 blog에 올리지 못함)]  
- Kakao Enterprise의 아지트를 본따 만든 **Sprig Framework** 웹 사이트입니다.  
- 개발 환경 : Eclipse, SQL Developer(MySQL), Tomcat9.0, Amazon Web Services  
- 구성 내용
  1. 회원가입  
    - 업무 협업 웹 사이트이므로 따로 회원들이 회원가입을 하는 형태가 아니고 하나의 업무 환경을 대표자가 만들게 되면 그 환경에 회원들을 초대하는 방식으로 되어있습니다.  
    - 초대받은 회원들은 메일로 암호화된 URL이 전송되는데 그 URL을 통한 회원가입을 해야 회원가입이 완료됩니다.  






