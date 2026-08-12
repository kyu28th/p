# CA와 System I - 2번째 파일

```yaml
source:
  id: CA-P2
  document: "2. CA(Computer Architecture)와 System I_V4.1_20161228_2번째 찍는 화일.pdf"
  source_ref: "local-source\\9주차_신규_pdf (2) (2)\\8. CA\\2. CA(Computer Architecture)와 System I_V4.1_20161228_2번째 찍는 화일.pdf"
  repository_policy: "Original PDF is kept locally; Markdown extraction is stored in Git."
material_note: "이 자료는 과거 강의자료입니다. 2016~2017 버전명이 포함되어 있고 파일 수정일은 2019-03-13입니다. 최신 기술, 법/제도, 표준, 제품 동향은 반드시 별도 검증이 필요합니다."
extraction:
  tool: "pdfjs-dist"
  pages: 77
  notes:
    - "Text was extracted page by page."
    - "Original images, charts, and exact visual layout are not embedded in this pass."
```

> 현행성 주의: 이 자료는 과거 강의자료입니다. 2016~2017 버전명이 포함되어 있고 파일 수정일은 2019-03-13입니다. 최신 기술, 법/제도, 표준, 제품 동향은 반드시 별도 검증이 필요합니다.

## Page 1

KPC 정보처리기술사 핵심 오브젝트
[Module 08]
CA & System I
•
차세대 IT 리더스 유니버시티
IT Leaders University Coursework

---

## Page 2

목차
분류 출제빈도 Page
분류 출제빈도 Page
4
Chapter I. 법칙 일반 Chapter II. 컴퓨터 구조
멧칼프 법칙 중 Von Neumann 구조 하
무어의 법칙 중 하바드 아키텍처 중
암달의 법칙 하 CPU 중
법칙 일반 ( 캐즘 외 ) 중 하
고정배선 방식
하
코어스 법칙 하 마이크로 프로그래밍 방식 73
길더 법칙 하 GPU 하
하
캐즘 이론 하 CUDA 73
눈덩이 효과 하 DMA 상
사노프의 법칙 하
리드의 법칙 하
구스타프슨의 법칙 하
2

---

## Page 3

목차
분류 출제빈도 Page
분류 출제빈도 Page
Chapter III. 기억장치 IV. 명령어 처리
하 명령어 하 148
메모리 계층구조
중 98 하
메모리 (SDRAM, DDR, DDR2,) 주소지정방식
하
MRAM
하
메모리 관리
주기억장치 중
하
보조기억장치
상
Cache Memory
상
가상기억장치
상
SSD
하
FMD
MLC 하
하 146
Write-Cliff
3

---

## Page 4

목차
분류 출제빈도 Page
분류 출제빈도 Page
Chapter V. 병렬컴퓨터와 병렬처리
Chapter VI. Framework
병렬 컴퓨터 중 160 Android Architecture 중
Flynn 의 컴퓨터 분류 중 중
Spring Framework
병렬 컴퓨터 분류 상
JVM(GC) 중
중
메모리 공유에 따른 분류 (SMP)
중
명령어 구성 방식에 따른 분류
중
CISC, RISC, EISC
상
병렬처리
상
Pipeline
중
Pipeline 해저드
4

---

## Page 5

목차
분류 출제빈도 Page
분류 출제빈도 Page
Chapter VII. 고가용성 컴퓨팅 Chapter VIII. 응용기술
상 중
HA(High Availability) 234 Arduino
중 하
Clustering 라즈베리파이
상 중
결함허용 컴퓨터 (FTS) In-Memory Computing
상
RAID
5

---

## Page 6

목차
분류 출제빈도 Page
분류 출제빈도 Page
기타
오토마타 (Automata Theory) 하
6

---

## Page 7

CA & System 출제 경향
I. 110 회 정보관리기술사 기출문제
알고리즘 ( 인공지능
IT 경영전략
포함 ), 2
OS, 2
SW 공학과 프로젝트관리
IT 경영전략 ,
CA 와 시스템 , 1
서비스
4
DATABASE,
네트워크
SW 공학과
2
프로젝트관리 , 4
보안
DATABASE
보안 , 5
서비스 , 5 CA 와 시스템
OS
자료구조
네트워크 , 6
알고리즘 ( 인공지능 포함 )
7

---

## Page 8

I. 110 회 정보관리기술사 기출문제
회차 교시 도메인 문제
110 1 CA 4. 유한 오토마타 에 대해 설명하시오 .

---

## Page 9

CA & System 출제 경향
2. 110 회 컴퓨터시스템응용기술사
OS, 1
알고리즘과 AI,
1
서비스
서비스 , 7
네트워크
CA 와 시스템 , 7
보안
DATABASE
네트워크 , 6
CA 와 시스템
DATABASE, 5
보안 , 4
110 회 컴퓨터시스템응용기술사 도메인 분포도
9

---

## Page 10

2. 110 회 컴퓨터시스템응용기술사
회차 교시 도메인 문제
110 1 CA 1.SDRAM(Synchronous DRAM) 에 대해 설명하시오 .
110 1 CA 4.MRAM(Magnetoresistive RAM : 강자성 메모리 ) 에 대해 설명하시오 .
110 1 CA 13. 스토리지 티어링 (Storage Tiering ) 에 대해 설명하시오 .
5.UV EPROM(UltraViolet Erasable Programmable ROM),
110 2 CA EEPROM(Electrically Erasable Programmable ROM) 및 Flash 메모리를
쓰기 ( 소거 및 프로그램 ) 관점에서 비교 설명하시오 .
2. 스토리지 프로비저닝 (Storage Provisioning) 의 두가지 방법을 비교
110 3 CA
설명하시오 .
6. 페이지 방식을 이용하는 가상 메모리에서 가상주소 (Virtual address) 를
주기억장치 주소인 물리주소 (Physical Address) 로 변환하는 과정을 페이지
110 3 CA
테이블 (Page Table) 및 TLB(Translation Lookaside Buffer) 를 이용하여
설명하시오 .
110 4 CA 6. 가상화 환경에서 데이터 백업방법 2 가지를 설명하시오 .

---

## Page 11

Chapter VI. Framework
1. Android Architecture
2. Spring Framework
3. JVM
11

---

## Page 12

4. 안드로이드 아키텍처
안드로이드 아키텍처
1. 안드로이드 아키텍처 ( 조직 92 회 1 교시 )
2. 안드로이드 응용프로그램 프레임워크에 대해서 설명하시오 . (98 회 1 교시 )
3. 안드로이드 시스템에서 JDK(Java Development Kits) 를 사용하는 경우와
NDK(Native Development Kits) 를 사용하는 경우의 장단점에 대하여 설명하시오 .
( 정보관리 99 회 1 교시 3 번 )
4. 안드로이드 dalvik 의 한계 및 ART 의 특징을 설명하고 ART 와 dalvik 과의 차이점을 서술하시오 .
( 모의고사 )
5. 안드로이드의 런타임 중 하나인 ART(Android Run - time) 에 대해서 설명하시오 .
( 모의고사 )

---

## Page 13

4. 안드로이드 아키텍처
I. 스마트폰의 개방형 플랫폼 , 안드로이드 아키텍쳐의 개요
가 . 안드로이드 아키텍쳐 (Android Architecture) 의 개념
- 운영체제 , 미들웨어 그리고 중요 프로그램을 포함하는 임베디드 디바이스를 위한 소프트웨어 스택
- 2007 년 11 월에 공개된 구글의 안드로이드 (Android) 는 휴대폰 개발에 필요한 소프트웨어 플랫폼
일체를 제공하는 공개 소프트웨어
나 . 안드로이드 아키텍쳐의 특징
Open Software
Open Eco-System
Open Device
- 오픈소스를 활용하여 누구나 개발 가능하며 오픈마켓까지 이어지는 경제생태계 구축
13

