# 디지털네트워크 Part II

```yaml
source:
  id: DN-P2
  document: "2. 디지털네트워크_V6.1_Part II.pdf"
  source_ref: "local-source\\9주차_신규_pdf (2) (2)\\5. 디지털네트워크\\2. 디지털네트워크_V6.1_Part II.pdf"
  repository_policy: "Original PDF is kept locally; Markdown extraction is stored in Git."
material_note: "이 자료는 과거 강의자료입니다. 2016~2017 버전명이 포함되어 있고 파일 수정일은 2019-03-13입니다. 최신 기술, 법/제도, 표준, 제품 동향은 반드시 별도 검증이 필요합니다."
extraction:
  tool: "pdfjs-dist"
  pages: 43
  notes:
    - "Text was extracted page by page."
    - "Original images, charts, and exact visual layout are not embedded in this pass."
```

> 현행성 주의: 이 자료는 과거 강의자료입니다. 2016~2017 버전명이 포함되어 있고 파일 수정일은 2019-03-13입니다. 최신 기술, 법/제도, 표준, 제품 동향은 반드시 별도 검증이 필요합니다.

## Page 1

KPC 정보처리기술사 핵심 오브젝트
[Module 05]
디지털네트워크 (II)
•
차세대 IT 리더스 유니버시티
IT Leaders University Coursework

---

## Page 2

목차
분류 출제빈도 Page 분류 출제빈도 Page
Chapter VII. Appendix( 심화반용 추가 )
PCM 중
Overlay Network 하
Data Link Layer 상
오류 제어 상
토르 네트워크 (Tor NW) -
피코넷과 스캐터넷 하
소스 부호화 , 채널 부호화 하
NDN 중

---

## Page 3

PCM
기출문제
1. PCM(Pulse code modulation) 의 전송과정과 나이퀴스트의 샘플링 정리 ( Nyquist Sampling
Theorem) 에 대해 설명하시오 .
(KPC 모의고사 , 2013. 6 월 )
2. 아날로그 정보를 디지털 데이터로 변환하기 위한 PCM(Pulse Code Modulation) 의
동작원리를 설명하시오 . (107, 정보관리 )
3

---

## Page 4

I. 통신 시스템을 구성하는 한 요소로 , 정보를 직접 또는 간접적으로 전기 또는 광신호로 변환하여 보내는
수단의 집합체 , 전송방식 (Transmission System) 의 개요 .
가 . 전송방식 4 가지
- 전송을 위한 신호 변조 방식은 베이스밴드 , 펄스부호변조 , 디지털변조 , 아날로그변조 4 가지 방식
나 . 신호변환 방식에 따른 변조방식
전송형태 신호변환방식 변조방식
디지털정보  디지털신호
베이스밴드
2 진수 1 과 0 비트를 전압 값으로 대응하여 나타냄
디지털
아날로그정보  디지털신호
전송
- Pulse Code Modulation(Pulse: 전압 진동 의미 혹은 신호용 전류 )
펄스부호 변조
- 아날로그 신호를 표본화 (sampling), 양자화 , 부화화하는 과정을
(PCM)
통해 디지털신호 ( 펄스부호 ) 로 변환하여 전송
디지털 정보  아날로그 신호
- 진폭 편이 변조 (ASK, Amplitude Shift Keying)
디지털 변조
- 주파수 편이 변조 (FSK, Frequency Shift Keying)
대역전송
아날로그
- 위상 편이 변조 (PSK, Phase Shift Keying)
전송
- 진폭 위상 편이 변조
아날로그 정보  아날로그 신호
- 디지털 변조방식과 기본 원리는 비슷 아날로그 변조
- 진폭변호 (AM), 주파수 변소 (FM), 위상변조 (PM)
4

---

## Page 5

II. 아날로그의 디지털 변환 PCM(Pulse code modulation; 펄스 부호 변조 ) 의 전송과정
- PCM 은 아날로그 신호를 표본화 , 양자화 , 부호화 과정을 거처서 아날로그가 디지털로 변환이 되고 이
과정 중 표본화 과정에 나이퀴스트의 샘플링 정리가 활용됨
5

