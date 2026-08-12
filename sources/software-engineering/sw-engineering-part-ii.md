# SW공학 Part II

```yaml
source:
  id: SE-P3
  document: "2. SW공학_Part II_V6.2_20170920.pdf"
  source_ref: "local-source\\9주차_신규_pdf (2) (2)\\3. SW공학ii\\2. SW공학_Part II_V6.2_20170920.pdf"
  repository_policy: "Original PDF is kept locally; Markdown extraction is stored in Git."
material_note: "이 자료는 과거 강의자료입니다. 2016~2017 버전명이 포함되어 있고 파일 수정일은 2019-03-13입니다. 최신 기술, 법/제도, 표준, 제품 동향은 반드시 별도 검증이 필요합니다."
extraction:
  tool: "pdfjs-dist"
  pages: 502
  notes:
    - "Text was extracted page by page."
    - "Original images, charts, and exact visual layout are not embedded in this pass."
```

> 현행성 주의: 이 자료는 과거 강의자료입니다. 2016~2017 버전명이 포함되어 있고 파일 수정일은 2019-03-13입니다. 최신 기술, 법/제도, 표준, 제품 동향은 반드시 별도 검증이 필요합니다.

## Page 1

KPC 정보처리기술사 핵심 오브젝트
[Module 02]
소프트웨어공학 &
프로젝트관리 ( II)
•
기술사 강 정 배

---

## Page 2

목차
분류 빈도 Page 분류 출제빈도 Page
Chapter V. Architecture, Design & Development
SOA 중 디자인패턴 상
Web Service 하 18 생성 Pattern 중
SW Architecture 상 18 Abstract Factory Pattern 중
SW Architecture Style 중 Singleton Pattern 중
SW Architecture 평가 중 Factory Method Pattern 중
SW Architect 중 구조 Pattern 중
UML 상 Adapter Pattern 중
Use Case Diagram 상 Façade Pattern 하
Stereotype 중 행위 Pattern 중
Sequence Diagram 상 Strategy Pattern 중
State Diagram 중 Memento Pattern 하
Collaboration Diagram 중 Template Method Pattern 하
Class Diagram 상 MVC Pattern 중
Activity Diagram 중 Strategy Pattern 하
Component Diagram 중 TDD 중
OCL 중 McCabe( 맥캐브 ) 하

---

## Page 3

목차
분류 빈도 Page 분류 출제빈도 Page
Chapter VI. Test
1. Test 일반 상 121 테스트 커버리지 상
테스트의 유형 및 분류 상 PoC 중
리스크 기반 테스트 중 2. Test Process 상
Pairwise Testing 중 3. ISO 29119 하
Compliance Test 중 4. Test case 중
실증성 테스트 중
경험기반 테스트 기법 상
V-Diagram 중
Black Box 테스트 기법 중
White Box 테스트 기법 중
탐색적 테스트 상
테스트 차터 중
Little's Law( 리틀의 법칙 ) 중
성능테스트 상
테스트 자동화 중
Back - to - back testing 하

---

## Page 4

목차
분류 빈도 Page 분류 출제빈도 Page
Chapter VII. SW 유지보수 ( 유지관리 )
1. Lehman 소프트웨어 변화 하
2. 모듈화 중
3. 3R 중
4. SW 유지보수 중
5. 리팩토링 상
6. 소프트웨어 난독화 중

---

## Page 5

목차
분류 출제빈도 Page 분류 중요도 Page
Chapter VIII. SW 품질 표준 및 종합 14. TMMi 중
1. QM( 품질관리 ) 상 15. SP(Software Process) 인증 하
2. ISO 9126 상 16. QC 상
3. ISO 14598 중 18. 정보시스템 감리 상
4. ISO 12119 중 19. OSS 상
5. ISO 25000(SQuaRE) 중
6. ISO 12207 중
7. CMMI 상
8. SPICE 하
9. GS 인증 중
10. ISO 9000 하
11. Peer-review 상
12. Six Sigma 중
13. QA 상

---

## Page 6

목차
분류 출제빈도 Page 분류 중요도 Page
Chapter IX. SW 비용 산정 Chapter XI. 국내 소프트웨어 생태계 육성 방안
1. SW 비용 산정 일반 하 1. SW 육성 방안 상
2. LOC 방법 하 기타 SW 중심사회 하
3. Function Point 상
4. SW 사업 대가산정 가이드 하
5. 프로젝트 원가산정 하

---

## Page 7

SW 공학 Roadmap
참고 자료
Convergence
SDLC 개발방법론 ITSM
- 구조적개발방법론
- 경영 , 전략
- ITIL 3.0
- 폭포수모델
- 정보공학
- DB
- SLM
- Prototype 모델
- 객체지향
- MSP - Security
- Sprial 모델
- CBD
- ITO
- 반복적개발모델
- Agile
- RAD
- XP
- Product Line
소프트웨어공학 II
- 요구공학
- 도메인공학
- AOP
OP MA
Procurement SD
- RFI 분석 설계 코딩 테스트 릴리즈
- RFP
- 모듈화
- 제안서 / 평가 ITSM 평가
- 3R
- SW 분리발주
- Test
- ISO 20000
- UML - SW 유지보수
- SW 분할발주
- V-Model
- E-SCM
- SOA
- PMO
- SW Architecture
- SW 비용산정 (FP)
- EA/ITA
- Project Mgmt
- 정보시스템 감리
- QM
품질경영
제품품질
Process
- 9126 - 12207
- 6 Sigma
- 14598 - CMMI
- 9001
7
- 12119 - SPICE

---

## Page 8

Chapter V. Architecture & Design
SOA
SW Architecture
UML
Design Pattern
TDD
8

---

## Page 9

1. SOA
V. Architecture. Design & Development
기출문제
1. SOA 와 Web 2.0 에 대하여 다음 질문에 답하시오 .
가 . SOA 의 개념을 설명하시오 .
나 . Web 2.0 의 개념을 설명하시오 .
다 . SOA 와 Web2.0 의 차이점을 비교 설명하시오 .
( 관리 81 회 2 교시 )
2. 표준인터페이스 개념인 SOA(Service Oriented Architecture) 에 대하여 특징 , 구현기술 ,
구축전략 및 구축절차를 중심으로 기술 하시오 .
( 조직응용 81 회 4 교시 )
3. SOA(Service Oriented Architecture) 에 대하여 설명하시오 .
( 정보관리 78 회 1 교시 )
4. SOA 가 기존 SW 아키텍처와 대비되는 특징
( 조직응용 77 회 1 교시 )
5. OSGi (Open Service Gateway Initiative) 프레임워크를 기술하고 , 서비스 계층 (service layer)
에서 수행하는 역할을 SOA(Service Oriented Architecture) 관점 에서 설명하시오 .
( 정보관리 93 회 3 교시 )
9

---

## Page 10

1. SOA
V. Architecture
I. 서비스 기반 아키텍처 , SOA 의 개요
가 . SOA(Service Oriented Architecture) 의 개요
- 기존 어플리케이션의 서비스를 조합함으로써 , 새로운 어플리케이션을 구현할 수 있도록 한 통합
기술 및 아키텍처 모델
- 비즈니스를 지향하는 IT 사항
- 기술에 독립적인 아키텍처의 청사진을 제공하는 상위레벨의 아키텍처
나 . SOA 의 특징
특징
구분
- 비즈니스 프로세스를 별도의 독립된 구성요소로 보고 , 이를 설계시에 분리
프로세스 중심
- 비즈니스 로직은 비즈니스 서비스에 두고 , 프로세스 서비스는 각 비즈니스
서비스를 통합 ( 통합에 필요한 메시지처리와 서비스컨트롤 담당 )
- 구현 기술에 관계없는 연결 보장
플랫폼 독립적 어플리
케이션 통합
- 성능요구 , 보안수준 , 신뢰성 보장
- 서비스간 종속성을 줄이고 , 프로세스를 단순화
Loosely Coupled
- 메시지 상태관리 : 중복된 메시지 , 비동기 메시지 관리
메시지 및 프로세스 상
태관리
- 서비스가 전체프로세스 상에서 어느 상태인지 관리
협업과 재사용 - 서로 모듈을 공유하면서 새로운 서비스를 제공 ; 협업
10

---

## Page 11

II. SOA 의 기술적 레퍼런스 아키텍처 (Sample)
11

---

## Page 12

영역 설명
Interaction - 실제 사용자들이 화면을 통해 사용되는 서비스
서비스 - 엔터프라이즈 포탈을 통해 구현
- 기업 내부의 모든 비즈니스 프로세스를 관리하고 조정
프로세스 서비스
- BPM 툴을 통해 구현
내부의 서로 다른 데이터 소스에 대한 관리를 담당하는 서비스로서 정보 통합
정보 서비스
툴을 통해 구현
- 다양한 비즈니스 파트너에 대한 접속 서비스를 통해 연계될 수 있는 서비스
파트너 서비스
- 기업간 거래 표준을 지원하는 연계 툴을 통해 제공
비즈니스 - 실제로 비즈니스 로직을 구현하는 어플리케이션으로 데이터 - 처리나 트랜잭션
애플리케이션 서비스 처리를 담당하는 서비스
- 기존 시스템을 SOA 체계에 포함시키는 서비스
접속서비스
- 다양한 종류의 어댑터 기술을 통해 구현
- SOA 의 Back - bone 으로써 모든 서비스가 서로 연계되고 메시지의 전송 및
ESB
중재 , 변환 등의 작업을 담당하는 중추
(Enterprise Service
- ESB 를 통해서 각각의 서비스는 위치 , 메시지의 성격에 구애 받지 않고 작동
Bus)
- ESB 를 사용하여 프로세스 요소로 만들어진 서비스를 연결
- 어떤 서비스가 되었든지 표준화된 개발 서비스를 통해 구현
개발서비스
- 모델링 , 코드생성 , 테스팅 등의 서비스를 통해 SOA 어플리케이션이 만들어 진다 .
IT 서비스 관리 - 서비스로 구현된 모든 컴포넌트는 적절히 관리되고 개선
- 모든 서비스들이 실제로 안정적이고 요구되는 서비스 수준에 맞게 서비스 될
Infrastructure
수
서비스
12
있도록 하는 기반 구조

---

## Page 13

III. SOA Layer; Technical Architecture 측면
- 표준화된 통합을 위해서 웹서비스 활용 ; 웹 서비스의 구성도 참조
- ESB 와 BPM 을 위해서는 Process Orchestration 및 Workflow 기술 활용
- 사용자 UI 처리를 위한 X - Internet 및 Enterprise Portal 솔루션이 활용
13

---

## Page 14

IV. SOA 와 Web 2.0, CBD 비교
[ 참고 ] SOA 와 Web Service 관계
가 . SOA 와 Web 2.0 비교
14

---

## Page 15

나 . SOA 와 CBD 비교
15

---

## Page 16

V. SOA 이슈 사항
16

---

## Page 17

VI. SOA 패러다음 대세에서 벗어난 일종의 흐름 ; API 형태로 적용 중 .(2007 년 자료 )
17

---

## Page 18

[ 참고 – 웹 서비스 기반의 Open API]
18

---

## Page 19

[ 참고 – 웹 서비스 기술 / 표준 ]
구분 특징 및 설명
- Universal Description, Discover and Integration
- 필요한 서비스를 찾을 수 있는 웹 서비스 레지스트리 ( 서비스 등록 , 검색 )
UDDI
- 웹 서비스와 비즈니스를 발행 (publish)/ 검색 (Find) 하기 위한 기술적인 스펙
- Web Services Description Language( 웹서비스를 이용하기 위한 정보가 기술된 XML 파일 )
- 웹 서비스를 표현하고 기술하는 언어 ( 서비스 표현 ); Message(type; parameter) 구성
WSDL
- 웹 서비스의 공개 인터페이스를 설명하기 위한 XML 문법 ; Operation(class; Method) 구성
- Simple Object Access Protocol
- 웹 서비스에서 사용되는 보편적이며 확장성 있는 메시지 프로토콜
SOAP
( 데이터 통신 프로토콜 ); Header 와 Body 로 구성
19

---

## Page 20

교류의 유물적 전거로서의 해로 유적 . 스웨덴 왕 구스타브 아돌프 2 세가 30 년 전쟁에 대비하여 스웨덴과
네덜란드의 직인들을 동원하여 1627 년부터 건조한 군함이다 . 이 함선은 3 개의 돛대 ( 주돛대 높이
180 피트 ) 에 전장 230 피트 , 고물 높이 60 피트의 대선박일 뿐만 아니라 , 700 여종의 조각으로 장식한
화려한 선박이기도 하였다 . 바사 (Vasa) 호
하지만 1628 년 8 월 10 일 처녀 항해에 들어서자마자 침몰을 당하는 불운으로 , 50 명이 사망하고 5 , 000 만
도르의 재화가 수장되었다 . 1961 년 샐비지 (salvage, 해난구조 ) 작업으로 선체가 건져 올려져 지금은
스톡홀름의 바사 박물관에 보존되어 있다 . 20

---

## Page 21

2. SW Architecture
V. Architecture
기출문제
1. 소프트웨어 아키텍처 (Software Architecture) 를 정의 하시오 . 세가지 주요 요소 를 중심으로
기술하시오 .
( 관리 81 회 1 교시 )
2. 디자인 패턴과 아키텍처 스타일 의 차이를 설명하시오 .
( 관리 81 회 1 교시 )
3. CBD 방법론을 적용하여 프로젝트를 수행하려고 한다 . 컴포넌트 정의에 앞서 소프트웨어 아키텍처에
대해 정의하고자 한다 .
가 . 소프트웨어 아키텍처 단계의 목적 ( 작업완료기준 ) 을 기술하시오 .
나 . 수행내용을 기술하시오 .
다 . 고려할 사항 등에 대하여 기술하시오 .
( 정보관리 80 회 4 교시 )
4. 소프트웨어 아키텍처 평가모델인 ATAM (Architecture Tradeoff Analysis method) 과
CBAM (Cost Benefit Analysis Method) 에 대해 프로세스를 중심으로 논하시오 .
( 조직 80 회 4 교시 )
21

---

## Page 22

2. SW Architecture
V. Architecture
기출문제
5. 소프트웨어 아키텍처의 중요성 및 품질속성 을 시스템 , 비즈니스 , 아키텍처 관점으로 구분하여
설명하시오 .
( 정보관리 87 회 3 교시 )
6. 소프트웨어 아키텍처의 정의 , 역할 , 아키텍처 모델의 중요성을 설명하고 , 여러 가지 아키텍처
스타일 을 설명하시오 .
( 정보관리 86 회 3 교시 )
7. 소프트웨어 아카텍처를 구성하는 뷰 (View) 의 종류를 나열하고 각각의 뷰를 비교 설명하시오 .
각각의 뷰별 목적과 표현방식에 대하여 설명하시오 .
( 정보관리 78 회 4 교시 )
8. 소프트웨어 아키텍처 드라이버 (Architecture Driver) 에 대해 설명하시오 .
( 정보관리 104 회 1 교시 )
9. 귀하는 자세대시스템 구축팀의 아키텍트 (Architect) 로서 상세화단계 (Elaboration Phase) 에서 작성
해야하는 SAD(Software Architecture Documents) 문서의 목차 를 작성하시오 .
( 정보관리 105 회 3 교시 )
22

---

## Page 23

2. SW Architecture
V. Architecture
I. 소프트웨어 컴포넌트와 인터페이스와의 상호관계 및 구조 , 소프트웨어 아키텍처 개요
가 . 소프트웨어 아키텍처 (Software Architecture) 정의
− 소프트웨어 아키텍처는 소프트웨어 컴포넌트 및 외부로 나타나는 컴포넌트의 특성 , 관계들로
구성되는 시스템의 구조
− 소프트웨어 아키텍처는 프로그램 / 시스템의 컴포넌트 , 컴포넌트들 간의 상호관계의 구조이며 이들을
설계하고 전개하기 위한 지침과 원리
− 소프트웨어 컴포넌트들과 그들의 외부적으로 보여지는 특성 , 그리고 그들 간의 상호관계 들로
구성되는 해당 시스템의 구조 또는 구조들임
− Software architecture is the high level structure of a software system, the discipline of
creating such structures, and the documentation of these structures. (From 위키피디아 )
− Architecture is the fundamental organization of a system embodied in its components, their
relationships to each other, and to the environment, and the principles guiding its design
and evolution. [IEEE 1471]
나 . 소프트웨어 아키텍처의 등장배경
1) 주요 Stakeholder 간의 관점 조율을 통한 시스템 최적화
( 사용자 , 개발자 , CIO, CFO, CEO, 유지보수조직 , 보안담당자 , 형상관리자 , 마케팅 조직 등 )
2) 요구사항들간의 개념상의 충돌 조정
( 성능 : 정보보호 , 유지보수성 : 안정성 , 개발단가 : 투자단가 등 )
3) 우선순위 결정과 요구사항들간의 상관 분석을 위한 작업 필요
23

---

## Page 24

2. SW Architecture
다 . 특징 (1 ) /* 표 ; 1 교시형 */
1) 간 략 성 : 이해하고 추론할 정도의 간결성 유지
2) 추 상 화 : 시스템의 추상적인 표현을 사용 ( 복잡도 관리 )
3) 가시성 : 시스템에 무엇이 포함되어야 할지를 보여줌 ( 청사진 ; Blue Print; 도면 )
라 . 특징 (2) /* 표 ; 2 교시형 */
구분 키워드 설명
- Agility
변화민첩성
- 다양한 비즈니스 요구사항의 민첩한 대응 및 처리
- TCO, ROI
비즈니스 측면 비용절감
- 소프트웨어 재사용 , 자산화를 통한 개발비 절감
- Standard
표준화
- 재사용 가능한 산업별 표준화 지원
Communication - 개발 관련 이해당사자들간의 원활한 의사소통 수단
Complexibility - 소프트웨어 복잡성 증가에 따른 해결 대안
기술적 측면
관점 (Aspect) 모형 - 이해당사자들간의 관심사에 대한 모형 제시
24

---

## Page 25

2. SW Architecture
마 . 등장배경 , 필요성 템플릿 /* 표 ; 2 교시형 */
- 소프트웨어 시스템의 기능 , 복잡도 증가로 인한 체계적인 아키텍처 설계와 품질 및 생산성 향상을 위한
방안
답안 작성 순서 :
1. 그림 템플릿으로 작성
2 . 테두리
3 . 밑에 그림 설명
25

---

## Page 26

II. SW 아키텍처 프레임워크 ( ISO/IEC/IEEE 42010 가 최종 표준화됨 )
Mission
fulfills
SW 임무
1..* 1..*
influences has an
Environment System Architectures
inhabits
described by
산출물
has 1 1
1..* 1..*
identifies provides
Architectural
Stakeholder Rationale
is important to
Description
1..* 1..*
1..* 1..*
participates in
1..* 1..*
근거 , 설명
is addressed to
has
selects
organized by
1..* 1..*
identifies 1..* 1..*
1..* 1..*
1..* 1..*
관심사
1..* 1..* conforms to
Concern Viewpoint View
used to cover
1..* 1..*
participates in
has source
0..1 0..1
aggregates
consists of
LibraryVie
1..* 1..*
1..* 1..*
wpoint
establishes methods for
Model
1..* 1..*
IEEE1471 개념적 프레임워크
- 소프트웨어 중심 시스템의 아키텍처를 기술 (description) 하기 위한 표준
- IEEE 1471 is an IEEE Standard for describing the architecture of a software-intensive system,
also known as software architecture or system architecture.
26

---

## Page 27

II. SW 아키텍처 프레임워크 구성 요소 ( 계속 )
SA 구성 요소 설명
- 아키텍처를 기록하기 위한 산출물들 을 의미
- 하나의 AD 는 System 에 대한 관심사를 나타내는 관심사 (Concern) 와
Architecture
Description (AD)
관련 , 이에 대응하는 하나 이상의 Stakeholder 와 연관됨
- 하나의 AD 는 System 의 하나 이상의 View 로 구성
- 이해관계자란 소프트웨어 시스템 개발에 관련된 모든 사람과 조직을
이해관계자 (Stakeholders) 의미하며 , 고객 , 최종사용자 , 개발자 , 프로젝트 관리자 , 유지보수자 ,
마케팅 담당자 등을 포함
- 동일한 시스템에 대해 각 이해관계자들은 서로 다른 의견과 목표 .
( 예 ) 사용자 입장 : 기본적인 기능 이외에도 신뢰성 , 보안 , 사용성 등의
관심사 (Concerns) 품질이 만족되어야 함
- 유지보수자 입장 : 유지보수가 쉬워야 함
- 개발자 입장 : 적은 비용과 인력으로 개발이 가능해야 함
- 이해관계자들이 보고 싶은 관점 (Viewpoint)
- 서로 다른 역할이나 책임으로 시스템이나 산출물들에 대해 서로
관점
다른 관점 (Where 에 맞추어짐 )
(Viewpoint)
- Viewpoint 는 View 를 구성하기 위한 규칙을 정의하는 패턴 으로 각각의
View 에 1:1 로 대응함 .
- View 는 이런 이해관계자들과 이들이 가지는 생각이나 견해로부터
뷰 (View) 전체 시스템에 표현 . ( 예 ) 아키텍처 Framework 을 구성하는 항목
- What 중심에 맞추어짐 (4+1 view)
27

---

## Page 28

[ 참고 ] Understanding Views and Viewpoints
• Definitions:
– A view is a description of the entire
system from the perspective of a set of
related concerns. A view is composed of
one or more models.
– A viewpoint determines the resources
and rules for constructing a view
• Example:
– A chair and a table have different front
views, but the concept of a front view is
the same
28

---

## Page 29

III. 소프트웨어 아키텍처 View
- 복잡한 소프트웨어 아키텍처를 다양한 Stakeholder 들이 소프트웨어 아키텍처를 바라보는 측면으로서 ,
View 는 시스템의 여러 가지 측면을 고려하기 위한 다양한 관점 (Viewpoint) 을 바탕으로 정의 .
29

---

## Page 30

III. 소프트웨어 아키텍처 View
- 복잡한 소프트웨어 아키텍처를 다양한 Stakeholder 들이 소프트웨어 아키텍처를 바라보는 측면으로서 ,
View 는 시스템의 여러 가지 측면을 고려하기 위한 다양한 관점 (Viewpoint) 을 바탕으로 정의 .
- 4 + 1 View Model ; UML 의 4 + 1 View 가 사실상 표준 (De facto Standard) 임 / UML 관점 / 유리 PD
1 ) 사용 사례 관점 (Use Case View)
- 시스템의 외부 사용자 관점에서 사용 사례 (use cases) 와 이들간의 관계를 정의
- 시스템 아키텍처를 도출함
2 ) 설계 관점 (Logical View)
- 상위 수준에서 시스템의 논리적인 구조와 행위 (behavior ) 를 클래스 , 인터페이스 , 협력관계
(collaboration) 로 정의
- 시스템의 기능 요구사항을 설명
3 ) 구현 관점 (Implementation View )
- 독립적으로 실행되는 컴포넌트와 이들간의 관계를 정의
4 ) 프로세스 관점 (Process View)
- 시스템의 non - functional 요구사항을 설명
5 ) 배치 관점 (Deployment View)
- 실행되는 시스템 하드웨어와 소프트웨어의 관계 를 정의
[LIP]
30

---

## Page 31

IV. 소프트웨어 아키텍처 프로세스 ( 절차도 )
1. 아키텍처 요구 파악 2. 참조 아키텍처 준비 3. 아키텍처 모델링 4. 아키텍처 프로토타입핑 5. 아키텍처 배포
TRM,SP 등
아키텍처모델
이해당사자 식별 뷰 정의 유즈케이스 단위 설계
구조화
이해당사자 요구사항 식별 컴포넌트 단위 설계
참조 아키텍처 준비
패턴 / 스타일 설정
프로토타입 모델
구조화
품질 속성 식별
기술 이슈설계
표준모델 조사 / 검토 프레임워크 선정
기능성 , 사용성 등
아키텍처 문서화
품질 속성 시나리오 작성
아키텍처 발표
구현
업계모델 조사 / 검토 설계 이슈 선정
자료 작성
아키텍처 요구사항 파악
아키텍처 프로토타이핑
아키텍처 모델링
아키텍처 배포
아키텍처 리스크 식별
프로토타입 팀 구성
아키텍처 자료 검토
아키텍처 문서
아키텍처 평가
프로토타입 검토
검토
31

---

## Page 32

• 소프트웨어 아키텍처 Document(SW Architecture Document) 목차
1. 아키텍처 정의 Overview
2. 아키텍처 Design
2.1 아키텍처 Objective
2.2 Conceptual View
1) S/W 구성도
2) S/W 아키텍처 다이어그램
3) S/W 아키텍처 클래스 다이어그램
2.3 Application Layer View
1) Application 구성도
2) Application Layer 구성요소
2.4 Framework View
1) Class Diagram
2) Sequence Diagram
2.5 시스템 개발 구성요소
3. Security
4. Development Common
4.1 Configuration
4.2 Navigation 정보
4.3 Message
4.4 SQL 문 관리
5. Common Code Management
6. Error & Log 처리
7. DB Connection
8. 맺 음 말
32

---

## Page 33

V. 소프트웨어 아키텍처 스타일
가 . 개념
아키텍처가 만족시켜야 하는 시스템 품질 달성 방법를 정리하여 , 가이드를 제공하기 위한 패턴 및 방법론
나 . 기능 제공 - 아키텍처 스타일은 다음과 같은 기능을 제공한다 .
• 소프트웨어 시스템의 구조를 체계적으로 구성하기 위해 기본 스키마를 제시한다 .
• 미리 정의된 서브시스템을 제공한다 .
• 각 아키텍처 패턴 간의 책임을 명시한다 .
• 패턴 간의 관계를 조직화하는 규칙 , 가이드라인을 제시한다 .
• 문제를 소프트웨어 모듈 단위로 분해하는 방법을 제시한다 .
• 분해한 소프트웨어 모듈 단위가 상호작용하는 방법을 제시한다 .
33

---

## Page 34

구 분 내 용
- 서브시스템이 단일 중앙 저장소의 자료를 접근하고변경
- 서브시스템들이 독립적이고 중앙 자료 저장소를 이용하여 상호 대화 , 여러 모듈에서
사용함 .
저장소구조
(Repository
Architecture)
스타일
( 예 ) 데이터베이스 시스템 사례
34

---

## Page 35

구 분 내 용
- 모델 (Data 관리 ), View(UI 관리 ), 제어 ( 상호작용 정의 ) 로 분리
- 분리하는 이유 : Data 를 여러 개의 View 로 표현하거나 , View 와 Controller 가
Data 보다 자주 변경되는 될 수 있기 때문
MVC 구조
(Model/View
/Controller)
스타일
( 예 ) 동일한 모델에 대한 다양한 뷰 혹은 front 페이지 제공 유리
35

---

## Page 36

구 분 내 용
- 서버는 클라이언트라 불리는 서브시스템에 서비스를 제공
- 클라이언트 : 사용자로부터 입력을 받아 범위를 체크하고 데이터베이스 트랜잭션을
구동하여 필요한 데이터 수집 .
- 서버 : 트랜잭션을 수행하고 데이터의 일관성을 보장한다 .
클라이언트 /
서버
(Client/
Server)
스타일
( 예 ) 3 - tier 클라이언트 - 서버 모델
36

---

## Page 37

구 분 내 용
서브시스템이 입력 데이터를 받아 처리하고 결과를 다른 시스템에 보내는 작업이 반복
- 서브 시스템을 필터라고 하고 서브시스템 사이의 관계는 파이프 .
- 각 필터는 입력 파이프에 받은 데이터의 내용과 형식만을 알고 그것을 생성한 필터에
대하여는 모름 .
- 파이프와 필터 구조는 변경 가능하며 , 필터는 다른 필터와 교환 될 수 있고 다른
목적으로 재구성될 수 있음 .
Data Flow
(Pipes and
Filters) 스타일
( 예 )
37

---

## Page 38

구 분 내 용
- 각 서브시스템이 하나의 계층이 되어 하위층이 제공하는 서비스를 상위층의 서브
시스템이 사용
- 추상화의 성질을 잘 이용한 구조
계층 구조
(Layered)
스타일
( 예 ) 대표적 예 : OSI 7 Layers, TCP/IP 5 Layers
38

---

## Page 39

VI. SW 아키텍처 평가방법
- 정의 : 제시된 SW 아키텍처가 개발될 SW 에 대해 요구되는 품질 특성을 충족시킬 수 있는가를 아키텍처
수준에서 평가하는 작업
- SW 아키텍처와 요구사항을 입력하여 시행함
- SW 아키텍처 평가 방법론 유형
구분 설명
- 직접적으로 품질 요소를 위해 미리 정의된 Profile 에 의존하여
평가하는 방식
Scenario based
- 시나리오에 기반하므로 평가결과도 정밀
- ATAM, SAAM 등
Simulation based
- BMT 와 같은 시뮬레이션 기반 평가 방식
Mathematical model based
- 기준 모델을 수치화하고 이를 기초로 평가하는 수학적 기반 모델
- 정량적인 분석이 어려우므로 , 경험기반의 평가 방법
Experience based
- 품질평가를 위해 정형화된 모델을 갖지 않고 경험을
중요한 평가수단으로 활용
39

---

## Page 40

- SW 아키텍처 평가 유형
평가유형 상세설명
- Architecture Trade-off Analysis Method
- 아키텍처가 품질속성을 만족시키는지 판단 , 품질 속성간의 상호작용 확인 단계
ATAM
- 아키텍처가 목표로 하는 품질만족도 , 각 품질간의 연관성 ,
즉 , 품질목표간의 트레이 드 - 오프가 있 는 지 파악 가능한 아키텍처 평가방법
- Cost Benefit Analysis Method
- SAAM, ATAM 의 기술적 아키텍처 중심평가를 보완하여 시스템 구축 시 , 경제성
CBAM
평가까지 하여 수익이 최대가 될 수 있도록 의사결정을 도와주는 SW 아키텍처
평가모델
- Software Architecture Analysis Method
SAAM
- 최초로 정리된 평가방법 , 다양한 수정가능성들의 관점에서 아키텍처 분석
- 수정가능성과 기능분석 중심의 최초의 아키텍처 평가방법
- Active Reviews for Intermediate Designs
- 부분 아키텍처를 아키텍처 초기에 평가하는 방법으로 시나리오 중심의
ARID
ATAM,SAAM 과 설계검토 방법인 ADR(Active Design Review) 를 혼합한
아키텍처 평가방법
- 아키텍처 설계 초기에 검토하여 발생가능한 위험감소
40

---

## Page 41

I. SW 아키텍처 평가 유형 (ISO 9126 참조 ) 기반 - ATAM
- 품질 속성 요구사항과 비즈니스 목표달성을 위한 아키텍처 결정사항들을 평가하며 시나리오를
중심으로 품질 속성 요구 사항을 찾아내고 아키텍처가 특정 품질 속성들을 만족하는지를 분석 다양한
이해관계자들과 함께 위험요소 , 민감점 , 상충점 등을 분석
- ATAM 의 품질요소 : Performance , Reliability, Availability, Security, Modifiability,
Portability, Functionality , Variability , Subsetability, Conceptual Integrity
구분 품질 속성 설명
상호운영성 정해진 소프트웨어와 상호 작용하는 능력에 영향을 미치는 속성
소프트웨어의 프로그램이나 데이터에 사고 든 고의적이든 적법하지 않게 접근하는 것을 막
보안성
을 수 있는 능력에 영향을 주는 속성
정밀성 합의한 결과나 효과 또는 명문화한 권리 조항에 영향을 미치는 속성
시스템
소프트웨어에 오류가 생기거나 정해진 상호 작용 방식에 문제가 생겼을 때도 최소 정해 놓
오류 허용성
은 수준으로 동작하는 능력에 영향을 미치는 속성
장애로 직접 영향을 받는 데이터를 복구하고 일정 수준 이상으로 다시 동작하는 능력과 이
회복성
때 필요한 시간과 노력에 영향을 미치는 속성
적합성 특정 작업을 처리하는 기능의 적합성과 존재에 영향을 미치는 속성
준거성 표준 , 관습 , 법률 , 규격 , 협정 같은 정해진 규칙을 준수하는 속성
비즈니스
이해성 소프트웨어의 개념과 활용 방법을 이해하는데 필요한 사용자의 노력에 영향
습득성 소프트웨어의 활용 방법을 배우고 익히는 데 필요한 사용자의 노력에 영향
41

---

## Page 42

구분 품질 속성 설명
변경성 수정할 때 , 장애를 제거할 때 , 동작 환경을 변경할 때 드는 노력에 영향
시험성 수정된 소프트웨어를 검증하는 데 필요한 노력에 영향을 미치는 속성
아키텍 원래 필요한 작업이나 방법만 써서 소프트웨어가 동작하는 환경을 바꿀 수 있
적응성
처 는 가능성에 영향을 미치는 속성
일치성 소프트웨어가 이식성과 관련된 표준이나 관례를 잘 따르는지 나타냄
대체성 대상 소프트웨어를 특정한 다른 소프트웨어로 바꿔서 쓸 수 있는지 나타냄
42

---

## Page 43

II. ATAM Flow 개념적 설명
비즈니스 드라이버 : 비즈니스 동인 ( 사업에 상당한 영향을 주는 물리적 , 비물리적 행위 )
43

---

## Page 44

I. SW 아키텍처 평가 유형 – CBAM 개념
아키텍처에 영향을 주는 품질속성들의 비용을 산출해 조직에 이익 (Benefit) 을 줄 수 있는 아키텍처를
결정하는 비용중심의 의사결정 평가방법
- CBAM 은 품질속성 ( 예 : 성능 , 확장성 , 신뢰성 등 ) 대신 사용 가능도 (Utility Value) 기반으로 비용을 정량화
- ATAM 이나 SAAM 에서 부족한 경제성 평가를 보강할 때 함께 사용
- 두 단계로 반복되며 첫번째 실행에서는 투자수익율이 가장 높은 아키텍처를 결정하고 두번째는 부작용
및 위험과 같은 불확실성을 식별함
44

---

## Page 45

III. CBAM 개념도
- P(Performance), S(Security), M(Modifiability) 등의 이익을 정량화하여 , 아키턱처 결정과 구현했을
때의 비용 (Cost) 와 이익을 ROI 측면으로 - 경제성 분석 을 통해 , 판단한다 .( 끌어낸다 )
45

---

## Page 46

VII. 소프트웨어 아키텍트
가 . SW Architect 정의
프로젝트의 전체적인 설계 / 아키텍처 구성에 책임을 갖고 있으며 , 프로젝트와 관련된 여러 개발
활동들과의 상호 연계를 관리하는 사람
나 . 소프트웨어 아키텍트의 역할
- Key Technical Consultant 의 역할
- 기술적인 영역의 의사결정자 : 프로젝트의 성공을 위한 가장 우선적인 것은 많은 요구 사항들 간의
Trade - Off 들에 대한 파악과 이를 근거로 한 의사결정
- 기술적인 코치 의 역할 : 해당 프로젝트 수행 시 기술적인 리더십을 가지고 끌어가는 역할
- 프로젝트 코디네이터 역할 : 관리자와 개발자간의 의견충돌에 대한 중재자
- 아키텍처 구현자의 역할 : 구현을 통하여 신기술 및 솔루션에 대한 실제적인 검증이 필요
- 아키텍처의 중요성 인식 확산자 : 소프트웨어 아키텍처의 중요성을 인식시킴
다 . 소프트웨어 아키텍트에게 요구되는 스킬
1) 기술적인 측면 뿐 만 아니라 조직의 다양한 사람과의 조정능력이 필요
- 프로젝트 관리자 - System Architect - 소프트웨어 개발자 - 다른 Software Architect
- 마케팅 담당 - 고객
2) 무엇보다도 경험이 중요함
- 자신의 실무 경력을 통하여 쌓은 경험
- 많은 사람들이 시행착오를 통하여 정리한 것을 간접적으로 취득한 경험
46

---

## Page 47

[ 출제 예상 문제들 ]
참고 자료
IEEE1471
SW Architecture 평가
SAD(SW Architecture Description)
SAD
소프트웨어아키텍처 스타일
SW Architect
시스템 아키텍처의 결정에 큰 영향을 미치
SW Architecture
아키텍처 드라이버
는 요구사항
뷰는 해당 관점에서 파악되는 전체 시스템
뷰
아키텍처 패턴
품질속성의 목표를 파악하고 속성간 우선
순위를 파악하도록
유틸리티 트리
해주는 시나리오 도출 기법
47

---

## Page 48

VII. 소프트웨어 아키텍처의 발전방향
가 . 기술적인 측면
- 소프트웨어 공학 발전 측면에서도 소프트웨어 아키텍처는 가장 중요한 밑천이 되고 있음
- Architecture Pattern 등 활발한 연구 진행 중
나 . 프로젝트 적용 측면
- J2EE 또는 .NET, CORBA 처럼 프레임워크를 근간으로 아키텍처는 발전되어 가고 있으며 , 또한 이를 기
반으로 적용되고 있음
- EJB 기반을 근간으로 한 대부분의 CBD 프로젝트에서의 소프트웨어 아키텍처를 근간으로 하여 프로젝
트가 수행되고 있으며 , 더욱 활발히 전파될 것으로 예상됨 .
다 . 대표적인 SW F/W
- Struts: Open Source J2EE 기반 SW 프레임워크
- LG CNS: LAF/J, LAF/.net, LAF/UI 등
샘플 – 스트럿츠 II 특징
48

---

## Page 49

UML
V. Architecture. Design & Development
기출문제
1. 객체지향 모델의 표현 방법인 UML(Unified Modeling Language) 을 사용 하여 " 수강신청 처리 " 에 대
한
시스템을 설계하시오 .
반드시 유스케이스 다이어그램 (use - case diagram), 시퀀스 다이어그램 (sequence diagram),
클래스 다이어그램 (class diagram), 액티비티 다이어그램 (activity diagram) 을 작성하고 ,
필요시 다른 diagram 을 추가 작성하시오 . ( 관리 86 회 3 교시 )
2. 온톨로지의 개념을 설명하고 이와 관련된 객체지향 설계언어인 UML 의 장점 에 대해 설명하시오 .
( 조직 84 회 4 교시 )
3. 다음 UML 모델을 자바 코드로 변환하시오 . 분기문은 if 문을 사용하고 Order 클래스와
Product 클래스를 작성하시오 .
1. A[isDiscount-true]:getDiscountPrice()
2. A[isDiscount-false]: get Price()
49

---

## Page 50

UML
V. Architecture. Design & Development
기출문제
4. 다음 자바 (Java) 코드를 UML 로 기술 하시오 .( 관리 78 회 4 교시 )
public class Employee {
String EmployeeName;
String address;
String phoneNumber;
EmployeeInfo getEmployeeInfo() {
Return employeeInfo;
}
}
public class Developer extends Employee {
String developerID;
String getdeveloperID() {
return developerID; }
}
5. 온톨로지의 개념을 설명하고 이와 관련된 객체지향 설계언어인 UML 의 장점 에 대해 설명하시오 .
( 조직 84 회 4 교시 )
50

---

## Page 51

UML
6. UML(Unified Modeling Language) 2.0 에 대해 다음 물음에 답하시오 .
( 1) 클래스간의 관계를 나타내는 Association, Aggregation, Composition 에 대해
비교 설명하시오 .
( 2) UML 4 - 계층 구조에 해당하는 M0 계층 , M1 계층 , M2 계층 , 그리고 M3 계층에 대해 설명하시오 .
7. UML 스테레오 타입 (stereotype) 에 대하여 설명하시오 .
( 정보관리 , 101 회 1 교시 )
8. UML(Unified Modeling Language ) ( 컴퓨터시스템응용 , 102 회 , 1 교시 )
9. 다음 상태를 기술하는 상태 다이어그램 (State Diagram) 을 작성하시오 .
- PC 를 켜면 부팅 (Booting) 작업이 수행된다 .
- Do/Bootup 의 결과로 GUI 는 작동 중 상태로 전이된다 .
- 여기서 PC 를 끄게 되면 (Shut Down) 끝 마무리 상태로 전이된다 .
- PC 를 켜 놓은 상태에서 아무것도 하지 않으면 (Time out) 스크린 세이버가 작동된다 .
- 키 입력 또는 마우스 움직임에 따라 다시 작동 중 상태로 바뀐다 .
( 정보관리 108 회 3 교시 )
51

---

## Page 52

UML
Java 언어의 추상 클래스 (Abstract Class) 와 인터페이스 (Interface) 에 대하여 다음 질문에 답하시오 .
가 . 자식 클래스명이 Man 인 Human 추상 클래스는 name, eat(), sleep() 속성과 메소드로 구성되어
있다 .
자식 클래스명이 Pants 인 Dress 인터페이스는 status, takeOff(), putOn() 속성과 메소드로
구성되어 있다 .
이에 대한 클래스 다이어그램 을 작성하시오 .
나 . Human, Dress, Man, Pants 클래스 및 인터페이스 에 대한 선언 부분을 각각 작성하시오 .
( 정보관리 108 회 2 교시 )
52

---

## Page 53

I. 객체지향 모델링 기술과 방법론의 표준 , UML 의 개요 – 그래픽 형태를 통한 객체지향 설계 설명 도구
가 . UML(Unified Modeling Language) 의 정의
- 객체 지향 분석 / 설계가 S/W 공학의 새로운 추세로 자리매김함에 따라 관련된 방법론을 표준화할
필요성을 느끼고 OMG(Object Management Group – UML, MDA 를 제정한 협회 ) 에서 객체
모델링 기술과 방법론을 표준화 한 것으로 단어자체가 의미하는 언어가 아니고 모델링을
위한 Notation 을 말함
나 . UML 의 등장 배경 및 필요성
- 객체지향 모델링을 위해 학자들 마다 중복되고 일부 다른 방식으로 표현 ,
- 보다 체계적인 모델링 방법을 표준화하기 위해 3 명의 학자가 주장하는 표기법의 통일이 필요하게 됨
- 객체지향 시스템 개발 전 과정 (Life Cycle) 에서 개발자와 사용자간에 표준화된 의사소통 방식 필요
- 자기 자신 , 팀 동료 , 고객들과의 의사소통 – 자신의 이해가 다른 사람과 일치하는지 확인하기 위한
방법 ( 1994 년 , 부치 , 럼바 , 야콥슨 연구시작 - > 1997 년 발표 )
53

---

## Page 54

다 . UML 의 특징
1) 단순 표기법이라기 보다는 사용하는 형식과 각각의 표기에 의미를 가진 언어
2) 이용 시 개발자간 의사소통 원활 , 객체 개발 프로세스 : 반복적 점진적 과정
3) 개발규모 , 개발 프로세스 , 언어에 관계없이 적용가능
4) UML 은 객체지향 개발 만을 위한 것이 아니라 통합 모델링이므로 다른 모델을 모델링 시
사용 가능 UML 은 method 가 아니며 , 특정 프로세스와 무관함 .
• OMG 에 UML 1.1d 은 1997 년 말에 표준 모델링 언어로 채택
• OMG 는 UML 의 관리 기법을 받아들여 1998 년에 새로운 수정안을 발표
• 1.3 과 1.4 그리고 1.5 가 나와 있고 , 이전 버전들 , 즉 버전 1.X 는 대부분의 모델 및 UML 모델링
책의 기본이 됨 .
• 2005 년 버전 2.0 이 OMG 에 의해 승인 .
• 현재 2.2 사용 중
54

---

## Page 55

II. UML 2.2 Diagrams Overview
55

---

## Page 56

나 . 다이어그램 (Diagram) :View 의 내용을 나타내기 위한 주요 다이어그램 ( 9 개 )
구분 분 류 내 용
- 시스템 내 클래스들의 정적 구조를 표현
클래스 (Class)
Diagram
- 클래스는 객체들의 집합으로 속성 (Attribute) 과 동작 (Behavior) 으로 구성됨 .
- 클래스의 여러 Object 인스턴스 (Instance) 를 나타내는 대신에 실제 클래스를 사용함 .
객체 (Object)
정적 - 클래스 다이어그램에서 2 가지 예외를 제외하고 동일 표기법을 사용함 .
Diagram
모델링
- Object 이름에 밑줄 표시를 하며 , 관계 있는 모든 인스턴스를 표현함 .
( 정적
- 코드 컴포넌트 (Code component) 에 바탕을 둔 코드의 물리적 구조를 표현
컴포넌트
인부분
(Component) - 컴포넌트 (component) 는 논리적 클래스 혹은 클래스 자신의 구현에 대한 정보를 포함함 .
/ 구조
Diagram
모델링 )
- 실질적인 프로그래밍 작업에 사용함 .
- 시스템 하드웨어와 소프트웨어간의 물리적 구조를 표현하며 , 실질적인 컴퓨터와
배치
(Deployment ) Device 간의 관계를 표현하는데 이용함 .
Diagram
컴포넌트 (Component) 사이의 종속성을 표현함 .
- 외부 행위자 (Actor) 와 시스템이 제공하는 여러 개의 Use Case( 시스템을 사용하는 다양한
유즈케이스
경우 ) 에 연결하여 ,
(Use Case)
- Use Case 다이어그램은 유즈케이스 뷰를 다룬다 .
- 여러 객체 사이에 동적인 협력 사항을 표현함 .
순차
- 오브젝트 (Object) 사이에 메시지를 보내는 순서를 보여주기 위해 사용함 .
(Sequence)
- 수직선상의 여러 object 로 구성되어 시간 혹은 순서가 강조되어야 할 경우 이용함 .
동적
모델링
Collaboration - 오브젝트 (Object) 간의 연관성을 표현하며 , 내용이 중요한 경우에 이용함 .
- 행위 (Activity) 의 순서적 흐름을 표시함 .
활동
(Activity)
- 연산자로 수행된 활동 상황 (Activity) 을 설명키 위해 사용함 .
상태
- 클래스의 객체가 가질 수 있는 모든 가능한 상태를 나타냄 .
(State)
56

---

## Page 57

III. UML 의 관계 (Relationship)
- UML 에는 4 개의 관계가 있다 . 상세한 관계는 클래스다이어그램에서 설명을 한다 .
의존관계 , 연관관계 , 일반화 ( Generalization ), 실체화 (Realization) 이다 .
예 ) 일반화 라는 것은 일반적인 클래스 ( Superclass 혹은 Parent class) 보다 좀 더 구체적인 클래스
(subclass or child class) 사이의 관계를 표현한다 .
57

---

## Page 58

IV. 주요 다이어그램 :
Use Case Diagram
- Use Case, Actor 간의 관계를 표현
(Actor 는 시스템을 사용하는 사람 또는 시스템 이며 Actor 는 Use Case 를 수행함 )
- 시스템이 제공하는 기본적인 기능을 설명
- 사용자와 대화수단 파악 및 내부기능을 예측할 목적임
사용자
58

---

## Page 59

Use Case Diagram - Use Case 의 구성요소간 관계
관계 설명 표기법
Use Case 와 Actor 의 관계를 표현 ( 실선 )
연관 (Association)
연결이 되어 있음
기본 Use Case 수행 시 특별한 조건을 만족할 때
확장 (Extend) 수행하는 Use Case
- 옵션의 경우가 해당
시스템의 기능이 별도의 기능을 포함 ( 점선 )
포함 (Include)
- 어떤 기능이 다른 기능을 포함할 경우
ex) 상품 주문 , 확인 시에 로그인하는 경우 .
하위 Use Case/Action 이 상위 Use Case/Actor
일반화
( Generalization)
에게 기능 / 역할을 상속 받음 ( 상속관계를 보여줌 )
[ 참고 ] << >> 스테레오 타입
59

---

## Page 60

The <<extend>> dependency is only used for Use cases. It means that one use case extends the
other under certain circumstances. In the following:
Figure 1: Include and Extend.
This use case diagram is saying that when the Driver (actor) takes a trip, fueling the vehicle is
part of taking the trip (included use cases are mandatory behavior). However, the Driver may or
may not take photos and/or eat a meal (extending used cases are optional behavior) as part of
taking a trip.
60

---

## Page 61

스테레오타입 (Stereotype) 의 정의 ★★
- UML 의 기본적 요소 이외의 새로운 요소 ( 이를테면 , 새로운 표현 / 분류 ) 를 만들어 내기 위한 확장 매커니즘 .
- 형태는 기존의 UML 의 요소를 그대로 사용하나 내부의미는 다른 목적으로 사용하도록 확장
- '<<‘ , ‘>>' 길러멧 (Guillemet) 기호 를 사용하여 표현
나 . 스테레오 타입 종류
스테레오 타입 설명 비고
하나의 유스케이스가 어떤 시점에 반드시 다른 유스케이스를
<< include >> 실행하는 포함 관계
관계 . 반드시 실행 . 즉 관계를 명확히 표현하는데 , 스테레오타입 사용
하나의 유스케이스가 어떤 시점에 다른 유스케이스를 실행할 수도
<<extend>> 관계
있고 그렇지 않을 수도 있는 확장관계
모든 메소드가 추상메소드이며 바로 인스턴스를 만들수 없는 클래스 ,
<<interface>> 클래스
추상메소드와 상수만으로 구성된 클래스
- 정보를 저장하는 Object 를 지칭함 .
- 시스템에 저장 , 유지되는 클래스
<<entity>> 클래스
- 유스케이스 처리흐름이 수행되는 과정에서 기억 장치에 저장되어야
할 정보를 표현하는 클래스
61

---

## Page 62

나 . 스테레오 타입 종류 ( 계속 )
스테레오 타입 설명 비고
- 시스템과 외부와의 경계에 걸쳐 있는 클래스
- 시스템 주변 환경과 시스템 내부간의 커뮤니케이션을 담당
- boundary 클래스의 표현
* user interface: 사용자와 시스템 간의 상호작용에서 사용자에게
보여지는 부분 ( 윈도우 , 웹 클라이언트 페이지로 구현 )
<<boundary>> 클래스
* system interface: 외부 시스템과 내부 시스템간의 상호 작용을
정의할 때 도출 , 레거시 (Legacy) 시스템의 인터페이스를 위한 API
등이 클래스 단위
* device interface: 외부 이벤트를 감지하는 디바이스 또는 센서와의
상호 작용을 정의하기 위해 활용
- 어떤 특정 객체에 연관되지 않은 기능을 모델링
- 여러 Entity 클래스의 오퍼레이션과 계산 수행 , Boundary 클래스로의
<<control>> 결과 리턴 등의 Behavior 들로 구성된 기능 클래스
- 유스케이스 내의 처리 흐름을 제어 , 조정하거나 트랜잭션을 조작 ,
핸들링 , 관리하는데 사용되는 클래스
62

---

## Page 63

핵심 기출 (2015) & 출제 예상문제
사용자는 로그인 화면을 통해서 로그인 정보를 입력한다 . 시스템은 외부의 신용정보
시스템을 접근해서 사용자 인증을 수행한다 . 그리고 사용자이름 , 일시 , 인증여부 등
로그인 이력 정보를 데이터베이스에 기록한다 .” 의 요구사항을 바탕으로 객체지향
분석을 수행한 결과는 다음과 같다 . 도출된 클래스의 유형으로서 가장 적절하지 않은
것은 ?
① 로그인화면 클래스
② 사용자인증 클래스
③ 신용정보시스템접근 클래스
④ 로그인이력정보 클래스
63

---

## Page 64

해설
4 개 중에서 로그인이력정보 클래스는 DATABASE 혹은 시스템에 저장되어 사용될
자료를 보관하는 클래스이므로 , “경계 (boundary)” 가 아닌 “ Entity class” 로
다이어그램을 적용한다 .
- 정보를 저장하는 Object 를 지칭함 .
- 시스템에 저장 , 유지되는 클래스
<<entity>>
- 유스케이스 처리흐름이 수행되는 과정에서 기억 장치에 저장되어야 할 정보
를 표현하는 클래스
( 정답 ) ④ 로그인이력정보 클래스
64

---

## Page 65

[ 사례 ] 도서관 관리 시스템의 상황은 다음과 같다 .
1) 학생은 ‘ 회원가입 ’ 을 통해 도서관 관리 시스템에 접속 할 수 있다 .
2 ) ‘ 책 대여 ’ 와 ‘책 반납 ’을 수행할 때는 반드시 ( 사전에 ) ‘회원확인’을 해야 한다 .
3) 책 대여 ‘ 결제 ’ 시 학생 신용카드를 사용하는 경우 , ‘ 신용카드지불’로 수행할 수도 있으며 ,
신용카드지불이 요청되면 , ‘ 카드승인 시스템’을 통해 카드 승인을 수행한다 .
학생
책 대여
신용카드
결제
( 옵션이 충족되면 ) 들어오는 화살표 중의 요망
65

---

## Page 66

순차 (Sequence) Diagram
- 여러 개의 객체들 사이의 동적인 협력사항 표현
- 일련의 유즈케이스가 처리되는 시나리오를 시간과 순서에 따라 묘사
- 객체들 간의 관계성은 표현하지 않음
- 수평선상에는 서로 다른 객체를 나타내고 수직선 상에는 시간이 지나가는 것에 따라서 객체들 사이에
메시지 교환을 나타냄
- 복잡한 시나리오나 실시간 명세를 잘 표현하기 위해서 메시지의 명시적인 순서를 나타내기에 좋음
고객등록선택화면 개인고객등록 .asp 입력정보체크 .js
개인고객등록화면 기업고객등록화면 고객데이터베이스
고 객 라이프 라인
회원가입선택 기업고객등록선택
개인고객등록선택
메시지
개인고객 DB 등록정보
개인고객정보 ( 이름 , 주민번호 , …) 개인고객정보 ( 이름 , 주민번호 , ...)
개인고객정보
데이터체크
Valid/Invalid
Successl Success/Fail
Fail Fail
기업고객 DB 등록정보
기업고객정보 ( 회사명 , 사업자번호 , …) 기업고객정보
기업고객정보
( 회사명 ,
사업자번호 , ...) 데이터체크
Valid/Invalid
Successl Success/Fail
메시지 리턴
Fail Fail
왼쪽 여기는 비어있다는 것 주의 !
66

---

## Page 67

Sequence Diagram
활성 객체 라고 부른다 !!!
67

---

## Page 68

II. 시퀀스 다이어그램 (Sequence Diagram) 의 구성요소 및 다이어그램 변환
가 . 시퀀스 다이어그램의 구성요소
구성요소 설명 표기법
액터 (Actor)
- 시스템과 상호작용하는 사용자 , 외부 시스템
- 메시지 상호작용에 참여하는 주체
활성 객체
(object)
- 다이어그램 윗부분에 위치하며 왼쪽에서 오른쪽으로 배열
- 객체 사이에 송 · 수신하는 메시지 , 메시지가 발생하는
순서에 따라 위에서 아래로 표현
메시지
( message)
- 객체는 자기 자신에게도 메시지 전송 가능
- 실선 : 호출메시지 , 점선 : 답신메시지
- 객체가 제어를 가지고 있다는 것 . 어떤 종류의 정보를
제어사각형
(Control
처리하고 있다는 것 또는 다른 정보를 기다리고
Rectangle)
있다는 것을 표시
68

---

## Page 69

III. 시퀀스 다이어그램을 클래스 다이어그램으로 표현한 사례
1. 시퀀스 다이어그램의 호출 문제
가 . C1 의 클래스 객체가 C2 클래스의 객체의 f1() 메소드 호출
나 . C2 클래스의 객체가 f2() 메소드를 호출하는 것이다 .
2. 클래스 다이어그램으로 표현하면 ,
위치가 반대가 안되게 주의한다 .
69

---

## Page 70

상태 다이어그램 (State Diagram)
- 클래스의 객체가 가질 수 있는 모든 가능한 상태를 보여줌
- 특정 객체에 대하여 사건 발생에 따른 상태천이과정을 묘사함
시작
종료 표시
70

---

## Page 71

Collaboration Diagram
- 순서 다이어그램처럼 객체들 사이에 동적인 협력사항을 표현
- 객체들간의 관계성을 잘 표현하며 주어진 객체에 대한 모든 영향의 이해와 절차적 설계에 유리
- 시간 / 순서가 강조되어야 할 특징이라면 순서 다이어그램을 선택해야 하고 , 내용이 시간 / 순서보다
` 강조되어야 할 특징이라면 협력 다이어그램을 선택해야 함
- 순서 다이아그램과 협력 다이아그램을 합하여 인터랙션 다이어그램이라 함
71

---

## Page 72

클래스 다이어그램 (Class Diagram)
- Class, Interface, Collaboration 간의 관계를 나타내며 객체 지향 시스템 모형화에서 가장
공통적으로 많이 쓰이는 다이어그램
- 시스템내 클래스들의 정적 구조를 나타냄
클래스 다이어그램
관계의
다중도
관계의 롤 (Role)
관계
클래스의 속성
클래스의 동작
72

---

## Page 73

Class Diagram 기본 구조
73

---

## Page 74

Class Diagram
[ 참고 ] 호텔 객실 예약시스템의 정적 구조 , Class Diagram 구성과 작성 ★ ★ ★
- 예시에 의한 Class Diagram 작성
호 텔
고 객
- 호 텔 ID: String
ClassName
+ 고 객 ID
- 호 텔 Name: String
+ 고 객 이 름
- 호 텔 URL: String
+ 고 객 정 보 등 록 ()
-attribute1
+ 호 텔 정 보 등 록 ()
+ 고 객 정 보 수 정 ()
+ 호 텔 정 보 수 정 ()
+ 고 객 정 보 삭 제 ()
-attribute2
+ 호 텔 정 보 삭 제 ()
+ 고 객 정 보 조 회 ()
+ 호 텔 정 보 조 회 ()
1 +operation1()
1
+operation2()
직 원
클래스는 속성
1..*
+ 직 원 ID
+ 직 원 이 름
1..*
(Attribute) 과
+ 직 원 정 보 등 록 ()
예 약 객 실
+ 직 원 정 보 수 정 ()
연산 (Operation) 으로
+ 직 원 정 보 삭 제 ()
- 예 약 ID - 객 실 ID
+ 직 원 정 보 조 회 ()
- 예 약 날 짜 - 객 실 TYPE
구성
+ 예 약 정 보 조 회 () + 객 실 정 보 수 정 ()
0..* 1
+ 예 약 정 보 삭 제 () + 객 실 정 보 등 록 ()
+: Public 멤버 표시
+ 예 약 정 보 수 정 () + 객 실 정 보 취 소 ()
+ 예 약 정 보 등 록 () + 객 실 정 보 조 회 ()
-: Private 멤버 표시
74

---

## Page 75

관계 유형 설명 표기법
두 클래스간 서로 어떠한 연관을 가지고 있는 의미
연관관계
( 인스턴스 표기법 )
( Association
1 : 1 개 0 .. 1 : o 개 또는 1 개
Relationship)
가장 일반적 ‘Has a’ 관계
* 다수 1 .. * : 1 개 또는 다수
집합연관관계
클래스와 클래스간의 부분과 전체의 관계를
(Aggregation
의미
부서 - 직원
Relationship)
한 클래스의 변화가 다른 클래스에 영향을 미치는
의존관계 관계
(Dependency Dependency is a weaker form of bond which
Relationship) indicates that one class depends on another
because it uses it at some point in time[ 참고 ]
복합연관관계
집합연관관계와 같이 부분과 전체 관계이나 , 전체
(Composition
클래스 소멸시 부분클래스도 소멸하는 관계
테이블 - 다리
Relationship)
상속관계
Class 간 상속관계 (‘is a’ 관계 ) 객제 지향의 상속관
▷
계를 의미히고 , 일반화 (Generation) 를 의미한다 .
(Inheritance)
실체화 (Realization) 을 , 인테페이스로 표현
타자 기능
( 실체화 : 하나의 객체가 다른 책체에 의해 , 오퍼레
인터페이스
키보드
이션을 하도록 지정관계 ), 인테페이스는 사례
75

---

## Page 76

유형 설명 표기법
직접연관 (Direct Association)
Association 과 Directed Association 의 차이는
직접 연관
화살표가 의미하는 navigability( 방향성 ) 인데 이것
에 따라 참조 하는 쪽과 참조 당하는 쪽을 구분
76

---

## Page 77

활동 (Activity Diagram) (Event Trace 다이어그램 )
- 활동다이어그램은 시스템 내부에 있는 활동의 흐름을 나타내는 다이어그램이다 .
키워드 : 동적뷰 , 객체 간의 제어 흐름 에 중점을 둔다 .
- 액티비티의 순서적 흐름 , 병행 프로세스를 지원하기 때문에 불필요한 순서를 없애기 위한 효과가
있음
- 액티비티와 액티비티 간의 흐름을 보여주는 workflow 를 나타내는 흐름도이다 .
특정조건에 따른 분기
활동
시작점 , 종료점
동시경로 -
특정 활동이 합쳐지거나 ,
모이는 경우
( 속이 찬 긴 직사각형 )
77

---

## Page 78

활동 (Activity Diagram) (Event Trace 다이어그램 ) 몇가지 중요 요약 정리 .
1. 활동다이어그램은 ,
- 시작점 , 활동 , 전이 , 종료점으로 구성된다 .
- 상태전이 (state transition) 라는 의미는 화살표를 의미한다 .
2. 분기는 마름모 ( 판단 ) 로 활동 전이를 나타내고 , 조건문을 옆에 써주면 된다 .
3. 분할과 합류
- 분할 (Fork): 동시에 진행이 가능한 상태의 경우 적용 /* 프로세스를 하나 만들어 의미로 기억 */
- 합류 ( join): 분할된 상태 전이는 반드시 합류되어야 한다 .
78

---

## Page 79

활동 (Activity Diagram) (Event Trace 다이어그램 ) 몇가지 중요 요약 정리 .
4. 구획면 (swim lane) ( 계속 ) /* 수영하는 레인 생각 */
구획면은 활동 다이어그램에서 그려지는 세로 방향의 영역을 말하며 , 각 활동 상태를
담당하는 역할을 나타낸다 . ( 아래 그림의 세로 선이 보이지요 ?)
79

---

## Page 80

컴포넌트 다이어그램 (Component Diagram)
- 시스템의 물리적 컴포넌트와 그들 사이의 의존관리를 나타내는 다이어그램이다 .
인터페이스 표현
( 간단한 표현방법 )
- 탭이 달린 직사각형
- 인터페이스를 표현
80

---

## Page 81

배치 다이어그램 (Deployment Diagram)
이름 – Clinet, Server
- 시스템이 분할된 서브 시스템의 배치 모습을 도식화함
- 시스템의 하드웨어와 소프트웨어의 물리적인 구조
- 실질적인 컴퓨터와 디바이스를 나타냄
- 컴포넌트 사이의 종속성을 나타냄
표현방법
당뇨병 정보 서비스 Unit Server
TCP/IP
객체 Database
Node 들의 연결 건강 관리 영역
생활 건강 정보 서비스 Unit Server
객체 Database
<<connection>>
건강 관리 영역
TCP/IP 의학 정보 설정
생활 건강 정보 서비스
Server application
사용자 설정
Interface
Windows PC
포함된 객체
Node
건강정보 서비스
Component
사용자 전면
사용자 인터페이스
81

---

## Page 82

■ UML 2.0: UML 1.x 의 효율적인 진보 .UML 2.0 설명
가 . UML 2.0 의 등장의 배경 (UML 1.0 을 개정한 이유 )
- 웹 기반 애플리케이션과 SOA 등 신기술의 등장으로 수준 높은 자동화를 지원하는 UML 기반의 툴의
필요성이 증가함에 따라 원래 표준보다 더 정확한 방식으로 UML 을 정의
나 . UML 2.0 의 등장 배경
1 ) 제한적인 시스템 공학 지원
- 복잡한 아키텍처 및 임베디드 / 시스템 엔지니어링 등 모델링 표현 방법 제공 부족
- 모델링 위해 제공되어야 할 잘 정의된 (well - defined) 컴포넌트 부족
2 ) 다양한 SW 개발 분석 및 설계 모델링에 부적합
- 모델링 표현 방법이 불완전 및 부 정확함
- SW 개발에 시스템 행위 및 절차를 표현할 모델링 표현 방법 부족
3) 다이어그램 추가
4) 메타모델 상세화 (OMG 4 계층 모델 )
5) 제약사항 정의 지원 (OCL)
82

---

## Page 83

II. UML(Unified Modeling Language) 2 의 특징
가 .UML2 의 특징
문제점 내용
컴포넌트 내부 - 아키텍처 , 인터페이스 , 컴포넌트 및 클래스의 내부 표현방법 강화
아키텍처 - Composite-Structure Diagram 의 포트 / 파트 / 커넥터로 표현
- Meta Model 의 표현강화 (MOF, UML, Profile)
MDA 의 기능확장
- 실행속성기법 수용 , 분석 / 설계와 실제 구현간의 차이를 극복
- 임베디드 모델링 언어인 ITU - T 의 SDL 개념 차용
Embedded 표현강화
- Capsule : 프로토콜을 가진 클래스 , Port : 클래스간의 연결을 추상화
- MDD 에 필요한 고급 자동화 구현 가능 , 모호성 제거
정확해진 언어정의
- Round-trip Engineering Simulation(System V&V 자동화 )
다이어그램 확장성 - 시퀀스 다이어그램 및 Statechart 다이어그램의 표현 방법 개선
83

---

## Page 84

84

---

## Page 85

나 . UML2 의 변경 및 추가 다이어그램 (CPIT)
구분 다이어그램 내용
- 분류자의 복합 구조를 표현하는 다이어그램
Composite Structure
- port, part, connector, Collaboration 으로 분류자 내부 구
Diagram
조 표현
- 패키지들과 패키지 내부의 요소를 표현
Package Diagram - 클래스 , 인터페이스 등 분류자 등을 그룹화하여 보여 주기
위함
추가 다이어그램
- 객체 상호작용 흐름을 표현하기 위한 다이어그램
Interaction Overview
- 액티비티 다이어그램의 변종
Diagram
- 프레임 , 인터랙션 , 인터랙션참조로 구성
- 시간의 흐름에 따른 상태를 표현
Timing Diagram - 가로 축 시간 표현 , 세로 축에 상태로 하여 상태 변화를 나
타냄
Communication
- UML1.x 의 Collaboration Diagram 에서 변경됨
Diagram
변경 다이어그램
State Machine
- UML1.x 의 Statechart Diagram 에서 이름 변경됨
Diagram
85

---

## Page 86

III. 패키지 다이어그램 표기법과 사례
가 . 패키지 다이어그램 표기법
구분 내용
- 내부에 다른 요소를 포함하는 요소로 네임스페이스 역할
Pac kage1
패키지
- 다른 패키지의 요소를 자신의 것처럼 사용하는 관계
패키지 임포트 관계
(package import)
- 패키지를 병합하여 새로운 패키지를 구성하는 관계
패키지 머지 관계
(package merge)
86

---

## Page 87

III. 패키지 다이어그램 표기법과 사례
나 . 패키지 다이어그램 사례
학생 , 교수 및 수강 패키지의 관계를 패키지 다이어그램으로 표현
- 학생 및 교수 패키지는 수강 패키지를 임포트 관계로 사용하고 , 수강패키지는 IT 및 경영 패키지로
구성됨
87

---

## Page 88

참고 자료
[ 참고 ] MOF 4 Layers - Meta Object Facility: OMG 에서 만든 모델 기반 공학 기준 (CORBA architecture)
객체 지향 모델 작성에 사용되는 UML 메타 모델의 필수 요소와 문법 , 구조를 정의하는 메타 모델 . 객체 및
컴포넌트 기술의 핵심을 정형화한 모델로서 . MDA 에서 메타 모델 정의 언어 (MOF) 는 CWM(Common
Warehouse Metamodel ) 이나 UML(Unified Modeling Language) 의 메타 모델에 대한 공통 모델로서 제
공된다 . MOF 의 정형화된 내용은 MDA 모델들을 위한 표준 저장소의 역할을 수행 .
88

---

## Page 89

M3 : Meta-Metamodel
MOF(Meta Object Facility)
M2 수준에 속한 메타 모델을
정의하는 메타메타 모델
M2 : Metamodel
UML 기반 설계를 가능케 하는
모델 요소를 정의하는 메타 모델
즉 , 모 델 을 설 정 하 는 언 어 를
정의하는 역할
M1 : User Model
사용자 모델을 도식화하는 모델
계 층 (process of building up
and modifying a user model )
M0 : Run-Time Instances
모델이 코드를 만들고 , 그것을
실행하는 단계
89

---

## Page 90

UML 확장 메카니즘
UML 이 풍부한 모델링 표기방법을 제공하지만 , 소프트웨어 모델링을 위한 모든 요구를 충족할 수는 없음
더 정확하고 상세한 요구사항 및 설계 명세를 위해 UML 이 추가적으로 제공하는 메커니즘
구성요소 설명
스테레오타입
모델링 요소에 추가적인 의미를 부여할 수 있도록 해주는 메커니즘
(Stereotypes)
제약사항 모델링 요소에 제약을 명시함으로써 해당 모델링 요소를 더 명확하게 표현
(Constraints) 할 수 있도록 해주는 메커니즘
꼬리표 값 UML 에서 제공하는 속성 이외에 추가적인 속성을 정의하는 메커니즘
(Tagged Values) ‘{tag=value}’ 기호를 사용
[ 참고 ] 꼬리표값
( 태그 정의 사례 )
90

---

## Page 91

[ 참고 ] UML Profile 은 ?
- UML 확장 메커니즘을 구현한 일종의 패키지
- 예를 들어 특정 소프트웨어 도메인 이라던지 개발 플랫폼 등에 필요한 스테레오타입 , 제약사항 , 태그정의 ,
데이터타입들을 하나로 묶은 기능 .
- UML 프로파일은 스테레오타입 , 제약사항 , 태그정의 , 데이터타입 요소로 구성된다 .
[ 참고 주소 : http://staruml.sourceforge.net/docs/developer-guide(ko)/ ch07.html
[ 참고 ] 객체제약언어 - OCL (Object Constraint Language) 의 정의
- 객체 지향 모델 요소에 대한 제약 조건을 기술 하기 위한 Language 로 , UML 에서 객체 제약조건 언어
- OCL(Object constraint Language) 의 대표적 제약조건
제약조건 내용 예시
불변 조건
실행 동안 만족해야 하는 성질 context CarSharer inv: age > 21
(invariant)
context
선행 조건
실행 전에 만족해야 하는 성질 Account::withdraw(amount:Integer)
(precondition)
pre: balance >= amount
context
후행 조건
오퍼레이션 실행 후에 만족해야
Account::withdraw(amount:Integer)
될 조건
(post-condition
post: balance = balance@pre - amount
91

---

## Page 92

[ 대표 OSS Tool]
92

---

## Page 93

디자인 패턴 (+ 모듈화 , 3R, 유지보수 , 재사용 , Java)
V. Architecture
기출문제
1. 디자인 패턴과 아키텍처 스타일의 차이를 설명하시오 .
( 관리 81 회 1 교시 )
2. 소프트웨어 공학에서 디자인 패턴의 개념과 정의 구성과 내용을 논하고 많이 사용되는 디자인
패턴의 종류를 들고 특징을 논하시오 . ( 관리 84 회 4 교시 )
3. 디자인 패턴에 대해 다음 물음에 답하시오 .
(1) GoF(Gang of Four) 가 제시한 나머지 디자인 패턴의 개념과 종류를 설명하시오 .
(2) 인터프리터 (Interpreter) 라 불리는 디자인 패턴을 설명하시오 . ( 관리 87 회 3 교시 )
4. 객체지향 소프트웨어 설계에 많은 도움을 주는 GoF 의 디자인 패턴 (Design Pattern) 영역을 목적과
범위에 따라 분류하고 , 분류별 특성을 설명 하시오 .
또한 , 객체지향시스템에서 개발된 기능의 재사용을 위해 사용되는 대표적 기법인 화이트박스 재사용
(White-box Reuse), 블랙박스 재사용 (Black - box Reuse) 및 위임 (Delegation) 이 패턴과 어떤 관계가
있는 지 설명하시오 .
( 정보관리 , 104 회 3 교시 3 번 )
93

---

## Page 94

6. 디자인 패턴
V. Architecture
기출문제
5. 다음 JAVA 코드를 Factory 패턴을 이용하여 수정하시오 .
(1) Factory 패턴 클래스를 작성하시오 .
(2) Factory 클래스를 사용하여 코드를 작성하시오 .
public class PizzaStore {
public Pizza orderPizza (String Type) {
Pizza pizza ;
if( type.equals ("combination")) {
pizza = new CombinationPizza ();
} else if ( type.equals ("cheese")) {
pizza = new CheesePizza ();
} else if ( type.equals ("potato")) {
pizza = new PotatoPizza ();
}
pizza.prepare ();
pizza.bake ();
pizza.cut ();
pizza.box ();
return pizza();
}
} ( 관리 95 회 4 교시 )
94

---

## Page 95

6. 디자인 패턴
V. Architecture
모의고사
1. 설계패턴 (Design Pattern) 의 개념 및 유형을 설명하시오 .
2. 소프트웨어 품질 향상을 위해서 개발 프로젝트에서 디자인 패턴을 적용하고자 한다 . 디자인 패턴의
특징 , 유형을 설명하고 , 조직내 효과적인 적용을 위한 전략을 제시하시오 .
3. Adapter Pattern 에 대해 설명하시오 .
4. 디자인 패턴에 대해 다음 물음에 답하시오 .
가 . GoF(Gang of Four) 가 제시한 디자인 패턴의 개념과 종류 를 설명하시오 .
나 . 옵저버 (Observer) 라 불리는 디자인 패턴을 설명하시오 .
5. 디자인 패턴에 대해 다음의 물음에 답하시오 .
가 . 디자인패턴의 구성 및 유형
나 . Chain of responsibity 패턴
6. GOF 디자인패턴중 생성패턴인 Factory Method Pattern 에 대해 설명하시오 .
95

---

## Page 96

6. 디자인 패턴
V. Architecture
모의고사
7. 디자인 패턴의 세 가지 분류에 대해 설명하고 스트레티지 , 퍼사드 , 싱글턴 패턴 에 대해 분류와 연계
하여 설명하고 클래스 다이어그램을 그리시오 .
8. Gof 의 디자인 패턴 중 다음을 설명하시오
(1) 디자인패턴의 정의와 종류
(2) Façade Pattern
(3) Bridge Pattern
(4) Strategy Pattern
9. 다음 소스에서 이용하는 디자인 패턴에 대해 무엇인지에 대해 클래스다이아그램과 함께 설명하고
PersonFactory 의 인스턴스를 생성하여 일꾼을 생성 및 일을 하는 메시지가 출력되도록 구현소스를
작성하시오 .
10. 디자인패턴 중 GOF 패턴에 대하여 다음을 설명하시오 .
가 . 데코레이션 패턴 ((Decoration Pattern)
나 . 템플릿 메소드 패턴 (Template Method Pattern)
다 . 커맨드 패턴 (Command pattern)
11. 디자인 패턴 중 Composite 패턴과 Decorator 패턴을 비교 설명하시오 .
96

---

## Page 97

6. 디자인 패턴
V. Architecture
모의고사
12. 대규모 SW 개발에서의 재사용성 극대화를 위해 만들어진 객체지향 메커니즘 중 상속과 다형성은
실제 객체지향 설계 시 많은 이슈를 발생시키곤 한다 . 이와 관련하여 다음을 설명하시오 .
가 . 객체지향 설계 5 원칙 중 DIP, LSP, OCP
나 . 템플릿 메소드 패턴 (Template Method Pattern)
13. 디자인 패턴의 개념 및 구성요소를 설명하고 Observer 패턴과 Mediator 패턴을 상세히 기술 하시오 .
14. 다음 요구사항을 만족하는 선풍기의 상태 머신 다이어그램을 작성하고 상태 (state) 패턴에 기반한
클래스 다이어그램을 작성하시오 .
- 선풍기는 기본적으로 OFF 상태에서 시작
- OFF 상태에서 사용자가 선풍기 스위치를 켜면 switch_on 이벤트가 발생하며 ON 상태로 진입 . 이때
turn_on 액션을 실행함 . 단 전원이 연결된 조건 (power_exists 조건 ) 에서만 ON 상태로 진입함 .
- ON 상태에서 사용자가 동작 버튼을 누르면 run 이벤트가 발생하며 WORKING 상태로 진입 . 이때
operate 액션을 실행함 .
- 선풍기가 ON 상태나 WORKING 상태에 있을 때 사용자가 스위치를 끄면 switch_off 이벤트가 발생
하며 , OFF 상태로 진입 . 이때 turnoff 액션이 실행함 .
- 선풍기가 WORKING 상태에 있을 때 사용자가 정지 버튼을 누르면 stop 이벤트가 발생하며 ON
상태로 진입 . 이때 suspend 액션을 실행함 .
97

---

## Page 98

6. 디자인 패턴
모의고사
15. MVC(Model View Control) 패턴 (111 회 , 정보관리 , 1 교시 )
16. Observer Pattern (111 회 , 컴시응 , 1 교시 )
98

---

## Page 99

6. 디자인 패턴
V. Architecture
객체 (Object) 의 의미 ?
1 개 이상의 data 와 method 로 구성된 개념으로 , 객체 지향 프로그래밍 (OOP )
이나 설계에서 , 데이터 ( 실체 ) 와 그 데이터에 관련되는 동작 ( 절차 , 방법 , 기능 ) 을
모두 포함한 개념 .
99

---

## Page 100

6. 디자인 패턴
I. 소프트웨어 엔지니어의 경험 디자인패턴의 개요
가 . 디자인패턴 (Design Pattern) 의 정의
- 프로그래머들이 유용하다가 생각되는 객체들간의 일반적인 상호작용 방법들을 모은 목록
- 어떤 분야에서 계속 반복해서 나타나는 문제 들을 해결해 온 전문가들의 경험을 모아서 정리한 모음집
- 여러 번 반복하여 사용할 수 있는 문제에 대한 솔루션 을 기술한 정리 집 (Gamma)
나 . 역사
- 디자인패턴의 연구는 1990 년대 초반 Erich Gamma[1992] 에 의해 시작
- 일반적으로 GoF (Gang of Four) 의 분류가 많이 활용되고 있음 .
- 23 개의 일반적이고 유용한 패턴들을 제공
- 패턴을 사용하게 되면 이미 검증된 해결방안 을 계속 재사용할 수 있음 .
다 . 디자인 패턴의 목적 에릭 감마 ; GoF 4 인 중의 1 인
- 전문가들의 설계 노하우를 다른 개발자가 이해하고 적용할 수 있는 형태로 제공
- 소프트웨어 설계 / 구현에 있어서 확장성 , 재사용성 , 유지보수성이 좋은 소프트웨어를 설계하기 위한
목적
- 안정적인 소프트웨어 개발을 위한 기법
100

---

## Page 101

II. GoF 디자인 패턴의 구성요소 및 원칙
구 분 내용
이름 (Name) 패턴 자체의 내용을 효과적으로 전달할 수 있는 이름 ; 간결 전달
여러 개의 패턴을 체계적으로 분류
종류 ( 분류 ) - 생성 (Creational) : 객체들의 생성과 관련된 패턴
(Classification) - 구조 (Structure) : 클래스 , 객체의 정적인 구조와 관련된 패턴
- 행위 (Behavioral) : 클래스와 객체의 반응과 책임 할당
의도 이 패턴이 무엇을 하며 어떤 의도로 작성되었는지 , 무엇을 해결하는지를
(Intent) 설명하여 기술 . 목적 !!!
구조 패턴안에서 문제를 해결하기 위해 사용되는 클래스와 객체의 구조를 UML
(Structure) 다이어그램으로 표현
각 클래스와 객체가 자신에게 맡겨진 책임을 수행하기 위해 서로 메시지를
협력과정
주고 받는 과정을 묘사
헐리우드 원칙
- 먼저 연락하지 마세요 , 저희가 연락드리겠습니다 .
Hollywood
- 의존성 부패를 방지할 수 있음 .
Principle
상위클래스가 하위클래스를 호출 ( 결정함 )
구체클래스에서 , 추상클래스를 호출할 수 없음
특정 언어로 패턴을 구현한 예제 , 실제로 사용되는 시스템에서 발견되는
샘플코드
패턴의 예
어플리케이션에서 달라지는 부분을 찾아내고 , 달라지지 않은 부분으로부터
디자인 원칙
분리시킨다 .
101

---

## Page 102

II. Design Pattern 분류 (Gamma): 패턴은 생성 , 구조 , 행동 중의 한가지 목적을 가짐
제 4 부 소프트웨어 개발
1) 생성패턴 : 시스템이 어떤 구체 클래스를 사용하는지에 대한 정보를 캡슐화
- 생성패턴을 이용하면 무엇이 생성 되고 , 누가 이것을 생성하며 , 언제 생성할 것인지 결정
하는데 , 유연성 확보 ( 객체 생성 관련 패턴 )
2) 구조패턴 : 어떤 구조를 만들어 내는 패턴과 객체 합성과 관련된 패턴
(Structural design patterns are design patterns that ease the design by identifying
a simple way to realize relationships between entities)
3) 행위 패턴 : 클래스나 객체들이 상호작용하는 방법 과 책임을 분산하는 방법을 정의
- 어떤 처리의 책임을 어느 객체에게 할당하는 것이 좋은지 , 어느 객체에 정의하는 것이 좋은지 다룸 .
생구행
102

---

## Page 103

디자인 패턴 생성패턴
구조패턴
행위패턴
103

---

## Page 104

제 4 부 소프트웨어 개발
생성 패턴 유형 - 아비프로시파 (ABProSiFa): 5 개
패 턴 설명
인터페이스를 이용하여 , 서로 연관된 , 또는 의존하는 객체를 구상 ( 보통 번역 책
에서는 concrete class( 실제적이고 , 구체적인 클래스 ) 를 말함 ) 클래스를 지정하
추상 팩토리 패턴 *
지 않고 생성할 수 있다 .
(Abstract Factory
( 목적 )
Patten)
<< 인터페이스 >> 분리를 통해 , 클라이언트에서 어떤 제품이 생산되는지 전혀
알 필요 없음
빌더 패턴 제품을 여러 단계로 나눠서 만들 수 있도록 제품 생산 단계들을 캡슐화하고 싶
( Builder Pattern) 다면 빌더 패턴을 사용
프로토타입 패턴 기존 인스턴스를 복사하기만 하면 , 새로운 인스턴스를 만들수 있는 패턴
(Prototype Pattern) ( 자바에서는 clone( ) 메소드를 이용하면 됨 )
싱글톤 패턴 ** 해당 클래스의 인스턴스가 하나만 만들어지고 , 어디서든지 그 인스턴스 에 접근
(Singleton Pattern) 할 수 있도록 하기 위한 패턴
객체를 생성하기 위한 인터페이스를 정의하는데 , 어떤 클래스의 인스턴스를
팩토리 메서드 패턴 *
만들어지는 서브클래스에서 결정하게 한다 .
(Factory Method
팩토리 메서드 패턴을 이용하면 , 클래스의 인스턴스 만드는 일을 서브클래스에
Pattern)
게 맡기는 것이 됨
104

---

## Page 105

Abstract Factory Pattern( 추상 팩토리 패턴 )
I. 인터페이스를 이용하여 , 서로 연관된 객체 생성 패턴 , 추상 팩토리 패턴 의 개요
가 . Abstract Factory Pattern( 추상 팩토리 패턴 ) 의 정의
인터페이스를 사용하여 , 서로 연관된 , 또는 의존하는 객체를 구상 클래스에서 지정하지 않고 ,
의존관계가 추상화 단계에서 생성할 수 있는 디자인 패턴
나 . 추상 팩토리 패턴의 특징
특징 설명
클라이언트에게 객체 생성을 위한 인터페이스 제공
인터페이스 이용
구상 클래스를 생성할 수 있는 인터페이스를 Client 에게 제공해 주는 패턴
여러 개 객체 생 객체 1 개가 아닌 보통 여러 개 객체를 생성하고 ,
성 클라이언트가 선택하게 함
의존관계를 추상화 단계에서 결정함 .
의존관계 적용
(A 와 B 의 의존관계를 결정 , 즉 제약을 걸 수 있음 )
팩토리 Method 팩토리 메소드로 구현되는 경우가 많음
관계 이유 ) 제품이나 기능을 생성하므로
이전에 포탈시스템만들 때 , 미리 템플릿 몇 개를 만들고 ,
사례 회원은 템플릿 선택기능을 이용하여 ,
선택한 템플릿에 맞게 끔 , 기능 구현을 적용
105

---

## Page 106

제 4 부 소프트웨어 개발
II. 개념도
Client
AbstractFactory 는
구상팩토리 1, 2 등에서
★★ Abstract 반드시
<< 인터페이스 >>
기술 !
구현해야 하는 인터페이스
AbstractFactory
이며 , 상속받은 클래스에서
CreateProductA()
구현해야 하는 Method 를
CreateProductB()
정의함
ConcreteFactory1 ConcreteFactory2
CreateProductA() CreateProductA()
CreateProductB() CreateProductB()
ConcreteFactory( 구상 팩토리 ) 는 서로 다른 기능을 구현하면됨 . 클라이언트는 위 기능이 필요하면
적당한 것을 하나 골라서 사용하면 됨 .
106

---

## Page 107

III. Java 에서는 Abstract 의미 정리
가 . Abstract Class 특징
1) 상속을 해서 사용을 하는 특징을 가짐
2) 이 클래스에서는 직접 객체를 생성할 수 없음
나 . Abstract Method 특징
1) 하위 클래스에서 반드시 재정의하여 사용해야 함 .
2) Abstract Method 는 추상 클래스 (Abstract Class) 와 인터페이스만 존재
107

---

## Page 108

Singleton Pattern( 싱글톤 패턴 )
Singleton 패턴 .
배의 방향을 조정하는 키가 2 개면 – 방향이 엉망이 될 것이고 , 결국에는 무분별한 객체의 의존 관계
혹은 스파게티 코드 ( 제어 흐름이 마치 스파게티 면발처럼 얽혀져 있는 프로그램 코드에 붙여진 이름 )
가 될 것이다 .
[GoF 에 따르면 , singleton 패턴의 의도는 다음과 같음 .
- 한 클래스가 오직 하나의 인스턴스만을 갖도록 하고 , 이 인스턴스에 접근할 수 있는 광범위한
지시자 (global point) 를 제공한다 !
108

---

## Page 109

[ 싱글톤 패턴 ] Singleton 패턴 .
I. 단 하나의 인스턴스 생성을 보장하는 디자인 패턴 , Singleton 패턴 의 개요
가 . Singleton pattern 의 정의
- 오직 단 하나의 인스턴스만을 생성하고 전역변수 사용과 같이 어디서나 인스턴스에 접근 가능한
디자인 패턴으로 이 인스턴스에 접근할 수 있는 포인트 (Point) 을 제공하는 패턴 .
나 . Singleton pattern 의 특징
- 유일한 인스턴스를 얻기 위한 static 메소드 를 가지고 있어야 하며 , 이 메소드는 언제나 동일한
인스턴스 반환합니다 . 인스턴스를 얻기 위한 static method 의 명명규칙은 getInstance () 입니다 .
II. Sngleton 패턴의 구성도 및 구성요소
가 . 싱글턴 패턴의 구성도
싱글톤의 인스턴스 저장
getInstance
클래스 다이어그램
109

---

## Page 110

[ 싱글톤 패턴 ]
Java Static – 공통 사용 시
( 값 , 클래스 ) 에 붙임
public class Singleton {
private static Singleton instance = null; /* 멤버변수를 private static 으로 선언 */
/* private 은 내부에서만 참조 , 캡슐 화 */
private Singleton( ) { } /* SingletonDemo 클래스 , private 선언 */
public static Singleton getInstance () { /* 멤버변수를 가져오는 public 함수를 만듦 , 외부 열어줘
매번 생성아닌 , 한번 생성 후 , 객체를 불어오는 매서드 */
if (instance == null) { /* 객체가 인스턴스화가 안되어 있으면 , new 사용 생성 */
instance = new Singleton( );
}
Singleton.getInstance() 라는 코드로 언제 어디서든지
이 메서드 호출
}
return instance ; /* 이미 인스턴스가 존재하면 , instance 반환 */
} // 기타 메소드 – 일부 다른 인스턴스나 메소드가 있을 수 있으므로 , 삽입 가능
}
- 중요한 것은 오브젝트가 오직 하나만 생성되어야 한다는 점 , 생성 ( 자 ) 은 private 생성자 ( 혹은 protected) 로
하고 , 인스턴스 접근은 static 매서드로 함 – > 클래스 내에서 인스턴스 공유 및 메모리 내에서 하나만 존재
[ 용도 ] 스레드 풀 , 캐시 , 대화상자 , 사용자 설정 , 디바이스 드라이버 등등 객체가 전체 프로그램에서 오직
하나만 생성되어야 하는 경우
110

---

## Page 111

Factory Method Pattern( 팩토리 메서드 패턴 )
I. 팩토리 메서드 패턴 (Factory Method Pattern) 개요
객체를 생성하기 위한 인터페이스를 정의하는데 , 어떤 클래스의 인스턴스를
만들어지는 서브클래스에서 결정하게 한다 .
팩토리 메서드 패턴을 이용하면 , 클래스의 인스턴스 만드는 일을 서브클래스에게 맡기는 것이 됨
나 . 특징
특징 설명
자식 ( 하위 ) 클래스가 어떤 객체를 생성할지를 결정하도록 하는 패턴
장점
- 중첩되기 시작하면 굉장히 복잡해 질 수 있다 .
단점
- 또한 상속을 사용하지만 부모 ( 상위 ) 클래스를 전혀 확장하지 않는다 .
상태를 따로 저장하는 역할을 맡는 객체를 메멘토 객체라고 부름
의견
111

---

## Page 112

제 4 부 소프트웨어 개발
II. 팩토리 메서드 패턴 ( Factory Method Pattern) 개념
- 인스턴스 결정을 서브클래스에서 결정하고 , 객체 생성을 캡슐화
- Factory method 는 부모 ( 상위 ) 클래스에 알려지지 않은 구체 클래스를 생성하는 패턴이며 , 자식 ( 하위 )
클래스가 어떤 객체를 생성할지를 결정하도록 하는 패턴이기도 하다 .
제품클래스 생성자 (Creator) 클래스
Creator 구현없이 추상매서드로 정의
Product
즉 , Creator 에는 제품을 가지고 원하
FactoryMethod( )
는 모든 매서드는 구현되어 있으나 ,
제품을 만들어 주는 팩토리 매서드
/* 추상 메서드 */
는 추상 매서드로 정의되어 있을 뿐 ,
구현되어 있지 않음
/* 상속 */
ConcreteCreator
ConcreteCreator
ConcreteProduct
에서 실제품을 생산하는
FactoryMethod ( ) 을 구현한다 .
즉 , 생성의 모든것을 하위클래스에서
FactoryMethod( )
결정 !
예 ) combination, 등 피자 생성
구상 서브시스템 클래스
의존성뒤집기원칙 (Dependency Inversion Principle)
구상생산자 (Concrete Creator )
- 추상적인 것에 의존하게 만들어라 , 구상 클래스에 의존하게
에서 제품 (Product) 를 생성함
만들지 말자 원칙
112

---

## Page 113

핵심 기출 (2013) & 출제 예상문제
다음에서 설명하는 디자인 패턴과 가장 관련 있는 것은 ?
① composite pattern
② adapter pattern
③ iterator pattern
④ factory method pattern
113

---

## Page 114

해설
Acar 와 Bcar 에서 생성의 모든것을 하위클래스에서 결정한다 .
( 정답 ) ④ factory method pattern
114

---

## Page 115

디자인 패턴 생성패턴
구조패턴
행위패턴
115

---

## Page 116

구조 패턴 (ABCD 파플로 (ABCDFaFlro )): 7 개
패턴 설명
한 클래스의 인터페이스를 클라이언트에서 사용하고자 하는 다른 인터페이스
A. 어댑터 패턴 로 변환한다 .
(Adapter Pattern) 어댑터를 이용하면 , 인터페이스 호환성 문제 때문에 같이 쓸 수 없는
클래스들을 연결해서 쓸 수 있다 .
객체에 추가적인 요건을 동적으로 첨가한다 . 데코레이터는 서브클래스를 만드
D. 데코레이터 패턴 는 것을 통해서 기능을 유연하게 확장할 수 있는 방법을 제공한다 .
( Decorator Pattern) ( 예 ) 즉 , 자신이 장식하고 있는 객체에게 어떤 행동을 위임하는 것 에 외에
어떤 추가적인 작업을 수행할 수 있는 경우 , 스타벅스의 다양한 커피 주문
어떤 서브시스템의 일련의 인터페이스에 대한 통합된 인터페이스를 제공한다 .
Fa. 퍼사드 패턴 ( 예 ) 특정 서브시스템에서 복잡한 인터페이스 집합에 하나의 단순화된 인터페
(Fa çade Pattern) 이스를 제공하기 위한 구조 패턴
( 보통 어댑터를 쓰면 , Smell 징조가 보임 , 개선 필요 )
객체들을 트리 구조로 구성하여 , 부분과 전체를 나타내는 계층 구조를 만들 수
C. 복합 패턴
있음 . ( 예 ) 음식의 메뉴 설계 시에 , MunuComponent 를 MenuItem 과 Menu 가
(Composite Pattern)
상속받아 , getName( ), getPrice( ) 처리
116

---

## Page 117

구조 패턴 (ABCD 파플로 (ABCDFaFlro))
패턴 설명
- 구현 뿐만 아니라 , 추상화된 부분까지 변경해야 하는 경우에는 브릿지 패턴을
사용 .
B. 브릿지 패턴
- 추상화된 부분과 추상 클래스 , 인터페이스를 구현한 클래스를 서로 다른
Bridge
클래스 계층에 넣어 , 분리
- 장점 : 구현과 인터페이스 분리 . 단점 : 디자인이 복잡
- 어떤 클래스의 인스턴스를 한 개만 가지고 , 여러 개의 “ 가상 인스턴스 ” 를
제공 하고 싶다면 , 플라이웨이트 패던 사용
Fl. 플라이웨이트 패턴
예 ) TreeManager, Tree
Flyweight
모든 가상 Tree 객체의 상태를 2 차원 배열에 저장 , Tree 객체 인스턴스 생성
릴레이션 없음
특정 객체로의 접근을 제어하기 위한 용도로 대리인이나 , 대변인에 해당하는
객체를 제공하는 패턴
ro. 프록시 패턴
예 ) 원격 프록시 – 원격 객체에 대한 접근을 제어
Proxy
이 외에 , 가상 프록시 , 보호 프록시가 있음 .
기억법 ) 프록시서버 : 클라이언트 서버간 중계서버
117

---

## Page 118

출제예상문제
1. 다음은 그래픽 요소들 ( 선 , 텍스트 ) 을 그리고 배치할 수 있는 편집도구의 클래스 다이어그램이다 .
다른 도구의 TextView 클래스를 사용하기 위하여 TextShape 클래스를 Shape 의 서브클래스로 생성
하였다 . 이 편집도구에 사용된 디자인 패턴을 설명하시오 . ( 출제 예상 문제 )
118

---

## Page 119

Adapter Pattern( 어댑터 패턴 )
I. 인터페이스 호환성 문제 때문에 같이 쓸 수 없는 클래스들을 연결 , Adapter Pattern 의 개요
가 . 어댑터 패턴 (Adapter Pattern) 의 정의
- 기존에 작성된 프로그램을 직접 수정하지 않고 중간장치 ( 어댑터 ) 를 두어 필요에 맞게 변형하여 사용하는
패턴
- 한 클래스의 인터페이스를 클라이언트에서 사용하고자 하는 다른 인터페이스로 변환하여 인터페이스
호환성 문제 때문에 같이 쓸 수 없는 클래스들을 연결해서 쓸 수 있도록 하는 패턴
나 . Adapter Pattern 에 의한 해법 ( Adapter Pattern 의 문제 영역 )
- 존재하는 클래스를 사용하고자 하는데 인터페이스가 부적절한 경우
- 관계가 없거나 , 예상하지 못하는 클래스와 함께 쓰일 수 있는 재사용 가능한 클래스를 생성하고자 하는
경우
GoF 에 따르면 Adapter 패턴의 의도는 ,
Adapter 패턴은 클래스들이 상호 호환되지 않는 인터페이스 때문에 , 다른 클래스들과 함께 동작하지
못하는 것을 함께 작동하게 해준다 .
한 클래스의 인터페이스를 클라이언트들이 기대하는 또 다른 인터페이스로 전환한다 .
119

---

## Page 120

II. Shape 클래스 – Shape 위치 설정 , 위치가져오기 , 화면 보여주기 , 내부 채우기 , 색깔선정 , 지우기 .
XXCircle 이미 작성되어 있음 ( 타동료 )
- 매서드 이름과 매개변수 목록이 틀림
<< 인터페이스 >>
- Shape 클래스로부터 다형성 유지
Target
- XXCircle 클래스 수정 막고 , Circle
다시 작성피하고 싶음
Adaptee
Adapter
Shape 클래스 생성 - 점 , 선 , 정사각형 클래스 파생
Shape 의 새로운 종류인 원 (Circle) 구현 요청
120

---

## Page 121

나 . Adapter Pattern 의 사례
Client Client Client
클라이언트에서는 Target 인터페이스만 볼 수 있고 ,
Uses Uses Uses
클라인트에서 호출
어댑터에서 Target
▼ ▼ ▼
하는 매서드
인터페이스를 구현한다 .
모든 요청은 어댑티에게 위임됨
◀ ◀ ◀ implements implements implements
extends extends extends ▶ ▶ ▶
<<interface>> <<interface>> <<interface>>
Adapter Adapter Adapter Adaptee Adaptee Adaptee
Target Target Target
targetMethod1 targetMethod1 targetMethod1
targetMethod1 targetMethod1 targetMethod1 methodA methodA
targetMethod2 targetMethod2 targetMethod2
targetMethod2 targetMethod2 targetMethod2 methodB methodB
methodC methodC
- Adapter 는 Target 의 메소드를 상속받아 Adapter 의 기능을 구현하여 , Adaptee ( 기존 있는 모듈 ) 를 연결
- 위의 예는 클래스에 의한 Adapter 패턴의 클래스 ( 상속을 사용 ) 의 예이며 객체에 의한 Adapter 패턴의
( 위임을 사용 ) 방식도 있음 .
- implements 는 여러 개 상속 받을 수 있음 .
121

---

## Page 122

문제 사례 ) 다음은 그래픽 요소들 ( 선 , 텍스트 ) 을 그리고 배치할 수 있는 편집도구의 클래스 다이어그램이다 .
다른 도구의 TextView 클래스를 사용하기 위하여 TextShape 클래스를 Shape 의 서브클래스로 생성
하였다 . 이 편집도구에 사용된 디자인 패턴으로 가장 적절한 것은 ? ( 2017 년 감리사 시험 )
122

---

## Page 123

Facade Pattern( 퍼사드 패턴 )
I. 복잡한 인터페이스 집합에 하나의 단순화된 인터페이스를 제공 , 퍼사드 패턴의 개요
가 . 퍼사드 패턴 (Facade Pattern) 의 정의
- 어떤 서브시스템의 일련의 인터페이스에 대한 통합된 인터페이스를 제공하는 패턴
- 특정 서브시스템에서 복잡한 인터페이스 집합에 하나의 단순화된 인터페이스를 제공하기 위한
구조 패턴
- 어떤 소프트웨어의 다른 커다란 코드 부분에 대한 간결한 인터페이스를 제공하는 객체
나 . 프로토타입 패턴의 특징
예 ) 홈 씨어터 시스템 – 퍼사드 호출 ; 전등 , DVD 플레이어 , 프로젝터 , 앰트 , 스크린 , 팝콘기계 동작
123

---

## Page 124

퍼사드 클래스 다이어그램
Client Façade
서브시스템 클래스
124

---

## Page 125

디자인 패턴 생성패턴
구조패턴
행위패턴
125

---

## Page 126

행위 패턴 - CMI(CCMMII) 쏘티브 (SSOTV); 11 개
패턴 설명
요구 사항을 객체로 캡슐화할 수 있으며 , 매개 변수를 써서 , 여러 가지
다른 요구사항을 집어 넣을 수 있음 .
커맨드 패턴
(Command Pattern)
예 ) 클라이트에서 정보를 받아 , execute() 함수 호출
처리지시 전달 패턴
- 역할 사슬 패턴 , 한 요청을 2 개 이상의 객체에서 처리
역할사슬 패턴
- 한 요청을 하나 이상의 객체가 연속적으로 처리 할 수 있도록 해주는 행위패턴
(Chain of
팁 !) 사슬 (Chain) 로 연결되어 있음
responsibility)
예 ) 윈도우시스템 - > 마우스클릭 / 키보드클릭 – 전달 … 이런 이벤트 처리패턴
객체를 이전의 상태로 복구 시켜야하는 경우에는 메멘토 패턴을 쓰면 됨 .
메멘토 패턴
예를 들어 , 사용자가 “ 작업 취소 ” 를 요청 하는 경우를 생각하면 됨 .
(Memento Pattern)
(DB 있는 것은 언제 다 이전상태로 복구함 ? 매우 어렵다는 것을 생각 )
- 객체들 간의 상호작용을 분리하여 캡슐화 함으로써 상호작용의 유연한 변경을
미디에이터 패펀
지원하는 행위패턴
(Mediator)
- EAI 의 주요 기능이 바로 미디에이터 기능임 .
126

---

## Page 127

행위 패턴 - CMI(CCMM II) 쏘 티브 ( SS OTV)
패턴 설명
문법 자체를 캡슐화하여 문법 검사와 함께 필요한 동작을 수행할 수 있는 방법
인터프리터 패턴
을 제공하는 행위패
( Interpreter)
예 ) 어떤 언어에 대한 인터프리터를 만들때 사용하는 패턴 유용
내부 구조를 노출하지 않고 복합 객체의 원소를 순차적으로 접근할 수 있도록
이터레이터 패턴 해주는 행위패턴 . 배열리스트 같이 접근할 수 있는 패턴
(Iterator) 예 ) 자바 Iterator 인터페이스를 제공함
java.util.iterator
알고리즘 군을 정의하고 , 각각을 캡슐화하여 교환해서 사용할 수 있도록 만든다 .
전략패턴을 활용하면 알고리즘을 사용하는 클라이언트와는 독립적으로
전략 패턴 *
(Strategy Pattern)
알고리즘을 변경할 수 있다 .(Family of algorithm)
예 ) Select box 를 통한 알고리즘 선택
상태가 변경될 때 마다 별도의 행위를 지정해야 되는 객체를 정의 및 조직화
상태 / 스테이트 하는 방법을 제공하는 행위패턴
(State Pattern) Client 상태에서 발생 가능한 상태 ( 온 , 오프 등 ) 마다 수행되는 클래스
( 전략패턴와 유사 , 상태에 최적화 )
127

---

## Page 128

행위 패턴 - CMI(CCMMII) 쏘티브 (SS OTV )
패턴 설명
한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들한테 연락이 가고 , 자
동으로 내용이 갱신되는 방식으로 일대다 (one - to - many) 의존성을 정의한다 .
옵저버 패턴 ( 예 ) 신문 구독 매커니즘 , 일방적 통지 (Broadcasting) 방식의 패턴
(Observer Pattern)
출판사를 주제 (subject), 구독자를 옵저버 (observer) 라고 부르면 ,
데이터가 변경되면 새로운 데이터 값을 어떤 방법으로든 옵저버에게 전달하는
사례 (111 회 기출문제 )
메소드에서 알고리즘의 골격을 정의하는 패턴 . 알고리즘의 여러 단계 중
일부는 서브클래스에서 구현할 수 있다 . 템플릿 메소드를 이용하면
템플릿 메소드 패턴 알고리즘 구조는 그대로 유지하면서 서브클래스에서 특정 단계를
(Template Method 재정의 할 수 있다 .
Pattern) ( 예 ) 추상 클래스로 선언하기 때문에 실제 연산을 구현해 주는 서브클래스를
만들어야 하며 , 서브클래스에서 각 단계를 건드리는 것을 막기 위해
Final 로 선언한다 .
- 특정 구조를 이루는 복합객체의 원소의 특성에 따라 동작을 수행할 수 있도록
지원하는 행위패턴
비지터 패턴
- 기능을 수행하는 클래스와 복합객체를 이루는 클래스들간 결합도를 최소화
( Visitor)
할 수 있는 방법을 제공 , 예 ) 여러 매서드등이 다양해서 , 처리할때 ( 방문할때 ),
어떤 특정값을 들고 방문함 ( 처리함 ), 나중에 수정시 , 비지터 함수만 수정
128

---

## Page 129

Strategy Pattern( 전략 패턴 )
I. 알고리즘을 캡슐화 한 패턴 , 전략패턴의 개요 .
가 . 전략 패턴 (Strategy Pattern) 의 정의
다양한 정책과 알고리즘이 있을 경우 . 알고리즘 여러 개를 만들고 그것들을 상호호환성 있도록 함
알고리즘 교체 가능하게 한 패턴
나 . 특징
특징 설명
디자인의 원칙 - " 애플리케이션에서 달라지는 부분을 찾아내고 , 달라지지
않는 부분으로부터 분리시킨다 ."
- " 바뀌는 부분은 뽑아서 캡슐화 . 그렇게 하면 나중에 바뀌지 않는 부분에는
알고리즘군
영향을 미치지 않은 채로 그 부분만 고치거나 확장할 수 있다 "
- 달라지는 부분이 알고리즘군
- 행동을 모두 캡슐화
129

---

## Page 130

I. Strategy Pattern
다양한 정책과 알고리즘이 있을 경우 . 알고리즘 여러 개를 만들고 그것들을 상호호환성 있도록 함
알고리즘 교체 가능 ; 알고리즘군을 캡슐화 , 교환 처리할 때 사용함 .( 이전 구현 사례 - Select box)
인터페이스 정의
Main 함수 / 필요할 때 마다 호출
구체적 기능 캡슐화 하여 코딩
- 하나의 결과를 만드는 목적은 동일하나 , 그 목적을 처리하는 방법 ( 전략 , 알고리즘 ) 이 여러 가지가
존재하는 경우에 사용하는 동적으로 매서드를 교체할 수 있는 구조
130

---

## Page 131

핵심 기출 (2011) & 출제 예상문제
화면에 이미지를 출력할 때 네트웍의 상태에 따라서 보다 효율적인 알고리즘을
선택하고자 한다 . 즉 네트웍 상태가 우수한 경우에는 A 알고리즘을 사용하고 그렇지
않은 경우에는 B 알고리즘을 사용 하고 할 때 가장 적절한 설계 패턴은 무엇인가 ?
① Template Method 패턴
② Strategy 패턴
③ Mediator 패턴
④ Observer 패턴
131

---

## Page 132

해설
알고리즘 선택은 전략 패턴이다 . 전형적인 문제이다 . 암기할 것은 암기한다 .
( 정답 ) ② Strategy 패턴
132

---

## Page 133

Memento Pattern( 메멘토 패턴 )
I. 객체를 이전의 상태로 복구시켜야하는 경우 사용 패턴 , 메멘토 패턴의 개요 .
가 . 메멘토 (Memento Pattern) 의 정의
- 객체를 이전의 상태로 복구 시켜야하는 경우에는 메멘토 패턴을 쓰면 됨 .
- 예를 들어 , 사용자가 “ 작업 취소 ” 를 요청하는 경우를 생각하면 됨
나 . 특징
특징 설명
별도 보관 저장된 상태를 다른 별도로 객체를 보관하기 때문에 안전함 .
자신의 상태 정보를 스냅샷 메멘토 객체를 생성하여 저장 , 자신의 상태를
작업 취소
복원
메멘토 객체 상태를 따로 저장하는 역할을 맡는 객체를 메멘토 객체라고 부름
기억법 ) 메멘토 : ( 기억하기 위한 ) 기념품
133

---

## Page 134

II. 메멘토 패턴의 개념도
상태를 저장하고 싶
Clinet
은 정보를 메멘토
객체를 사용해서 따
로 저장
설명 ) 자신의 상태 정보를 스냅샷 메멘토 객체를 생성하여 저장 , 자신의 상태를 복원
목적 ) 복구 기능 구현 용이
단점 ) 상태를 저장하고 , 복구하는데 시간이 오래 걸릴 수 있는 단점 존재
134

---

## Page 135

템플릿 메소드 패턴 (Template Method Pattern)
I. 서브클래스에서 특정 단계를 재정의 할 수 있는 패턴 , 템플릿 메소드 패턴의 개요
가 . 템플릿 메소드 패턴 (Template Method Pattern) 의 정의
추상 클래스에서 메소드 , 알고리즘의 골격을 정의하는 패턴 . 알고리즘의 여러 단계 중 일부는 서브클래
스에서 구현할 수도 있음 . 템플릿 메소드를 이용하면 알고리즘 구조는 그대로 유지하면서
서브클래스에서 특정 단계를 재정의 할 수 있는 패턴
나 . 특징
특징 설명
골격 정의 - 알고리즘의 골격을 정의 ! 즉 알고리즘의 구조는 그대로 유지하는 패턴
( 예 ) 추상 클래스로 선언하기 때문에 실제 연산을 구현해 주는
서브클래스를 만들어야 한다 .
사례 참고 ) 서브클래스에서 각 단계를 건드리는 것을 막기 위해
Final 로 선언한다 . ( java 에서 final 변수 및 함수를 이용하는 것은 변경
금지용 )
의견 템플릿은 구조를 만들어 준다 .
135

---

## Page 136

II. 템플릿 메소드 패턴의 개념도
Final 로 구현 ( 선언 ) 되어
있기 때문에 ,
서브클래스에서 템플릿메서드를
오버라이드 (overide)
할 수 없음
구상 클래스에서
구현 ★
- Operation1( ), 2( ) 의 골격 추가
- 세부처리는 하위 클래스에서 개별적으로 정의하고 , 공통적인 전체 처리 흐름은 상위 클래스에서 규정
하는 행위패턴으로 , 혹은 일부만 서브클래스에서 특정 단계를 재정의 할 수 있음
( 단계 유지 , 각 서브 클래스 내에서만 재정의는 가능 )
136

---

## Page 137

핵심 기출 (2014) & 출제 예상문제
class S {
public void foo() {
f1() ;
if ( f2() ) f3() ;
f4() ;
}
private void f1() { ... }
private void f4() { ... }
protected abstract boolean f2() ;
protected abstract void f3() ;
}
class C extends S {
protected boolean f2() { ... }
protected void f3() { ... }
}
137

---

## Page 138

해설
Class C 는 S 의 골격을 적용하고 구현하는 소스이다 .
( 정답 ) ③ 템플릿 메소드 (Template Method) 패턴
138

---

## Page 139

제 4 부 소프트웨어 개발
III. 디자인 패턴의 기본 MVC 패턴
가 . 개념
사용자 인터페이스로부터 비즈니스 로직을 분리하여 애플리케이션의 시각적 요소나 그 이면에서 실행
되는 비즈니스 로직을 서로 영향 없이 수정할 수 있도록 지원하는 소프트웨어 디자인 패턴
- 비즈니스 로직과 사용되는 데이터를 다루는 영역 ( 응용프로그램 객체 )
Model
- 데이터는 DB, 데이터 연산은 SQL 문법을 통해 구현
- 최종 사용자에게 보여줄 프리젠테이션 로직 담당 영역
View
- 정적 리소스는 HTML, 동적 리소스는 ASP, PHP, JSP 등
( 스크린에 모델을 디스플레이하는 방법 )
- 사용자의 입력 및 흐름제어 담당 (Model/View 연계 )
- ( 사용자 인터페이스가 사용자 입력에 반응하는 방법 정의 )
Control
(MV 패턴에서 일부 로직들을 Controller 영역으로 대체 )
(Controller)
- Model 과 View 영역간 코드 결합도를 줄여주는 역할
139

---

## Page 140

제 4 부 소프트웨어 개발
VI. 디자인 패턴의 중요한 규칙들
1) 구현 (Implement) 클래스가 아니라 , 인터페이스 (Interface) 를 가지고 프로그래밍 .
- 인터페이스 클래스의 메소드를 바탕으로 호출
- 인터페이스를 구현한 클래스의 내부 변화 ( 비즈니스 로직 변경 ) 에 영향을 받지 않음
2) 상속 (Inheritance) 이 아니라 위임 (Delegation) 을 사용 .
- 불필요한 슈퍼 클래스의 속성 및 메소드를 상속받음
- 상속의 경우 컴파일시 슈퍼클래스와 서브클래스의 구조가 결정됨
- 위임의 경우 런타임시 필요한 클래스를 사용 ( 객체를 통해 호출 )
3) 커플링 (Coupling) 을 최소화 .
- God Class 를 만들지 않음 . - 한 클래스의 변화가 전체클래스를 변화되지 않게 해야 함
4) 어플리케이션에서 달라지는 부분을 찾아내고 , 달라지지 않는 부분으로 부터 분리 시킨다 .
140

---

## Page 141

제 4 부 소프트웨어 개발
V. 디자인 패턴 적용의 장점 및 문제점
가 . 디자인 패턴 적용의 장점
- 시스템 개발 시 공통 언어 역할
- 코드의 품질 향상
- 향후 변화에 대한 대비
- 유지보수 용이성
나 . 디자인 패턴 적용의 문제점
- 오용된 패턴은 유지보수를 더 어렵게 만들 수 있음
- 잘못 해석된 패턴은 재사용성을 더 어렵게 만들 수 있음
- 잘못 사용된 패턴은 개발을 더 어렵게 만들 수 있음
- 설계자가 패턴을 익히는데 오랜 훈련 시간을 필요로 함 .
VI. 패턴의 향후 전망
가 . 다양한 패턴
- Design Pattern 만이 아니라 , Analysis Pattern, Architecture Pattern, Process Pattern,
Organization Pattern 등 다양한 유형이 정의되고 사용되고 있음
나 . 패턴을 적용한 프레임웍과 컴포넌트들이 보급됨
- J2EE Pattern
- 샌프란시스코 패턴 등
141

---

## Page 142

TDD
I. 테스트 중심 개발 (Test - driven development) 의 개요
가 . 테스트 중심 개발 (TDD) 의 정의
- Simple Code 의 추구를 목적으로 Test Case 를 먼저 개발하고 Test Case 를 통과
하는 실제코드를 나중에 개발하는 Agile 개발방법
- 프로그램에 대한 테스트를 먼저하고 , 이 테스트를 통과할 수 있도록 , 단위 테스트를 바탕으로
반복적인 수정 , 추가작업을 완성해 가는 개발 방법론
나 . 테스트 중심 개발 (TDD) 의 특징
- Design for Testability : 소스코드의 의존성이 감소하고 독립적 테스트가 가능한
설계구조
- 테스트 커버리지 확보 : 단위테스트를 통한 테스트 커버리지 유지 , 디버깅 시간감소
- 견고성 보장 : 발생가능오류에 대한 조기 탐지가능
- 기능에 집중 : 기능위주의 테스트 작성으로 해당 기능의 견고성이 증가함
- clean code that works: 작동하는 깔끔한 코드 지향
142

---

## Page 143

II. 테스트 중심 개발 (TDD) 의 사이클
가 . 테스트 중심 개발 (TDD) 의 사이클
구분 내용
사이클
사용자 요구사항 - 사용자 , BU(Business Unit), 제품 개발자 등이 요구사항의 Story 작성
Test Case - 사용자 , Tester 등 관련자 들이 Test Case 을 마련 Detail 하게 작성
Code 작성 - 개발자가 개발 단계로 Code 을 작성
- Bad smell 을 제거하여 Refactoring 수행 후 Simple Code 에 대한 Test
Refactoring
수행
[ 참고 ] 테스트 중심 개발은 요구사항에 대한 Green Code 가 될 때까지 반복 수행
143

---

## Page 144

나 . 테스트 중심 개발 (TDD) 의 사이클 ( 단위 Test 설계 중심으로 )
구분 내용
사이클
추출
- 사용자스토리 작성 , 테스트 케이스 , 시스템 구현 , 테스트 수행으로 이룬 사이클
내용
- TDD 사이클은 Red Code - > Green Code - > Clean Code 로 변경됨 .
144

---

## Page 145

III. TDD 개발 방식 적용시 고려요소 및 활용방안
가 . 고려요소
- TDD 개발방법 숙지 : 테스트 케이스의 이해와 익숙하기 전에는 일시적 생산성
저하가능
- 자동화된 프로세스 : 테스트자동화와 형상관리 , 버전관리 등 다른 관리요소가 요구됨 ,
개발 통합 도구를 활용하여 커밋시 빌드 / 테스트 가능한 환경 구축
- 방법론적 접근 : 시스템의 목적과 특성에 맞게 접근이 요구됨
나 . TDD 의 활용방안
- 상세화 되지 않은 시스템 : PoC (POC, Proof of Concept; 초기 개념 정립 ), prototyping 에
활용 , 점진적 개발로 요구사항 상세화 기능 상세화 유도
- Pair - Programming : 선임자와 후임자가 pair 로 코딩 , 테스트 설계부분을 선임자가
후임자는 코딩 부분을 전담
- 유지보수 관점 : 지저분한 코드 (alien code) 의 제거 및 구조개선을 위한 개선
프로젝트에 활용
145

---

## Page 146

McCabe( 맥캐브 )
Cyclomatic Complexity ( 복잡성 지표 )
소프트웨어 한 Unit 내 (Method 혹은 Function) 의 코드 복잡도 정량적 지표 로 많이 사용되는
Cyclomatic Complexity 는 1976 년 McCabe 가 고안한 소프트웨어 지표입니다 . 거의 모든 정석
분석 도구에서 이 수치를 지원하며 , 각종 테스팅 서적 및 자격증에서도 기본적으로 출제하는
문제이기 때문에 알아두면 좋습니다 . ( Cyclomatic complexity is a software metric
(measurement), used to indicate the complexity of a program)
I. 대표적인 SW 복잡도 측정 매트릭스 , McCabe 회전 복잡도 개요
가 . McCabe 회전 복잡도 정의
- 제어 흐름 그래프를 통해 회전 ( 사이크로매틱 ) 수를 구하여 복잡도를 계산하는 방법
- McCabe 회전복잡도는 사이클로매틱 ( 회전 ) 수 , 즉 그래프에 있는 리전 (Region: 평면상의 밀폐된
영역 ) 의 수로 정의
나 . McCabe 회전 복잡도의 특징
- 프로그램 논리 흐름을 표현한 제어 흐름 그래프를 기초
- 프로그램의 논리적인 복잡도의 분량상 측정을 제공하는 SW 척도
- 프로그램의 선택 경로와 루프가 많아질수록 증가 – 프로그램 이해 난이도 상승
146

---

## Page 147

II. McCabe 회전 복잡도 계산 및 분석
가 . McCabe 회전 복잡도의 계산 ★★
- 공식 : 프로그램 복잡도 V(G) = e - n + 2 ( e : edge( 간선 ) 의 수 , n : node 의 수 )
147

---

## Page 148

나 . McCabe 회전 복잡도 분석
복잡도 기준 분석 내용
복잡도가 5 이하인 경우 매우 간단한 프로그램일 경우
복잡도가 5 ~ 10 인 경우 매우 구조적이며 안정된 프로그램
복잡도가 20 이상인 경우 문제 자체가 매우 복잡하거나 구조가 필요 이상으로 복잡한 프로그램
148

---

## Page 149

핵심 기출 (2014) & 출제 예상문제
다음의 UML 시퀀스 다이어그램을 통해서 표현된 f0() 함수의 순환 복잡도 ( Cyclomatic
Complexity) 로 가장 적절한 것은 ?
① 3 ② 4 ③ 5 ④ 6
149

---

## Page 150

해설
McCabe 회전 복잡도의 계산 ★★
- 공식 : 프로그램 복잡도 V(G) = e - n + 2 ( e : edge( 간선 ) 의 수 , n : node 의 수 )
위 공식에 따라 ,
간선 : 5(f 의 전체 수 - 갈수있는 곳 ), 노드 : 3( 오브젝트 )
5-3+2= 4
( 정답 ) ② 4
150

---

## Page 151

핵심 기출 (2013) & 출제 예상문제
다음은 세 과목의 점수를 입력받아 평균점수가 70 점 이상이면 “합격” , 70 점 미만이면
“불합격”을 출력하는 프로그램의 일부이다 . McCabe 의 순환 복잡도 ( cyclomatic
complexity) 는 얼마인가 ?
① 3 ② 4 ③ 5 ④ 6
151

---

## Page 152

해설
McCabe 회전 복잡도의 계산 ★★
- 공식 : 프로그램 복잡도 V(G) = e - n + 2 ( e : edge( 간선 ) 의 수 , n : node 의 수 )
- 프로그램 코드상에서 파악
- 공식 : 프로그램 복잡도 V(G) = 의사결정수 + 조건수 + 1
( 제어흐름도를 그리기 어려운 경우 활용 )
의사결정수 : if - then - else, do while, case // 각각이 하나다 !
조건수 : and, or, not 등
- > 의사결정수 (1+1) + 조건수 (0) + 1 = 3
( 정답 ) ① 3
152

---

## Page 153

Chapter VI Test
153

---

## Page 154

1. Test 일반
VI. Test
기출문제
1. 이벤트 기반의 시스템 테스팅을 위한 Record and Replay 기법 에 대하여 설명하시오 .
( 관리 83 회 1 교시 )
2. 소프트웨어의 명세기반기법 (Specification - Based Technique) 테스트 와 구조기반기법
(Structure - Based Technique) 테스트 방법 을 나열하고 설명하시오 .
( 관리 83 회 2 교시 )
3. 대규모 차세대시스템 구축 프로젝트에서 시스템 특성에 따라 적용해야 할 테스트 유형을
1) 사용자 인터페이스 테스트 (User Interface Testing or Usability Testing),
2) 기능 테스트 ,
3) 비즈니스단 성능테스트 ,
4) WAN 구간 성능 테스트로 구분 시 , 각각에 대한 내용을 설명하시오 .
( 관리 81 회 1 교시 )
4. 빅뱅테스트 ( Bigbang Test) ( 조직응용 81 회 1 교시 )
5. 소프트웨어 테스트 기법의 유형 을 나열하여 기술하고 , 각 유형별 주요 기술을 설명하시오 .
( 관리 81 회 3 교시 )
154

---

## Page 155

1. Test 일반
VI. Test
기출문제
6. 패키지 소프트웨어를 적용하여 기업 애플리케이션을 개발할 경우 패키지는 커스터마이징
(Customizing) 또는 애드온 (Add - On) 되어야 한다 . 이 때 , 패키지 소프트웨어를 테스트하기 위한
고려사항과 절차에 대하여 설명하시오 .
( 관리 101 회 3 교시 )
7. 실시간 임베디드 타겟 시스템 (Real - time Embedded Target System) 을 자동으로 시험하기 위하여
기능 (Function), 성능 (Performance) 및 인터페이스 (Interface) 중심의 테스트베드 ( Testbed ) 를 설계
하시오 .
( 컴시응 , 102 회 , 4 교시 )
8. 테스트 설계 기법 중 명세기반 기법 (Specification - based Technique ) 에 대하여 설명하시오 .
( 컴시응 , 111 회 , 3 교시 )
155

---

## Page 156

1. Test 일반
VI. Test
기출문제
6. 탐색적 테스팅과 테스트케이스 기반 테스팅을 비교하시오 .
(2012. 10 월 모의고사 )
탐색적 테스팅 테스트케이스 기반 테스팅
테스터가 테스트를 수행하면서 테스트 설계를 능동적 특정한 프로그램 경로를 실행해 보거나 특정한
으로 제어하고 , 새롭고 보다 나은 테스트를 설계하기 요구사항을 준수하는지 검증하기 위하여 입력값
위해 , 테스트를 수행하는 동안 얻은 정보를 활용하는 , 예상결과 , 실행조건의 집합을 명세화한 문서 기
발견론적인 (Heuristic) 테스팅 접근 기법 (Bach 정의 ) 반의 공식적 테스트 기법
156

---

## Page 157

No 기출 문제 비고
소프트웨어의 회귀시험 (Regression Test) 에 대하여 설명하시오 관리 105 - 1
- 크라우드소싱 테스트 ( Crowdingsourcing Test) 를 설명하시오 관리 105 - 1
MC/DC (Modified Condition / Decision Coverage) 컴시응 105 - 1
최근 금융권에서는 암호화를 전사 구간으로 확대하기 위해 PoC (Poof of Concept) 를 진행하고 있다
1 응용 104 - 2
PoC, Pilot test, BMT (Benchmark Test) 의 주요 특징과 차이점에 대하여 비교 설명하시오 .
실시간 임베디드 타겟 시스템 (Real time Embedded Target System) 을 자동으로 시험하기 위하여
2 기능 (Function), 성능 (Performance) 및 인터페이스 (Interface) 중심의 테스트 베드 (Testbed) 를 설 응용 102 - 4
계하시오 .
패키지 소프트웨어를 적용하여 기업 Application 을 개발할 경우 패키지는 커스터마이징 (Customizi
3 ng) 또는 애드온 (AddOn) 되어야 한다 . 이때 , 패키지 소프트웨어를 테스트하기 위한 고려 사항과 절 관리 101 - 3
차에 대하여 설명하시오 .
우리나라의 소프트웨어 산업은 세계 소프트웨어 시장의 1% 미만으로 낮은 수준이지만 국내 시장에
서의 성공을 바탕으로 글로벌 시장으로 그 영역을 넓혀 나가는 소프트웨어들이 생겨나고 있다 . 이러
한 소프트웨어 제품들이 다양한 글로벌 환경과 요구 사항에 대응할 수 있도록 개발하고 , 세계적 수
4 준의 품질을 확보하기 위한 소프트웨어 글로벌화와 관련하여 다음에 대해 설명하시오 관리 98 - 2
글로벌 소프트웨어 개발 주기
글로벌화 테스팅을 위한 테스트 유형과 절차
소프트웨어 제품의 글로벌화를 위해 목표 지역마다 별도 제품을 출시할 경우 문제점과 해결 방안
소프트웨어 테스트 원리 중 살충제 패러독스 (Pesticide Paradox) 와 오류 부재의 궤변 (Absence - err
5 관리 98 - 1
or fallacy) 에 대해 설명하시오 .
6 테스트 오라클에 대하여 설명하시오 응용 96 - 4
소프트웨어 테스팅의 주요 이슈들을 제시하고 , 이중 비기능적 테스팅 (Non - functional Testing) 과 동
7 관리 96 - 4
적 테스팅 (Dynamic Testing) 을 구체적으로 설명하시오
8 임베디드 시스템을 테스트하기 위한 하드웨어 및 소프트웨어 테스트 기법에 대하여 설명하시오 응용 96 - 3
시스템 대형화 , 복잡화 대국민 서비스의 증가 및 모바일화 등으로 인해 안정적인 정보 서비스 지원
이 기업의 성장과 생존에 중요한 요소가 되었다 . 시스템의 빈번한 유지 보수와 데이터의 증가 등에
따라 성능 저하가 발생하여 성능 테스트를 통한 성능 개선 및 서비스 안정화를 하려고 한다 . 다음 질
문에 답하시오 .
9 성능 테스트에 관련된 다음 용어를 설명하시오 관리 95 - 2
Named User, Concurrent User, Response Time, Think Time
다음의 성능 테스트 유형에 대하여 설명하시오
Loop Back Test, Tier Test, Spike Test
성능 테스트 시에 고려할 사항에 대하여 설명하시오
157

---

## Page 158

No 기출 문제 비고
국제표준 (IEEE 또는 IEC) j 에 적합한 임베디드 시스템 (Embedded System) 소프트웨어의 시험
10 계획 (Test Plan), 시험 사례 생성 (Test Case Generation) 및 시험 실행 (Test Execution) 에 응용 93 - 4
대해서 설명하시오
11 응용 93 - 1
Pairwise Testing
12 이벤트 기반의 시스템 테스팅을 위한 record and replay 기법을 설명하시오 관리 93 - 1
13 테스트 오라클 (Test Oracle) 의 특징과 유형을 설명하시오 관리 92 - 1
아래의 코드에 대한 테스트케이스 (Test Case) 를 작성하는 과정에 대하여 다음 질문에 답하시
오
14 관리 92 - 2
제어 흐름도를 작성하시오
테스트경로를 나열하시오
테스트 경로에 따른 테스트케이스를 작성하시오
시스템의 테스트 완전성을 확보하기 위한 소스코드 커버리지 (Source Code Coverage) 의 종
15 관리 92 - 3
류를 나열하고 , 예를 들어 설명하시오 .
다음 사례를 이용하여 블랙박스 테스트를 위한 테스트 케이스 (Test Case) 를 작성하시오 .
< 사례 >
식품점의 전산화를 위한 모듈이 식료품의 이름과 킬로그램 (Kg) 으로 표시된 무게를 입력 받는
16 다 . 품명은 영문자 2 자리에서 15 자리까지 구성되고 , 무게는 1 에서 48 까지의 정수로 구성된 값 관리 89 - 3
이다 . 무게는 오름 차순으로 입력된다 .
품명이 먼저 입력되고 다음에 쉼표가 따라오고 , 마지막으로 무게 값의 리스트가 나온다 . 쉼표
는 각 무게를 구별하기 위하여 쓰인다 . 입력에 빈칸이 나오면 무시된다 .
158

---

## Page 159

No 기출 문제 비고
소프트웨어 시험에 관한 제반 내용들을 시험 통과 기준 , 시험 환경 구성 , 소프트웨어 시험 생명
17 주기 (Software Test Life cycle) 단계별 활동 시험 전략 , 시험 도중 오류가 발생하였을 경우 이에 조직 89 - 4
대한 해결 과정 및 시험 문서화에 대하여 설명하시오 .
18 준거성 테스트 (Compliance Test) 와 실증성 테스트 (Substamtive Test) 를 설명하시오 관리 86 - 1
소프트웨어의 시험 (Test) 전략을 소프트웨어 엔지니어링 프로세스 (Life Cycle) 와 연관 지어 설
19 관리 86 - 1
명하시오
20 Test Case 조직 86 - 1
당신이 차세대 프로젝트의 개발자로서 참여한다고 가정하자 , 설계서에 의거하여 소스 코딩을
21 하고 , 소스 코딩이 끝나면 단위 테스트를 수행한다 . 단위 테스트와 관련된 환경 , 절차 , 산출물 , 조직 86 - 2
이슈 사항을 설명하고 도출된 이슈 사항에 대한 해결 방안을 기술하시오 .
시스템 구축 시 기존 시스템의 거래 로그 (Transaction Log) 를 이용하여 테스트 하기 위한 전
22 조직 86 - 4
제 조건과 시스템 구성 , 기대 효과에 대하여 설명하시오 .
23 V -Model 기반의 Water Fall Model 테스트에 대하여 설명하시오 조직 84 - 3
24 블랙박스 테스트 (Black Box Test) 와 화이트박스 테스트 (White Box Test) 를 비교 설명하시오 . 관리 84 - 1
25 응용 소프트웨어 테스트 중에 회귀 테스트 (Regression Test) 에 대하여 설명하시오 . 관리 84 - 3
응용 소프트웨어 개발 시 주요 액티비티인 테스트 실시 및 진행 과정에 대하여 발생되고 있는
26 관리 84 - 4
문제점들을 도출하고 각각에 대한 해결 방안을 논하시오
소프트웨어의 명세 기반 기법 (Specification Based Technique) 테스트와
27 관리 83 - 2
구조 기반 기법 (Structure Based Technique) 테스트 방법을 나열하고 설명하시오
대규모 차세대 시스템 구축 프로젝트에서 시스템 특성에 따라 적용해야 할 테스트 유형을 1)
사용자 인터페이스 테스트 (User Interface Testing or Usability Testing), 2) 기능 테스트 , 3) 비
28 관리 81 - 1
즈니스단 성능 테스트 , 4) WAN 구간 성능 테스트로 구분 시 , 각각에 대한 내용을 설명하시오 .
테스트 개념 , 필요성 , 각각의 테스트에 대한 설명
29 회 귀 시험 (Regression Test) 조직 81 - 1
30 빅 뱅 테스트 (Big - Bang Test) 조직 81 - 1
소프트웨어 테스트 기법의 유형을 나열하여 기술하고 , 각 유형별 주요 기술을 설명하시오 .
31 V Diagram 그리고 , 세가지 분류 (SDLC, 실행 , 코드 ) 으로 나누어 각 유형 적고 , 유형별 세부내용 관리 81 - 3
(Inspection, PSP/TSP)
159

---

## Page 160

No 기출 문제 비고
차세대 시스템 IT Upgrade 프로젝트를 수행하는 과정에서 구현이 완료된 뒤 , 통합 테스트와 영
업점 테스트 사이에 전반적인 성능 향상 (Performance) 을 위한 튜닝을 실시하고자 한다 . 이에
대한 실시 방안을 기술하시오 .
32 < 프로젝트 개요 > 관리 81 - 4
소요기간 및 투입 M/M : 16 개월 , 200 M/M
적용 IT 환경 : NT 서버에 Unix 탑재 , MS - SQL 서버 , WAS 서버의 EJB 생성 , X - Interface UI 툴 , R
eporting 툴 , J2EE & EJB framework
33 소프트웨어 테스트 프로세스를 설명하고 각 단계별 활동을 기술하시오 . 관리 78 - 4
34 임베디드 소프트웨어 성능 테스트 조직 77 - 1
35 테스트 자동화 (Automated Function Test) 에 대하여 상세히 기술하시오 . 관리 77 - 4
36 소프트웨어 테스트 기법에 대하여 설명하시오 관리 77 - 2
37 Test Harness 를 설명하시오 관리 75 - 1
38 White Box Test 조직 75 - 1
소프트웨어 테스팅에 대하여 다음을 기술하시오 .
정의
39 V 모델 관리 74 - 4
정적 테스팅 및 동적 테스팅 차이점
Sandwich Testing
소프트웨어 Testing 과 관련하여 다음 사항을 설명하시오
검증 (Validation) 과 확인 (verification) 의 비교 설명
40 조직 72 - 2
블랙박스 시험과 화이트박스 시험의 비교 설명
화이트박스 시험의 필요성
실시간 임베디드 타겟 시스템 (Real - time Embedded Target System) 을 자동으로 시험하기 위하
41 여 기능 (Function), 성능 (Performance) 및 인터페이스 (Interface) 중심의 테스트베드 (Testbed) 를 컴시응 102 - 4
설계 하시오 .
산업분야에 적용되는 임베디드 소프트웨어의 품질특징을 설명하고 , 산업현장에서 임베디드
42 관리 107 - 4
소프트웨어 테스팅에 있어 발생하는 문제점을 3 가지 나열하시오 .
160

---

## Page 161

1. Test 일반
I. SW 무결점 접근을 위한 , 소프트웨어 테스트의 개요
가 . 소프트웨어 테스트 (Software Test) 의 정의
- 노출되지 않은 숨어있는 결함 (Fault) 을 찾기 위해 소프트웨어를 작동시키는 일련의 행위와 절차
- 오류 발견을 목적으로 프로그램을 실행하여 품질을 평가하는 과정
나 . 소프트웨어 테스트의 원리
1) 살충제 패러독스 (Pesticide Paradox); 동일한 테스트 케이스로 동일한 테스트를
반복적으로 수행한다면 , 나중에는 더 이상 새로운 결함을 찾아내지 못함
2) 오류 부재의 궤변 (Absence - errors fallacy); 개발된 시스템이 사용자의 필요와 기
대에 부응하지 못하고 사용성이 현저히 낮다면 결함을 찾고 수행하려는 과정은 아
테스트 원리
무 소용없음
3) 결함 집중 (Defect Clustering): 파레토 법칙 , 결함 20% 가 80% 영향
4) 테스트는 개발 초기부터 시작 : 품질비용 감소 목적
5) 완벽한 테스트는 불가능 : 자원의 한계
161

---

## Page 162

II. 소프트웨어 테스트의 경제성
가 . 소프트웨어 테스트의 경제성 원리
- 추가 결함 발견될 확률은 기 발견된 결함 수에 정비례
- 개발시 노력 분포도 40 : 20 : 40 ( 설계 40 % , 프로그래밍에 20 % , 테스트에 40 % 의 노력이 소요 )
- 유지보수 단계의 생산성은 개발단계의 생산성의 1 / 40
- 테스트를 얼마나 철저히 했느냐에 따라 사용자의 만족도 ( 품질 ) 가 달라지고 유지보수 비용에
큰 차이가 있을 수 있음
- 소프트웨어의 내재된 결함을 찾아내는 시기가 중요
나 . 소프트웨어 테스트와 유지보수 비용과의 관계
162

---

## Page 163

III. 테스트 구성 도
시스템 및 시스템 컴포넌트를 시험하는 환
경의 일부분으로 시험을 지원하는 목적하
에 생성된 코드와 데이터 ; 테스트 하네스
특정 시스템 컴포넌트의 개발이 완료되지 않은 상황
에서도 필요한 시험을 진행하기 위해 생성된 더미
상향식 (Bottom - up) 테스트에서 아직 통합되지
컴포넌트 (dummy component). 단지 기능
않은 상위 컴포넌트의 동작을 시뮬레이션하는
(function) 또는 프로시저 헤더 등의 코드 루틴만 갖
모의 모듈을 의미 .
고 내부 프로세싱은 제한적으로 존재하거나 존재하
지 않는 것이 일반적 .
163

---

## Page 164

IV. 소프트웨어 테스트의 유형 및 분류
구분 유형 특징
프로그램 내부 로직을 보면서 테스트 ( 구조 테스트 )
화이트 박스 • 구조 테스트 : 프로그램의 논리적 복잡도 측정 후 수행경로들의 집합을
테스트 정의
테스트
• 루프 테스트 : 프로그램의 루프 구조에 국한해서 실시
정보 획득
대상
프로그램 외부 명세를 보면서 테스트 ( 기능 테스트 )
블랙 박스
• 동등 분할 / 경계값 분석 /Cause - Effect 그래프 / 오류예측기법 등
테스트
• Data driven Test
프로그램 실행을 요구하는 테스트
동적 테스트
• 화이트박스 , 블랙박스
프로그램
프로그램 실행 없이 구조를 분석하여 논리성 검증
실행여부
• 코드검사 : 오류 유형 체크리스트 및 역할에 의한 formal 한 검사
정적 테스트
방법 (Fagan)
• 워크스루 : 역할 / 체크리스트가 없는 비공식적 검사방법
과정을 테스트 (Are we building the product right?)
검증
(Verification)
• 올바른 제품을 생산하고 있는 지 검증
테스트에
대한시각
확인 결과를 테스트 (Are we building the right product?)
(Validation) • 만들어진 제품이 제대로 동작하는 지 확인
164

---

## Page 165

구분 유형 특징
단위테스트 모듈의 독립성 평가 , White Box 테스트
통합테스트 모듈간 인터페이스 테스트 ( 결함테스트 )
테스트
시스템테스트 전체 시스템의 기능수행 테스트 ( 회복 , 안전 , 강도 , 성능 , 구조 )
단계
인수테스트 사용자 요구사항 만족도 평가 ( 확인 , 알파 , 베타 )
설치테스트 사용자 환경에서 수행하는 설치에 관한 테스트
회복테스트 (Recovery) 고의적 실패 유도
안전테스트 (Security) 불법적인 소프트웨어 검출 및 제거 , 취약점 · 악성코드 진단
강도테스트 (Stress) 과다 정보량 부과
테스트
성능테스트 (Performance) 응답시간 , 처리량 , 속도
목적
구조테스트 (Structure) 내부논리 경로 , 복잡도 평가
회귀테스트 변경 또는 교정이 새로운 오류를 발생시키지 않음을 확인
병행테스트 변경시스템과 기존시스템에 동일한 데이터로 결과 비교
165

---

## Page 166

구분 유형 특징
Record and Replay 이벤트 기반 테스팅
테스트를 수행 한 결과가 참인지 거짓인지를 판단하기 위하여 미리
테스트 오라클
정의된 참 값을 대입하여 비교하는 기법 및 활동
비즈니스 , 기술상의 위험을 정량적으로 측정하여 우순 순위가 높은
리스크 기반 테스트 부분에 주어진 테스팅 자원을 집중 , 전체적인 영향을 줄이기 위한 테
스트 전략
- 필요한 각 값들이 다른 파라미터 값과 최소한 한번씩은 조합을 이
Pairwise Testing
루는 테스트 케이스 사용
준거성 테스트 Compliance Test
테스트
기법
실증성 테스트 Substantive Test
( 유형 )
탐색적 테스트 , 오류 추정 (Error Guessing), 체크리스트 기반
경험기반 테스트 기법
테스트 , 분류 트리 기법 (Classification Tree Method)
탐색적 테스트 - Exploratory testing, Heuristic 기반
- Specification-based or Black-box Techniques(Test)
- 테스트 케이스를 모델로부터 체계적으로 도출 , 문서기반
명세기반 테스트
- 동등클래스 분할 (Equivalence Class Partitioning), 경계값 분석
(Boundary Value Analysis), 의사결정 (Decision table testing),
State transition testing, Use case testing
- SW 코드나 설계 등 구조를 보여주는 정보로부터 테스트 케이스
구조기반 테스트
도출 ( Structure - Based) = White Box Test
166

---

## Page 167

구분 유형 특징
정상 동작 프로그램에 의도적으로 원시 부호 (source code) 을 변형
( 뮤던트 , Mutant 삽입 ) 을 하여 , 동일한 입력 값으로 다른 결과를 출
뮤테이션 테스트
력시키는 Test Case 를 선정하여 테스트 케이스의 적합성판단 및
테스트
신뢰성을 부여하는 기법 (Mutation Test)
기법
새로운 결함의 발생에 대비하여 이미 실시 하였던 테스트
회귀 시험
( 유형 )
(Regression Test)
사례들의 일부 혹은 전체 서비스를 다시 실시하는 기법
빅뱅 테스트 모듈간의 상호 인터페이스를 고려하지 않고 한꺼번에 결합시켜
(Big-Bang Test) 테스트 하는 방법
167

---

## Page 168

IV. 테스트 방법에 따른 기법 분류
기법 유형 설명 키워드
타겟 시스템에서 발생하는 사용자 입력 및 외부 이벤트를 녹
( 이벤트 기반 테스팅 ) 타켓시스템 : 임
화해서 테스트 스크립트로 구성하고 , 이 스크립트를
Record and Replay 베드디 SW
재수행해서 결과를 확인하는 방법
테스트를 수행 한 결과가 참인지 거짓인지를 판단하기 위하여
미리 정의된 참 값을 대입하여 비교하는 기법 및 활동
[ 유형 ]
1) 참 오라클 (True Oracle): - 모든 입력 값들에 대해 원하는
결과들을 생성하여 발생 된 오류를 놓치지 않고 검출 할 수 있 참오라클 ,
는 오라클 샘플링 오라클 ,
테스트 오라클
휴리스틱 오라
2) 샘플링 오라클 (Sampling Oracle): 샘플 결과를 제공해주 클
는 오라클
3) 휴리스틱 오라클 (Heuristic Oracle)
- 샘플링 오라클의 단점을 개선하기 위해 특정 몇몇 입력 값들
에 대해서는 샘플링
168

---

## Page 169

IV. 테스트 방법에 따른 기법 분류
기법 유형 설명 키워드
비즈니스 , 기술상의 위험을 정량적으로 측정하여 우순 순위가
발생가능성 ,
리스크 기반 테스트 높은 부분에 주어진 테스팅 자원을 집중 , 전체적인 영향을 줄
영향
이기 위한 테스트 전략
169

---

## Page 170

IV. 테스트 방법에 따른 기법 분류
기법 유형 설명 키워드
- 대부분의 결함이 2 개 요소의 상호작용 (Interactions of two
파라미터별
factors) 에 따라 발생됨
Pairwise Testing 최소 한번 조합
- 필요한 각 값들이 다른 파라미터 값과 최소한 한번씩은 조합
TC 사용
을 이루는 테스트 케이스 사용
재 생 볼 륨 Equalizer
Play 크게 On
Play 크게 Off
Play 작게 On
Play 작게 Off
Stop 크게 On
Stop 크게 Off
Stop 작게 On
Stop 작게 Off
170

---

## Page 171

IV. 테스트 방법에 따른 기법 분류
기법 유형 설명 키워드
Compliance Test; 내부 통제가 문서화 자료에 명시된 바대로
준거성 테스트
경영자의 의도대로 이행되고 있는가를 판단하기 위한 감사 테 위험 평가
(Compliance Test)
스트
Substantive Test; 활동 또는 거래들의 완전성 , 정확성 , 또는
실증성 테스트
그 존재성에 대한 감사 증거를 수집하기 위해 설계되는 세부 정보 보호 감사
(Substantive Test)
활동 및 거래 에 대한 테스트 또는 분석적 조사 테스트
구 분 내 용
과정심사로써 프로세스 심사 측정 ( CMMi ,
준거성 프로세스 준수 SPICE, ITIL)
성숙도 , 질의 및 면담
증거 수집 V&V, 동시 감사 , 면담 , 설문 기법 , 성능 감사
실증성
증거 평가 자산 보호 및 자료의 무결성 평가 기법
감리 위험 → 과정심사 ( 준거성 시험 ) : 질의 및 면담 → 제품 심사 ( 실증 시험 ) : 분석적
절 차
절차 + 상세 테스트
171

---

## Page 172

V. 경험기반 테스트 기법 ( 경탐오체분 )
- 테스터의 경험 , 지식과 직관에 기반하여 테스트 케이스를 도출하고 , 테스트를 실행하는 기법
기법 유형 설명 키워드
Exploratory Test
테스트 목표와 테스트 차터 (Test Charter) 를 기반으로 정해진 Formal 기법
탐색적 테스트
시간 내에 테스트 설계 , 수행 , 기록과 학습을 병행하는 테스트 보충
기법
- 기능 체크
- 가능한 결함을 목록화하고 이를 발견하기 위한 케이스 작성
리스트
오류 추정
- 가능한 결함은 상식 , 기존 경험과 기존 데이터를 통해 도출
(Error Guessing)
- 시스템 요소
가능
체크리스트
- 문서 기반의 테스트 케이스를 작성 시에도 체크리스트의 - 일반적 경험
체크리스트 기반
테스트
경험과 노하우를 반영하는 노력 필요 - 노하우 경험
- 소프트웨어 일부 또는 전체를 트리 구조로 분석 및 표현하고 ,
분류 트리 기법
복잡도가 높은
(Classification
그곳에서 테스트 케이스를 도출하는 기법
SW 에 적합
Tree Method)
- 트리 구조로 시각화하여 테스트 케이스 설계
172

---

## Page 173

VII. 소프트웨어 테스트의 유형
가 . 테스트 단계에 의한 분류 ( V - Diagram )
단계 테스트 방법
• 구현 단계에서 프로그램 개발자에 의해 수행
단위 테스트
• 개별 모듈 테스트를 위해 모듈의 단독 실행 환경 필요
• 모듈을 결합하여 하나의 시스템으로 구성 시 테스트 수행★ ( 아래가 모두 통합
주의 !)
• 빅뱅 통합 : 한꺼번에 테스트하므로 오류 발생 시 원인규명 어려움
통합 테스트
• 하향식 통합 : 상위 모듈 테스트 시 다수의 하위 스텁 (stub) 필요
• 상향식 통합 : 하위 모듈 호출하는 테스트 드라이버 (Driver) 필요
• 상 , 하향식 통합을 결합한 샌드위치 통합방식 사용 권장
• 통합 모듈에 대한 시스템적 ( 비기능적 ) 테스트
시스템
• 신뢰성 , 견고성 , 성능 , 안전성 등의 비기능적
테스트
요구사항도 테스트
• 사용자의 만족여부를 테스트하는 품질 테스트
• 알파테스트 : 개발자 환경에서 사용자가 수행
인수 테스트
• 베타테스트 : 일정 수의 사용자가 테스트 후 피드백
• 감마테스트 : 베타 버젼 배포 이후 다수의 사용자 대상 테스트
• 시스템을 설치하면서 수행 , H/W 체계 , S/W 연결성 등 테스트
설치 테스트
173

---

## Page 174

나 . 테스트 시각에 의한 분류 (V&V 모델 )
- 검증 (Verification)
1) 개 발자 혹은 시험자의 시각 으로 소프트웨어가 명세화된 기능을 올바로 수행하는지 알아보는
과정 (Build the product right)
2) SDLC 에서 어느 단계의 산출물이 , 이전 단계에서 설정된 개발규격과 요구들을 충족 시키는지
여부를 판단하기 위한 활동
- 확인 (Validation)
1) 사용자 시각 으로 올바른 소프트웨어가 개발되었는지를 입증하는 과정 (Build the right product)
2) 어느 단계의 개발제품이 최초의 사용자 요구 또는 소프트웨어 요구에 적합한지를 입증하기
위한 활동
구분 검증 (Verification) 확인 (Validation)
사용자 시각으로 올바른 소프트웨어가 개발
개발자 혹은 시험자의 시각으로 소프트웨어가 명
되었는지를 입증하는 과정
정의 세화된 기능을 올바로 수행하는지 알아보는 과정
(Build the product right ) (Build the right product)
활동
제품 생산과정 생산된 제품 대상
대상
목적 제품을 올바르게 생산하고 있는지 검증 생산된 제품이 올바른지 확인
활동
시작과 종료단계
각 단계
기간
성취도 요구사항 명확 사용자요구사항 등 불명확한 사항 다수
174

---

## Page 175

나 . 테스트 시각에 의한 분류
- 검증 (Verification) & 확인 (Validation)
V&V 모델에서의 테스팅 레벨
175

---

## Page 176

[ 참고 ] 다중 V - 모델의 테스트 활동
- 다중 V - 모델은 임베디드 시스템을 개발할 때 요구되는 수명주기를 3 가지의 연속적인 V - 형태 , 즉 모델 ,
프로토타입 , 최종 제품으로 구분하여 제시
- 3 가지 개발주기의 목표 산출물인 모델 , 프로토타입 , 최종제품에 대한 검증을 각 개발주기 별로 완전한
V - 모델과 동일하게 수행
176

---

## Page 177

다 . 테스트 방법에 의한 분류
구분 White Box 테스트 Black Box 테스트
- 프로그램 내부 로직을 참조하면서 - PGM 외부명세 ( 기능 , I/F) 로부터 직접 테스트
개념
모든 경로를 테스트 (Data, I/O 위주 테스트 )
- 구조 테스트 - 기능 테스트
특징 - Logic-Driven 테스트 - Data-Driven 테스트
- 모듈 테스트 - I/O-Driven 테스트
- 동등분할 기법
테스트 - 제어 구조 시험 - 경계값 분석 기법
기법 - 루프 시험 - 원인 , 결과 그래프 기법
- 오류 예측 기법
177

---

## Page 178

1) Black Box 테스트 기법 ( 기능 )
블랙박스테스트 = 명세기반테스트
동치분해의 원칙 ( equivalence partitioning)
블동경의상
1) 범위보다 작은 값 , 범위 내의 값 , 범위를 넘어서는 큰 값
2) 정상 입력에 속하는 값 , 그 외의 값
( 불교 , 동경에 의상대사
- 동등 ( 클래스 ) 분할 ( Equivalence Class Partitioning),
가셨다 )
경계값 분석 ( Boundary Value Analysis), 의사결정 ( Decision table testing),
상태전이 ( State transition testing), 유스케이스 ( Usecase testing)
(1) 동등분할 기법 (Equivalence Class Partitioning)
- 프로그램의 입력 도메인을 테스트 케이스가 산출될 수 있는 데이터의 클래스로 분류하는 방법
- 다양한 입력조건들을 갖춘 시험사례의 유형들을 분할 : 상식적 경험에 의존 (Heuristic)
- 각 시험사례 유형마다 최소의 시험사례 작성
- 예 ) 입력데이터가 값의 범위를 나타낼 때 : x 값이 0 ~ 100 사이여야 한다면
시험사례를 (x< 0 ), ( 0 < x > 100 ), (x> 100 ) 으로 분할하여 유형을 적용
( 2 ) 경계값 분석 기법 (Boundary - Value Analysis)
- 입력 조건의 중간값에서 보다 경계값에서 에러가 발생될 확률이 높다는
점을 이용하여 이를 실행하는 테스트 케이스를 만드는 방법
- 경계치에 치중하며 출력유형도 고려하는 특성
- 예 ) x 값이 0 ∼ 100 사이여야 한다면 시험사례를 (x= 0 ), (x= 100 ),
(x=-0.01), (x=100.1) 을 시험 사례 유형으로 정의
178

---

## Page 179

(3) 의사결정 테이블 테스팅 (Decision table testing) 혹은 결정 테이블 테스팅 ,
- 논리적인 조건이나 상황에서 입력조건과 결과를 참 (True), 거짓 (False) 으로 표현하여 조합을 만들고
이 조합에 의한 테스트케이스를 작성하는 방법
- 위 그런 표를 결정테이블 이라고 부름
(4) 상태전이 테스팅 (State transition testing)
- 시스템에 반영되는 이전의 상태가 무엇인지 , 상태간의 전이 , 상태를 변화시키는 이벤트와 입력값
파악하기 위한 테스팅
(5) 유스케이스 테스팅 (Usecase testing)
- 유즈케이스나 비즈니스 시나리오 기반으로 테스트를 명세화 하여 테스팅
(6) 오류예측 기법 (Error Guessing)
- 각 시험기법들이 놓치기 쉬운 오류들을 감각 및 경험으로 찾아보는 것
- 예 ) 입력값 없이 Return 친다 . 문법에 어긋난 입력을 시험한다 등
(7) 원인 - 결과 그래프 기법 (Cause - Effect Graphing)
- 동등분할과 경계값 분석기법의 단점은 입력환경의 복잡성을 완전하게 고려할 수 없다는 것
- 입력데이터 간의 관계가 출력에 영향을 미치는 상황을 체계적으로 분석하여 효용성 높은 시험사례를
발견하고자 원인 - 결과 그래프 기법이 제안
179

---

## Page 180

1) Black Box 테스트 기법 ( 기능 )
( 1 ) 동등분할 기법 (Equivalence Partitioning)
- 프로그램의 입력 도메인을 테스트 케이스가 산출될 수 있는 데이터의 클래스로 분류하는 방법
- 다양한 입력조건들을 갖춘 시험사례의 유형들을 분할 : 상식적 경험에 의존 (Heuristic)
- 각 시험사례 유형마다 최소의 시험사례 작성
- 예 ) 입력데이터가 값의 범위를 나타낼 때 : x 값이 0 ~ 100 사이여야 한다면
시험사례를 (x< 0 ), ( 0 x 100 ), (x> 100 ) 으로 분할하여 유형을 적용
( 2 ) 경계값 분석 기법 (Boundary - Value Analysis)
- 입력 조건의 중간값에서 보다 경계값에서 에러가 발생될 확률이 높다는
점을 이용하여 이를 실행하는 테스트 케이스를 만드는 방법
- 경계치에 치중하며 출력유형도 고려하는 특성
- 예 ) x 값이 0 ∼ 100 사이여야 한다면 시험사례를 (x= 0 ), (x= 100 ),
(x= - 0 . 01 ), (x= 100 . 1 ) 을 시험 사례 유형으로 정의
( 3 ) 오류예측 기법 (Error Guessing)
- 각 시험기법들이 놓치기 쉬운 오류들을 감각 및 경험으로 찾아보는 것
- 예 ) 입력값 없이 Return 친다 . 문법에 어긋난 입력을 시험한다 등
180

---

## Page 181

2) White Box 테스트 기법 (= 구조기반 테스트라고도 함 ), 구문 커버리지 , 결정커버리지
(1) 제어구조 시험 (Control Structure Testing)
- MaCabe 에 의해 제안된 대표적 화이트박스 시험기법
- 프로그램의 논리적 복잡도를 측정한 후 이 척도에 따라 수행시킬 기본 경로들의 집합을 정의함
- 프로그램의 처리 흐름을 제어하는 방법이나 그러한 수행 제어를 위해 사용되는 문장의 구조 .
구조적 프로그램 작성에는 순차형 ( 순차 구조 , SEQUENCE 형 ), 선택형 ( 분기 구조 , IF THEN ELSE 형 ),
반복형 ( 반복 구조 , DO WHILE 형 ) 의 3 가지가 있다 . 이 3 가지 제어 구조를 조합함에
따라 프로그램의 모든 논리가 기술된다 . 이것을 테스팅
(2) 루프시험 (Loop Testing)
- 프로그램의 루프구조에 국한해서 실시하는 기법으로 , 루프를 계속 수행할 것인지 아니면
끝낼 것인지를 결정하기 위하여 수행하는 검사 .
- 루프 기능이 언제 끝날지를 결정하는 루프 내의 명령문 .
- 루프의 유형 : 단순 루프 , 중첩 루프 , 연결 루프 , 비구조적 루프
( 암기법 ) 화제루
181

---

## Page 182

탐색적 테스팅
Tips
1. 탐색적 테스트에 대해 다음 내용을 설명하시오 .
가 . 탐색적 테스팅의 정의
나 . 테스트케이스 기반 테스팅과 탐색적 테스팅 비교
다 . 탐색적 테스팅과 경험적 테스팅 비교
라 . 탐색적 테스팅 계획 수립 시 고려사항
2. 탐색적 테스팅에서의 테스트 차터 (Test Charter) 에 대해 설명하시오 .
경험기반 기법 탐색적 테스팅 오류추정 체크리스트 분류트리 경탐오체분
, , ,
182

---

## Page 183

I. 경험기반 Agile Testing 기법 , 탐색적 테스팅의 개요
가 . 탐색적 테스팅 ( Exploratory testing ) 의 정의
- 제품 정보 습득과 테스트 설계 그리고 테스트 실행을 동시에 수행하는 경험 기반의 테스트 접근법
- 테스트 목표를 포함하는 테스트 차터 (charter) 를 기반으로 정해진 시간 내 (Time Boxing) 에 테스트 설계 ,
실행 , 기록과 학습을 하는 테스팅 접근법
- 테스트 대상 ( 시스템 , SW) 를 탐색하면서 테스트 설계와 실행을 동시에 반복적으로 진행
나 . 탐색적 테스팅의 특징
- 결함 집중의 원리 활용
- Heuristic 기반 : 프로세스 또는 테스트 도구보다는 사람 ( 지적 능력 , 몰입 ) 중심
- 문서 최소화
- Time-Boxing ( 정해진 시간에 몰입 )
- Debriefing – 회고를 통해 테스트 경험과 스킬을 공유
- Charter( 테스트 목표 ) 달성
183

---

## Page 184

다 . 탐색적 테스팅의 구성요소
구성요소 설명 사례 및 Key Point
테스트 명령지 ( 명확한 테스트 임무 ) 예 ) Charter1. 그림 삽입 기능 테스트
테스트 차터
(Test Charter)
( 테스트 미션 , 대상 , 목적 , 범위 등을 명시 ) 승인 검토
테스트에 몰입할 테스트 수행시간 지정
세션당 시간 지정
시간 제한
예 ) 60 분 , 90 분 , 120 분
(Time Boxing)
몰입여건을 조성해 줌
( 방해하기 없기 )
- 테스트 결과지 ( 아이디어 , 결과 ,
테스트 참여자간의 경험적 지식을 최
세션 시트
결함 기록 )
(Session Sheet)
대한 공유 가능하도록 진행해야 함
- 검토 가능한 결과물 (Reviewable result)
- 요약 보고
회고 / 공유가 가능하도록 최소한의 문
요약보고
- 테스트 수행이력과 경험을 주기적으로
(Debriefing)
서를 남겨야 함
공유
- 페어와이즈 조합 , 동등분할 , 경계값 분석 알려진 대부분의 테스트 설계기법을
테스팅 기법
- 결정 테이블 , 상태전이 , 유즈케이스 활용할 수 있으나 최소한의 기법만 사
- 커버리지 관련 테스팅 등 용할 것을 권장함
184

---

## Page 185

II. 탐색적 테스팅과 타 테스팅과의 비교
가 . 테스팅의 목적에 따른 상호보완 활용 , 테스트케이스 기반 테스팅과 탐색적 테스팅의 비교
구분 테스트케이스 기반 테스팅 탐색적 테스팅
특정한 프로그램 경로를 실행해 보거나
특정한 요구사항을 준수하는지 검증하
테스터가 경험에 기반하여 ( 휴리스틱 ; He
정의 기 위하여 입력값 , 예상결과 , 실행조건의
uristic ) 테스팅 접근 기법 . 직관 이용
집합을 명세화한 문서 기반의 공식적 테
스트 기법
개념도
- 문서화 기반의 공식적인 수행으로 테
스트의 체계적인 “ 설계 ” 향상에 집중 - 문서화에 소요되는 시간을 최소화
- 테스트케이스의 재사용 및 공유 하여 테스트를 “ 실행 ” 하는 것에 집중
테스트 계획서 , 테스트케이스 , 테스트 테스트 차터 , 타임 박싱 , 테스트 노트 ,
구성요소
시나리오 , 테스트결과서 요약 보고
- 테스트가 먼저 설계 되고 기록 - 테스트가 설계됨과 동시에 수행
테스트 설계와
- 다른 테스터가 수행 가능 - 테스트가 반드시 기록되어야 하는
수행
- 테스트 케이스 기반으로 수행 것은 아님
- 문서화 기반의 공식적 수행 - 대부분 비공식적 수행
사용 목적
- 테스트 설계 향상 - 테스트 실행 관리
185

---

## Page 186

II. 탐색적 테스팅과 타 테스팅과의 비교
가 . 테스팅의 목적에 따른 상호보완 활용 , 테스트케이스 기반 테스팅과 탐색적 테스팅의 비교
구분 테스트케이스 기반 테스팅 탐색적 테스팅
테스트케이스 - 테스트 실행 시작 전 테스트 케이스 - 프로젝트 기간 내내 테스트
작성 작성 계획 / 설계와 실행 반복
- 테스트 문서 작성 , 검토 필요성 최소화
테스트 시간 - 테스트 문서 작성 , 검토에 많은 시간
- 테스트에 상대적으로 많은 노력 투자
투자 소비
가능
테스터 간의 - 테스터 간의 ( 특성 , 능력 ) 차이를 - 테스터 간의 ( 특성 , 능력 ) 차이를 십분
차이 제거하려는 노력 활용하려는 노력
테스트
- 테스터가 아닐 수 있는 테스트 - 테스트 설계자일수 있는 테스터가
설계자와
설계자가 설계 테스트를 설계
테스터의 관계
테스팅 방법 - 완벽하게 한번에 테스팅 - 점진적이고 주기적 테스팅
- 테스트 케이스 기반의 테스팅은 테스
팅의 공식화와 완전한 테스트 설계를 위
해 문서화 비중이 큼
문서화 정도와
지적 능력 활용
- 탐색적 테스팅은 문서화를 줄이고
정도
테스터의 경험기반의 발견적 테스트
기법으로 테스터의 지적 능력에 따라
결함 발견률의 차이가 큼
186

---

## Page 187

나 . 탐색적 테스팅과 경험적 테스팅의 비교 .
구 분 탐색적 테스팅 경험적 테스팅
테스트 차터 , 테스트 노트 등 정형화된
문서화 형태 체크리스트 또는 없음
프레임 존재
세션 단위로 실행
시간 제한 결함 발견 혹은 업무 시간
단기 : 60 분 , 보통 : 90 분 , 장기 : 120 분
몰입 수준 정해진 시간에 몰입 상황에 따라 다름
지적 능력 최대한 반영하도록 유도함 테스트가 반영할 것으로 가정함
회고 및 스킬 공유 회고를 반드시 실시함 상황에 따라 다름
계획  실행과 설계  결과보고
프로세스 정해진 프로세스 없음
시간을 절약하기 위해 테스트 자동화
도구 활용 상황에 따라 다름
도구 사용 권장 ( 예 , pairwise 활용 )
전략적 접근 리스크 기반 테스팅과 잘 어울림 상황에 따라 다름
187

---

## Page 188

III. 탐색적 테스팅 프로세스 및 계획 수립 시 고려사항
가 . 탐색적 테스팅 프로세스
프로세스 활동 산출물
- 리스크 분석 및 전략 수립
리스크 분석서 및 테
계획
스트 전략
- 테스트 계획 수립
(Plan)
테스트 계획서
- 차터 작성 및 구성
- 할당 받은 차터 테스트 수행
테스트노트
- 제품 탐석과 제품 정보 습득
이슈결과
설계 & 실행
- 테스트 아이디어 구상 및 테스트 설계 ( 기법 활용 )
(Design & Execution)
결과보고서
- 테스트 노트 및 발견 결함 내용 상세 작성
회고회의록
- 라운드 회고 및 각 수행 차터 결과보고서 작성
- 테스트 회고
종료
테스트 종료 보고서
(Closure)
- 테스트 종료 보고서 작성
188

---

## Page 189

III. 탐색적 테스팅 프로세스 및 계획 수립 시 고려사항
나 . 탐색적 테스팅 계획 수립 시 고려사항
- 탐색적 테스팅은 주로 시간과 인원 , 제품 정보가 부족한 상황에서 진행하므로 주어진 기준 및 상황과
제약조건을 잘 살펴야 함
고려사항 설명
가용한 리소스 인원 , 시간 , 테스트에 필요한 장비 등 가용한 리소스 파악
세션 진행 방식 60 분 ( 진행 )/10 분 ( 회고 ), 90 분 ( 진행 )/20 분 ( 회고 ) 등 세션 진행 방식을 정의
차터 작성 주체 테스터 , 매니저 등 차터 작성 주체 정의
차터 수행 횟수 시스템 기능의 리스크 수준에 따라 선정 ( 예 , 리스크 높음 – 5 회 등 )
차터 - 테스터 배정 기준 리스크가 높은 차터는 경력자 중심 배정 등 차터를 테스트에게 배정
회고 형식 회고 진행
결함관리 절차 및 방법 결함 관리 도구 사용 , 문서 기록 후 공유 등 정의
189

---

## Page 190

명세기반 테스트 ( Specification - base d or Black - box Techniques)
I. 명세기반 테스트의 개념
가 . 명세기반 테스트의 정의
- 주어진 명세 ( 일반적으로 개발 설계 모델 형태 ) 를 바탕으로 테스트 케이스를 도출 , 테스트 케이스를
실행해 중대한 결함을 찾아는 기법
- 테스트 케이스를 프로그램의 요구사항 명세서를 기반으로 테스트 케이스를 선정하여 테스트 하는 기법
나 . 명세기반 테스트의 특징
- 다소 제한적인 커버리지를 활용 , 모델을 사용한 결함의 발견
- 기능 위주의 테스트 , 데이터 기반 , I/O 기반 테스트
- 요구사항 분석서 , 설계 ( 기준 ) 서 등의 명세는 구현하고자 하는 소프트웨어를 최대한 이해하기 쉽게 표현
하여야 하며 , 표현 방식은 UML 을 많이 사용함
Specification -based or Black-box Techniques
테스트 케이스를 모델로부터 체계적으로 도출 문서기반
- ,
블동경의상
- 동등클래스 분할 ( Equivalence Class Partitioning), 경계값
불교 동경에 의상
( ,
명세기반 테스팅 기법 분석
( Boundary Value Analysis),
대사
의사결정
( Decision table testing),
가셨다 )
상태전이
( State transition testing),
유스케이스
( Usecase testing)
190

---

## Page 191

II. 명세기반 테스트의 유형
유형 설명 특징
 결과가 동일한 입력값들을 하나의 그룹으로 간주 , 입 / 출력
값 영역을 유한개의 등가집합으로 구성
동등분할  상호독립적 등가집합
 집합의 원소 중 대표값을 선택하여 테스트 케이스 선정
 상태의 전이 , 상태를 변화시키는 입력과 이벤트의 모든
 전이트리 구성
조합을 포함하는 전이테이블을 정의 후 테스트케이스를 설계
상태전이
 임베디드 시스템
 모델상의 결함 , 누락을 효과적 발견
 동등분할의 경계 입력 값에서 결함발견의 확률이 높음  모든 테스트 레벨
경계값 분석
 유효 , 비유효경계 값 고려 테스트 케이스 설계  경험적 , 결함 발견 높음
191

---

## Page 192

II. 명세기반 테스트의 유형
 논리적 조건이나 상황의 요구사항 검증에 유용
 명세를 분석하고 시스템의 의존적인 조건과 동작을 식별
 입력 조건에 대해 참과 거짓의 조합으로 표현
( 의사 ) 결정  조건과 상황기반
테이블  비즈니스 규칙의 명세화
 흐름을 트리구조로 표현하여 테스트 케이스 설계  입력변수들간의 조합
분류트리
 경험기반 경계값 분석 등을 활용 조합 기반의 케이스 도출  트리구조의 시각화
 대부분 결함은 2 개 이상의 상호 작용에 의한 것에 중점
 상호작용 요소 식별
Pairwise 조합  상대적으로 작은 양의 테스트 셋 구성 가능
 경험적 의미 조합
 입력값은 다른 파라미터와 최소 한번씩은 조합을 이룸
 유스케이스나 비즈니스 시나리오를 기반으로 명세화
 기본흐름과 대체흐름
유스케이스  액터와 시스템 또는 액터의 상호작용을 표현
 프로세스 흐름
 유스케이스 수행 위한 전제조건과 완료 후속조건
192

---

## Page 193

Test Charter
I. 탐색적 테스팅에서의 테스트 차터 개요
가 . 테스트 차터 (Test Charter) 의 개념
- 탐색적 테스팅에서 테스트의 범위와 목적 , 테스트 방법 등을 정의하기 위한 테스팅 참조 문서
- 6O~120 분 세션동안 몰입해서 테스트를 수행할 정도의 테스트 목적을 정의한 문서
나 . 테스트 차터 (Test Charter) 목적
목적 설명
테스트 매니저가 테스트 엔지니어에게 세션에 대한 임무 설정 및 Test Insight
Test Insight 제공
제공
테스트 체계화 기존에 경험적이고 직관적으로만 진행하던 경험적 테스팅에 체계성 부여
위험 우선순위가 높은 테스트 영역에 테스트 차터 집중 배치를 통한 테스트
리스크 기반 접근
자원 제약적인 환경에서 선택과 집중의 원리 구현
Lessons Learned 테스트 관련 의사소통 , 정보 공유 및 Lessons Learned 로 활용
193

---

## Page 194

II. 테스트 차터 (Test Charter) 의 구성요소 및 설계 방안
가 . 테스트 차터 (Test Charter) 의 구성요소
구성요소 상세 설명
테스트 범위 / 목적 - 테스트 수행 범위와 목적을 통하여 테스트 미션 명확화
- 테스트 기간 중 계 획된 세션수로 일일 8 시간 근무 및 세션당 90 분
테스트 세션 / 일정
기준으로 하루 4 개 세션 정도 가능 (Time Boxing)
테스트 대상 / 절차 - 테스트 대상 기능 영역 및 해당 영역에 대한 테스트 절차와 방법 제시
테스트 결함 / 이슈 - 테스트 수행중 발견 된 결함과 이슈에 대한 개발팀 리뷰 내용 기록
테스트 경험 - 테스트 과정에서 획득한 경험과 아이디어를 기록
194

---

## Page 195

나 . 테스트 차터 (Test Charter) 의 설계 방안
가 . 위험식별 및 분석 수행을 통한 위험 우선 순위화하여 고위험 테스트 영역을 대상으로 차터 설계를
집중함으로써 리스크 기반 접근법을 활용 .
나 . 공식적인 설계기법도 적용 가능하지만 , 대부분 경험에 의존한 비공식적인 설계 기법 사용
다 . 유사한 상황을 고려하여 기존 차터의 재활용을 통한 경험적 요소 활용 극대화
라 . 탐색적 테스팅의 효용성을 극대화 하기 위하여 테스트 엔지니어 관점에서의 설계 필요
- 위험 우선순위가 높은 테스트 영역에 테스트 차터를 집중하여 설계함
195

---

## Page 196

III. 효과적인 탐색적 테스팅을 위한 테스트 차터의 설계 시 고려사항
가 . 명확한 차터 설계 : 테스트 매니저는 테스트 엔지니어의 몰입 테스트가 가능하도록 명확하고 구체적인
미션을 부여하는 테스트 차터의 설계가 필요함
나 . 유연한 차터 설계 : 테스트 수행 도중 발견된 창조적 아이디어를 테스트에 활용 가능하도록 테스트
차터를 유연하게 설계하여야 함 .
196

---

## Page 197

성능테스트
정보시스템 성능을 위한 지표 정리
성능지표 설명 단위 목표
응답 시간 작업 처리를 요청한 시간으로부터 이를
시스템이 처리하여 결과를 보여줄 때까 초 낮춤
(Response Time)
지 소요된 시간
시간당 처리량 TPS,
시스템이 성공적으로 처리한 단위 시간
높임
당 요청 ( 트랜잭션 ) 처리 건수
(Throughput) OPS
자원 사용량
자원 (CPU, 메모리 등 ) 들의 용량 중 실제
% 높임
사용하고 있는 값의 비율
(Utilization)
효율성 %,
시간당 처리량을 자원사용량 또는 비용
높임
으로 나눈 값
(Efficiency) tpmC
TPS (Transactions per Second: 초당 트랜잭션 처리건수 )
OPS (Operations per Second: 초당 요청 처리건수 )
tpmC (Transactions per Minute per Cost: 단위 비용당 분당 처리건수 )
197

---

## Page 198

Tips
1. 소프트웨어 성능테스트의 성능지표와 Little's Law( 리틀의 법칙 ) 에 대해 설명하시오 . ( 존 리들 이름 )
Little's Law; 리틀의 법칙
http://cafe.naver.com/81th/7137
WIP( 공정 내 작업 수 )
ACR( 평균완료시간 , Average Completion Rate)
-> 2 개 알면 나머지 구할 수 있음
-> ACR 을 유지하면서 , WIP 줄이면 , 리드타임 줄임
AU(Active User)
MRT( 평균응답시간 (Mean Response Time) )
198

---

## Page 199

I. 시스템의 문제점 검증 및 개선을 위한 성능 테스트의 개요
가 . 성능테스트의 정의
- 사용자가 시스템을 사용하기에 성능상에 문제가 있는지를 검증 하여 개선하기 위한 테스트
나 . Little’s Law 를 통한 성능테스트의 목적
- 수학적 이론에 근거한 테스트 수행 : TPS = AU/ MRT 라는 수학적 모델 근거
- 시스템 성능 및 용량 관리 : 성능의 임계치 및 허용가능한 수준의 용량 파악
- 장애 예방 : 과부하 예상 시스템에 대한 테스트를 통한 사전 장애 예방
- Little’s Law : 어떤 시스템의 처리 용량 ( 원하는 용량 ) 을 알고자 할 때 계산하는 수학적 법칙
※ DB 성능개선방안 : M, H , S
- TPS(Transaction Per Second) : 초당 트랜잭션 횟수 . 즉 , 초당 몇 개의 트랜잭션을 처리할 수 있는가 는
나타냄 .
- 시스템의 성능 (TPS) 는 트랜잭션을 발생시키는 사용자 (Active User) 를 평균응답시간
(Mean Response Time) 으로 나눈 값이다 .
AU(Active User)
TPS(Transaction Per Second) =
MRT( 평균응답시간 (Mean Response Time )
199

---

## Page 200

II. 소프트웨어 성능테스트의 성능지표
가 . SW 성능테스트의 성능지표
성능지표 설명
Named User ( 전체 사용자 ) 대상 소프트웨어를 사용하는 모든 사람
사
( 동시 사용자 ) 특정 시점에 대상 시스템에 접속하여 서비스를 사용하고 있는
용
Concurrent User
사용자
자
Active User 사용자가 해당 시점에 요청을 전달하고 대기중인 사용자
Response Time ( 응답시간 ) 사용자가 서버에 서비스를 요청한 후 응답을 받을 때까지 걸리는 시간
시
사용자가 서비스를 제공받은 뒤 다른 서비스를 요청할 때까지 대기 시간
간
Think Time
유 휴지 ( 休止 ) 시간
형
Throughput ( 처리량 ) 단위 시간당 대상 시스템에 의하여 처리되는 요청건수
나 . 성능지표간의 상관관계
자원
응답
사용량
시간
TPS TPS
이상적인 TPS 와 성능 지표간 상관관계 그래프 : 가장 이상적인 경우 : TPS 가 높아지는 경우 자원 사용량이
증가되고 , 일정한 수준의 응답시간을 가져야 됨
200

---

## Page 201

다 . 실제 측정 시 TPS 와 성능 지표간 상관관계 그래프
자원
응답
사용량
시간
임계점
TPS TPS
- 자원 사용량이 급격하게 증가하다가 일정수준 ( 임계점 :Saturation Point; 포화점 ) 에 도달하면 증가폭 감소
- 주요 원인 : 균등한 부하 발생 문제 , 네트워크 상태 , 시스템 내 BUS 크기 , caching 등
201

---

## Page 202

III . Little’s Law 를 적용한 성능 테스트 결과 분석 방법
MRT( 평균응답시간 )
응답속도
임계치
/ 처리수
TPS
( 초당처리수 )
테스트 시간
- 가상 사용자가 증가함에 따라서 응답시간이 느려지고 TPS 는 증가함
- TPS 가 더 이상 증가하지 않고 완만하게 되는 시점 이 그 시스템의 임계치임
- 운영 서버의 임계치 분석
- 튜닝 포인트 분석 : 서버 , DBMS, 미들웨어 , 네트워크 , Client PC 등의 튜닝 포인트 분석
- 향후의 성능 위험요소 분석 : 서버 증설 , 환경 설정 변경으로 인한 위험요소 분석
- 튜닝의 향상 효과 분석 : AS - IS 응답시간과 TO - BE 응답시간 분석
202

---

## Page 203

III . Little’s Law 를 적용한 성능 테스트 결과 분석 방법
MRT( 평균응답시간 )
응답속도
임계치
/ 처리수
TPS
( 초당처리수 )
테스트 시간
- 가상 사용자가 증가함에 따라서 응답시간이 느려지고 TPS 는 증가함
- TPS 가 더 이상 증가하지 않고 완만하게 되는 시점 이 그 시스템의 임계치임
- 운영 서버의 임계치 분석
- 튜닝 포인트 분석 : 서버 , DBMS, 미들웨어 , 네트워크 , Client PC 등의 튜닝 포인트 분석
- 향후의 성능 위험요소 분석 : 서버 증설 , 환경 설정 변경으로 인한 위험요소 분석
- 튜닝의 향상 효과 분석 : AS - IS 응답시간과 TO - BE 응답시간 분석
203

---

## Page 204

III. 성능테스트 유형
성능테스트유형 목적 수행 방식
평상 시 및 최대 (peak) 의 부하량
어플리케이션이 정의된 성능 목표를 만족하
에서 어플리케이션의 성능 지표
부하 (load) 테스트 는 지 확인하는 테스트
( 응답 시간 , 시간당 처리량 , 자원
- 준비물 : 성능목표 준비
사용량 등 ) 를 측정함
최대 (peak) 치를 초과하는 부하량
어플리케이션이 과부하 상황에서 정상적인 에서 동기화 , 자
과부하 (stress)
기능이 수행되는 지 확인 원 경합 및 메모리 누수 등과 관
테스트
- 부하 테스트 결과물 련된 문제가 발생
되는 지 평가함
과거의 성능 측정치를 기준으로
어플리케이션이 예상되는 사용자 또는 증가된 부하량에서 정의된 성능
용량 (capacity)
데이터 증가 시에 정의된 성능 목표를 만족하기 목표를 만족하기 위한 필요
테스트
위한 필요 시스템 용량을 확인 시스템 자원 산정 및
확장 전략을 수립함
204

---

## Page 205

테스트 자동화
I. 테스트의 신뢰성 및 품질 향상을 위한 테스트 자동화의 개요
가 . 테스트 자동화 (Test Automation) 의 정의
- 테스트 관리 , 소스코드 Review 및 Inspection, 테스트 설계 및 수행 등의 테스트 과정을 하드웨어적 ,
소프트웨어적으로 자동화할 수 있도록 지원하는 도구
나 . 테스트 자동화의 필요성
- 테스트 노력에 대한 효율성 , 정확성 개선
- 소프트웨어 검증을 위해 수 많은 소스코드 및 기능을 단시간 내에 테스트
II. 테스트 자동화 도구 도입 전략
205

---

## Page 206

III. 테스트 자동화 지원 도구 유형
지원 도구 유형 세부 유형 주요 역할 / 기능
테스트 관리 도구 테스트 관리 협업 환경 지원
테스트 관리 Incident 관리 도구 결함 할당 및 모니터링 지원
지원 도구 요구 사항 관리 도구 요구 사항 작성 및 추적성 모니터링 지원
형상 관리 도구 각종 테스트웨어의 버전 관리
테스트 설계
테스트 설계 도구 Test Case 설계 지원
지원 도구
정적 Testing 테스트 Matrix 정보 제공
정적 분석 도구
지원 도구 룰 기반 위반 사례 검출
단위 테스트 도구 단위 함수 기능 검증
테스트 실행 도구 반복 테스트 자동 수행
가상의 부하 (Load) 발생을 통한
성능 Testing 도구
성능 / 부하 / 스트레스 테스트 수행
동적 Testing
커버리지 측정 도구 코드 레벨 커버리지 측정 지원
지원 도구
동적 분석 도구 테스트 수행 시 런타임 결함 검출
시스템 특정 항목 ( 메모리 사용량 , 수행 경로 ,
모니터링 도구
동시 접속자 등 ) 모니터링 지원
206
보안 도구 보안 취약 결함 사항 검출

---

## Page 207

Back-to-back testing
Tips
문제 Back-to-back testing 에 대해 설명하시오 .
도메인 소프트웨어공학 난이도 ★ ★ ☆ ☆ ☆ ( 별 5 개 기준 )
출제의도 자동차 연관토픽의 강세관점에 비추어 ISO 26262 에서 사용하는 SW 테스트기법
두 개 이상의 다양한 컴포넌트나 시스템을 동일한 입력 값으로 실행하여 동일한 결과가
핵심 내용
나오는지를 확인하여 , 불일치 할 경우에 그 불일치를 서로 비교 분석하는 테스트기법
키워드
 높은 신뢰성 , 설계명세 기반
1. 높은 신뢰성 , 설계명세 기반의 Back - to - back testing 의 개념
목차예시 2. Back-to-back testing 의 상세설명
3. Back-to-back testing 의 적용사례
207

---

## Page 208

1. 높은 신뢰성 , 설계명세 기반의 Back - to - back testing 의 개념
가 . Back - to - back testing 의 정의
- 두 개 이상의 다양한 컴포넌트나 시스템을 동일한 입력 값으로 실행하여 동일한 결과가 나오는지를 확
인하여 , 불일치 할 경우에 그 불일치를 서로 비교 분석하는 테스트기법
나 . Back - to - back testing 의 특징
특징 설명 비고
신뢰성이 절대적으로 요구되는 분야에서 소프트웨어의 결함 발생 가능 항공기 , 자동
높은 신뢰성
성을 최소화 차
설계명세 설계 명세를 가지고 구현된 소프트웨어 구현결과들에 설계와 정확성 체
비교테스트
기반 크
208

---

## Page 209

1I. Back-to-back testing 의 상세설명
가 . Back - to - back testing 의 절차 ( 전일님의 금융 이전 버전과 신버전을 결과를 비교해서 맞는지 확인 )
Test case
Program
Program Program
version1
version2 version3
Test 결과
비교
절차 설명
1 수행될 Test Case 를 작성한다 .
작성된 Test Case 를 사용하여 각각의 테스트 하고자 하는 대상에 대한 테스트를 병렬적으
2
로 수행한다 .
3 각각의 테스트 대상에서 출력되는 결과값들을 비교한다 .
4 테스트 결과값이 불일치 한다면 , 불일치 원인에 대하여 분석한다 .
- 자동차 분야에서는 Back - to - back testing 을 이용하여 제어모델과 소스코드간 품질검증 수행
- ISO 26262 Functional Safety 에서는 소프트웨어 Unit Testing 과 Integration Testing 및 System
209
Testing 수행 시에 Back - to - back testing 을 주요 검증 방법으로 권고

---

## Page 210

Test Coverage
Tips
1. MC/DC (Modified Condition / Decision Coverage) 설명
210

---

## Page 211

테스트 계획서 샘플
▣ 기능 QA
⊙ 대상 brower : IE8
⊙ 테스트 범위 : 스토어 파트너 기능테스트 ( 유저뷰 , 어드민 연동 테스트하지 않음 )
▣ 통합 QA
⊙ brower : IE7,8,9,chrome
⊙ 테스트 범위 : 유저뷰 . 어드민 연동테스트 및 탐색적 테스트
▣ 1 순위 qa 진행 항목 : 환불 , 교환 , 재배송
⊙주요 기능 테스트
⊙연동 테스트
⊙ IE7,8,9,Chome 브라우져 테스트
▣ 2 순위 qa 진행 항목 : 배송 관리
⊙주요 기능 테스트
⊙연동 테스트
⊙ IE7,8,9,Chome 브라우져 테스트
211

---

## Page 212

용어 4 개 사전에 정의하고 진행
용어 설명
커버리지 ? 범위라는 의미임
소프트웨어의 테스트를 논할 때 얼마나 테스트가 충분한가를 나타내는 지표중 하나
Coverage 다 .
예 ) Code 커버리지 , 패스 커버리지 용어로 사용
네트워크에서는 보장범위
구문 . 서술
Statement
예 ) System . out . println("stop!!!") ;
Condition A or B 조건이라고 함 .
Decision 결정 , 결과 값을 말함
212

---

## Page 213

I. 테스트 커버리지 간 포함관계 개념도
조건 커버리지
(Condition)
결정
구문 커버리지
커버리지
(Statement)
(Decision)
Condition/decision Coverage
( 조건 / 결정 커버리지 )
213

---

## Page 214

I. 커버리지 유형
용어 설명
- 구문 커버리지
소프트웨어 내에 기술된 문장 (Statement) 가 참 / 거짓 수행되는 커버리지 (1 회 )
Statement
Boolean expression 의 경우에 , if 의 참조건만 수행을 하면 되므로
Coverage
if 의 거짓 조건의 경우 수행하지 않아 가장 수행 커버리지가 작은 유형
- 결정 커버리지
- 소프트웨어 내에 기술된 전체 조건식에서 , 결과포인트 (Decision Point) 이 최소한
한번은 참 / 거짓 (True/False) 각각 나오게 수행하는 테스트 커버리지
[ 사례 ] Decision Point( 결정포인트 ) = A and B 라고 가정하면
Decision
Coverage
A B DP
1 0 0
1 1 1
214

---

## Page 215

I. 커버리지 유형
용어 설명
- 조건 커버리지 , Condition coverage (or Predicate coverage)
- 소프트웨어 내에 기술된 조건문에서 사용되는 개별 조건이
한번은 참 , 1 번은 거짓이 수행한다 .
- 결과와 상관없이 !
[ 사례 ] Decision Point( 결정포인트 ) = A and B 라고 가정하면
Condition
Coverage
A B DP
1 0 0
0 1 0
표에서 보듯이 , DP 는 모두 0 임 . 말그대로 조건만 각 참 , 거짓 수행
215

---

## Page 216

용어 설명
- 조건 / 결정 커버리지
- 전체 조건식의 결과가 참 한번 , 거짓한번
- 각 개별조건식도 참 , 거짓 한번 갖도록 조합
[ 사례 ] Decision Point( 결정포인트 ) = A and B 라고 가정하면
Condition/
decision
A B DP
Coverage
0 0 0
1 1 1
위 표에서 보듯이 , 조건과 결정을 포함하는 커버리지 .
216

---

## Page 217

I. 테스트 커버리지 간 포함관계 개념도
조건 커버리지
(Condition)
결정
구문 커버리지
커버리지
(Statement)
(Decision)
Condition/decision Coverage
( 조건 / 결정 커버리지 )
Modified Condition/decision Coverage
( 변경 조건 / 결정 커버리지 )
Multiple Condition Coverage
( 다중 조건 커버리지 )
217

---

## Page 218

II. 유형 설명
용어 설명
Modified
- 변경 조건 / 결정 커버리지 , MC/DC 라고 씀
Condition/
- 같은 결과 값을 얻는 것을 제외하여 모든 개별 조건식의 모든 가능한 논리적
조합을 향상 시킨 방법
decision
- 혹은 조건 / 결정 커버리지를 향상 시킨 방법
Coverage
- 다중 조건 커버리지
Multiple
- 결정 포인트 내에 있는 모든 개별 조건식의 모든 가능한 논리적
Condition
조합을 100% 커버리지를 가져가는 방법
Coverage
- 무식한 방법 혹은 완벽한 방법
218

---

## Page 219

1. Modified Condition / Decision Coverage (MC/DC) 의 개념
가 . MC/DC( Modified Condition / Decision Coverage) 의 정의
- 각 개별 조건식이 다른 개별 조건식의 영향을 받지 않고 전체 조건식의 결과에 독립적으로 영향을
주도록 함으로써 Condition / Decision 커버리지를 향상시킨 Test Case 도출 기법
- MC/DC 커버리지는 결정포인트 내의 다른 개별 조건식의 결과와는 독립적으로 해당 개별조건식이
전체 조건식의 결과에 영향을 주는 조건 조합 을 찾아서 커버지리를 테스트하는 방법 이다 .
나 . MC/DC 의 특징
Condition / Decision 커버리지를 만족하고 결정에서 각 조건들은 결정들의
결과에 독립적
결과에 독립적이어야 함
N+1 MC/DC 는 테스트 케이스를 적절하게 선택할 수 있게 하며 , 일반적으로
Test Cases N 개의 입력을 가진 결정에서 최소 N+ 1 개의 테스트 케이스를 필요
219

---

## Page 220

3. MC/DC 커버리지 테스트 추출과 테스트 커버리지 포함관계
가 . 샘플소스 기반 MC/DC 테스트 커버리지 추출 결과
구분 세부설명
샘플소스 if ( a or b ) and c then
결정 Condition /
Coverage
조건 ( Condition) MC/DC Multiple Condition
(Decision) Decision
a b c
TFT or FTT = T TTT ( or TTF) TTT ( or TTF) FF T FFF
XXF = F FFF ( or FFT) FFF ( or FFT) TF T FFT
조건에서 참 , 조건과 결정
결과의 참 / 거짓 거짓 수행 1 회씩
FT T FTF
( 결과와 상관없애 ) ( 왼쪽 2 개 포함이상 )
FT F(or TFF,
FTF, FFF) 중 FTT
하나
TFF
TFT
TTF
TTT
- 기존 테스트 케이스 대비하여 결과값에 독립적인 TFT, FTT 테스트 케이스를 테스트 커버리지에 포함함
220
으로써 Multiple Condition 보다는 적지만 비용 / 효과가 뛰어난 테스트 케이스 도출 가능

---

## Page 221

V. 소프트웨어 테스트 ( 품질보증 ) 의 전략
Debugging
개발자
Verification ( 검증 ) Validation ( 확인 )
시험자 소프트웨어 사용자
품질보증요원
품질보증 (Work - through, Inspection, Review,
Verification, Validation)
VI. 소프트웨어 테스트의 향후 발전방향
가 . 소프트웨어 테스트는 개발 및 시스템 구축의 완전성을 위한 중요 요소
나 . 현재 블랙박스 테스트 및 화이트박스 테스트 방법은 개발 과정 중에 가장 보편적으로 사용
다 . 효율적인 소프트웨어 테스트를 위해 QA Check List Map 을 이용하여 요구대비 테스트 목표
달성여부를 분석하고 , 적절한 테스트 케이스 및 테스트 계획을 준비함
라 . 사용자 참여 테스트를 통해 결과를 철저히 검토 , 기록하여 수정하고 개선사항에 반영해야 함
마 . 컴퓨터에 의한 자동 테스트 케이스 생성 및 테스트 실시와 같은 선진 기법 필요
바 . 국가적으로 테스트 툴에 대한 연구개발 및 현장 도입이 필요
221

---

## Page 222

1. PoC (Proof of Concept)
구분 설명
제품 , 기술 , 정보시스템 등이 조직의 특수 문제 해결을 실현할 수 있다는 증명 과정 .
개념
아직 시장에 나오지 않은 신제품에 대한 사전 검증을 위해 사용
- 신기술 적용 또는 신제품에 대한 사 전검증
목적
- 도입 위험완화 및 사용자 반응 확인
- 기술 인프라구조의 우발적 사고를 막기 위한 통제실무의 일종
효과
- 제품이나 기술에 대한 확신이 부족할 경우 프로토타이핑 등을 통해 도입 위험을 완화
대상 - 단일제품 및 솔루션을 평가
- 출시되지 않은 신제품
범위
- 단일 제품 및 솔루션 , 단일업체 참여
수행 - 기업내부 조직 , 수요자 의뢰
절차
- 솔루션 및 제품설명서 , 분석서
산출물 - PoC 계획서 , 결과서
- 제품 도입에 대한 타당성 분석
222

---

## Page 223

기타 테스트
1) 살충제 패러독스 (Pesticide Paradox); 동일한 테스트 케이스로 동일한
테스트를 반복적으로 수행한다면 , 나중에는 더 이상 새로운 결함을
찾아내지 못함
2) 오류 부재의 궤변 (Absence - errors fallacy); 개발된 시스템이 사용자의
테스트 원리 필요와 기대에 부응하지 못하고 사용성이 현저히 낮다면 결함을 찾고
수행하려는 과정은 아무 소용없음
3) 결함 집중 (Defect Clustering): 파레토 법칙 , 결함 20% 가 80% 영향
4) 테스트는 개발 초기부터 시작 : 품질비용 감소 목적
5) 완벽한 테스트는 불가능 : 자원의 한계
뮤테이션 기법 Mutation 기법 ( 소스코드 변경하여 테스트하는 기법 )
사용성 테스트 사용성 테스트 ( Usability Testing)
빅뱅테스트 ( Bigbang Test) 빅뱅테스트 ( Bigbang Test)
패키지 소프트웨어 테스트 패키지 소프트웨어 테스트
Embedded System Test Embedded Target System Test, 하드웨어 및 소프트웨어 테스트 기법
지각테스팅 Perceptual Testing, UI 측면 스크린샷 비교 자동화
223

---

## Page 224

개발업체 내부 직원 또는 회사와 밀접한 관계를 유지하는 일부 사용자만
알파테스트 (Alpha)
참여하는 시험으로 , 일반 사용자들이 참여하는 베타테스트와 구별된다 .
( 아이 라고 암기 )
- 개발 환경에서 테스트에서 , 사용자 참여 .
베타테스트는 알파테스트를 거친 프로그램을 정식프로그램이 되기 전에
베타 테스트 (Beta)
사용자들로 하여금 테스트 하도록 한 것
- 실제 운영환경 테스트 수행 , 일정한 수의 사용자가 테스트
감마 테스트 (Gamma)
베타 버전 배포 이후 , 다수의 사용자 대상으로 테스트로 인수 테스트의 일종
서버 수용력 , 혹은 수많은 사람들이 일제히 접속했을 때 게임이 원활하게
스트레스 테스트
돌아가는지 등의 여부를 체크하기 위해 진행하는 테스트 .
복구 테스트 (Recovery)
복구 작동 여부테스트
기초적인 점검 , 기본 기능 시험을 위한 선행 시험
스모크 테스트
• 기본적인 기능을 점검하는 테스트
(smoke testing)
• 정밀검사 전에 실시하는 간편 사전심사
민감도 테스트
입력변수에 대한 조합 , 혹은 다른 불안전한 것에 대한 영향도 테스트
(Sensitivity Testing)
슬라이싱 테스트
프로그램을 분해하여 테스트하는 방법을 지칭함
224

---

## Page 225

2. Test Process
VI. Test
기출문제
1. 차세대시스템 IT Upgrade 프로젝트를 수행하는 과정에서 구현이 완료된 뒤 , 통합 테스트 와
영업점테스트 사이에 전반적인 성능향상 (performance) 을 위한 튜닝을 실시하고자 한다 .
이에 대한 실시 방안을 기술 하시오 .
< 프로젝트 개요 >
가 . 소요기간 및 투입 M/M : 16 개월 , 200M/M
나 . 적용 IT 환경 : NT 서버에 Unix 탑재 , MS - SQL 서버 , WAS 서버의 EJB 생성 , X - internet UI 툴 ,
Reporting 툴 , J2EE & EJB framework
( 관리 81 회 3 교시 )
2. 소프트웨어 테스트 프로세스를 설명하고 각 단계별 활동 을 기술하시오 .
( 관리 78 회 4 교시 )
3. 테스트 자동화 (Automated Function Test) 에 대하여 상세히 기술하시오 .
( 관리 77 회 4 교시 )
225

---

## Page 226

2. Test Process
VI. Test
1. 테스트 수행방법 개요
가 . 테스트 표준 제정 목적 및 기준
- 소프트웨어 품질인증 제도 시행과 관련하여 S/W 업체의 품질인식 고취 및 S/W 제품의 품질 제고
- 대상 표준 : IEEE 829 를 수용하여 우리나라에 맞도록 한글화 함
* IEEE 829 : Standard for Test Documentation
- 표준제정 기관 : TTA( 정보통신 기술협회 )
나 . 테스트 문서의 구성
1 ) 테스트 계획서의 주요 내용
- 총 16 개 항목으로 목차가 구성 됨
- 부속서류로 3 개의 명세서를 갖고 있음
( 테스트 설계명세서 , 테스트 CASE 명세서 , 테스트 절차 명세서 )
2 ) 테스트 설계명세서
- 테스트 대상의 특성 : 테스트 항목이 무엇인지 식별하고 대상에 대한 특성을 기술
- 세부 접근방법 : 테스트 계획서에 기술된 방법들에 대해 상세히 명시
- 테스트식별 : 테스트 케이스의 식별자를 열거하고 간략히 설명
- 특성의 성공 / 실패 기준 : 합격 불합격을 결정하기 위한 기준 명시
3 ) 테스트 CASE 명세서
테스트케이스를 정의한 문서로 테스트항목 , 입 . 출력 명세서 , 환경요건뿐만 아니라
테스트 절차에 대한 특정한 제약사항을 기술한 문서
226

---

## Page 227

4) 테스트 절차 명세서
- 테스트를 수행하기 위한 단계를 명시하고 있는 문서로 총 10 단계로 구성
- 10 단계 : 상황기록 , 준비 , 시작 , 진행 , 측정 , 중단 , 재 시작 , 중지 , 마감 .
비상 대처상황
5 ) 테스트 항목 전달 보고서
테스트 대상 시스템의 당초 요구사항과 설계에서 벗어난 사항들을 기록한 문서
6 ) 테스트 상황 기록
테스트 실행과 관련한 상세한 내용을 시간 순으로 기록한 문서
7 ) 테스트 사건보고서
- 테스트 실행 중에 발생한 사건을 사고보고서 형태로 기록 해놓은 문서
- 주요내용 : 입력 값 , 예상결과 , 실제결과 , 예외사항 , 발생 일시 , 테스트 수행자 등
227

---

## Page 228

2. 테스트 프로세스의 5 단계
가 . 5 단계 구성
단계 세부단계 설명
1. 테스트 요구사항 수집 1. 테스트 목표수립 , 테스트대상 및 범위 선정
테스트
2. 테스트 계획 작성 2. 테스트 전략 , 일정 , 보고를 위한 테스트 계획서 작성
계획수립
3. 테스트 계획 검토 3. 작성된 테스트 계획을 정제 , 테스트 계획을 확정
1. 테스트 케이스를 설계하기 위한 기법을 정의
1. 테스트케이스 설계기법 정의
2. 정의된 테스트 종류 및 테스트케이스 설계기법을 이용하여
테스트
2. 테스트 케이스 도출
케이스설계
테스트케이스 도출
3. 원시 데이터 수집
3. 정의된 테스트케이스를 수행하기 위한 적절한 원시 데이터를 작성
1. 테스트 계획서에 정의된 테스트 환경 및 자원을 설정하여 테스트
테스트
1. 테스트 환경 구축
실행을 준비
실행 및 측
2. 테스트케이스 실행 및 측정
정
2. 정의된 테스트케이스를 실행하고 결과를 측정
1. 측정결과 분석 1. 테스트케이스의 수행결과의 측정치 분석
결과분석 및
보고
2. 테스트 결과 보고 2. 테스트 측정 결과 분석서를 기본으로 테스트 결과 보고서를 작성
1.Causal Effect 분석 1. 테스트결과 보고서에서 나온 테스트 결과를 확인하여 오류지점을 분석
2. 오류 수정 계획 2. 오류 수정 우선순위를 결정하여 오류수정 계획 작성
오류추적 및
수정
3. 오류 수정 3. 디버깅 도구 등을 이용하여 오류수정
4. 수정 후 검토 4. 수정된 코드와 오류수정 결과 보고서를 검토하여 수정의 정합성 검증
228

---

## Page 229

나 . 테스트 프로세스 5 단계별 산출물
229

---

## Page 230

3. 테스트 계획서
▣ 스토어 파트너 센터 : 2012.08.06 ~ 2012 - 09 - 03
▣ 담당자 : 나 OO, 김 OO
▣ 기능 QA
⊙ 기간 : 2012.08.06 ~ 2012 - 08 - 27
⊙ 기간산출 : TC 의 개수 및 경험 기반으로 산출함
⊙ brower : IE8
⊙ 테스트 범위 : 스토어 파트너 기능테스트 ( 유저뷰 , 어드민 연동 테스트하지 않음 )
⊙ 기능 QA 기간에 나오는 이슈는 급 , 상 이슈는 모두 해결함
▣ 통합 QA
⊙ 기간 : 2012 - 08 - 28 ~ 2012 - 09 - 03
⊙ 기간 산출 : 연동부분의 대한 기획서 문서 분석후 기간에 영향을 미칠수 있음 ( 일정 지연 )
8 월 15 일 광복절이 휴일이므로 통합테스트 마지막날이 9 월 3 일로 됨
⊙ brower : IE7,8,9,chrome
⊙ 테스트 범위 : 유저뷰 . 어드민 연동테스트 및 탐색적 테스트
▣ 1 순위 qa 진행 항목 : 환불 , 교환 , 재배송
⊙ 주요 기능 테스트
⊙ 연동 테스트
⊙ IE7,8,9,Chome 브라우져 테스트
▣ 2 순위 qa 진행 항목 : 배송 관리
⊙ 주요 기능 테스트
⊙ 연동 테스트
⊙ IE7,8,9,Chome 브라우져 테스트
▣ 기타 : 1 순위 , 2 순위 순으로 qa 진행 예정
▣ 급 , 상 이슈가 clear 된후 sign off 함 230

---

## Page 231

3. ISO/IEC 29119
VI. Test
기출문제
1. 소프트웨어 테스팅 프로세스와 산출물 표준인 ISO 29119 에 대해 설명하시오
( 출제 예상 문제 )
231

---

## Page 232

I. 소프트웨어 테스팅 국제표준 , ISO 29119 의 개요
가 . ISO 29119 의 정의
- 소프트웨어 테스팅의 개념 및 체계적인 프로세스 , 원리 , 가이드를 제시하는 SW 테스팅 국제표준
나 . ISO 29119 의 필요성
- 소프트웨어 테스팅 체계 정립 및 테스팅과 품질에 대한 인식 개선
- 민간 De facto 표준 (ISTQB) 의 등장으로 혼란 가중 : 테스팅 표준 간의 호환성 마련
- 조직의 테스팅 수행 수준의 객관적 지표 수립 ( Guarantee level)
국제 소프트웨어 테스팅 자격 시험
232

---

## Page 233

II. ISO 29119 의 구성 및 타 표준과의 관계
가 . ISO 29119 의 구성
- Part 1 : 소프트웨어 테스팅 원리와 프랙티스의 개요 , 테스팅 컨셉 , 용어를 소개
- Part 2 : ISO/IEC 12207 의 테스팅 관련 부분 준수 , 테스팅에 필요한 추가적인 Guidance 제공
- Part 3 : 테스팅 프로세스 파트와 연계된 표준적인 문서 템플릿 제공
- Part 4 : 테스트 케이스 설계 , 범위 측정 , 인스펙션 등의 테스팅 기법에 대한 상세한 내용 수록
233

---

## Page 234

나 . ISO 29119 와 타 표준과의 관계
- 산업계에 혼용되고 있는 IEEE 829 , IEEE 1008 , BS7925 - 1,2 등의 표준을 통합하여 일관된 기준을 제시함
III. ISO 29119 기대효과
- 동일한 제품 및 시스템 개발 비용으로 보다 높은 품질 수준 확보
- 소프트웨어 테스팅 체계 정립 , Guarantee level 을 갖는 테스팅 수행
- 테스팅과 품질에 대한 인식개선 , 테스팅 전문가 확보 , 동기부여 , 툴을 통한 표준프로세스 구축지원 . 끝
234

---

## Page 235

4. Test Case
기출문제
235

---

## Page 236

I. SW 품질향상을 위한 테스트 도구 테스트 케이스의 개요
가 . 테스트 케이스 (Test Case) 의 정의
- 특정한 프로그램 경로를 실행 해 보거나 , 특정 요구사항에 준수하는 지를 확인하기 위해 개발된 입력 값 ,
실행 조건 , 그리고 예상된 결과의 집합
- 테스트하려는 시스템이 수행해야 하는 액션들로 구성되는 일련의 단계를 의미 , 이러한 단계를 테스트
프로시저 또는 테스트 스크립트라고 함 .
나 . 테스트 케이스 설계의 중요성
- 테스트 오류 방지 : 테스트 수행의 많은 문제들은 테스트 케이스 설계의 미흡함에서 발생 .
- 경제성 : 직관적으로 테스트를 수행 인력 , 시간의 낭비 초래 .
236

---

## Page 237

II. 제어 흐름도
시작
1:SelectPlayIndex
A:Switch(CheckFileType)
Index != end Index = end Index = 0
3:PlayMusic
2:PlayMusic 4:DisplayErr
& StopPlay = YES
TRUE
B:Index!=END &&
stopOption!=YES
FALSE
5:StopPlay
종료
237

---

## Page 238

III. 테스트 경로
Path1 : 1  A  2  B  A  3  B  5
Path2 : 1  A  2  B  A  4  B  5
Path3 : 1  A  3  B  5
Path4 : 1  A  4  B  5
238

---

## Page 239

III. 테스트 경로에 의한 테스트 케이스
1) Path1
Path1 : 1  A  2  B  A  3  B  5
단 계 입력 예상결과
1: SelectPlayIndex Index = 3 -
A: Switch(CheckFileType) - Index != end
2: PlayMusic - -
(Index != end
B: index!=end&&
- stopOption != YES) = TRUE
stopOption != YES
index++
A : Switch(CheckFileType) - Index = end
3 : PlayMusic
- -
stopPlay=YES
B: index!=end&& (index != end &&
-
stopOption != YES stopOption != YES) = FALSE
5: StopPlay - 종료
239

---

## Page 240

[Appendix] 정적코드검사도구 , Java 적용 ,
- PMD is a source code analyzer. It finds common programming flaws like unused variables, empty
catch blocks, unnecessary object creation, and so forth. It supports Java, JavaScript, PLSQL,
Apache Velocity, XML, XSL
- PMD scans Java source code and looks for potential problems like:
• Possible bugs - empty try/catch/finally/switch statements
• Dead code - unused local variables, parameters and private methods
•Suboptimal code - wasteful String/StringBuffer usage
•Overcomplicated expressions - unnecessary if statements, for loops that could be while loops
•Duplicate code - copied/pasted code means copied/pasted bugs
240

---

## Page 241

Chapter VII. SW 유지보수
1. Lehman 소프트웨어 변화
4. SW 유지보수
2. 모듈화
3. 3R
241

---

## Page 242

1. Lehman 소프트웨어 변화
VII. SW 유지보수
기출문제
1. Lehman 의 소프트웨어 변화의 원리에 대해 설명하시오 .
2. 소프트웨어 재사용성 을 통해 생산성을 향상시키기 위한 방안을 설계 , 구현 , 유지보수 단계에서 구체적
으로 설명하시오 .
( 컴시응 , 111 회 , 3 교시 )
242

---

## Page 243

I. 소프트웨어 변화관리와 유지보수의 핵심개념 Lehman 소프트웨어 변화의 원리 이해
가 . Lehman 소프트웨어 변화의 원리에 대한 개념
- 소프트웨어는 요구에 의해 계속적으로 변경되며 , 변경에 따른 복잡성 , 프로그램의 고유한 변경 추세 ,
SW 조직 생산성의 일관성 , 소프트웨어 각 버전의 변화에 대한 일관성을 제시한 SW 변화의 원리
나 . Lehman 소프트웨어 변화의 원리의 중요성
- 소프트웨어 변화의 특성을 이해하고 유지보수 , 변경관리 , 형상관리 , 품질통제의 중요 모델로 반영
- 소프트웨어 변화의 특성을 반영하여 SW 조직 (People), 프로세스 (Process), 기술 (Technology) 에 반영
하여 Baseline 유지 , CCB 구성 , 인력고도화 , 버전관리 등을 설계하는 중요 원리로 사용
243

---

## Page 244

II. Lehman 소프트웨어 변화의 원리의 주요 내용과 적용방안
가 . Lehman 소프트웨어 변화의 원리 주요 내용
구분 세부내용
- 소프트웨어는 계속 진화하며 요구사항에 의해 계속적으로 변경됨
Continuing
- 소프트웨어는 자체적으로 갱신 불가하며 인간의 의지의 개입이 필요
Change
- 다시 만드는 것보다 더 경제적이라고 판단되는 한 계속 변화
- 변경이 가해질수록 구조는 복잡해짐
Increasing
- 시스템의 복잡도는 이를 그대로 유지하거나 줄이고자 하는 특별한 작업을 하지 않
Complexity
는 한 계속 증가된다 .
Program - 프로그램 별로 변경되는 사항은 고유한 패턴 / 추세가 있음
Evolution - 복잡성을 단순화 시키려는 인간 의지의 개입
Organizational - 조직의 생산성이 조직 변화에 민감하지 않음
Stability - 개인의 생산성을 최적화 하는 것이 팀의 생산성을 최적화 하는데 필수적이지 않음
Conservation - 소프트웨어의 각 버전의 변화는 일정함
of Familiarity - 소프트웨어는 규칙적인 수행결과와 추이를 보여주기 때문에 계측 가능
Continuing - 소프트웨어의 Lifetime 내내 , 기능 내용은 사용자 만족도를 유지하기 위해 증가가
Growth 계속됨 ( 1991 년 내용추가 )
Declining - 소프트웨어는 엄격하게 관리 및 운영되지 않거나 , 환경 변화에 적응 하지 않는다면
Quality 품질은 감소함 ( 1996 년 추가 )
- 진화 프로세스는 다중레벨 , 다중루프 , Multi - Agent 피드백 시스템을 수용하고 중요
Feedback
한 제품개선을 달성하기 위해 소프트웨어를 피드백으로 구성되어야 함 ( 1996 년 추
System
가 )
- 소프트웨어 변화의 특성 이해를 통한 유지보수 , 변경관리 , 형상관리 , 품질통제의 중요 모델 반영
244

---

## Page 245

나 . Lehman 소프트웨어 변화의 원리와 SW Lifecycle 연장을 위한 유지보수 분류
유지보수 분류 세부내용
목적별 - 완전 ( 유지보수성 향상 ), 적응 (HW,SW 의 변화 ), 예방 , 수정 ( 오류수정 , 하자보수 )
대상 - 문서 , 데이터 , 네트워크 , 하드웨어 , 시스템 소프트웨어 , 응용 소프트웨어
시간 - 계획 ( 주기적 ), 응급 , 지연 , 예방 ( 예방차원 )
ISO/IEC 14764 - 교정적 , 적응적 , 완전적 , 예방적 유지보수 ; S/W 유지보수의 국제표준
다 . Lehman 소프트웨어 변화의 원리에 대한 적용방안
구분 세부내용 적용원리
- 유지보수 / 변경관리를 위한 전문화 조직으로 구성
조직 (People) - 1 선 / 2 선 / 3 선 조직 , 개발조직 / 운영조직의 분리 Organizational Stability
- 변경통제위원회 (CAB)/ 형상통제위원회 (CCB) 구성
- 요구사항 및 변경에 대한 통제프로세스 구성
프로세스 Continuing Change
- 요구관리프로세스 / 변경관리프로세스
(Process) Increasing Complexity
- 어플리케이션 변경 영향도 분석 프로세스
Program Evolution
- 프로그램과 버전에 대한 시스템적 구성
시스템 (System) Conservation of
- Baseline/CMDB 구성 , 형상관리시스템 구성
Familiarity
- Baseline 을 기반으로 안정성 추구 , 성능개선 , 리팩토링 등을 통한 사용자 만족도 향상 목표
245

---

## Page 246

III. Lehman 소프트웨어 변화의 원리를 적용한 유지보수와 변경관리의 고려사항
가 . 유지보수는 Baseline 를 기반으로 안정성을 추구하나 성능개선 , 예방유지보수 , 리팩토링 (Refactoring)
활동을 수행하여 안정성과 더불어 효과성 , 사용자 만족성을 높이는 활동을 병행해야 함
나 . Increasing Complexity 의 원리에 따라 변경을 수행 후 회귀테스트 (Regression Test) 를 수행하여 Unit,
Input Partition, Path, Data flow 에 대한 검증을 통하여 복잡성 증가에 대한 품질 보증 활동 수행이
요구
246

---

## Page 247

2. 모듈화 (Modularity)
VII. SW 유지보수
Tips
1. 소프트웨어 구조와 관련된 모듈성 (Modularity) 이란 무엇이며 , 그것과 소프트웨어 개발 비용 (Cost) 과
의 관계를 설명하시오 .
247

---

## Page 248

2. 모듈화 (Modularity)
VII. SW 유지보수
기출문제
1. 소프트웨어공학과 관련된 다음 문제에 답하라 .
가 . 소프트웨어 공학이란 무엇인가 ?
나 . 소프트웨어 공학이 추구하는 5 가지 목표는 무엇인가 ?
다 . 이러한 목표를 달성하기 위하여 가장 중요한 것은 모듈화이다 . 모듈화란 무엇이며 어떤 장점 이
있는가 ?
( 조직 72 회 2 교시 )
2. 컴포넌트 (Component) 와 모듈 (Module) 의 차이점 을 설명하시오 .
( 관리 72 회 2 교시 )
3. 소프트웨어 구조와 관련된 모듈성 (Modularity) 이란 무엇이며 , 그것과 소프트웨어 개발 비용 (Cost)
과의 관계를 설명하시오 .
( 관리 86 회 3 교시 )
248

---

## Page 249

2. 모듈화 (Modularity)
VII. SW 유지보수
I. 소프트웨어 설계의 원리 모듈화
가 . 모듈화 (Modularity) 정의
- 프로그램이 효율적으로 관리될 수 있도록 하는 소프트웨어의 특성으로 시스템을 분해하고 추상화를
통하여 소프트웨어제품의 성능을 향상시키거나 시스템의 디버깅 시험 , 통합 및 수정을 용이하게 하는
설계방법
나 . 모듈화의 원리
1) 비용과 모듈의 관계 : 모듈수가 증가하면 인터페이스 비용의 증가
2) 정보 은폐 : 어렵거나 변경가능성이 있는 모듈은 다른 모듈로부터 은폐
3) 자료 추상화 : 각 모듈 자료구조를 액세스하고 수정하는 함수 내에 자료구조의 표현내역을 은폐
4) 모듈의 독립성 : 낮은 결합도와 높은 응집도를 가짐
다 . 모듈의 장점
1) 프로그램의 효율적인 관리 및 성능향상
2) 전체적인 소프트웨어 이해의 용이성 증대 및 복잡성 감소
3) 소프트웨어 시험 , 통합 , 수정 시 용이성 제공 4) 기능의 분리가 가능하고 인터페이스가 단순
5) 오류파급효과 감소 6) 모듈의 재사용성 증대
249

---

## Page 250

II. 소프트웨어 모듈화의 최적화
- 가 . 소프트웨어 모듈수와 비용 / 노력과의 상관관계 그래프
- 모듈의 수가 증가 할수록 모듈 당 비용은 감소하지만 인터페이스 비용은 증가하게 되므로 적정
수준의 모듈 개수 유지 필요
250

---

## Page 251

나 . 소프트웨어 프로세스 별 모듈성 (Modularity) 과 개발 비용의 관계
프로세스 모듈성 (Modularity) 비용요소와의 관계
요구기능과 프로세스 모델링의 추상화 요구도출 , 검증비용 , 설계단계 생산성의
분석
수준 기반
아키텍처 구성요소 정의 수준과 관계의 설계의 복잡성 , 인터페이스 유연성 ,
설계
복잡성 구현 용이성
프로시저 , 객체 , 컴포넌트 , 서비스 , 분리
개발 개발영역 분할과 개발자간 의사 소통 노력
기준
테스트 용이성 , 오류파급효과 ,
테스트 요구 기능에 매치되는 테스트 분해도
잠재 오류방지
통합 시스템 / 서브시스템 / 모듈 / 인터페이스 시스템 통합 및 테스트 비용
유지보수 모듈간 자료공유도 , 모듈 내 응집도 S/W 의 이해와 변경의 노력
251

---

## Page 252

III. 소프트웨어 응집도 (Cohesion)
가 . 소프트웨어 응집도의 정의
1) 정보은닉 개념의 확장개념으로 , 하나의 모듈은 하나의 기능을 수행하는 집적성을 지칭함
2) 모듈의 독립성을 나타내는 개념으로 모듈내부 구성원간의 연관도
3) 하나의 모듈내부 처리 요소간의 기능적 연관도를 측정하는 척도
나 . 소프트웨어 응집도 단계
응집도 설명
낮음
우연적 응집도 아무 관련성 없는 작업을 한 모듈에서 모음 ( 제멋대로 )
논리적 응집도 유사한 성격의 작업들을 모음 , 모듈의 부분이 그룹핑 됨 . ★
시간적 응집도 같은 시간대에 처리되어야 하는 것들을 모음
절차적 응집도 모듈진행 요소들이 서로 관계되어지고 순서대로 진행
동일한 입 , 출력 자료를 이용하여 서로 다른 기능을 수행하는
통신적 응집도
기능 ) (Communicational/informational cohesion)
작업의 결과가 다른 모듈의 입력자료로 사용 (Sequential
높음
순차적 응집도
cohesion)
응집도는 높을수록 좋음
기능적 응집도 하나의 기능만 수행하는 모듈 (Functional cohesion (best))
252

---

## Page 253

절차적 응집도 모듈진행 요소들이 서로 관계되어지고 순서대로 진행
- Procedural Cohesion
- 순서대로 처리 혹은 수행이라는 단어가 있음
( 원서 )
설명 Procedural cohesion is when parts of a module are grouped because
they always follow a certain sequence of execution
(e.g. a function which checks file permissions and then opens the file).
논리적 응집도 유사한 성격의 작업들을 모음 , 모듈의 부분이 그룹핑 됨 . ★
논리적 응집도 (logical cohesion)
( 원서 )
설명 Logical cohesion is when parts of a module are grouped because they
are logically categorized to do the same thing even though they are
different by nature
(e .g. grouping all mouse and keyboard input handling routines).
253

---

## Page 254

IV. 소프트웨어의 결합도
가 . 결합도 (coupling) 의 정의
1) 모듈내부가 아닌 외부의 모듈과의 연관도 ( 모듈간의 상호연관도 )
2) 소프트웨어 구조에서 모듈간의 관련성을 측정하는 척도
나 . 결합도의 특징
1) 서로 다른 상위 모듈에 의해 호출되어 처리 상 연관성이 없는 서로 다른 기능수행
2) 자료전달이 인터페이스를 통과하므로 인터페이스복잡성에 의존적임
3) 가능한 낮은 결합도가 복잡성을 감소시킴 (loosely coupled)
4) 에러발생시 오류가 전파되어 다른 오류의 원인이 되는 리플효과 (Ripple) 최소화 하여야 함
결합도 단 계
낮음
모듈들이 간단히 변수를 파라메터로 교환 ,
자료 결합도
(Data coupling)
2 개의 모듈 사이에 서로 자료구조 (data structure)
스템프 결합도
교환 , Stamp coupling
하나의 모듈이 다른 모듈으로 무엇을 해야하는지에 대한 정보를
제어 결합도 넘겨줌으로써 다른 모듈의 흐름을 제어하는 경우
Control Coupling ★
높음
외부 결합도 모듈들이 소프트웨어의 외부환경과 연관 되는 경우 (External)
결합도는
많은 모듈들이 전역변수 ( 글로벌 변수 ) 를 참조할 때 발생
공통 결합도
(Common)
낮을수록 좋음
내용 결합도 한 모듈이 다른 모듈의 내부자료나 제어정보를 사용 (Content)
254

---

## Page 255

자료 결합도 모듈들이 간단히 변수를 파라메터로 교환 , (Data coupling)
자료 결합도 (Data coupling) 는 모듈들이 파라메터 등을 통해 데이터를
설명 공유 하는 경우이다 . 각 데이터가 기본적인 것 (elementary peice ) 이고 ,
그 데이터들이 공유되는 유일한 데이터이여야 한다 .
사례 예 , 제곱근을 계산하는 함수로 하나의 정수를 전달하는 경우
하나의 모듈이 다른 모듈으로 무엇을 해야하는지에 대한 정보를 넘겨줌으로써
제어 결합도 다른 모듈의 흐름을 제어하는 경우
Control Coupling ★
int def(int x, int y, int v) {
if(v > 0) {
return(x+y);
} else {
사례
return(x-y);
}
}
// 위과 같이 v 를 받아서 , if 와 else 문장의 흐름을 제어함 .
255

---

## Page 256

공통 결합도 많은 모듈들이 전역변수 ( 글로벌 변수 ) 를 참조할 때 발생 (Common)
모듈 밖에서 , 선언되어 있는 전역변수를 참고하고 ,
설명
그 전역변수를 갱신하는 식으로 처리하는 경우
256

---

## Page 257

3. 3R
VII. SW 유지보수
기출문제
1. 소프트웨어 재사용성을 위한 방안 (or 구성요소 ) 에 대하여 설명하시오
( 조직 71 회 2 교시 )
2. 순공학 , 역공학 , 순환공학 , 동기순환공학 , 비동기순환공학
( 조직 77 회 1 교시 )
3. 호환성 확보를 위한 컴퓨터 프로그램 코드의 역공학 (Reverse Engineering) 허용을 저작권 측면에서
설명하시오 .
( 컴시응 , 108 2 교시 )
257

---

## Page 258

3. 3R
VII. SW 유지보수
I. SW 위기 극복 , 소프트웨어 3R 의 개요
가 . 소프트웨어 3R 의 정의
- 레포지토리 (Repository) 를 기반으로 역공학 (Reverse Engineering), 재공학 (Reengineering),
재사용 (Reuse) 을 통해 소프트웨어 생산성을 극대화하는 기법
나 . 소프트웨어 3 R 의 등장배경
- 소프트웨어위기 극복
- 소프트웨어 개발 생산성 향상
- 유지보수 비용의 절감
- 소프트웨어 변경 요구사항의 신속한 대처
다 . 소프트웨어 3 R 의 목표
- 소프트웨어 유지보수 오류 및 비용을 축소함
- 시스템의 이해 , 변경 , 테스트 용이
- 현 사용 시스템을 CASE 도구를 사용하여 유지보수 및 수정이 가능하도록 지원
- 현재 시스템의 컴포넌트를 재사용소프트웨어위기 극복
258

---

## Page 259

3. 소프트웨어 3R
II. 소프트웨어 3R 의 구성
가 . 소프트웨어 3R 의 개념도
나 . 소프트웨어 3 R 의 관련개념
- 순공학 : 추상개념의 현실화 , 요구분석 - > 설계 - > 구현
- 재구조화 : 기능 변경 없이 소스코드의 재편성 ( 표현의 변형 )
다 . 소프트웨어 3 R 의 구성요소
- 역공학 : 구현된 것을 분석하여 설계단계로 요구사항 분석
- 재공학 : 역공학으로 재구조화된 S/W 를 기반으로 다시 추상개념을 현실화하는 것
- 재사용 : 재공학을 통해 현실화된 S/W 를 실제 사용
259

---

## Page 260

III. 역공학 의 개요
가 . 역공학 의 정의 : 현실의 추상화
- 기존 개발된 시스템을 CASE 이용하여 사양서 , 설계서 등의 문서로 자동 추출하는 작업
- 개발 단계를 역으로 거슬러 올라가 기존 개발된 시스템의 코드나 데이터로부터 설계
명세서나 요구 분석서 등을 도출해 내는 작업
나 . 역공학의 장점
- 상용화되거나 기 개발된 소프트웨어의 분석을 도와줌
- 기존 시스템의 자료와 정보를 설계 수준에서 분석할 수 있어 유지보수성을 향상시킴
- 기존 시스템 정보를 Repository 에 보관하여 CASE 의 사용을 용이하게 함
- 역공학에 사용되는 입력 유형과 그에 따른 출력 유형
260

---

## Page 261

다 . 역공학의 종류
- 논리 역공학 : 원시 코드로 부터 분석
- 자료 역공학 : 기존 DB 로 부터 분석
261

---

## Page 262

IV. 재공학 의 개요
가 . 소프트웨어 재공학 의 정의 : 현실의 추상화
- 소프트웨어 역공학 및 재구조화 등의 기술을 이용하여 소프트웨어를 분석하여 정보를 추출하고 ,
이를 다시 순공학을 사용하여 새로 구현함으로써 재사용성을 확보하는 소프트웨어 부품으로
만들어 내는 기술 작업
나 . 소프트웨어 재공학 의 장점
- CASE 사용이 용이하여 현재 시스템의 유지 보수 향상
- 표준을 준수하여 시스템 이해와 변형을 용이하게 하며 , 유지 보수비용 및 시간 절감
다 . 소프트웨어 재공학의 단계
- 원시코드로부터의 정보 추출 단계
- 역공학 단계 및 시스템의 향상과 검증단계
- 순공학 단계 및 설계와 최적화 단계
- 원시코드의 생성 단계
262

---

## Page 263

제 4 부 소프트웨어 개발
V. 소프트웨어 재사용의 개요
가 . 소프트웨어 재사용의 개요
- 소프트웨어 개발관련 지식 ( 기능 , 모듈 , 구성등 ) 을 표준화하여 개발 생산성을 높이기 위하여
반복적으로 사용하기에 적합하도록 구성하는 방법
나 . 필요성
- 소프트웨어 생산의 TCO (Total Cost Overhead) 절감
- 높은 품질의 소프트웨어 생산을 위한 공유 및 활용 효과
다 . 목표
- Reliability : 신뢰성 향상 ( 기능 , 안정 , 속도 등의 사전 성능 검증됨 )
- Extensibility : 확정성 향상 ( 검증된 기능 기반으로 Upgrade 용이함 )
- Productivity : 생산성 향상 ( 비용 , 시간 , 위험 등 전체적 개발 프로세스 향상됨 )
- Usability : 사용성 향상 ( 독립된 컴포넌트로써의 조립성 제공됨 )
- Maintainability : 유지보수성 ( 품질개선 , 오류수정 , 운영 ,Upgrade 이 용이함 )
- Adaptability : 적응성 향상 ( 독립된 컴포넌트로써의 새로운 Process 적용에 용이함 )
263

---

## Page 264

제 4 부 소프트웨어 개발
VI. 소프트웨어 재사용 활용 및 구현 기법
가 . 활용 기법 종류
기법 종류 내 용
Copy 소프트웨어 코드를 Copy 하여 목적에 맞게 수정하여 사용하는 방법
Pre-Processing
Include 함수를 사용하여 Compile 시에 포함되도록 하는 방법
Library Sub Program 집합인 Library 를 활용해 Link 시에 포함되도록 하는 방법
Package Global Variable, Package Interface 를 통한 정적인 활용 방법
Object
Global Variable, Object Interface 를 통한 실행 중의 동적인 활용 방법
Generics Object 의 다형성을 이용하는 방법
객체 지향 객체 지향 방법의 상속성 , 다형성 등의 성질을 활용하는 방법
Component 컴포넌트의 독립성 , 조립성 , 표준성 등을 활요하는 방법
264

---

## Page 265

제 4 부 소프트웨어 개발
나 . 구현기법 종류
- Classification
1 ) 코드 , 객체 , 변수 등의 속성에 대해 표준 Pool 을 활용
2 ) Code Dictionary, Variable Stadardization 등소프트웨어 생산의 TCO
(Total Cost Overhead) 절감
- Design Pattern 적용
1 ) 특정 도메인에 대한 시스템에 대한 경험자의 설계 및 구현의 결과를 재활용
2 ) Business Process, 공통 함수 / 언어 등
- Modulation
1 ) 시스템 분해 , 추상화등으로 Debugging, Test, Integration, Modification 을 수행
2 ) Loosely Coupled, Tightly Cohesion ( 낮은 결합도 , 높은 응집도 ) 추구 , 높은 품질의
소프트웨어 생산을 위한 공유 및 활용 효과
- Object Oriented Methodology
1 ) 상속성 , 추상성 , 다형성 , 동적 Binding 등의 활용
2 ) Class, 4 GL 에서의 Component 등
- CBD (Component Based Development)
1 ) ITA, EAP 기반의 Component 활용
2 ) Active X, DCOM, EJB, CORBA 등
265

---

## Page 266

4. SW 유지보수 ( 유지관리 )
VII. SW 유지보수
Tips
국방부 , 국산 SW 유지보수비용 현실화
국방부가 소프트웨어 (SW) 유지보수 요율을 최고 15% 까지 올리는 등 국산 SW 유지보수 비용 현실화에
나섰다 . 정부가 국산 SW 유지보수 비용 제값 주기 정책을 추진했지만 대부분 공공기관이 8~9% 의 낮은
요율을 적용해 문제로 지적됐다 . 국방부의 SW 제값 주기 정책이 공공기관의 유지보수 요율 정책에 적지
않은 영향을 미칠 전망이다 .
국방부는 5 대 전장관리체계를 군수품에서 SW 품목으로 변경하고 기존 자원정보체계와 함께 유지보수사
업에 성능개선을 추가해 요율을 최고 15% 까지 올렸다고 7 일 밝혔다 .
5 대 전장관리체계는 군에 적용한 지휘 · 통제 · 통신 · 컴퓨터 · 정보 (C4I) 체계인 △합동지휘통제시스템 (KJCCS)
△ 지상전술 C4I 시스템 (ATCIS) △ 해군전술 C4I 시스템 (KNCCS) △ 공군전술 C4I 시스템 (AFCCS) △ 군사정보
통합처리시스템 (MIMS) 등이다 . 체계마다 수십개의 SW 가 적용돼 있다 .
그동안 5 대 전장관리체계는 군수품으로 지정돼 5% 의 낮은 유지보수 요율을 적용했다 . 국방부 예산업무
지침에 군수품은 4~5% 의 유지보수 요율을 , SW 품목은 10~15% 를 적용하도록 명시돼 있기 때문이다 .
266

---

## Page 267

4. SW 유지보수
VII. SW 유지보수
기출문제
1. 50 주년이 되는 제조업 전산실의 정보관리 부문 소프트웨어 유지관리 담당자로서 'Alien Code' 를
유지관리하기 위한 지침을 마련하고자 한다 . 지침에 들어갈 내용들을 정리해 보시오 .
( 관리 75 회 4 교시 )
2. 소프트웨어 유지보수와 관련하여 다음 사항에 대하여 설명하시오 .
가 . Lehman 의 소프트웨어 변화에 대한 원리 5 가지 .
나 . 소프트웨어 유지보수의 3 가지 형태 .
- 수정적 유지보수 (corrective maintenance)
- 적응적 유지보수 (adaptive maintenance)
- 완전적 유지보수 (perfective maintenance)
( 조직 75 회 2 교시 )
3. 소프트웨어 유지보수의 4 가지 유형 과 개발 업무와의 차이점에 대하여 설명하시오 .
( 정보관리 , 102 회 1 교시 )
267

---

## Page 268

4. SW 유지보수
VII. SW 유지보수
I. 소프트웨어의 생명연장 유지보수
가 . 소프트웨어 유지보수의 정의
- 소프트웨어의 수명을 연장시키는 일련의 행위
- 소프트웨어 생명주기의 최종단계로 오류를 수정하고 사용자 요구사항을 정정하며 기능과 수행력을
증진시키기 위한 활동
나 . 소프트웨어 유지보수의 중요성
- 유지보수 비용이 전체 비용의 70 ~ 80 % 차지함
- 소프트웨어 인력이 신규 프로젝트보다 유지보수 업무에 투입되는 낭비 요소 발생
- 유지보수의 비효율성으로 인해 패키지 소프트웨어의 도입 확산
268

---

## Page 269

Act3. Product & Management
1. 소프트웨어 유지보수
제 9 부 소프트웨어 발주 및 관리
다 . 정보시스템 유지보수의 분류
분류기준 종류 설명
계획 유지보수 주기적인 유지보수
예방 유지보수 미리 예방 차원에서의 유지보수
시점에 의한
유지보수
응급 유지보수 긴급한 경우의 유지보수 , 사후 승인 필요
지연 유지보수 시스템에 대해 변경된 부분에 대한 추후 지원
데이터 유지보수 데이터의 Conversion 등의 필요시 처리
프로그램 유지보수 프로그램의 변경 및 오류에 대한 처리
대상에 의한
유지보수
문서 유지보수 문서 표준의 변경이나 기타 필요시
시스템 유지보수 시스템의 변경 및 장애에 대한 처리
수정 유지보수 오류와 결함의 수정 (corrective maintenance)
원인에 의한
완전 유지보수 불완전 부분의 표준화 적용 (perfective maintenance)
유지보수
예방 유지보수 정기적인 유지보수 (preventive maintenance)
( 수완예적 )
적응 유지보수 변화 , 갱신의 적용 (adaptive/porting maintenance)
269

---

## Page 270

1. 소프트웨어 유지보수
II. 소프트웨어 유지보수의 주요 활동
가 . 소프트웨어 유지보수 절차
사용자
요청 단계
요청서
기각
승인 / 결과
분석가
분석 단계
통보
승인요청
승인 단계
유지보수 관리 위원회
유지보수 결과 지시
실행 단계
유지보수자
나 . 유지보수 단계별 활동
4.2
문제 분석
단계 주요 활동 활동 주체
4.1
문제분류
요청 - MRF (Modification Request Form) 작성 사용자
4.3
및 식별
- CR (Change Request) 작성
설계
분석 - 유지보수 유형 분류 , 심각성 판단 분석가
- 유지보수의 내용 분석 , 영향도 분석
4.7
- 유지보수 우선순위 결정
납품
4.4
구현
승인 - 분석 내용에 따라 유지보수 여부 승인 유지보수
- 유지보수 실행에 대한 승인 관리위원회
4.6
실행 - 유지보수 대상에 대한 유지보수 실행 유지보수자
4.5
인수테스트
- 소프트웨어 변경 보고서 (SCR) 작성
시스템테스트
- 관련 문서 변경
270

---

## Page 271

제 9 부 소프트웨어 발주 및 관리
다 . 기타 유지보수 관련 활동
1 ) 문서 유지 관리
- 유지보수 작업에서 발생하는 여러 문서들 관리 및 유지
2 ) 품질 보증
- 소프트웨어 유지보수 시기 , 구성 계획등의 적절성과 유지보수 내용의 관련 문서와 일치성 확보
III. 소프트웨어 유지보수의 문제점과 해결방안
가 . 유지보수의 문제점
- 유지보수에 따른 코드 , 자료 , 문서상 부작용 발생
- 시스템의 신뢰성 저하 가능성 발생
- 유지보수 비용 및 인력의 증가
- 유지보수 절차 , 조직 및 인력 운영 방법이 비체계적
- 유지보수 인력의 기술 부족
나 . 유지보수 문제점 해결 방안
- 표준화된 개발 방법론 및 개발도구의 적용
- 소프트웨어 재공학 도구 활용 : 분석 , 재구조화 , 역공학 실시
- SDLC 단계의 각 단계에서 품질 보증 활동의 강화
- 유지보수 요인에 대한 예방활동 실시
- 변경관리 , 형상관리등 적절한 프로젝트 관리 기법 도입
271

---

## Page 272

제 9 부 소프트웨어 발주 및 관리
IV. S/W 유지보수의 형태와 분류
가 . S/W 유지보수의 형태
형태 설 명 특 징
- Corrective Maintenance 하자유지보수 , 처리오류 ,
수정적 유지보수
- 프로그램 오류로 인한 SW 오류수정 수행오류 , 구현오류
- Adaptive Maintenance
적응적 유지보수 이식개념 , H/W or S/W 변화
- 프로그램 환경변화에 S/W 의 적응
- Perfective Maintenance
완전적 유지보수 수행력 향상
- 프로그램 특성 변경 , 첨가 및 장래 유지 보수성 향상
- Preventive Maintenance 프로그램의 예상되는 기능 ,
예방적 유지보수
- 프로그램의 예측되는 오류를 선점 처리 오류에 대해 발생 전 수정
나 . 유지보수 대상에 따른 분류
유지 보수 대상 세부 내용
자료 / 프로그램유지보수 응용프로그램소스 , 데이터에 대한 오류처리 , 기능개선
문서유지보수 SDLC 전 단계의 문서에 대한 이력관리
시스템 유지보수 모니터링 , H/W, S/W, DB 등에 대한 업그레이드 작업
272

---

## Page 273

V. 유지보수 분류기준과의 연관관계 및 비교
가 . 유지보수 유형에 따른 대상과의 연계 및 계약관계
유지보수유형 유지보수발생 대상 계약측면
Corrective 응급유지보수 프로그램 하자
Perfective 계획유지보수 자료 , 문서 무상
Preventive 예방유지보수 시스템 유상
Adaptive 지연유지보수 시스템 무상
나 . 유지보수 유형에 따른 비용 / 효과 / 난이도 / 시급성의 분류
비교항목 Corrective Perfective Preventive Adaptive
비용 고 고 중 저
효과 중 중 고 중
난이도 고 고 저 중
시급성 고 고 저 중
273

---

## Page 274

VI. S/W 변화관리와 유지보수의 핵심인 Lehman 변화 원리 이해
가 . Lehman S/W 변화 원리의 개념
- S/W 는 요구에 의해 계속적으로 변경되며 , 변경에 따른 복잡성 , 프로그램의 고유한 변경추세 , S/W 조직
생산성의 일관성 , S/W 각 버전의 변화에 대한 일관성을 제시한 S/W 변화의 원리
나 . Lehman 의 S/W 변화 원리의 중요성
- S/W 변화의 특성을 이해하고 유지보수 , 변경관리 , 형상관리 , 품질통제의 중요 모델로 반영
- S/W 변화의 특성을 반영하여 S/W 조직 , 프로세스 , 기술에 반영하여 Baseline 유지 , CCB 구성 ,
인력고도화 , 버전 관리 등을 설계
다 . Lehman 의 S/W 변화 원리
구분 세부내용
계속적 변경
소프트웨어는 진화하며 요구사항에 의해 계속적으로 변경됨
(Continuing change)
복잡도 증가
변경이 가해질수록 구조는 복잡해짐
(Increasing complexity)
대규모 프로그램 진화
프로그램 별로 변경되는 고유한 추세가 있음
(Program evolution)
조직의 안정화
개발생산성이 변화에 민감하지 않고 안정됨
(Organizational Stability)
친근성의 유지
소프트웨어 각 버전의 변화는 일정함
(Conservation of familiarity)
274

---

## Page 275

제 9 부 소프트웨어 발주 및 관리
VII. 소프트웨어 유지보수를 위한 재공학과 재구조화
가 . 재공학 (Reengineering)
- 역공학을 실시한 후 변경 사항을 고려하여 다시 순공학을 실시
- 역공학 (Reverse Engineering)
유지보수 단계의 유일한 문서화 자료가 프로그램 코드밖에 없을 경우 코드를 이용하여 설계
명세서 및 분석 명세서를 작성하는 작업
- 순공학 (Forward Engineering)
시스템 설계를 이용하여 시스템을 개발하는 과정
나 . 재구조화 (Restructuring)
- 유지보수가 용이하도록 원시 프로그램에 구조적 프로그래밍 기법을 적용하여 새롭게 변경하는
프로세스
275

---

## Page 276

핵심 기출 (2015) & 출제 예상문제
다음은 유지보수단계에서 진행되는 유지보수 활동의 분포에 대한 일반적인 통계
그래프이다 . ( 가 ) 영역에서 수행하는 작업에 해당하는 것은 ?
① 운영중인 소프트웨어에서 발견된 기능 오류를 수정
② 비디오대여 관리 시스템에 장르별 대여 통계 기능 추가
③ 아키텍처문서와 소스 코드 간의 일치하지 않는 내용을 수정
④ MS - Windows 환경에서 개발된 소프트웨어를 Linux 환경으로 이식
276

---

## Page 277

해설
수완이의 옛적에서 가장 많은 것을 차지하는 것은
완전적 유지보수이다 . 기능 추가 및 기능 개선
- Perfective Maintenance
완전적 유지보수
- 프로그램 특성 추가 변경 , 첨가 및 장래 유지 보수성
향상
( 정답 ) ② 비디오대여 관리 시스템에 장르별 대여 통계 기능 추가
277

---

## Page 278

5. 리팩토링
1. 은행에서 계좌의 당좌 대월액을 계산하는 프로그램이다 . 새로운 계좌 타입이 몇 가지 추가될 예정이고 ,
이들은 당좌 대월액을 계산하는 각각의 규칙이 필요하여 메소드 overdraftCharge () 를 클래스
AccountType 으로 옮기려고 한다 . 리팩토링 기법 중의 하나인 Move 메소드의 개념과 절차 를 설명하고
이를 활용하여 리팩토링한 코드를 작성하시오 . ( 정보관리 , 101 회 3 교시 5 번 )
class Account
{
... 중략 ...
double overdraftCharge()
{
if (_type.isPremium()) //isPremium() 메소드는 AccountType 클래스에 있음
{
double result = 10;
if (_daysOverdrawn > 7) result += (_daysOverdrawn - 7) * 0.85;
return result;
}
else return _daysOverdrawn * 1.75;
}
double bankCharge()
{
double result = 4.5;
if (_daysOverdrawn > 0) result += overdraftCharge();
return result;
}
private AccountType _type;
private int _daysOverdrawn;
}
278

---

## Page 279

5. 리팩토링
VII. SW 유지보수
I. 소프트웨어 코드의 정재를 통한 생산성 향상 기법 , 리팩토링 개요
가 . 리팩토링 (Refactoring 의 정의
- 소프트웨어를 보다 쉽게 이해할 수 있고 , 적은 비용으로 수정할 수 있도록 겉으로 보이는 동작의 변화 없
이 내부 구조를 변경하는 방법 ( 마틴 파울러 ): 결과의 변경 없이 코드의 구조를 재조정함
나 . 리팩토링의 목적
목적 설명
소프트웨어 디자인 개선
 설계 의도와 구현 코드의 일관성을 유지하여 설계변경 용이
소프트웨어 이해도 향상
 이해하기 쉬운 코드는 개발자 작업시간을 단축
오류 발견 용이성 확보
 소스 구조를 명확히 함으로써 버그 원인을 쉽게 발견
전체 개발 생산성 증대
 “ 좋은 디자인 유지  개발자 이해 향상  오류감소 ” 개발 가속화
279

---

## Page 280

II. 리팩토링의 수행절차와 적용시점
가 . 리팩토링의 절차
테스트 실패의 원인을 분석
동작하는
프로그램
N
개선 대상 테스트 코드 수정 테스트
리팩토링
코드 영역 Set 작성 ( 구조 개선 ) 통과 ?
수행여부 판단
Bad Smell
Y
새로운 기능 개선 완료된
리팩토링 목적을 달성할 때까지 [ 작은 수정 / 테스트 ] 반복
추가 코드 영역
280

---

## Page 281

나 . 리팩토링 적용시점
시점 적용 사유
삼진 규칙 비슷한 중복이 세 번째 나타나는 경우 수행  기본 가이드 제공
기능 추가 시 기존 코드의 구조를 개선으로 이해 향상  기능 추가를 쉽고 빠르게 수행
버그 수정 시 버그 수정 전에 더 깊은 이해를 제공  버그 수정 용이
코드 리뷰 중 코드의 명확성 유지 , 더 나은 설계 아이디어가 제안  품질 향상
참고 : 코드 악취 (Bad smells in Code)?
- SW 품질속성을 저해하는 리팩토링이 필요한 코드의 패턴 혹은 코드의 일부분을 의미함
영문 한글 설명
Duplicated Code 중복된 코드 코드가 여기저기 겹쳐 있다 .
Long Method 너무 긴 메소드 메소드가 너무 길다 .
Large Class 거대한 클래스 클래스의 파일이나 메소드가 너무 많다 .
Long Parameter List 너무 많은 인수 메소드에 전달하는 파라미터가 너무 많다 .
사양 번경이 발생한 경우 수정할 곳이 여기 저기 흩
Divergent Change 변경의 발산
어져 있다 .
어떤 클래스를 수정하면 다른 클래스도 수정해야 한
Shotgun surgery 변경의 분산
다 .
281

---

## Page 282

III. 리팩토링 매서드 유형
매서드 유형 설명
메서드 몸체 (method’s body) 가 메서드의 이름 만큼이나 명확할 때는 호출하는
곳에 메서드의 몸체를 넣고 , 메서드를 삭제하는 리팩토링 기법
Inline Method
- 굳이 나눌 필요가 없는 것은 호출하는 곳에 처리 함수를 삽입
그룹으로 함께 묶을 수 있는 코드 조각이 있으면 , 코드의 목적이 잘 드러나도록
Extract Method
메소드의 이름을 지어 별도의 메소드를 뽑아낸다 .
- 코드 부분들을 추출하여 ( 익스트렉트하여 ) 별도 메소드를 만듬 .
인터페이스가 같은 부분을 사용하면 , 인터페이스의 같은 부분은 추출하여
Extract Interface
인터페이스를 통합 추출 적용함 .
메소드가 자신이 정의된 클래스보다 다른 클래스의 기능을 더 많이 사용할 때 이
메소드를 가장 많이 사용하고 있는 클래스에 비슷한 몸체를 가진 새로운 메소드를
Move Method
만들고 , 이전 메소드는 간단한 위임으로 바꾸거나 완전히 제거 하는 리팩토링
기법중 하나
282

---

## Page 283

IV. Pull Up Method
You have methods with identical results on subclasses.
Move them to the superclass.
( 출처 : http:// www.refactoring.com/catalog/pullUpMethod.html )
소프트웨어 리팩토링 Refactoring, Pullup Method, Extract Interface, Move Method
283

---

## Page 284

V. Extract Interface 사례
- 디자인 패턴과 유사하게 , 인터페이스가 같은 부분을 사용하면 , 인터페이스의 같은 부분은 추출하여
인터페이스를 통합 추출 적용함 . ( 퍼사드 패턴이네요 )
( 출처 : http://arisu1000.tistory.com/27596 )
284

---

## Page 285

소프트웨어 난독화
Tips
1. 소프트웨어 난독화 대해 설명하시오 .
( 컴시응 , 101 회 1 교시 )
2. 소프트웨어 보안을 위한 난독화 (Obfuscation) 의 필요성 및 개념을 설명하시오 . 또한 난독화를
위한 기술을 분류하고 , 이를 비교 설명하시오 .
( 정보관리 , 108 회 , 4 교시 )
285

---

## Page 286

I. 소프트웨어 난독화의 정의
- 프로그램 코드의 일부 또는 전체를 변경하는 방법 중 하나로 , 코드의 가독성을 낮춰 역공학에 대한
대비책을 제공 방법
- 소프트웨어 난독화 목적
- 회사의 기술이 쉽게 복사되는 것을 막기 위함 , 불법적으로 침입하려는 프로그램 막기 위함
II. 소프트웨어 난독화 컴파일 과정 - - 난독화는 의미분석 이후 난독화 과정을 거처 컴파일 가능한 소스코드
를 생성함
요게 잘 안 떠오름 .. ^^
불명확화 ( 어퓨스케이션 ) 기법 적용
286

---

## Page 287

III. 난독화를 위한 기술 분류
난독화 기술 설명
- 배열 등에 담아 둔 String 등을 이용하여 , 포맷 변환을 통해서
Formatting Change
코드 분석을 어렵게 하는 방법
- String 형식의 주석문을 제거하여 Reversing 분석을 어렵게
Layout Remove Comments
만드는 방법
- 변수 , 식별자 등의 이름을 변경하여 , Reversing 분석을 어렵
Scramble Identifiers
게 만드는 방법
- 하나의 변수를 여러 개로 자르거나 정적 변수를 함수 호출
Storage
형식으로 변경하는 방법
Data
- 자료의 순서를 변환하는 방법으로 , 하나의 클래스를 두개
Aggregation
이상으로 분리하는 방법 .
287

---

## Page 288

III. 난독화를 위한 기술 분류
- 여러 Loop 를 나누거나 합치는 방법
Computation
Ordering - Loop Count 를 역순으로 사용하는 방법
Control
- Procedure Inline or Procedure Outline 을 이용 제어 흐름
Aggregation
의 순서를해석하기 어렵게 만드는 방법
- 알려진 역난독화 방법에 대해서 , 역난독화 프로그램이
Targeted
충돌 을 일으키게 만드는 방법
Preventive
Inherent - 역난독화 프로그램에 가짜 데이터를 반환하는 방법
288

---

## Page 289

III. 소프트웨어 난독화 기술의 분류
구분 설명 세부분류
형식변화
구획 난독화 변수를 난해한 단어로 바꿈으로서 역컴파일로 생성된
주석제거
(layout obfuscation) 소스코드를 읽기 어렵게 만드는 방법
식별자손상
Storage
데이터 난독화 데이터를 담을 변수를 나누거나 합치거나 읽기 어렵게 Aggregation
(data obfuscation) 하는 방향의 모든 기술 Ordering
Encoding
집합 난독화
순서를 이용해서 코드를 난독화 Actual
(aggregation
하나의 클래스를 두 개로 분할하여 난독화 Obfuscated
obfuscation)
Aggregation
제어를 어지럽게 하고 , 문장의 묶는 단위를
제어난독화 Ordering
조절하는 방법
computation
이미 알려진 역 난독화 방법을 알고 그 방법을 Targeted
예방난독화
봉쇄하는 방법 Inherent
289

---

## Page 290

IV. 소프트웨어 난독화 구획 난독화 예시
- 함수를 다른 명칭으로 변경하여 의미를 알아보지 못하게 함
290

---

## Page 291

Chapter VIII. SW 품질 표준 및 종합
1. 품질관리
2. ISO/IEC 9126
3. ISO/IEC 14598
4. ISO/IEC 12119
5. ISO 25000
6. ISO 12207
7. CMMi
8. SPICE
9. GS 인증
10. ISO 9000
11. Peer Review
12. Six Sigma
13. QA
14. TMMi
15. SP 인증
291
16. QC, 정보시스템 감리 , OSS, OSHW

---

## Page 292

소프트웨어 품질관리의 중요성
 자동차 원가의 40% 전장품  50% SW
292

---

## Page 293

1. 품질관리
VIII. SW 품질 표준 및 종합
기출문제
1. 웹 응용소프트웨어 개발을 위한 프레임워크 (Web Application Framework) 선정을 위한 품질평가체
리스트 항목을 설계하시오 .
( 관리 84 회 1 교시 )
2. 정보시스템 획득과 사용자 관점에서의 각종 품질요소에 대해 그들 간의 연관 관계에 대해 설명하시오 .
( 조직 83 회 4 교시 )
3. 소프트웨어 품질 평가 및 측정 기술에 대하여 다음 질문에 답하시오 .
가 . 품질평가 기술의 유형을 나열하고 비교 설명하시오 .
- SW 프로덕트 관점 , 프로세스 관점 (CMMI, SPICE)
나 . 각 유형별 대표적인 표준 또는 모델을 제시하고 설명하시오 .
다 . GS (Good Software) 인증은 이중 어느 유형에 속하며 무슨 모델 ( 표준 ) 을 따르고 있는지
설명하시오 .
( 관리 81 회 2 교시 )
4. 소프트웨어 프로젝트 품질보증의 일환으로 품질감사를 시행하려고 한다 .
가 . 프로젝트 감사활동을 위하여 소프트웨어 품질감사를 위한 전체 프로세스와 프로세스별 수행내용
을 제시하시오 .
나 . 시스템 구현단계의 감사대상의 되는 프로젝트 결과물 ( 산출물 ) 을 기술하시오 .
다 . 시스템 구현단계의 감사체크리스트를 만들기위한 check point 를 제시하시오 ( 관리 80 회 2 교시 )
293

---

## Page 294

1. 품질관리
VIII. SW 품질 표준 및 종합
기출문제
1. 소프트웨어 산업과 건설 , 자동차 , 의료 등 타 산업과의 융합이 확대됨에 따라 소프트웨어가 우리
생활 전 분야에 활용되고 있으며 , 안전한 소프트웨어의 구축에 대한 요구가 급증하고 있다 . 소프트웨어의
안정성 (Safety) 확보를 위한 국제 표준 규격 , 소프트웨어 안정성 평가 기법에 대해 설명하고 , 안전한
소프트웨어 개발을 보증하는 방법에 대해 설명하시오 .
( 관리 104 회 4 교시 2 번 )
294

---

## Page 295

1. 품질관리
VIII. SW 품질 표준 및 종합
I. 소프트웨어 품질의 개요
가 . 소프트웨어 품질의 정의
- 주어진 요구사항을 만족시키는 소프트웨어 제품의 특성과 생산성
나 . 소프트웨어 품질의 인식 배경
- 질적인 문제 : 납기 지연 , 고객 요구 불만족 , 과다한 유지보수
- 복잡도 증가 ( 시스템  거대화 , 고기능 )
- 종합적 품질보증 활동 필요성 , ISO 9000 - 3 품질관리 표준제정
다 . 소프트웨어 품질의 특성
- 품질은 상대적 개념 : 정량적 측정 어려움 , 상대에 따라 다름
- 품질은 여러 자원에 종속적 : 비용 , 시간 , 인력 , 도구 등
- 품질은 적정선에서 타협하는 것
- 품질 요소들은 서로 연관성을 가짐
라 . 소프트웨어 품질의 표준모델
구 분 종 류
SW 제품 품질 ISO 9126, ISO 14598, ISO 12119
SW 프로세스 품질 ISO 12207, CMMI, SPICE
품질 경영 Six Sigma, ISO 9000
295

---

## Page 296

II. 소프트웨어 품질관리의 개요
가 . 소프트웨어 품질관리의 정의
- 주어진 요구를 만족하는 제품 혹은 서비스의 질을 보존하는데 필요한 제반 기법과 활동
- SDLC 각 단계별 에러의 탐지 및 수정 ( 공정 )
나 . 소프트웨어 품질관리의 목적
- 기술지원에 대한 평가 : 적합한 기준선정 , SW 품질예측
- 자원에 대한 평가 : 적합한 자원 및 비용 산정
- 프로세스에 대한 평가 : SDLC 프로세스의 통제
- 제품에 대한 평가 : 인수시험 , 산출물평가 , 타제품과 비교 ( 패키지 도입 등 )
III. 소프트웨어 품질관리와 연관된 개념들
가 . 소프트웨어 품질관리의 체계
품질경영 구분 품질관리 품질경영
공급자 위주 구매자 위주
품질관리
단위 중심 시스템 중심
범위
생산현장중심 경영전략 차원
품질계획 품질보증 품질통제
구체적 / 각론 총괄적 / 총론
내용
생산 / 제품 중심 문화 / 구성원행동 중심
QM 계획수립  QA  QC - > QM
296

---

## Page 297

나 . 소프트웨어 품질관리의 연관개념
구분 개념
품질관리 계획수립
적용할 품질의 표준을 식별하고 적용할 방법을 결정하는 계획
(Quality Plan)
품질보증 소프트웨어 제품과 요구사항이 일치하는지의 검토를 제 3 자 입장에서
(Quality Assurance) 수행하는 작업 (Review, Inspection, Walk - through)
품질 통제는 품질 활동의 실행 결과를 감시하고 기록하면서 성과를
품질통제
(Quality Control)
평가하고 필요한 변경 권고안을 제시하는 활동
IV. 소프트웨어 품질관리의 문제점 및 개선방안
/* 2 교시형은 대표적인 품질 표준 삽입 하세요 */
가 . 소프트웨어 품질관리의 문제점
- 소프트웨어 품질 특성의 비 표준화로 인한 객관성결여
- 품질평가를 개발 완료 후 실시하므로 유지보수 비용증대와 생산성 저하
- 품질평가 점검항목이 개발자 중심이어서 사용자 요구의 충분한 반영이 어려움
나 . 소프트웨어 품질관리의 개선방안
- 표준화된 소프트웨어 품질특성을 기준으로 평가
- 제품중심보다 프로세스 중심의 품질관리를 통하여 개발 후 개선 및 위험 최소화
297

---

## Page 298

2. ISO/IEC 9126
VIII. SW 품질 표준 및 종합
I. SW 품질 특성과 품질평가의 Metrics 를 정의한 국제 표준 , ISO/IEC 9126 의 개요
가 . ISO/IEC 9126 의 개요
- 품질의 특성 및 척도에 대한 표준화 , - 품질보증을 위한 구체적 정의 필요
- 1980 년대 후반 ISO 에서 사용자 관점에서의 SW 품질특성의 표준화 작업 수행
나 . ISO 9126 의 내용
1) ISO 9126 - 1 : 품질특성 (6 개 ), 부특성 (21 개 )
- 구매 , 요구명세서 , 개발 , 사용 , 평가 , 지원 , 유지보수 , 품질보증 및 소프트웨어 감사 등과 관련된
사람들이 서로 다른 관점에서 소프트웨어 제품 품질을 정의하고 평가할 수 있도록 함
2) ISO 9126 - 2 : 외부메트릭
- S/W 완성단계의 측정 ( Executable Code, Tests Case run 등 )
- 소프트웨어가 사용될 때 외부적인 성질을 나타내는 것 으로 ,
소프트웨어의 최종제품에 대한 품질요구사항과 설계목표를 명세할 경우 적용 , - 사용자 및 관리자 관점
3) ISO 9126 - 3 : 내부메트릭
- S/W 개발단계의 측정 ( Source Code, 분석 document, Design Spec 등 )
- 내부적인 소프트웨어 속성을 기반으로 한 것으로 중간제품의 품질요구사항과 ,
설계목표 명세 시 적용
- SDLC 단계별 산출물 평가요인 항목들에 따른 측정표를 구축하여 평가
4) ISO 9126 - 4 : 사용 중 품질
- 사용상의 규정에 대하여 효율성 , 생산성 , 안전성 및 만족성의 규정 목표를 달성하는 소프트웨어 능력
- 사용되는 소프트웨어 환경에 대한 결과로부터 측정
298

---

## Page 299

II. ISO 9126 Quality Model
품질목표
품질특성
품질부특성
기능성 신뢰성 사용성 효율성 유지보수성 이식성
(Functionality) (Reliability) (Usability) (Efficiency) (Maintainability) (Portability)
기능 집합과 그 사양 명 시 된 조 건 하 에 서 명시적 또는 묵시적 명시적인 조건하에서 사양화된 개정을 처 임의의 환경에서 다
화된 내용을 실현하 명시된 기간 , 소프트 사용자가 사용을 위 소프트웨어 실행 레 리하기 위해 필요로 른 환경으로 소프트
는 특성의 집합으로 웨 어 의 실 행 레 벨 을 해 필요한 노력의 정 벨과 사용되는 자원 하는 노력을 나타내 웨어를 이식하기 위
서 명시적 또는 묵시 유지하기 위한 능력 도로 각각의 사용 결 양자간의 관계를 나 는 속성의 집합 한 속성의 집합
적 요구를 만족하는 을 만족하는 속성의 과에 의한 평가를 나 타 내 는 소 프 트 웨 어
속성 집합 집합 타내는 속성 집합 속성의 집합
• 적합성 • 성숙성 • 이해성 • 실행효율성 • 해석성 • 환경적응성
• 정확성 • 오류허용성 • 습득성 • 자원효율성 • 변경성 • 이식작업성
• 상호호환성 • 회복성 • 운용성 • 안정성 • 일치성
• 유연성 • 시험성 • 치환성
• 보안성
299

---

## Page 300

III. ISO/IEC 9126 품질 특성 상호관계
기능
기능성
신뢰성
상호배타효과
사용성
상호증진효과
효율성
유지보수성
효율
이식성
운영
유지보수
- 소프트웨어 품질 특성의 모든 요소들을 동시에 만족할 수 없으므로 Trade - off 유지 /* 참조만 하세요 */
[ 참고 ] 국제표준화기구 (ISO: International Standardization Organization ) 와 IEC
- 국제표준화기구 . 1946 년에 창설되어 국제간에 이용되는 규격으로 각국의 규격이 국제적으로 발전
IEC( 국제전기표준회의 ) 가 담당하는 전기분야 이외의 모든 분야에 관해 ISO 가 국제규격을 제정 .
- 국제전기표준회의 (IEC) International Electrotechnical Commission
300

---

## Page 301

IV. ISO/IEC 25010 – 호환성 , 보안성 추가 ( 출처 : KPC 특강 )
301

---

## Page 302

3. ISO/IEC 14598( 팔평 ) - 25041 개정
VIII. SW 품질 표준 및 종합
기출문제
1. ISO/IEC 14598 을 설명하시오 . ( 정보관리 95 회 1 교시 )
2. ISO/IEC 14598-1 에서 정의한 소프트웨어 제품 평가 (Software Product Evaluation) 에
대하여 설명하시오 . ( 컴퓨터시스템응용 96 회 2 교시 )
302

---

## Page 303

3. ISO/IEC 14598
VIII. SW 품질 표준 및 종합
I. 소프트웨어 제품 평가 프로세스 , ISO 14598 의 개요
가 . ISO 14598 의 정의
- 개발 중이거나 완성된 제품을 객관적이며 공정하게 평가하기 위한 방법 , 절차
- 소프트웨어 제품평가에 대한 국제적인 표준으로 ISO 9126 의 사용을 위한 절차와 기본 상황 및
소프트웨어 평가 프로세스에 대한 표준 규정한 국제 표준
- 소프트웨어 제품 평가에 대한 표준으로 품질 평가 절차를 “평가 요구사항 설정” , “ 평가명세” ,
“ 평가설계” , “ 평가수행” 등 4 단계로 구분
나 . ISO 14598 의 특징
특징 내용
- 어떤 하나의 제품에 대해 동일 평가자가 동일한 사양 ( 동일한 제품 , 동일한
반복성
평가명세 및 기준 , 동일한 측정 데이터 등 ) 에 따라 평가했을 때 동일한
( Repeatability)
것으로 간주할 수 있는 결과가 도출되어야 함
- 어떤 하나의 제품에 대해 다른 평가자가 동일한 제품 , 동일한 평가명세 및
재생산성
기준에 의해 다른 데이터로 측정했을 때 동일하다고 여겨질 수 있는 결과가
(Reproducibility)
발생하여야 함
- 평가가 특정결과에 편향되지 않음 . 즉 , 목적의식을 갖고 평가결과를 임의로
공평성 (Impartiality)
유도하여서는 안됨 .
- 평가결과가 평가자의 가정이나 사견에 의해 영향을 받지 않아야 함 .
객관성 (Objectivity)
- ISO 9126 시리즈에 규정한 표준 준수
303

---

## Page 304

3. ISO/IEC 14598
VIII. SW 품질 표준 및 종합
II. ISO/IEC 14598 의 구성
구성 내용
- General Overview
ISO 14598-1
- 14598 시리즈 전체와 ISO/IEC 9126 품질 모델과 관계 설명
- Planning & Management
- 제품 품질 측정 계획의 준비와 구현 뿐만 아니라 제품 평가 기능의 관리를
ISO 14598-2
위한 전체적인 계획 수립
- 소프트웨어 제품 평가를 위한 지원 기능의 역할에 대한 권고 및 지침
- 개발자 를 위한 프로세스 제공 / - Process for Developers
ISO 14598-3
- 소프트웨어 개발단계에서 개발자가 준수해야 할 내용에 대한 표준
- 구매자 를 위한 프로세스 제공 / - Process for Acquirers( 획득자 프로세스 )
ISO 14598-4 - Off-the-Shelf 소프트웨어 및 기존 소프트웨어 수정에 관하여 구매자가
준수해야 할 내용에 대한 표준 (ISO 12207 의 구매절차와 연계하여 수행 )
ISO 14598-5 - 평가자 를 위한 프로세스 제공 / - Process for Evaluators
- 평가 모듈 문서화 / - Documentation of evaluation
ISO 14598-6
modules
304

---

## Page 305

3. ISO/IEC 14598
III. ISO/IEC 9126 과 14598 국제 표준 관계
평가할 자원 및 환경
305

---

## Page 306

3. ISO/IEC 14598
[ 참고 ] SW 품질 평가 방법 모델이 14598 에서 25041 로 변경
Evaluation guide for developers, acquirers and independent evaluators: contains specific
requirements and recommendations for developers, acquirers and independent evaluators .
1. ISO/IEC 25040 is a revised version and replaces ISO/IEC 14598 - 1.
2. ISO/IEC 25041 is a revised version and replaces ISO/IEC 14598 - 3, ISO/IEC 14598 - 4 and
ISO/IEC 14598 - 5.
306

---

## Page 307

4. ISO/IEC 12119 -> 25051 개정
VIII. SW 품질 표준 및 종합
기출문제
1. 오픈 소스 소프트웨어 (Open Source Software : OSS) 를 설명하고 ISO/IEC 9126 및
ISO/IEC 12119 의 방식에 의한 OSS 의 품질 평가방법을 설명하시오 .
307

---

## Page 308

4. ISO/IEC 12119( 구패요시 )
VIII. SW 품질 표준 및 종합
I. Software Packages-Quality Requirements and Testing, ISO/IEC 12119 의 개요
가 . ISO/IEC 12119 의 정의
- SW 패키지 제품에 대한 , 품질 요구 사항 및 시험을 위한 국제 표준
- ISO/IEC 9126 의 품질 모델을 기반으로 하여 소프트웨어 제품품질 요구사항 및 테스팅 절차를 규정한
ISO/IEC 12119(Software Packages - Quality Requirements and Testing )
나 . ISO/IEC 12119 품질 평가 대상
평가대상 내용
패키지 소프트웨어 패키지 SW 제품 문서 , 사용자 문서 실행 프로그램에 대한 명시된 요구사항
소프 트웨어 패키지
최종 제품과 중간 산출물
수주개발 SW
패키지 Critical
최종 제품 + 개발 / 유지 보수 과정
수주 개발 SW
308

---

## Page 309

II. ISO 12119 평가 대상 및 평가 절차
가 . ISO 12119 평가 대상
평가대상 설명
오픈 소스 소프트웨어 패키지의 속성을 설명하는 문서에 대한 평가
오픈 소스 소프트웨어를 잠재적 사용자에게 적용가능 여부를 판단할 수 있도록
제품설명서
제품에 대한 정보를 정확하게 전달하기 위해 명시
제품에 대한 기능별 특징 , 능력 , 한계 사항에 대한 명시 여부
오픈 소스 소프트웨어를 선택한 사용자에게 소프트웨어 사용에 대한 모든 정보를
제공하기 위한 문서
사용자문서
작업 수행 방법 및 유지보수 등에 관한 설명이 정확하고 자세하게 제공
실제 오픈 소스 소프트웨어를 실행할 수 있도록 명확하고 상세하게 기술
실행프로그램
309

---

## Page 310

나 . ISO/IEC12119 평가 절차
절차 설명
제품 설명서 시험 제품 설명서에 관한 요구사항 , 권고 사항의 수행에 대한 시험
사용자 문서 시험 사용자 문서에 관한 요구사항 , 권고사항의 수행에 대한 시험
실행 프로그램 시험 Program, Data 에 관한 요구사항 , 권고사항에 대한 시험
시험기록 시험 반복하기 , 충분한 정보를 포함한 기록 작성
시험 보고서 작성 시험의 목적과 결과 요약
310

---

## Page 311

III. 제품 설명서 에 대한 SW 품질 요구사항 세부 측정 항목
311

---

## Page 312

( 갱신 )
ISO/IEC 25051:2014
Software engineering –
Systems and software Quality Requirements and Evaluation (SQuaRE) –
Requirements for quality of Ready to Use Software Product (RUSP) and instructions for testing
• quality requirements for Ready to Use Software Product (RUSP);
• requirements for test documentation for the testing of RUSP, including test plan, test description,
and test results;
• instructions for conformity evaluation of RUSP.
• ISO/IEC 25000 으로 확장되고 있음
312

---

## Page 313

5. ISO/IEC 25000
VIII. SW 품질 표준 및 종합
기출문제
1. 소프트웨어 품질평가 표준인 SQuaRE 프레임워크 (ISO/IEC 25000) 에 대하여 다음 질문에 답하시오 .
(1) SQuaRE 프레임워크가 대체하려는 기존 표준을 나열하여 설명하시오 .
(2) SQuaRE 프레임워크의 구조를 설명하시오 .
(3) SQuaRE 프레이워크의 각 Division 별 표준화 내역을 설명하시오 .
( 정보관리 92 회 2 교시 )
313

---

## Page 314

5. ISO/IEC 25000
VIII. SW 품질 표준 및 종합
I. 소프트웨어 품질평가 통합 표준 , ISO/IEC 25000 ( SQuaRE ) 의 개요
가 . 배경
- S/W 제품 품질모델 / 특징 (ISO9126), SW 제품 품질 평가지침 (ISO14598) ,
SW 패키지 제품 품질 요구 및 시험 (ISO12119) 를 하나로 통일 하고자 함
- 이러한 표준문서들이 서로 다른 시리즈 번호로 이루어져있어 사용자에게 혼란을 줄 수 있으며 ,
품질 요구 명세부터 품질 판정에 이르기까지 일관된 표준 지침서가 필요
나 . 정의
- SW 개발 공정 각 단계에서 산출되는 제품이 사용자 요구를 만족하는 지 검증하기 위해
품질 측정과 평가를 위한 모델 , 측정기법 , 평가방안에 대한 국제표준
- SQuaRE (Software product Quality Requirements and Evaluation)
314

---

## Page 315

5. ISO/IEC 25000
VIII. SW 품질 표준 및 종합
II. SQuaRE 프레임워크 구조 및 Division 구성요소
가 . SQuaRE 프레임워크 구조
- 개별적으로 관리하던 SW 제품 품질을 2005 년부터 이들 표준을 대체하고 보다 체계적인 소프트웨어
제품 품질 평가 표준 군 (Series) 을 한 틀 (Framework) 로서 작성하려는 시도가 SQuaRE 프레임워크
프로젝트로 진행
나 . SQuaRE 프레임워크 Division 구성 요소
구성요소 설명
Software Quality Requirement 소프트웨어 품질 요구사항 설정 프로세스
Software Quality Model 소프트웨어 품질 모델 제시
Software Quality Management 소프트웨어 품질 관리 지침 정의 ( 가이드라인과 품질평가의 관
리에 관한 표준 제시 )
Software Quality Measurement 소프트웨어 품질 측정 Metrics 정의
Software Quality Evaluation 소프트웨어 품질 평가 정의 및 지침
315

---

## Page 316

5. ISO/IEC 25000
VIII. SW 품질 표준 및 종합
III. SQuaRE 향후 전망
- 통합 계정 안은 현재 2007 년 까지 완료를 목표로 하고 있음
- 품질요구 부분은 완전히 새로운 문서 로서 SW 제품에 대한 품질요구 명세를 표준화하기 위한
작업으로 용어들과 개념에 대한 많은 논란과 시간이 소요함 .
- 복잡성 제거 : 소프트웨어 품질 평가에 대한 표준 문서들이 서로 다른 시리즈 번호 (9126,14598,12119) 로
이루어져 혼란한 이슈 제거 판단
- 통합 프레임워크 : 품질요구 명세부터 품질 평가에 이르는 일관된 표준 지침 제공
316

---

## Page 317

6. ISO 12207
VIII. SW 품질 표준 및 종합
기출문제
1. 국가표준으로 제정된 소프트웨어 발주관리 프로세스 에 대하여 다음 질문에 답하시오 .
가 . 발주관리 프로세스의 핵심 수명주기 프로세스를 나열하고 설명하시오 .
나 . 핵심 수명주기 프로세스 중 발주 프로세스의 단계를 나열하고 단계별 활동을 설명하시오 .
다 . 핵심 수명주기 프로세스 중 공급 프로세스의 단계를 나열하고 단계별 활동을 설명하시오 .
( 관리 81 회 4 교시 )
2. ISO 12207 국제 표준 중에서 지원 프로세스에 대해 설명하시오 .
( 관리 87 회 1 교시 )
317

---

## Page 318

6. ISO 12207
VIII. SW 품질 표준 및 종합
I. 소프트웨어 프로세스에 대한 표준화 , ISO 12207 의 개요
가 . ISO 12207 의 정의
- 체계적인 소프트웨어 획득 , 공급 , 개발 , 운영 및 유지보수를 위해서 소프트웨어 생명주기 공정
(SDLC Process) 표준을 제공함으로써 소프트웨어 실무자들이 개발 및 관리에 동일한 언어로 의사
소통할 수 있는 기본틀을 제공하기 위한 프로세스
나 . ISO/IEC 12207 등장배경
- ISO 9000 - 3 , ISO 9001 , ISO 9126 에서 품질시스템 요구사항 , 품질특성 , S/W 품질보증에 대해서
언급되었으나 S/W 프로세스 평가모델은 제시되지 못했음
- 소프트웨어 규모가 거대해지고 , 사용자의 요구가 다양해짐
- 생명주기의 체계적 접근방법에 대한 필요성 인식
다 . ISO 12207 의 특징
- 다양한 형태의 소프트웨어 개발 및 관리에 적용될 수 있는 공정 (Process), 활동 (Activity) 및
세부업무 (Task) 의 정의
- 산출물명칭 , 형식 , 내용 규정하지 않음
- 특정생명주기 , 개발방법 규정하지 않음 ( 즉 What 만 정의 )
- 조달자 , 공급자 역할을 분명히 정의하여 양자간 계약에 따른 조달에 적합하도록 개발됨
- 상위수준에서 정의되어 전문지식이 부족한 일반적인 실제심사에서 사용하기 어려움
- SPICE 는 ISO/IEC 12207 의 기본 틀에 맞추어 개발되고 확장됨
318

---

## Page 319

II. ISO 12207 의 생명주기 프로세스
가 . 기본 생명주기 프로세스
프로세스 내 용
시스템 , 소프트웨어 제품 또는 소프트웨어 서비스를 획득하는 획득자 또는 획득조직이 수행
획득 (acquisition)
할 활동을 정의
시스템 , 소프트웨어 제품 또는 소프트웨어 서비스를 공급하는 공급자 또는 공급조직이 수행
공급 (supply)
할 활동을 정의
소프트웨어 제품을 정의하고 개발하는 개발자 또는 개발조직이 수행할 활동을 정의
개발 (development)
사용자를 위하여 실제 환경에서 컴퓨터 시스템의 운영 서비스를 제공하는 운영자 또는 운영
운영 (operation)
조직이 수행할 활동을 정의
소프트웨어 제품의 유지보수 서비스를 제공하는 유지보수자 또는 유지보수조직이 수행할
유지보수 (maintenance)
활동을 정의
나 조직 생명주기 프로세스
프로세스 내 용
기반구조 (infrastructure)
생명주기 프로세스 기본구조를 확립하기 위한 기본 활동을 정의
관리 (management)
생명주기 프로세스 동안 프로젝트 관리를 포함한 기본적인 관리활동을 정의
개선 (improvement)
조직 ( 즉 , 획득자 , 공급자 , 개발자 , 운영자 , 유지보수자 또는 다른 프로세스의 관리자 )
생명주기 프로세스의 확립 , 측정 , 통제 , 개선을 위하여 수행하는 기본활동을 정의
훈련 (training)
적절하게 훈련된 요원을 제공하기 위한 활동을 정의
319

---

## Page 320

II. ISO 12207 의 생명주기 프로세스 ( 계속 )
다 . 지원 생명주기 프로세스
프로세스 내 용
문서화 (documentation) 생명주기 프로세스에 의하여 산출되는 정보의 기록을 위한 활동 정의
품질보증 소프트웨어 제품 및 프로세스가 명시된 요구사항에 적합하며 이미 수립된
(quality assurance) 계획에 따르고 있음을 객관적으로 보증하기 위한 활동을 정의
형상관리 (config. Management) 구성관리 활동을 정의
소프트웨어 프로젝트에 따라 다양한 깊이로 소프트웨어 제품을 검증하기 위한 ( 획득
검증 (verification)
자 , 공급자 또는 독립조직을 위한 ) 활동을 정의
소프트웨어 프로젝트의 소프트웨어 제품을 확인하기 위한 ( 획득자 , 공급자
확인 (validation)
또는 독립조직을 위한 ) 활동을 정의
문제해결 개발 , 운영 , 유지보수 또는 다른 프로세스 활동 수행 중 발견된 부적합사항을 포함한
(problem resolution) 문제점을 분석 , 제거하기 위한 프로세스를 정의
합동검토 (joint review) 활동의 상태 및 제품을 평가하기 위한 활동을 정의
감사 (audit) 요구사항 , 계획 및 계약에 대하여 적합성을 결정하기 위한 활동 정의
320

---

## Page 321

7. CMMI
VIII. SW 품질 표준 및 종합
기출문제
1. CMMI 의 Continuous Model & Staged Model
( 조직응용 84 회 1 교시 )
2. 소프트웨어 품질 평가 및 측정 기술에 대하여 다음 질문에 답하시오 .
가 . 품질평가 기술의 유형을 나열하고 비교 설명하시오 .
- SW 프로덕트 관점 , 프로세스 관점 ( CMMI , SPICE)
나 . 각 유형별 대표적인 표준 또는 모델을 제시하고 설명하시오 .
다 . GS(Good Software) 인증은 이중 어느 유형에 속하며 무슨 모델 ( 표준 ) 을 따르고 있는지 설명하시
오 .
( 관리 81 회 2 교시 )
3. CMM 과 CMMI(Capability Maturity Model Integration)
( 조직응용 75 회 1 교시 )
4. 소프트웨어 테스트 프로세스 성숙도 평가모델 TMMi (Test Maturity Model Integration) 와 시스템개
발 프로세스 성숙도 평가모델 CMMi (Capacity Maturity Model Integration) 는 5 레벨의 단계적 평
가 프레임워크이다 , TMMi 모델과 CMMi 모델을 각각 설명하시오 .
[ 컴퓨터시스템응용 96 회 2 교시 )
321

---

## Page 322

7. CMMI
VIII. SW 품질 표준 및 종합
기출문제
5. CMMI(Capability Maturity Model Integration) 는 조직의 프로세스 개선 활동을 효율적으로 지원
하기 위한 모델이다 . 다음 물음에 답하시오 .
(1) CMMI 표현 방법중 단계적 표현 방법과 연속적 표현 방법을 비교 설명하시오 .
(2) CMMI 의 단계적 표현방법에서의 모델 구성 요소에 대해 설명하시오 .
(3) 통계적 프로세스 관리에 사용되는 대표적인 도구인 파레토 차트 , 산점도 , 관리도에 대해 설명하시
오 .
( 조직응용 84 회 1 교시 )
6. CMMI(Capability Maturity Model Integration ) ( 컴시응 107 회 1 교시 )
CMMI v1,3 (2010.10.28 일 공표 )
기존 CMMI 를 3 개 모델로 나눔
CMMI for Acquisition : http://www.sei.cmu.edu/library/abstracts/reports/10tr032.cfm
CMMI for Development : http ://www.sei.cmu.edu/library/abstracts/reports/10tr033.cfm
CMMI for Services : http://www.sei.cmu.edu/library/abstracts/reports/10tr034.cfm
출처 : http://cafe.naver.com/81th/27085
322

---

## Page 323

7. CMMI
VIII. SW 품질 표준 및 종합
323

---

## Page 324

7. CMMI
VIII. SW 품질 표준 및 종합
I. CMM 모델을 포괄한 품질개선모델 , CMMI 의 개요
가 . CMMI(Capability Maturity Model Integration) 의 정의
- 카네기 멜론대학 소프트웨어 공학연구소 ( SEI:Software EngineeringInstitute ) 가 개발한
여러 CMMI 모델 (3 가지 ) 를 포괄하는 , SW 개발 능력 및 성숙도에 대한 평가와 지속적인 품질 개선 모델
나 . CMMI 의 특징
- CMMI 는 여러 CMM 모델의 가장 효과적인 특성 및 공통 요소를 포함하면서 , 이들이 지원하는 분야
에서 공통적으로 사용될 수 있는 용어 및 교육을 제공하며 , 또한 통합된 평가 방법 (SCAMPI) 을 제공
- CMMI 는 시스템 공학과 소프트웨어 공학의 기능적 통합에 중점을 두고 있으며 , 통합된 제품을
개발하기 위한 기반을 제공
- 다른 분야로의 확장이 가능한 구조를 가짐 .
[ 참고 ]
• 미국 정부는 CMMI 인증을 IT 사업자 선정 시 평가의 한 요소로 도입하고 , 인증획득 기업에 가산점을
부여하는 제도를 도입했는가 하면 , 98 년 11 월부터는 IT 프로젝트 참여 자격을 CMM Level 3 이상
으로 제한하는 것을 국방성의 획득관리 규정에 명시함 .
• CMM 은 SEI 에서 2005 년 까지만 지원하며 이후는 CMMI( 현재 V1.3) 로 통합
324

---

## Page 325

7. CMMI
VIII. SW 품질 표준 및 종합
다 . CMMi 의 구성
CMMI 모델 설명
- CMMI for Acquisition
CMMI -ACQ
- 시스템 , 서비스 조달 , 획득 역량 성숙도 평가 모델
- CMMI for Development ( 일반적으로 말하는 “ CMMI ” )
CMMI-DEV
- 시스템 및 S/W, 서비스 개발 역량 성숙도 평가 모델
- CMMI for Service
CMMI-SVC
- 서비스 제공 및 관리 역량 성숙도 평가 모델
325

---

## Page 326

II. CMMI 의 종류
Staged ( 단계적 표현 ) Rep. Model Continuous Representative( 연속적 표현 )
- 조직의 비즈니스 목적을 충족시키고 , 위험 요소
- 가장 기초적인 관리 절차로부터 상위 수준으로 향상
를 완화시키는데 중요한 개선 사항의 순서를
되기 위해 필요한 실무까지 수행되어야 할 프로세스
정하여 적용 시킬 수 있음 .
영역들을 단계별로 제시
- 특정 프로세스 영역에 대한 조직간의 비교가
- 널리 입증된 순서에 따른 체계적인 개선 활동 제공 .
가능 .
- 성숙도 (Maturity) 수준을 이용한 조직간의 비교가
- Capability Level 을 이용하여 프로세스 영역
가능
(PA) 별로 성숙도 평가 가능
- 조직에 대한 평가 결과를 요약해주며 조직간 비교를
- ISO/IEC 15504 (SPICE Model) 과 유사한 구조
가능하게 하는 단일한 등급체계를 제공
를 가지고 있어 , 이를 기반으로 프로세스 개선
- SW-CMM 과 유사한 모델로서 SW - CMM 에서
모델과의 비교 용이 .
CMMI 로의 이동이 용이 .
Capability
5
ML5
ML: Maturity Level
각 단계는
4
다음 단계의 기반
ML4
3
ML3
2
ML2
1
ML1
Process
0
PA PA
PA PA
Organization
326

---

## Page 327

Continuous Representative( 연속적 표현 )
구분 Staged ( 단계적 표현 ) Rep. Model
Process
Maturity Level 로 그룹화 Capability Level 로 그룹화
Area
예제모델 SW-CMM( 단계적 표현 ) SE-CMM( 연속적으로 표현 )
성숙도평가 1-5 단계 0-3 단계
- 성숙도 수준으로 조직간 비교 모델 - 능력 수준을 프로세스에 적용
- 단일등급체계 평가 결과이므로 이해 - 해당 프로세스 영역의 능력 수준을 결정
특징
하기 쉬운 프로세스 개선 결과 제시 하므로 프로세스 개선에 유연한 접근 방식
- 입증 순서로 개선 활동 제공 - 우선순위 기준 능력 수준 개선 가능
“ 개별 프로세스 영역별 평가를 통해
“ 기 정의된 프로세스 집합의 평가를 통해
개별 프로세스 영역별 능력을 알 수 있음”
조직 전체의 프로세스 능력을 알 수 있음 ”
불수관정
초관정량최
327

---

## Page 328

III. CMMI 22 PAs(Process Areas): CMMI-DEV Model 의 PA - 피피에스
구분 Process Mgmt Project Mgmt Engineering Support
정통위
Level 5
〮 조직성과관리 〮 원인분석 및 해결
(Optimizing)
라고 암기
Level 4
〮 조직프로세스 〮 정량적
(Quantitatively
성과관리 프로젝트관리
엔은
Managed)
모두 3
〮 조직프로세스
〮 제품통합
정 의
〮 통합프로젝트관리 〮 요구사항 개발 〮 의사결정 분석 및
Level 3 〮 조직 프로세스
〮 기술 솔류션 해결
(Defined) 중 점 (Focus)
〮 위험관리 〮 확인 〮 측정 분석
〮 검증
〮 조직 ( 교 육 ) 훈련
〮 프로젝트 감시 및
〮 형상관리
성프정주교
통제
Level 2
5 - 4 - 3
〮 프로젝트 계획
(Managed) 〮 프로세스 및
〮 요구사항관리
제품품질 보증
〮 공급자 계약관리
[ 참고 ] 프로세스의 능력 수준 (capability level) 은 총 3 단계 - (0) Incomplete, (1) Performed, (2)
Managed, (3) Defined - 로 측정된다 . 능력 수준은 각 PA 에 제시되어 있는 specific goals 와 generic
goals 의 달성 정도에 따라 결정된다 . 예를 들어 , 해당 PA 의 specific goals 과 generic goals 가 능력 수준
2 까지 달성되면 , 그 조직의 해당 PA 는 능력 수준 2 에 이르게 된다 .
328

---

## Page 329

III. CMMI 22 PAs(Process Areas): 초관정관최 (Development Model 경우 )
[ 참고 ] 현재 CMMi Version
329

---

## Page 330

III. CMMI 22 PAs(Process Areas): CMMI-DEV Model 의 PA
구분 Process Mgmt Project Mgmt Engineering Support
Organizational
Level 5 Causal Analysis and
Performance
Resolution (CAR)
(Optimizing)
Management (OPM)
Level 4
Organizational
Quantitative Project
Process Performance
(Quantitatively
Management (QPM)
(OPP)
Managed)
Organizational Product Integration
Process Definition (PI)
Decision Analysis
(OPD) Integrated Project Requirements
and Resolution
Management (IPM) Development (RD)
Level 3
(DAR)
Organizational
(Defined)
Process Focus (OPF) Risk Management Technical Solution
Measurement and
(RSKM) (TS)
Analysis (MA)
Organizational Validation (VAL)
Training (OT) Verification (VER)
Project Monitoring
and Control (PMC)
Configuration
Project Planning (PP)
Management (CM)
Level 2
Requirements
Process and Product
Management
(Managed)
Quality Assurance
(REQM)
(PPQA)
Supplier Agreement
Management (SAM)
330

---

## Page 331

IV. 프로세스 영역 (PA) 을 만족시키기 위해 조직 에서 반드시 달성해야 하는 요소
• 일반 목적
• 특정 목적
Generic Goal 이란 ?
Specific Goal 이란 ?
프로세스의 제도화를 기술함
- 특정 프로세스
프로세스영역
해당 프로세스가 조직에
영역 수행의 목표
내재화되어 있는지 판단하는
( 예 ) 프로젝트
데 도움을 줌 .
계획수립
Specific Goal Generic Goal
모든 프로세스 영역에 공통적인
목표로 포함됨
( 예 ) Specific Goal 충족
Specific Generic
Practices Practices
• 일반 프랙티스
• 특정 프랙티스
Generic Practice 란 ?
Specific Practice 란 ?
효율적인 프로세스가 지속될 수
Specific Goal 을 충족시키기 위한
있도록 프로세스를 제도화하는
중요한 활동으로 조직이 수행해야 할 작업
practice
( 예 ) 견적수립 , 작업산출물
( 예 ) Commitment to perform
Ability to perform
331

---

## Page 332

V. CMMI 의 이전
가 . CMMI 의 전환 전략
단계 내용
관련 조직간 컨센서스 확보
경영진의 의지 및 지원 확인
1 전환 착수 및 현상 분석
조직의 스킬 및 현재의 Process 상태 분석
준비상태 확인 및 위험요소 분석
조직차원의 전환계획 수립
2 계획수립
- 부서별 담당자 지정 및 전환 방법론 개발
이행 계획수립
3 이행 / 모니터링 부서원 교육 및 이행
이행 데이터 분석 , 모니터링 , 감사
4 점검 및 조정 전환 결과의 분석 및 분석결과 공유
나 . CMMI 로 전환 시 고려사항
- SW - CMM v1.1 을 도입하고 있는 조직은 자연스럽게 CMMI 로 전환이 가능
- 전환대상 조직의 성격 , 업무목표 , 업무영역이 전환에 적합한 조직인지 파악
- 프로세스 개선을 통해 얻고자 하는 목표의 명확화
- 전환에 따른 위험요소의 사전식별 , 분석 및 대책 수립
332

---

## Page 333

V. CMMI 프로세스 개선 로드맵 사례
[ 문제 ]
기업의 Level 3 인증 획득하기 위한 로드맵과 추진 방법을 기술하시오 ?
풀이 예 )
- 우선 전사기준의 CMMi Level 2 인증 후 , 특정 PA 에 대한 Continuous Model 적용을
통한 Level 3 인증 획득
- 1 차 , 2 차 각 단계별 Level 획득을 위한 Roadmap 작성
- 추진방법론
표준프로세스정립 - > 프로세스개선 조직역량 강화 - > 표준프로세스 내재화 - > CMMi 확산기반구축
사례 예 )
- CMMI( 통합 프로세스 성숙도 모델 ) 인증은 이지케어텍의 주요 고객사이트 중 하나인 분당서울
대학교병원을 대상으로 13 개월 간 이 회사가 수행하고 있는 IT 프로세스 및 서비스 개선활동에
관련된 7 개 프로세스 250 여 개 항목에 대해 심사를 받아 인증을 획득
- SW 개발 , 시스템 설계 , 시스템 운영 등 전반적인 IT 역량을 측정하는 품질인증 모델로 의료 IT
부문에서는 이지케어텍이 국내 최초로 획득
333

---

## Page 334

K-Model
VIII. SW 품질 표준 및 종합
[K 모델 ]
가 . K 모델의 정의
- 국내 소프트웨어 품질 경쟁력을 강화하고자 소프트웨어 개선 활동의 내재화 방안을 마련하기 위한 ,
국제 모델 기반의 한국형 소프트웨어 프로세스 개선 모델
나 . K 모델의 필요성
1) 소프트웨어 품질 경쟁력 제고를 위한 소프트웨어 개선 활동의 내재화 방안 마련
2 ) 국제 표준 및 해외시장표준과 부합 가능한 소프트웨어 개선 프로세스 모델 필요
3 ) 소프트웨어 프로세스 개선활동 활성화 방안 필요
334

---

## Page 335

PSP/TSP
I. 소프트웨어의 개발 성능을 높이기 위한 PSP/TSP 의 개요
가 . 등장배경
- CMM 은 개발조직의 역량강화를 위해 ‘무엇’을 해야 하는지에 대해서 제시 목적
나 . PSP/TSP(Personal Software Process / Team Software Process) 의 정의
1) PSP : 소프트웨어 개발성능을 높이기 위하여 개발 및 설계 엔지니어가 지키고 , 개선할 소프트웨어
개발 프로세스
2) TSP : 개발 성능을 높이기 위하여 개발팀이 지켜야 할 소프트웨어 개발 프로세스
PSP 로 훈련된 3 명 ~15 명의 소프트웨어 공학팀을 위한 프로세스로서 소프트웨어개발 , 개선 및
수정을 위하여 독립적인 지휘능력을 갖춘 interdisciplinary 팀이 통계적 프로세스제어를 행하는
프로세스
개발자들은 PSP 수행을 통해 개인 개발 능력을 향상시키고 TSP 수행을 통해 팀 단위의 소프트웨어 개발
에 필요한 다양한 절차와 활동들을 익힐 수 있다 . 이러한 PSP 개발자와 TSP 팀들은 CMMI/CMM 조직
레벨에서의 프로세스 개선을 가능케 하는 기반이 됨
335

---

## Page 336

8. SPICE
VIII. SW 품질 표준 및 종합
기출문제
1. SW 품질평가 요소를 운영 , 수정 , 적용 측면에서 구분하여 기술하고 품질 향상을 위한 방법론 들에
대하여 논하시오 .
( 관리 74 회 3 교시 )
2. 소프트웨어 품질 평가 및 측정 기술에 대하여 다음 질문에답하시오 .
가 . 품질평가 기술의 유형을 나열하고 비교 설명하시오 .
- SW 프로덕트 관점 , 프로세스 관점 (CMMI, SPICE)
나 . 각 유형별 대표적인 표준 또는 모델을 제시하고 설명하시오 .
다 . GS(Good Software) 인증은 이중 어느 유형에 속하며 무슨 모델 ( 표준 ) 을 따르고 있는지 설명하시오 .
336

---

## Page 337

8. SPICE
VIII. SW 품질 표준 및 종합
I. SW 프로세스 품질 표준 - ISO/IEC 15504 , SPICE 개요
가 . SPICE (Software Process Improvement and Capability dEtermination ) 의 정의
- 여러 프로세스 개선모형을 국제표준으로 통합한 ISO 의 소프트웨어 프로세스 모형
- SEI 의 CMM, Bell 의 TRILLIUM, Esprit 의 BootStrap 등의 통합
- 소프트웨어 프로세스에 대한 개선 및 능력 측정 기준
나 . SPICE 의 등장배경
- ISO 9000 - 3 이 SW 분야 특성 및 프로세스적인 면을 개선하지 못해 등장
- What 만 있고 , How 가 없는 12207 단점 해결
다 . SPICE 의 기본목표
 프로세스별 성능수준의 제시
 구체적인 향후 개선 방향 제시
목 표
＋
S/W 프로세스 개선 S/W 프로세스 수행능력수준 판단
337

---

## Page 338

II. SPICE 의 2 차원 평가모델
2 차원의 평가 모델을 기준
프로세스 차원 (Process Dimension)
- 5 개의 프로세스 카테고리와 40 개 세부 프로세스로 구성
- ISO 12207 의 소프트웨어 생명주기 프로세스를 기반으로 함
- 각 프로세스별로 목적을 달성하기 위한 기준이 제시됨
프로세스 수행능력 차원 (Process Capability Dimension)
- Organization Unit(OU: 수행조직 단위 ) 이 특정 프로세스를 달성하거나 혹은 달성
목표로 가능한 능력 수준
- 0 ∼ 5 까지의 6 개의 Capability Level 로 구성됨
CL5
차원
CL4
CL3
프로세스 차원 (Process Dimension)
CL2
수행능력
- 5 개의 프로세스 범주
- 24 개의 top - level 프로세스
CL1
Dimension)
- 16 개의 second - level 프로세스
CL0
(Ver. 3.3)
프로세스 (Process Capability
Pn
P1 P2 P3 P4
......
338

---

## Page 339

가 . 프로세스 차원의 5 개의 프로세스 범주
기초 프로세스 지원 프로세스
CUS 고객 - 공급자
(Customer-Supplier)
인수 , 공급 , 요구도출 , 운영
SUP 지원 (Support)
문서화 , 형상 , 품질보증 , 검증 / 확인 ,
Review, 감사 , 문제해결
ENG 공학 (Engineering)
시스템과 소프트웨어 개발 / 유지보수
조직 프로세스
ORG 조직 (Organization)
MAN 관리 (Management)
조직배치 , 개선활동 , 인력관리 ,
프로젝트관리 , 품질관리 , 위험관리
측정도구 , 재사용
339

---

## Page 340

나 . 프로세스 수행능력 차원의 6 단계 - 불수관확예최
최적화 단계
5
프로세스의 지속적인 개선
Optimizing
예측 단계
프로세스의 정량적 이해 및 통계
4
Predictable
확립 단계
표준 프로세스의 사용
3
Established
관리 단계
프로세스 수행 계획 및 관리
2
Managed
수행 단계
프로세스의 수행 및 목적달성
Performed 1
불안정 단계
미구현 또는 목표 미달성
0
Incomplete
340

---

## Page 341

다 . 프로세스 수행능력별 프로세스 속성
능력
프로세스 속성 수준에 따른 내용
프로세스의 변경과 개선이 식별되고 구현되는 정도
PA5.2 계속적 개선 속성
수준 5
PA5.1 프로세스 변경 속성
프로세스의 변경이 조직 업무 목적 달성을 위해 더 잘 통제되는 정도
척도 수집과 분석을 통해 프로세스가 통제되는 정도
PA4.2 프로세스 통제 속성
수준 4
목적 달성에 기여하는 것을 확인할 수 있도록 목적과 척도를 사용하는
PA4.1 프로세스 측정 속성
정도
적절한 인력 자원과 프로세스 하부구조를 사용하는 정도
PA3.2 프로세스 지원 속성
수준 3
프로세스가 조직 표준 프로세스에 기반을 둔 프로세스 정의를 사용하는
PA3.1 프로세스 정의 속성
정도
요구 사항을 만족하는 작업 산출물 생산을 위해 프로세스가 관리되는 정도
PA2.2 작업 산출물 관리 속성
수준 2
시간과 자원 요구 한도 내에서 산출물 생산을 위해 프로세스가 관리되는
PA2.1 수행 관리 속성
정도
프로세스 목적에 만족하는 산출물 생산을 위해 프로세스 수행 시
수준 1
PA1.1 프로세스 수행 속성
Practices 를 사용하는 정도
341

---

## Page 342

III. SPICE 의 프로세스 Rating 방법
1) Base Practice 와 Process Attribute
- Base Practice (BP) : 프로세스 차원을 구성하는 각각의 프로세스
- Process Attribute (PA) : 모든 프로세스에 적용할 수 있는 능력 지표로서 , 9 개의 PA 가 있음
- 프로세스 수행능력 차원을 구성함
2 ) 각 프로세스의 목적 달성 여부를 파악 (BP + PA 1 . 1 ) 한 후 , 프로세스의 능력 수준을 해당 PA 의
충족도로 판정함
3 ) 각 프로세스에 대하여 해당 PA 의 충족도를 4 가지 척도로 심사
- N : Not Achived ( 0 ~ 15 % )
- P : Partially Achived (16~50%)
- L : Largely Achived (51~85%)
- F : Fully Achived (86~100%)
4) 특정 프로세스에 대하여 모든 하위 level 의 PA 에 대하여 F 등급으로 심사 받고 자신의 모든 PA 가
L 또는 F 등급으로 심사된 가장 높은 level 이 해당 프로세스에 대한 심사대상 조직의 능력 수준임
342

---

## Page 343

IV. 국내에서의 SPICE 활동과 향후 발전방향
1) 국내에서의 SPICE(KSPICE)
- KSPICE (The Korea Software Process Improvement and Capability determination)
. ISO/IEC JTC1/SC7/WG10 에서 표준화 참여 및 개발한 ISO/IEC 15504 의 Trial 을 위한 단체
. Trial 이란 표준 적용의 문제점을 찾아내기 위해 실제 현장에 적용해 보는 것
- 국내에서 SPICE 의 활용
. 소프트웨어 공학 표준 개발에서 SPICE 가 처음으로 Trial 을 시행
2) SPICE 의 향후 발전방향
- 국제적 인증에 대한 관심과 형식적인 노력이 아닌 근본적인 프로세스 개선 노력이 뒷받침 되어야
어떠한 표준에도 적응할 수 있음 .
[ 참고 ] 무엇이 개선 대상인가 ? ( 프로세스의 의미 )
각기 다른 일하는 방식을 조직의 표준 프로세스에 맞춤으로서 일을 일관성 있고 효율적으로 하게 해준다 .
아래 활동들의 모든 예가 프로세스 개선 활동의 대상이 된다 .
- Activity : 개발 경로를 수행하는 작업 활동의 단위 (Stage - Step - Task 로 구성 )
- 기법 : Activity 수행방법 , 산출물 작성 방법에 대한 지침 등
- 산출물 : Activity 수행을 위한 입력 산출물 , 수행 결과 산출물
- 작업흐름 : Activity 간의 작업 전후 관계
- 도구 : Activity 수행 지원 도구 (CASE Tool 및 기타 S/W, 장비 등 )
- 역할과 책임 : 해당 업무를 수행하기 위한 업무분장
- 측정기준 : Activity 의 속성을 정량화하여 공수 , 일정 , 비용 등을 측정
343

---

## Page 344

9. GS 인증
VIII. SW 품질 표준 및 종합
기출문제
1. 소프트웨어 품질 평가 및 측정 기술에 대하여 다음 질문에 답하시오 .
가 . 품질평가 기술의 유형을 나열하고 비교 설명하시오 .
나 . 각 유형별 대표적인 표준 또는 모델을 제시하고 설명하시오 .
다 . GS (Good Software) 인증 은 이중 어느 유형에 속하며 무슨 모델 ( 표준 ) 을 따르고 있는지 설명
하시오 .( 관리 81 회 2 교시 5 번 )
“돈만 내면 준다는 게 GS 인증인데 시간 들여 돈 들여 , 인력 들여 GS 인증을 받아야 하는가 ?
이게 과연 SW 품질을 보장이나 할 수 있는가 ?”
“ 천 만원이면 중소기업으로서는 큰 돈이다 . 공공기관 수주를 위해 어쩔 수 없이 GS 인증을 받긴 하지만
비용이 부담 돼 2~3 년에 겨우 한 번꼴로 업그레이드 하고 있는 실정이다 .”
소프트웨어 품질을 인증하는 ' 굿소프트웨어 (Good Software, GS) 인증 '. GS 인증이 도입 13 년차이지만
SW 전문기업들 사이에서 긍정적인 반응이 나오기 보다는 오히려 원성을 사고 있다 .
10 여 년 사이에 무슨 일이 있었던 걸까 ?
1) 품질 보장 ? 누구나 받아 변별력 없어
2) 공공시장 수주를 위한 통과의례
344

---

## Page 345

9. GS 인증
VIII. SW 품질 표준 및 종합
I. 국내 SW 산업 활성화 방안 , GS 인증의 개요
가 . GS (Good Software) 인증의 정의
- 국산 SW 제품의 품질 향상을 통한 국내 SW 산업 활성화 정책으로 SW 시험 인증 센터가
국제표준을 기반으로 개발한 한국형 SW 품질 인증제도 ( 제품 품질 인증 )
- 한국정보통신기술협회 (TTA) 가 국내 소프트웨어 완성도를 평가하고 일정 수준 이상의 기술력ㆍ
사용성ㆍ신뢰성을 갖춘 제품에 지식경제부 장관이 부여하는 국가인증 마크
- 우수 국산 SW 를 발굴하여 제품에 대한 홍보 및 마케팅 활성화를 지원하고 국산 SW 제품의 품질
향상을 시키고자 일정수준 이상의 품질을 갖춘 SW 제품에 국가가 인증을 부여
( 한국 SW 전문기업협회 참조 )
- ISO 국제표준을 기준으로 SW 의 기능성 , 신뢰성 , 효율성 , 사용성 , 유지보수성 , 이식성 , 성능 ,
상호운용성 , 연동성 및 적합성을 시험 / 테스트 하여 인증을 부여
- 법적근거 : SW 산업진흥법 제 13 조 ( 품질인증 ), SW 산업진흥법 시행령 제 10 조 ( 품질인증의 실시 ) 및
소프트웨어 품질인증 기준 ( 정통부 고시 제 2000 - 81 호 , 2000. 10. 31) 에 따라 시행
- 국내 우수한 소프트웨어의 시장개척을 위한 국가적 차원의 제 3 자 시험 • 인증 서비스 제도
345

---

## Page 346

9. GS 인증
VIII. SW 품질 표준 및 종합
I. 국내 SW 산업 활성화 방안 , GS 인증의 개요
나 . GS 인증의 의의 및 목적
- 소프트웨어 시험 • 인증 및 컨설팅 서비스 제공을 통한 소프트웨어 제품의 품질향상 유도 및 중소 •
벤처기업 육성 지원
- 우수 소프트웨어 발굴을 통해 소프트웨어 구매를 촉진함으로써 국내 소프트웨어 시장의 활성화
- 국제적 수준의 시험 • 인증 서비스 제공을 통한 국산 소프트웨어의 해외수출 지원
346

---

## Page 347

II. GS 인증 SW 품질 평가 프레임워크
347

---

## Page 348

II. GS 인증 SW 품질 평가 프레임워크
348

---

## Page 349

III. GS 인증 SW 품질 평가 프레임워크 – 테스트 방법
349

---

## Page 350

IV. SW 품질 시험 , 인증 절차
350

---

## Page 351

IV. SW 품질 시험 , 인증 절차 ( 계속 )
[ 그림 ] SW 품질의 시험 및 인증에 대한 심의 프로세스
351

---

## Page 352

V. GS 인증 우선구매제도
가 . 우선구매제도 개념
- 중소기업 SW 가 GS 인증을 획득하였을 경우 공공기관의 우선구매를 지원
우선구매 제도 - 정부에서는 공공시장 진입에 어려움을 겪고 있는 국내 중소 소프트웨어
기업들의 판로 지원
- 중소기업 SW 가 GS 인증제품인 경우 성능검사를 면제하고 성능인증을
부여
- 중소기업의 기술개발제품이나 신기술인증제품 등에 대해 성능검사를 거쳐
성능인증 제도
성능이 확인된 제품을 공공기관이 우선구매 할 수 있도록 지원
- 중소기업의 기술개발을 촉진하고 , 공공구매를 확대하기 위해
중소기업청에서 2005 년 7 월 1 일부터 시행
- 중소기업청의 성능인증을 받은 제품 (GS 인증제품 ) 이 공공기관에 납품된 후 ,
성능보험제도
그 제품의 성능저하로 발생하는 계약상의 손해를 배상하여 주는 제도
- 성능보험에 가입된 성능인증제품 (GS 인증제품 ) 을 구매한 공공기관
구매자 면책제도 구매자가 성능인증제품 구매로 인하여 발생한 손실에 대해 면책을
부여하는 제도
352

---

## Page 353

V. GS 인증 우선구매제도
나 . 우선구매제도 시행절차
353

---

## Page 354

VI. GS 인증 우선구매제도
가 . GS 인증의 문제점 및 해결방안
문제점 해결방안
- 정보보호 시스템의 중복시험 - CC 인증 후 인증절차 간소화 , 수수료 감면
- 단순한 SW 품질 특성만 시험 - 인증심사 확대 및 표준안 마련
- 업체의 SW 이중화로 제도적 회피 - 제도의 현실화 방안강구
나 . GS 인증의 최근 현황 및 전망
구 분 내 용
품질개선 및
제 3 자 시험 · 인증을 통하여 단기간에 획기적인 품질 개선
비용절감 측면
1) 소프트웨어 품질인증기관에서 공인된 제품으로 고객의 신뢰 확보
홍보 및 마케팅 2) 국산제품의 우수성 부각 및 막연한 외산 소프트웨어 선호사상 불식
측면 3) 인증획득제품 언론 보도 및 웹사이트 게재
4) WIS (World IT Show) GS 인증관에 인증획득제품 전시 및 홍보
조달청 제 3 자 단가 계약 체결 및 등록
제도적 혜택
GS 인증제품 우선구매제도 시행
중소기업청 성능인증 시 성능검사 면제
측면
저렴한 요율의 성능보험제도 및 공공기관 구매자 면책제도 시행 등
354

---

## Page 355

10. ISO 9000
VIII. SW 품질 표준 및 종합
기출문제
1. 소프트웨어 품질 평가 및 측정 기술에 대하여 다음 질문에 답하시오 .
가 . 품질평가 기술의 유형을 나열하고 비교 설명하시오 .
나 . 각 유형별 대표적인 표준 또는 모델을 제시하고 설명하시오 .
다 . GS(Good Software) 인증은 이중 어느 유형에 속하며 무슨 모델 ( 표준 ) 을 따르고 있는지 설명
하시오 .( 관리 81 회 2 교시 5 번 )
[ 참고 ] 프로세스를 기반으로 한 품질경영시스템 모델
355

---

## Page 356

10. ISO 9000
VIII. SW 품질 표준 및 종합
I. 제품의 생산 및 유통과정 전반에 걸쳐 국제규격을 제정한 소비자 중심의 품질보증제도 , ISO 9000 개요
가 . ISO 9000 의 정의
- 국제 표준화 기구 기술위원회에서 제정한 품질 경영과 품질 보증에 관한 국제규격
- 통상 활동을 원활히 하기 위해 ISO 에서 제정한 공급자와 구매자 사이의 품질경영과 품질보증에 관한
기준
나 . ISO 9000 인증획득의 필요성
- 고객의 기대와 요구에 부응
1) 고객은 품질시스템의 제 3 자 인증을 통해 공급자 평가 가능
2) 고객의 기대 , 요구를 반영하여 고객만족 증대 가능
3) 절차와 방법 , 책임과 권한을 명확히 하여 투명성과 신뢰성 확보 가능
- 조직의 역량 강화로 경쟁력 확보
1) 조직과 자원의 효율적 관리 가능
2) 품질향상 , 불량예방 , 낭비제거 가능
3) 안전성과 신뢰성 확보 가능
- 국내외 환경변화에 능동적 , 효율적으로 대비
1) 세계 각국에서 ISO 9000 인증을 요구하고 있는 추세임
2) 국가 조달물자 구매 시 인증 획득 업체 상품을 우선적으로 구매해 주고 있음
356

---

## Page 357

다 . ISO 9000 인증의 목표
제품의 질 향상
효율적 경영자원 활용 제품 경쟁력 향상
ISO 9000
품질 비용의 절감 공공 이미지 향상
라 . ISO 9000 의 3 대 요소
- 투명성 : 인증은 투명성이 있어야 함
- 원칙 : 인증 시 원칙을 준수하여야 함
- 국제표준 : 각 기준 및 규격 등은 국제표준 준수
II. ISO 9000 시리즈 인증규격
구 분 내 용
ISO 9001 제품의 설계 , 개발 , 제조 , 설치 및 서비스에 대한 품질보증 모델
ISO 9002 제품의 설치 및 서비스에 대한 품질보증 모델
ISO 9003 최종 검사 및 시험에 대한 품질보증 모델
ISO 9004 품질경영 및 품질 시스템 요소에 대한 지침
소프트웨어의 개발 , 공급 , 유지보수에 대하여 ISO 9001 을 적용한 모델
ISO 9000-3
(ISO 9001 을 소프트웨어 산업에 적용한 모델 )
357

---

## Page 358

III. ISO 9000 품질경영시스템의 프로세스 접근방법
358

---

## Page 359

IV. ISO 9000 인증 추진절차 및 효과
가 . ISO 9000 인증 추진절차
교육 : 품질시스템의 이
품질시스템 도입의 목 T/F 팀 구성 및
해 , 요건해설 및 문서화
적 파악 인증추진계획 수립
방법
문서화 작업 : 매뉴얼 ,
절차 / 지침서 등
실행 및 점검 : 품질시스
사후관리 : 품질시스 인증검사 : 문서심사 ,
템 실행 및 내부 품질 검
템 유지 , 개선 예비 , 본심사
사
나 . ISO 9000 인증 추진효과
- 상품 / 서비스의 매출액 증가
- 품질의식 제고 및 생활화로 품질향상의 지속적 유지
- 품질 비용 절감 및 시간 절약
- 관리 상태로의 이행 , 경영자원의 효율적 이용
- 조직 내 의사소통의 원활화와 Interface 해소
359

---

## Page 360

11. Peer Review
VIII. SW 품질 표준 및 종합
기출문제
1. 작성된 프로그램 검사를 위하여 동료검토 를 시행하려고 한다 .
가 . 동료검토를 위한 코드검사표의 제어흐름 검사부분에 포함된 항목들을 기술하시오 .
나 . 코드검사표의 인터페이스 검사부분에 포함될 항목들을 제시하시오 .
( 관리 80 회 3 교시 )
2. 소프트웨어 정형 기술 검토 (Formal Technical Review) 의 중요성을 결함증폭모형을 예로 하여 설명
하시오 .
[ 관리 86 회 3 교시 ]
3. 소프트웨어 개발 및 운영 프로젝트에서 소프트웨어 형상관리 (Software Configuration Management)
에 대하여 다음 질문에 답하시오 .
(1) 프로젝트 단계별 기준선 (Baseline) 과 FTR(Formal Technical Review) 을 설명하시오 .
(2) 개발 프로젝트와 운영 프로젝트의 형상관리를 비교하여 설명하시오 .
[ 관리 95 회 3 교시 ]
360

---

## Page 361

11. Peer Review
VIII. SW 품질 표준 및 종합
Tips
1. 품질 향상 등 다양하게 응용해 주세요 !
361

---

## Page 362

11. Peer Review( 동료 검토 )
VIII. SW 품질 표준 및 종합
I. 품질 보증의 고효율성 기법 , 동료검토의 개요
가 . 동료검토 (Peer Review) 의 정의
- 작업자의 동료들이 사전에 정의된 절차에 따라 수행하는 소프트웨어 (work product) 에 대한 검토
결함을 발견하고 개선하기 위한 목적으로 수행
나 . 동료 검토의 목적
1) 조기에 작업 산출물의 결함을 효율적으로 제거하는데 초점
2) 동료 검토를 통해 최종 산출물과 예방 가능한 결함에 대한 이해력 증진
3) 정해진 절차에 따라 동료 산출물을 검토하여 결함 또는 변경이 필요한 부분의 식별
4) 프로젝트에서 정의된 소프트웨어 산출물에서 동료 검토 대상 산출물 식별 과정도 포함
다 . 동료 검토의 특징
1) 검토는 작성자를 위하여 동료가 수행
2) 검토는 참가자 별도 역할을 가지고 있는 구조적인 프로세스
3) 검토 담당자는 사전에 지정되며 검토회의가 시작 되기 전 작업 산출물에 대해 이해하고 질문을 생성
4) 검토 및 결함 데이터를 기록하고 분석하여 검토 프로세스의 효율성을 감시하기 위하여 사용
362

---

## Page 363

11. Peer Review
VIII. SW 품질 표준 및 종합
II. Peer Review 의 절차 및 R&R
가 . 동료 검토 절차
363

---

## Page 364

11. Peer Review
VIII. SW 품질 표준 및 종합
II. Peer Review 의 절차 및 R&R
나 . 동료 검토에서의 역할 (Role )
구분 역할 설명
프로젝트
- 동료검토 계획을 수립 , 문서화
- Review 를 수행할 자원 할당 , 교육 훈련 지원 / 중재자 선정
관리자
- 검토의 대상인 작업 산출물을 작성
- 검토회의에 필요한 작업 산출물 , 관련 표준 , 절차와 같은 제반 검토자료 배포
작성자
- 작업 산출물에 대한 재작업 수행
- 작업 산출물을 체크리스트와 관련 자료를 참조하여 검토하고 결함을 식별
- 기능평가 , 요구사항 설계 반영확인 , 인터페이스 분석 수행
검토자
- 동료검토 준비 보고서에서 식별한 결점 리스트를 검토회의 이전에 중재자에게 제출
- 검토회의 참석자의 선정 , 역할을 할당
- 사전 검토 회의 필요여부 확인 , 필요 시 일정 수립
- 작업 산출물 배포 확인 / - 검토회의 소집 , 제반 활동
중재자
- 검토회의에서 발견된 결함들이 모두 제거되었는지 검증
- 검토에 대한 재검토 필요성 판정 , 검토여부 결정
- 작업 산출물의 분석 , 이해하여 검토회의 시 감독
발표자
- 산출물의 논리적 구성 부분 식별 , 항목의 의미 부연 설명
- 검토결과를 동료검토 보고서에 기록 , 식별된 결함을 시스템에 입력
기록자
- 동료검토가 계획대로 수행되었는지 확인 / - 시스템에 입력된 data 의 완료 확인
품질 보증 담당자
364

---

## Page 365

3. 소프트웨어 품질보증
제 8 부 소프트웨어 품질
III. Peer Review 유형
구분 내용
- 진행상태를 점검 하고 시정조치를 취하도록 함
Management
- 스케줄과 계획의 진행상태를 확정
Review
- 참석자 : 경영자 , 분야별 관련자
- 명세서와 계획에 대한 적합성 평가 및 변경의 무결성 보증
Technical
- 기술적 대안 제시
Review
- 산출물 : 기술검토보고서 (Formal/ 공식적 )
- 소프트웨어 제품 평가
Walkthrough - 비공식적 검토 (Informal)
- 결함을 찾고 대안을 시험하고 학습수단으로도 활용
- 설계서 , 코드 등의 중간 산출물을 검사하여 결함 발견 및 SW 품질 개선과
비용절감을 위한 품질 보증기법
- 타인에 의한 Inspection 은 궁극적으로 수준 높은 디버깅이 가능함
Inspection
- 공식적인 동료검토
- 소프트웨어의 에러 , 규격 , 표준에 맞지 않는 것들을 찾는 검토활동
- 통상 3~ 7 명
- 요구분석 , 설계 , 프로그램 품질 감사 , 3 자 , 관련 팀이나 조직도 감사 수행 .
Audit
- 계약관리 , 프로젝트 관리 등의 전체 프로세스 준수 여부에 대한 적정성 검토
365

---

## Page 366

12. Six Sigma
VIII. SW 품질 표준 및 종합
기출문제
1. 6 시그마 (Six Sigma) 추진방법 중 DMAIC 와 DMADV 를 비교하여 설명하시오 .
( 정보관리 90 회 1 교시 )
2. 함수 y=f(x) 에서 y 를 비즈니스 프로세스에서 만들어내는 최종 가치라고 하고 , x 는 y 를 만들어내는
과정상의 제반 요소들이라고 할때 , 6 시그마 DMAIC 프로세스 중 Analyze 단계와 Control 단계에서
수행하는 업무를 y 와 x 의 관점에서 설명하시오 .
( 정보관리 86 회 2 교시 )
366

---

## Page 367

12. Six Sigma
VIII. SW 품질 표준 및 종합
I. 경영품질 혁신을 의한 전략 , 6 시그마 의 개요
가 . 6 시그마 (6 SIGMA) 의 정의
- ‘고객의 관점’에서 문제를 정의하고 현재 상황을 객관적인 지표로 측정하여 문제의 원인 을 근거와
타당성 있게 과학적이며 , 체계적으로 분석 , 핵심 원인을 파악하여 실무 차원의 개선 방안을 적용하고 ,
그 상황이 지속될 수 있게 관리하는 방식
- 고객관점에서 6 시그마 수준의 품질을 확보하려는 과학적 , 통계적 , 전사차원의 경영혁신 운동
나 . 6 시그마의 특징
구분 설명
기업문화 혁신 모든 조직원의 공감과 자발적 참여 , 지속적 개선
전사적 프로세스 혁신 비즈니스 프로세스 정의 , 분석 전사적 프로세스 개선
과학적 기법 통계적 기법 동원 , 정량적으로 프로세스 개선 평가 수행
고객만족도 향상 품질향상 , 비용최소화를 통한 고객만족도 향상
367

---

## Page 368

CTQ, Critical to Quality 란 ? 상품이나 서비스 , 그
II. 6 시그마의 일반적인 체계
리고 상품 제조등의 프로세스가 구매자의 구매
기준 Quality 에 충족되는 품질 기준
CTQ( 달성목표 )
요구사항 적용
요구사항 적용
조직
MBB (Master Black Belt)
외부고객
내부고객
BB (Black Belt), GB
방법론
내부 프로세스
고객만족 향상
DMAIC, DFSS, DMADV
개선 , 결함율
등 감소 목적
고객측면 6 시그마 추진체계 내부 효율화 측면
나 . 6 시그마를 통한 문제 해결 방법론 유형
산업영역 방법론 방법론 개요
- 고객 요구 관련 근본 원인에 집중
제조 부문 DMAIC
- 관리 및 제품 claim 최소화
- 고객 요구 만족 설계에 집중 (Design for Six Sigma)
R&D 부문 DFSS
- 신 프로세스 / 제품 설계 시 적용 현 Process/ 제품의 획기적 개선
- 고객의 요구를 일으키는 근본 Process 원인에 집중
영업 / 마케팅 부문 DMADV
- 서비스 품질 의 극대화
368

---

## Page 369

III. DMAIC 방법론
가 . DMAIC 방법론 정의
- Define, Measure, Analyze, Improve, Control 단계의 줄임말
- 6 시그마 문제해결 과정에서 사용되는 로드랩으로써 문제해결의 합리적인 접근방식으로 구성되어
기존 프로세스의 개선에 주로 사용
나 . DMAIC 구성도
현재 문제정의
개선안에 대한 결과에
대해 CxO 의 평가 및
관리
-> 유지 , 폐지 , 개선
등 결정
현재 정의한 문제에 대해
수치적으로 측정
수치적으로 측정한 것에
개선안 제시
대한 분석 ; 손해 등에 대한
통계적 관계 등 파악
369

---

## Page 370

다 . DMAIC 방법론 프로세스
단계 설명 활동
전략적 사고를 바탕으로 문제 / 기회를 도출하여 1. 문제 / 기회 도출
정의 (Define) 프로젝트 목적 / 목표 / 범위를 구체화하여 효과적 2. 프로젝트 정의
프로젝트 계획서 수립 3. 프로젝트 관리 계획 수립
1. 측정시스템 2. 구축 / 검증
CTQ(Y) 에 대한 주요 X ’ s 에 대한 데이터를 수집하고
측정 (Measure) 3. 측정계획 수립 및 실행
현수준을 파악하여 개선 목표의 타당성을 검토
4.Baseline 평가 및 검토
1. 잠재 영향요인 도출 및
문제 원인에 대한 잠재인자를 도출하고 데이터를 스크리닝
분석 (Analyze)
수집하여 통계적 분석을 실시하여 핵심인자 확정 2. 데이터 수집계획 및 분석
3.Vital Few X ’ s 도출
1. 개선전략 수립
개선계획 수립 및 방향성을 설정하여 최적조건의
향상 (Improve) 2. 최적화
실험 및 개선안 도출을 통한 개선효과 검증 , 평가
3.Pilot 계획 / 실행
1. 관리계획 수립
관리대상 선정 및 관리계획 수립을 통해 프로젝트
관리 (Control) 2. 관리계획 실행 및 이관
이관 및 향후 계획 수립
3.. 프로젝트 평가 / 종료
370

---

## Page 371

IV. DMADV 방법론의 개요 .
가 . DMADV 방법론 정의
시작부터 완료까지 6 시그마 수순의 품질을 갖도록 제품과 서비스 프로세스를 설계하기 위한 접근방법론
새로운 제품을 만들거나 예측가능하고 결함이 없는 성능을 내는 디자인을 만들기 위한 목적으로 활용
나 . DMADV 란 DFSS (Design For Six Sigma) 를 수행하기 위한 방법론으로 , 설계단계에서 CTQ 와 하위
프로세스에 대한 최적디자인 을 함으로써 불량의 가능성을 제로화 목적 .
나 . DMADV 구성도
단계 설명 산출물
정의 - 프로젝트 추진목표 , 가정 및 제약 , 문제정의 , 산출물 , - Project Charter
(Define) 팀의 구성원 역할 , 작업 프로세스 확립 통한 계획수립
- 프로젝트 성과측정 할 수 있는 성과지표를 파악 , 영향을
측정 줄 잠재원인 도출 - Process Flowchart
(Measure) - 제품영향요소인자 (CTQ) 식별 , 영향요소의 우선순위 결정 , - Benchmarking
영향요소의 자료수집
분석 - 수집 Data 의 분석을 통한 프로젝트 성과지표 영향 , 지표에 - Pareto diagram
(Analyze) 영향을 주는 핵심인자 (root cause) 도출 - Fishbone Diagram
- 설계요구사항에 미칠 요소들을 선정하고 실제로
설계 - Design Diagram
설계측정단위에서 도출된 제품 컨셉트를 만족시키는지
(Design) - 측정보고서
확인 후 최종 설계확정
검증 - 개선효과의 지속성 유지 위해 개선결과문서화 , - 개선결과서
(Verify) 관리계획 수립 후 수행 - 관리계획서
371

---

## Page 372

V. DMAIC 방법론과 DMADV 방법론 비교
구분 DMAIC DMADV
목적
결함없는 제품 이나 서비스 개발
기존 업무 프로세스 개선
새로운 제품이나 서비스 초기 설계 , 재설계
측정
업무 프로세스 현황 고객 요구사항
분석
직접적인 문제점을 찾기 위해 업무 고객 요구사항을 만족하기 위한 지점을 찾기
프로세스 분석 위해 업무 프로세스 분석
결과
업무 프로세스의 문제점을 해소 또는
고객 요구를 만족하는 업무 프로세스
제거
결과검토
업무 프로세스의 올바를 성과를 낼 업무 프로세스가 고객 요구에 부흥하는지
수 있는지를 확인 확인
372

---

## Page 373

VI. 6 시그마 수행의 성공요소 및 사례
가 . 6 시그마 수행의 성공요소
성공 요소 내 용
- 6 시그마에 대한 신념
최고경영자의 리더십
- 강력한 통솔력
- 정확한 데이터 수집
데이터에 의한 관리
- 데이터를 효과적으로 적용
- 전 직원들을 대상으로 한 교육
직원들에 대한 교육 / 훈련
- 전문기관에 위탁 또는 전문가 초청
- 6 시그마운동 / 경영활동의 하나로 정착
시스템 구축
- 모든 직원들을 대상으로 함
- 현재의 품질수준과 목표를 명확히 함
직원들의 이해와 충분한 준비
- 6 개월 이상 준비기간 필요
나 . 6 시그마의 사례 및 적용방안
- 80 년대 모토로라 , 90 년대 GE 의 도입을 시작으로 국내에서도 삼성전자 , 현대자동차등 많은 대기업과
협력업체에서 6 시그마도입
- 6 시그마의 행동개선도구로 BPM 과의 연계 , 핵심인자 도출 도구로 CMMi 와 연계하여 시너지의 극대화
필요 “끝”
373

---

## Page 374

13. QA
VIII. SW 품질 표준 및 종합
기출문제
1. 소프트웨어 프로젝트 품질보증 의 일환으로 품질감사를 시행하려고 한다 .
가 . 프로젝트 감사활동을 위하여 소프트웨어 품질감사를 위한 전체 프로세스와
프로세스별 수행내용을 제시하시오 .
나 . 시스템 구현단계의 감사대상의 되는 프로젝트 결과물 ( 산출물 ) 을 기술하시오 .
다 . 시스템 구현단계의 감사체크리스트를 만들기 위한 check point 를 제시 하시오 .
[ 관리 80 회 2 교시 )
2. 소프트웨어 품질 보증활동 을 열거하고 설명하시오 .
( 관리 71 회 4 교시 )
3. 웹 응용소프트웨어 개발을 위한 프레임워크 (Web Application Framework) 선정을 위한 품질평가체크
리스트 항목을 설계하시오 .
( 정보관리 , 84 회 , 1 교시 )
4. 인스펙션 (Inspection) 의 참여자들에 대한 역할을 인스펙션 절차 여섯 가지 단계별로 각각 설명하시오 .
(1) 주재자 (moderator ) ( 2) 작성자 (author)
(3) 인스펙션 담당자 (Inspector ) ( 4) 품질 관리자
(KPC 모의고사 )
374

---

## Page 375

13. QA
VIII. SW 품질 표준 및 종합
I. 소프트웨어 품질보증의 개요
가 . 소프트웨어 품질보증의 정의
- 설정된 요구사항과 SW 제품과의 일치성 확인작업
- 모든 SW 산출물을 사용하는데 필요한 적절한 확증을 준비하는 체계적인 행위
나 . 소프트웨어 품질 보증의 필요성
- 사용자 요구사항 최대 만족을 통한 생산성 향상
- 개발과정에서 품질문제점 조기 발견 및 제거
- 납기준수 , 제품의 견고성 , 제품의 확장성
- 비용 노력절감 , 생산성 향상 , 재사용성 증가
II. 소프트웨어 품질보증의 기법
가 . Review
- 부적절한 정보 , 누락되거나 관련 없는 정보의 발견 , 요구명세서와의 일치성 검토
- 시스템개발요원 , 관리자 , 사용자 , 외부전문가 참여
나 . Inspection
- 소프트웨어 구성 요소들의 정확한 평가
- Review 보다 엄격 , 정형화 됨 , Check List 등 사용
다 . Walk - through
- 비공식적인 검토과정으로서 개발에 참여한 팀들로 구성
375

---

## Page 376

라 . 소프트웨어 품질보증 기법간의 비교
Management Technical Software
Walkthrough
구분
Review Review Inspection
명세서와 계획에 대 결함을 찾고 해결책 결함을 찾고 대안을
진행상태를 점검하고 ,
한 적합성 평가 및 변 을 검증 시험하고 학습수단
목적
시정조치를 취하도록 함
경의 무결성 보증 으로도 활용
추천규모 2 명 이상 3 명 이상 3~6 명 2~7 명
경영자 , 분야별 관 문서화된 공식적
참석자 개발자 개발자
련자 인 참석대상자
선임 엔지니어
선임 관리자 훈련된 중재자 개발자 본인
리더쉽
목적에 따라 많음 목적에 따라 많음 상대적으로 작음 상대적으로 작음
자료량
검사보고서와
산출물 경영검토보고서 기술검토보고서 검토 보고서
결함목록
376

---

## Page 377

Inspection 의 과정 및 절차
가 . Inspection 과정
과정 설명
Inspection 팀을 정하고 구성원이 Inspection 을 잘 준비할 수 있는 지 확인
Inspection 할 대상이 지켜야 할 규격을 준수하고 있는 지 확인
계획 체크리스트를 이용하여 Inspection 착수 조건에 부합하는 지 결정
Inspection 회의 일정 , 장소를 결정하고 확보 , 예약
Inspection 팀 구성원에게 검토 역할을 할당
Inspection 팀 구성원을 대상으로 설계자 / 개발자가 수행하는 간단한 형태의 교육
소프트웨어 ( 설계서 혹은 코드 ) 를 간단히 설명
사전교육
어떤 작업 및 인터페이스가 수행되는지 설명
사전교육은 생략될 수 있으며 , 실행여부는 Inspection 주재자의 판단에 맡김
Inspection 팀 구성원이 해당자료를 받았고 , Inspection 회의를 통고
모든 자료는 5 일전에 한번에 전달하고 Inspection 회의는 2 시간을 넘지 말아야 함
준비
Inspection 팀 구성원은 각자 발표할 자료를 준비
이해하기 어려운 부분을 표시하고 자료를 검토하여 결함을 발견 및 기록 양식에 기록
발견한 잘못된 점을 구성원이 모여 토론함
결함으로 판단되면 기록하고 종류를 구별
해결책은 논의하지 않음
Inspection 회의 ( 해결책은 프로덕트 작성자의 의무이자 권한으로 남겨둔다 . )
회의 후의 참여자들의 겸함 기록을 회수
발견한 결함을 종합하고 , 준비기간과 Inspection 기간을 기록한 후 Inspection 의 재 시행 여부 , Inspection 의 유형 등을 작성자에게
알리고 폐회
담당자 ( 설계자 , 개발자 ) 는 결함의 내용을 충분히 이해한 뒤 , 작업을 면밀히 살펴보고 수정
수정
Inspection 이 다시 필요하다고 결정하면 Inspection 을 다시 준비함
Inspection 주재자는 Inspection 에서 발견된 모든 결함이 바르게 수정 되었는지 확인
후속조치 수정결과는 통신수단을 이용하는 것보다는 직접 만나서 검사
소프트웨어 품질관리자에게 종합보고를 제출하고 종료
377

---

## Page 378

Inspection 의 과정 및 절차
나 . Inspection 의 절차
378

---

## Page 379

III. 소프트웨어 품질보증의 절차 및 활동
가 . 소프트웨어 품질보증의 절차
- 품질보증 활동계획 수립 및 평가대상 산출물 설정
품질보증
계획수립 - 품질보증 프로세스와 기준선 설정
- 개발활동에 대한 검토
엔지니어링
활동검토 - 산출물을 생산하기 위한 프로세스들의 운용 검토
- 품질목표에 따라 실제 품질평가 및 측정
품질측정
- 소프트웨어 감리 및 감사와 연관
평가
- 품질평가에 대한 문서기록
문서화
- 문서화된 평가결과 승인
승인
- 품질보증 활동에 대한 최고결정권자의 승인
- 승인된 품질평가의 결과를 개발활동에 반영
보고 및
통보
- 관련조직 및 관련인원에게 통보
379

---

## Page 380

나 . 소프트웨어 품질보증 활동
품질보증활동 세부 내용
형상관리 형상항목 식별 , 변경사항 관리
문서관리 문서관리 절차수립 , 문서작성 / 보관 / 폐기
품질기록 품질보증 계획 / 수행 / 결과를 기록
합동검토 Milestone 에 따라 프로젝트의 진행상황을 공동검토
검증 및 확인 단계별 검증 및 테스트
시정조치 해결방안 수립 및 조치
위험관리 예상위험 발견 / 평가 / 통제
쟁점관리 고객 요구사항 변경 등의 쟁점분석 , 대안설정 및 실행
380

---

## Page 381

IV. 소프트웨어 생명주기별 품질보증활동
단계 준비 활동 시행 활동 완료 활동
- 업무범위 이해 , 사용자 확인 - 요구분석 방법 - 요구분석 산출물 확인
- 표준 및 절차 확인 - 유사 프로젝트 경험 , 템플릿 활용 - 사용자 요구목록 관리
요구
분석
- 커뮤니케이션 능력 있는 분석자 - 모델링 및 도구 활용 - 철저한 Review 실시
- 요구분석 체크리스트 - 체크리스트 및 프로토타이핑 활용 - 사용자의 요구분석 산출물 검토
- 요구분석 단계 산출물 검토
- 유사 프로젝트 경험 , 템플릿 활용
- 기본설계 산출물 확인
- 시스템 적용 환경의 이해 , 시스템 설계
- 설계기법 및 도구활용
기본
제약조건 파악
- 철저한 Review 실시
설계 - 독립적 응집도 , 결합도 , 이해도 , 적응도 등의
- 시스템 환경별 기술자 확보
- 기본설계서에 대한 분석자의
설계 목표 달성
- 표준 및 절차 수립
검토여부 확인
- 설계원리 준수 ( 추상화 , 정보은닉 , 계층화 등 )
- 체크리스트 활용
- 기본설계서 검토
- 상세설계 산출물 확인
- 유사 프로젝트 경험 , 템플릿 활용
- 상세설계 제약조건 파악
- 철저한 Review 실시
상세 - 설계기법 및 도구활용 , 구조적 프로그래밍
- 상세설계에 필요한 도구 준비
- 상세설계서 작성
설계 설계 , 객체지향
- 표준 및 절차
- 상세설계서에 대한 기본설계자의
검토여부 확인
- 체크리스트 활용
- 상세설계서 검토 - 상세설계 대비 개발
- 표준 코딩 방법론 적용
- 코딩 및 절차준비 소스와 누락여부 확인
- 4GL, CASE 도구 활용
구현 - 공동모듈 및 재활용 모듈의 준비 - 프로그램목록 작성 및 관리
- 유사 프로젝트 경험 , 템플릿 활용
- 표준 및 절차 - 단위시험 체크리스트의 활용
- 단위 시험용 절차서 , 데이터를 활용한
철저한 단위테스트
- 체크리스트 활용 - 개발 소스에 대한 상세 설계자의 검토
- 기본설계서 검토
- 시험과정의 기록 - 통합시험 과정 및 결과의 기록 확인
- 통합시험 시나리오 , 데이터 준비
통합
- 기본설계 담당자의 참석하에 통합시험 - 시스템 완성을 위해 필요한 모듈 확인
시험
- 통합시험 환경검토
- 모듈간 인터페이스 시험에 역점 - 철저한 Review 실시
- 통합시험 도구 준비
- 요구분석서 검토
- 인수시험 시나리오에 따른 과정 및
- 개발자가 아닌 사용자의 직접시험
결과 확인
인수 - 사용자 요구검증을 위한 인수시험 시나리오
- 실적용 환경에서의 시스템 테스트 실시
시험 및 데이터 준비
- 인수시험 결과에 대한 사용자의
- 인수시험 과정 및 결과 기록
직접확인
- 사용자 입회여부 검토
381

---

## Page 382

제 8 부 소프트웨어 품질
V. 소프트웨어 품질보증의 문제점 및 발전방향
가 . 소프트웨어 품질보증의 문제점
- 품질에 대한 인식부족
- 품질보증 요원 부족
- 표준제도 절차확립 결핍
- 개발시간적 압박으로 인한 품질보증 관련 업무의 소홀
나 . 소프트웨어 품질보증의 발전방향
- 소프트웨어 제품자체보다 소프트웨어 프로세스 품질활동에 초점을 맞춤
- 품질정책 , 문화 , 환경의 조성
- 경영자의 품질에 대한 의지와 품질에 대한 동기부여 , 교육 , 훈련
- 지속적이고 발전적인 품질보증활동 개선 , 수용자간의 상호이해 필요
382

---

## Page 383

[ 참고 프로젝트 관리 품질 보증 프로세스 ]
입력물 (Input) 도구 및 기법 (Tool & Technique) 산출물 (Output)
품질 관리 계획 품질 관리와 통제 도구 변경 요청서
(Quality management plan) (Quality management and (Change requests)
프로세스 개선 계획 control tools) 프로젝트 관리 계획 갱신
(Process improvement 품질 감사 (Project management plan
Plan) (Quality audits) Updates)
품질 지표 (Quality metrics) 프로세스 분석 프로젝트 문서 갱신
품질 통제 측정치 (Process analysis) (Project documents
(Quality control updates)
Measurements) 조직 프로세스 자산 갱신
프로젝트 문서 (Organizational process
(Project documents) assets updates)
383

---

## Page 384

14. TMMi
VIII. SW 품질 표준 및 종합
TMMi
1. 소프트웨어 테스트 프로세스 성숙도 평가모델 TMMi (Test Maturity Model Integration) 와 시스템
개발 프로세스 성숙도 평가모델 CMMi (Capacity Maturity Model Integration) 는 5 레벨의 단계적
평가 프레임워크이다 . TMMi 모델과 CMMi 모델을 각각 설명하시오 .
( 컴퓨터시스템응용 96 회 2 교시 )
2. TMMi (Test Maturity Model Integration) 에 대해 설명하고 TMMi 레벨 5 품질관리 (Quality Control)
프로세스 영역을 위한 품질관리 도구에 대해 설명하시오 .
( 모의고사 )
384

---

## Page 385

14. TMMi
I. SW 테스트 프로세스 성숙도 평가모델 TMMi 의 개요
가 . TMMi(Test Maturity Model Integration) 의 정의
- 테스트 프로세스 심사와 개선에 중점을 두고 있는 조직을 지원하기 위한 가장 대표적인 성숙도 모델
- 테스트 성숙도 계층구조를 정의하는 성숙도 단계 , 각 단계에 따른 성숙도 목표 , 심사모델로 구성
나 . 테스트 프로세스 모델의 필요성
- 테스트 품질향상 : 테스트 단계별 활동을 정형화 & 표준화 , 테스팅 역량 강화
- 제품 중심 테스트 보완 : 소프트웨어 개발 생명주기와 정렬 (Align), Time to Market:
소프트웨어 규모와 복잡도가 증가에 효과적인 테스트 절차 및 프랙티스 제공
TMMi(Test Maturity Model Integration) 는 지난 2008 년 비영리법인 TMMi 재단이 소프트웨어 (SW)
테스트 조직의 성숙도를 평가하고 프로세스를 개선하기 위해 개발한 모델입니다 .
TMMi 는 세계적인 테스팅 전문가들이 다양한 산업분야의 SW 테스팅 베스트 프랙티스를 근간으로 만든
진단 및 심사모델로 5 개 레벨로 이뤄져 있습니다 .
TMMi 심사 및 공식인증을 받는 조직이나 기업은 체계적인 테스트 프로세스 개선활동을 통해 테스팅 및
전체 개발비용을 절감할 수 있고 품질 개선효과를 얻을 수 있습니다 .
385

---

## Page 386

II. TMMi 의 구성도 및 성숙 단계
가 . TMMi 구조와 구성요소
386

---

## Page 387

나 . TMMi 의 성숙도 단계 .
387

---

## Page 388

III. TMMi 의 성숙 단계 상세 설명
성숙 단계 내용 Process Area
- 테스팅은 정의되지 않거나 테스팅과 디버깅이 한 부분으로 인식되고
Level1 : 조직은 일반적으로 프로세스를 지원하기 위한 안정적인 환경제공이
초기 (Initial) 어려움
- 조직인력의 능력과 자신감에 의존
- 테스트와 디버깅이 구분되며 테스트가 소프트웨어 생명주기에서 하
테스트 정책과 전략
나의 독립된 단계로 정의되고 , 결함 발견 활동의 집중
테스트 계획
Level2 : 관리 - 테스트 정책을 별도로 문서화하거나 품질 정책이나 개발 정책의 일
테스트 모니터링 및 제어
(Managed) 부분으로 정의하고 있어야 함
테스트 설계 및 수행
- 테스트 전략 또는 접근법에 근거하여 테스팅을 하고 있다는 것을 증
테스트 환경
명
- 테스팅이 개발생명주기와 통합되는 단계로 레벨 2 에서 테스팅을 포
테스트 조직
함하고 개발 되었는지 검증하는 테스트 활동수행
테스트교육 / 훈련 프로그램
Level3 - 테스트 프로세스와 소프트웨어 개발 생명주기가 통합되어 있어야 함
테스트 수명주기와 통합
정의 (Defied) - 별도의 테스트 조직을 갖추고 있어야 하며 레벨 2 가 프로젝트 레벨에
비기능 테스팅
서 내제화 하는 수준이라면 레벨 3 은 조직차원에서 테스팅을 내제화
동료 검토
하는 수준
388

---

## Page 389

III. TMMi 의 성숙 단계 상세 설명
성숙 단계 내용 Process Area
- 발전된 동료검토 활동이 수행되고 있어야 하는데 테스팅 시각에서
볼 때 테스트 케이스를 요구사항 분석 단계부터 설계하고 작성하는
Level4 :
것을 통해 개발 중간 산출물의 결함을 조기에 발견하는 예방적인 테스트 측정
관리 & 측정
테스팅을 의미 소프트웨어 품질 평가
(Management&
- 테스트를 관리하고 측정하는 단계로 소프트웨어 품질 평가와 메트릭 발전된 동료검토
Measurement)
을 이용한 테스트 측정을 통해 테스트를 수치화하고 이를 기반으로
정량적으로 관리하고 있어야 달성 가능
- 결함 예방과 품질제어 활동에 초점 , 테스트 프로세스가 정의되고 관
리되며 , 비용과 효과가 추적되고 감시
결함 예방
Level5 : 최적화 - 테스트 프로세스가 지속적으로 개선되고 조정되며 결함예방과 품질
테스트 프로세스 최적화
(Optimization) 제어활동을 수행
품질제어
- 이들 활동이 통계적 방법과 다양한 평가 기준에 의해 측정되고 관리
자는 지속적인 개선을 유도하기 위해 인프라를 지원하고 동기 부여
389

---

## Page 390

IV. TMMi 와 CMMi 의 비교
구분 TMMi CMMi
SW 테스팅 분야 집중 ( 테스트 정책 및 시스템 엔지니어링 및 소프트웨어 개발 및 유지
평가 범위 전략 , 테스트계획 , 테스트환경 , 테스 보수 프로세스
트모니터링 , 테스트 설계와 실행 ) 통합제품개발 , 공급자 소싱
조직차원의 성숙도 평가 및 프로세스 영역별 평
제공 모델유형 조직 차원의 성숙도 평가
가 제공
카네기 멜론대학 SEI
개발 기관 비영리 독립법인 TMMi 재단
(Software Engineering institute)
심사절차 선임심사원 평가 심사방법론 (SCAMPI) 통한 선임심사원 평가
LG CNS 가 국내최초 3 레벨 인증 취
국내 인증현황 다수의 제조 및 IT 회사가 5 레벨 취득
득
390

---

## Page 391

[ 참고 I
391

---

## Page 392

15. SP(Software Process) 인증
VIII. SW 품질 표준 및 종합
SP 인증
1. SP(Software Process) 인증 에 대해 설명하시오 .
392
SW 프로세스 품질인증기관 고시 (2009.1.15) - 정보통신산업진흥원

---

## Page 393

I. SW 개발 프로세스 역량수준을 평가 • 인증하는 SP 인증의 개요
가 . SW 프로세스 품질인증 (SP 인증 ) 제도의 정의
- SW 산업진흥법 제 23 조에 근거하여 국내 SW 기업의 SW 사업 수행능력을 강화하고 SW 사업의 부실방지를
목적 으로 기업의 SW 개발단계별 작업절차 및 산출물 관리 역량 등을 분석하여 SW 개발 프로세스
역량수준을 평가 • 인증하는 제도
나 . 소프트웨어프로세스 품질인증 관계도
구성요소 내 용
지식경제부
- SW 프로세스 품질인증제도 관련 정책 수립 , 인증기준 및 인증지침 고시 등
( 정책기관 )
- SW 프로세스 품질인증 업무 전반을 주관 ( 인증심사 신청 접수부터 인증
정보통신산업진흥원 사후관리 )
( 인증기관 ) - 인증심의회 운영
- 인증심사원을 통한 인증심사 실시
SW 기업 - SW 프로세스 품질인증 신청
( 인증신청인 ) - 인증획득 후 인증표시에 대한 활용
[ 표 - 1] 소프트웨어프로세스 품질인증 관계도
393

---

## Page 394

II. 소프트웨어프로세스 품질인증 기준 및 등급
가 . 소프트웨어프로세스 품질인증 기준
[ 그림 - 1] 소프트웨어프로세스 품질인증 기준
- 소프트웨어 기업 및 개발 조직의 소프트웨어 프로세스 품질역량 수준을 심사할 때 활용하는 기준
- 소프트웨어프로세스 품질인증 기준은 5 개 영역 , 17 개 평가항목 , 76 개 세부평가항목으로 구성됨
394

---

## Page 395

나 . 소프트웨어프로세스 품질인증 등급
- 인증신청 조직의 품질역량 수준을 심사한 결과를 의미하며 , 해당 조직의 품질역량을 프로젝트에서
조직차원으로 유도하기 위한 계층구조로 되어 있음
- 인증등급은 2 개 등급 (2 등급 , 3 등급 ) 만 유효
395

---

## Page 396

[ 표 - 2] 소프트웨어프로세스 품질인증 등급
인증 등급 내용
- 프로젝트의 성공 여부와 관계없이 특정 프로젝트를 수행할 수 있는 수준이나 ,
프로젝트 수행을 위한 기본적인 활동들이 안정적으로 수행되지 못해 품질 , 비용 ,
1 등급
납기 측면에서 기대되는 목표를 충족시키지 못할 확률이 높은 상태로 프로젝트
수행을 위한 프로세스 역량 개선이 필요한 수준
- 개별 프로젝트를 수행하기 위해 필요한 프로젝트 차원의 프로세스가 수립 되고 ,
2 등급 이를 기반으로 프로젝트를 통제하여 성공적으로 프로젝트를 수행할 수 있는 역량
수준
- 조직의 프로세스 체계를 정의 하고 정량적인 데이터 관리를 통해 조직 차원의 프로
3 등급 세스를 개선하고 발생하는 문제의 근본 원인을 해결함으로써 일관된 품질수준의 프
로젝트 수행이 가능하며 , 지속적으로 프로세스를 개선할 수 있는 역량 수준
III. SP 인증의 동향
가 . 정보시스템 기술평가 시 SP 인증 획득기업에 대해 우대가점 부여
나 . 지식경제부와 방위사업청은 무기체계 SW 품질향상을 위해 연구개발 사업자 선정 과정에 SW 프로세스
품질인증 (CMMI, SPICE, SP 등 ) 도입 계획 .
396

---

## Page 397

16. QC
VIII. SW 품질 표준 및 종합
QC
1. 통계적 프로세스 통계 (Statistical process control) 의 원리 , 절차 및 도구 에 대하여 설명하시오 .
( 정보관리 99 회 4 교시 )
397

---

## Page 398

1. OSS
I. 품질 통제 (Quality Control)
가 . 품질 통제는 품질 활동의 실행 결과를 감시하고 기록하면서 성과를 평가하고 필요한 변경 권고안을
제시 하는 활동
나 . 프로젝트 결과가 품질표준의 요구사항을 만족하는지 검증 하기 위해 프로젝트 성과 , 일정 편차 , 원가
편차 등을 측정하고 품질 부적합 요인을 분석하여 시정 조치를 제시
II. 품질 통제 기법
가 . 품질에 대한 검사는 대부분 통계적 추출의 개념을 이용하는데 도구로는 파레토 차트 , 이시카와
다이어그램 , 관리도 , 산점도 등이 있음 .
나 . 품질관리의 3 대 요소 중의 하나임 .
398

---

## Page 399

1. OSS
품질 통제 (Quality Control) ITO
입력물 (Input) 도구 및 기법 (Tool & Technique) 산출물 (Output)
프로젝트 관리 계획 7 개의 기본 품질 도구 품질 통제 측정치 ( Quality control
(Project management plan) (Seven basic quality tools) measurements)
품질 지표 (Quality metrics) 통계적 표본추출 유효한 변경 ( Validated changes)
품질 체크리스트 (Statistical sampling) 검증된 인도물
(Quality checklists) 검사 (Inspection) (Verified deliverables)
작업 성과 자료 승인된 변경 요청서 검토 작업 성과 정보
(Work performance data) (Approved change (Work performance Information)
승인된 변경 요청서 ( requests review) 변경 요청서 ( Change requests)
Approved change 품질 관리 계획 갱신
Requests) (Quality management plan
인도물 (Deliverables) updates)
프로젝트 문서 프로젝트 문서 갱신
조직 프로세스 자산 조직 프로세스 자산 갱신
399

---

## Page 400

1. OSS
III. 파레토 차트 (Pareto chart)
가 . 문제의 우선순위 파악을 위해서 발생 빈도 순으로 정렬한 히스토그램 .
나 . 상대적으로 적은 수의 원인이 일반적으로 문제나 결함을 대부분 초래한다는 원칙을 바탕으로 문제의
원인이 어디에 근거하며 그 문제점의 발생빈도가 크며 , 점유율이 어떻게 나타나는지를 작성한 방법 .
항목 1 을 관리하면 전체의 40% 를 관리하는 것임
30
30
25
결 29
27
함
20
15
수
22
10
결함횟수
12
5
10
0
누적횟수
5
2
1
항목 1
항목 2 항목 3 항목 4 항목 5
다 . 파레토 법칙 (Pareto 法則 ) 또는 80 대 20 법칙은 ' 전체 결과의 80% 가 전체 원인의 20% 에서 일어나는
현상 ' 을 가리킨다 . 예를 들어 , 20% 의 고객이 백화점 전체 매출의 80% 에 해당하는 만큼 쇼핑하는
현상을 설명할 때 이 용어를 사용한다 . 2 대 8 법칙 라고도 한다
[ 참고 ] ' 이탈리아 인구의 20% 가 이탈리아 전체 부의 80% 를 가지고 있다 ' 고 주장한 이탈리아의 경제학자
빌프레도 파레토의 이름에서 따왔다 .
400

---

## Page 401

1. OSS
IV. Fishbone Diagram(Ishikawa Diagram)
가 . 결과와 원인이 어떻게 관계하고 있으며 , 영향을 주고 있는가를 한눈으로 알 수 있도록 작성한
다이어그램 .
나 . 특성요인도 (Cause and Effect Diagram) 또는 Fishbone Diagram 이라고도 함 .
주원인 1
부원인 1
부원인 2
문제
부원인 3
부원인 5
부원인 4
주원인 3 주원인 2
[ 참고 ] 이시카와 다이어그램의 일반적인 사용은 전반적인 효과를 일으키는 잠재적인 요인을 파악하기 위해
제품 설계 및 품질 결함 방지하는 목적으로 사용하고 있음 .
( 카오루 이시카와 (1990) 에 의해 만들어짐 )
401

---

## Page 402

1. OSS
VI. 히스토그램 (Histogram)
- 데이터가 존재하는 범위를 몇 개의 구간으로 나누어서 각 구간에 들어가는 데이터의 발생 빈도수를
체크하여 막대그래프로 작성한 그림 으로서 DATA 분포의 형태를 쉽게 파악하기 위한 용도로 작성
- 도수 분포의 상태를 기둥 모양의 그래프로 나타낸 것
( 예 ) 인원수
( 예 ) 키 구간
402

---

## Page 403

17. 정보시스템 감리
VIII. SW 품질 표준 및 종합
기출문제
1. 정보화 전략계획수립 (ISP) 사업에 대한 정보시스템 감리 프레임워크를 제시하고 중요 감리점검사항 에
대하여 설명하시오 .
( 관리 83 회 3 교시 )
2. 정보시스템 운영감리의 범위와 운영감리를 수행하기 위한 기본요소 에 대해 설명하시오 .
( 조직응용 83 회 4 교시 )
3. 소프트웨어 프로젝트 품질보증의 일환으로 품질감사를 시행 하려고 한다 .
가 . 프로젝트 감사활동을 위하여 소프트웨어 품질감사를 위한 전체 프로세스와 프로세스별 수행내용
을 제시하시오 .
나 . 시스템 구현단계의 감사대상의 되는 프로젝트 결과물 ( 산출물 ) 을 기술하시오 .
다 . 시스템 구현단계의 감사체크리스트를 만들기 위한 check point 를 제시 하시오 .
( 관리 80 회 2 교시 )
4. 정보시스템 감리의 감리영역과 감리관점을 나열하시오 .
( 관리 78 회 1 교시 2 번 문제 )
5. 정보시스템 감리의 프레임워크와 감리절차를 설명하시오 . ( 컴퓨터시스템응용 98 회 3 교시 )
6. 공통감리절차 중 시정조치확인 과정에 대하여 설명하시오 . ( 컴퓨터시스템응용 104 회 2 교시 )
403

---

## Page 404

17 . 정보시스템 감리
VIII. SW 품질 표준 및 종합
기출문제
6. 정보화사업 공통 감리절차에 있어서 현장감리 는 어떠한 활동인지 기술하시오 .
또한 현장감리에서 이루어지는 6 가지 절차를 설명하시오 .
( 컴퓨터시스템응용 101 회 4 교시 6 번 )
7. 정보 시스템 감리와 정보통신공사 감리를 설명하고 , 감리보고서의 주요 내용 을 비교하시오 .
(111 회 , 정보관리기술사 , 3 교시 )
404

---

## Page 405

17. 정보시스템 감리
VIII. SW 품질 표준 및 종합
감리발주자 및 피감리인의 이해관계로부터 독립된 자가 정보시스템의 효율성을 향상시키고 안전성을
확보하기 위하여 제 3 자적 관점에서 정보시스템의 구축 ( 및 운영 ) 에 관한 사항을 종합적으로 점검하고 문
405
제점을 개선하도록 하는 제도

---

## Page 406

17. 정보시스템 감리
I. 정보시스템 감리의 개요
가 . 정보시스템 감리의 정의
- 이해관계로부터 독립된 자가 정보시스템의 효율성 향상과 안전성 확보를 위하여 제 3 자적 관점에서
정보시스템의 구축 · 운영에 관한 사항을 종합적으로 점검하고 문제점을 개선을 하도록 하는 활동 -
나 . 정보시스템 감리의 목표
- 요건준수 : 정보시스템관련 기준 , 법규 , 표준준수
- 안전성 : 기밀성 , 무결성 , 가용성 향상
- 효율성 : 정보시스템 자원의 충분한 활용
- 효과성 : 사전에 설정된 목표 달성정보시스템 감리 프레임워크
406

---

## Page 407

17. 정보시스템 감리
다 . 정보시스템 의무감리 대상 기준 ( 전자정부법 시행령 제 71 조 )
구분 대상 기준 예외인 경우
1. 대국민 서비스를 위한 행정업무 또는 민원업무 총 사업비 1 억원 미만의 소규모 사업
정보시스템 처리용으로 사용하는 경우 으로서 비용대비 효과가 낮다고 행
특성 2. 여러 행정기관 등이 공동으로 구축하거나 사용 정기관 등의 장이 인정하는 경우는
하는 경우 제외
정보시스템 구축사업으로서 사업비가 5 억원 이상
단순한 구입비인지 여부는 행정기관
사업비 규모 인 경우 ( 총 사업비 중에서 하드웨어 , 소프트웨어
등의 장이 판단
단순한 구입비용을 제외한 금액 )
정보기술 아키텍처 또는 정보화 전략계획 수립 ,
행정기관 장
정보시스템 개발 또는 운영 등을 위한 사업으로서 감리시행의 필요성을 판단하는 근거
의 필요성 판
정보시스템 감리의 시행이 필요하다고 해당 행정 는 “정보시스템 특성” 기준 참조
단
기관의 장이 인정하는 경우
407

---

## Page 408

II. 감리시행절차
408

---

## Page 409

감리 관련 법제도 및 관련 기술
구분 구성 체계
전자정부법
1 장 처리
전자정부법 시행령
법령
전자정부사업관리 위탁에 관한 규정 각종 지침
전자정부사업관리 지침
2 장
안전행정부
정보시스템 감리기준
고시
NIA
감리 3 장
감리기준 조문별 해설서 ( V3.0 - 2013.12)
( 한국정보화진흥
처리
원 )
정보시스템
정보시스템
공지사항 / 가이드
감리 수행가이드 (V2.1)
감리 발주 〮 관리
가이드
요구관리 〮 과업이행 사업유형별 점검
점검가이드 가이드
409

---

## Page 410

정보시스템 감리기준
토픽 핵심 요약정리
I. 정보시스템감리기준 개요
제 1 조 ( 목적 ) 이 기준은「전자정부법」제 57 조제 5 항에 따른 정보시스템 감리의 업무범위 , 절차 및 준수사항 등
감리를 하기 위하여 필요한 사항과 같은 법 시행령 제 73 조제 7 항 , 제 74 조 , 제 75 조제 3 항에서 위임한 감리법인 등록 ,
감리원의 자격 및 교육 , 감리원증 발급신청 등에 관한 사항을 정함을 목적 으로 한다 .
용어 핵심 요약정리
용어 용어 정의
발주자와 사업자 등의 이해관계로부터 독립된 자가 정보시스템의 효율성을 향상시키고
감리 안전성을 확보하기 위하여 제 3 자의 관점에서 정보시스템의 구축 및 운영 등에 관한 사항을
종합적으로 점검하고 문제점을 개선하도록 하는 것을 말한다 .
11. " 감리보고서 " 란 감리법인이 감리 및 시정조치확인을 수행한 후 그 결과를 기록한
감리보고서
보고서를 말한다 . " 감리보고서 " 에는 " 감리수행결과보고서 " 와 " 시정조치확인보고서 " 가 있다 .
3 단계감리 " 3 단계감리 " 란 감리대상사업의 요구정의 , 설계 , 종료 단계 로 실시하는 감리를 말한다 .
410

---

## Page 411

II. 제 2 장 감리 실시시기 및 인력 배치 등
제 3 조 ( 감리 실시시기 ) ① 발주자는 감리법인으로 하여금 3 단계감리를 하게 하여야 한다 .
다만 , 감리대상사업의 사업비가 20 억원 미만이거나 사업기간이 6 개월 미만인 경우 2 단계감리를 하게 할 수 있다 .
이 경우 발주자는 요구사항정의서의 과업내용 반영여부 등을 직접 점검하여야 한다 . ★★★
② 발주자는 제 1 항에 따른 단계별 감리 외에 추가로 감리를 하게 할 수 있고 , 다음 각 호의 어느 하나에
해당하는 경우 상주감리를 추가로 할 수 있다 .
단 , 상주감리를 추가로 하는 경우 요구정의단계 감리는 생략하고 , 상주감리원이 요구사항정의서의 과업내용
반영여부 등을 직접 점검하여야 한다 . ★★★
1. 「소프트웨어산업 진흥법」제 24 조의 2 제 2 항에 따라 대기업인 소프트웨어사업자의 참여가 제한되는 경우
2. 그 밖에 감리대상사업의 위험도ㆍ난이도가 높다고 판단되는 경우
411

---

## Page 412

상주감리원 – 정보시스템 감리기준
토픽 핵심 요약정리
I. 상주감리원 개요
용어 정의 내용
“상주감리”란 감리대상사업 현장에 상주하거나 , 주기적으로 투입되는 감리원 ( 이하
상주감리원
“상주감리원”이라 한다 ) 이 사업관리 업무 지원 , 자문 등을 수행하는 감리 를 말한다 .
수석감리원은 감리업무의 총괄 , 참여 감리원의 지도 , 의견 조정 등의 역할 을 수행할 수 있는
수석감리원
수준의 전문가
총괄감리원 ”이라 함은 상근감리원 중 수석감리원으로서 당해 감리에 투입되는 감리원의 의견
총괄감리원
조정 등 감리업무를 지휘하는 자 를 말한다 .
법에서는 감리업무를 수행할 수 있는 감리원 자격을 기술능력에 따라 2 개 등급 ( 감리원 , 수석감리원 ) 으로
구분하여 자격기준을 제시하고 있다 . 감리원 등급은 감리분야별 점검활동을 직접적으로 수행할 인력 이며 ,
수석감리원은 감리업무의 총괄 , 참여 감리원의 지도 , 의견 조정 등의 역할을 수행할 수 있는 수준의 전문가라 할
수 있다 .
[ 주의 ] 상주감리원은 감리원일 뿐이다 . ★
[ 암기법 ] 총상수 ( 총괄감리원 – 상근감리원 중에서 – 수석감리원 ) ★
[ 참고 ] 상근 감리원 : 감리업체 근무 / 비상근 감리원 : 비근무 감리원
412

---

## Page 413

II. 감리인력 배치 - 정보시스템 감리기준 제 2 장 감리 실시시기 및 인력 배치 등 ★★★
① 감리법인은 실제 감리에 투입된 기간이 1 년 이상인 수석감리원 중에서 감리대상사업의 감리업무를 총괄할 수
있는 능력과 경험을 갖춘 상근 감리원을 총괄감리원으로 배치하여야 한다 .(1 상 : 1 년 이상 / 상근 감리원 )
② 감리법인은 해당 감리업무 수행에 필요한 자격ㆍ경력ㆍ교육 등 능력과 경험을 갖춘 사람을 감리인력으로
배치하여야 한다 .
③ 제 2 항에 따른 감리인력은 전체 투입공수의 50 퍼센트 이상을 해당 감리법인 소속의 상근 감리원으로
배치 하여야 하며 전체 감리인력의 30 퍼센트 범위 내에서 유비쿼터스기술 , 모바일 , 정보보호 , 법률ㆍ회계 , 국방
등 다른 분야의 전문가를 배치할 수 있다 .
④ 제 3 항에 따른 전문가는 총괄감리원의 책임하 에 감리업무를 지원하거나 자문하는 역할을 수행한다 .
( 아래 내용 중요 ) – 아래는 상주감리원에 대한 설명이다 .
⑤ 제 3 조제 2 항에 따라 상주감리를 하는 경우 감리법인은 다음 각 호 어느 하나에 해당하는 수석감리원을
상주감리원으로 배치하여야 한다 . (OR 임 !!!)
1. 감리대상 사업비 20 억원 이상인 감리에 참여한 경력이 3 회 이상 ★
2. 프로젝트관리 (PM) 또는 품질관리 (QA) 분야의 경력이 3 년 이상 ★
3. 그 밖에 제 10 조의 2 제 1 항에서 정한 업무를 수행하기에 적합하다고 발주자가 인정한 수석감리원 ★
( 암기법 ) 총상수 /1 상 상주감리원 : 20 – 3 – 3
413

---

## Page 414

제 10 조의 2( 상주감리 ) ① 상주감리원 은 다음 각 호의 업무를 수행하여야 한다 . ★★
1. 사업수행계획서 , 상세공정표 (WBS, Work Breakdown Structure), 개발방법론의 공정ㆍ산출물 조정
2. 과업 범위 ( 요구사항 ) 구체화 , 과업변경 영향ㆍ타당성 검토
3. 상세공정표에 따른 계획 대비 실적 점검 및 이행 상태 확인
4. 산출물에 대한 품질 검토
5. 위험요소 사전 파악 및 개선방향 제시
6. 쟁점사항에 대한 기술검토 지원 및 의견조율
7. 발주자의 의사결정지원 및 자문
8. 그 밖에 사업을 성공적으로 수행하기 위해 필요한 지원 등
② 상주감리원은 제 1 항에 따른 업무를 수행하고 정기적으로 그 결과를 발주자에게 보고하여야 한다 .
③ 상주감리원은 단계별 감리의 감리원으로 참여하여서는 아니 된다 . ★
414

---

## Page 415

정보시스템감리기준 해설서
정보시스템감리기준 해설서
정보통신부 고시 2006 - 42
NIA( 한국정보사회진흥원 ) 가 만듬
415

---

## Page 416

토픽 핵심 요약정리 - 정보시스템감리 연혁
I. 정보시스템 감리는 1987 년 국내 실시 , 현재 2017 년 3 월까지 수행
2017
416

---

## Page 417

II. 법 / 시행령
- 법에서는 공공기관에서 구축하는 정보시스템의 경우 시스템의 특성이나 사업의 규모에 따라 의무적으로
감리를 받게 하는 제도를 도입하였다 .
법
제 11 조 ( 공공기관의 정보시스템 감리 ) ① 공공기관의 장은 제 12 조의 규정에 따른 감리법인으로 하여금 정보
시스템의 특성 및 사업의 규모 등이 대통령령이 정하는 기준에 해당하는 정보시스템 구축사업에 대하여
정보시스템 감리를 하게 하여야 한다 .
시행령
제 11 조 ( 정보시스템 감리의 대상 ) ①법 제 11 조제 1 항에서 “대통령령이 정하는 기준”이라 함은 다음 각 호의
어느 하나에 해당되는 경우를 말한다 . ★★★
1. 정보시스템의 특성이 다음 각 목 중 어느 하나에 해당되는 경우 . 다만 , 총 사업비 1 억원 미만의 소규모
사업으로서 감리의 비용 대비 효과가 낮다고 공공기관의 장이 인정하는 경우를 제외한다 .
가 . 대국민 서비스 를 위한 행정업무 또는 민원업무 처리용으로 사용하는 경우
나 . 다수의 공공기관이 공동으로 구축 또는 사용하는 경우
다 . 공공기관간의 연계 또는 정보의 공동이용이 필요한 경우
라 . 그 밖에 감리를 시행할 필요가 있다고 해당 공공기관의 장이 인정하는 경우
2 . 정보시스템 구축사업으로서 사업비 ( 총 사업비 중에서 하드웨어 ․ 소프트웨어의 단순한 구입비용을 제외한
금액을 말한다 ) 가 5 억원 이상인 경우
3 . 정보기술아키텍처 또는 정보화전략계획의 수립 , 정보시스템의 운영 ․ 유지보수 등을 위한 사업으로서
감리시행이 필요하다고 해당 공공기관의 장이 인정하는 경우
417

---

## Page 418

점검 프레임워크
점검프레임워크는 개념모델에 근거하여 사업유형 / 감리시점 , 감리영역 , 감리관점 / 점검기준의 세 축으로
구성된다 .
418

---

## Page 419

정보시스템 감리 수행가이드 (V2.1 / 2013.12)
토픽 핵심 요약정리
I. 정보시스템 감리 수행가이드 개요
구분 내용 관리
이 가이드는 정보화사업에 대한 감리를 수행함에 있어서 필요한 다음 각 사항
등에 관한 실무지침을 제시할 목적으로 작성 되었다 .
NIA
목적 1) 감리 절차 , 감리 수행방법 및 준수사항
( 한국정보화진흥원 )
2) 감리점검체계에 따른 표준 점검항목
3) 감리 계획서 및 보고서 등의 서식
4) 그 밖에 감리 수행을 위해 필요한 사항
감리기준
제 23 조 ( 필요사항 공지 ) 행정안전부장관은 한국정보화진흥원장에게 이 기준의 한국정보화진흥
근거
시행 및 적용에 대한 이해를 높이기 위한 해설서 등 필요한 사항을 정하여 원장이 정하여 공지
공지하게 할 수 있다 .
419

---

## Page 420

핵심 요약정리
정보시스템 감리 수행 가이드 - 2013. 12
1.1 목적
이 가이드는 정보화사업에 대한 감리를 수행함에 있어서 필요한 다음 각 사항 등에 관한 실무지침을 제시
할 목적으로 작성되었다 .
1) 감리 절차 , 감리 수행방법 및 준수사항
2) 감리점검체계에 따른 표준 점검항목
3) 감리 계획서 및 보고서 등의 서식
4) 그 밖에 감리 수행을 위해 필요한 사항
420

---

## Page 421

I. 단계별 감리란 ?
단계별감리는 예비조사 → 현장감리 → 시정조치확인의 순서로 이루어지며 , 각 절차가 종료된 후
결과물로 감리계획서 , 감리수행결과보고서 , 시정조치확인보고서를 각각 작성하여 제출해야 한다 .
예비조사는 감리대상사업의 현황을 파악하여 현장감리 수행을 위한 감리계획서를 작성ㆍ제출하는
절차이다 .
현장감리는 감리계획서에 제시된 일정 , 점검항목 등에 따라 현장에서 감리를 수행하고 , 그 결과를
감리수행결과보고서에 작성하여 제출하는 절차이다 .
시정조치 확인은 감리수행결과보고서에 제시된 개선의견이 잘 조치되었는지를 확인하고 , 그 결과
를 시정조치확인보고서에 작성하여 제출하는 절차이다 .
421

---

## Page 422

II. 정보화사업 공통 감리절차의 현장감리 활동
- 현장감리는 사전에 발주자 및 사업자에게 송부된 감리계획서를 바탕으로 감리대상사업에 대한 검토 ,
분석 , 시험 , 상호검토 및 면담 등을 통해 문제점을 확인하고 , 개선방향을 도출하여
감리수행결과보고서를 작성하는 활동
- 정보시스템의 효율성을 향상시키고 안전성을 확보하기 위하여 제 3 자의 관점에서 해당 정보
시스템이 적절하게 개발 • 구축되고 있는지를 감리기준에 따라 점검하는 활동
422

---

## Page 423

II. 현장감리 절차도
423

---

## Page 424

IV. 정보시스템 감리 평가
가 . 감리의 평가
1) 개선 권고 유형
유형 내용
필수 발견된 문제점 중 사업목표를 달성하기 위하여 반드시 개선해야 할 사항
발견된 문제점 또는 발생 가능성이 큰 문제점 중 발주기관과 피감리인이 상호 협의를 거쳐
협의
반영여부를 결정할 수 있는 사항
권고 감리의 대상범위를 벗어나지만 사업목표 달성에 도움이 되는 사항
2) 개선시점
유형 내용
장기 장기적인 관점에서 지속적으로 개선해야 하는 사항
단기 감리대상 사업의 해당 구축 단계 종료 이전에 개선해야 하는 사항
424

---

## Page 425

3) 과업내용 이행 여부 점검 시 적 / 부 작성 기준
평가 내용
적합 검사기준의 검사방법에 따라 점검한 결과가 예상결과와 판정기준에 부합한 경우
검사기준의 검사방법에 따라 점검한 결과가 예상결과와 판정기준에 부합하지 않거나
부적합
중대한 결함이 발생한 경우
1) 점검과정에서 테스트 환경이 준비되지 않거나 ,
2) 선행 기능의 결함으로 점검하지 못한 경우와
3) 외부환경 변화 ,
4) 발주기관의 요청이나 합의에 의해 진행중인 경우
점검 제외
☞ 점검제외 인 경우 관련 증빙에 점검 제외 사유를 명확히 작성하여야 함 .
[ 주의 ] 점검 제외는 작업이 미완료된 작업이 아니라 , 점검을 못하는 것이다 .
425

---

## Page 426

[ 빈출 확인 사항 ] SD 감리 프레임워크
426

---

## Page 427

[ 빈출 확인 사항 ] SD 감리 프레임워크 : SD 감리 감리 영역 점검사항
감리영역 개요
감리시점
현행 시스템 운영환경을 분석하고 , 시스템 관련 사용자 요구사항을 도출 및 분석하여
시스템아키텍처
상위 수준의 시스템 아키텍처를 정의하고 기술하였는지 점검
업무영역에 대한 분석과 사용자요구사항을 도출 , 분석하고 , 시스템 기능에 대한
응용시스템
UseCase 모형 정의 및 분석 클래스 도출을 적정하게 수행하였는지 점검
요구분석
현행 업무 및 시스템의 데이터베이스 관련 현황을 분석하고 , 사용자 요구사항을 충분히
도출하였는지 확인하고 , 이를 토대로 개념적 수준의 엔티티 클래스를 충분히
데이터베이스
도출하였는지 점검
프로토타이핑 등 기술 검증을 통하여 최종적인 시스템 아키텍처를 적정하게 설계하고 ,
시스템아키텍처
전반적인 시스템 전환계획을 수립하였는지 점검
요구분석 결과와 업무 및 사용자요구사항에 대한 상세 분석에 따라 시스템 기능에 대한
UseCase 모형 및 클래스를 충분히 정제하고 , 시스템 기능을 구현 가능한 수준으로
응용시스템
분석설계
설계하였는지 점검
요구분석 결과 및 상세 분석에 따라 엔티티 클래스를 충분히 정제하고 , 데이터의 분산 ,
무결성 , 성능 , 백업 / 복구 등을 고려한 상세설계와 초기데이터 구축 및 전화 계획수립을
데이터베이스
적정하게 수행하였는지 점검
설계에 따라 시스템 도입 , 설치를 위한 시험 및 검증을 수행하고 , 시스템 시험계획을
시스템아키텍처
적정하게 수립하였는지 점검
설계에 따라 응용시스템 기능의 충분성 , 완전성 , 무결성 , 편의성 , 적정성을 확보할 수
있도록 컴포넌트 도입 또는 개발에 의해 구현하고 , 단위 기능에 대한 검증을
구현 응용시스템
수행하였는지 점검
설계에 따라 데이터의 무결성 , 성능 , 보안성을 확보할 수 있도록 구현하고 , 기능에 따른
데이터베이스
데이터 정합성을 검증하였는지 점검
통합시험 , 시스템시험을 통하여 구현된 시스템이 통합적인 관점에서의 기능 완전성과
시험 시험활동
성능 , 안전성 , 보안성 확보 여부를 검증하였는지 점검
운영준비 시스템을 운영하기 위한 시스템 설치 및 배포 , 초기데이터 구축 등의 준비를 완료하고 ,
전개
시스템이 사용자에게 이관 및 운영될 수 있도록 준비하였는지 점검
427

---

## Page 428

[ 빈출 확인 사항 ] 감리보고서 : http:// cafe.naver.com/81th/3791
428

---

## Page 429

[ 빈출 확인 사항 ] 감리보고서
III. 종합의견
429

---

## Page 430

참고 문헌
□ 국내 · 외 표준
• ISO 12207 Information Technology - Software Life Cycle Processes
• ISO 12207:1995/Amd:2002 Information Technology – Software
Life Cycle Processes Amendment 1
• ISO 15288 System engineering - System life cycle processes
• TTAS.IS -9126.1 소프트웨어 품질 특성 및 메트릭 - 품질 특성 및 부특성
• COBIT(Control Objectives for Information and related Technology))
• ITIL(Information Technology Infrastructure Library)
• BS15000 IT Service Management Standard
• PMBOK(Project Management Body Of Knowledge )
□ 정보시스템 개발 방법론
• 관리기법 /1
• 정보공학방법론
• LG CNS PPC(Platinum Process Continuum)
• 삼성 SDS Innovator
• 마르미 II, 마르미 III
• RUP(Rational Unified Process)
430

---

## Page 431

18. OSS
 개방형 혁신 (Open Innovation) 과 오픈소스 (Open Source) 를 비교하여 설명하시오 .
( 관리 93 회 1 교시 )
 공개소프트웨어 (OSS) 의 라이센스 모델 중 대표적인 GPL 과 BSD 의 개념을 비교 설명 하시오 .
( 관리 81 회 1 교시 )
 최근 공개 소프트웨어 (FOSS : Free & Open Source Software) 가 활발히 보급되고 있다 .
공개 소프트웨어가 국가사회 정보화 발전에 미치는 영향 ( 의미 또는 필요성 ) 을 설명 하고 ,
이러한 공개 소프트웨어가 사회에 제대로 정착 , 발전하기 위한 성공요인 과 품질개선 방안을 제시
하시오 . ( 정보관리 86 회 2 교시 )
□ 최근 정부 및 공공기관 소프트웨어 개발 프로젝트에서는 전자정부 표준 공통서비스 및 개발 프레임
워크의 적용이 확대되고 있다 . 아키텍처 중심의 소프트웨어 개발을 위한 프레임워크 개념과 프레임워
크 컴포넌트 구성을 위한 오픈소스 소프트웨어 선정 평가 프로세스 에 대하여 설명하시오 .
[ 정보관리 93 회 3 교시 ]
□ OSS(0pen Source Software) 에 대해 설명하시오 . [ 정보관리 89 회 2 교시 ]
431

---

## Page 432

18. OSS
1. 기업에서 오픈 소스 소프트웨어 (OSS, Open Source Software) 를 활용하여 비즈니스를 수행할 때
고려해야 할 요소가 다수 있다 . 다음에 대해 설명하시오 .
가 . OSS 라이선스 별 특징 비교
나 . 기업에서 OSS 관련 거버넌스의 구축 전략 [ 정보관리 98 회 3 교시 ]
2. 기업 측면에서 오픈소스 소프트웨어를 도입하여 시스템을 구축할 때 기업 가치가 향상되기를 원한다 .
다음을 설명하시오 .
가 . 오픈소스 소프트웨어의 정의
나 . 기업 혁신 탐색 (Exploration) 과 효율 추구 (Exploitation) 관점에서 오픈소스
소프트웨어 의 활용 방식 비교
다 . 오픈소스의 비즈니스 모델 사례 제시 ( 111 회 , 정보관리기술사 , 3 교시 )
3. FOSS(Free and open-source software), Open source license 종류 , 준수 방법 , 고지 의무 ,
그리고 라이선스 양립성 에 대하여 설명하시오 .
432

---

## Page 433

18. OSS
I. 무상으로 공개된 소스코드 혹은 공개 소프트웨어의 개요
가 . OSS ( Open Source Software ) 의 정의
프로그램저작권의 공유정신을 가지고 소스코드를 공개할 뿐 아니라 , 프로그램의 사용 · 수정 · 배포 및
재배포의 자유를 보장하는 오픈소스 소프트웨어 라이선스를 통하여 이용을 허락하는 소프트웨어
나 . 오픈 소스 소프트웨어의 조건
- 소스에 대한 접근 허용 및 배포조건을 수행해야 함 .
OSS 의 조건 설 명
자유배포 (Free
소프트웨어의 일부 또는 전부가 재배포 못하도록 제한을 설정 할 수 없음
Redistribution)
소스 코드 프로그램 저작물에는 반드시 소스 코드가 포함되거나 무료 다운로드 허용 등
(Source Code) 소스코드를 제공 받을 수 있게 조치
파생저작물 프로그램 원저작물의 개작이나 , 이를 이용한 2 차적 창작이 허용되어야 함 - >
(Derived Works) 동일 조건 재배포 될 수 있어야 함
소스코드의 보존
(Integrity of the 프로그램 개작을 목적으로 소스코드와 패치 파일을 함께 제공할 경우 라이선
author’s 스 안에 소스코드의 수정을 제한하는 항목을 추가할 수 있음
Source code)
- 개인이나 단체에 대한 차별 금지
차별 금지
- 사용 분야에 대한 차별 금지
433

---

## Page 434

OSS 의 조건 설 명
라이선스의 배포 프로그램에 대한 관리는 반복되는 배포에 따른 별도의 라이선스 승인이나 양도
(Distribution of License) 과정 없이도 모든 사람에게 배포
- License must not be specific to a product
라이선스 적용상의 동일성 유지
- 모든 배포 단계에서 동일한 효력 ( 최초의 배포된 상태와 같이 )
다른 라이선스의 포괄적 수용 라이선스에 대한 오프소스를 함께 배포되는 소프트웨어에 대한 제한 설정 안됨
II. 오픈 소스의 논리구성도와 유사 소프트웨어
가 . Open Source 의 논리구성도
434

---

## Page 435

나 . 오픈 소스 소프트웨어와 구별되는 유사 소프트웨어
구 분 설 명
- Public domain 으로 소프트웨어를 공개하는 것은 모든 저작권을 포기한다
Public Domain 는 것을 의미
- 미국과 같은 법률적 환경에서 가능
- 바이너리 형태로만 배포되며 , 약간의 사용료만 부과
Shareware
- 셰어웨어 제품은 라이선스에 대한 대가 지불을 높이기 위한
수단으로 사용자 편의성을 감소시키는 메커니즘 내장
- 사용에 대한 요금을 부과하지 않는 바이너리 형태 배포
Freeware
- 마케팅 전략 의 일부분으로 이용 ( 예 ) MS IE
435

---

## Page 436

III. 주요 오픈 소스 소프트웨어 라이선스
- 라이선스 (License, 사용허가권 ): 사용자의 자유로운 사용 , 복제 , 수정 , 배포를 보장
- OSI(Open Source Initiative) 는 Open Source 를 인정받기 위한 10 가지 조건을 정의 , 해당여부 판단 ,
인증 마크 부여 (ISO 에서 인정하는 유형 )
- 해당하는 프로젝트 중 77% 가 GPL/LGPL 을 사용 , 그 뒤에 BSD 가 차지
가 . GNU General Public License 2.0(GPL) /* GNU's Not Unix */ 그누
1) GPL(General Public License) 의 정의
- 자유소프트웨어 재단 (Free Software Foundation; FSF) 이 자신의 소프트웨어에 대한 저작권을
확보 한 뒤 , 이러한 권리를 전제로한 소프트웨어의 자유로운 공유 및 수정을 보장하기 위해
만들어진 License
- GPL 을 가진 프로그램을 유료로 판매하는 것은 가능하지만 , 반드시 전체 소스코드는 무료로 공개해야
합니다 .
2) GPL 의 주요 내용
- 소프트웨어에 대한 자유로운 사용 , 복제 , 배포 및 수정을 허용
- 소프트웨어를 배포하는 경우 , 저작권 표시 , 보증책임이 없다는 표시 및
GPL 에 의해 배포 된다는 사실 명시
- Linux 를 기반으로 개발된 Application 은 소스 공개할 필요 없음
- SW / Project: GNU, Linux, GCC, Apache, MySQL, PHP
GNU GPL 로고
436

---

## Page 437

3) GPL (General Public License) 3.0
구분 내용
정의 GPL 2.0 의 내용을 적절히 수정해서 재구성함
• 각종 용어의 도입 및 기존 용어의 수정
• DRM(Digital Rights Management) 관련 내용 추가
• OSS 라이선스의 급격한 증가와 양립성 문제를 완화
내용 • 설치정보 (Installation Information) 추가
• DRM: 각국 법률에 의해 보호되는 이익을 포기 시킴
• 특허 소송 제기 시 , 오픈 소스 라이선스 종료됨을 명시
• Apache License 2.0 및 Affero ( 아페로 ) GPL( 서버 소스도 공개 ) 과 양립 가능
SW/Project
437

---

## Page 438

III. 주요 오픈 소스 소프트웨어 라이선스
나 . GNU Lesser General Public License 2.1(LGPL)
1) LGPL 의 정의
- FSF 가 일부 Library 에 GPL 보다 다소 완화한 형태 로 오픈 소스 소프트웨어의 사용을 장려하기 위한
전략적 차원의 License . - > 본인의 링크 ( 응용 프로그램 ) 소스 코드는 공개 안해도 됨 !
- 목적 : 사용장려 , 표준 유도
2) LGPL 의 주요 내용
- 소프트웨어에 대한 자유로운 사용 , 복제 , 배포 및 수정 허용
- 소프트웨어를 배포하는 경우 , 저작권 표시 , 보증책임이 없다는 표시 및 LGPL 에 의해 배포된다는
사실 명시
- LGPL Library 의 일부를 수정하는 경우 (= 파생된 라이브러리를 수정한 경우 ), 수정한 Library 를
LGPL 에 의해 소스 코드 공개해야 한다 .
다 . BSD License
1) BSD(Berkeley Software Distribution) 의 정의
- GPL/LGPL 보다 배포 및 라이선스가 덜 제한적인 License
- GPL 과의 가장 큰 차이 : BSD License 를 따르는 소스코드를 구해 , 수정한 후 , 소스를 공개하지 않고
BSD 가 아닌 , 다른 라이선스 적용하여 판매 가능 .
438

---

## Page 439

III. 주요 오픈 소스 소프트웨어 라이선스
라 . MPL(Mozilla Public License)
1) 정의 : 네스케이프 (Netscape) 사가 개발한 모질라 (Mozilla) 브라우저의 소스 코드를 공개하는데 사용한
라이선스 .
- 소스 코드와 실행 파일을 분리 / 보완하여 만듦 .
2) 내용
- 소스 코드 : 소스 코드는 반드시 공개되어야 하며 소스 코드를 수정하였을 경우에는 최초의 저작자에게
수정한 내용을 통지해야 함 .
- 실행 파일 : 실행 파일 자체를 독점 라이선스로 배포할 수 있음 .
- 저작자의 이익을 보호할 뿐 아니라 , 수정 , 보완된 소프트웨어의 배포를 통한 상업적인 이익을 보호 .
- 적정한 가격을 요구할 수 있고 , 불법 복제에 대해 제재를 가할 수도 있음 .
- 기술적으로 개선을 할 경우 , 코드를 보고 수정한 후 , 컴파일하여 새로운 독창적인 버전으로 재배포할 수
있음 .
3) SW / Project
- Mozilla
439

---

## Page 440

III. 주요 오픈 소스 소프트웨어 라이선스 비교
소프트웨어 무료 배포 이용상 소스 코드 취득 파생물 상용 SW 와
라이선스 이용 허용 제한 없음 수정 가능 재공개 연결가능성
Public Domain O O O O O
Shareware O O
Freeware O O O
GPL O O O O O X
O
( 라이브러리
LGPL O O O O O
소스 재공개
해야함 ), X
BSD O O O O X O
LGPL 라이브러리의 소스코드를 수정하였을 때에는 2 차적 파생 저작물에 해당하므로 , 라이브러리의
소스코드를 제공해야 합니다 . 위의 소스 재공개는 파생물에 한함 ) / 본인 소스는 공개 안 함 .
즉 GPL 은 응용 프로그램 ( 본인 부분까지도 ) 공개를 해야 했음 .
440

---

## Page 441

IV. 주요 오픈 소스 제품과 개발 프로젝트
분 류 항 목 내 용
- 웹서버 시장 점유율 60% 차지 , MS IIS 30% 차지
Apache
- 많은 소프트웨어 솔루션에 포함되어 있음
- 1993 년 처음 발표 , Free BSD 는 Unix 시스템인 BSD 기반 위에서
Free BSD
개발 , 오픈 소스 UNIX 운영체제 제공
운영체제
(Operating GNOME GNU’s Network Object Model Environment
System)
- ‘GNU is not UNIX’ 의 머리 글자 조합
GNU
- OS 커널을 위한 프로젝트 ; GNU 와 Linux 결합 성공적
- UNIX 를 퍼스널 컴퓨터에서 사용을 위한 리누스 토발즈 개발
Linux
- 리눅스는 가장 잘 알려진 오프 소스 프로젝트
DNS 와 - DNS(Domain Name System) 을 전달하는 BIND
Bind - BIND 는 호스트명을 IP 주소로 변환시켜주는 프로그램
Mozilla - Netscape 에 의해 시작된 오픈 소스 브라우져 프로젝트
Sendmail - 메일 프로토콜의 개방성과 라우팅 기능성 , 파일의 유연성 초점
응용 소프트웨어
MySQL - 1994 년에 개발된 관계형 데이터베이스 서버
PostgreSQL - 객체 관계형 데이터베이스
Perl - 1987 년 개발 , CGI 연동으로 동적인 웹페이지 개발에 적합 언어
Python - 다이나믹 오브젝트 오리엔티드 프로그래밍 언어
441

---

## Page 442

V. OSS 의 장단점 및 품질 이슈
가 . OSS 의 장점 .
장점 설명
일반적으로 오픈 소스는 웹 상에서 무료로 다운 로드 및 소스 코드 수정 / 재
Low Entry Cost
배포가 가능하여 초기 개발을 시작하기 위한 비용이 적게 요구 된다는 장점 .
Fast, Flexible 오픈 소스 커뮤니티는 보통 최신 기술 정보 및 문제점과 해결책을 공유하는
Development 형태로 운영되기 때문에 독점 프로그램에 비해 기술 발전 속도가 빠름 .
Open Formats & 주로 오픈 Format 또는 Protocol 을 사용하기 때문에 서로 다른
Protocols 소프트웨어간 상호 연동성이 보장되는 장점 .
Reliability & Stability 개발 되는 독점 프로그램에 비해 비교적 안정적으로 동작 .
Networking 오픈 소스가 확산된 가장 큰 이유로 다양하고 강력한 Networking 기능 지원 .
442

---

## Page 443

V. OSS 의 장단점 및 품질 이슈
가 . OSS 의 단 점 .
장점 설명
- 대부분의 사용자들이 윈도우 기반의 GUI 를 갖고 있는
Application 에 익숙해 있지만 Linux 기반의 어플리케이션은 이런
어플리케이션
면이 많이 부족함 .
부족
- Linux 기반으로 개발된 많은 Application 들은 윈도우 기반
Application 과 호환되지 않는 점도 문제점 .
- 상용 프로그램에 비해 체계적인 문서를 가지고 있지 못함 .
빈약한 문서 - 경우에 따라서 개발 과정의 지연을 가져올 수도 있기 때문에
활용하고자 하는 오픈 소스의 문서화 정도도 반드시 검토 .
- 오픈 소스는 영리를 목적으로 하는 회사에서 개발 되는 것이
불확실한 개발
아니고 자발적인 참여 기반의 자유롭게 개발되는 것이 특징으로
로드 맵
Roadmap 을 기대하기 힘듦 .
오픈 소스에 기업이 보유한 특허 및 소스 코드를 포함할 경우 , 오픈
지적 재산권 소스 라이선스는 일반적으로 Royalty - free 를 요구하고 있어
Royalty - free 를 원치 않는 경우 오픈 소스를 사용할 수 없음 .
443

---

## Page 444

V. Open source 라이선스 양립성
구 분 설 명
- 서로 다른 의무사항을 가진 공개 SW 라이선스는 의무사항 충돌로 인해
양립 (Compatibility) 이 불가능한 경우가 발생하는 문제
개 념
- 소프트웨어 개발시 기존에 만들어진 코드를 재사용하거나 결합하는 경우에
결합되는 각 코드의 라이선스끼리 상충되는 경우 발생
- 서로 다른 오픈소스 SW 의 라이선스 의무조항이 상충하는 문제에 따라 이를
내 용 해결할 목적으로 타 라이선스의 수용 여부를 명시
- 양립할 수 없는 경우 배포 불가능
- 라이선스 정책으로 프로젝트의 결과물을 3 가지 라이선스 (MPL, GPL,
모질라 프로젝트 LGPL) 로 배포하도록 하고 있는데 , 이를 통해 라이선스의 양립성으로
(Mozilla Project) 인한 불확실성을 제거하고 모질라 코드 (Mozilla Code) 를 GPL 이나
LGPL 기반의 응용프로그램에 이용가능
- GPL 3.0 의 초안에서는 이를 해결하기 위하여 이용자들이 추가적
GPL
제한이나 허용 조건을 선택 할 수 있게 하는 등 폭넓게 규정
문제해결
- GNU, 리눅스 배포판 업체들의 추가적인 제한 및 허용 규정으로
수많은 프로그램들이 각기 다른 GPL 조건을 가진다고 비판
- 비판 내용을 어느 정도 수용하여 특허보복조항을 11 조에 포함
GPL 3.0
하여 아파치 라이선스 2.0 과 양립 가능 해 졌으며 , 네트워크서버
형태로 이용하는 경우 또한 소스코드를 제공하도록 요구하는
444

---

## Page 445

19. OSHW
VIII. SW 품질 표준 및 종합
OSHW
1. 오픈소스 하드웨어 (Open Source Hardware) 의 개념과 구성요소를 설명하고 아두이노 (Arduino) 와
라즈베리파이 (Raspberry Pi) 를 비교하여 설명하시오 .
2. 사물인터넷의 발달과 함께 OSHW 의 중요성이 증대되고 있다 . 아두이노의 유형 중 UNO( 우노 ) 와
Lilypad ( 릴리패드 ) 에 대하여 설명하고 , 개발도구인 스케치 (Sketch) 와 스크래치 (Scratch) 를 비교하여
설명하시오 .
(KPC 모의고사 , 출제예상문제 )
445

---

## Page 446

제 4 부 소프트웨어 개발
OSHW 관련 토픽 예상 목록
86 아두이노 ( Arduino) UNO( 우노 ), Lilypad ( 릴리패드 )
87 라즈베리파이 (Raspberry Pi)
OSHW
88 스케치 ( Sketch)
89 스크래치 ( Scratch) 기타 표준
446

---

## Page 447

제 4 부 소프트웨어 개발
OSHW 특징
CA 도메인에서 강의 정리 예정입니다 .
447

---

## Page 448

Chapter IX. SW 비용산정
1. SW 비용산정 일반
2. LOC 방법
3. Function Point
4. SW 사업 대가산정 가이드
448

---

## Page 449

Chapter IX. SW 비용산정
IX. SW 비용산정
기출문제
1. Function Point 의 특징 및 요구분석 단계 이후의 Function Point 를 이용한 소프트웨어
비용산정 절차와 활성화 방안에 대해 기술하시오 .
( 조직 84 회 4 교시 )
2. 기능점수 (Function Point) 측정 에 대하여 아래의 내용을 근거로 각 질문에 답하시오 .
[ 업무기능요건 ]
가 . 인사담당자가 인사기본정보 ( 사원 DB, 부서 DB) 를 관리한다 .
나 . 인사담당자가 임직원의 직무정보 ( 사원 DB, 직무 DB) 를 산업인력관리공단의 표준직무 DB 와 연계하
여
관리한다 .
다 . 인사담당자가 부서별 각종 최신 통계자료 ( 사원 DB, 직무 DB, 부서 DB) 를 조회 ? 출력한다 .
가 . 기능점수 산출방법의 간이법과 정규법의 차이점을 비교 설명하시오 .
나 . 간이법을 적용하여 주어진 [ 업무기능요건 ] 에 대한 트랜잭션 기능 (Transaction Function) 과 데이터
기능 (Data Function) 을 산출 하시오 .
다 . 간이법을 적용하여 주어진 [ 업무기능요건 ] 에 대한 기능점수를 산출하시오 .
( 복잡도는 ISBSG 의 평균데이타를 이용할 것 )
ISBSG(International Software Benchmarking Standards Group) 의 평균복잡도
( 관리 84 회 3 교시 )
449

---

## Page 450

Chapter IX. SW 비용산정
IX. SW 비용산정
기출문제
3. 신규 소프트웨어 개발 프로젝트 계획단계에서 기능점수를 측정하였더니 아래의 [ 표 1] 과 같이 기능이
식별되었다 . 측정시점에서 신규 개발기능의 세부내용에 대한 개별복잡도 측정이 어려워 평균복잡도
가중치를 적용키로 하였으며 , 다른 요구기능은 없다고 가정하고 다음 질문에 대하여 설명하시오 .
표 1) 기능점수 식별예시
구분 기능수 ( 개 )
내부논리파일 (ILF) 12
데이터 기능
외부논리파일 (ELF) 6
외부입력 (EI) 24
트렌잭션 기능 외부출력 (EO) 3
외부조회 (EQ) 12
표 2) 기능점수 평균 복잡도 가중치
유형 내부논리파일 외부연계파일 외부입력 외부출력 외부조회
가중치 7.3 5.4 4.0 5.1 3.8
1. IFPUG 의 기능점수 측정 절차를 설명하시오
2. 기능별 평균점수와 개발 기능점수를 구하시오
3. 기능점수 측정의 유의사항과 기능점수 측정결과에 대한 지식화 방안을 제시하시오 ( 관리 83 회 3 교시 )
4. 소프트웨어 개발비 산정을 위한 경험적 추정 모델을 3 가지 이상 열거하여 설명하고 ,
우리나라의 현행 소프트웨어 개발비 산정 기준의 특징을 기술하시오 .
( 관리 71 회 2 교시 )
450

---

## Page 451

Chapter IX. SW 비용산정
5. 기능 점수 (Function Point) 산출 방법에 대하여 설명하고 간이법을 적용하여 아래의 이벤트 (Event)
리스트와 "ISBSG(International Software Benchmark Standard Group) 평균 복잡도 " 를 근거로 하여
기능 점수를 산출하시오 .
< 이벤트 (Event) 리스트 >
가 . 담당자는 고객 주문을 입력 , 수정 삭제한다 . ( 고객 DB ): EI
나 . 인사 담당자는 사원 목록을 부서 단위로 조회한다 . ( 사원 DB, 부서 DB ): EO
다 . 인사 담당자는 사원 목록을 단순 출력한다 . ( 사원 DB ): EO
라 . 인사 담당자는 일정 금액 이상의 급여 수령자 사원 목록을 검색한다 . ( 사원 DB, 급여 DB ): EO
마 . 원화에 대한 미국 달러 (USD) 가치를 찾기 위해 A 은행 외환 DB 에서 환율을 검색한다 . ( 외환 DB ): EO
바 . 인사 담당자는 5 년 경력 이상이고 , 해당 직무 수행 경험이 있는 사원 목록을 추출한다 . ( 사원 DB ): EO
사 . 인사 담당자는 신입 / 경력 사원 입사 시 사원 파일을 갱신한다 . ( 사원 DB ): EI
아 . 인사 담당자는 외국 사원 입사 시 사원의 급여를 결정하기 위해 H 연합회 통화 정보를 참조한다 . : EO
( 사원 DB, 급여 DB, 통화 DB)
자 . 회계 시스템은 전표 번호 ( 부서 번호 중 앞자리 2 + 년도 + 일련 번호 ) 를 자동 채번한다 . ( 전표 DB ): EO
차 . 인사 담당자는 사원 현황을 엑셀 파일로 업로드 시킨다 . ( 사원 DB ): EI
<ISBSG(International Software Benchmark Standard Group) 평균 복잡도 >
기능 유형 평균 복잡도
EI 4.3
EO 5.4
EQ 3.8
ILF 7.4
EIF 5.5
( 정보관리 105 회 2 교시 6 번 )
451

---

## Page 452

Chapter IX. SW 비용산정
6. S/W 프로젝트의 규모척도인 기능점수 (Function Point) 의 장단점을 설명하고 , LOC(Line Of Code) 와
COCOMO(Constructive Cost Model) 와의 차이를 설명하시오 .
( 컴퓨터시스템응용기술사 , 107 회 4 교시 2 번 )
452

---

## Page 453

1. SW 비용산정 일반
IX. SW 비용산정
I. 소프트웨어의 적정한 비용산정을 통한 대가산정방식 , 소프트웨어 비용 산정의 개요
가 . 개발비용 산정의 정의
- 소프트웨어 규모파악 ( 양적인 크기 , 질적인 수준 ) 을 통한 소요공수와 투입자원 및 소요기간을
파악하여 실행 가능한 계획을 수립하기 위해 비용을 산정
- 단위작업공수 ( 비용 ) 를 통한 총공수 ( 총비용 ) 산정 (WBS 에 근거하여 비용산정 )
나 . 규모산정의 의의
- 낮게 산정 시 : 품질문제 발생 , 납기문제 , 개발자 부담 가중
- 높게 산정 시 : 예산낭비 , 일의 효율성 저하
453

---

## Page 454

1. SW 비용산정 일반
IX. SW 비용산정
다 . 기능점수 방식에 의한 소프트웨어 개발비 절 차
454

---

## Page 455

SW 개발비 = 개발비 + 직접경비 + 이윤 ( 개발비의 25% 이내 )
455

---

## Page 456

II. 소프트웨어 규모산정 방법종류
가 . 하향식 산정방법
- 경험적 단언 ( 시스템 이해한 후 ), 개발자 합의 ( 인력 , 시스템 크기 , 예산 )
- 전문가 감정과 델파이 방식 이용
나 . 상향식 산정방법
- 업무분류구조 정의 , 각 구성요소에 대한 독립적 산정 , 집계
- LOC 기법 , 개발 단계별 인원수 기법 이용
다 . 수학적 산정방법
- 소프트웨어 비용산정의 자동화 - FP , COCOMO
[ 참고 ] 소프트웨어사업 대가의 기준
16) 2009 년 5 월 지식경제부 고시 제 2009 - 102 호로 개정 고시
․ 정보전략계획수립비 , 평균복잡도 , 기능점수당 단가 , 자료입력원 노임단가 조정
․ 코드라인 수에 의한 산정방식 폐지
․ 투입인력의 수와 기간에 의한 산정방식의 2010 년 5 월 1 일 이후 적용불가
․ 소프트웨어 재개발비 산정기준 개정
․ 상용 소프트웨어 유지보수 및 소프트웨어 운영 대가기준 추가
17) 2010 년 2 월 지식경제부 고시 제 2010 - 52 호로 개정 고시
․ 대가기준 관리를 위한 전담기관 지정
․ 기능점수당 단가 조정
[ 최근 ] 기존 정부 고시의 정적인 형태로 유지되어 왔던 SW 사업 대가의 기준을 2012 년 2 월 26 일
이후 민간으로 이양 : SW 사업 대가산정 가이드 참조
456

---

## Page 457

2. LOC 방법
IX. SW 비용산정
I. 프로그램 라인수를 평가하여 SW 비용을 산정하는 기법 , LOC 의 개요
가 . LOC(Lines of Code) 의 정의
- 소프트웨어 각 기능의 LOC( 원시 코드 라인수 ) 의 낙관치 , 기대치 , 비관치를 측정하여 예측치를
구하고 이것으로 비용을 산정하는 기법
나 . LOC 와 FP 의 비교
구 분 Function Point LOC
특 징 기능 중심의 산정 크기중심의 산정방법
장 점 기능고려 , LOC 단점 보완 사용이 쉬움
단 점 복잡도 산정→ 주관개입 단순 , Code 재사용 무시 등
문제 ) 네 개의 모듈로 구성된 프로젝트가 있다 . LOC(Line of Code) 를 기반으로 한 각 모듈의
규모 추정이 아래와 같을 때 , 이 프로젝트의 총 규모는 몇 LOC 인지 계산하시오 .
모듈 번호 낙관적 LOC 보통의 LOC 비관적 LOC
1 250 500 750
2 100 200 300
3 200 600 1,000
4 60 100 200
457

---

## Page 458

II. 예제의 총 LOC 규모 계산
모듈 번호 낙관적 LOC 보통의 LOC 비관적 LOC
1 250 500 750
2 100 200 300
3 200 600 1,000
4 60 100 200
[ 계산 ]
모듈 1 = (250 + 500*4 + 750 ) / 6 = 500
예측치 = ( 낙관치 + 4* 기대치 + 비관치 ) / 6
모듈 2 = (100 + 200*4 + 300 ) / 6 = 217
1) 낙관치 : 측정된 프로그램의 라인 수가 가장 적음을 의미
모듈 3 = (200 + 600*4 + 1000 ) / 6 = 600
2) 기대치 : 측정된 프로그램 라인 수가 평균임을 의미
모듈 4 = (60 + 100*4 + 200 ) / 6 = 110
3) 비관치 : 측정된 프로그램 라인 수가 가장 많음을 의미
[ 총 작업량 ]
= 모듈 1 + 모듈 2 + 모듈 3 + 모듈 4
= 500+217+600+110
= 1427
458

---

## Page 459

3. Function Point(ISO/IEC 14143)
IX. SW 비용산정
I. 사용자의 요구기능을 파악 하여 기능점수분석법을 적용한 SW 규모측정 방식 , FP 의 개요
가 . FP (Function Point) 의 정의
- 소프트웨어의 양과 질을 동시에 고려한 소프트웨어 규모 측정방식의 일종 ( 1979 년 IBM FPA)
- 정보처리규모와 기능적 복잡도에 의해 소프트웨어 규모를 사용자의 관점에서 측정하는 방식
나 . FP 의 등장배경
- 프로그램의 재사용으로 인한 생산성 향상으로 기존 LOC 방식의 문제점 극복
구 분 Function Point LOC
특 징 기능 중심의 산정 크기중심의 산정방법
장 점 기능고려 , LOC 단점 보완 사용이 쉬움
단 점 복잡도 산정→ 주관개입 단순 , Code 재사용 무시 등
II. FP 의 특징
가 . 최종 사용자 입장에서 S/W 규모를 견적 ( 개발자 입장에서 S/W 견적량인 소스코드의 양과 무관 )
나 . 프로젝트 완료 후 생산성 평가를 위해 개발되었으나 사전에 개발소요공수를 예측하는 모델 사용 가능
다 . 개발환경과 기술에 무관하게 측정가능하고 , 사용자 요구에 따라 시스템 기능 설계 시 개발 중에도
측정 가능함
라 . 생산성과 품질 등의 척도로도 활용 가능
마 . FP 의 측정을 위해서는 모든 기능과 각 기능별 복잡도가 식별되어야만 함 . 제안단계까지는 추정은
가능하나 측정 ( 산정 ) 은 불가능 . 따라서 , 알려지지 않은 기능과 그 기능의 복잡도에 대한 가정 허용
459

---

## Page 460

3. Function Point(ISO/IEC 14143)
소프트웨어 기능규모 측정 방법의 발전추이
※ 출처 : Charles Symons, Software Measurement Services Ltd., 2002
460

---

## Page 461

III. FP 절차
유범이의 데 ( 이 ) 트
3. 데이 터 기능
측정
5. 미조정
기능점수 결정
4. 트 랜잭션
2. 측정 범위 와
기능 측정
1. 측정 유형
7. 조정
어플리케이션
결정
기능점수 결정
경계 식별
6. 조정인자
결정
[ 참고 ] 기능점수 산정방식의 절차로서 , 각 단계별 내용에 대한 이해를 통해 암기 필요
461

---

## Page 462

가 . 측정유형결정
구분 종류 내용
개발 프로젝트 - SI 프로젝트가 종료된 후 , 사용자에게 인도되는 SW
개선 프로젝트 - SW 추가 , 수정 , 삭제 부분에 대한 SW 비용 산정 ( 기존 SW 에서 )
측정 유형 결정
- 사용자가 사용하고 있는 소프트웨어의 현재 기능을 측정
어플리케이션
( 설치된 기능점수 측정 )
[ 참고 ] SW 사업대가 기준에서는 위의 3 가지 유형 중 ' 개발프로젝트 기능점수 ' 만을 채택
나 . 측정범위와 어플리케이션 경계 식별
구분 종류 내용
측정범위와 어플리케이션 범위 결정 - 개별 변경할 SW 에 대한 전체 범위 결정
경계 식별
경계 분류 - 각 어플리케이션의 경계를 분류하는 과정
[ 사례 ]
462

---

## Page 463

다 . 데이터 기능 유형 (Data Function Type)
1) 내부논리파일 (ILF; Internal Logical File); 경계 내에서 유지되는 Data 및 제어 정보
논리적으로 연관된 데이터 그룹 과 제어 정보를 말하며 , 어플리케이션 경계 내에서 유지됨
2) 외부 인터페이스 파일 (EIF, External Interface File); 어플리케이션 경계 밖에서 유지 Data 로
측정되는 어플리케이션 외부에서 참조하는 데이터 그룹
다른 어플리케이션의 ILF 의 유지
463

---

## Page 464

라 . 트랜잭션 기능 유형 (Transaction Function Type )
유형 설명
외부입력 App 안으로 들어오는 Data 나 제어정보를 처리하는 단위 프로세스
EI(External Input) 입력 , 수정 , 삭제 각각 계산한다 .
외부출력 외부 출력 ( 보고서 출력 ), 어플리케이션 경계 밖으로 보냄 , 환율 적용 …
EO(External Output) 계산 데이터를 생성 ( 자동 채번 ) , 시스템 동작 변경하는 부분이 여기임에 주의한다 .
외부 조회 ( 리스트 조회 ) 유형으로 , DB 에 있는 그대로 변경 없이 밖으로 내보냄
외부조회
계산 데이터 생성하지 않음
EQ(External Query )
수학공식 , 측정 없음
[ 사례 ]
464

---

## Page 465

마 . 미조정 기능점수 결정
- 미조정의미 : 조정할 것이 없음
조정인자 (VAF , Value Adjustment Factor )
- 데이터기능점수와 트랜잭션 점수의 합
바 . 조정인자 결정 ( 절대 안빠짐 / 지금까지 문제는 모두 가정으로 했음 )
- 조정인자 결정은 프로젝트의 분류 및 난이도가 다르므로 , 조정값 부여
- 조정항목은 총 14 개 각 시스템 특성에 따라 구분하고 , 난이도에 따라 0~5 점의 가중치 부여
[ 예 ] 데이터 통신 , 분산 데이터 처리 , 시스템 성능 , 재사용성 , 설치용이성 , 변경용이성 등
- 조정인자 계산 : ({ 각 (14 개 항목 * 0~5) 의 합 }*0.01) + 0.65 의 계산공식
※ 참고사항 1. 데이터 통신 (Data Communications)
2. 분산 데이터 처리
사 . 조정 기능점수 결정 ( 개발프로젝트인 경우 )
조정항목 (Distributed Data Processing)
3. 성능 (Performance)
( 난이도에 따라 0~5
- 미조정기능 점수 * 조정인자 계산
점의 가중치 부여 ) 4. 사용환경 (Heavily Used Configuration)
5. 처리율 (Transaction Rate)
6. 온라인 데이터 입력
IFPUG 방식
(Online Data Entry)
7. 최종사용자 편리성
(End - Used Efficiency)
8. 온라인 갱신 (Online Update)
9. 처리복잡성 (Complex Processing)
10. 재사용성 (Reusability)
11. 설치용이성 (Installation Ease)
12. 운영용이성 (Operational Ease)
13. 복수 사이트 (Multiple Sites)
14. 변경 용이성 (Facilitate Change)
465

---

## Page 466

[ 참고 ] 국내 소프트웨어 사업대가 산정 모델
[ 참고 ] 국내 소프트웨어 사업대가 산정 모델
1. 규모 보정 계수 , 300 이상이면 ,
- 규모 : 기능점수가 300 미만인 경우 0.65 적용
FP(0.108 * Log e(FP 값 ) + 0.229)
- 유형 : 업무처리용은 보정계수 1.0
- 품질 : 분산처리 , 성능 , 신뢰성 , 다중사이트
2. 어플리케이션 유형 보정 계수
- 언어 : 자바 (1.2)
466

---

## Page 467

[ 참고 ] 국내 소프트웨어 사업대가 산정 모델
3. 언어 보정 계수
[ 참고 ] 국내 소프트웨어 사업대가 산정 모델
- 규모 : 기능점수가 300 미만인 경우 0.65 적용
- 유형 : 업무처리용은 보정계수 1.0
- 품질 : 분산처리 , 성능 , 신뢰성 , 다중사이트
- 언어 : 자바 (1.2)
4 . 품질 특성 보정 계수 = 0.025* 총영향도 + 1
( 총영향도 = 분산처리 + 성능 + 신뢰성 + 다중사이트 )
467

---

## Page 468

4. 품질 특성 보정 계수 = 0.025* 총영향도 + 1
( 총영향도 = 분산처리 + 성능 + 신뢰성 + 다중사이트 )
468

---

## Page 469

IV. 기능점수 산출방법의 두 가지 유형 : 정규법과 간이법
구분 정규법 간이법
- 개략적인 사용자 요구사항을 바탕으로
- 논리적인 설계를 바탕으로 한 , 각 기능의
개념 속성을 정의하여 기능별 복잡도 매트릭 기능점수를 도출하여 평균복잡도에 의한
에 의한 기능점수 산정 방식
기능점수 산정 방식
사용시기 - 상세한 기능점수 측정 - 프로젝트 초기에 측정
- 예산 수립
- SW 분석 / 설계 , 개발 , 유지보수의 개발
사용목적 - 제안서 견적 산정
범위 , 일정 및 원가 산정
- 계약의 SW 사업대가 산정
- 데이터 기능 및 DET, RET 수 도출 (3 단계 )
RET: Record Element Type( 서브 그룹 )
DET: Data Element Type( 유일한 필드 )
측정항목 - 트랜잭션 기능 및 FTR, DET 식별 (4 단계 ) - 데이터 기능 , 트랜잭션 기능
FTR: File Type Reference( 참조파일 수 )
DET: 데이터 항목 수 ( 유일한 필드 )
[ 공통 ] 기능별 복잡도 주어짐
복잡도 - 기능별 복잡도 매트릭 (Low, Avg, High) - 평균 복잡도
469

---

## Page 470

간이법 사용
84 회 기출문제 / Source: KPC 기술사회
470

---

## Page 471

[ 풀이 ] 간이법이므로 , 평균복잡도표 이용 .
1. 데이터 기능 측정
- ILF:3( 내부 ), EIF:1( 외부 )
- 3*7.4 = 22.2
- 1*5.5 = 5.5
= 27.7
2. 트랜잭션 기능 측정
- 조회 , 출력이므로 , EI 는 없고 , EO, EQ 만 있음 . /* 각각 ILF 에 카운트 할 수도 있음 ; 본인 판단 */
- EO = 5.4 * 1 = 5.4
- EQ = 3.8 * 1 = 3.8
= 9.2
3. 미조정 기능점수 결정 : 27.7 + 9.2 = 36.9
4. 조정인자결정 ( 방정식 대입 : 0.65 ~ 1.35 까지의 값을 가짐 )
- 조정인자 계산 : ({ 각 (14 개 항목 * 0~5) 의 합 }*0.01) + 0.65 의 계산공식
- 가정필요 : 14 개 항목의 가중치 : 3 점으로 가정
- ((14*3)*0.01) + 0.65 = 1.07
5. 조정 기능점수 결정 : 미조정기능 점수 * 조정인자 계산 - > 36.9 *1.07 = 39.48 (1FP= 500,000 )
471

---

## Page 472

IV. FP 정규법
가 . 데이터 기능측정 및 DET, RET 수 도출
구분 정규법 ( 정통법 )
정통법 : 내부논리파일 (ILF) 과 외부연계파일 (EIF) 각각에 대해 데이터요소유형 (DET)
과 레코드요소유형 (RET) 을 식별하여 기능 복잡도에 따라 가중치를 결정한다 .
1) 데이터 기능 및 DET, RET 수 도출 (3 단계 )
가 . RET: Record Element Type( 레코드요소유형 )
- 레코드요소유형 (RET) 의 개수 판단 기준
A. 내부논리파일이나 외부연계파일 내에 데이터 서브그룹이 없다면
측정항목
내부논리파일이나 외부연계파일 자체를 하나의 레코드요소유형으로 식별 한다 .
B. 내부논리파일이나 외부연계파일 내에 데이터 서브그룹이 있다면 , 각각의
데이터 서브그룹을 하나씩의 레코드요소유형으로 식별한다 .
( 예 : 직원정보에 직원 부양가족정보가 연계되어 있는 경우 , RET 가 두 개임 )
나 . DET: Data Element Type( 유일한 필드 )
- 데이터요소유형 (DET) 은 데이터요소유형 (DET) 은 사용자가 인식 가능하고
반복되지 않는 유일한 속성 을 말한다 .
472

---

## Page 473

IV. FP 정규법
나 . 트랜잭션 기능 측정 : FTR, DET
구분 정규법 ( 정통법 )
2) 트랜잭션 기능 및 FTR, DET 식별 (4 단계 )
가 . FTR: File Type Reference( 참조파일 수 )
참조파일유형 (FTR) 은 트랜잭션 기능에 의해 읽히거나 유지되는 내부논리파일
또는 트랜잭션 기능에 의해 읽히는 외부연계파일 이다 .
측정항목
나 . DET: 데이터 항목 수 ( 유일한 필드 )
- 데이터요소유형 (DET) 의 개수 판단
A. 경계를 넘나드는 ( 진입 그리고 / 또는 진출 ) 모든 것을 검토한다 .
B. 트랜잭션 기능이 수행되는 동안 경계로 넘나드는 사용자가 인식할 수
있는 유일하고 반복되지 않는 각 속성을 하나씩 데이터요소유형으로 식별
한다 .
473

---

## Page 474

IV. FP 정규법 - 내부논리파일 (ILF) 과 외부연계파일 (EIF) 의 복잡도 및 기능점수 가중치
레코드요소유형 (RET) 과 데이터요소유형 (DET) 이 식별되면 , 내부논리파일 / 외부연계
파일의 복잡도와 가중치는 다음 표를 이용하여 산정한다
표 . 내부논리파일 (ILF) 복잡도 및 기능점수 가중치
외부연계파일 (EIF) 복잡도 및 기능점수 가중치
표 . 외부연계파일 (EIF) 복잡도 및 기능점수 가중치
474

---

## Page 475

IV. FP 정규법 ( 사례 2)
가 . 데이터 기능 측정 : RET, DET
475

---

## Page 476

IV. FP 정규법 ( 사례 2)
나 . 트랜잭션 기능 측정 : FTR, DET
조작이 한 개라도 있으면 EO 에 해당됨
데이터 기능측정처럼 FTR, DET 표 주어짐
476

---

## Page 477

V. SW 개발비 산정 사례
- 복잡도 / 보정요소를 반영하여 20FP( 점 ) 이 산정되었다 . ( 가정 ) 다음항목을 반영하여 SW 개발비를
산정하시오 .
[ 참고 사이트 ]
http://www.ifpug.org/
477
http://www.kfpug.or.kr/

---

## Page 478

데이터 기능 측정
전표 DB
ILF 7.4
데이터 기능 측정 = 48
478

---

## Page 479

트랜잭션 기능 측정
EI (4.3)
EO EQ
순번 트랜잭션 기능 측정
(5.4) (3.8)
입력 수정 삭제
가 1 1 1 4.3 * 3 =12.9
나 1 5.4
다 1 3.8
라 1 5.4
마 1 5.4
바 1 5.4
사 1 4.3
아 1 5.4
자 1 4.3
차 1 4.3
합계 56.6
5. 미조정 기능점수 : 104.6
6. 조정인자 결정 추가
7. 기능점수 결정 ( 기능점수에 제경비 등 비용이 포함되어 있음 )
479

---

## Page 480

SW 사업 대가산정 가이드
SW 사업 대가산정 가이드
1. 기존의 공공부문 SW 사업 대가산정은 ' 소프트웨어사업 대가의 기준 ' 과 ' 엔지니어링사업 대가의 기준 '
을 활용하여 왔다 . 하지만 ' 소프트웨어사업 대가의 기준 ' 이 2012 년 2 월 26 일 이후 폐지됨에 따라 SW 사
업 대가의 기준이 민간으로 이양되어 자율에 맡긴다는 내용을 주요 골자로 한 'SW 사업 대가산정 가이
드 ' 체계로 전환되었다 . SW 사업 대가산정 가이드에 대해 질문에 답하시오 .
가 . SW 사업 대가산정 가이드 선정 프레임워크
나 . SW 사업 대가산정 가이드 적용 범위
다 . 기존 대가기준과 비교하여 SW 사업 대가산정 가이드의 차별성
(2012 년 4 월 모의고사 )
480

---

## Page 481

I. 합리적이고 객관적인 대가산정을 위한 기준 , SW 사업 대가 산정의 개요
가 . SW 대가 산정 의 정의
- 소프트웨어의 기획 , 구현 , 운영 등 수명주기 전 단계에 대한 사업을 추진함에 있어 이에 대한 예산수립 ,
사업발주 , 계약 시 적정대가를 산정하기 위한 기준
- SW 사업 전 수명주기 동안 반복적으로 수행되는 활동으로 발주자나 수주자를 비롯한 다양한 이해관계자
들에게 큰 영향을 미치는 중요한 활동
나 . SW 대가 산정의 특징
1) 기존 정부 고시의 정적인 형태로 유지되어 왔던 SW 사업 대가의 기준을 2012 년 2 월 26 일 이후 민간
으로 이양
2) SW 산업의 동적인 상황과 글로벌 표준에 입각한 ISO12207 기반의 소프트웨어의 수명주기 ( 기획 , 구현 ,
유지보수 • 운영 ) 전반에 걸쳐 설명하고 , 보다 편리하게 수행할 수 있는 도구를 제공
481

---

## Page 482

II. SW 대가 산정 절차 및 SW 사업 수명 주기별 사업유형
가 . SW 대가 산정의 일반적인 절차
나 . 사업유형 식별
482

---

## Page 483

III. 대가 산정 시점에 따른 대가 산정 유형
가 . 대가 산정 시점 구분
구분 설명
예산확보 단계 - SW 사업의 예산 확보를 위해 사업비를 개괄적으로 산정하는 단계
사업발주 단계 - SW 사업을 발주하기위해 제안요청서등을 작성하고 , 발주금액을 산정
- SW 사업이 종료된 후에 실제 투입된 사업비와 집행된 사업비의 차이를 파악하
사후정산 단계
여 필요시 정산을 위한 대가를 산정하는 단계
483

---

## Page 484

나 . 대가산정 모형별 적용시점
적용가능 시점
수명
대상 사업유형 대가산정 모형 예산 사업 사후
주기
확보 발주 정산
컨설팅지수방식
O O X
정보전략계획수립비
정보전략계획
(ISP)
투입공수방식
O O O
정보전략계획수립비
정보전략계획 및 업무
정보전략계획 및 업무재설계수립비 O O O
재설계 (ISP/BPR)
기획단계
전사적 아키텍처
전사적아키텍처 수립비 O O O
(EA/ITA)
정보시스템 마스터플랜
정보시스템 마스터플랜 수립비 O O O
(ISMP)
정보보안 컨설팅 정보보안컨설팅 수립비 O O O
기능점수방식
O O O
소프트웨어개발비 ( 정통법 )
구현단계 소프트웨어 개발
기능점수방식
O O O
소프트웨어개발비 ( 간이법 )
투입공수방식 소프트웨어개발비 O O O
소프트웨어 유지보수 요율제 유지보수비 O O X
소프트웨어 운영 투입공수방식 운영비 O O O
운영단계 고정비 / 변동비방식 유지보수 및 운영비 O O O
소프트웨어 유지보수
및 운영 SLA 기반 유지보수 및 운영비 정산법 ∆ ∆ O
소프트웨어 재개발 재개발비 O O O
484

---

## Page 485

IV. 수명주기 단계별 대가 산정 방식
485

---

## Page 486

486

---

## Page 487

프로젝트관리 원가 산정 (PMBOK 기준 참조 )
Tips
1. 프로젝트 원가 산정 방법들을 설명하시오 .
( 출제 예상 문제 )
487

---

## Page 488

입력물 (Input) 도구 및 기법 (Tool & Technique) 산출물 (Output)
원가 관리 계획 전문가 판단 (Expert Judgment) 활동원가산정
( Cost Management plan) 유사산정 (Analogous estimating) ( Activity cost estimates)
인적 자원 관리 계획 모수 산정 (Parametric estimating) 산정 근거 (Basis of estimates)
(Human resource management 상향식 산정 (Bottom - up estimating) 프로젝트 문서 갱신
plan) 3 점 산정 (Three - point estimating) (Project documents updates)
범위 기준선 ( Scope baseline) 예비비 분석 (Reserve analysis)
프로젝트 일정 ( Project Schedule) 품질비용 (Cost of quality)
위험 관리대장 ( Risk Register) 프로젝트 관리 소프트웨어 (Project m
기업환경요인 (Enterprise Environ anagement Software )
mental Factors) 판매자 입찰 분석 (Vendor bid analys
조직 프로세스 자산 (Organization is)
al Process Assets) 그룹 의사결정 기술 (Group decision -
making Techniques )
488

---

## Page 489

선례정보 , 대외 환경 및 정보를 통해 , 전문적인 지식을 바탕으로 가
T 전문가 판단 (Expert judgment) 이드를 주는 전문가 판단은 복합적인 현재와 이전의 프로젝트 차이
점을 구분하고 , 평가를 통해 결정
유사산정 현재 프로젝트의 같은 항목 , 측정 평가에 근거하여 이전의 유사한
T
(Analogous estimating) 프로젝트로부터 범위 , 원가 , 예산 , 기간 , 측정 수치 등의 값을 사용
과거 실적 자료와 여러 가지 변수 , 이를테면 , 건설 분야에서의 건물
모수 산정 (Parametric
T 의 면적 , 프로젝트에 범위에 영향을 주는 항목 등 , 통계적 관계를 통
estimating)
해 , 원가 산정에 활용하는 방법
상향식 산정 (Bottom - up 작업의 각 요소를 통해 , 각 작업 별 사이즈와 복잡도를 산정하는 방
T
estimating) 법
3 점 산정 3 점 산정의 활동 원가 산정 방식을 통한 정확한 산정 적용하는 방법
T
(Three-point estimating) , PERT 방식이라고도 함 .
우발사태 예비비는 식별된 위험을 허용하는 수준에서 원가 기준선
T 예비비 분석 (Reserve analysis)
과 위험을 완화하기 위하여 대응하기 위한 예산
T 품질 비용 (Cost of quality) 품질 원가에 대한 추정은 활동 원가 산정을 준비하기 위하여 사용
프로젝트 관리 소프트웨어
프로젝트 관리 소프트웨어 , 어플리케이션 , 엑셀 , 시뮬레이션 등의 툴
T (Project management
을 사용하면 , 좀 더 신속하게 원가 산정에 대해 지원이 가능함
Software)
판매자 입찰 분석
T 판매 회사의 입찰에 근거하여 원가 분석 포함
(Vendor bid analysis)
그룹 의사결정 기술 팀 기반의 접근 방식 , 브레인스토밍 방법 , 분야별 전문가들의 합의
T (Group decision-making 를 도출하는 델파이 기법 , 그룹 기술들은 정확한 산정과 산정에 대
Techniques) 한 동의를 통해 산정하는 기술
489

---

## Page 490

3 점 산정 (Three - point estimating )
1 점 원가 산정 방식은 불확실성과 위험 측면에서 3 점 산정의 활동 원가 산정 방식보다 정확하지 못다하는
것이 증명이 되었다 . 다음과 같은 3 가지 변수와 공식을 정의한다
변수 항목 특징 및 설명
Most likely 활동의 원가가 요구하는 작업과 그에 대응하는 예견된 비용으로 현실적인
( cM: cost Most likely) 노력에 근거하는 활동 비용 .
Optimistic
활동의 원가가 가장 좋은 시나리오 분석에 근거하는 활동 비용 .
( cO: cost Optimistic)
Pessimistic
활동의 원가가 가장 최악의 시나리오에 근거하는 활동 비용 .
( cP: cost Pessimistic)
기대되는 세 개 변수들의 분포는 다음과 같은 공식을 사용하여 계산한다 .
삼각 분포는 다음과 같은 공식을 사용한다 .
Triangular Distribution
( cE: cost Expectation)
베타 분포는 전통적인 PERT 분석을 통해 사용한다 . 원가 산정은 기대되는
원가와 불확실한 범위를 명확화성에 기대하는 , 3 점 산정 방식에 근거한다 .
Beta Distribution
( 베타 분포 )
490

---

## Page 491

예비비 분석 (Reserve analysis)
491

---

## Page 492

Chapter X. 국내 소프트웨어 생태계 육성방안
국내 소프트웨어 생태계 육성방안
기타 - SW 중심사회
492

---

## Page 493

국내 소프트웨어 생태계 육성방안
국내 소프트웨어 생태계 육성방안
1. 소프트웨어 파워 시대에 국내 소프트웨어 산업의 문제점을 진단해보고 , 국내 소프트웨어 생태계
개선을 위한 육성방안을 제시하시오 .( 출제 예상 문제 )
2. 소프트웨어 산업 생태계 조성을 위해 필요한 소프트웨어 엔지니어 육성 방안과 정보기술 융합
정책에 대하여 기술하시오 . ( 정보관리 , 99 회 4 교시 )
3. 우리나라의 소프트웨어 산업은 세계 소프트웨어 시장의 1% 미만으로 낮은 수준이지만 국내 시장에
서의 성공을 바탕으로 글로벌 시장으로 그 영역을 넓혀 나가는 소프트웨어들이 생겨나고 있다 .
이러한 소프트웨어 제품들이 다양한 글로벌 환경과 요구사항에 대응할 수 있도록 개발하고 , 세
계적 수준의 품질을 확보하기 위한 소프트웨어 글로벌화와 관련하여 다음에 대해 설명하시오 .
가 . 글로벌 소프트웨어 개발 주기
나 . 글로벌화 테스팅을 위한 테스트 유형과 절차
다 . 소프트웨어 제품의 글로벌화를 위해 목표지역마다 별도 제품을 출시할 경우의 문제점과 해결 방안
( 정보관리 98 회 2 교시 )
4. 소프트웨어 융합 (Software Convergence )
( 조직응용 , 93 회 1 교시 )
493

---

## Page 494

I. IT 생태계의 소프트웨어 중심으로 변화 현황
IT 생태계 변화 설명
하드웨어 시장의 마진이 감소하면서 2005 년 IBM 은 노트북 사업부를
하드웨어 산업 철수
레노버에 양도했으며 , HP 는 PC 사업에서 철수함
SW 기업의 HW 기업 인수 구글이 모토로라를 인수
높은 수익성을 유지하던 휴대폰 시장에서 애플과 구글이 iOS 와
시장 주도권 이전
안드로이드를 출시하면서 시장 주도권이 SW 업체로 이전됨
ICT 서비스 시장은 연평균 6 % 가 성장한 반면 HW 는 1 % 성장에 그침 ,
HW 성장률 둔화
250 개 ICT 기업의 분야별 매출에서 소프트웨어 분야가 급 성장을 보임
IT 융합 심화 소프트웨어가 항공 , 자동차 , 환경 , 조선 , 섬유 등의 혁신을 견인
494

---

## Page 495

II. 국내 소프트웨어 산업의 문제점 및 개선방향
가 . 국내 소프트웨어 산업의 문제점
495

---

## Page 496

나 . 국내 소프트웨어 산업의 개선방향
496

---

## Page 497

III. 국내 소프트웨어 산업 발전을 위한 육성방안
가 . 수요자 중심 소프트웨어 육성정책 수립
- 지금까지 발표된 정부 정책은 우수한 SW 개발자를 배출해서 기업에 공급하고 , 공정한 거래 질서가 구축
되면 SW 기업의 경쟁력이 강화되고 이를 통해 해외시장을 개척하자는 공급측면의 경쟁력 강화에 초점
- 하지만 공급중심 정책만으로 침체된 내수시장 활성화를 도모하기 어려우므로 , 적극적 시장 활성화와
사용자의 필요 , 아이디어를 적극적으로 활용하여 SW 산업 비중을 증가시키는 정책이 필요함
497

---

## Page 498

나 . 적극적인 내수시장 확대
- 국내 소프트웨어 산업의 규모는 임베디드 SW 를 제외하고 약 26 조원으로 추정되고 2011 년 국민 1 인당
평균 189 달러를 SW 에 지출함 ( 조사국가 52 개국 중 28 위에 해당 )
- 스위스 , 미국 , 일본의 국민소득이 우리나라의 2~3 인데 , SW 지출규모는 10 배 , 6 배 , 3.5 배에 해당하므로
국내 소득 수준에 비해 작은 편이고 , 앞으로 충분한 증가 가능성이 있음
- 따라서 공공부문 프로젝트 비용 증액 , 시스템 유지보수율 상향 , 불법 소프트웨어 사용 적극적 차단을
통해 국내 SW 기업들의 도전의욕을 높이고 경쟁력을 향상 시켜야 함
다 . SW 엔지니어 직업의 인기 제고
- SW 산업을 선도하고 있는 미국의 경우 소프트웨어 엔지니어가 2012 년 최고 인기직업으로 선정 되었으며 ,
금전적 보수나 작업환경 등 여러 부문에서 높은 점수를 얻어 최고의 직업으로 선정됨
- 국내에서는 SW 산업의 노동생산성이 하락하고 , SW 엔지니어에 대한 대우가 개선되지 못하고 있으므로
단순히 SW 인재의 공급을 늘리려는 노력은 기존 종사자들의 수익 악화로 유능한 인재의 신규 유입을
저해할 수 있음
- 따라서 기존 인력에 대한 교육프로그램 확대 , 프로그램 수준 향상을 통해 노동 생산성과 개발자 일인당
부가가치를 증대시켜 궁극적으로 개발자 직업을 매력적으로 만들어 긍정적 순환을 이루어야 함
498

---

## Page 499

라 . 사용자 중심의 혁신
- 최근 혁신의 패러다임은 그 중심이 공급자에서 수요자 , 즉 사용자로 이동하고 있음
- 이는 기술 공급자보다 사용자가 혁신의 필요성과 가능성을 깨닫기 쉽고 이용하기 편리하게 혁신 성과를
변형할 가능성이 높기 때문임
- 지금까지 SW 산업 육성정책이 SW 개발업체 역량강화에 초점을 두고 있어 사용자 요구사항과 개발자의
이해차이로 인해 혁신의 결정적 장애요인이 되는 일이 많음
- 따라서 일반사용자에 프로그램밍 교육기회를 제공하거나 초중고 학생에 프로그래밍을 필수 과정으로
교육시키는 등의 혁신이 필요함
499

---

## Page 500

IV. 공생발전형 소프트웨어 생태계 구축 전략
전략 세부전략 설명
공공 SI 시장 참여 전면 - 상호출자 제한 기업 집단 소속기업 공공 SI 시장참여 전면
제한 제한 적용
- 대기업 참여 하한 금액 상향 조정
( 매출액 8 천억원 이상인 대기업 : 80 억원 이상 ,
대기업 참여 하한제 매출액 8 천억원 미만인 대기업 : 40 억원 이상 )
전문 / 중소기업
- 자회사를 통해 편법 수주하는 대기업 행위를 규제하는
참여 확대
조항 신설
중견 SW 전문기업 참여
- 중소기업 졸업 후 5 년간 대기업 참여 제한 유예기간 부여
보장
- 민간 자율의 전문 SW 기업 인정제 및 분야별 레퍼런스
전문 SW 기업 양성 방안
구축
- 제안 요청서 (RFP) 요구사항 상세화
요구사항 상세화 - 사업 RFP 작성시 초기 분석 설계 수준의 상세화하여
요구사항을 명확화하는 기준 마련
- 공공 정보화 사업 PMO 제도 도입 방안 마련
PMO 제도
- PMO 제도 적용 범위 가이드라인 설명 및 제공
선진 수 / 발주
- 공공 정보화 시스템 지식 재산권을 개발 기업이 행사
체계구축
지식재산권을 개발
- 정보화 사업 결과물은 발주기관과 민간 개발 기업이 공동
기업에 부여
소유하되 계약체결 범위 이외의 실시권을 개발 기업에 부여
- 기존 상용 SW 제품을 우선 구매하고 직접 개발은 자제
상용 SW 제품 시장 침해
- 발주 전 상용 SW 제품 적용가능성과 직접 개발 효과 사전
방지
조사 의무화
- 정부의 SW 사업 대가 기준 폐지
SW 사업 대가 기준
시장 자율의 - 대가산정 절차 중심의 가이드 라인 개발
SW 대가 적용 - 선진형 유지보수 체계로 전환
상용 SW 유지보수
- 상용 SW 유지보수 가이드라인 마련
500

---

## Page 501

V. 국내 소프트웨어 산업 발전을 위한 제언
- 국내 소프트웨어 산업 육성정책의 성공을 위해서는 기존 정책과 함께 내수시장 확대와 소프트웨어
엔지니어 직업에 대한 선호도 개선 , 사용자 중심의 혁신이 종합적으로 이루어져야 함
- 또한 생태계를 구성하는 모든 주체들이 상호 협력하고 부단히 노력해야 하며 , 특히 기업이 주체적으로
기업가 정신을 회복하고 과감하게 체질을 개선하여 SW 산업 발전을 주도해야 함 .
- SW 분리 , 분할 , SW 산업진흥법 , OSS 의 적극도입 , 국가기간산업으로서의 지원 등 엑기스 ,
SW 에코시 스 템 기반 마련 .
501

---

## Page 502

Q&A
Q&A
질의 응답
SW 공학 II 마무리합니다 .
502