---

## Page 14

4. 안드로이드 아키텍처
II. 안드로이드 아키텍쳐 및 구성요소
가 . 안드로이드 아키텍쳐
나 . 안드로이드 아키텍쳐 구성요소
14

---

## Page 15

4. 안드로이드 아키텍처
나 . 안드로이드 아키텍쳐 구성요소
III. 스마트폰용 아키텍처 비교
구분 윈도우모바일 iPhone android Symbian
iPhone OS(Mac OS 의 iP
OS 기반 Win7 모바일 Linux Symbian OS
hone port)
MS 마켓플레이스
App Store 앱스토어 안드로이드 마켓 OVi Store
( 예정 )
멀티터치 JAVA 플랫폼기반으
기개발된다양한
장점 고품질의최다 응용 로개발자 저변 안정된제품
Application
프로그램 넓음
“ 끝 ”

---

## Page 16

4. 안드로이드 아키텍처
IV. 안드로이드 응용프로그램 프레임워크 의 개념
가 . 정의
- 안드로이드 응용프로그램을 구현하는데 필요한 모든 것을 제공하는 Component 재사용이 가능하도록
설계 가능한 프레임워크
나 . 안드로이드 응용프로그램 프레임워크의 역할
- 안드로이드 응용프로그램의 4 대 컴포넌트인 Activity, Service, BR, CP 를 구현하기 위한 API 를
제공
16

---

## Page 17

4. 안드로이드 아키텍처
V. 안드로이드 시스템 개발 Kit 유형
- 대량의 연산처리와 실시간 반응이 필요한 핵심 모듈은 NDK 로 , 화면처리는 JDK 로 접근
- 안드로이드 NDK(Native Development Kit)
- 자바를 사용하여 개발하기 위해서는 JDK(Java Development Kit, 자바 개발 도구 ) 를 사전 설치 .
- APK ( 파일 포맷 ): 안드로이드 애플리케이션의 확장자로 , Android PacKage 의 줄임말이다 .
17

---

## Page 18

4. 안드로이드 아키텍처
VI. 안드로이드 시스템 개발 Kit 사용의 장단점
가 . 안드로이드 시스템에서 JDK 사용상의 장단점
장점 단점
1 ) Garbage Collection 을 통한 메모리 자동 관리 1 ) JVM 위에서 실행됨에 따른 느린 속도
2 ) 다양한 Java API 를 활용하여 개발 가능 2 ) 저수준의 Native API 접근에 제한적
3) 풍부한 오픈소스와 plug - in 의 지원 3) 게임과 다양한 디바이스 연동에 취약
4) 기존 자바개발자의 재교육 최소화 4) 안정성이 보장된 C 라이브러리 접근 불가
나 . 안드로이드 시스템에서 NDK 사용상의 장단점
장점 단점
1 ) 메모리 직접 접근에 따른 안정성 침해 위험
1) 게임이나 다양한 디바이스 연동이 가능
존재
2) 인터넷에 유통중인 C 라이브러리 간편하게 이용
2) 특정 플랫폼에서 개발시 별도 Kit 요구 (Cygwin)
3) JNI 를 통한 저수준의 Native API 접근 가능
3 ) JNI 라는 통신 방식 학습에 어려움 존재
4) 프로그램 처리 속도의 향상
4 ) 오용할 경우 프로그램의 복잡성 증대
- JDK 와 NDK 가 상호 보완적인 관계로 장점을 극대화 하는 방향의 개발 Kit 사용이 증대
18

---

## Page 19

Spring Framework
출제예상문제
1. 스프링 프레임워크 (Spring Framework) 의 개념과 구성 모듈 (Module) 에 대하여 설명하시오 .
( 정보관리 , 99 회 2 교시 )
2. 스프링프레임워크 (Spring Framework) 의 핵심기능 3 가지에 대해 설명하시오 .
( 모의고사 )
19

---

## Page 20

I. 자바 기반 경량화된 컨테이너의 선두주자 , Spring 프레임워크
가 . Spring 프레임워크의 개념
- EJB 기반의 복잡함과 무거움을 극복하고 개발생산성 향상과 고품질의 시스템 개발을 위한
자바 플랫폼 상의 경량화된 오픈소스 웹 어플리케이션 프레임워크
- 안정성과 유연성이 입증되어 전자정부 표준 개발 프레임워크의 핵심 근간으로 활용 ( 전자정부 FW)
나 . Spring 프레임워크의 특징
구분 설명 비고
개발자의 객체 생성 및 소멸 관리 부담
객체관리 컨테이너에서 직접 객체 관리 ( 생성 / 소멸 )
감소
제어반전 컨트롤의 제어권이 프레임워크에 존재
스프링에서 사용자 코드 호출 가능
(IoC) - IoC : Inversion of Control
각각의 계층이나 서비스들 간에 의존성 XML 파일을 통한 환경설정
의존성
존재할 경우 프레임워크가 상호 ( 주의 ! SOLID 의 DIP(Dependency
주입
연결시켜줌 Inversion Principle; 의존성 뒤집기
(DI)
- Dependency Injection(DI) 원칙 ) 과 헤깔리지 마세요 !)
관점지향
여러 모듈에서 공통적으로 사용하는 추상화된 트랜잭션 관리 , 로깅 , 보안 등의
프로그래
기능의 분리 지원 공통 기능 활용
밍 (AOP )
데이터베이스 처리 라이브러리와
영 속 성 JDBC, iBatis, Hibernate 등에 대한 지원
인터페이스 제공
20

---

## Page 21

II. 경량화된 개발이 가능케 하는 Spring 프레임워크의 구성
- 객체지향 기반으로 유연한 개발 및 확장성을 제공 , 주요 사상으로는 AOP 와 IoC 를 꼽을 수 있음
21

---

## Page 22

나 . Spring 프레임워크 구성 모듈별 기능과 역할 ( 이클립스 + MySQL + mybatis + Tomcat)
구성 모듈 기능 및 역할 세부기능 및 사례
- 단순화된 JDBC 기능 - JTA 에 대한 ‘global’ transaction 지원
(Database Access Object) (Java transaction APIs)
DAO
- 대부분의 ORM 프레임워크와 통합 - 단일 데이터 소스에 대한 ‘local ’
- 트랜잭션 관리 기능 transaction 지원
- 객체 관계형 모델 지원 ORM
(Object Relational Mapping) DB 와 - Hibernate, iBatis, mybatis
ORM
객체와의 관계를 맵핑 - Query + XML 양식 사용
- 다양한 DB 접속 방식 및 인터페이스 지원
- 원격접근 - 다양한 프로토콜에 대한 POJO 기반 원격접
-EJB 대체 및 통합 근
J2EE
- 스케줄링 및 동적 언어 지원 -JUnit 통합 , DI 에 의한 용이한 테스팅
- 테스트 기반환경 제공 - 어플리케이션 서버 밖에서 통합 테스트 지원
- Spring Web MVC -Request 기반 프레임워크
WEB - 이벤트 기반 프레임워크 -JSP, PDF, Excel 등 다양한 View 기술 지원
- 타 웹어플리케이션 프레임워크와 대체 통합 -Struts, WebWork, JSF 등
- IoC(Inversion of Control) Container
- The Hollywood Principle
- 객체간 의존성 감소로로 코드 변경에 유연
Core “Don’t call me, I will call you”
한 대처 가능하고 재사용 가능성 제고시킴
(IoC) - 컨테이너에 의한 Dependency Injection
- 컨테이너가 객체의 생성부터 소멸까지 관리
( 의존성주입 )
- 컴포넌트를 개별적으로 테스트 가능
- 트랜잭션 관리 , 로깅 등과 같은 관심사에 대 -Crosscutting Concern
한 모듈화 -Aspect = Advice + Pointcut
AOP
- 횡단관심사의 분리로 코드 변경없이 더해지 -Join Point, Pointcut, Weaving
거나 제거 가능 ( 유지보수성 , 변경용이성 ) -AspectJ( 사실상 표준 )
22