---

## Page 6

II. PCM 의 주요 전송과정
PCM 과정 설명
- 연속적으로 변화하는 값을 일정한 시간적 간격으로 나누어 표본을 추출하는 것
- PCM 아날로그 음성신호를 디지털화 하기 위한 사전작업으로 Sampling Time
표본화
간격으로 나누어 추출하는 과정
(Sampling)
- Sampling Time 간격의 기준으로 나이퀴스트 샘플링 정리가 활용됨
- 표본화 횟수 = 최고 주파수 X 2
- 연속적인 아날로그 값을 이산적인 디지털 값으로 바꾸는 A/D 변환
양자화
(Analog to Digital conversion) 을 뜻하는 것으로 , 표본화된 펄스의 크기를
(Quantizing)
부호화하기 위한 값으로 바꾸어주는 과정
- 각 데이터 정보 하나 하나에 할당되는 2 진 표현으로 바꾸는 과정 ( 디지털 변환 )
부호화
- 대상되는 심볼에 하나의 부호어 ( 부호화 단위 ) 를 할당하는 대응관계
(Encoding)
[ 참고 ] 수학적으로 매핑 , 변환 등으로도 불리움
6

---

## Page 7

푸리에 변환
[ 참고 ] 나이퀴스트 ( Nyquist ) 이론
X 의 최대값 이상
으로 표본화를
하면
다음 공식
fs ≥ 2 fm
fs: Nyquist 표본화 주파수
- 디지털 전송에서 부호 간 간섭을 없애는 조건으로 ,
입력 신호 ( 원신호 ) 의 주파수 대역폭를 2 배 이상으로 표본화 하면 , 원 신호를
충실히 복원할 수 있는 이론 ( 음성 = 300~ 3400hz)
- > 원래 정보의 2 배 이상의 속도 로 표본화한 표본치 만으로 원래 정보가 재생 가능 (2*3400Hz=6800Hz)
- 표본화 (Sampling)
[ 참고 ] http:// www.ktword.co.kr/abbr_view.php?m_temp1=3929
7

---

## Page 8

Overlay Network
기출문제
1. Overlay Network 설명하시오 . ( 출제예상문제 )
8

---

## Page 9

I. Overlay Network 정의
기존의 네트워크 위에 별도의 노드들 (nodes) 과 논리적 링크들 (logical links) 을 구성 하여 이루어진 가상
네트워크
물리적인 전달 네트워크 환경 위에 응용 서비스 레벨의 서비스 제어기능 및 이용자 요구사항을 추가로 제
공하는 서비스 레벨의 네트워킹 기능
분산 컴퓨팅 환경 중심
Ⅱ . Overlay Network 구조 및 기술 분류
가 . Overlay Network 구조
- P2P 오버레이 네트워크 상에서 peer 들은 서버의 도움 없이 다른 peer 들과 직접 정보를 공유 / 교환
9

---

## Page 10

나 . Overlay Network 기술 분류
분류 기술 설명
- 주로 DHT(Distributed Hash Table) 를 기반으로 구축
Topology - 검색의 효율성을 높이고자 P2P 오버레이 네트워크에 구조적인 특성
Structured
구성 부여
- 대표 프로토콜 : Chord, Pastry, Tapestry, CAN 등 ( 분산형 )
Centralized
- 모든 자원이 중앙의 데이터 베이스에 저장
( 중앙집중식 )
자원 및
서비스
- 서버는 접속하는 피어들에게 이미 접속된 피어의 주소와 정보를
Hybrid
디스커버리
상호교환 즉 , 최초 접속 시에만 중앙 서버 이용 , 목록만 제공
기법
- 중앙 서버의 의존 없이 작동하며 , 검색 엔진은 개별 클라이언트들이
Distributed
구동한 프로그램에 설치
- 기존의 Client/Server 개념과 달리 PC 들이 연결되어 자원을 공유하고 모든 참여자가 서버인 동시
에 클라이언트의 역할을 수행 하는 특징
- 물리적 네트워크 상에 존재하는 피어들이 P2P 서비스에 등록하면 , 등록된 피어들 간의 가상 네트
워크 , 즉 , P2P 오버레이 네트워크 구성
- P2P 개념도입으로 단순히 컴퓨터와 컴퓨터가 연결됨을 의미할 뿐만이 아니라 인간과 인간이 직접
1:1 로 연결되어 개인을 중시하고 개방화 지원
10