---

## Page 23

III. Spring 프레임워크의 핵심 구성 모듈 (Core Modules)
가 . SW 컴포넌트 결합도를 낮추기 위한 제어의 역전 현상 , IoC (Inversion of Control) 모듈
- 객체의 생성에서부터 생명주기의 관리까지 모든 객체에 대한 제어권이 개발자로부터 컨테이너로
넘어간 현상
- 서블릿 , EJB 컨테이너는 서블릿과 EJB 에 대한 제어권만 컨테이너가 담당하고 객체에 대한 제어권
개발자들이 직접 담당
- Spring 컨테이너는 일부 POJO 에 대한 제어권만을 가지고 대부분의 POJO 에 대한 제어권은 개발자에게
있는 상태 (POJO(Plain Old Java Object; J2EE 무거운 중량 FW 의 반발에서 간단한 자바 객체를 지칭 ))
[ 그림 ] IoC 컨테이너의 분류체계
23

---

## Page 24

- DL(Dependency Lookup) 은 저장소에 저장되어 있는 빈 (Bean) 에 접근하기 위해 개발자들이
컨테이너에 제공하는 API 를 이용하여 사용하고자 하는 빈 (Bean) 을 Lookup 하는 것
( 컨테이너에서 제공하는 API 와 의존관계 증가 )
- DI(Dependency Injection) 는 각 클래스 사이의 의존관계를 빈 (Bean) 설정 정보를 바탕으로
컨테이너가 자동으로 연결시켜주는 것 ( 참고 ) Injection; 주입
( 개발자들이 컨테이너 API 를 이용하여 의존관계에 관여할 필요가 없어 API 종속성 감소 )
[ 표 ] Dependency Injection 의 유형
유형 기능 설명
Setter Injection 클래스 사이의 의존관계를 연결시키기 위한 방법 (Setter; 세터 )
Constructor Injection 생성자를 통하여 클래스 사이의 의존관계를 연결시키는 방법
Singleton 인스턴스와 Non Singleton 인스턴스의 의존관계를
Method Injection
연결시키는 방법
24

---

## Page 25

25

---

## Page 26

문제 사례 ) 최근 정보시스템 개발 분야에서 ORM(OR Mapping) 방식이 많이 적용되고 있다 .
ORM 에서 클래스 다이어그램과 DB 테이블간 매핑 관계를 설명하고 , 전자정부 프레임워크에도
포함되어 있는 iBatis 와 Hibernate 를 비교 설명하시오 . (2013 년 , 7 월 모의고사 )
26

---

## Page 27

DMA( 직접 기억장치 액세스 )
JVM
1. Java 프로그램을 작성하고 실행시키는 일련의 과정을 JVM(Java Virtual Machine) 중심으로
설명하시오 .
( 정보관리 , 96 회 , 2 교시 )
2. JVM(Java Virtual Machine)
( 응용 , 77 회 1 교시 )
27

---

## Page 28

I. 플랫폼 독립적인 Java 프로그램의 특성 및 Process
가 . Java 프로그램의 특성
- "Write once, run anywhere" (WORA), Java 의 경우 소스를 컴파일하면 바이트 코드 (byte code) 로
되어 있는 class 파일이 생성하고 이 파일은 JVM 만 설치되어 있다면 특정 플랫폼에 종속적이지 않고
실행이 가능한 언어 .
- 자바는 플랫폼 독립적 (Platform Independent) 언어 , 컴파일 언어 , 인터프리터 (Interpreter) 언어임 .
나 . Java 프로그램의 Process
다 . JVM(Java Virtual Machine) 의 정의 :
메모리 상에만 존재하는 가상 컴퓨터 , 자바의 소스 코드를 컴파일 하게 되면 바이트 코드로 변환되는데
JVM 은 이러한 바이트 코드를 읽어서 실행할 수 있도록 해주는 도구
28

---

## Page 29

1. OSS
II. Java 프로그램에서 JVM(Java Virtual Machine) 의 구성
JVM(Java Virtual Machine) 은 크게 Class Loader, Execution Engine, Run - time Data Area,
Garbage Collector 로 구성된다 .
29

---

## Page 30

1. OSS
JVM(Java Virtual Machine) 의 구성
구성 내용
- HelloWorldApp.class 파일을 메모리에 올려서 실행하는 부분을 담당함 .
클래스 로더 - Class Loader 로 인해서 “ .class” 확장자의 파일은 플랫폼에 독립적으로
(Class Loader) JVM(Java Virtual Machine) 이 설치된 환경에서는 Java 프로그램을 실행 할 수
있음 .
- 클래스 로더에서 준비한 HelloWorldApp.class 에서 수행하면서 활용할
실행 데이터
데이터를 보관
영역 (Run - time
- 메소드영역 (Method area), 힙영역 (Heap area), 스택영역 (Stack area), Native
Data Area)
Method 스택 , PC 레지스터 (Register) 영역으로 구성됨
실행엔진 - HelloWorldApp.class 파일이 클래스 로더에 의해서 메모리에 정상적으로
(Execution 로딩되고 , 실행 엔진에 의해서 프로그램이 수행된다 .
Engine) - JVM(Java Virtual Machine) 이 읽을 수 있도록 만들어진 “ .class” 파일 해석기
- Multi Process 환경에서 다수의 HelloWorldApp.class 파일이 수행되면서 힙
가비지 콜렉터
메모리에 남아있는 데이터를 효율적으로 관리 ( 삭제 ) 하는 역할 . (OS 있음 )
(Garbage
- 프로그램환경에서 메모리 관리 기능 담당 (New/Young 영역 , OLD, PERM 영역 )
Collector)
30

---

## Page 31

Chapter VII. 고가용성
1. HA
2. Clustering
3. Fault Tolerant System
4. RAID
31

---

## Page 32

1. HA
고가용성 (HA)
1. 가용성 관리 는 운영 시스템의 고장을 정확히 측정 , 분석하여 장애를 최소화하는 활동이다 . 다음
물음에 답하시오 .
(1) 응답 시간 지연 및 시스템 중단 원인을 설명하시오 .
(2) 결함 허용 (Fault Tolerant) 기법을 적용한 가용성 보장 전략을 하드웨어 , 소프트웨어적인
측면에서 각각 설명하시오 . ( 관리 87 회 2 교시 )
2. 아웃소싱 서비스를 제공하는 기업이 ITIL 프로세스 모델을 도입하여 IT 서비스를 관리하고자 한다 .
서비스 지원영역의 장애 , 문제관리 프로세스와 서비스제공영역의 가용성 , 용량관리 프로세스 에 대해
설명하시오 . ( 관리 75 회 2 교시 )
3. 클라우드 컴퓨팅 서비스를 제공하는 사업자는 이용자에게 신뢰성 있고 일관된 품질을 제공하고
위해 클라우드 컴퓨팅 SLA(Service Level Agreement) 적용이 필수적이다 . 클라우드 컴퓨팅 서비스
유형별 ( 인프라형 , 플랫폼형 , 소프트웨어형 ) 로 서비스 품질요소 ( 성능 , 가용성 , 보안 , 서비스제공성 ) 에
대하여 설명하시오 . ( 컴시응 , 99 회 )
4. 핫 스탠바이 (Hot - standby) 및 콜드 스탠바이 (Cold - standby ) ( 컴시응 , 108 회 1 교시 )

---

## Page 33

1. HA
I. 고 가용성 (High Available )?
가 . 개념
복수의 시스템을 하나의 cluster 로 묶어 , 시스템 장애발생시 서비스 중단을 위해 다른 시스템으로
서비스를 Fail over 하는 기술 및 환경
나 . 주요 기능
기능 내용
결함 감지 - HW 비교기를 통해 구현 . System OS 는 각 HW 모듈의 상태를 분석하여
(Fault Detect) Fault 발생 모듈을 감지
결함 진단 - Fault 의 유형 판단 ( 일시적 / 영구적 ), 영구 Fault 의 경우 해당 모듈을 격리
(Fault Diagnosis) - Fault Location( 위치확인 ) + Fault Isolation( 격리 )
결함 복구 - Fault 모듈을 시스템에서 제거하고 시스템을 재구성
(Fault Recovery) - Fault Repari( 장애 장비 보수 ) + Fault Recovery( 회복 )
( 중요 ) 장애 대책 시스템의 종류
- 결함허용 시스템
- 고가용 시스템
33

---

## Page 34

1. HA
II. 개념도
- HA 구성에 참여하는 각 시스템은 2 개 이상의 N/W 카드를 가지면서 N/W 을 통해 상호간의 장애 및
생사 여부를 감시 .
- Standby N/W 은 서비스 네트웍 장애 시 백업용으로 사용되고 , Private N/W 은 HA 에 참여하는 시스
템들만 통신하는 전용 N/W 임
- 외장 디스크는 가동 , 개발 시스템에서 공유할 수 있어야 하며 , Concurrent Access 또는 순차적인
Access 방식에 따라 HA 가 다르게 구성
34

---

## Page 35

1. HA
III. HA 구성 유형
구 분 설 명
- 정상동작시 주 모듈 (primary system) 과 부 모듈 (Secondary system) 은 동기화 수행
HOT
(Active - Active System)
Standby
- 주 모듈 고장 감지시 부 모듈이 응답 처리
- 2 개 시스템이 각각의 고유한 가동 업무 서비스를 수행하다가 , 한 서버에 장애가
발생하면 상대 시스템의 자원을 Failover 하여 동시에 2 개 업무를 수행하는 방식
Mutual
- 장애 발생 시 FailOver 에 대비해 각 시스템 2 개의 업무를 동시에 서비스 할 수 있는
Takeover
시스템 Capacity 를 갖추도록 고려해야 함
- 외장 디스크는 해당 시스템에서만 억세스 가능함
- 정상동작시 주 모듈 (primary system) 과 대기 모듈 (standby system) 은 비 동기적
Cold
Standby
동작 대기 모듈은 진단 및 정기적 백업 상태임 .
- 여러 개의 시스템이 동시에 업무를 나누어 병렬처리 하는 방식으로 HA 에 참여하는
시스템 전체가 Active 한 상태로 업무를 수행하게 됨
Concurrent
Access
- 따라서 한 시스템에 장애가 발생해도 다른 시스템으로 FailOver 하지 않고 가용성을
보장함 .
35

---

## Page 36

1. HA
IV. HA 상세 구현 방식
가 . Hot - Standby
- 실시간 미러링하는 시스템으로 Call 을 안해도 , 자동 대응하는 시스템 . 암튼 스탠바이 .
- 동일한 서버 구성 . 부 모듈 (Secondary) 이 실시간 Failover 대응
정상 동작 장애시 동작
- 정상동작시 주 모듈 (primary system) 과 부 모듈 (Secondary system) 은 동기화 수행
- 주 모듈 고장 감지시 부 모듈이 응답 처리
- A method of redundancy in which the primary and secondary (i.e., backup) systems run
simultaneously. The data is mirrored to the secondary serverin real time so that both systems
contain identical information.
36

---

## Page 37

1. HA
IV. HA 상세 구현 방식
나 . Cold - Standby 중복모듈의 비 동기화 기법 , Cold Standby 구성
- DRS 의 콜드 유형과 다름 .
- 백업만 받다가 , 장애 시에 Active 되는 상대적으로 덜 중요한 시스템에 적용 .
정상 동작 장애시 동작
- 정상동작시 주 모듈 (primary system) 과 대기 모듈 (standby system) 은 비 동기적 동작
대기 모듈은 진단 및 정기적 백업 상태임 .
- 주 모듈 고장 감지시 System 초기화 또는 rollback 후 응답 처리
- A method of redundancy in which the secondary (i.e., backup) system is only called upon
when the primary system fails. The system on cold standby receives scheduled data backups,
but less frequently than a warm standby. Cold standby systems are used for non-critical
applications or in cases where data is changed infrequently.
37

---

## Page 38

1. HA
IV. HA 상세 구현 방식
Hot Standby 및 Cold Standby 의 동작 비교
구분 Hot Standby Cold Standby
주 모듈 (Primary) 와 부 모듈 (Secondary) 가 주 모듈 (Primary) 와 부 모듈 (Standby) 가
정상동작
Active - Active Mode 로 동작 Active -Standvy Mode 로 동작
부 모듈 (Secondary) 이 실시간 Failover 부 모듈 (Secondary) 이 시스템 초기화 또는
장애시 동작
대응 Rollback 후 서비스대응
장애시 서비스 실시간 대응 ( 연속성보장 )
장점 저비용
이론상 MTBF = 0
단점 시스템 효율성 저하 ( 시스템 중복 ) 서비스 연속성
[ 참고 ] Warm standby is a method of redundancy in which the secondary (i.e., backup ) system runs
in the background of the primary system.
Data is mirrored to the secondary server at regular intervals, which means that there are times
when both servers do not contain the exact same data.
38

---

## Page 39

1. HA
다 . Active - Active(Load - balancing )
- 한 서버 (Web - Active, DB - 대기 ) - 다른 서버 (Web - 대기 ,DB - Active) - > 장애발생 - >
다른 서버 (Web+DB Active) 가 모든 작업 대행
- 평소에 각각 같은 서비스
- 위 그림과 같이 , 이중화하여 , 구축 . L4 스위치에 의해 , 즉시 감지 되므로 , 첫번째 서버에 연결 안됨 .
39

---

## Page 40

1. HA
V. HA 동작 방식
구 분
- 시스템 전체 장애 시
Keep Alive Packet 이 안올 때
다운되었다고 판단함
- 네트워크 - 디스크 - APP 순으로 복구
- 네트워크 카드 장애 시
1) 두 개의 네트워크 카드 중 하나의
카드 IP 어드레스 파악이 Failover
2) 전체 네트워크 장애 시 백업
시스템의 스탠바이 어뎁터로 작동
- Network 장애 시
특별한 동작을 하지 않음 .
백업 시스템으로 Fail over 해도
동일한 문제가 존재 함 .
40

---

## Page 41