---

## Page 11

Data Link Layer
기출문제
1. OSI 7 Layer (Open System Interconnection) 중 2 계층 인 Data Link Layer 의 역할과 오류 제어 방
식의 종류를 기술하고 , 효율적으로 데이터를 전송하기 위한 흐름제어 (Flow Control ) 방식의 종류를 도
식화 ( 圖式化 ) 하여 설명하시오 .
( 출제예상문제 )
2. 3.CRC(Cyclic Redundancy Check) 의 원리를 기술하고 , CRC - 8 = x^8 + x^2 +
x + 1 이 고 데이터워드가 01101011 일 때 , 코드워드를 계산하는 과정을 설명하고 , 그 결과가 옳음을
검증하시오 . ( 정보관리 , 110 회 , 3 교시 )
3. FEC(Forward Error Correction) 에 대해 설명하시오 . ( 컴시응 , 110, 1 교시 )
4. 데이터 전송 오류가 발견된 경우 Data Link Layer 에서 오류 복구를 수행 하는 절차에 대하여
설명하시오 . ( 컴시응 , 110 회 )
11

---

## Page 12

I. Data Link Layer 의 역할 및 오류 제어 방식
가 . Data Link Layer 의 역할
- OSI 7 Layer 의 하위 계층인 2 계층으로 두 시스템 사이에서 오류 없이
정보 데이터를 전송 하려고 상위 계층 ( 네트워크 계층 ) 에서 받은 비트열의
데이터로 프레임을 구성하여 하위 계층 ( 물리 계층 ) 으로 전송
12

---

## Page 13

역할 내용 기술
인접 노드로의 인접 노드간 송신측에서 최종 수신측으로
오류 제어 , 흐름 제어
정보 전달 데이터를 전송
CRC, BEC, 해밍코드 와 같은 FEC
오류 제어 Data 가 통신로를 통과하는 동안에 오류를 검사
기술
ARQ 를 통해 ,
수신측에 Frame 를 전달하고자 할 때
흐름 제어 정지대기 , 선택적 , 적응적 방식
수신측에서 처리할 수 있는 데이터 양을 조정
이 자체를 흐름제어로 본다는 의미 .
헤더와 트레일러 안에는 데이터를 최종적으로
LLC(Link Logical Control)
주소 지정 보낸 송신자와 물리주소와 다음으로 보낼 수신
MAC(Media Access Control)
지의 물리 주소가 삽입되어 있음
서로 다른 시스템이 동일한 링크에 연결되어
유선 : CSMA/CD
접근 제어 있을 때 그 링크를 어떤 시점에서 점유하고자
무선 : CSMA/CA
할 때 접근 방식을 제어
13

---

## Page 14

II. 오류 제어의 개념
ㆍ 데이터 링크 계층에서 오류를 검출하여 수정 , 처리하는 기능
ㆍ 물리계층에서는 데이터를 주고 받기만 할 뿐 , 오류 여부는 검사하지 못함
[ 중요 ] 오류 제어 분류
오류 제어
전진 오류 수정 후진 오류 수정
해밍 코드
오류검출방식
( 검출 후 ) 재전송
패리티 검사
ARQ
(Parity Check)
순환중복검사
(CRC)
14

---

## Page 15

가 . 전진 에러 수정 (FEC, Forward Error Correction)
- 송신 측에서 정보비트에 오류 정정을 위한 제어 비트를 추가하여 전송하면 수신 측에서 이 비트를
사용하여 에러를 검출하고 수정하는 방식
( 예 ) 해밍 부호 ( 해밍符號 , Hamming code) 는 오류 정정 부호의 일종으로 리처드 해밍이 제안했다 . 보통
해밍 부호라고 할 때는 해밍 (7,4) 부호를 가리킨다 . 해밍 부호는 1 비트 오류만 일어날 때는 오류를 정정할
수 있고 , 2 비트까지의 오류를 검출할 수 있다 . (n, k) 부호 (Code) 의미 : n 은 출력비트수 , k 는 입력비트수
15