1. HA
VI. HA 와 FT(Fault Tolerant System) 의 비교 및 HA 의 동향
가 . HA 와 FT 의 비교
항목 High Availability Fault Tolerant System
복수의 시스템을 하나의 cluster 로 • 시스템의 일부에 고장 (fault) 이 발생
묶어 , 시스템 장애발생시 서비스 중 해도 요구 되는 기능의 전부 , 혹은 일
개념
단을 위해 다른 시스템으로 서비스 부를 유지하는 기술 ( 좁은의미로 장
를 Fail over 하는 기술및환경 애방지 시스템이라고도 함 )
Failure time • 30 ~ 300 초 • 0 초
Concurrent 유지보수 • 불필요 • 필 수
동일성능가격 • 2 배 이상 • 10 ~ 20 배
응용프로그램 • 대부분의 범용제품 활용 가능 • 제한적임
운영체계 • 범용 OS • 전용 OS
사용하드웨어 • 범용 하드웨어 • 전용 하드웨어
나 . High Availability 의 동향
- 인터넷 서비스의 활성화로 대부분의 e - Business 에서 활용
- 기업의 주요 시스템 대부분에 HA 적용
41
- 제품 차원에서 Clustering 을 지원하는 경우가 증가 (WAS 의 Session Clustering 등 )

---

## Page 42

2. Clustering
Clustering
 Grid computing 에 대한 정의와 동작원리를 각각 설명하고 , WWW 와 클러스트링 기법 과
어떠한 차이가 있는지 비교 설명하시오
( 조직 75 회 2 교시 )
I. 고성능 , HA 지원을 위한 시스템 기술 , Clustering 개요
가 . 클러스터링 (Clustering) 의 정의
- 여러 대의 컴퓨터를 고속 네트워크를 통해 병렬로 연결하여 고성능 , 고가용성 , 로드밸런싱을 지원하는
기술
- 여러 SMP 노드들을 고성능 Interconnection Network 를 통해 연결한 시스템 기술
- 가변적인 업무 처리를 하거나 컴퓨터 고장에 대비하여 시스템 운영의 지속성을 확보하고
고가용성 (High Availability) 을 구현하기 위한 전략
[ 참고 ] SMP: 2 개 이상의 프로세스가 하나의 메모리를 공유하며 , 프로세스는 상호 대등함
SMP 각 노드는 단일 운영체계로 운영 .

---

## Page 43

2. Clustering
나 . Clustering 의 등장배경
구분 설명
FT( 내부의 복수개의 resource) 시스템 고가
가격대비 효과
비즈니스측면
복잡하고 다양한 비즈니스 환경의 성능 만족
노후 유휴장비 활용성 증대
SMP 서버의 보편화 및 성능 향상으로 클러스터의 기술과 성능 향상
기술측면
고성능 / 저가격 범용 프로세서 개발 및 성능 향상
다 . 장단점
장점 단점
부하분산
고 계산 네트워크 안정성 , 속도 영향
고 가용성 복잡한 구조 및 관리의 어려움
확장성
비용 대비 효과 ( 유휴장비 )
43

---

## Page 44

2. Clustering
II. Clustering 개요
가 . Clustering 의 구성도
- CPU, 메모리 가진 각 SMP 노드들이 공유 Disk 를 사용 , 하나의 시스템 이미지 가짐
- SMP 노드 간의 Connection 은 고성능 Interconnection Network 를 통해 통신
나 . 핵심기술
구분 설명
고 가용성 기술 컴퓨터 하나가 고장이 나더라도 다른 컴퓨터가 업무 받아 수행
관리성 기술 병렬화 처리 , 부하 균등화 및 동적인 시스템 재구성 기능 제공
Node 컴퓨터들이 많아질수록 시스템의 전제 성능이 최대한
확장성 기술
선형적으로 증가하도록 하는 기술
Single System image 사용자에게 하나의 시스템인 것처럼 보이게 함
44

---

## Page 45

2. Clustering
III. Clustering 의 유형
구분 설명
병렬 처리형 메시지 송수신을 통한 병렬처리 , 고성능 수치 연산
고 가용성 오류 가능성 고려하여 모든 서비스를 유지토록 고안
로드 밸런싱형 부하 파악 및 업무 분배
IV. 비교
45

---

## Page 46

2. Clustering
V. Clustering 의 활용과 동향
가 . Clustering 의 활용
나 . Clustering 동향
- PC 클러스터를 활용한 분산 웹서버 구성 활발함
- 슈퍼컴퓨터를 위한 빌딩단위의 대규모 클러스터 구축 진행 중
- CDN 의 기술요소 (Global load balancing)
- 고가의 서버에 대한 부담으로 더욱 활발한 적용 기대됨
- 유틸리티 컴퓨팅 기본 환경으로 발전
46

---

## Page 47

3. Fault Tolerant System
FTS
1. 가용성 관리 는 운영 시스템의 고장을 정확히 측정 , 분석하여 장애를 최소화하는 활동이다 . 다음
물음에 답하시오 .
(1) 응답 시간 지연 및 시스템 중단 원인을 설명하시오 .
(2) 결함 허용 (Fault Tolerant) 기법을 적용한 가용성 보장 전략을 하드웨어 , 소프트웨어적인
측면에서 각각 설명하시오 . ( 관리 87 회 2 교시 )
2. 고객에게 실시간 서비스를 제공하는 기업에서의 정보시스템 장애등 비상상황 발생 및 대응활동은
매우 중요하다 . A 금융기관에서는 이러한 비상상황에 효율적으로 대처하고자 기존의 Tape 방식의
백업방식에서 Disk 기반방식으로의 백업을 고려하고 있다 . Disk 기반 백업방식중 가상
Tape 라이브러리 (VTL) 방식의 정의 및 특징 , D2D(Disk TO Disk) 방식과 VTL 방식을 비교 설명하시오 .
( 정보관리 , 84 회 )
47

---

## Page 48

3. Fault Tolerant System
I. 결함허용 시스템의 정의
- 하드웨어 혹은 소프트웨어 등에 오동작 , 오류 및 정보의 오염 등이 일어나도 규정된 기능을 올바르게
수행할 수 있는 시스템
- 결함 감내 시스템 (Fault tolerant system) 은 시스템을 구성하는 부품의 일부에서 결함 (fault) 또는 고
장 (failure) 이 발생하여도 정상적 혹은 부분적으로 기능을 수행할 수 있는 시스템이다 .
II . 결함허용 시스템의 단계
단 계 내 용
• 하드웨어로 구성된 비교기 (Compare Logic) 를 통하여 수행됨
장애감지
• 시스템 내에서 Fault 가 발생되면 해당 모듈 또는 시스템은 Fault 상태로
(Fault Detection) 들어가게 되고 , OS 는 각 모든 하드웨어 모듈들의 상태를 분석하여
어느 모듈이 Fault 를 유발시켰는가를 분석하여 알아냄
Sequence
장애진단
• Fault 가 일시적 (Transient) 인 것인지 영구 (Hard) 적인 것인지 판단하여
영구적인 경우 해당 모듈을 시스템 구성에서 제거
(Fault Diagnosis)
장애복구
• Fault 를 유발한 모듈을 시스템에서 제거하여 시스템을 재구성
(Fault Recovery)

---

## Page 49

III. 결함허용 시스템의 주요 기능
기 능 상 세 내 용
• 시스템의 구성요소 백업 , 이중성으로 결함 발생시 대신동작
중복성
• 복구작업의 지원
결함검출 • 결함 복구를 위한 결함발생 인식
결함위치확인 • 결함의 내용과 위치검출
결함격리 • 결함 발생부분의 격리
재구성 • 결함 발생시에도 정상적 작동 보장
보수 • 고장 부분을 정상 작동에 방해 없이 교체 및 보수
회복 • 교체 및 보수 후 시스템의 동작을 방해 없이 추가
데이터보존 • 정보의 손상 및 유실 방지
IV. 결함허용 시스템의 기법
가 . Hardware 적인 기법
기 법 상 세 내 용
• 한 프로세스를 주 프로세서와 보조 프로세서에 중복 할당 ( 중복성의
Checkpoint 기법
원리 )
Hot standby 방식 • 두 개의 프로세서를 동기 상태에서 프로세스 수행
Triple Modular
• 3 개 이상의 프로세서가 같은 입력에 대하여 동일한 연산 수행
Redundancy
49

---

## Page 50

나 . Database 기법
기법 상 세 내 용
Rollback (Undo) • 트랜잭션 ACID 보장
Log File, Check Point, Shadow Paging • DB 회복 기법으로 활용
다 . 소프트웨어 적인 기법 – FEC, BEC, NW 해밍코드 등 기술
기법 상 세 내 용
S/W 수행 중에 검사시점을 설정하여 오류발생이 발견되면 발생이전의 검사
Checkpointing
시점으로 되돌아가서 재수행
재수행 (Rollback & Retry) 에 근거
Recovery Block 검사시점에서 오류가 발견되면 지정된 이전 검사점으로 되돌아가서 같은
기능을 가진 다른 S/W 모듈을 수행
재수행 (Rollback & Retry) 에 근거한 Recovery Block 의 확장형
Conversation
복수의 프로세서 정보를 교환하는 프로세서들 간에 적용 가능한 기법
Distributed Recovery Block 기법을 분산환경으로 확장
Recovery Block H/W 결함과 S/W 결함을 동일한 방법으로 대처
N self-checking 두개 이상의 Self - checking 컴포넌트가 수행되면서 하나는 주어진 기능을
programming 수행하고 다른 컴포넌트는 대기상태
N version H/W 결함허용 기법의 Triple Modular Redundancy 와 유사
programming N 개의 독립적인 S/W 모듈의 수행결과를 비교하여 다수의 수행결과를 채택
50

---

## Page 51

[ 참고 ] TMR(Triple Modular Redundancy) 의 정의 및 특징
가 . TMR(Triple Modular Redundancy) 의 정의
- 세 개의 격리된 평행 제어 시스템과 하나의 시스템에 통합된 광대한 진단 기능을 사용
- 동일한 모듈 3 개 구성하여 Major Voter 를 통한 하나의 모듈에러 , 나머지 2 개 Vote 에 의해 결정하는
결함허용시스템
특징 상세 내용
안전 무결성 - 삼중화 시간여분기법을 활용하여 무오류 및 연속 프로세스 운영 제공
높은 가용성 - 모듈이 고장이 나더라도 시스템이 작동하는 동안 교체 가능
다른 벤더 제품 - 보통 3 개의 모듈을 서로 다른 벤더의 제품으로 구성
- U1~U3 이 각각 동시에 수행하여 , 결과가 같은지를 보고 , 동일 결과로 같은면 결과 맞음 . 이런 형태
51

---

## Page 52

RAID
1. ‘RAID 0 (RAID: Redundant Array of Independent Disks)’ 의 활용 분야와 장애율 (Failure rate),
성능 (Performance) 에 대하여 설명하시오 .
( 관리 99 회 2 교시 )
2. 디스크를 병렬화할 때 사용하는 미러링 (Mirroring), 데이터 스트라이핑 (Data Striping), 비트레벨
스트라이핑 (Bit Level Striping), 블록 레벨 스트라이핑 (Block Level Striping) 방법의 특징에 대하여
각각 설명하시오 . ( 컴시응 , 105 회 2 교시 )
[ 모의고사 ] 정보시스템의 저장장치 구축 시 RAID 의 사용이 일반화되어 있다 . RAID 중 Parity 를
이용하는 유형에 대해서 구성 및 적용 대상에 대해서 설명하고 , RAID 1+0 과 RAID 0+1 의 구성 및
가용성의 차이점에 대해서 설명하시오 .
데이터를 분할해서 복수의 자기 디스크 장치에 대해 병렬로 데이터를 읽는 장치 또는 읽는 방식 .
1987 년 캘리포니아 대학 버클리 분교의 패터슨 , 깁슨 , 카츠에 의해 발표되어 논문 ‘ A Case for
Redundant Arrays of Inexpensive Disks’ 에서 등장한 기술
52

---

## Page 53

4. RAID
I. 시스템의 고가용성과 성능 향상을 위한 솔루션의 핵심 , RAID 개요
가 . RAID(Redundant Array of Inexpensive/Independent Disks) 의 정의
- 여러 개의 디스크에 중복된 데이터 저장과 데이터의 동시 저장을 통한 성능향상과 안정성향상을 위한
목적의 솔루션
나 . RAID 의 등장배경
- 제한된 용량의 디스크로 대용량의 데이터 저장공간을 만들기 위함
- 디스크의 안정성의 향상을 통한 고가용성 확보 요구
- 시스템의 병목구간인 디스크에 대한 성능 개선 요구
다 . 목적
목적 설명
대용량 - 데이터의 멀티미디어화 , 대량화로 인한 대용량 저장장치 요구
- 데이터의 중복저장 및 오류 검출을 통해서 데이터 장애에 대비한 가용성 및
가용성
안정한 복구 기능 요구
- 여러 디스크를 통한 병렬처리를 통한 Access Time 을 최소화하여
고성능
성능향상 효과 와 확장 가능한 구조 요구
상호 호환성 - 이기종 다중 플랫폼간의 정보를 공유 요구
53

---

## Page 54

4. RAID
II. RAID 의 종류 및 기술 특징
가 . RAID 0 의 구성도 및 특징 – 빠른 속도가 필요한 시스템에서는 적합 , 데이터의 안정성측면에서는 비바람직
구성도 항목 내용
디스크 중복을 통한 읽기 쓰기 성능의
2 배 향상
특징
패러티나 미러링이 없음으로 디스크의
안정성 향상 없음
최소 수량 2 개 (n : disk 수량 )
공간효율 1
읽기 향상 n 배 상향
쓰기 향상 n 배 상향
고장 허용 Zero( 오류 검출 기능 없음 )
54

---

## Page 55

4. RAID
디스크의 병렬성 제고를 통한 성능 (Performance) 향상 기법 , RAID 0
RAID 0 의 개념
- 빠른 데이터 입출력을 위해 Data 의 중복 저장 없이 여러 디스크에 데이터를 분산 저장하여 동시에
접근할 수 있도록 하는 Striping 기반의 병렬 디스크 구성 기법
- 다양한 RAID 기법 중에서 차별화되는 RAID 0 의 특징
구분 설명 비고
디 스 크 최소 2 개 이상 디스크 필요 물리적 디스크로 구분
용 량 디스크 수의 합 ( 1 + 1 = 2 ) 300GB 디스크 2 개면 600 GB 저장공간
패 리 티 패리티 Disk 적용하지 않음 오류 검출 기능 부재
장 점 읽기 , 쓰기 속도 우수 (Data Stripe) 병렬 Disk I/O
장애 발생시 복구 기능 없음
단 점 안전성이 떨어짐 , 디스크 깨지면 복구 데이터 중복 저장 없음
불가
55