---

## Page 16

해밍 부호 ( 해밍符號 , Hamming code )
- 데이타 전송시 1 비트의 에러를 정정 할 수 있는 자기 오류정정부호의 일종
- 패리티비트 (Parity bit) 에 의한 오류검출 및 단일 비트 오류 정정 까지 가능한 코드
- 오류를 수정하기 위해 재전송을 요구하는 시간이 많이 걸리는 원거리 장소의 데이터 전송 신뢰도 개선
＜
p
2 = m+P +1 (m: 데이터 비트 수 , P: 패리티 비트수 )
16

---

## Page 17

■ 해밍 코드 계산 방법 2 안 – Even Parity 방식을 통한 계산방법 (8 비트인경우 )
전송할 데이터 : 십진수 : 88( 이진수 : 1011000 ) 있다고 가정해 보자
1) even parity 방식 으로 패리티 비트 삽입
- even parity: 패리티를 포함한「 1 」인 비트의 수가 항상 짝수가 되도록 하는 것
( 자리 위치 암기하는 것이 관건 )
2) ‘ 1’ 이 있는 위치 확인
7 (0111), 9 (1001), 11(1011 )
비트번호를 말함 .
17

---

## Page 18

3) XOR 연산 수행
XOR 연산 수행 절차 :
0111
0111
1001
XOR) 1001
XOR) 1011
-------------
---------------
1110
XOR) 1011
---------------
0101
4) 해밍코드 – 패러티 비트 삽입하여 생성함
18

---

## Page 19

해밍코드 계산
비트번호 11 10 9 8 7 6 5 4 3 2 1
정보비트 1 0 1 0 1 0 0 1 0 0 1
패리티 P4 P3 P2 P1
비트
0 1 0 1
P1 1 1 1 0 0 P1
P2 1 0 1 0 0 P2
P3 1 0 0 P3
P4 1 0 1 P4
해밍코드 1 0 1 0 1 0 0 1 0 0 1
→ 아래 비트번호를 암기해야 , 쉽게 답안작성 가능 – P1 은 1 비트씩 , 2 비트씩 , 4 비트씩 , 8 비트씩 건너뜀
( 자신 포함 )
즉 , P1: 11 9 7 5 3 비트이고 , 짝수이어야 하므로 , P1 =1
P2: 11 10 7 6 3 비트이고 , 짝수이어야 하므로 , P2 = 0
예 1) 만일 3 비트가 1 로 ( 잘못 ) 전송이 되었다면 ,
관련된 패러티는 P1 = 0, P2 는 1 이어야 한다 .
따라서 , 1+2 비트의 ( 자릿수 ) 이므로 , 3 번째 비트가 오류임을 알고 , 정정할 수 있다 .
예 1) 만일 , 5 비트가 1 로 온다면 , P1, P3 오류라고 판단할 수 있고 , 자리 수는 1+4 = 5 비트 자리수 이다 .
19

---

## Page 20

■ 해밍 코드 - 패리티 비트의 위치 ( 데이터 비트 수가 4 비트인 경우 )
bit No 7 6 5 4 3 2 1
해밍코드 D7 D6 D5 P4 D3 P2 P1
- 2015 년 12 월 모의고사 정보관리 2 교시 참조
20

---

## Page 21