---

## Page 56

4. RAID
나 . RAID 1 의 구성도 및 특징 ( 일중 )
구성도 항목 내용
디스크 중복 쓰기를 통한 안정성의 2 배 향상
Parity 와 Striping 이 없고 ,
특징
디스크의 공간효율 2 배 하락
같은 데이터를 2 개 디스크에 중복 저장
최소 수량 2 개 (n : disk 수량 )
공간 효율 1/n
읽기 향상 N 배
쓰기 향상 1 배
고장 허용 n-1 disk
패리티 비트 (Parity Bit) 에 의한 오류 검출은 단지 오류 검출만 되지만 , 해밍코드 (Hamming Code)
는 오류 검출 후 오류 정정까지 가능 처리
56

---

## Page 57

4. RAID
다 . RAID 2 의 구성도 및 특징
항목 내 용
데이터 디스크
검사 디스크
A1 과 A2 패러티
A2 과 A3 패러티
A3 과 A4 패러티를
구성도
계산해서 별도
저장
특징 Bit 레벨의 Striping 과 Hamming - code Parity 사용 (Parity 단순제공 ) : 에러검출 - > 교정
최소 수량 3 개 (n : disk 수량 )
공간 효율 1 - 1/n ⋅ log (n - 1 )
2
읽기 향상 해당 없음
쓰기 향상 해당 없음
고장 허용 1 disk ( 단 오류디스크가 복구기록 코드 안에 있을 때 )
57

---

## Page 58

4. RAID
라 . RAID 5 의 구성도 및 특징
항목 내 용
구성도
특징 Block 레벨의 Stripping 과 Parity 사용 (Parity 분산 제공 )
최소 수량 3 개 (n : disk 수량 )
공간 효율 1 - 1/n
읽기 향상 n-1 배
쓰기 향상 Variable ( 상황에 따라 다름 )
고장 허용 1disk
58

---

## Page 59

마 . RAID 0+1
- RAID 0 의 장점인 빠른 처리속도와 RAID 1 의 Mirroring 을 이용한 구성방식
- 사용용량은 50%
- 레이드 0+1 은 먼저 디스크를 스트리핑 (RAID 0) 하고 , 디스크를 미러링 (RAID 1) 한다 .
( 적어도 4 개의 디스크 )
- 디스크가 6 개 일경우는 3 개씩 스트리핑하고 미러링을 그다음에 수행한다 .
[ 참고 ] RAID 1+0
레이드 1+0 은 먼저 디스크를 미러링 (RAID 1) 하고 , 그 이후 스트리핑 한다 . ( 적어도 4 개의 디스크 )
59

---

## Page 60

바 . RAID 1+0
[ 참고 ] RAID 1+0
- 4 개 이상의 디스크를 2 개씩 RAID 1 으로 구성하고 , 다시 RAID 0 으로 재구성하는 저장방식
- 레이드 1+0 은 먼저 디스크를 미러링 (RAID 1) 하고 , 그 이후 스트리핑 한다 . ( 적어도 4 개의 디스크 )
60

---

## Page 61

III. RAID 도입 시 고려사항
고려사항 내용
용량 및 확장성 - 현재 디스크 용량과 향후 증가 예상되는 디스크 용량을 감안
- RAID 0 에서 RAID 5 까지 중에서 현재 시스템의 환경과 적용되는 응용
지원하는 RAID Level
프로그램의 성격을 고려
성능대비 가격 - 성능대비 가격의 적정성 고려
- 운영 시 유지보수의 용이성 및 한 개 이상의 컴퓨터에서의 공유 가능
유지보수 용이성
여부
RAID 적용기술의
- 적용기술의 계층 , Cache 지원부분 , 디스크 모듈간의 인터페이스방식
계층 및 Cache 지원
고려
부분
61

---

## Page 62

[ 참고 ] 나 . 디스크 병렬화를 통해 제공 가능한 RAID 유형
기술 유형 RAID 유형 비용 성능 장애내성
미러링 (Mirroring) RAID 1 2N 1 2
비트레벨
RAID 0,2 2N 2 1/2
데이터 스트라이핑
데이터 스트라이핑
(Data Striping)
블록레벨
RAID 4,5,6 1.5N~2 2 1/2
데이터 스트라이핑
비트레벨 데이터 스트라이핑
- 비트 단위로 스트라이핑을 처리 하여 적은 자료든 대량자료이든 모두 성능향상에 도움이 됨 .
- Disk Failure 발생시 작은 부분의 bad sector 에도 장애발생
블록레벨 데이터 스트라이핑
- 블록 단위로 스트라이핑 하여 논리적 물리적 I/O 성능을 향상
- 블록 단위로 파일을 분할하여 저장하므로 Block 단위보다 적은 size 의 파일은 단일 Disk 에 저장
62

---

## Page 63

Chapter VIII. CA 응용기술
1. Arduino
2. 인메모리 컴퓨팅
63

---

## Page 64

OSHW: 해당 제품과 똑같은 기능 및 모양을 가진 제품을 만드는데 , 필요한 모든 것을 대중에게 공개한 전
자제품
번호 기출문제 비고
일반인도 쉽게 하드웨어를 만들 수 있는 아두이노 ( Arduino ) 에 대하여 설명
1 102 관 1
하시오
번호 모의고사 비고
1 Arduino 에 대해 설명하시오 13.12
2 릴리패드 아두이노 (LilyPad Arduino) 에 대해 설명하시오 .
오픈 소스를 지향하는 마이크로 컨트롤러 ( micro controller) 를 내장한 기기 제어용 기판 . 컴퓨터
메인보드의 단순 버전으로 이 기판에 다양한 센서나 부품 등의 장치를 연결할 수 있다 .
컴퓨터와 연결해 소프트웨어를 로드하면 동작을 하게 되므로 , 제어용 전자 장치부터 로봇과 같은
것을 만들 수 있는 ' 오픈소스 하드웨어 ' 라고 할 수 있다 . 자유 소프트웨어 운동에서 출발한 오픈
소스라는 개념을 하드웨어 부문까지 확산시킨 것이다 .
Arduino is an open-source electronics platform based on easy-to-use hardware and
software.
64

---

## Page 65

• http://store.arduino.cc/
65

---

## Page 66

I. 사물인터넷 기반의 개방형 플랫폼 , 아두이노 (Arduino) 의 개요
가 . 아두이노 (Arduino) 의 정의
- 오픈 소스를 기반으로 한 단일 보드 마이크로 컨트롤러
- 유연하고 , 사용하기 쉬운 하드웨어와 소프트웨어로 구성된 , 예술가와 디자이너 , 하비스트 ,
기타 인터렉티브 장비와 환경을 만들고 싶은 사람들을 위한 오픈 소스 전자 프로토타입 플랫폼
나 . 아두이노의 특징
특징 설명
- 아두이노를 동작시킬 소프트웨어 개발을 위한 통합환경의 제공
통합 개발 환경 (IDE) [ 참고 ] 통합 개발 환경 (Integrated Development Environment, IDE)
제공 IDE 란 소프트웨어 개발에 필요한 다양한 기능을 제공하는 PC 용
애플리케이션 패키지
- 컴퓨터의 다리 ( 터미널 , 핀 ) 에 스위치나 LED 램프 , 센서 등을 연결 사용
다양한 I/O 장치 지원
가능
아두이노 커뮤니티 - 많은 사람들이 참여 , 공개한 커뮤니티 , Wiki 를 통하여 정보획득 가능
- 누구나 프로젝트에 참여하고 활용 가능하도록 공개 됨 .
오픈소스 기반
- 아두이노 구성 SW, HW 대부분이 GPL 라이선스하 2 차 저작물
(GPL License)
공식인정
피지컬 컴퓨팅 - 디지털 신호를 기반으로 물리적인 방법의 정보 ( 신호 ) 를 주고 받음
66