나 . 후진 오류 수정 (BEC , Backward Error Correction )
수신 측에서 아래의 오류 검출 방식을 통해 , 오류 발생 시 , 재전송을 요구하는 방식 이다 .
(1) 오류 검출 방식
• 패리티 검사 ( Parity Check )
- Parity Check, 정보비트수가 적고 에러발생 확률이 낮은 경우 가장 많이 사용하는 에러 검출 방식 .
- 어느 비트에 오류가 발생하였는지 알 수 없고 , 짝수 개의 오류가 발생하면 오류검출이 불가능한 단점 .
구현이 간단하여 비동기 통신에 많이 이용 .
( 예 ) 문자 ( 보통 7 비트 ) + 1 비트 ; 2 진 부호에서 1 또는 0 의 수를 홀수 ( 또는 짝수 ) 로 여분 비티를 부가하여
에러 유무를 검출하는 방법
• 순환중복검사 (CRC )
송신장치는 전송될 데이터 블록에 16 비트 또는 32 비트 다항식을 적용 하여 , 그 결과로 얻어진 코드를 그
블록에 덧붙인다 . 수신측에서는 데이터에 같은 다항식을 적용하여 그 결과를 송신측이 보내온 결과와 비교
한다 . 만약 두 개가 일치하면 , 그 데이터는 성공적으로 수신된 것이며 , 그렇지 않은 경우 그 데이터 블록을
재 송신하도록 송신측에게 요구한다 .
21

---

## Page 22

순환중복검사 (CRC; Cyclic Redundancy Check )
( 예 ) 전송 데이터가 1011010 , 디바이더 (divider) 가 1101 인 경우 CRC(Cyclic Redundancy Check) 값 구하는
과정
다항식 제수 비트수 CRC
3 2
1 X + 1 X + 0 X + 1
1101 4bit 3bit
1101 1011010000
1101
01100
1101
00001100
1101
100
나머지 3bit, 앞에 있는 데이터가 모두 0 이되고 뒤에
3bit 가 최종 CRC 값
-> 수신자는 동일한 값을 계산하고 , 프레임 내에 있는 100 정보를 비교한다 .
( 프레임 끝에 같이 딸려오는 구조임 )
22

---

## Page 23

나 . 후진 오류 수정 (BEC , Backward Error Correction)
(2) ARQ(Automatic Repeat reQuest ) 의 개념과 원리
가 . 자동 재전송 요구 (ARQ), 혹은 자동반복 요청의 개념
- 데이터 수신 측에서 오류 검출 후 송신 측에 오류 사실을 알리고 재전송을 요청하여 오류를 수정하는
네트워크 오류제어 기술
나 . ARQ 의 세부 유형별 동작원리 ( 스고세 )
ARQ 유형 설명
- 송신측에서 한번에 하나의 프레임씩 전송
- 수 신 측에서 해당 프레임에 대한 오류 검사 후 오류가 없으면 ACK 를 , 오류가 있으면
Stop and Wait NAK 를 보냄
- 송신측은 ACK 를 받으면 다음의 프레임을 보내고 , NAK 를 받으면 해당 프레임을
재전송
- 송신측에서는 연속적으로 순서번호를 부여한 프레임을 전송
Go-back-N - 수신측에서는 오류가 있으면 ‘NAK+ 오류 프레임 순서번호 ’ 를 송신측에 보냄
- 송신측에서는 오류 프레임 이후의 전체 프레임을 다시 재전송
- 가장 많이 활용되는 방식
Selective Repeat - Go-back-N 방식과 유사하나 좀 더 복잡한 방식
- 오류 프레임 이후 전체 프레임 재전송 아니라 해당 오류 프레임만 재전송
- FEC 방식을 적용해 오류를 수정하고 ,
Hybrid
- 수정 안된 프레임만 재전송하는 방식
23

---

## Page 24

멀티플렉싱 ( Multiplexing) – 멀티플렉서 (multiplexer) 여러 개의 입력선 ( 소스 ) 중에서 하나를 선택하여
단일 출력선으로 연결하는 조합회로 이다 . 간단히 ‘ 먹스 ’라고 하기도 한다 .
다중 입력 데이터를 단일 출력하므로 데이터 셀렉터 (data selector) 라고도 한다 .
Multiplexor De-multiplexor
멀티플렉스 이용 형태

---

## Page 25

멀티플렉스 ( 다중방식 ) - 다중방식 유형
주파수 분할 멀티플렉싱 시분할 멀티플렉싱
(Frequency Division Multiplexing) (Time Division Multiplexing)
[ 적용 ] [ 적용 ] – 소스들이 공유 매체를 교대로 사용한다 .
선 (wire), RF, 광섬유 등 네트워킹은 대부분 이것을 사용함
X 축이 시간이면 Y 축이 주파수 대역

---

## Page 26

HTTP/2
HTTP/2 (originally named HTTP 2.0) is the next planned version of the HTTP network protocol
used by the World Wide Web. It is based on SPDY
SPDY
- 초창기 인터넷 환경에서 고안된 HTTP 의 단점을 보완하여 미래 인터넷 환경에서 보다 효율적으로
이용할 수 있도록 제안된 차세대 HTTP 프로토콜
- SPDY 는 ‘ speedy’ 를 기반으로 구글이 만든 신조어로 오늘날의 웹 환경을 고려해 만든 HTTP 보완
프로토콜

---

## Page 27

특징 설명
웹 환경의 보안성 강화에 맞춰 SPDY 하위 프로토콜로 TLS 를 지정 사용
따라서 HTTPS 로 작성된 웹 사이트만 적용 가능함
- 암호화를 해서 최종단의 인증 , 통신 기밀성을 유지시켜준다 .
항상 TLS 위에서 동작 TLS 의 3 단계 기본 절차 :
1. 지원 가능한 알고리즘 서로 교환
2. 키 교환 , 인증
3. 대칭키 암호로 암호화하고 메시지 인증 : AES, DES 등 .
HTTP 헤더 압축 HTTP 헤더 압축으로 10 ~ 35 % 크기 감소 , 모바일 환경 지원
바이너리 프로토콜 프레임을 텍스트가 아닌 바이너리로 구성해 파싱이 빠르고 오류가 적음
Multiplexing 하나의 커넥션 안에서 다수의 독립적인 스트림을 동시에 처리
한 스트림이 진행중에 다른 스트림이 끼어드는 (interleaving) 것을 허용
Full-duplex interleaving
스트림의 우선순위 설정을 지원
Server Push 클라이언트의 요청이 없어도 서버에서 콘텐츠를 직접 푸시할 수 있음
서버푸시와 같은 추가 구현을 요구하는 기능을 제외하면 SPDY 적용을 위
웹사이트
해 웹사이트 자체가 바뀔 필요가 없음 ( 단 , 브라우저 , 서버가 SPDY 를 지원해
재작성 불필요
야 함 )

---

## Page 28

SPDY 는 HTTP 를 대체하는 프로토콜이 아니라 , HTTP 가 전송 계층을 통해 전송되는 방식을 재정의하는
프로토콜이다 . 따라서 전송 계층의 구현만 변경하면 기존 HTTP 서버 프로그램을 그대로 SPDY 에서 사용
할 수 있다 .
SPDY 는 HTTP 헤더를 해석하고 단순화하여 압축 전송한다 . SPDY 는 기존에 보냈던 HTTP 헤더와 같은
내용의 헤더가 재전송될 경우 다시 보내지 않고 , 다른 내용의 헤더는 압축 전송함으로서 전송 시간을 절
약한다 .
HTTP 2.0 프로토콜은 SPDY 를 기반으로 설계되고 있다

---

## Page 29

• The Session Initiation Protocol (SIP)
The Session Initiation Protocol (SIP) is a signaling communications protocol, widely used for
controlling multimedia communication sessions such as voice and video calls over Internet
Protocol (IP) networks.
29

---

## Page 30

• List of SIP request methods
30

---

## Page 31

Tor( 토르 ) 네트워크
문제 Tor 네트워크에 대해 설명하시오 .
Tor 네트워크의 익명통신 순기능에서 , 각종 사이버 테러의 수단이 된 역기능이
출제의도
부각되면서 Tor 네트워크의 특성과 구조에 대한 이해 필요 ( 네트워크 + 보안 )
핵심 내용  특징 : 익명통신 , 겹층 암호화 , Low - latency, 서킷기반
키워드  구성 : Cell, Circuit, OR, OP, Directory 서버
1. 익명통신 , 겹층 암호화 , 서킷기반의 Tor 네트워크의 개념
목차예시 2. Tor 네트워크의 구성도 및 구성요소
3. Tor 네트워크의 겹층 암호화 (Onion encryption) 구조
Tor 네트워크의 원리와 관련 악성코드 사례 분석 (2014, KISA)
참고문헌
Tor 익명통신 시스템의 성능 및 보안 향상 기법 연구 ( 아주대 석사논문 )
1. 익명 네트워크 TOR(The Onion Routing ) (113 회 정보관리 , 1 교시 )
2. Tor 네트워크에 대해 설명하시오 . ( 모의고사 )
31