---

## Page 67

II. 아두이노의 구성
67

---

## Page 68

나 . 구성요소
구성요소 설명
개발 환경 개발용 PC, 아두이노 IDE( 통합개발환경 ), USB 케이블 ( 아두이노 본체와 연결 )
아두이노 보드에서 실행되는 작성된 프로그램
스케치 (Sketch)
A program or code written for Arduino is called a sketch
마이크로 컴퓨터 보드 (Micro - Computer Board)
아두이노 본체
다양한 아두이노 제조사에서 호환 보드를 제작하여 판매
아두이노 본체와 연결되어 상호작용하는 다양한 I/O 장치
스위치 , LED 램프 , 센서 , 액츄에이터 등을 연결하여 다양한 용도로 확장
다양한 I/O
[ 참고 ] An actuator is a type of motor that is responsible for moving or
controlling a mechanism or system.
68

---

## Page 69

구분 아두이노 라즈베리파이
하드웨어적 , 소프트웨어적 전문지식이
없어도 누구나 쉽게 배우고 사용될 수 영국의 라즈베리 파이 재단이 학교에서
개념 있도록 개발되어진 , 오픈소스 기반의 기초 컴퓨터 과학 교육을 증진시키기
피지컬 컴퓨팅 플랫폼 위해 만든 싱글 보드 컴퓨터
( Physical Computing Platform)
형태 단일보드 마이크로컨트롤러 단일보드 마이크로프로세서
Processor 아트멜 AVR (ATMega 328) ARM 프로세서 (ARM11)
클럭속도 / 메모리 16MHz / 2KB 700MHz / 256MB
Ethernet 별도 연결 기본 탑재
데비안 , 아치 리눅스 , QtonPi 등 리눅스
운영체제 없음
배포판 제공
사용언어 C/C++ 파이썬 , C, 펄 등
내가 원하는 회로 형태로 사용자의 라즈베리 파이는 컴퓨터 대용으로
목적
목적에 맞게 사용할 수 있는 장치 다목적으로 활용 가능
구성도
69

---

## Page 70

아두이노 보드
MCU(Micro Control Unit): CPU 와 같이 연산 저장하는 소규모 컨트롤러 ( 미니 컴퓨터같이 )
• 아두이노 보드는 아두이노를 기반으로 여러 종류가 생산되어 판매되고 있다 . 주로 AVR 의 아트메가
(ATmega) 를 위주로 만들어 지고 , ARM 계열도 포함되어 있다 .
70

---

## Page 71

DMA( 직접 기억장치 액세스 )
In-Memory Computing
1. IMC(In-Memory Computing) 의 개념과 IMC 에서 In - Memory Data Management 에 대하여
설명하시오 .
( 정보관리 , 102 회 2 교시 )
71

---

## Page 72

In-Memory Computing 개념
- 하드디스크에 저장하던 DB 데이터를 메모리에 저장하고 처리하는 컴퓨팅 기술
- 어플리케이션을 구동하는 컴퓨터의 메인 메모리에 DB 데이터와 같은 주요 데이터를 저장하고 처리하는
컴퓨팅 기술
72

---

## Page 73

In-Memory Data Management : 데이터 관리 기술
기술요소 설명
∙ 데이터베이스 구조 전체를 컴퓨터 메인 메모리에 저장
In-Memory DBMS ∙ 어플리케이션이 메모리 위에서 완전히 동작할 수 있도록 메모리상의 데이터베이스에
직접 접근하는 DBMS
∙ 어플리케이션이 디스크 기반 DBMS 에 빈번히 접속함으로써 발생하는 병목현상을
In-Memory
줄이기 위해 어플리케이션에서 사용하는 데이터를 메모리에 저장하고 처리할 수
Data Grid
있도록 분산 객체 저장소를 제공하는 미들웨어
In - Memory Data Grid
Dynamic Random Access
DRAM Memory. 초대용량 휘발성
메모리 .
Flash NAND 플래시 메모리 . 비휘발성 .
Solid-state Driver : DRAM 이나
SSD
flash 에 정보를 저장하는 장치
64 비트 멀티코어프로세스 .
Multicore
대용량 병렬처리 (MPP) 환경 지원
73

---

## Page 74

기타
1. 오토마타 이론
74

---

## Page 75

오토마타 이론
Tips
1. 유한 오토마타 (110 회 , 정보관리 , 1 교시 )
도메인 / 토픽 컴퓨터구조 > 전산수학
키워드 단일상태 , 결정적 유한 오토마타 , 비결정적 유한 오토마타
1 . 유한 오토마타의개요
풀이 가이드 2 . 유한 오토마타의 유형 ( 결정적 , 비결정적 )
3 . 유한 오토마타의 활용
https ://ko.wikipedia.org/wiki/%EC%98%A4%ED%86%A0%EB%A7%88%
설명페이지
ED%83%80_%EC%9D%B4%EB%A1%A0
75

---

## Page 76

1. OSS
I. 오토마타는 유한한 상태를 갖고 , 입력을 받아 , 일력에 따라 상태를 전이하는 개념 , 유한 오토마타의 개요
가 . 유한 오토마타 (Finite Automata, FA) 의 정의
- 컴퓨터 프로그램과 전자논리회로를 설계하는데 쓰이는 이산적인 입력과 출력을 가지는 시스템의
수학적 모형
- 유한한 개수의 상태를 가질 수 있는 오토마타이며 , 상태기계라고도 부름
[ 설명 ] S1, S2 는 상태이고 , 1 과 0 은 기계가 입력으로 받아들이는 문자이다 . 이 기계는 1 과 0 으로
이루어진 모든 가능한 문자열 중 0 이 짝수 개인 것을 인지하고 , 그렇지 않은 것을 버린다 .
76

---

## Page 77

1. OSS
II. 유한 오토마타의 활용분야
구분 활용분야 설명
H/W 부문 - 설계 가능 논리소자 , 프로그래머블로직 컨트롤러 , 논리회로 ,
디지털 회로
활용 플립플롭 , 전자계전기
- 프로그램이 대응해야 하는 이벤트 (Events)
- 이벤트를 기다리는 프로그램 상태 (States)
응용 프로그램의 - 이벤트에 대한 응답시 상태들간 트랜지션 (Transitions)
설계 - 트랜지션 동안 취해진 액션 (Actions)
- 이벤트들 간 액션에 필요한 값을 갖고 있는 변수들 (Variables)
⇒ 자바스크립트 , C# 등을 사용한 응용 프로그램 설계시 사용
S/W 부문
- 결정적 오토마타를 사용하여 텍스트의 적합성을 판별
활용
텍스트 필터링
예시 ) 이메일 기본형식 필터링 : “ 문자열 ”+”@”+” 도메인 ” 판별
컴파일러 설계 - 컴파일러는 특정 언어를 다른 언어로 옮기는 프로그램
( 어휘분석기 ) - 입력한 코드를 자유문맥언어의 의미단위로 분리할 때 활용
- 패리티 비트는 오류검사를 위해 추가하는 비트
패리티 비트 생성
- 짝수 , 홀수 패리티를 오토마타를 사용하여 출력 ( 생성 ) 함
77