---

## Page 32

I. 익명통신 , 겹층 암호화 , 서킷기반의 Tor 네트워크의 개념
가 . Tor 네트워크의 개념
- 온라인 상에서 트래픽 분석이나 , IP 주소 추적을 불가능하게 하여 프라이버시와 보안을 보장하는
익명성 네트워크 (anonymous communication)
- The Onion Routing networks 의 약자로 토어라고 발음
나 . Tor 네트워크의 특징
요소 설명
익명 통신
- 통신을 하는 주체 즉 , 송신자와 수신자가 누군지 모름
(Anonymous
communication)
- 암호화 키 여러 개를 차례로 이용하여 , 암호화를 하는 방식을 말함
- 각 OR 들의 대칭키 를 디피헬만 핸드쉐이크 ( Diffie - Hellman handshake)
겹층 암호화
기법을 사용하여 클라이언트와 각 라우터 사이에 대칭키를 공유하여
(Onion encryption)
암호 화
- 복호화는 암호화의 역순으로 수행
서킷 기반
OR 을 여러 개 ( 입구 , 중간 , 출구노드 ) 선책하여 하나의 라우팅 경로 사용
(Circuit based)
타 시스템에 비해 패킷 전송 지연시간이 적음
저 지연시간 (Low - latency)
- > 빠른 전송을 위해 , 시간지연 (Delay Time) 을 사용하지 않음
32

---

## Page 33

II. Tor 네트워크의 구성도 및 구성요소
가 . Tor 네트워크의 구성도
- Client 의
OR(Onion Router)
cell
- Tor 어플
OR(Onion Router)
리케이션이
디렉터리 오소리티
설치됨
(directory authority)
서킷 첫 번째 라우터를 입구 노드 (entry node )
OR(Onion Router)
- OR 의 네트워크 대역폭이 클수록 서킷에 선택될 확률이 높아짐
FTP Server,
…
두 번째 라우터를 중간 노드
세 번째 라우터를
수신자를 지
(middle node )
출구 노드 (exit node )
칭함
라고 부른다 .
33

---

## Page 34

II. Tor 네트워크의 구성도 및 구성요소
가 . Tor 네트워크의 구성도 ( 도식화한 개념도 그림 )
- OR 의 네트워크 대역폭이 클수록 서킷에 선택될 확률이 높아짐
34

---

## Page 35

나 . Tor 네트워크의 구성요소
요소 설명
- Tor 를 통과하는 고정된 크기의 패킷 전송 단위 ( 512 바이트 )
Cell
- 원본 메시지를 Tor 시스템에 맞게 재구성한 메시지를 말함
각각의 TCP Stream 에 대한 한 번의 완전한 라우팅 ( 경로 )
Circuit
통상 3 개의 OR 로 구성됨 ( 입구 , 중간 , 출구노드 )
Tor 네트워크 내 각 노드를 의미
OR(Onion Router)
- 오니언 프락시 (onion proxy) 는 Tor 의 사용자 어플리케이션이 설치되어 있
는 노드를 말한다 .
OP(Onion Proxy)
- Circuit 을 생성하고 연결을 관리하는데 사용하는 프록시 .
- 주기적인 Circuit 의 설정과 해제역할 담당
- 디렉터리 오소리티 (directory authority) 는 라우터들의 정보를 취합한
Directory 서버
데이터를 관리 및 배포 하는 노드
(Directory Authorities
server)
- OR 의 정보 및 Circuit 에 대한 정보를 담고 있는 서버
III. 패킷 경로 결정방법
1) 케스케이드 (cascade) 방식 : 미리 여러 경로 중에 하나를 선택하는 방식
2) 계층 (stratified) 방식 : 각 단계별로 다른 경로의 해당 단계에 있는 노드를 선택할 수 있는 계층
( stratified) 방식
3) 자유 경로 (free - route) 방식 : 모든 노드를 자유롭게 선택할 수 있는 자유 경로 (free - route) 방식
35

---

## Page 36

14. 피코넷과 스캐터넷
출제예상문제
36

---

## Page 37

피코넷과 스캐터넷 개념 : 예를 들면 , 블루투스에서 ,
- Piconets: 1 개의 Master 에 여러 개의 슬레이브의 집합 네트워크를 말함 .
Master
Master
A
Slave
스캐터넷 ( Scatternet )
Slave
Piconets
위 A 슬레이브는 2 개 마스터 , 즉 공동마스터의 슬레이브가 됨 .
(2 개 피코넷의 슬레이브 )
- > 위 구조의 네트워크를 스캐터넷 ( Scatternet ) 이라고 함
37

---

## Page 38

소스 부호화 , 채널 부호화 개념정리
출제예상문제
1. 소스코딩 (Source Coding) 과 채널코딩 (Channel Coding) 에 대해 설명하시오 . (KPC 모의고사 )
38

---

## Page 39

I. Source Coding, Source Encoding 소스 부호화 , 소스 코딩 , 원천 부호화 , 신호원 부호화 , 정보원 부
호화
개념 :
정보원 (Information Source) 을 디지털 형식으로 ` 변환 `,` 압축 ` 하는 과정
소스의 효율성을 높이기위해 ` 평균코드길이 (Average Code Length) 의 최소화를 지향함
- 우리가 토픽 정리하는 압축기술이 모두 여기에 포함됨 .
- 압축기술 참조
참고주소 : http:// ktword.co.kr/abbr_view.php?m_temp1=905&m_search=source+coding
39

---

## Page 40

I. 채널 부호화
가 . 채널코딩의 개념
- 채널부호화란 전송 중 에러 발생시 수신측에서 복구할 수 있도록 추가로 부호를 삽입하는 기술
- 에러정정 부호화라고 하며 , 크게 전방 에러정정 (FEC) 과 데이터 재전송 (ARQ) 방식이 있음
[ 참고할 주소 ]
http:// ktword.co.kr/abbr_view.php?m_temp1=984&m_search=C
40

---

## Page 41

NDN
출제예상문제
1. NDN(Named Data Networking) 에 대하여 설명하시오 .
(107 회 컴시응 1 교시 기출문제 )
[ 개념 ] 콘텐츠 기반의 새로운 통신 패러다임인 데이터 이름 기반 네트워킹 (NDN: Named - data
Networking 또는 CCN:Content - centric Networking )
이전 합숙 문제
관련 주소 : https://en.wikipedia.org/wiki/Named_data_networking
41

---

## Page 42

I. 데이터 중심의 네트워크 , NDN 의 개요
- 기존의 IP 주소 대신 Data 의 이름을 활용하여 정보 ( 콘텐츠 ) 의 효율적인 검색 및 배포 를 목적으로
하는 미래 인터넷 기술
- Named Data Networking (NDN) (related to Content - Centric Networking (CCN), content - based
networking, data - oriented networking or information - centric networking) is a Future Internet
architecture inspired by years of empirical research into network usage and a growing
awareness of unsolved problems in contemporary internet architectures
덩어리 , 상당히 많은 양
42

---

## Page 43

용어 정리
출제예상문제
용어 설명
무선 기지국에 분산 클라우드 컴퓨팅 기술을 적용하여 다양한 서비스와
MEC(Mobile Edge
콘텐츠를 이용자 단말에 전개함으로써 모바일 코어망의 혼잡을 완화하고
Computing)
새로운 로컬 서비스를 창출하는 기술
모바일 네트워크가 전송하는 데이터가 이용자가 언제든 접근할 수 있도록
포그 (Fog) 컴퓨팅
안개 모양처럼 분산돼 퍼져 있다는 의미다 .
자동 재전송 요구 (ARQ), - 역방향 에러 검출 (BEC) 에서 주로 사용하는
ARQ(Automatic
방법으로 , 수신측에서 발견한 에러를 자동으로 송신측에 재선송을
Repeat reQuest)
요구하는 에러 정정 방식
43
