# 디지털네트워크 Part I

```yaml
source:
  id: DN-P1
  document: "1. 디지털네트워크_V6.1_Part I_20171014.pdf"
  source_ref: "local-source\\9주차_신규_pdf (2) (2)\\5. 디지털네트워크\\1. 디지털네트워크_V6.1_Part I_20171014.pdf"
  repository_policy: "Original PDF is kept locally; Markdown extraction is stored in Git."
material_note: "이 자료는 과거 강의자료입니다. 2016~2017 버전명이 포함되어 있고 파일 수정일은 2019-03-13입니다. 최신 기술, 법/제도, 표준, 제품 동향은 반드시 별도 검증이 필요합니다."
extraction:
  tool: "pdfjs-dist"
  pages: 444
  notes:
    - "Text was extracted page by page."
    - "Original images, charts, and exact visual layout are not embedded in this pass."
```

> 현행성 주의: 이 자료는 과거 강의자료입니다. 2016~2017 버전명이 포함되어 있고 파일 수정일은 2019-03-13입니다. 최신 기술, 법/제도, 표준, 제품 동향은 반드시 별도 검증이 필요합니다.

## Page 1

KPC 정보처리기술사 핵심 오브젝트
[Module 05]
디지털네트워크 (I)
•
차세대 IT 리더스 유니버시티
IT Leaders University Coursework

---

## Page 2

목차
분류 출제빈도 Page 분류 출제빈도 Page
Roadmap QoS 중
1. Digital Network Roadmap Sliding Window 중
TCP 혼잡제어 중
망중립성 중
Chapter I. Network 기본
1. Network 개요 하
2. OSI 7 Layer 상 Chapter II. 유선 Network 서비스
3. 인터넷프로토콜 (TCP/IP) 상 LAN 하
4. 인터네트워킹 중 NMS 중
5. Ethernet Switch 중 MPLS 중
6. CSMA/CD 중 CDN 상
7. CSMA/CA 중 ADN 하
8. Multicast 중 라우팅 프로토콜 ( 컴 ) 상
9. OFDM 중 PoE 중

---

## Page 3

목차
분류 출제빈도 Page 분류 출제빈도 Page
Chapter III. 무선 Network 서비스
Chapter IV. Network 구조 및 서비스
Wireless LAN 상 IPv6 상
이동통신 상 Mobile IP 상
상
LTE, VoLTE 상 WPAN
LTE-U 중 스마트 홈 중
LTE-R 하 Ad-hoc Network 중
PS-LTE 상 VoIP 중
5G(IMT-2020) 상 IMS 하
NFC 중 VDI 중
Wi-Fi Direct 하 SON 하
Zing 하

---

## Page 4

목차
분류 출제빈도 Page 분류 출제빈도 Page
Chapter V. 응용 서비스 Chapter VI. Network 관리 및 운영
무선충전기술 상 SDN 상
M2M 중 OpenFlow 중
IoT 상 NFV 중
CIDR/Supernetting 중
CoAP, MQTT 상
VLSM/Subnetting 상
NB-IoT, LoRa 중
WoT 하
IoE 중
V2V 중
비콘 중
WBAN 하
Multi-Channel Network 중

---

## Page 5

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

## Page 6

Digital Network Roadmap
네트워크 기본
- Network 개요
- OSI 7 Layer
- TCP/IP
유선 Network 서비스 무선 Network 서비스
- 인터네트워킹
- 이더넷 스위치
- LAN - Wireless LAN
- CSMA/CA, CD
- NMS - 이동통신
- Multicast
- MPLS - HSDPA, HSUPA
- OFDM
- IEEE 802.16e
- WIPI
최신 Network 구조 및 서비스
- IPv6
최신 토픽 동향 및 표준
- Mobile IP
- FMC, FMS - DLNA
- WPAN
- WBAN - SDN
- Home Networking
- M2M - OpenFlow
- Ad-hoc Network
- IoT, WoT - 무선충전기술
- NGN/NGCN, BcN
6
- OSGi

---

## Page 7

디지털 네트워크 출제 경향
I. 113 회 정보관리기술사 기출문제
113 회 정보관리기술사 출제 분석
IT 경영전략
알고리즘 , 0
SW 공학과 프로젝트관리
통계 / 확률 , 1
SW 공학과
프로젝트관리 , 3
IT 경영전략 , 1 서비스
인공지능 ( AI), 3
자료구조 , 0
네트워크
OS, 1
보안
DATABASE, 데이터 분석
CA 와 시스템 , 1
서비스 , 4
CA 와 시스템
DATABASE, 데이터
OS
분석 , 3
자료구조
알고리즘
인공지능 ( AI)
통계 / 확률
네트워크 , 4
보안 , 10
htt://cafe.naver.com/81th
http://itpe.co.kr

---

## Page 8

I. 113 회 정보관리기술사 기출문제
회차 교시 도메인 문제
113 1 NW HCE(Host Card Emulation)
113 1 NW 네트워크에서의 Non - blocking I/O
113 1 NW SDDC(Software-defined Data Center)
113 1 NW 망중립성 ( Network Neutrality)

---

## Page 9

2. 113 회 컴퓨터시스템응용기술사
113 회 컴퓨터시스템응용기술사
IT 경영전략
자료구조 , 0
알고리즘 , 1
SW 공학과 프로젝트관리
AI, 0
CA 와 시스템 , 2
OS, 0
IT 경영전략 , 2
서비스
DATABASE, 0
네트워크
보안
SW 공학과
프로젝트관리 , 5
DATABASE
보안 , 4
CA 와 시스템
OS
네트워크 , 3
자료구조
알고리즘
AI
서비스 , 14

---

## Page 10

I. 113 회 컴퓨터시스템응용기술사 기출문제
회차 교시 도메인 문제
Modbus
113 1 NW
SDDC(Software -defined Data Center)
113 1 NW
WPAN(Wireless Personal Area Network) Bluetooth,
근거리 무선네트워크 기술 의
113 2 NW
UWB, Zigbee
를 비교하여 설명하시오 .
〮 De Facto Standard 산업용 통신 프로토콜 , Modbus
- SCADA 시스템에서 RTU, PLC 간 통신을 위하여 시리얼과 TCP 에서 구현이 가능한 산업용 통신
응용 계층 메시징 프로토콜

---

## Page 11

I. 111 회 컴퓨터시스템응용기술사 기출문제
회차 교시 도메인 문제
111 1 서비스 9. 네트워크 전송계층 (Transport Layer) 역할
5. 스마트 미니더기기의 급속한 대중화로 인해 무선충전에 대한 수요가 확대되고 있
111 2 서비스
다 . 무선충전기술 을 설명하고 응용 분야 및 동향을 기술하시오 .

---

## Page 12

I. 110 회 정보관리기술사 기출문제
회차 교시 도메인 문제
110 1 NW
LPWA(Low Power Wide Area) 에 대해 설명하시오 .
6.XMPP, CoAP, MQTT 특징을 비교하시오 .
110 1 NW
XMPP(Extensible Messaging and Presence Protocol) 는 XML 에 기반한 메시지
지향 미들웨어용 통신 프로토콜
110 1 NW
8. 리버스 프록시 (Reverse Proxy) 에 대해 설명하시오 . ( 보안 /NW)
110 1 NW
11. ASN.1(Abstract Syntax Notation One) 에 대해 설명하시오 .
4. 무선센서네트워크 (WSN) 와 이동 가능한 무선단말로 구축되는 애드혹 (Ad - hoc)
네트워크의 차이점을 비교하고 ,
110 2 NW
애드혹 네트워크의 경로제어 방법인 리액티브 (Reactive) 형 방법과 프로액티브
(Proactive) 방법에 대하여 비교 설명하시오 .
3.CRC(Cyclic Redundancy Check) 의 원리를 기술하고 , CRC - 8 = x^8 + x^2 +
110 3 NW
x + 1 이 고 데이터워드가 01101011 일때
코드워드를 계산하는 과정을 설명하고 , 그 결과가 옳음을 검증하시오 .

---

## Page 13

2. 110 회 컴퓨터시스템응용기술사
회차 교시 도메인 문제
110 1 NW L2 스위치 (L2 Switch) 에 대해 설명하시오 .
110 1 NW 12. FEC(Forward Error Correction) 에 대해 설명하시오 .
3. 데이터 전송 오류가 발견된 경우 Data Link Layer 에서 오류 복구를 수행 하는
110 2 NW
절차에 대하여 설명하시오 .
4. 버스 상에 여러 노드가 연결된 경우 이용될 수 있는 HDLC
110 2 NW
(High-level Data Link Control) 의 동작 모드를 설명하시오 .
5. SIP(Session Initiation Protocol) 의 개념을 설명하고 , 세션 (Session) 의 생성 과정을
110 3 NW
설명하시오 .
4. 통신망 (Communicaton Network) 장치들의 물리적 구성 형태 및 각각의 특징에
110 4 NW
대하여 설명하시오 .

---

## Page 14

Chapter I Network 기본
1. Network 개요
2. OSI 7 Layer
3. TCP/IP
4. 인터네트워킹
5. Ethernet Switch
6. CSMA/CD
7. CSMA/CA
8. Multicast
9. OFDM
10. QoS
11. Sliding Window
12. 망중립성
14

---

## Page 15

1. Network 개요
I. Network 기본
[NW 도메인 대응 전략 ]
1. NW 개념 및 원리적인 토픽에 대한 일반적인 이해 필요
2. 편차가 심한 도메인으로 , 적게는 1~2 문제부터 , 많으면 5 문제 내외 출제됨
3. 연동되는 도메인은 Digital Security 도메인과 연계되어 출제 됨
4. 토픽 목록에 상 , 중 토픽 중심으로 공부 하여 , 출제 가능성이 높은 토픽부터 정리하는
것을 추천
5. 원리 토픽 등은 반드시 이해 중심 으로 공부하는 것을 추천 ( 대충해 보았자 , 15 점 안나옴 )
키워드 암기
15

---

## Page 16

1. Network 개요
I. Network 기본
용 어 설명 및 특징
- 정보의 송수신 측 또는 망 내에서 정보를 신뢰성 있고 효율적이며 안전하게 주고
받기 위해 사전에 약속된 규약 , 규범
Network
- 전달되는 정보의 형태 , 에러 발생 제어 , 동기 방식 등의 약속
Protocol
- 구문 (Syntax) : 데이터의 형식 (Format), 부호화 (Coding), 신호레벨 (Signal Levels)
정의 , 데이터 구조와 순서에 대한 표현
- 전파 또는 음파 등의 파장이 반사 및 굴절하여 물결 모양과 같이 방향을 바꾸는
주기적 현상 ( 라디오 주파수 (Radio Frequency); 라디오파를 사용하는 네트워크 )
주파수 - 주기적 파상 현상이 1 초 동안에 반복되는 횟수
(Frequency) - 주파수의 표준 단위는 Hz 라고 하며 , 초당 1 사이클을 완성된다면 1Hz, 초당
60 사이클로 완성된다면 이것은 60Hz 라고 함 (FM 88~108 MHz(mega Hertz.
메가헤르츠 ) 의 대역사용 )
- Institute of Electrical and Electronics Engineers
IEEE - 국제전기전자기술자협회 , 미국 전기 , 전자 기술자 협회
( 예 ) IEEE 802.11 ( 무선랜 표준 )
Internet Engineering Task Force; 인터넷의 원활한 사용을 위한 인터넷 표준
IETF
규격을 개발하고 있는 미국 IAB(Internet Architecture Board) 의 조사위원회
16

---

## Page 17

1. Network 개요
I. Network 기본
용 어 설명 및 특징
- International Mobile Telecommunications-2000 의 약어로 ITU - R 에서 정의
- 개인이동통신 기술과 위성통신기술을 통합한 제 3 세대 이동통신시스템
IMT-2000
- 2000 이란 숫자는 이 서비스가 2000 MHz 주파수 대역에서 제공된다는 점과
당초 2000 년부터 상용화 될 것을 예상해서 붙인 이름
5G 의 핵심은 ' 밀리미터파 ' 로 불리는 28 ㎓ 이상 고주파 대역을 이동통신 주파수로
5G: IMT-2020 활용 . 28 ㎓ 에선 각 주파수 대역 (100 ㎒ ) 8 개를 주파수집성 (CA) 기술로 묶어 최대
800 ㎒ 대역폭 확보
Code Division Multiple Access( 코드분할 다중접속방식 ) 발전과정
1 세대 : 아날로그
2 세대 : CDMA( 디지털 )
3 세대 (IMT 2000): 북미방식의 동기식 : CDMA 2000 - > EV - DO
CDMA
유럽방식의 비동기식 : W - CDMA - > HSDPA
4 세대 (LTE): 하나의 단말기로 위성망 , 무선랜 , 인터넷 등을 모두 이용할 수 있는
서비스
5 세대 : LTE 보다 수십 ~ 수백 배 더 빠른 통신 기술 지칭 ( 보통 70 배 )
- 3rd Generation Partnership Project
- 3GPP 는 IMT - 2000 의 표준화로 비동기 방식이 결정될 수 있도록 하기 위해
3GPPP
유럽과 일본의 주도로 결성된 표준화 단체
- 3GPP 후신인 5GPPP 를 설립
17

---

## Page 18

용 어 설명 및 특징
- 전화망 (PSTN; Public - Switched Telephone Network; 공중망 ) 은 컴퓨터 네트워크
를 고려하지 않았고 1:1 통신만이 가능했기 때문에 컴퓨터 네트워크 보다 데이터
통신의 범주에 속함 .
Circuit Switched
Network
- 전화망과 같은 원리로 운영되는 통신망을 Circuit Switching Network 라고
부름 .
- 변조 (Modulation) 되기 이전 또는 변조되지 않는 원래 정보 신호들이 있는
저주파 영역 , 혹은 그 신호
- 데이터를 변조하지 않고 디지털 신호를 그대로 전송 하며 , 베이스밴드는 보통 한
Baseband
매체에 다른 신호들과 동시에 신호를 전송하는 멀티플렉싱을 위하여 신호를 더
( 기저대역 )
높고 효율적인 주파수 대역으로 변조시키기 이전의 원래 주파수 대역을 말함 .
- 기저대역 시스템 (Baseband System): 변조와 복조의 필요 없이 , 기저대역에서
전송 , 처리가 이루어지는 시스템 ( 무변조이므로 , 대용량 , 원거리 사용 안함 )
신호 정보를 전송 매체의 채널 특성에 맞게끔 신호 ( 정보 ) 의 세기나 변위 ,
변조 (Modulation)
주파수를 적절한 파형 형태로 변환하는 수정 작업
- 라디오나 텔레비전을 비롯하여 무선통신에서 정보를 실어 보내는 사인 (sine) 파
또는 펄스 (pulse) 파 .
반송파 - 예를 들어서 , 라디오 방송의 경우 음성신호를 그대로 전파로 보내는 것이 아니라 ,
(Carrier wave) 방송국에 의해 정해진 일정한 진폭과 일정한 주파수의 고주파전류를 사용하여
이것을 음성신호로써 변화시키고 ( 변조 ), 송신 안테나에 가해서 방송전파를 얻고
있는데 , 이 고주파전류를 반송파라고 함 .
18

---

## Page 19

용 어 설명 및 특징
- 일정한 진폭의 연속 ( 상하 위치가 같음 ) 에서 주파수를 전기 신호에 맞춰 변화
시키면서
반송파
통신하는
방법 또는
방식을 말함
주파수 변조
(Frequency
Modulation)
- 진폭변조는 전송되는 정보에 비례하여 , 출력 신호의 세기를 변화
[ 진폭 ] 송수신되는 기호의 파형 (waveform) 에서 변화의 폭 , 주기적인 진동이 있을
때 진동의 중심으로부터 최대로 움직인 거리 혹은 변위 ( 위치의 변화량으로
진폭 변조
크기와 방향을 가지는 벡터량 ) 를 이르는 용어로
(Amplitude
아래위 방향으로 주기적인 왕복운동에서
Modulation)
가운데 중심에서 최대 거리
- 진폭에 맞춰 데이터 전송 (AM 방식 )
- wavelength: 파장
- 대상되는 심볼에 하나의 부호어 ( 부호화 단위 ) 를 할당하는 대응관계
부호화
[ 참고 ] 수학적으로 매핑 , 변환 등으로도 불리움 , 각 데이터 정보 하나 하나에 할당
(Encoding)
되는 2 진 표현으로 바꾸는 과정
19

---

## Page 20

용 어 설명 및 특징
- WAVE(Wireless Access in Vehicular Environment)
- 고속 이동 중인 차량 네트워크에서 운전자의 안전 정보 및 상업적 서비스를 제공하기
위한 차량용 무선 전송 기술 , 5.85~5.929GHz 의 75MHz, 200km/h 지원 .
- IEEE 802.11p: 차량 이동 환경에서의 무선 액세스 (WAVE) 를 추가한 IEEE 802.11 표준
- FNC(Fully Networked Car)
차량 내부 , 차량과 차량 간 , 차량과 인프라 간의 실시간 통신 및 정보 공유 통한 지능형
교통체계 구축과 다양한 서비스 융합이 가능
차량간 WAVE 통신 기술을 돕는 단말기 내부 설치
WAVE
- 차량이 다른 차량 또는 도로에 설치된 통신시설을 통해 고장차량 위치를 정확히 알게
되면 연쇄 추돌사고를 예방할 수 있다 .
- 최근 5 년간 고속도로 교통사고 치사율을 분석한 결과 일반사고는 11.2%, 2 차사고는
62.3% 로 나타났다 .
20

---

## Page 21

용 어 설명 및 특징
- 하나의 전송로를 분할시켜 , 다수의 채널로 결합 구성하는 기술
- 하나의 회선 또는 전송로 ( 유선의 경우 1 조의 케이블 , 무선의 경우 1 조의 송수신기 ) 를
분할하여 개별적으로 독립된 신호를 동시에 송수신 할 수 있는 다수의 통신로 ( 채널 ) 를 구
성하는 기술 . 대표적인 다중화 방식으로는 하나의 회선을 다수의 주파수 대역으로 분할
하여 다중화하는 주파수 분할 다중 방식 (FDM) 과 하나의 회선을 다수의 아주 짧은 시간
간격 (Time interval) 으로 분할하여 다중화하는 시분할 다중 방식 (TDM) 등이 있다 .
다중화
(multiplexing)
MUltipleXer
( 멀티플렉서 )
1) 주파수분할 다중화 (Frequency Division Multiplexing: FDM)
2) 시분할 다중화 (Time Division Multiplexing: TDM)
3) 파장분할 다중화 (Wavelength Division Multiplexing: WDM)
다중화 유형
- 여러 개의 빛 ( 파장 ) 에 독립된 정보를 실어 하나의 빛으로 묶어 광섬유를 통해 전달하는
방식
- DWDM, OADM
21

---

## Page 22

용 어 설명 및 특징
- WAN 장비로 , 보통 통신사업자 구축 . 비용 수억원
MUX
22

---

## Page 23

용 어 설명 및 특징
- 위성 통신에서 동일한 서비스 지역 내에 있는 다수의 지지국이 하나의 전송로 , 즉 위
성 탑재 중계기 등을 공동 사용하여 상호 간에 통신하고 , 이동체 통신에서 다수의 이동
국 (mobile station) 이 기지국을 공동 사용하여 상호 간에 통신 할 수 있게 한다 . 신호의
다중화 방법에 의하여 하나의 중계기를 다수의 국이 분할하여 공동 사용할 수 있게 하는
다원접속
(multi access)
방식에는 주파수 분할 다중 접속 (FD MA ), 시분할 다중 접속 (TD MA ), 부호 분할 다중 접
속 (CDMA) 의 3 가지 방식이 있다 .
( 예 ) 코드분할다중접속 (Code Division Multiple Access, CDMA) 은 이동 통신에서
코드를 이용한 다중접속 기술
23

---

## Page 24

용 어 설명 및 특징
- 동영상 , 영화 등의 스트리밍 서비스 사례
OTT
- 기존 통신 , 방송 사업자를 포함하여 , 인터넷 기반으로 드라마 , 영화 등의 멀티미티어
(Over The
컨텐츠 제공 서비스 , Triple Service 사례
Top)
- Top = 셋톱박스 의미
24

---

## Page 25

용 어 설명 및 특징
LAN: Local Area Network
- 회사 건물 , 건물 내부의 컴퓨터 네트워크
MAN(Metropolitan Area Network)
- LAN 과 WAN 의 중간급으로 LAN 의 범위를 특정 지역 레벨까지 확대하여 지역을
네트워크 형태
담당하는 구간
- 도시형 네트워크 (CCTV 네트워크 사례 )
WAN: Wide Area Network
- 멀리 떨어진 LAN 간 이어주는 Network 구간
25

---

## Page 26

2. OSI 7 Layer
I. Network 기본
기출문제
1. OS I 7 Layer 와 TCP/IP 비교 설명하시오 . ( 조직응용 71 회 2 교시 )
2. OSI 7 Layer 와 TCP/IP 의 다음에 대해 설명하시오 .
가 . OSI 7 Laye 계층
나 . OSI 7 Laye 와 TCP/IP 비교
다 . TCP/IP 에서 활용되고 있는 Subnetting 과 Supernetting
( 정보관리 98 회 4 교시 )
3. TCP 의 Three - way Handshaking 절차에 대하여 설명하시오 . ( 컴시응 , 104 회 1 교시 )
4. HTTP 의 Keep Alive 에 대하여 설명하시오 . ( 컴시응 , 104 회 1 교시 7 번 )
5. 네트워크 전송계층 (Transport Layer) 역할 ( 컴시응 , 111 회 1 교시 )
26

---

## Page 27

2. OSI 7 Layer
I. Network 기본
I. OSI 7 계층 모델 (7 Layer - model for OSI) 의 개요 .
가 . OSI(Open Systems Interconnection: 개방형 시스템간 상호접속 ) 7 Layer 의 정의
- 모든 네트워크 통신에서 생기는 여러가지 충돌 문제를 완화하기 위하여 , 국제표준기구 (ISO) 에서
표준화된 네트워크 구조를 제시한 기본 모델
- ISO( 국제표준화기구 ) 가 작성하고 있는 컴퓨터의 통신절차 ( 프로토콜 ) 에 관한 국제표준규격
나 . OSI 7 Layer 의 특징
1) 네트워크 통신기능을 layer 로 나눔으로써 각 layer 의 변경에 있어 다른 layer 에 영향을 주지 않음 .
각 layer 는 네트워크 통신 기능의 layer 별 집합 .
2) 실제 구현에 대한 언급이 없음
3) 개념 정의 및 설명 , 네트워크 관련 토의 등의 도구 로 많이 쓰임
4) 상위계층에서 하위계층으로 내려올 때 Header, Trailer 등을 첨부 (encapsulation)
5) 하위계층에서 상위계층으로 올라 갈 때 해당 Header 를 분석하고 분리
27

---

## Page 28

II. OSI 7 Layer 의 구조
통신순서
Data
7. Application 7. Application
6. Presentation 6. Presentation
Data
5. Session 5. Session
Transport(segment)
4. Transport 4. Transport
Network(packet)
3. Network 3. Network
Router
Data Link(frame)
2. Data Link 2. Data Link
Bridge
Physical(bits)
1. Physical 1. Physical
Repeater
- OSI 7 Layer 는 각 계층마다 특정한 서비스를 제공 하고 , 이를 위한 각각 프로토콜이 존재함 .
역캡슐화 – 헤더 등 벗기는 과정
캡슐화 – 헤더 정보 등을 붙이는 과정
( 송신측 ) ( 수신측 )
28

---

## Page 29

III. OSI 7 Layer 의 특징 및 설명
가 . Application Layer
- 사용자 , 즉 단말기를 조작하는 사람이나 데이터 통신 서비스를 수행하는 프로그램 등에 여러 서비스를
제공하는 역할 .
네트워크 소프트웨어 UI 부분
사례
사용자의 입출력 (I/O) 부분
HTTP · SSI · DNS · FTP · 고퍼 · NFS · NTP · SMPP · SMTP ·
대표 프로토콜
DHCP · SNMP · 텔넷
- 여러 가지 application 업무에서 필요로 하는 통신 서비스를 제공
(Word processor, File Transfer, Electronic Mail, etc .)
[ 참고 ] HTTP 의 Keep Alive
정의 : Keep Alive 란 연결된 socket 에 IN/OUT 의 access 가 마지막으로 종료된 시점부터 정의된 시간까지
access 가 없더라도 대기하는 구조 . 즉 정의된 시간 내에 access 가 이루어진다면 계속 연결된 상태를
유지할 수 있는 기능 ( 서버와 클라이언트 간에 http 1.1 에 기준으로 연결 - true, false 로 설정 )
29

---

## Page 30

나 . Presentation Layer( 표현 계층 )
- 전송형식에 관한 책임
(Application 이 다루는 정보를 통신에 알맞은 형태로 만들거나 , 하위 계층 (Session Layer) 에서
온 데이터를 사용자가 이해할 수 있는 형태로 만드는 일 .
- Data encryption( 암호화 )
- Compressing( 압축 ) : MPEG, MIDI, ASCII, EBCDIC, JPEG, GIF, TIFF, etc.
- Code formatting 과 application conversion 을 제공
기능 포장 / 압축 / 암호화
MIME · TLS · SSL
대표 프로토콜
MIME(Multipurpose Internet Mail Extensions) 는 전자 우편을 위한
인터넷 표준 포맷
30

---

## Page 31

다 . Session Layer
- 두 process 사이에 데이터가 흐를 수 있는 가상 경로의 확립이나 , 해제를 수행
- 양 끝단의 응용 프로세스가 통신을 관리하기 위한 방법을 제공한다 .
기능 통신을 하기 위한 세션을 확립 / 유지 / 중단 ( 운영체제가 해줌 )
라 . Transport Layer
- Data 를 확실히 상대방에게 도착시키는 역할 및 Data 전송의 신뢰성을 높임 .
- Establish connections : Synchronize – Negotiate Connection – Synchronize – Acknowledge
- Flow control
- 종단 ( end - to - end) 통신을 신뢰성 있고 효율적인 데이터를 전송하며 , 기능은 오류검출 및 복구와 흐름
제어 , 중복검사 등을 수행한다 .
오류 제어 방식 시퀀스 넘버 기반의 오류 제어 방식을 사용
대표 프로토콜 TCP · UDP · SCTP
31

---

## Page 32

마 . Network Layer( 네트워크 계층 )
- 단말간의 시스템끼리 data 를 전송하기 위한 최선의 통신경로 선택 을 제공
- Routers 네트워크 장비가 작동하는 계층 / - Information Unit : Packet
논리적인 주소 구조 (IP), 곧 네트워크 관리자가 직접 주소를 할당하는
특징
구조를 가지며 , 계층적 (hierarchical) 이다
기능 주소부여 (IP), 경로설정 (Route)
대표 프로토콜 ARP · IP · ICMP · IPsec · IGMP
바 . Data Link Layer( 데이터 링크 계층 )
- 상대방과 물리적인 통신을 위한 통신로를 확립 , - Data 가 통신로를 통과하는 동안에 오류를 검사
- 전송하는 동안 오류가 있는지 확인하고 , 오류를 정정하며 , 만약 오류가 있으면 물리계층은 2 계층에게
재전송을 요구한다
• 프레임에 주소부여 (MAC - 물리적주소 ) : 주소 값은 물리적으로 할당 받는데 , 이
는 네트워크 카드가 만들어질 때부터 맥 주소 (MAC address) 가 정해져 있다는
기능
뜻
• 에러검출 / 재전송 / 흐름제어
대표 프로토콜 이더넷
32

---

## Page 33

사 . Physical Layer( 물리 계층 )
- 통신회선으로 Data 를 나타내는 ‘ 0’ 과 ‘ 1’ 비트의 정보를 회선에 내보내기 위한 전기적 변환이나 기계적
작업을 담당
- 물리계층에서 중요한 기능은 Interface 에 대한 기능 . 각 장치들 간의 물리적인 interface 로 데이터를 다른
시스템으로 전송하기 위해 담당하는것이 물리계층이며 , 직렬 및 병렬 Cable , NIC , Connector 등이 이
물리계층에 속한다 .
기능 네트워크 하드웨어 전송 기술
RS-485 - 직렬 연결에 대한 OSI 모델의 물리 계층 명세
두 선 사이의 전압차로 데이터를 표현한다 . 전압의 한쪽이 「 1 」레벨이면 , 다른 한
대표 프로토콜
쪽은 「 0 」레벨을 나타낸다 . 올바른 신호로 인식하려면 적어도 전압의 차이가
0.2V 이상 이어야 한다 .
33

---

## Page 34

[ 참고 ]
SPF 라고 암기
Or 등산업체 이름
34

---

## Page 35

3. 인터넷프로토콜 (TCP/IP)
기출문제
1. 네트워크 통신을 위한 TCP/IP 의 프로토콜에서 자체적인 문제점을 기술하고 TCP 통신에서 아래의
기능을 설명하시오
( 가 )listen() ( 나 )accept() ( 다 )slow - start 단계
( 조직응용 86 회 2 교시 )
2. TCP 와 UDP 의 특성을 프로토콜 헤더 , 연결성 , 성능 , 활용하는 응용 프로토콜의 측면에서
비교하시오 .
( 조직응용 78 회 2 교시 )
3. IPv4 주소에 대해 물음에 답하시오 .
1) IPv4 의 주소 클래스 (class) 를 설명 하시오 .
2) IPv4 의 주소 클래스가 갖는 단점을 설명하시오 .
3) 2) 에서 답안 단점을 개선하기 위한 해결책을 제시하시오 .
( 조직응용 78 회 4 교시 )
4. OSL 7 Layer 와 TCP/IP 비교 설명 하시오
( 조직응용 71 회 2 교시 )
5. RTP(Real-time Transport Protocol) 의 개념과 특징에 대하여 설명하시오 . ( 컴시응 , 98 회 1 교시 )
35

---

## Page 36

3. 인터넷프로토콜 (TCP/IP)
I. Network 기본
기출문제
1. 패킷 데이터의 송수신 과정에서 순방향 에러 발견 (Forward Error Detection) 절차를 다이어그램을
이용하여 제시하고 , 전송 데이터가 1011010, 디바이더 (divider) 가 1101 인 경우 CRC
(Cyclic Redundancy Check) 값을 구하는 과정을 설명하시오 .
( 정보관리 , 104 회 , 3 교시 )
[ 순환중복검사 ] 데이터 전송에서의 검사 방식의 하나이며 , 블록 (block) 혹은 프레임 (frame) 마다에
여유 부호를 붙여 전송하고 , 그것에 따라서 전송 내용이 정확했는지의 여부를 조사하는 방법 .
36

---

## Page 37

3. 인터넷프로토콜 (TCP/IP)
I. TCP/IP 의 개념 (Transmission Control Protocol / Internet Protocol) 의 개요 .
가 . 정의 (Transmission; 전송 ; 전달 )
- TCP/IP 는 네트워크를 상호 연결시켜 정보를 전송할 수 있도록 하는 기능을 가진 다수의 프로토콜 이
모여 있는 프로토콜 집합 ; 인터네트워킹를 위한 프로토 콜
- TCP/IP 의 가장 대표적인 프로토콜은 3 계층의 IP 와 4 계층의 TCP 로 대부분의 응용서비스가 TCP
상에서 이루어지나 , 최근 인터넷의 단점을 보완하기 위해 UDP 를 적극적으로 이용하는 추세임 .
나 . TCP/IP 의 특징
1) 독립성 : Hardware, Operating System, 물리적 Network 에 무관한 전송 규약
2) 전세계의 유일한 주소체계 수립
다 . TCP/IP 의 표준화 이점
- 네트워크의 변화와 서비스유형에 따라 다양한 프로토콜들을 동시에 허용
- 표준규격이 실증에 기초하고 있음
- 표준규격과 표준화의 과정이 RFC( Request for Comments ; 인터넷 표준화기구 (IETF) 에서
전세계적으로 인터넷의 표준으로 정의된 문서 ) 형태로 개방되어 있음
37

---

## Page 38

II. TCP/IP Protocol Stack 비교
Port No.
OSI Reference Model TCP/IP conceptual layers
7
Application
T
F E S D T S
T L M N F N
응용
6
5 계층
Presentation N T S T M
P
(Application)
E P P P
T
5
Session
21 23 25 53 69 161
프렌스포트
4
Transport TCP UDP
4 계층
(Transport)
3
Network
인터넷 계층 IP
ICMP ARP RARP
3 계층
Network Interface
네트워크
2
Data Link
인터페이스 ( 네트워크 인터페이스 카드 ,NIC )
2 계층
1 Physical
Physical(Ethernet)
Physical
1 계층
38

---

## Page 39

III. TCP (Transport Layer Protocol) & UDP (User Datagram Protocol) 비교
구 분 TCP UDP
제어용 메시지 처리나 빠른 응답을 요구하는
정의 4 계층의 통신 프로토콜 응용서비스를 위하여 비연결형
(Connectless) 설정을 제공하는 프로토콜
데이터순서 순서 유지함 순서 유지하지 않음
데이터중복 데이터 중복 , 손실 없음 데이터 중복 , 손실가능
헤더 및 데이터에 대한 에러검사 후 헤더 및 데이터에 대한 에러검사 후
에러제어
에러시 재전송 에러시 재전송하지 않음
흐름제어 슬라이딩 윈도우 ( 패킷 흐름 제어 ) 사용 흐름제어 없음
연결의 확립
data
개념도
데이터 일방적 송신
data
데이터 송신
서로 신호 절차를 주고 받지 않고
확인 보내는 쪽에서 일방적 데이터 전송
39

---

## Page 40

IV. TCP Three-Way Handshake (TCP 연결 구조 ) / 4 - way Handshaking(TCP Connection Close)
Server
Client
SYN 보냄
SYN 받음
SYN/ACK 보냄
SYN/ACK 받음
ACK 보냄
ACK 받음
연결성립
1. Client 는 접속하고자 하는 서버의 포트번호와 클라이언트의 초기순서번호 ( Init Sequence Number,
ISN) 를 지정한 SYN 세그먼트를 전송 .
2. 서버는 서버의 초기순서번호 (ISN) 를 포함한 자신의 SYN 세그먼트로 응답 . 또 서버는 클라이언트의
ISN +1 ACK 를 보냄으로써 클라이언트의 SYN 에 확인 응답 .
3. 클라이언트는 서버로부터 보내 온 SYN 에 대하여 서버의 ISN +1 ACK 로 확인응답을 전송
위 3 개의 세그먼트에 의해 연결이 설정되며 이것을 three - way handshake 라 부름
Client 마지막 ACK 수신을 받
40
으면 서버측에서 연결 Closing

---

## Page 41

V. IP 프로토콜
가 . IP (Internet Protocol) 의 정의
- Subnet 과 무관하게 데이터 패킷을 임의의 host 사이에서 주고 받기 위한 프로토콜로 패킷 별 경로
선택
- 가상회선서비스 제공이 안되기 때문에 항상 32bit IP address 를 포함
- OSI 네트워크계층에서의 흐름제어 , 오류제어 같은 기능 없음
나 . IP Header 의 주요 구조
41

---

## Page 42

다 . IP Header 의 주요기능
종류 내용
1. version(4)
IP header 의 형식을 나타냄 : IPv4, IPv6
2. Header length(4) 32bit 로 헤더의 길이를 표시
3. Type of service(8) 우선권 , 지연시간 , 처리능력 , 신뢰성등 바람직한 QoS 를 네트워크에 알려줌
4. Total length(16) byte 단위의 IP 헤더와 데이터 길이를 표현 .
5. Identification(16)
각 datagram 마다 고유하게 설정되는 datagram 번호
6. Flag(3)
IP datagram 의 단편화 유무
7. Fragment offset(13) 단편화 되기 전 datagram 처음에서부터의 상대적 위치 기록
8.Time To Live(TTL)(8) 네트워크에서 IP datagram 이 활동할 수 있는 최대 시간
9. Protocol(8) IP 데이터를 수신할 상위 계층 프로토콜 , ICMP, IGMP,TCP,UDP
10. Header checksum 오류 탐지 bit
#Bits
[ 참고 ] IP Datagram
4 4 8 16 16 3 13 8
Version Header Type of Total Identification Flags Flagment TTL
Length Service Length Offset
8 16 32 32 var
Protocol Header Source IP Destination IP Data
Checksum address IP address Option
42

---

## Page 43

[ 참고 ]
I. TCP/IP 통신 기능
( 가 )listen()
- 클라이언트 요청이 올 때까지 소켓
대기 상태
( 나 )accept()
- 클라이언트 요청에 따라 accept( ) 함수를
이용하여 접속 허용
( 다 ) slow - start 단계 ( 완만한 출발 )
- 망 내에 존재하는 패킷의 수가 과도하게 증가되는 현상을 혼잡 (Congestion) 이라고 정의하며 혼잡
현상을 방지하거나 제거하는 기능을 혼잡제어 (Congestion Control) 라고 한다 . Slow - start 는
패킷을 저장하는 중간 라우터의 저장할 버퍼 공간의 부족으로 데이터 전송에 문제가 생기는 것 .
[ 참고 ] IP Address Schema
I. IP 주소 (Address) 의 개요
가 . 정의
- 인터넷에 있는 수 많은 호스트들을 각각 구분할 수 있도록 각 호스트마다 유일한 4 바이트의 정수
값을 할당하는 데 , 이것을 인터넷 주소 또는 IP 주소 라고 부름 .
43

---

## Page 44

II. IPv4 의 주소 클래스와 클래스의 단점
가 . IPv4 의 주소 클래스 구조
첫 비트가 1110, 28bit 는 multicast id 로서
멀티캐스트 주소에 등록된 host 만 이 패킷을 받을
수 있음
1) net - id 는 네트워크 그룹이 틀려서 , 라우팅을 해야되며 , net - id 가 같은 경우에는 라우팅 기능 필요
없음
2) 클래스 A 는 7 비트의 netid 와 24 비트 (256*256*256 개 ) 의 hostid 로 나누어져 있음
3) 클래스 B 는 중간 크기의 네트워크에서 사용
( 예 ) KT 등 2 - 3 개 주요 업체
4) 클래스 C 는 netid 3 개 사용 (xxx.xxx.xxx.23)
( 예 ) 옥션 211.233.17.xxx ~ 211.115.78.xxx, 222, 232 3 개 사용 .
5) 클래스 D 는 , 224.x.x.x 로 시작하는 IP 주소를 클래스 D 주소라고 부름 ; 멀티캐스트 전송용으로 사용
44

---

## Page 45

[ 참고 ]
OSI7, TCP/IP 의 구조 비교
- TCP/IP 는 OSI 3, 4 계층을 중심으로 한 통신프로토콜의 계층집합
- ARP(Address Resolution Protocol): IP 주소를 물리적 하드웨어 주소로 자동적으로 변환하는
프로토콜
- ICMP(Internet Control Message Protocol): IP 계층을 이용해서 에러메시지 교환이나 다른 중요한
정보를 다른 호스트나 라우터의 IP 층과 교환 ( 예 ) PING
- IGMP(Internet Group Management Protocol): 복수의 호스트에 UDP 데이타그램을 송신하는 멀티
45
캐스팅에 이용되는 프로토콜 .

---

## Page 46

[ 참고 ] 인터넷 프로토콜에서 3 단계 주소체계 (Domain name, IP address, Physical address)
Your Host Name is the name of your computer or server and is a unique identifier - up to 255
characters long - that consists of numbers and letters.
Your Physical Address refers to the physical address of the Ethernet connection to your
computer or server. It is twelve characters long, and is a combination of numbers (0 through 9)
and letters (A through F) in the following format: XX-XX-XX-XX-XX-XX. This may also be
referred to as your MAC (Media Access Control) Address, Host ID or Server ID.
윈도우 , cmd , ipconfig/all
46

---

## Page 47

3 단계 주소 체계 :
식별자 설명
사용자 관점의 이름 체계 , 도메인 네임서버 사용 (DNS )
호스트이름
(Host/Domain Name)
일반적으로 IP 주소 , 특정 망에 연결된 특정 호스트가 다른망과
인터넷주소
인터네트워킹 될 때 형성된 가상 망인 인턴넷 내에서 유일하게
(Internet Address)
식별될 수 있도록 하는 주소
물리적 망에 접속된 각 장치에 대한 유일한 물리적 하드웨어 주
물리주소
소 , 이더넷 주소 또는 하드웨어 주소 (ARP 로 브로드캐스팅 )
(Physical Address)
예 ) 48 비트 LAN 카드 식별번호 , MAC 주소 , 어뎁터 주소 ,
[ 참고 ] 멀티캐스트 도메인 네임 시스템 ( mDNS ) 는 로컬 네트워크에 연결된 장비들이 서로 다른 자신들의
서비스를 발견하도록 해주는 프로토콜이다 . mDNS 는 PC 와 NAS 시스템 , 프린터 , 등 임베디드 장비에서
모두 쓰인다 .
47

---

## Page 48

서브넷 (subnet ) 개요 – 서브넷 마스크를 이용함
서브넷은 sub - network 의 줄인 말로 동일 그룹에 소속된 네트워 크 이지만 분리된 하나의 독립 네트워크
로 인식될 수 있는 네트워크를 의미함 . ( 네트워크 – 서브네트워크 마스크 /18 이라고 하면 , 16+2 예 )
이미지 출처 : http ://yupp2.egloos.com/
48

---

## Page 49

4. 인터네트워킹 (Internetworking)
기출문제
1. N/A
인터네트워킹 인터네트워킹 (internetworking) 는 두 개 이상의 네트워크를 연결하여 네
(internetworking) 트워크 간 하드웨어나 소프트웨어 모두를 연결시키는 방법론
49

---

## Page 50

4. 인터네트워킹
I. Network 기본
I. 서로 다른 네트워크 간의 연결기술 , Internetworking 의 개요
가 . 인터네트워킹 (Internetworking) 의 정의
- 두 개 이상의 서로 다른 N/W 간에 적절한 연결장치를 통하여 N/W 간의 차이점 조정 및 상호 연결시켜
정보교환이 가능하도록 하는 통신하는 기술 . 물리적 연결 이외에 논리적으로 연결
- 두 개 이상의 Network 간 통신으로 LAN (Local Area Network) 과 LAN 사이 혹은 LAN 과 WAN
(Wide Area Network) 사이를 연결하여 통신 하는 기술적인 개념
- 다양한 topology, 전송 매체 , 통신 장치간의 연결을 통한 통합 네트워크
나 . 인터네트워킹의 필요성
- 기존에 설치된 각종통신망의 접속
- 분산된 환경에서 상호운용성 극대화
- 장거리 통신에 필요 (LAN, WAN, MAN)
다 . 인터네트워킹의 유형
구 분 내 용 유 형
LAN 통상 10Km 이내의 지역을 연결한 N/W LAN to LAN
WAN 지리적으로 멀리 거리가 떨어진 N/W 연결 LAN to WAN
MAN 대단위 도심 지역 LAN to MAN
50

---

## Page 51

II. Internetworking Device
가 . OSI 7 Layer 별 Device 구성
OSI Reference Model 기본 Device 발전된 Device
7
Application
6
Presentation
게이트웨이 게이트웨이
(Gateway) (Gateway)
5
Session
4
Transport
라우터
3
Network
(Router)
브리지
스위치허브
2
Data Link
(Bridge)
(Switch Hub)
리피터
Physical
1
(Repeater)
51

---

## Page 52

나 . 각 Device 별 역할 및 특징
Device 역할 특징
- 서로 상이한 Protocol 을 - 응용계층간의 변환 , 이기종 N/W 연결 ,
사용하는 네트워크 간 연결 WAN to LAN, X.25 to LAN
- 서로 다른 통신 매체나 전송 방식 또는
- 복수의 컴퓨터와 근거리 통 사용하는 코드 체계에 이르기까지
신망 (LAN ; local area
Gateway 서로 다른 이 기종의 기계들을 서로 접속
network) 등을 상호 접속할
하려 할 때 사용하는 장비
때 컴퓨터와 공중 통신망 ,
- 응용 계층까지의 정보를 확인한 후 메시지
LAN 과 공중 통신망 등을 접속
를 전송
하는 장치를 가리킴 . 실제로는
미니컴퓨터 등이 사용됨 - 음성망과 IP 망 연결에서도 Gateway 장비 적용
- IP Address 에 의한 최적의 전송경로를 설정함
- 동일 프로토콜을 사용하는
라우터 - 효율적인 경로설정을 위해 Routing Table 을
분리된 N/W 를 연결
관리함 .
- 네트워크 흐름제어 및 - Mac address 를 근거로 traffic 을 분리함
브리지
traffic 분리에 사용됨 - 네트워크 흐름 및 오류 제어 등 수행
- 물리계층의 신호 중계
- 신호증폭을 통해 거리제한을 극복하기 위한 네트
리피터
워크 규모의 확장
- 신호 증폭
- 리피터 , 브리지 , 라우터 - OSI 7 Layer 중에서 2 계층 이상 지원기능 모듈
스위치허브
기능을 포함하는 장비 내장함
52

---

## Page 53

III. 인터네트워킹 장비의 최근 추세 및 기술의 발전전망
가 . 장비의 최근 추세
- 스위치와 라우터의 경계가 모호해지고 브리지 , 리피터의 사용 감소
- ATM(Asynchronous Transfer Mode; 비동기식 시분할 다중화 ) 과 라우터를 이용한 백본망 구성
- Storage 전용 (SAN) Switch 의 기업 내 활용 증가
나 . 인터네트워킹의 기술별 발전 전망
구분 내용
- SONET/SDH, ATM 등은 사용 안함 , 스위치 사용
메트로이더넷
- 주로 PC 방 등에서 사용 , 장애복구와 보안문제가 이슈임 .
- 음성 , 데이터 동시 지원하는 차세대 SONET
MSPP ( Multi Service
Provisioning Platform) - ATM 지원 , 뛰어난 확장성 , 운영비용 절감
- AP(Access Point) 가 유선 LAN 과 무선단말기 간의 연결 역할을 함
무선 LAN 과 유선 LAN 의
Internetworking - 유무선간 거리제약 및 보안이 취약함
- LABEL 을 이용한 Routing 기술
MPLS
53

---

## Page 54

5. Ethernet Switch
I. Network 기본
기출문제
1. 본사와 자가간 통신망을 구성하는데 , Transaction data 의 발생빈도와 응답속도 등을 고려하여
Switching 기법을 채택하기로 했다 .
L2, L3, L4 스위치를 분류하는 기준을 제시하고 , 특히 L4 스위치의 기본개념 , 장점 , 주요 적용
대상에 대해서 상술하시오 .
( 조직응용 75 회 3 교시 )
2. L7 스위치 ( 조직응용 72 회 1 교시 ) ( 컴퓨터시스템응용기술사 , 110 회 )
3. 웹 서버의 다중화 시에 활용하는 로드밸런서 (Load Balancer, 부하분산기 ) 에 대하여 설명하고 ,
L4 스위치와 L7 스위치를 사용하는 경우의 장단점을 설명하시오 .
( 컴퓨터시스템응용기술사 104 회 4 교시 )
4. NAT(Network Address Translation) 의 IP Masquerading, Port Forwarding,
Load Balancing 에 대하여 설명하시오 . (105, 정보관리 , 3 교시 6 번 )
54

---

## Page 55

5. Ethernet Switch
I. Network 기본
I. 이더넷용 스위칭 허브 , 이더넷 스위치
가 . 이더넷 스위치 (Ethernet Switch) 의 정의
- LAN 구성에 필요한 라우터 ( 3 계층 ), 리피터 등의 기능을 포함 하고 , 보다 지능적인 부가 기능을 갖춘
네트워크 통신 장비
나 . 이더넷 스위치의 종류
계층 스위치 유형 특징 및 주요 기능
− 패킷 데이터 영역 분석 , 스위칭 및 필터링
− 보안 기능 추가 , 웜 , 바이러스와 Email 필터링에 강함
5-7 L7 스위치
− 패킷의 IP/PORT 정보 뿐만 아니라 패킷의 URL 정보 , Cookie 정보 , Payload
정보를 종합 ( 사용자별 차별화 가능 )
− 세그먼트 분류 , 경로 제어 , 세션 관리 , 대용량 트래픽 처리
4 L4 스위치
− 로드 밸런싱 , L3 기능 포함
− L2 기능 포함 , Layer 3 범주 (Source IP, Destination IP) 에서 패킷의 경로
3 L3 스위치 제어
- 라우팅 기능 추가
- DataLink 계층 범주 (MAC 주소 기반 프레임 ) 에서 패킷의 경로 제어
2 L2 스위치
- MAC address(LAN 카드 고유번호 ) 정보 이용하여 프레임 처리함 .
55

---

## Page 56

II. L4 Switch 의 개요
가 . L4 스위치
- OSI 7 Layer 중 4 번째 Layer 인 Transport Layer 에 해당되는 TCP/UDP Port 정보를 이용하여
네트워크 트래픽을 분류하고 해당 트래픽의 경로를 결정하는 스위칭 기술
나 . L4/L7 Switch 주요기능
항 목 내 용 특 징
- 서버 기반의 Load Balancing 제공
부하분산 - 여러 대의 서버 가상화
- Firewall & VPN Load Balancing 제공
캐싱 서비스 - 투명한 캐싱 서비스 제공 - 사용자 설정 필요 없음
- N/W 트래픽 종류에 따라 서로 다른
서비스 연결 - 서비스 포트에 따라 서비스 종류 인식
서비스
QoS - Application 의 중요도에 따른 QoS 보장 - 서비스 포트 이용
다 . 부하분산 (Load Balancing)
- 여러 대의 서버를 마치 하나의 서버처럼 동작시킴으로써 성능을 쉽게 확장하게 하고 ,
서버의 장애 발생시에도 타 서버로 운영이 가능하게 함으로써 신뢰성을 향상시키기 위한 방법
56

---

## Page 57

라 . 캐시 리다이렉션 (Cache Redirection)
- 내부 망에서 외부 인터넷으로 향하는 웹 트래픽을 가로채어 캐싱 서버에게 전달하는 기능 으로
캐시 리다이렉션을 통해 웹 트래픽 (80 포트 ) 만을 처리하기 때문에 캐싱 서버에서 불필요한 패킷
처리를 막아주어 응답속도를 빠르게 할 수 있음 .
- 각종 부하분산 유형
(SLB, FW/VPNLB, CSLB, GWLB, GSLB 등 )
[ 참고 1]
L4 스위치의 CSLB(Cache Server Load
Balancing) 기능을 이용
[ 참고 2]
- DR Center: GLB 이용
- 한 곳의 네트워크에 장애가 발생할 경우
다른 곳으로 우회하여 접속하게 함으로써
안정적인 서비스 제공
- 사용자의 웹 트래픽 (URL 페이지 ) 요구는 L4 스위치에 의하여 우선적으로 캐싱 서버에 보내짐
- 해당 트래픽의 URL 이 캐싱서버에 저장되어 있으면 (hit) 캐싱서버가 즉시 응답하여 주며
- 캐싱 서버에 저장된 내용이 아니라면 (missed) 캐싱서버가 프락시로 동작하여 해당 URL 에서
페이지를 요청하여 다시 사용자에게 전달하고 캐싱 서버 자체에 저장함 .
57

---

## Page 58

III. 네트워크 장비와 보안장비의 결합 , L7 Switch 의 개요
가 . L7 스위치 (Switch) 개념
- Layer 7 에 해당하는 애플리케이션 정보를 바탕으로 지능적으로 트래픽을 관리하는 N/W 스위치 장비
- 기존 L4 스위치가 수행하는 기능들을 모두 수행할 수 있고 , 최근 사회적인 문제가 되고 있는 네트워크
보안문제
( 웜 , 바이러스 , 이메일 바이러스 , DoS / DDoS 공격 등 ) 를 어느 정도 해결
- 패킷의 내용을 분석 하고 이를 바탕으로 지능적 동작을 수행하기 때문에 ‘ L4 스위치 + 보안’을 넘어서
여러 가지 역할을 수행
- L7 Switch 는 L2∼7 사이의 모든 정보를 바탕으로 패킷을 전송 / 제어
( 기존의 L2/3/4 스위치의 특징들이 모두 포함 )
나 . L7 스위치의 특징
- 통상적인 L4 스위치의 연장선상에서 출발했지만 L4 스위치가 처리할 수 없는 일들을 수행
- L4 스위치의 경우 통상적으로 TCP/UDP 포트정보와 같은 Layer 4 정보를 이용해 패킷을 관리하는
기능을 수행
(1) 서버장비 ( 웹서버 , 파일서버 , 캐시서버 ) 에 대한 부하분산
(2) Cache Redirection 기능
(3) 네트워크장비 ( 파이어월 /VPN/ 인터넷라인 ) 에 대한 부하 분산
58

---

## Page 59

다 . L7 스위치의 주요 기능
용 어 설명 및 특징
- 특정 패턴을 갖는 WORM, e - Mail, Virus 분석하여 차단
보안기능강화
- DoS, DDoS 와 같은 비정상 트래픽은 트래픽 유입 수준을 일정 정도로 제한하여
(Packet Filtering)
서버가 항상 정상 수행하도록 함 .
- 확장자 (ASP, JSP, 이미지등 ) 를 통한 서버의 동적 결정 및 스위칭 (Redirection)
Content
Switching
기능 수행
- L4 스위치 기능 상속
Load Balancing
- 서버장비 ( 웹서버 , 파일서버 , 캐쉬서버 ) 등 부하 분산
[ 참고 ] L7 스위치의 동작과정
59

---

## Page 60

라 . L4 스위치와 L7 스위치 비교
구분 L4 스위치 L7 스위치
TCP/UDP 포트 정보를 분석 해 해당 트래픽의 내용 ( e - mail 제목 / 내용의 문자열 , HTTP
구조적
패킷이 현재 사용하는 서비스 종류 컨텐츠 URL, FTP 파일제목 , SSL ID, Cookie 정보 , 특
( HTTP, FTP, Telnet, SMTP, POP3, SSL 정 바이러스 ( CodeRed, Nimda 등 )) 의 패턴을 분석해
차이점
등 ) 별로 패킷을 처리함 . 패킷을 처리함 .
- DoS/ SYN Attack 에 대한 방어
- CodeRed / Nimda 등 바이러스 감염 패킷
기능적
필터링
N/A
차이점
- 네트워크 자원의 독점 방지를 통한 네트워크
시스템의 보안성 강화가 가능함 .
- 스위치로 들어온 패킷을 적절한 목적지 ( 주로 네트워크 장비나 클라이언트 때로는
불필요한 패킷을 Drop 시키기도 함 ) 로 전송해 줌 .
공통점 - 기본적인 기능과 역할은 동일하나 패킷을 분석해 성격과 중요도를 분류하는
intelligence 가 달라서 ‘ 적절한 목적지 ’ 를 찾아내 해당 패킷을 처리해 주는 능력에
차이가 발생함 .
마 . L7 스위치 구축 시에 선행 사항
1) 성능저하 문제 : filter, 패턴 숫자에 따라 성능 저하 높음
2) 모니터링 기능 강화 : ESM 등과 연계 방안 등 ‘ 끝 ’
60

---

## Page 61

6. CSMA/CD
I. Network 기본
기출문제
1. NA
61

---

## Page 62

6. CSMA/CD
I. Network 기본
I. LAN 의 매체점유방법 , CSMA/CD 의 개요 .
가 . CSMA/CD (Carrier Sense Multiple Access with Collision Detection ) 의 정의
- 전류의 강도를 통해 케이블이 사용 중인지 확인하고 트래픽이 없으면 패킷을 송출하는 LAN 의 매체
점유 방법 중의 한가지 방법
- 버스형 LAN 에 적용되는 방식
나 . 충돌 검출과 재전송 알고리즘
용 어 설명 및 특징
- 충돌이 발생할 경우 Signal 전압은 단일 스테이션의 데이터 Signal 전압보다
Collision
Detection
높음
- 충돌 발생하면 , 지속해서 재전송 시도
재전송 알고리즘 - 재시도할 때마다 Backoff 하는 시간은 매번 2 배씩 증가 16 번 충돌이 계속 발생
- > 전송 중지 - > 에러발생보고
62

---

## Page 63

II. CSMA/CD 동작 원리 및 타 점유방법 비교
가 . CSMA/CD 동작 원리
1) 송신을 원하는 호스트는 송신하기 전에 다른 호스트가 채널을 사용하고 있는지를 조사
2) 만일 채널이 빈 상태이면 전송을 시작하고 채널이 사용 중이면 계속 감시하고 있다가 빈 채널이
감지되는 즉시 전송 .
3) 전송하는 동안 계속적으로 채널을 감시하여 전송중인 데이터에 충돌이 발생되는 지를 조사한다 .
( 충돌 발생은 정상적인 데이터 송수신시 적용되는 전압 레벨보다 훨씬 높은 레벨의 검출 로 인지 )
4) 만일 충돌이 감지되면 전송은 즉각 중지되고 충돌을 알리는 jam 신호를 전송 .
(jam 신호는 32 비트에서 48 비트의 길이를 갖는 특수한 프레임 )
5) jam 신호 송신 후 일정 시간 후에 재전송을 시도하는데 이 시간은 충돌이 재발되는 것을 방지
하도록 설계된 대기 프로토콜에 의해 결정된다 .
63

---

## Page 64

II. CSMA/CD 동작 원리 및 타 점유방법 비교
나 . 타 점유기법과의 비교
용 어 CSMA/CD CSMA/CA
표준 - IEEE 802.3 - IEEE 802.11
토폴로지
- 버스형 , 트리형 - 무선
( 통신망 구조 )
- 매체가 비어있는지 우선 확인하는 - 데이터 전송 전에 사전 신호 송신
주요 원리
충돌 회피 전략 - 신호확인 후 , 데이터 전송
- 경쟁방식의 전송 규격
- 충돌 시 일정 시간 대기
특징 - 구조가 비교적 단순
- 이더넷 기반으로 현재 널리 사용
- 무선 인프라에서 사용
III. 여러 LAN 표준
IEEE 802.3 : CSMA/CD (Carrier Sense Multiple Access/Collision Detection)
IEEE 802.4 : 토큰 버스 (Token Bus)
IEEE 802.5 : 토큰 링 (Token Ring)
IEEE 802.6 : MAN (Metropolitan Area Networks)
IEEE 802.7 : 광대역 LAN
IEEE 802.10 : 보안 (Security)
IEEE 802.11 : 무선 네트워크 (Wireless Networks)
64

---

## Page 65

7. CSMA/CA
I. Network 기본
기출문제
1. CSMA/CA (Carrier Sense Multiple Access/Collision Avoidance)
( 조직응용 78 회 1 교시 )
65

---

## Page 66

7. CSMA/CA
I. Network 기본
I. IEEE 802.11 Protocol 의 무선랜 MAC (Media Access Control) 기법 , CSMA/CA 의 개요
가 . CSMA/CA (Carrier Sense Multiple Access/Collision Avoidance 의 정의
- CSMA/CD 의 변형으로서 , 무선 환경에서 사용하는 media access 방법 ( 알고리즘 )
- 무선 랜 MAC 의 기본 매체접근 프로토콜인 DCF 는 CSMA/CA 를 사용하여 여러 시스템 사이에서
자동적으로 매체를 공유하게 함 .
[ 참고 ] DCF (Distributed Coordination Function): 개별적인 노드가 경쟁에 의해 무선 채널을
획득하도록 하는 방식
- CSMA/CA 는 확인신호가 충돌 없이 전송 된 것을 확인하면 이어서 데이터를 전송함
66

---

## Page 67

II. CSMA/CA 알고리즘
- DIFS (DCF Inter-Frame Space)
- SIFS (Short Inter-Frame Space)
DCF (Distributed Coordination
Function): 개별적인 노드가 경쟁에
의해 무선 채널을 획득하도록 하는 방식
[CDMA/CA 개념도 ]
1) Sender( 송신단 ) 가 수신단 (Receiver) 에게 DIFS( 일반데이터 서비스에서 사용하는 최소한의 시간 ) 무선
매체가 유휴상태임을 감지한 후에 , 다음 동작까지 기달려야할 최소한의 시간 ) 만큼 대기하고 채널이
유효 (Idle) 하면 바로 전송
2) 수신단에서는 정상적으로 수신할 경우 SIFS(Short IFS ; 스페이싱을 짧게 하여 신속한 전송을 위한
서비스에 사용 ) 만큼 대기한 후에 잘 받았다는 ACK (Acknowledgement) 신호를 보냄 .
67

---

## Page 68

8. Multicast
I. Network 기본
기출문제
1. Multicasting
( 조직응용 80 회 1 교시 )
2. 멀티캐스트 서비스 개념 과 IGMP/MLD (Multicast Listener Discovery) 구간 , 멀티캐스트 라우팅
구간 및 멀티캐스트 정보 송신 구간에 대해 논하시오 .
( 조직응용 80 회 4 교시 )
3. Anycast
( 조직응용 78 회 1 교시 )
4. 멀티캐스트 (Multicast) IP 주소의 특징을 설명하시오 .
68

---

## Page 69

8. Multicast
I. Network 기본
I. 데이터의 중복 전송을 최소화하기 위한 1:N 전송 기술 , 멀티캐스트 개요
가 . 멀티캐스트 (Multicast) 서비스의 개념
- 특정 송신자가 하나의 데이터 패킷을 동시에 여러 수신자에게 보내는 서비스
- 서버의 부하 , 네트워크 부하를 줄이고 사용자단의 화질을 개선 시키는 등을 위해 한 개의 스트림만
으로 모든 사용자들에게 정보를 전달하는 네트워크 서비스
나 . 멀티캐스트 서비스의 의의
- 본격적인 인터넷 방송이 가능해 방송과 통신 융합의 신호탄이 됨
- 인터넷을 통한 대용량 데이타 전송이 용이해 다양한 서비스가 가능함
- 멀티캐스트를 위한 라우터 교체 비용 등은 발생하나 사용자의 대기시간 감소 , 서버부하
등의 감소로 투자비용 절감이 가능
다 . 멀티캐스트 서비스의 특징
- 정해진 여러 사용자에게 동시에 전송
- 라우터 , HUB, G/W (Internetworking) 등의 장비 및 S/W 필요
- 장점 : 네트워크 효율화 , - 단점 : 구현복잡 , 고비용
69

---

## Page 70

II. 멀티캐스트 서비스 구간
가 . 멀티캐스트 서비스 구간 구성
- 멀티캐스트 서비스는 멀티캐스트 정보송신 구간 , 멀티캐스트 라우팅 구간 , IGMP/MLD (Internet
Group Management Protocol/ Multicast Listener Discovery) 구간 으로 나누어짐
- D 클래스 주소의 1,1,1,0 과 뒤에 멀티캐스터 주소의 호스트 그룹
70

---

## Page 71

나 . IGMP/MLD 구간
- 수신 단말이 특정 멀티캐스트 정보를 수신하고자 할 때 연결된 라우터로 정보를 요구하고 라우터는
멀티캐스트 정보가 있으면 단말한테 전달하는 구간
- IGMP 는 멀티캐스트 그룹에 대한 가입 / 탈퇴 기능에 대한 메커니즘 ( 관리기능수행 ) 으로써 라우터와
호스트 단말간에 주기적인 Report 및 Query 메시지를 교환하여 라우터는 자신의 서브넷 단말들이
어느 멀티캐스트 그룹주소에 소속인지 파악함
- MLD 는 멀티캐스팅을 지원하는 IPv6 라우터와 네트워크 세그먼트의 멀티캐스트 그룹 구성원 간의
구성원 자격 상태 정보를 교환 하는 데 사용
- IPv4 에서 쓰이던 IGMP 는 ICMPv6 로 통합되어 MLD (Multicast Listener Discovery) 란 이름으로 정의
되어 있으며 최근 IGMPv6 가 추가된 MLDv3 가 표준화될 예정임
다 . 멀티캐스트 정보송신 구간
- 이 구간에서는 멀티캐스트 송신 단말이 멀티캐스트 정보를 IP 망으로 송신 함
- 멀티캐스트 송신 단말이 연결된 라우터와 멀티캐스트 수신 단말이 연결된
라우터가 동일하면 라우터는 멀티캐스트 정보를 바로 보낼 수 있음
- 그러나 멀티캐스트 정보는 대체로 IP 망내 서로 다른 라우터에서 송신 및 수신이
되고 있음
- 멀티캐스트 라우팅 기능을 이용하여 멀티캐스트 정보 수신 단말이 요구한 정보를
검색하여 수신 단말이 요구한 정보를 제공해야 함
71

---

## Page 72

그래서 IP Multicast 라고 도 함
라 . 멀티캐스트 라우팅 구간
- 멀티캐스트 라우팅 구간은 멀티캐스트 라우팅 프로토콜을 수행하여 정보의 송수신을 수행하게 하는
구간임
구 분 정보송신 구간 멀티캐스트라우팅 구간 IGMP/MLD 구간
송신 단말이
라우팅 프로토콜로 정보의 수신단말이 정보를
개 념
멀티캐스트 정보를 IP
송수신을 수행하는 구간 요구하고 수신하는 구간
망으로 전송 하는 구간
구 간 정보 전송 구간 라우터간 전달 구간 정보 수신 단말 구간
스트림 흐름 순서
III. Multicast 의 응용 분야
분 야 내 용 현황
- 멀티캐스팅을 지원하는 네트워크 백본
Mbone - 인터넷 화상회의를 위하여 만들어진
- 음성 , 화상회의 등에서 많이 사용함
가상망 ( 가상 네트워크 )
- 멀티캐스팅 서비스를 많이 사용하는
원격 교육 - 등록 수강생에게만 컨텐츠 제공
추세로 전환 .
인터넷방송 - 멀티미디어 전송 방송
72

---

## Page 73

[ 추가할 1 교시 정리 자료 ]
I. Anycast
- IPv6 에서 단일 송신자와 그룹 내에서 가장 가까운 곳에 있는 일부 수신자들 사이에 통신 을 의미
- 1:1, 1:N 통신에 사용되며 , 단일 송신자와 다중 수신자 사이의 통신인 멀티캐스트 , 단일 송신자와
네트워크 내의 단일 수신자 사이의 통신인 유니캐스트를 대비하기 위한 캐스팅
- 하나의 송신 노드에서 수신자 그룹의 가장 가까운
노드로 데이터그램을 전송하는 Network
addressing 또는 Routing methodology
- 하나의 수신 주소로 식별되는 다수의 노드로
데이터그램 전송 가능
- Anycast 의 원리는 인터넷 환경에서 BGP/DNS/IPv6 전환 /CDN 에서 많이 사용됨
[ 참고 ] Subnet Mask
- Subnet 는 통상적으로 하나의 부분을 이루는 네트워크 단위 ( 단일 물리적 네트워크 ) 를 말한다 .
- Subnetting 은 IP 주소 체계가 2 단계 ( 네트워크 ID - 호스트 ID) 구분방식인 것을 , 다시 3 단계
( 네트워크 - 서브네트 - 호스트 ) 로 네트워크를 세분화하는 것이다
[ 참고 ] http:// blog.naver.com/sbd38?Redirect=Log&logNo=50194591607
73

---

## Page 74

• Anycast 사례 : Anycast DNS - Anycast 는 주로 DNS 서비스에 많이 활용 됩니다 .
Anycast 기법을 사용하여 DNS 서버를 지역별 분산 구성하여 DNS 질의를 요청한 클라이언트와
가장 근접한 DNS 서버가 처리하도록 하여 응답속도와 안정성을 향상 시킨 DNS 를 지칭함 , CDN 동일
( Anycast IP 는 서로 다른 곳 , 서로 다른 호스트 끼리 동일한 IP 주소를 가질 수 있는 개념 , BGP 로 해결 )
Google public DNS : Google public DNS 의 IP 8.8.8.8 도 Anycast 로 구성되어있으며 전세계 국가에 분
산 되어있고 , Google public DNS 를 쓰면 자신이 속한 지역에서 라우팅 경로가 가장 최적인 지역의 DNS
서비스를 받고 Google 서비스에 대한 서비스도 최적에 있는 지역에 서버에 서비스 받음 . 아시아에선 대
만과 홍콩에 있다고 함 .
74

---

## Page 75

II. Unicast( 유니캐스트 ): 전화와 같이 1:1 대응
III. 브로드캐스트 : 네트워크 내의 모든 주소에 동일 메시지를 보내는 통신 방식
[ 참고 ]
I. 효율적 전송을 위한 그룹 식별자 멀티캐스트 (Multicast) IP 주소의 개요
가 . 멀티캐스트 IP 주소의 정의
- 멀티캐스트 그룹에 참여하는 구성원 (Host Group) 들을 확인하기 위한 멀티캐스트 전송식별 과 그룹
ID 로 이루어진 IP 주소
나 . 멀티캐스트 IP 주소의 구조
- IPv4 에서는 클래스 D(224.0.0.0 ~ 239.255.255.255 범위 ) 의 주소 체계로 32 비트 중에서 최초의 4 비
트 (1110) 로 멀티캐스트라는 것을 식별하고 , IPv6 에서의 최상위 8 비트가 0xFF 로 식별함
75

---

## Page 76

[ 추가할 1 교시 정리 자료 ]
II. 멀티캐스트 IP 주소의 유형적 특징
유형 설명
- 라우터를 통해서 전달이 되지 않고 해당 서브넷에서만 사용이 되는 주소
로컬
멀티캐스트 주소
- 224.0.0.0 ~ 224.255.255.255
- 라우터를 통해서 전체 네트워크에서 사용될 수 있는 주소
라우터블
멀티캐스트 주소
- 225.0.0.0 ~ 239.255.255.255
III. 멀티캐스트의 기본 요소 및 IGMP 의 역할
- 멀티캐스트를 지원하는 라우터가 멀티캐스트 그룹에 가입한 네트워크 내의 호스트를 관리하기 위해
사용하는 프로토콜
- 멀티캐스트 라우터는 네트워크에서 호스트가 사용하는 멀티캐스트 주소 목록을 알고 있어야 하며 ,
이러한 목적은 동적으로 변경
76

---

## Page 77

IV. IGMP 역할
IGMP 동작 내 용
- 호스트가 새로운 멀티캐스트 그룹에 가입하기 원하는 경우 , 멤버쉽 문의 메시지를
라우터로 보냄
그룹 가입
- 한 호스트에서 여러 프로세스가 동일한 멀티캐스트 그룹에 가입하고자 하는 경우에도
멤버쉽 가입 메시지는 한번만 전송
- 멀티캐스트 라우터는 호스트들이 계속 그룹 멤버쉽을 사용하기 원하는지 감시하기
멤버쉽 감시
위해 주기적으로 멤버쉽 문의 메시지를 전송
- 멤버쉽 문의 메시지를 수신한 호스트에서 해당 멀티캐스트 그룹을 계속하고자 하는
멤버쉽 응답
경우에는 라우터에 멤버쉽 보고 메시지 전송
- 더 이상 그룹 사용을 원하지 않는 호스트는 그룹 탈퇴 메시지를 라우터에 전송
- 멤버쉽 탈퇴 메시지는 그룹에서 맨 마지막으로 탈퇴하는 경우에만 전송
멤버쉽 탈퇴
- 멤버쉽 탈퇴 메시지의 목적지 주소는 224 . 0 . 0 . 2 이며 , 네크워크에 존재하는 모든
라우터에게 전달
77

---

## Page 78

V. Overlay Multicast - 덮어씌우다
가 . 정의
- 멀티캐스트는 하나의 메시지 전송으로 그룹에 속한 모든 멤버들에게 메시지 전송이 가능한 효율적인
전송방식이나 라우터에서 멀티캐스트 기능을 지원하지 못하면 하드웨어를 변경을 해야하는 단점이
있지만 오버레이 멀티캐스트는 인터넷상에서 대용량 컨텐츠를 전송하는 기법
- 기존의 인터넷망은 유니캐스트로 전송 , 각 지역에 중계기 서버를 설치하여 , 원격 송신자의 멀티
캐스팅 트래픽을 저장 , Caching 후에 해당 지역 사용자에게 멀티캐스팅 혹은 유니캐스팅으로 중계
하는 기술
나 . 특징
- 네트워크 라우터의 특별한 지원없이 그룹 통신 서비스를 지원하는 효과적인 솔루션
- 근본적으로 Host - based Routing 기술 이라고도 부름 .
- 기존 IP 멀티캐스트는 라우터상에서 복제 및 중계 / Overlay 멀티캐스트는 호스트 단말에서 복제
78

---

## Page 79

VI. Overlay Multicast 개념도 비교
Native Multicast
Unicast – N 명 , N 번 전송
Overlay Multicast
79

---

## Page 80

9. OFDM
I. Network 기본
기출문제
1. OFDM(Orthogonal Frequency Division Multiplexing)
( 조직응용 90 회 1 교시 )
2. 고속 휴대용 인터넷 서비스 체계인 I - Burst, Flash - OFDM , Ripwave , TD - CDMA, HPi ( Wibro ) 의
기술적 특성에 대해 비교 설명하시오 .
( 조직응용 80 회 4 교시 )
80

---

## Page 81

9. OFDM
I. Network 기본
I. 자기 자신의 것이 아닌 다른 주파수를 참조하는 것을 방지하는 기술 내에서 ‘ 직교성 (Orthogonal)’ 제공 ,
OFDM 의 개요 .
가 . OFDM (Orthogonal Frequency Division Multiplexing) 정의
- 대역폭당 전송속도 향상과 멀티패스 간섭 ( 수신 장애 ) 등의 방지를 위한 디지털 변조 방식
- 멀티패스 : 전파가 산이나 건물 등에 반사되는 등 여러 다른 경로를 통해서 수신 안테나에 도달하는
현상 ( 수신 장애 )
나 OFDM 특징
1) 송신 데이터를 분산 전송하여 전송 심볼 1 개의 전송 시간이 김 .
2) 데이터를 전송대역 전체에 분산 전송하므로 , 특정 주파수 대역에 방해 신호 존재 시 , 일부 데이터
비트만 영향
3) 멀티 패스에 강한 특성이 있어 , 비교적 소전력의 다수 송신국에서 이용
81

---

## Page 82

II. OFDM 의 기준 원리
시간 축 직교 – 직교성 ( Orthogonal)
반송파 R
파형은 주파수 축상에서는 다중의 반송파를 중첩하여 ( 분할하여 ) 전송
가 . 고속의 전송률을 갖는 데이터열 ( 실제 전송 정보 ) 을 낮은 전송률을 갖는 많은 수의 데이터 열로 나눔 .
- 원래 데이타열은 직렬성 (Serialization) - > 분할 .
나 . 이들을 다수의 반송파 ( 데이터 신호를 변조하기 위해 사용되는 기준 파형 ) 를 사용하여 동시에 전송
하는 기술 ( 반송파에 같이 실어 나르고 , 나중에 데이터만 추출하는 로직 ) .
- 많은 데이터열을 부반송파 (Sub - carrier) 로 동시에 전송하는 형태
- 1 개 채널의 고속 원천 데이터열을 다중의 채널 ( 전송로 , 통신로 ) 로 동시에 전송한다는 측면에서는
" 다중화 기술 “이며 , 다중의 반송파에 분할하여 실어 전송한다는 측면에서는 일종의 " 변조 기술 ".
- 각 부반송파 ( 반송파를 변조하기 위해 사용되는 반송파 ) 의 파형은 시간 축 상으로는 직교
(Orthogonal) 하나 , 주파 수축상에서는 겹치게 (Overlap) 됨 .
82

---

## Page 83

IV. OFDM
LTE 참조 주소 : http://cafe.naver.com/81th/21191
83

---

## Page 84

III. OFDM 방식의 통신 및 활용 분야
통신 시스템 설명 및 특징
무선 랜 분야 - 802.11a, 802.11g, 802.16 등에서 OFDM 사용으로 속도 향상
디지털 방송 - 유럽식 (DVB), 미국식 (ATSC), 일본식 디지털 방송 분야 모두 OFDM 채용
DAB, DMB - DAB( 디지털 오디오 방송 ), DMB 등의 방송시스템에서 OFDM 방식 채용
ADSL, VDSL - ADSL, 무선 ATM 에 적용하기 위한 연구 진행
4G/ 휴대인터넷
- 4 세대 이동통신 기반 기술인 OFDM 핵심기술 이용
WiBro
OFDMA 추가 !!!
Orthogonal Frequency-Division Multiple Access (OFDMA) is a multi-user version of the
popular orthogonal frequency-division multiplexing (OFDM) digital modulation scheme.
Multiple access is achieved in OFDMA by assigning subsets of subcarriers to individual
users( 사용자별 구분 적용 )
84

---

## Page 85

10. QoS
기출문제
1. 네트워크의 QoS (Quality of Service ) ( 조직응용 81 회 1 교시 )
2. QoS(Quality of Service) 에 대하여 다음 물음에 답하시오 .
1) QoS 를 QoE (Quality of Experience), NP(Network performance) 와 비교하고 , 주요 지표에
대해 설명하시오 .
2) QoS 를 제공하기 위한 기술 및 프로토콜에 대하여 설명하시오 .
(KPC 모의고사 , 2013 년 1 월 )
3. WFQ 에 대해 설명 ( 컴퓨터시스템응용기술사 , 102 회 1 교시 )
4. 인터넷의 다양한 응용서비스들에 대해 서비스의 품질과 성능을 보장하여 사용자 요구를 충족시키기
위해서는 QoS(Quality of Service) 관리가 중요하다 . QoS 를 관리하기 위한 트래픽 관리기술을 설명
하고 , QOS 보장기술인 IntServ 모델 , DiffServ 모델에 대해 상세히 설명하시오 .
( 모의고사 )
5. TCP 프로토콜의 흐름제어와 혼잡제어 알고리즘에 대해 설명하시오 . ( 모의고사 )
6. 패킷 데이터 네트워크를 이용하여 데이터를 전송하는 과정에서 발생할 수 있는 전형적인
에러 유형 3 가지를 제시하고 , 각 에러에 대한 대응방안을 설명하시오 . (107, 정보관리 )
85

---

## Page 86

10. QoS
I. 네트워크 서비스 품질 향상을 위한 기술 , QoS (Quality of Service) 개념
가 . QoS (Quality of Service)
- 다양한 통신 서비스에 대한 서비스 품질과 성능을 일정수준으로 보장하여 사용자 요구를 충족시키는
네트워크 기술 , Network 의 대역폭 , 처리율 , 지연율 , 손실율 등을 관리하는 기술
나 . QoS 필요성
- 서비스의 종류에 따른 서비스 품질을 보장하여 사용자의 권리를 보장 (Service Level Agreement)
- 단순한 IP 기술로는 서비스 수준을 통제하는데 어려움
- 인터넷 서비스다양화 : 인터넷의 상업화 과정에서 다양한 어플리케이션 출현
- 서비스의 고속처리와 높은 대역폭 요구 : 여러 트래픽 유형을 한꺼번에 사용하는 멀티미디어 서비스 ,
실시간 처리를 필요로 하는 인터액티브 서비스등
QoS 트래픽 관리기술
Queue 관리 트래픽 쉐이핑 혼잡제어
- Leaky Bucker - RED
- FIFO Queue
- Priority Queue - Token Bucket - WRED
- CBQ - Hybrid
- WFQ
QoS 트래픽 관리기술 유형
86

---

## Page 87

II. QoS 관리와 보장기술
가 . 트래픽 관리기술
설명
구분 종류
입력 Processor 와 출력 Processor 에서의 처리 후 다음 라우팅까지 연결
역할
- FIFO Queuing: 선입선출
Queue 관리 - Priority Queuing: 우선순위
( 큐잉 ) - CBQ(Class-Based Queuing): 등급별 큐잉
트래픽 관리
- WFQ(Weight Fair Queuing) : 특정 기준에 따라 가중치를 정하여 같은
기술
양의 트래픽을 가진 플로우 간에서도 차별을 두는 방식 ( 가중치 측면 )
( 통신망 장비
( 예 ) Q2 와 Q3 가 3:2 로 분할하여 트래픽 전송
에서 제공하는
서비스 )
트래픽 성형 : 통신망 내부로 유입 / 유출되는 트래픽의 양과 속도를 조절
하는 메커니즘
트래픽
- Leaky Bucket 방식 : 리키 버킷은 과도한 트래픽에 대해 패킷 처리
쉐이핑
알고리즘
(Shaping)
- Token Bucket 방식 : 트래픽을 제어하기 위한 제어용 토큰을 사용함
- Hybrid 방식
87

---

## Page 88

II. QoS 관리와 보장기술
가 . 트래픽 관리기술
설명
구분 종류
다양한 트래픽 수용으로 인하여 통신망에 혼잡 상황이 발생한 경우
이를 회피하거나 제어하기 위한 메커니즘를 말함
[ 사전 패킷 폐기 (Proactive Packet Discard)]
- RED(Random Early Detection); 폭주 발생이전에 통신을 감지하기
위한 방법으로 , ◾ 폭주가 발생하기 이전에 이를 감지해서 , 사전에
폭주의 가능성을 줄이기 위해 TCP 등에서 채용된 방법
트래픽 관리
- WRED (Weighted Random Early Detection): RED 의 단점을 보완한
혼잡 제어
기법으로 , ◾ 서비스 차별성을 유지하면서도 혼잡제어가 가능한 방법
기술
(Congestion
혼잡 발생 시 탈락시킬 플로우 (Flow) 를 , ◾ 특정 기준 / 정책에 준하는
( 통신망 장비
Control)
값에 따라 우선순위 ( 가중치 ) 를 두고 선택하도록 하는 방법
에서 제공하는
[ 참고 ] – 이건 TCP Sender 측에서 .
서비스 )
1) Slow Start: Sender 에서 packet 을 전송하는 비율과 Receiver
에서 수신된 ACK 을 통해 Congestion Window (CWND) 를 지수의
크기로 증가시키는 기법 : 임계값관리 하는 방법 .
2) Congestion Avoidance: 일정 시간동안 ACK 이 수신되지 않거나 일정
수의 Duplicate ACK 이 수신되면 Sender 는 Packet Loss 를 인지하고
Congestion Avoidance 상태가 됨 .
수락 제어 어떤 종류의 트래픽을 통신망으로 전송할 것인가를 결정하는 정책
88

---

## Page 89

나 . QoS 보장 기술
구분 종류 설명
특정 사용자의 패킷 스트림 , 즉 플로우에 특별한
IntServ
QoS 를 제공하기 위하여 라우터에서의 자원
(Integrated Service)
예약이 반드시 필요 , 즉 자원 예약을 위해 RSVP 를
/RSVP 모델
신호 프로토콜로 사용
QoS 보장
DiffServ
기술
IPv4 의 특정 헤더영역을 이용하여 처리정보를 정의
(Differentiated Service)
하고 , ISP 에서 서비스 유형을 결정토록 함
( 통신망
모델
전체에 해당 )
MPLS
패킷의 레이블 정보를 이용하여 3 계층의 Routing
(Multi-protocol Labeling 정보를 이용하지 않고 2 계층의 Switching 정보를
이용하여 신속하게 정보를 전달하고 QoS 를 보장함
Switch)
89

---

## Page 90

III. QoS 보장기술 IntServ 모델과 DiffServ 모델
가 . IntServ (Integrated Service)/RSVP 모델
1) 제공되는 서비스의 종류
- Best Effort 서비스 : 기존 인터넷 IP 서비스 ( 전달된 속도와 관련된 품질을 보장하지 않는 통신 서비스 )
- Guaranteed Service: 특정 플로우에 대해 고정된 최대 지연 보장
- Controlled Load Service: 평시와 혼잡 시를 구분하여 서비스함
2) 기본 원리
- 특정 사용자의 패킷 스트림 , 즉 플로우에 특별한 QoS 를 제공하기 위하여 라우터에서의 자원
예약이 반드시 필요
- 자원 예약을 위해 RSVP 를 신호 프로토콜로 사용
- GS(Guaranteed Service) 와 CLS(Controlled - Load Service) 를 위해서 응용은 데이터 전송 전에
경로 설정과 자원 예약을 수행
- RSVP(Resource reSerVation Protocol) 의 정의
1) 비디오와 다른 고대역폭의 멀티캐스트 메시지 전송을 위해 인터넷 상의 채널들이나 경로들을 예약하
는 프로토콜
2) 호스트가 네트워크의 모든 노드들에게 이 데이터에 적합한 서비스 품질을 지원하도록 요청하는 프로
토콜 지칭
3) 멀티캐스팅 통신을 기반으로 하지만 , 유니캐스트에도 사용 가능
90

---

## Page 91

III. QoS 보장기술 IntServ 모델과 DiffServ 모델
가 . IntServ (Integrated Service)/RSVP 모델
3) IntServ 를 구현을 위한 RSVP 동작 설명
메시지 – 트래픽의 특성정보
각 라우터가 자원할당
메시지 – 자원 예약 ; 각 중간에 있는 라우터들이 RESV 메시지를
수신하여 트래픽에 대한 자원을 할당
① 데이터 패킷을 전송하는 발신지에서 일정 시간 간격으로 Path 메시지를 전송
- path 메시지는 트래픽 전송을 위해 필요한 요구사항 및 트래픽 형태를 각 라우터에 알리는 기능 수행
② path 가 예약 되는 과정 .
③ Path 메시지를 받은 목적지는 발신지를 향해 RESV 메시지를 전송하는 방법으로 응답
RESV 메시지는 처음 PATH 메시지가 거쳐온 경로를 따라 발신지로 전송
④ RESV 메시지는 전달되는 경로 상의 각 라우터에서 자원을 예약
⑤ RESV 메시지가 경로 상의 모든 라우터를 거쳐 발신지에 도착하면 단대 단 (end - to - end) 예약이 성립
- 발신지에서는 경로를 따라 서비스가 제공됨
91

---

## Page 92

4) RSVP 메시지
메시지 내용
- 송신기로부터 출발하여 멀티캐스트 경로의 모든 수신기에 도달
- Path 메시지는 수신기를 위해 필요한 정보를 저장
Path 메시지
- Path 메시지 하나가 하나의 멀티캐스트 환경에서 송신 되 며 , 경로가 갈라지면
새로운 메시지 생성됨
- 수신기는 Path 메시지를 받은 다음 Resv 메시지 하나를 송신
-Resv 메시지는 송신기 방향 (upstream) 으로 이동하며 RSVP 를 지원하는 라우터들에서
Resv 메시지
자원을 예약
-Resv: Reservation
92

---

## Page 93

나 . DiffServ (Differentiated Service) 모델 : 상대적 서비스 품질 제공
1) 기본철학
- 미리 정의된 서비스품질 수준에 따라 , 패킷을 등급별로 구분함 , IP 헤더에 DSCP(Differentiated
Service Code Point; 패킷의 서비스 종류 , 등급을 표현 ) 값을 사용하여 , 상대적 서비스 품질 제공
IPv4 에서 DSCP 의 위치 , 6bits 의
차등화 서비스 필드 사용
- DiffServ 는 DS 필드 ( 사용자 식별정보 ) 와 PHB 만을 정의 , 서비스 제공유형은 ISP 가 결정
각 서비스 규칙에 맞추어 요구사항에 일치하는 방법으로 패킷 처리
- PHB (Per-Hop Behavior) 개념 도입 : 패킷 전달 서비스
2) IntServ/RSVP 모델과의 차이점
- IntServ/RSVP 모델에 비하여 확장성 증가
- IntServ/RSVP 모델에 비하여 구현 및 배치가 용이
- 약간의 소프트웨어 업그레이드만으로 기존 리우터를 활용 가능
3) 제공하는 서비스 유형
- Premium 서비스 : 작은 지연과 지연 편차를 요구
- Assured 서비스 : Best Effort 서비스보다 높은 신뢰성을 요구
- Olympic 서비스 : Gold, Silver, Bronze 세 종류의 서비스를 제공
93
[ 참고 주소 ] http :// ktword.co.kr/abbr_view.php?nav=2&m_temp1=2578&id=1066

---

## Page 94

IV. QoS 의 구현기술
- 다양한 통신 서비스에 대한 서비스 품질과 성능을 일정수준으로 보장하여 사용자 요구를 충족
구분 설명
CDN 콘텐츠 전송을 효율적인 위치에서 처리함으로써 전송속도 및 부하관리
트래픽
Network 의 혼잡상태 발생을 감시하고 혼잡상태를 해결하는 기술
엔지니어링
멀티 라우팅 Multi-Path 를 허용한 속도 및 품질보장
압축전송 전송량 관리를 위한 압축 기능 장비
94

---

## Page 95

V. QoS 의 주요 지표 ( 대지터패 )
주요지표 내용 제어기법
Queuing,
대역폭 - 특정 어플리케이션에 할당된 네트워크 자원의 양 Shaping( 버 퍼 저 장 후
(Bandwidth) - 일정시간에 처리한 데이터의 총량 을 가리키는 지표 처리 ) ,
Policing( 패킷 드롭 )
지연 - 서비스 또는 특정 처리를 위해 기다림으로 발생하는 지연
Queuing
(Delay) - 발송지에서 목적지까지 가는 경로에서 발생 되는 지연
- 네트워크를 통해서 전달되는 과정에서 왜곡되는 정도
지터
- 멀티미디어 트래픽에 있어서 지터는 치명적인 영향이 Queuing
(Jitter)
존재함
- 데이터를 전송하는 과정에서 패킷의 손실 정도
패킷 손실 Queuing,
- 네트워크 혼잡에 따른 버퍼 오버플로우 , 흐름 제어
(Packet Loss) RED, WRED
알고리즘에 따른 패킷을 Drop
95

---

## Page 96

Sliding Window 알고리즘
I. Network 기본
기출문제
1. 네트워크 전송에서 슬라이딩 윈도우 (Sliding Window) 알고리즘에 대하여 설명하시오 .
( 컴퓨터시스템응용기술사 96 회 1 교시 )
96

---

## Page 97

11. Sliding Window 알고리즘
I. Network 기본
I. 송신측에서 전송 사이즈 조절 기법 , 슬라이딩 윈도우 (Sliding Window) 알고리즘의 개요
가 . 슬라이딩 윈도우 알고리즘의 정의
- 수신 측에서 설정한 윈도우 크기만큼 송신 측에서 확인 응답 (ACK) 없이 전송할 수 있게 하여
흐름을 동적으로 조절하는 제어 알고리즘 , 2~4 계층 (TCP) 에서 사용하는 알고리즘
- 윈도우 ( 메모리 버퍼의 일정 영역 )' 에 포함되는 모든 패킷을 전송하고 , 그 패킷들의 전달이 확인
되는대로 이 윈도를 옆으로 옮김 (slide) 으로서 그 다음 패킷들을 전송하는 방식
나 . 슬라이딩 윈도우의 구성
- 윈도우 크기 : 전송했으나 아직 확인 응답 받지 못한 데이터 + 지연 없이 전송할 수 있는 데이터
슬라이딩 윈도는 아직 확인을 받지 않고도 여러 패킷을 보내는 것을 가능케 하기 때문에 , 매번 전송한 패
킷에 대해 확인을 받아야만 그 다음 패킷을 전송하는 방법 (stop - and - wait) 을 사용하는 것 효율적 사용
97

---

## Page 98

II. 사례를 통한 슬라이딩 윈도우 알고리즘의 동작 설명
• 수신 측으로부터 NAK( 실패 ) 를 수신하거나 , 또는 타임아웃 발생 시 송신 측에서는
패킷 / 프레임을 재전송함 (4 계층 )
98

---

## Page 99

III. 슬라이딩 윈도우 알고리즘의 동작 구성 항목
동작 설명
• 하나의 호스트가 데이터 전송을 위해서 전송 측 혹은 수신 측 양쪽에서 사용
윈도우 개념 하는 버퍼
• 윈도우 내부의 데이터는 ACK 를 받지 않아도 즉시 전송이 가능한 데이터
• 수신 측으로부터 ACK 가 동작하여 , 윈도우의 오른쪽 경계가 오른쪽으로 이동
윈도우의
• 더 많은 데이터의 전송 가능 : 윈도우의 크기가 커져서 그만큼 ACK 와 무관하게
열림 동작
데이터를 전송할 수 있기 때문
• 데이터 ( 바이트 ) 가 전송되어 , 윈도우의 왼쪽 경계가 오른쪽으로 이동함
윈도우의
• 이는 일부의 데이터 ( 바이트 ) 가 ACK 를 받았음을 의미 , 전송 측은 이 데이터에
닫힘 동작
대해 더 이상 관여할 필요가 없다는 것을 의미
• 수신 측 윈도우와 혼잡 윈도우의 크기 중 작은 값으로 결정함
• 수신 측 윈도우 : ACK 를 포함하고 있는 세그먼트를 사용하여 상대방에게 알림
• 혼잡 윈도우 : 혼잡 상태가 발생하지 않도록 네트워크에서 결정하는 값
윈도우 크기 • 수신 윈도우 크기가 증가하면 , 송신 측 윈도우도 크기가 증가
• 수신 버퍼가 가득 찰 경우 , 수신 윈도우의 크기는 0 이 됨
• 수신 윈도우의 크기가 0 이면 송신 윈도우를 닫음
• 송신 프로세스는 수신 윈도우의 크기가 0 이 아닐 때까지 전송 불가
99

---

## Page 100

TCP 혼잡제어
출제예상문제
1. 네트워크 전송계층 (Transport Layer) 역할 대하여 설명하시오 .
(111 회 컴시응 1 교시 기출문제 )
문제 네트워크 전송계층 (Transport Layer) 역할
도메인 네트워크
정의 -. 종단간의 사용자들이 신뢰성 있는 데이터를 주고 받을 수 있도록 패킷들의 전송이
유효한지 확인하고 효율적인 전송을 수행하는 역할을 담당하는 계층
키워드 OSI 4 계층 , 포트번호 , 캡슐화 , 다중화 , 흐름제어 , 오류제어 , 혼잡제어 , 신뢰성 제공 ,
TCP , UDP
출제의도분석 -. OSI 7 Layer 에 대한 깊이 있는 학습 여부 확인
답안작성 전략 -. Fact 기반 작성
-. 주요 역할을 도식화 하여 깊이 있게 작성
세그먼트 단위 신뢰성 있는 데이터를 송수신할 수 있
,
도록
흐름제어 : 슬라이딩 윈도우 이용 프레임 (X)
혼잡제어 혼잡제어 그림 이용 이런용어
Transport(4) : TCP ( ) CRC(X)
오류제어 각각의 세크먼트에 가 도착안하면 재 사용하지 말 것
: ACK ,
전송
의 에러제어와 같이 쓰면 안됨
(Data link )
100

---

## Page 101

I. TCP 혼잡제어 (Congestion Control)
Window Size
TCP 혼잡제어 (Congestion Control) 정의
- 특정 TCP 가 보낸 세크먼트들이 손실되는 결과가 발생하는 현상으로
재전송의 증가 등으로 혼잡을 악화시킬 것임 . 또한 이것은 통신 충돌초래 .
이를 제어하는 작업
Slow Start
2 의 지수배로 윈도우 사이즈 증가 Time
(2->4 배 )
이것을 느린시작이라고 하며 , 지수를
증가한다 .
- 논리적으로 용어 오류가 있음
101

---

## Page 102

I. TCP 혼잡제어 (Congestion Control)
Window Size
Ssthresh 는 slow start threshold( 임계치 ) 로 , 혼잡을 감지하게 되는 상황 도달
ssthresh1
Slow Start
2 의 지수배로 윈도우 사이즈 증가 Time
(2->4 배 )
이것을 느린시작이라고 하며 , 지수를
증가한다 .
- 논리적으로 용어 오류가 있음
102

---

## Page 103

I. TCP 혼잡제어 (Congestion Control)
Window Size
혼잡회피
(Congestion Avoidance)
ssthresh1
지수 증가에서
Slow Start
Linear 하게 증가함 .
선형증가하고 표현함 .
이 상태를 혼잡회피 라고함
Time
103

---

## Page 104

I. TCP 혼잡제어 (Congestion Control)
TCP 수신측에서
Window Size
중복 ACK 를 수신하며 ,
( 윈도우 슬라이딩에서 재송신하므로
중복 ACK 를 보냄 )
현재 세크먼트가 지연되었다 는
혼잡회피
신호이다 .
(Congestion Avoidance)
윈도우 사이즈를
현재의 ½ 까지
ssthresh1
감소함 .
Y 축를 보면
ssthresh2
Ssthresh2 라고 함 .
Slow Start
Time
104

---

## Page 105

I. TCP 혼잡제어 (Congestion Control)
Window Size
윈도우 사이즈를
현재의 ½ 까지
감소함 .
혼잡회피
Y 축를 보면
(Congestion Avoidance)
Ssthresh2 라고 함 .
Fast Retransmit
ssthresh1
그리고
ssthresh2
그 상태를
Fast Retransmit 이라고 함 .
Slow Start
즉 사이즈를 절반에서 다시 시작
(0 으로 줄이지 않음에 주의 !)
Time
105

---

## Page 106

I. TCP 혼잡제어 (Congestion Control)
Window Size
혼잡회피
(Congestion Avoidance)
Fast Recovery
Fast Retransmit
ssthresh1 사이즈
절반에서
ssthresh2
다시
선형적으로 증가시킴
Slow Start
이 상태를
Fast Recovery 라고 함 .
즉 , Conjestion Avoidance 상태에서
전송하는 기법
Time
위 4 단계를 통해 처리하는 과정을 TCP 혼잡제어 (Congestion Control) 라고 함 .
106

---

## Page 107

I. TCP 혼잡제어 (Congestion Control)
Reno TCP 라고 함
Window Size Taho(e) TCP 라고 함
- 이후 버전
- 초기버전
혼잡회피
(Congestion Avoidance)
Fast Recovery
Fast Retransmit
ssthresh1 사이즈
절반에서
ssthresh2
다시
선형적으로 증가시킴
Slow Start
이 상태를
Fast Recovery 라고 함 .
즉 , Conjestion Avoidance 상태에서
전송하는 기법
Time
위 4 단계를 통해 처리하는 과정을 TCP 혼잡제어 (Congestion Control) 라고 함 .
107

---

## Page 108

망 중립성 (Network Neutrality)
I. Network 기본
기출문제
1. 웹 접근성에 관련된 다음 질문에 답하시오 .
(1) 웹 접근성 , 웹 표준 , 웹 보안 및 망 중립성 을 비교 설명하시오 .
(2) 인터넷 웹 콘텐츠 접근성 지침 1.0(WCAG 1.0) 에서 제시하고 있는 웹 접근성의
지침 및 검사항목을 나열하여 설명하시오 .
( 컴퓨터시스템응용기술사 96 회 1 교시 )
2. 망 중립성 (Net Neutrality) 에 대한 논쟁이 대두되고 있다 . 이를 다각적인 입장 에서 설명하시오 .
( 정보관리 98 회 1 교시 )
3. P2P(Peer-to-Peer) 네트워크의 개념과 장단점 , 이 네트워크에서 제기되는 망중립성 (Network
Neutrality ) 이슈 에 대하여 설명하시오 .
( 컴퓨터시스템응용기술사 98 회 , 2 교시 )
4. 망중립성 (Network Neutrality ) ( 정보관리 113 회 1 교시 )
108

---

## Page 109

12. 망 중립성 (Network Neutrality)
I. 네트워크 사용권을 보장하는 , 망 중립성의 개요
가 . 망 중립성 (Network Neutrality) 의 정의
- 네트워크 상의 모든 트래픽은 차별 없이 평등하게 처리되어야 함
- 인터넷으로 전송되는 데이터 트래픽은 그 내용 , 유형 , 제공사업자 , 부착된 단말기기 등에
관계없이 동등하게 취급되어야 한다는 원칙 (2003 년 Tim Wu 교수 )
- 망 사업자가 망에 대한 비차별 , 상호접속 , 접근성을 보장하는 것
나 . 망중립성 (Network Neutrality) 원칙의 변천
구분 주요 원칙 내용 설명
ISP 의 트래픽을 포함한 모든 트래픽은 동일하게 처리해야 하며 , 트래픽
비차별
에 우선순위를 두면 안 됨
초기의
상호접속 ISP 간에 상호접속 의무 및 권리를 가짐
망중립성
접근성 최종 이용자는 다른 어떤 최종 이용자와도 연결될 수 있어야 함
투명성 ISP 는 망 및 트래픽 관리와 관련된 정보를 공개함
현재의
차단금지 합법적 콘텐츠 , 어플리케이션 , 단말기기 등에 대한 NW 접근보장
망중립성
ISP 의 트래픽 관리권한이 인정되는 예외적인 경우를 제외하고는 불합
비차별
리한 차별 금지
109

---

## Page 110

[ 참고 ] 망 중립성 이슈화
최근 망 중립성 논쟁의 배경
KT 에서 삼성 Smart TV 가 네트워크 폭증을 이유로 망을 차단하는 사례발생
카카오 톡의 mVoIP 서비스 개시로 인하여 이동 통신망 업계의 반발
110

---

## Page 111

II. 망 중립성의 인터넷 서비스 접점 간의 관계
1) ISP( 망사업자 ) 들이 네트워크를 지나가는 모든 트래픽을 평등하게 처리해야 하며 , 요금을 달리
하는 차별화된 전송을 하지 말아야 된다는 것으로 인식
2) 이슈 사항
- CP 와 ISP 간의 관계 설정이 모호한 상태로 남아 있는 것이 망 중립성의 화두
유료컨텐츠를 제공하는 애플이 과금을 차지하고 , 이동 통신사업자는 단순 망제공자에 불과
- 인증 , 과금 , 정산의 처리
- 비트 공정성과 컨텐츠 공정성
111

---

## Page 112

III. 망 중립성의 3 대 원칙
원칙 내용
비차별성 ISP 들이 네트워크를 지나가는 모든 트래픽을 평등하게 처리해야 함 .
(no discrimination) 트래픽에 대한 우선 순위부여 금지 < 비트 동등성 >
상호접속 네트워크 사업자가 다른 어떤 네트워크사업자와도 상호접속을 허용하고
(interconnection) 요구하는 의무와 권리를 가짐
사람을 비롯 , 모뎀 , 라우터 , 교환기 등 모든 최종 이용자가 다른 어떤 최종
접근성 (Accessibility)
이용자와도 연결될 수 있어야 함
112

---

## Page 113

IV. FCC 망 규제안의 핵심 및 논란사항 ( 미국 연방통신위원회 )
가 . FCC(Federal Communications Commission) 망 규제안의 핵심 내용
핵심 내용
콘텐츠 접근 권리 합법적 컨텐츠 접근에 대한 권리 보장
애플리케이션 및 법이 허용하는 범위 내에서 자신이 선택한 애플리케이션 및 서비스를 이용할
서비스 이용 권리 권리 보장
망에 위해를 입히지 않는 한 자신이 선택한 합법적 가치를 인터넷에 연결하여
합법적 가치 사용 권리
사용할 권리
경쟁에 따른 혜택 수혜 망사업자들 , 애플리케이션 및 서비스 사업자들 , 그리고 컨텐츠 사업자들 간의
권리 경쟁에 따른 혜택을 받을 수 있는 권리
투명성 네트워크 관리와 성능 , 요금에 대한 상세 정보를 소비자 , 기업에 투명하게 제공
유선 광대역 인터넷 사업자의 합법적 네트워크 트래픽 차별 금지 . ( 컨텐츠
불합리한 차별 금지
제공 사업자로부터 비용 받고 우선순위 제공 금지 )
113

---

## Page 114

IV. FCC 망 규제안의 핵심 및 논란사항
나 . FCC 망 규제안의 논란점
무선 사업자 배제 불합리한 차별 금지 조항에서 무선 사업자를 배제
합당한 트래픽 관리라는 예외사항 적용 . ‘ 합당한 ’ 과 ‘ 동일한 ’ 의 해석 수준에 따른
규제안의 모호성
효용성 여부문제
강제 권한 여부 FCC 의 망 중립성 강제 권한 여부 ( 정치적 문제로 연관 )
[ 참고 ]
114

---

## Page 115

Chapter II 유선 Network 서비스
Chapter II. 유선 Network 서비스
LAN 하
NMS 중
MPLS 중
CDN 상
ADN 하
라우팅 프로토콜 ( 컴 ) 상
PoE 중
115

---

## Page 116

1. LAN
II. 유선 Network 서비스
기출문제
1. LAN (Local Area Network) 구축에 필요한 네트워크장비를 나열하고 장비별 기능과 역할을
설명하시오 .
( 정보관리 69 회 3 교시 )
2. VLAN 의 개념에 대하여 설명하고 , 서버팜을 구축하는 기술인 포트 VLAN 과 태그 VLAN 기술에 대하여
비교 설명하시오 .
( 컴퓨터시스템응용기술사 , 104 회 4 교시 )
3. 통신망 (Communicaton Network ) 장치들의 물리적 구성 형태 및 각각의 특징에
대하여 설명하시오 . ( 컴퓨터시스템응용기술사 , 110 회 4 교시 )
116

---

## Page 117

I. LAN 의 정의와 발전과정
가 . LAN (Local Area Network) 의 정의
- 빌딩 , 학교 등을 연결한 비교적 짧은 거리의 근거리 네트워크
나 . LAN 의 발전과정
Terminal-Host Shared Media Switched
Networks Access LAN LAN
Switched Ethernet
Ethernet
RS422
Token Ring
ATM
IBM3270
FDDI
1960 1980 1990 2000
117

---

## Page 118

[ 결정사항 ]
- 랜 구축 설계 (PC 및 Host Layout 공사 ) ( 뒷장 참조 )
- 인터넷 라인 사용여부 ( 전용선이용 / ADSL 사용 ) - > 전용선 제공업체서 IP 할당 .
- 네트워크 구축
1. 전용회선
2. 라우터
3. 허브
4. UTP 케이블 ( 랜 선 )
5. 랜 테스터기
6. 랜 툴
7. RJ 45 플래그 단자
118

---

## Page 119

[ 결정사항 ]
- 랜 구축 설계 (PC 및 Host Layout 설계 )
119

---

## Page 120

[ 참고 ] VLAN: 네트워크 장비나 서버의 설정을 통해 “ 논리적 ” 으로 네트워크를 분할해서 구성하는 기술
[ 참고 ]
1) 포트 VLAN
- 각 층의 스위치 포
트를 모두 같은 곳에
설정 ( 오른쪽 끝 ) 하여
묶는 케이블방식
2) 태그 VLAN 추가
정리
- 프레임을 통과시키
기 위해 , 각 프레임이
어디서 보냈는지를 식
별하기 위한 태그정보
가 삽입 .
- 가상 랜은 ' 스위칭 ' 이라는 LAN 의 기술을 기반으로 물리적 시간만 고려되었던 LAN 분야에 가상
(virtual) 이라는 개념을 도입한 것이다 . 가상 랜은 네트워크 구성에 대한 지리적 제한을 최소화하면서
사용자가 원하는 최대한의 논리적인 네트워크를 구성할 수 있도록 수단을 제공한다 . 즉 , 공간이라는
지리적 위치가 아니라 , 접속 포트나 MAC( 제조회사 통신장비 고유 주소 ) 주소 , 프로토콜 단위 등으로
가상 랜을 구성할 수 있다 .
- 사용자가 이동하거나 바뀔 경우 동적인 조직 내에서 작업그룹을 구성할 수 있고 , 브로드캐스트 패킷
에 대한 효율적인 제어 등이 용이하다 . 그 동안 제품표준화 문제로 사용 및 확산에 지장이 있었으나
120
가상 랜에 관한 표준이 IEEE 802.10 으로 규격화 됨으로써 그 사용이 더욱 확산될 전망이다 .

---

## Page 121

2. NMS
II. 유선 Network 서비스
기출문제
1. 정보화 발전에 다른 서비스의 다양성 , 데이타량 폭증 , 네트워크 연결 복잡성 증대 등으로 네트워크
의존도가 증가함에 따라 , 통신망 관리시스템 (NMS, Network Management System) 의
중요성이 강조되고 있다 . NMS 장치가 갖추어야 할 특징을 5 가지 이상 서술하고 , 주요 관리 기능을
5 가지만 상술하시오 .
( 조직응용 75 회 4 교시 )
2. NMS
( 조직응용 71 회 1 교시 )
121

---

## Page 122

2. NMS
II. 유선 Network 서비스
I. Network 관리의 개요
가 . 네트워크의 규모가 커지면서 복잡성 (Complexity), 상호연동성 (Inter - operability), 속도 (Speed) 및
유연성 (Flexibility) 요구
나 . 네트워크를 효율적으로 운용하고 정상적으로 동작하는지를 확인할 수 있어야 함
다 . 광범위한 네트워크를 관리 (S/W) 관리 툴과 네트워크 H/W 와 통신을 할 수 있는 프로토콜과 장비에
상주하여 작동하는 프로그램 (agent) 이 등장
라 . 국제 표준화 기구 ISO 는 네트워크 관리 시스템이 수행하여야 하는 다음과 같은 다섯 가지의 네트워크
관리 기능
(FACPS : Fault, Configuration, Account, Performance and Security Management) 을 정의
- 장애 관리 (Fault Management) - 구성 관리 (Configuration Management)
- 보안 관리 (Security Management) - 성능 관리 (Performance Management)
- 계정 관리 (Accounting Management)
2. 네트워크 관리의 목적
- 안정적이고 효율적인 통신망을 이용한 고품질의 통신 서비스를 고객 ( 이용자 ) 에게 제공
- 고객이 만족할 만한 서비스 ( QoS : Quality of Service) 의 제공
- 네트워크의 변경에 이용자가 쉽게 적응 (Adaptation) 신뢰성 (Reliability)
- 통신망의 운용 유지 및 유지보수 (Maintenance) 를 위한 지출의 최소화
- 저렴한 통신 서비스 제공을 위한 원가 절감
122

---

## Page 123

I. 효율적인 네트워크 서비스를 제공하기 위한 NMS 의 개요 .
가 . NMS (Network Management System) 의 개요
- Network, 망에 연결되어진 모든 구성요소 (Network Element) 들의 중앙 감시 체제를 구축하여
수집 (Monitoring) 및 분석 (Planning) 이 가능케 하며 , 수집된 자료들을 토대로 즉각적인 현재의 망 분석 ,
중단 없는 서비스제공과 향후의 망 계획수립에 필요한 정보를 제공하는 관리 시스템
- 네트워크 장비의 지속적인 관찰을 통하여 효율적인 네트워크 서비스를 제공하기 위하여 장비를
제어 , 예측 , 분석을 수행하기 위한 네트워크 관리시스템
나 . NMS 의 특징 및 중요성 ( 사업적인측면 기술 / 기술적인 측면 기술 )
- 분산네트워크의 환경관리 용이 및 네트워크의 현재상황 , 건강 체크 파악 용이
- 네트워크 장애 복구 시간 단축
- 네트워크 자원 활용의 극대화
- 네트워크 운영 , 관리시간 및 비용절감
- 네트워크 변경 , 추가 , 삭제시 자동탐지
- 사용경향 , 성능정보수집 및 분석
- 장애 경보체제구축
- 분산시스템 관리 체계의 기반구조 구축
123

---

## Page 124

II. NMS 의 구성도 및 구성요소
가 . NMS 의 구성요소
- SNMP (Simple Network Management Protocol): OSI App. Layer / Agent 통한 네트워크 오류 및 상태관리
나 . 구성요소
구성요소 설명 특징
Repository - 네트워크 자원 상태 저장 , NMS 서버에 위치 수집 정보 저장 저장소
Agent - 관리 대상 자원 상태 자율적 수집 자율성 , 지능성
- 네트워크 자원에 위치 (Management Information Base)
MIB 업체별 MIB 표준 필요
- 각 자원의 상태를 저장하는 저장 공간
SNMP - 관리 대상 자원과 NMS 의 통신 프로토콜 벤더에 독립적
네트워크매니저 - Agent 로 부터 상태 정보를 수집 및 분석 , 장애 복구 Repository 등록
124

---

## Page 125

III. NMS 의 주요 기능 (FACPS)
구 분 설명 및 특징
- Fault management
장애 관리
- 장비 또는 회선상에 발생한 문제를 검색 또는 추출하고 해결방안을 제공하는 기능
- Accounting management 를 제공
- 사용자 등록 , 삭제 , 중지 , 복원 기능
계정 관리
- 이력관리라고도 하며 서비스 사용에 대한 각 노드별 이전의 사용 현황을 제공
- Configuration management
구성 관리
- 네트워크상의 장비와 물리적인 연결구조를 구성하고 보여주는 기능
- Performance management
성능 관리 - 가용성 , 응답시간 , 사용량 , 에러량 , 처리속도 등 성능 분석에 필요한 통계
데이타를 제공하는 기능
- Security management
보안 관리 - 암호 , 인증 등을 이용한 정보흐름을 제어 , 보호하는 기능
- 접속경로 제한 등
125

---

## Page 126

[ 참고 SNMP] (2011.10 월 모의고사 4 교시 참조 )
126

---

## Page 127

IV. 기술동향
가 . ESM 통합 측면 기술
나 . ITSM 측면 기술
다 . ASP 의 MSP (Management Service Provider) 측면 기술
라 . 인터넷 관련 비즈니스 모델 증가 - > Web 기반 MNS 개발 가속 ‘끝’
127

---

## Page 128

3. MPLS
II. 유선 Network 서비스
기출문제
1. MPLS(Multi Protocol Label Switching)
( 조직응용 81 회 1 교시 )
[ 참고 ] 멀티프로토콜 라벨스위칭 ((MPLS) 장비
128

---

## Page 129

3. MPLS
II. 유선 Network 서비스
I. 고속 패킷 전달을 위한 MPLS 의 개요
가 . MPLS (Multi - Protocol Label Switching) 의 정의
- IP Header 를 이용한 Routing 대신 4Bytes 의 단순한 Label 을 참조하여 고속의 2 계층
Forwarding 처리를 실현하기 위한 프로토콜
나 . MPLS 의 필요성
1) 고속패킷전달 : 인터넷 트래픽의 급증으로 백본망의 패킷 지연을 막고 , 고속 패킷 전달 요구 확대 .
2) QoS 보장 : 다양한 네트워크에 컨텐츠들의 품질 보장 ( 차별적 보장 포함 )
3) 트래픽 엔지니어링 : 한정된 인프라에서 트래픽의 혼잡을 사전에 방지
다 . MPLS 의 주요 특징
구 분 설명 및 특징
- 운영자의 명시적 경로 설정을 IP 계층에 적용하여 망구조 및
명시적 경로 설정
용량에 맞는 트래픽 분배로 망의 효율성 극대화 시킴
- 노드 장애시 즉시 복구 (Backup LSP 을 미리 설정하여 설정하여 Failure 에 대한
신속한 복구
복구 가능 ) 함으로써 , 망의 신뢰도 향상
QoS 지원 - 트래픽 우선 순위에 따른 LSR 터널을 별도 관리 함으로써 중요 트래픽 품질보장
129

---

## Page 130

II. MPLS 의 망구조 및 전송 순서
가 . MPLS 의 망구조
LER
패킷 1
LSR
패킷 1
LER
패킷 전송
Label 떼고 , 목적지로 송신
Label 을 붙임 LSR LSR LER
패킷 2
MPLS Network
패킷 2
나 . 전송 순서
1) LER 로 들어온 패킷은 LER 에 의해 분류 / 해석되어 Label 이 붙여짐
2) Label 이 붙여진 패킷은 MPLS 도메인 내이 있는 다른 LSR 로 이동
3) LSR 로 들어온 패킷의 Label 을 보고 , 다음 LSR 을 결정 한 후 , 패킷 전송
4) 최종 LER 에 도착한 패킷은 붙여진 Label 을 떼고 , 최종 목적지로 송신함 .
130

---

## Page 131

III. MPLS 의 요소 기술
요소기술 설명 및 특징
- Label Edge Router
LER
- LER 은 Packet 목적지를 분류 하여 Label 을 붙이는 라우터
- Label Switch Router
LSR
- LSR 은 Label 을 붙은 패킷이 들어오면 label 스위칭을 통해 , 패킷 전달
- Forwarding Equivalence Class
- 동일한 방식으로 포워딩되는 IP 패킷들의 그룹으로 서로 다른 목적지 네트워크
FEC
(Destination address prefix) 는 서로 다르나 , MPLS 망 내에서 공통의 경로로
매핑되는 패킷들의 집합
- Label Switched Paths
LSP
- FEC 에 속한 패킷이 전달되는 경로
Label - 동일한 FEC 스트림을 식별 ( 지정 ) 해주는 식별자
- Label Information Base
LIB - LSR 에서 LDP 의 의해 생성 및 전달되어온 레이블 바인딩 정보를 저장하고 있는
데이터베이스
- Label Distribution Protocol
LDP
- LSR 간 Label Binding 정보 분배
131

---

## Page 132

[ 참고 ] MPLS 위한 Label 을 붙인 패킷 예
- Label 이라는 필드를 추가하여 패킷을 교환하는 방식
MPLS 망 내에서는 IP Lookup 을 하지 않음
132

---

## Page 133

IV. MPLS 와 기존 라우팅과의 비교
구분 Label 스위칭 기존 라우팅 방식
- 데이터 량과 무관하게 고속 스위칭이 - 데이터 량이 대량으로 전송되는 경우
정보량
가능 정체 현상을 일으킴
- 다양한 부가 서비스 제공
- 주소만을 파악하므로 , QoS, VPN 등의
부가서비스 - VoIP over MPLS
서비스 제공 불가
- MPLS VPN
패킷 헤더 - 종단 LSR 에서 레이블을 할당할 때
- 매 홉마다 필요
영역 분석 한번 수행
Next 홉 - QoS 등의 차별화 전략에 따라
- 주소만을 참조 가능
경로 결정 변경이 가능한 유연성 부여가 가능함 .
V. MPLS 동향
- MPLS 기반 NGN 구조
- GMA (Global Mobile Agent),
LMA (Local Mobile Agent) 연동 구조 발전
예상 ‘끝’
133

---

## Page 134

4. CDN
II. 유선 Network 서비스
기출문제
1. CDN(Contents Delivery Network) 을 설명하시오 .
( 조직응용 87 회 3 교시 )
2. CDN(Content Delivery Network) 에 대하여 다음 사항을 설명하시오 .
가 . CDN 개념
나 . CP(Content Provider), ISP(Internet Service Provider), User 등 세가지 측면에서 CDN 효과
다 . CDN 핵심 기술
( 조직응용 72 회 3 교시 )
3. A 사는 최근 웹환경 하에서 많은 가입자의 접속으로 서비스시스템의 성능이 급격히 저하되고
있어 성능향상을 위한 방안을 고려하고 있다 . 이러한 방안으로 시스템을 어플리케이션 서버외
DB 서버로 분리하고 로드를 분산하는 방식으로 구성하려 한다 .
이러한 방안에 대하여 실행계획을 작성하시오
( 정보관리 69 회 3 교시 )
134

---

## Page 135

4. CDN
II. 유선 Network 서비스
I. Middle Mile 최소화를 통한 컨텐츠 유통기술 혁명 , CDN 의 개요
가 . 컨텐츠의 효율적 배분 CDN (Contents Delivery Network) 의 정의
- ISP(Internet Service Provider) 의 네트워크 하단에 여러 대의 캐시서버 (Cache Server, 임시저장장치 )
를 설치 , CP(Content Provider) 가 제공하는 콘텐츠를 이 캐시서버에 미리 옮겨놓고 수요가 있을 때 그
콘텐츠를 이용자에게 전달해 주는 체계
나 . CDN 장점 ( 미들마일 : 회선 교차 구간 )
135

---

## Page 136

II. CDN 의 개념도와 구성요소
가 . CDN 의 개념도
① End - User 가 웹 브라우저를 이용하여 CP 의 웹 서버에 접속
② Embedded URL(CDN 서버주소 지정 ) 이 포함된 HTML 문서 전달
③ End - User 는 HTML 문서에 포함된 CDN 서버 주소로 오브젝트 요청
④ CDN 서버에 복제되어 있던 오브젝트를 End - User 에게 전달
136

---

## Page 137

나 . CDN (Contents Delivery Network) 의 기술요소
특징 설명
- 자주 찾는 페이지를 컴퓨터에 복사해 저장한 후 사용자가 찾으면 저장된 정보
개념
를 전송하는 기술
Cashing 기술
- Pull 모델 : ISP 들의 POP 지점에 Cache 를 배치
유형 - Push 모델 : Cashing Product 를 웹 서버 앞에 설치
- Pull & Push 의 통합 모델
CDN 서비스를 제공하기 위해 인터넷 망에 분산 배치되어 있는 많은 캐시 서버
중에 이용자에게 최상의 서비스를 제공할 수 있는 캐시서버를 선정하여 연결
하는 기술
Global Server
Load 개념
Balancing
137

---

## Page 138

- 서버 별로 트래픽 분산을 통해 웹 고객에 대한 서비스 성능 향상시키는 기
개념 술 ,
Load
- 고장 난 서버들을 제외 후 나머지 서버들로 트래픽 할당
Balancing
기술
- Product-based 솔루션 : 기업이 소유
유형
- Service-based 솔루션 : Outsourcing 형태
개념 - 대용량의 멀티미디어 데이터를 모두 down 받지 않고 , 즉시 재생함
- Multicasting Streaming
유형
- On-Demand Streaming
Streaming
- 전송 받은 패킷을 실행하면서 나머지 비디오파일을 전송 받는 기술
기술
- 전송지연이 낮음
특징
- 실제 Streaming 기술이 떨어짐
- 재상품질이 네트워크 속도에 양향을 받음
- CDN 서버들이 각 지역에 여러 대가 분산되어 있어 동일 콘텐츠를 정확히
개념
배포해야 정상적인 서비스 제공
콘텐츠
배포
- 얼마나 빠르고 정확하게 CP 가 등록한 콘텐츠를 찾아내고 배포하여 자동으로
특징
배포결과를 통보 할 수 있는가가 이 기술의 핵심
138

---

## Page 139

- 컨텐츠 변경 시에도 즉각 반영하여 사용자들이 동일한 내용을 전송 받을 수
있도록 함 .
동기화 기술 개념
- 분산 데이터 관리 및 분산 병렬 처리 기술 요구
분산기술 개념
-Grid Computing, Virtualization 기술 적용
139

---

## Page 140

140

---

## Page 141

5. ADN
기출문제
1. ADN(Application Delivery Network) 과 CDN(Content Delivery Network) 을 비교하세요 .
(KPC 모의고사 , 2013. 6 월 )
141

---

## Page 142

I. QoS 증대를 위한 Network 관리 기술
1) CCN (Cloud Computing Network) = CDN + Cloud 컴퓨팅 – 네트워크 대역폭 Pool 을 생성하여
고속 컨텐츠 전송
2 ) SDN (Software Defined Network) = 복잡한 네트워크의 관리를 소프트웨어를 통해 제어
3 ) ICN (Information Centric Network) = 컨텐츠의 주소를 활용 컨텐츠 접근
4 ) Content Centric Networking – 데이터의 반복 전송 문제를 해결 , IP 를 대체하기 위해 데이터 Packet
을 Data Object 와 Interest 로 Address 를 Names of Objects 로 바꾸어 데이터 중심으로 데이터 교환
Cloud
5 ) DONA(Data - oriented Network Architecture)
6 ) PSIRP(Publish - Subscribe Internet Routing Paradigm)
7 ) NetInf (Network of Information )
142

---

## Page 143

II. ADN 과 CDN 의 개념적 비교
가 . ADN 과 CDN 의 개념
구분 ADN Application Delivery Network CDN Content Delivery Network
- 컨텐츠 제공업자 (Contents Provider) 의 웹
- Content 의 캐싱 없이 망 지연 (Latency) 이 가장
서버에 집중돼 있는 컨텐트 중 용량이 크거나
큰 구간 ( 인터넷 ) 에 위치한 서버들 (ADN 서비스
사용자의 요구가 잦은 컨텐츠를 인터넷 서비
용 서버 ) 간에 다양한 기술들을 적용하여 트래픽
스 제공업자 (ISP) 측에 설치한 CDN 서버에 미
정의
을 빨리 전달
리 저장 CDN 서버로 부터 최적의 경로로 전
- L4/L7 스위치 , 웹 어플리케이션 가속 , 가상화 ,
달
SSL VPN 을 결합 , 인터넷 서비스를 신속 / 효율 / 저
- ISP NW 하단에 캐시서버를 설치 , 대량 / 고
렴 / 보안성 있게 전달하는 네트워크 기술
화질 콘텐츠를 안정적 스트리밍하는 서비스
- 네트워크 지연 최소 화 - 컨텐츠 캐싱
특징
- Acceleration - Caching
143

---

## Page 144

나 . ADN 과 CDN 의 논리적 비교
ADN(Application Delivery Network) CDN (Content Delivery Network)
- Middle Mile 미경유 : Content Provider 병목
구간 회피 , 사용자 근접 지점에서 전송
- 동적 콘텐츠 수용 : 캐시 불가능한 JSP/ASP/PHP
등 어플리케이션에 가속기술 적용
- 안정 / 보안성 : 특정 ISP 장애시에도 서비스 가능 ,
DRM / 보안인증 지원
- 가용성개선 : 정보유실 방지 , 자동복구 가능 ,
글로벌 로드밸런싱으로 지연 / 손실 예방
- 성능 향상 : 동영상 , 음악 등 용량이 큰 데이터를
스트리밍 방식으로 전송
144

---

## Page 145

III. ADN 의 기술 구성도 및 기술 상세
가 . ADN 의 기술 구성도
145

---

## Page 146

나 . ADN 의 핵심 기술
기술 설명
Route (Path) Optimization 사용자와 Origin Server 사이의 라우팅 경로 최적화 (BGP 한계 극복 )
(FEC: Forward Error Correction): 동일 패킷을 서로 다른 경로를 통해
Packet Redundancy
중복 전달하여 패킷 손실 시 재전송 없이 데이터를 복구할 수 있도록 함
Data Compression 데이터 압축을 통해 전송량 최소화
Data De-duplication 동일 byte - stream 에 대해서는 중복 전송을 하지 않아 전송량 최소화
응용 레이어 ( 예 . HTTP) 프로토콜 최적화 ( 예 . Web Objects Prefetchin
Application Optimization
g, Pipelining)
TCP 프로토콜 최적화 ( 예 . Fast Start, Advanced Congestion
TCP Optimization
Avoidance , Large Window Size)
146

---

## Page 147

[ 참고 ] 웹가속기 (web accelerator)
- 웹 서버와 인터넷 그리고 컴퓨터 브라우저까지의 전 트래픽 구간에서 시설이나 장비의 증설 없이 망
구성이나 소프트웨어 프로그램으로 네트워크의 트래픽을 감소시키거나 병목 현상을 제거하여 각종 웹
애플리케이션의 응답 속도를 높이는 기술 .
- 집중된 서버의 트래픽을 분산 처리하는 로드 밸런싱 기술이나 지역 캐시 , 콘텐츠 전송망 (CDN),
그리고 사용자의 웹 방문 특성을 분석하여 응답 속도를 높이는 기술 등이 있다 .
147

---

## Page 148

6. Routing Protocol
기출문제
1. 네트워크에서 패킷을 전달하기 위해 목적지 위치를 찾아주는 방법을 포워딩이라 하고 , 목적지까지
적절한 경로로 이루어질 수 있도록 하는 방법을 라우팅이라고 한다 . 다음 물음에 답하시오 .
가 . 포워딩 방법 5 가지 중 3 가지 이상을 설명하시오 .
나 . 라우팅의 거리벡터 (distance Vector) 라우팅 방식을 설명하시오 .
( 컴퓨터시스템응용 , KPC 모의고사 , 2013. 6 월 )
2. 무선 에드 - 혹 네트워크 (Wireless ad - hoc network) 의 특성을 설명하고 , 이러한 네트워크에서
사용되는 라우팅 프로토콜을 2 - 3 가지로 분류 하여 설명하시오 .
( 조직응용 , 75 회 3 교시 )
3. 라우팅 프로토콜인 RIP(Routing Information Protocol), EGP(Exterior Gateway Protocol),
BGP(Border Gateway Protocol) 를 비교 하여 설명하시오 .
( 컴퓨터시스템응용 , 96 회 3 교시 )
4. 네트워크 라우팅 기법 중 거리벡터라우팅 (Distance Vector Routing) 과
링크스테이트 라우팅 (Link State Routing) 기법의 장단점을 비교 설명하시오 .(108 회 , 컴시응 , 3 교시 )
148

---

## Page 149

Ⅰ. 망에서 , 각 메시지에서 목적지까지 갈 수 있는 여러 경로 중 한 가지 경로를 설정해 주는 과정 , 라우팅
가 . 라우팅 (Routing ) 정의
- 패킷을 목적지에 전달하기 위해서 경로정보를 어느 노드에 전달 하는가를 각 노드가 판단할 수
있게 하고 그 정보에 따라서 패킷을 전달하게 하는 기능
- 라우팅 프로토콜 ( 영어 : routing protocol) 은 라우터 간 통신 방식을 규정하는 통신 규약이다 .
- Datagram 을 목적지까지 배달하기 위해서 목적지까지 어떻게 갈 것인지 경로를 찾는 것으로 OSI 7
Layer 3 계층에서 일어남
나 . Routed 와 Routing Protocol
구분 Routed Protocol Routing Protocol
Routing 되어지는 Protocol 로 Network
Routed(Network) Protocol 을 자동적으로
개념 Protocol 측 . Layer3 의 패킷 형태의 데이터 전송
Routing 시키는 알고리즘
단위로 표현 ( 전송 통로 역할 )
사례 TCP/IP, UDP RIP, OSPF, IS-IS, EIGRP, EGP, BGP
[ 용어 참고 ] 라우트 (Route)
‘ 길 ’ 을 의미 . 출발지에서 목적지까지가는 여러 갈래 길을 말함 .
149

---

## Page 150

Ⅱ. 라우팅의 분류 개념도 및 분류
가 . 라우팅의 분류 개념도
라우팅 프로토콜 (Routing Protocol)
라우팅 경로고정 내 / 외부 라우팅 라우팅 테이블 관리
정적 동적 내부 (IGP) 외부 (EGP)
거리 벡터 라우팅 알고리즘 링크 상태 라우팅 알고리즘
- RIP(Routing Information Protocol),
- IGRP(Interior Gateway Routing Protocol)
OSPF(Open Shortest Path First)
IS-IS(Intermediate System to Intermediate System):
150

---

## Page 151

나 . 라우팅 프로토콜의 분류
분류방법 구분 내용
- 패킷 스위치가 부팅될 때 , 프로그램이 계산하고 , 라우트를 설치한다 .
트래픽의 변화에 따라 , 관리자 ( 담당자 ) 가 경로 선택함 .
정적 라우팅
- 수동식 , 사람이 일일이 경로를 입력 , 라우터 부하경감 , 고속 라우팅
(Static Routing)
- 관리자 관리부담 증가 및 정해진 경로 문제 발생시 라우팅 불가능
- 수동 관리
- 라우터가 스스로 라우팅 경로를 동적 으로 결정하며 , 트래픽의
라우팅
변화에 따라 라우터가 동적으로 경로를 선택하는 유형
경로고정
- 자동 관리
/ 라우팅
표 계산
동적 라우팅 [ 예 ]
(Dynamic Routing) - RIP(Routing Information Protocol): 내부용 라우팅 프로토콜 (IGP)
- IGRP((Interior Gateway Routing Protocol): RIP 처럼 라우팅 프로
토콜이면서 , 디스턴스 벡터 알고리즘 ( 거리와 방향으로 길을 찾는 프
로토콜 )
- OSPF, EIGRP
151

---

## Page 152

나 . 라우팅 프로토콜의 분류
분류방법 구분 내용
- 같은 관리자의 관리하에 있는 라우터의 집합을 AS 라고 정의
- AS 내에서의 라우팅을 담당하는 라우팅 프로토콜
내부 게이트웨이
- RIP, IGRP, OSPF, EIGRP
라우팅 프로토톨
[ 참고 ] AS(Autonomous System; 자율 ( 적인 ) 시스템 )
(Interior Gateway
- 하나의 네트워크 관리자 ( 관리규정 , 관리전략 ) 에 의해서 관리되는
Routing
라우터의 집단
Protocol)(IG(R)P)
- 라우팅 정보를 주고 받는 주고 받는 도메인 (TMON WWW, 사내
내 / 외부
도메인 , NBP 도메인 등 )
라우팅
- 서로 다른 AS 사이에서 사용되는 라우팅 프로토콜
외부 게이트웨이
라우팅 - BGP(Border Gateway Protocol): ISP 에서 직접 IP 받는 방식도
(Exterior 있고 , KISA( 인터넷진흥원에서 직접 받을 수 있음 )
Gateway 직접 받아서 라우팅 처리함 . ( 제공자 간의 통신에 사용되는 경로 지
Protocol) (EGP) 정 통신 규약 . RFC 1771 에 규정 )
- EGP( 현재는 사용 안함 , 이전방식 )
152

---

## Page 153

나 . 라우팅 프로토콜의 분류
분류방법 구분 내용
- 라우팅 Table 에 목적지까지 가는데 필요한 거리와 방향만을 기록
( 인접 라우터 ; Neighbors of topology)
거리 벡터 라우팅
- 당연히 , 수시로 , 라우팅 정보를 주고 받는 방식 ( 자동 교환 )
알고리즘
(Distance Vector
( 예 )
Routing
- RIP(Routing Information Protocol- 30 초 마다 주기적인 Full
Algorithm)
Update)
- IGRP(Interior Gateway Routing Protocol)
라우팅
- 라우터가 목적지까지 가는 경로를 SPF(Shortest Path First)
테이블
관리 알고리즘을 통해 모든 라우팅 테이블 에 기록해 두는 것
( 모든 라우터 ; which require a router to inform all the nodes
링크 상태 라우팅
in a network of topology changes)
프로토콜
(Link State
- 링크 정보만 보냄
Routing
( 예 ) OSPF(Open Shortest Path First; 최단 경로 우선 프로토콜 )
Algorithm)
IS-IS(Intermediate System to Intermediate System): 개방형 시스
템 간 상호 접속 (OSI) 에서 정해진 중간 시스템 (IS) 끼리 행하는 통신
IS-IS 는 ‘ 아즈이즈 ’ 라고 발음 . IGP 에 포함됨 .
153

---

## Page 154

□ 라우팅은 무엇인가 ?
□ 라우터가 라우팅을 하기 위한 필요 요소
 목적지 주소 (Destination Address) 를 알아야 함
 목적지 주소를 습득한 Source 에 대한 경로를 확인 할 수 있어야 함
 가능한 경로 (Possible) Routes) 1 개 이상 존재해야 함
 최적의 경로 (Best Route) 가 선택되어야 함
 라우팅 정보의 관리 및 이상 유무 확인 필요
154

---

## Page 155

□ 라우팅 테이블 ( 라우팅 표 ) 의 구성 요소
구성요소 내용
네트워크 주소 - 목적지 주소
메트릭 (Metric) - 목적지 주소까지의 소모 비용
다음 게이트웨이 - Next Gateway, 패킷을 전송할 다음 주소
인터페이스 - 다음 게이트웨이가 존재하는 인터페이스
라우터에 도착한 IP 패킷에서 목적지 주소와
라우팅 테이블을 대조하여 다음에 보낼 인터페이스로 패킷을 내보냄 .
155

---

## Page 156

□ A router depends on its routing table for knowledge of destination networks
156

---

## Page 157

I. 지정된 목적지로 적절한 경로를 통한 전달 위한 방법 , 포워딩과 라우팅의 이해
157

---

## Page 158

1) 포워딩의 개념
- 다양한 네트워크들을 연결하는 스위칭이나 라우팅 장비에서 수행되는 동작으로 들어온 패킷의 해더
정보를 이용하여 최종 목적지 네트워크를 향해 패킷을 내보내 주는 과정
- 입력으로부터 한 패킷을 취해서 적절한 출력으로 보내는 것을 포워딩이라 함
2) 라우팅의 개념
- 최종 목적지까지 패킷을 최소비용 또는 최소 홉 (Hop; 망 하나를 경우할 때마다의 카운터 수 ) 수를
알고리즘을 통해 적절한 경로를 설정해주는 방법
- 라우팅 연결방식에 따라 일정한 시간마다 이웃에 위치한 라우터와 경로정보를 교환 (Hop Count) 해서
최적경로를 설정하는 거리벡터 라우팅 방식과 링크 (Link) 상태가 변할 때만 경로정보를 전송하여
트래픽을 줄이는 링크 스테이트 (Link state) 라우팅 방식으로 분류 할 수 있음
158

---

## Page 159

II. 라우터의 홉수를 계산하여 최적의 경로를 선택하는 거리벡터방식
가 . 거리 벡터 라우팅 방식 (Distance Vector Routing Algorithm) 의 개념
- 일정시간 마다 이웃에 위치한 라우터와 경로를 교환 (Hop Count) 해서 최적경로를 설정하는 방식
- 각 라우터는 일정한 시간마다 인접한 ( 이웃한 ) 라우터와 라우팅 테이블에 있는 모든 라우팅 정보를 주고
받는데 , 이때 이웃하고 있는 라우터의 경로 값들과 자신이 가지고 있는 경로 값을 비교하여 적은 값으로
라우팅 테이블을 갱신하는 방식
나 . 거리벡터방식의 동작방식과 특징
159

---

## Page 160

구분 설명
제시문 - C 라우터 ( 노드 ) 에서 A 라우터 ( 노드 ) 로 라우팅 테이블 정보 전송 시 동작방식
동작방식
160

---

## Page 161

1 ) 송신 노드 (C 노드 ) 로부터 테이블 정보를 수신
세 2) 송신 노드 (C 노드 ) 로부터 수신 받은 테이블 정보와 수신 노드 (A 노드 ) 사이의 비용 ( 거리 ) 을 고려하여 ,
부 정보반영
설 3 ) 정보 변경 전 테이블의 정보와 반영 후 테이블의 정보를 비교
명 4 ) 변경 전 테이블의 Hop Count 가 반영 후 테이블의 정보의 Hop count 보다 작은 경우는 Hop
Count 를 최소 값으로 변경 , 그렇지 않은 경우는 기존 값으로 유지시킴
장점 - 모든 라우터 정보를 갖지 않음 ( 구성 간단 , 표준으로 사용 , 메모리 절약 )
- 라우터 테이블의 변화가 없어도 정해진 시간 ( 30 초 ) 마다 Update( 트래픽증가 , 라우터부담 )
장
- 라우터 마다 전달내용을 한 단계씩 전달하여 갱신 후 , Next 라우터에게 전달 , 라우터가
단
단점 많을 경우에 많은 시간이 소요되기 때문에 소규모 N/W 에 적용
점
- 모든 라우터에게 전달되는 시간이 길어질 때 루핑 (looping) 발생
- RIP 의 경우 최대 Hop count 를 15 이하로 제한 , 16 이후 부터는 N/W 인식 못함
161

---

## Page 162

PoE
출제예상문제
1. 107 회 컴시응 1 교시 기출문제
참고 : https :// en.wikipedia.org/wiki/Power_over_Ethernet#Power_levels_available
Power over Ethernet or PoE describes any of several standardized or ad-hoc systems which pass
electrical power along with data on Ethernet cabling. This allows a single cable to provide both
data connection and electrical power to devices such as wireless access points or IP cameras.
162

---

## Page 163

I. Power 와 Data 동시 전송 , PoE 의 개요
가 . PoE (Power over Ethernet) 의 개념
- 이더넷 케이블을 통해 데이터와 전원을 통합적으로 전달하는 기술로 IEEE 802.3af ( Type - 1) 과
IEEE802.3at(Type2 ) 기술표준 프로토콜 지정
나 . PoE 의 특징
특징 설명
지능화 N/W 관리자가 SNMP 를 이용 전원 차단 또는 공급 가능
별도의 전원장비 또는 전원선 포설 비용이 절감됨
비용절감
정전시 중단없는 전원공급 ( 비상시 전원공급 , 수시간 ~ 수십시간 , 정전순간 재부팅 없음 )
설치용이 전원과 상관없이 제품 설치가 가능
신뢰성 UPS 를 Ethernet 스위치와 사용할 경우 주 전원이 중단되어도 동작 가능
163

---

## Page 164

II. PoE(Power over Ethernet) 의 구성도 및 구성요소
가 . PoE 구성도
Ethernet
PoE 스위치 PoE Device
Non-PoE
UPS PoE 스플리터
Device
PoE 를 지원하지 않는
데이터만 공급하는 기기
Poe MidSpan PoE Device
미드스팬
- 파워 ( 전원 ) 공급 장치
Non-Poe 스위치
Ethernet
- PoE 스위치는 전원과 Ethernet 을 입력 받아서 하나의 선로에 전원 , Data 를 공급
164

---

## Page 165

Chapter III 무선 Network 서비스
Chapter III. 무선 Network 서비스
Wireless LAN 상
이동통신 상
LTE, VoLTE 상
LTE-U 중
LTE-R 하
PS-LTE 상
5G(IMT-2020) 상
NFC 중
Wi-Fi Direct 하
Zing 하
165

---

## Page 166

1. Wireless LAN
III. 무선 Network 서비스
기출문제
1. 무선 LAN 보안의 문제점 및 대책에 대하여 설명하시오 .
( 정보관리 69 회 2 교시 )
2. IEEE 802.11 네트워크에서의 BSS(Basic Service Set) 에 대하여 설명하시오 .
( 컴퓨터시스템응용 98 회 1 교시 )
3. 사용의 편리함으로 다양한 분야에 사용되는 무선랜은 모바일 빅뱅 환경이 확산되면서 그 사용이
기하급수적으로 증가되고 있다 . 이러한 무선랜은 많은 장점과 더불어 무선 서비스 상에 존재하게 되는
다양한 취약점에 가지고 있다 . 무선랜의 취약점에 대해 사용자 인증 및 무선랜 데이터 전송 취약성
중심으로 설명하고 무선랜 보안 정책 항목에 대해 기술하시오 .
( 모의고사 )
4. 기가 와이파이 (802.11ac) 에 대하여 설명하시오 .
( 컴퓨터시스템응용 101 회 1 교시 )
5. IEEE 802.11ac(107 회 , 컴퓨터시스템응용기술사 )
6. IEEE 802.11i 의 등장배경을 설명하고 인증과 키교환 방식을 설명하시오 .
(107 회 , 컴퓨터시스템응용기술사 )
166
7. WiFi 기반 실내 . 외 위치 추적기술에 대하여 설명하시오 .(105 회 , 컴시응 , 3 교시 )

---

## Page 167

1. Wireless LAN
III. 무선 Network 서비스
[ 표준 ] 출처 : http://www.keysight.com/upload/cmc_upload/All/22May2014Webcast.pdf?& cc=KR&lc=kor
167

---

## Page 168

1. Wireless LAN
III. 무선 Network 서비스
I. 무선주파수를 이용한 데이터 송수신 , 무선 LAN 의 개요
가 . 무선 랜 (Wireless LAN; IEEE 802.11) 의 정의
- 기존 유선랜을 대체 , 또는 확장한 유연한 데이터 통신 시스템으로 무선주파수 (Radio Frequency; RF)
기술을 이용하여 유선망 없이도 데이터를 주고 받을 수 있는 기술
- LAN 의 이더넷 방식을 공기를 전송매체로 데이터를 전송하는 방식
- 정보 단말기에 무선랜 카드와 HOT SPOT 지역의 무선랜 접속 장치 (AP) 를 이용 해 유선처럼 사용하는
네트워크 서비스
나 . 무선 LAN 의 특징
- 복잡한 배선이 필요 없고 , 단말기의 재배치 시 용이
- 짧은 거리 내에서 이동 중에도 통신이 가능
- 빠른 시간 내에 네트워크 구축이 가능
- 유선 LAN 에 비하여 상대적으로 낮은 전송 속도
- 신호 간섭 발생
168

---

## Page 169

II. 무선랜의 구성도 및 구성요소
가 . 무선랜의 구성도
AP (Access Point)
노트북 WIMS
AC (Access Controller)
PC
인터넷망
라우터
AP(Access Point)
휴대폰
무선랜 영역
인터넷 백본 접속 구간 인터넷 백본
AP
무선랜 카드
무선랜 컨트롤러
( 예 ) 3Com Wireless LAN Controller
169

---

## Page 170

나 . 무선랜의 구성요소
구성요소 특징
내 용
AP (Access Point)
- 무선단말기와 데이터를 주고 받는 기지국 역할 게이트웨이 역할
AC (Access Controller)
- 인증 , 과금 , 기타 정보제공 등의 역할 수행 AAA 기능
WIMS(Wireless Internet
- 무선랜 서비스에 대한 관리기능 을 수행 BSS, ESS 관리
Management System)
무선랜 카드
- 무선통신을 위한 카드 Ad-hoc 역할
[ 참고 ]
BSS (Basic Service Set) : AP 에 속하는 네트워크로 , 100m 이내 지리상의 범위
ESS (Extended Service Set) : 한 개 이상의 BSS 로 구성 . 동일 ESS 내에서 다른 BSS 간 로밍에
의한 단말 이동 이 가능함
Hot Spot : 거래 이동이 많은 커피숍 규모 ( 노트 12 권 참조 )
Hot Zone: 학교 사이즈 정도의 광역의 개념
170

---

## Page 171

[ 참고 ] IEEE 802.11 LAN BSS Layout
171

---

## Page 172

III. IEEE 802.11 규격 의 비교
구 분 802.11g
802.11b 802.11a
주파수
2.4 GHZ 대역 5GHZ 대역 2.4GHZ 대역
도달거리 (M)
70~100m 15~35m 50~80m
DSSS
(Direct Sequence Spread
Spectrum);
변조방식 OFDM( 직교변조방식 ) OFDM
하나의 신호 심볼을 일정한 시
퀀스로 확산시켜 통신하는 방
식 (CDMA 에서 사용 )
전송속도
최고 11Mbps 최고 54Mbps 최고 54Mbps
장점 타기기와 전파간섭 없음
저가 기기 급속 보급 802.11b 호환성
(5GHZ 대역이므로 )
단점 - 타기기와 전파간섭 문제
- 5GHZ 대역은 통신 위성 주파수
(2.4 GHZ 대역의 Bluetooth - 전파간섭 문제
대이므로 국가마다 제약
와 문제 )
기타
IEEE 802.11a 와 11g 에 주목 대응제품 2002 년도에 등장 - 표준화 진행 중
[ 참고 ]
- IEEE 802.11n 은 MAC 계층에서 최대 100mnps 의 Throughput 보장을 목표로 하는 차세대 무선랜에
대한 새로운 표준 연구 수행 중
- MAC 계층의 100Mbps 의 속도 수용하기 위해서는 물리계층에서는 200Mbps 이상 성능 지원해야 함 .
전송기술로 고려 중인 다중안테나를 이용하는 MIMO (Multiple Input Multiple Output) 기술
172

---

## Page 173

비교자료 - http://cafe.naver.com/81th/12145
173

---

## Page 174

[ 답안 작성 사례 ]
• RSS(Received Signal Strength) 를
이용한 측위기술 적용
174

---

## Page 175

[ 참고 ]
- DSSS (Direct - Sequence Spread - Spectrum) 의 전송방식은 데이터 비트 신호에 정해진 패턴의 잡음
신호를 더하여 수신하는 쪽에서 송신 측과 같은 패턴의 잡음 신호만 제거하여 데이터 비트를 추출하는
신호전송방식
- 장점 : 무선랜에서 쉽게 통신거리 연장 가능
175

---

## Page 176

IV. 기가 바이트 대용량 실시간 전송 802.11ac 의 개요
802.11n 뒤를 이을 블루레이 및 압축되지 않은 초고화질의 영상을 압축하지 않고 실시간
으로 제공 가능한 Gbps 이상의 고속 무선랜
- 802.11ac 의 특징
특징 세부 내용
전송속도 1Gbps 이상의 전송속도를 지원 차세대 스마트폰을 위한 핵심기술로 기대
80 MHz 의 대역폭의 효율적 사용을 위해 기존 2 . 4 GHz 기술 ( 802 . 11 b/ 802 . 11 g) 와의
상호호환
호환성 포기
기술향상 1Gbps 이상의 전송속도 지원을 위해 주파수 효율 및 변복조 기술향상
- IEEE 802.11ac 는 높은 속도의 근거리 통신망 (LAN) 을 제공하기 위하여 현재 개발 중에 있는 802.11
- 무선 컴퓨터 네트워킹 표준 중의 하나이다 .
- 5GHz 주파수에서 높은 대역폭 (80MHz~160MHz) 을 지원하고 , 2.4GHz 에선 802.11n 과의 호환성을
- 위해 40MHz 까지 대역폭을 지원한다 .
176

---

## Page 177

IV. 기가 바이트 대용량 실시간 전송 802.11ac Wave 2 의 개요
출처 : http:// www.cisco.com/c/en/us/solutions/collateral/enterprise-networks/802-11ac-
solution/q-and-a-c67-734152.html
WFA: Wi-Fi Alliance, http://www.wi-fi.org / 와이파이 얼 라이언스 단체
177

---

## Page 178

V. TV 유효 대역 (TV White Space 라고 부름 ) 에서 무선 랜이 동작하게 만든 표준 규격 IEEE 802.11af
특징 설명
Authorized GDB - Geo-location Database 를 이용하여 가용한 주파수 대역을 선택
White Space - 54~698 MHz 의 방송 유휴 주파수 이용
광대역 Wi - Fi - WLAN 서비스를 1km 이상 서비스 가능 ( 커버리지 )
[ 참고 ] ah, ai 기술도 개발 중
[ 참고 ] TV 화이트 스페이스 : TV 방송용으로 분배된 VHF 및 UHF 주파수 대역에서 방송 사업자가 사용하
지 않는 비어 있는 주파수 대역
178

---

## Page 179

V. 무선랜의 보안 취약성 및 해결 방안
구분 해결 방안
보안 취약성
- AP 는 전파 수신의 효율을 위하여 공개된 - AP 무선 LAN 장비 노출
물리적 취약성 장소에 배치 최소화 및 물리적 접근을
- AP 도난 , 파손 , 전원 차단 위험 통제
- 무선 랜의 영역 설정을 위한 SSID 노출 - SSID 설정 및 SSID 브로드
- MAC 주소 필터링을 위해 사용되는 MAC 주소 캐스트 금지
노출 - MAC 주소 ( 랜카드 물리적 주소 )
기술적 취약성
- 보안 프로토콜의 취약성 필터링 사용
- 서비스 거부 공격 노출 - 적절한 WEP Key 사용
- 유선 네트워크 연동시 발생 문제 - 무선 IDS, IPS 이용
- AP 의 전파출력 조절 ; 외부침입
- AP 전파 관리 미흡
방지
관리적 취약성 - 장비관리 / 사용자 관리
- 무선 랜 필요에 대한 검토
- 무선랜 사용자 보안의식 결여
- 보안대책 / 사용자 교육
[ 참고 ] 무선랜 보안의 매카니즘
1. SSID(Service Set Identifier)
- 도메인 이름 (Domain Handle) 을 처리하는 기능으로 접근 제어의 기본적인 수준을 제공
2. WEP(Wired Equivalent Privacy) -> IEEE 802.11i 표준을 기반의 WPA(Wi - Fi Protected Access)
- 대칭키 암호화 알고리즘을 이용한 데이터 스트림을 보호하는 암호화 기능 수행
- 목적 : 접근제어 및 정보보호
3. 인증 : 클라이언트 키값이 설정되어 있으며 , 그 값과 AP 의 키 값이 일치해야 함 ( 공개인증 / 공유키인증방식 )
179

---

## Page 180

VI. 무선랜 기반 실내 위치 측위 기술
구분 작동방식 특징
- AP 에서 수신된
삼각 측량 - 기본적인 무선 측위 기술
신호의 지연 시간 및 감쇠 정도를 이용
- 측위 지역을 셀로 나누어 장면 분석을 통해 위치를
- 위치측위 전에 측위 공간에 대해
측위 . 높은 측위 정확도로 인해 실내 위치
핑거
데이터베이스를 미리 구축해야 함
- AP 의 Mac address 와 수신신호세기 정보를 이용
프린트
- 실내 환경이 바뀌면 재작업 필요
하여 위치를 결정
180

---

## Page 181

VI. WPS(Wifi Positioning System)
WPS(Wifi Positioning System) 은 와이파이 AP(Access Point) 에서 방사된 RF 신호의 파라미터
( MAC 주소 , 신호세기 등 ) 를 단말기에서 수신하여 단말과 시스템간 위치측위 결정기술을 사용 하여
이용자의 위치를 계산하여 제공해 주는 기술
181

---

## Page 182

2. 이동통신
이동통신 네트워크 진화 로드맵
182

---

## Page 183

5G; LTE 보다 1000 배 빠른 기가급의 데이터 통신
기가코리아 – IMT - 2020
▶ 이동통신 발전과정 ( 멘토 구분 ]
5 세대
IMT
2020
4 세대 (LTE)
1 세대 2 세대 3 세대 ( IMT - 2000]
하나의 단말기로 위성망 , 무선랜 , 인터넷
데이터 ( 멀티미디어 ) 중심
( 아날로그 ) ( 디지털 )
등을 모두 사용할 수 있는 서비스
고품질서비스
- 3G LTE (Long Term Evolution) 기술
- CDMA ( 음성중심 )
삼성전자 , 노키아 , 퀄컴의 3GPPP
Code Division Multiple Access
( 비동기식이동통신표준화단체 )
코드분할다중접속방식 ; 다수의 사용자들이 동시에 시간과
주도
주파수를 공유하며 접속이 가능한 방식 중의 하나
서비스방식에 따라
- 와이브로 , OFDM 기술 등 적 용
무선다중접속방식
- LTE, IEEE 802.16m(WiMAX
Evolution
유럽통신장비
회사의 기지국
북미방식의 동기식 유럽방식의 비동기식
FDMA TDMA CDMA
주파수 분할 시분할
장비를 통해 시간
(CDMA 2000) (W - CDMA)
다중접속 다중접속
맞추는 방식
W-CDMA(R3)
All-IP Network
CDMA 2000 1x(IS-95C)
로 진화
W-CDMA(R4)
CDMA 2000 1x EV-DO
W-CDMA(R5)
미국이 설치한 GPS 를 통해 , 시간대 맞추고 , 기지
7 배 빠른 하향 다운로드 속도
국 장비를 거쳐 데이터 등 전달방식
비동기식 3.5 세대 (G)
(synchronous transmission)
HSDPA / HSUPA
이동통신서비스
183

---

## Page 184

LTE
III. 무선 Network 서비스
기출문제
1. 차세대 이동통신 종류와 특징에 대하여 설명하시오 .
( 정보관리 81 회 1 교시 )
2. 3G 이동통신 기술에 대비하여 차세대인 4G 이동통신 기술을 설명하고 , 대표적인 LTE, Wibro
Evolution, UMB 에 대해 설명하시오 .
( 모의고사 )
3. VoLTE (Voice over Long Term Evolution) 에 대하여 설명하시오 .
( 정보관리 99 회 1 교시 )
4. MIMO(Multi Input Multi Output) 와 OFDM(Orthogonal Frequency Division
Multiplexing) 기술을 함께 사용될 경우 시스템과 사용자 측면에서 고속 대용량화
하는 과정을 설명하시오 . (107 회 , 컴퓨터시스템응용기술사 )
5. PS - LTE(Public Safety - LTE) (105 회 , 컴시응 , 1 교시 )
6. 국가재난 안전통신망을 구축하고자 한다 . 현재 국내의 무선통신 이용시 문제점과 대책을
설명하시오 .(105 회 , 컴시응 , 2 교시 )
7. LTE - U 와 WiFi 차이점에 대하여 설명하시오 . (105, 컴시응 , 4 교시 )
184

---

## Page 185

LTE
III. 무선 Network 서비스
I. 휴대전화 고속 무선 데이터 패킷 통신 규격 LTE 의 개요
가 . LTE(Long Term Evolution)
1) 주파수 자원 이용 , 이동성 , 낮은 전송지연 (low latency), 패킷 데이터 전송에 최적화된 기술과 서비스
품질 보장 등을 제공하는 4 세대 이동통신
2) HSDPA 보다 한층 진화된 휴대전화 고속 무선 데이터 패킷 통신 규격
3) WCDMA( 광대역부호분할다중접속 ) 와 CDMA( 코드분할다중접속 )2000 으로 대별되는 3 세대 이동
통신과 4 세대 이동통신 (4G) 의 중간에 해당하는 기술이라 하여 3.9 세대 이동통신 (3.9G) 라고도 함
나 . 등장 배경
1) 기존 3GPP/non - 3GPP 의 접속 망에 대한 역 호환성 (backward compatibility) 보장
2) 고속의 Rich media 수용
다 . LTE 의 특징
특징 설명
- 다운로드 속도가 최대 1Gbps (Mega bit per second, 1 초당 100 만 비트를
기술적 측면 보낼 수 있는 전송속도 ) 로 700MB 용량의 영화 1 편을 1 분 안에 다운 가능
- 기존 3G 서비스인 WCDMA, HSxPA 서비스와 4G 망의 연동이 가능
- 3 세대 이동통신인 WCDMA 에서 진화되고 , 기존의 네트워크망과 연동할 수 있어
비즈니스 측면
기지국 설치 등의 투자비와 운용비 절감 가능
185

---

## Page 186

III. LTE 네트워크 개념도 – 구성요소 기억해 주세요 ~~~
라우팅 담당
Packet Data Network
단말기 기지국 핸드오버 인터넷망
PDN 연동
게이트웨이
게이트웨이
186

---

## Page 187

III. LTE 개념도 및 기술요소
구성요소 설명
- User Equipment
UE - 사용자 단말 (Smartphone), UE 에는 " 가입자 식별 / 인증을 위한 USIM 카드 " 가
- UE 는 LTE chip 을 내장하고 있어 LTE 망에 붙을 수 있는 단말기
- eNB (Evolved Node B)
- "LTE 기지국 " 이라 불리며 , UE 와 LTE 네트워크 간에 무선 연결을 제공하는 장비 .
eNB
- 무선 연결은 UE 와 eNB 간이고 , 나머지는 다 유선 연결됨 .
- 기지국 (LTE: eNB , WiBro : BS, Wi - Fi: AP )
S-GW - eNB1 에 붙어서 인터넷을 사용하던 UE 가 이동을 하여서 eNB1 과의 접속을 해지하고
(Serving eNB2 와 접속을 하는 경우 ( 우리는 이를 핸드오버라고 합니다 . 물론 핸드오버 시에
Gateway) 통신의 끊김은 없게 ) S - GW 가 anchoring 역할 수행 .
PDN - Packet Data Network( 인터넷망 )
- Mobility Management Entity
MME - eNodeB 와 S - GW(Serving Gateway) 간의 신호제어를 담당하고 단말로부터
인입되는 data 를 어느 곳으로 라우팅할 지 결정
P-GW - PDN Gateway, 단말에 IP 할당 등 수행
187

---

## Page 188

III. LTE 기술요소
구분 기술 설명
- 직교 주파수 다중 분할 (Orthogonal Frequency Division Multiplexing)
기술
- 주파수와 시간을 나누어서 할당하는 방식으로 하나의 채널을 여러 개로
OFDM
나누어 데이터 전송이 가능하며 , 서브 채널간 오버래핑으로 대역폭을 절약
- 주파수 대역을 수백 개로 나누어 주파수 간섭을 최소화하고 대용량 데이터를
동시에 고속으로 전송하는 기술
주파수
- 다중 입 , 출력 (Multiple Input Multiple Output) 기술
- 모바일 환경에서 다수의 안테나를 사용해 데이터를 송수신하는 다중 안테나
신호처리 방식 ( 안테나를 일정 간격으로 배열하여 송신 처리 )
MIMO - 여러 개의 안테나로 데이터를 동시에 송 / 수신함으로써 무선 통신의 범위를
넓히고 속도를 크게 향상시켜 전송 효율을 높이는 기술
- OFDM 기술과 함께 적용 시 전송속도의 고속화와 데이터의
대용량화가 가능
188

---

## Page 189

III. LTE 기술요소
구분 기술 설명
소프트웨어 기반 이동통신 ( Software Defined Radio ) 기술
- 주파수의 범위 , 변조방식 , 무선 출력 등 주요 무선 특성을 소프트웨어로
SDR 업데이트 또는 변경 가능한 모뎀 기술
- 국가마다 다른 주파수 대역 , 동기와 비동기 구분 3G 망 사이의 호환성 , 2G 와
3G 망 사이의 호환성 , 다양한 무선 네트워크와 통신 방식간의 호환성 보장
주파수
스마트 안테나 ( Smart Antenna ) 기술
- 기지국이 단말기에서 보내는 신호를 근거로 사용자 위치를 파악해서 해당
사용자에게 전파 신호를 집중해서 전송하는 방식 으로 송 / 수신 성능을 높이는 역할
SA
- 간섭 신호를 제거로 전송량을 증대시키고 다중 경로 반사파의 영향을 최소화
하여 우수한 품질 유지
- 하드웨어 복잡도가 증가하고 비용이 많이 드는 단점
189

---

## Page 190

IV. OFDM
LTE 참조 주소 : http://cafe.naver.com/81th/21191
190

---

## Page 191

I. 무선 통신의 용량을 높이기 위한 스마트 안테나 기술 , MIMO( 미모 or 마이모 ) 의 개요
- MIMO 는 기지국과 단말기에 여러 안테나를 사용하여 , 사용된 안테나수에 비례하여 용량을 높이는
기술이다 . 여기서 기지국은 송신단을 의미하고 단말기는 수신단을 의미한다 .
- 기지국에 M 개 , 단말기에 N 개를 설치할 경우 min(M,N) 만큼 평균 전송 용량이 늘어난다 .
- 즉 . 기존의 통신 이론에서는 전송 용량은 사용하는 주파수와 전력에 의해서만 결정 . 반면 , MIMO 는
사용하는 기지국과 단말기의 안테나 수 에 대한 새로운 관계식을 정의하게 됨
Multiple-Input Multiple-Output (MIMO)
Multiple-Input Single-Output (MISO)
-> 기지국 여러 개 안테나 사용 , N=1 경우
송신처리입장
수신처리입장
Single - Input Multiple - Output (SIMO)
Single - Input Single - Output (SISO )
y( 기지국과 단말기에 설치된 다중 안테나를 통한 단말 수신 신호 ) = Hx + n
H = MIMO 의 안테나 관계에 따른 채널을 나타내는 매트릭스 , x = 전송신호 , n = 수신노이즈 ( 간섭증가 )
[ 참고 ] NASA 는 최근 MIMO 기술을 적용한 안테나를 통해 탐사로봇의 정보를 빠르게 전송 받고 있다 .
191

---

## Page 192

키워드 : 복수의 병렬 전송 , Diversity
[ 참고자료 ] http ://www.iet.ntnu.no/projects/beats/Documents/mimo.pdf
192

---

## Page 193

II. MU-MIMO 는 기존 MIMO 에서 한 단계 발전한 형태로 다중 사용자에 대한 다중 안테나를 사용함으
로써 전송효율을 향상시키는 방법 .( 멀티유저 다중입출력시스템 )
- 송신 (TX ): Transmitter x( 지점을 표시 ): 전송부
- 수신 (RX ): Receiver 수신부 를 말함 .
[ 참고 ] 4G 에서는 하향 최대 8x8, 상향 최대 4x4 의 MIMO 를 지원함 .
193

---

## Page 194

[ 참고 ] LTE - A 이론상 최대 속도 ( http://www.artizanetworks.com/lte_tut_adv_acceleration.html )
- CA 라고 해서 주파수를 무한정 묶을 수 있는 것은 아니고 , 각각 20MHz 씩 5 개까지 묶을 수 있으므로
LTE - A 스펙에서 지원하는 최대 대역폭은 100MHz.
- 다중 안테나를 8 개씩 쓸 수 있다면 3Gbps 라는 엄청난 속도를 구현 가능
194

---

## Page 195

I. 3.5G 와 3.9G(LTE), 그리고 4G 의 비교
LTE-Advanced (LTE-A)
는 3GPP Release 10
에서 처음 도입된 기술 .
즉 LTE - A 를 지원한다
는 것은 Rel.10 혹은 그
이후의 스펙을 지원한
다는 것을 의미함 .
195

---

## Page 196

I. LTE 에는 여러 개의 주파수를 섞어서 쓰는 기술이 적용 , Carrier Aggregation 개요 .
가 . 멀티캐리어 (Multi Carrier )
- 멀티캐리어는 단말기가 2 개 주파수 중 더 속도가 빠른 쪽의 주파수에 접속해서 쓰는 기술 .
- 2 배 속도 (X), 정체가 풀린 뿐임 .
( 예 ) SK 텔레콤은 대부분의 단말기가 주력 주파수인 850MHz 에 접속하지만 , 이 주파수대에 너무 많은
스마트폰이 물려 있어서 속도가 떨어지면 , 1.8GHz 대로 이용 주파수를 바꾼다 . 물리적으로
통신망의 대역폭이 2 배로 늘어나는 셈이다 .
( 예 ) KT 도 1.8GHz 의 주력 주파수 외에 900MHz 의 보조 주파수로 멀티캐리어를 서비스하고 있고
LG 유플러스 역시 850MHz 주력 주파수와 2.1GHz 의 보조 주파수를 함께 운영 .
나 . 캐리어 어그리게이션 (Carrier Aggregation ); 집적 기술
- 2 개의 주파수를 함께 이용해 속도를 2 배로 끌어올리는 기술 . 2 개 주파수 , 혹은 서로 다른
네트워크를 접목하는 것이 핵심 .
196

---

## Page 197

II. 캐리어 어그리게이션 (Carrier Aggregation ) 의 개념도
기본적인 캐리어 어그리게이션은 각 통신사가 갖고 있는 2 개 주파수를 합치는 것
( 예 ) LG 유플러스를 예로 들면 850MHz 와 2.1GHz 주파수에 동시에 접속해 각각의 최대 속도를 이용하
는 방식 . LTE 주파수 하나는 최대 75Mbps 의 속도로 1 초에 약 9.3MB 를 내려 받을 수 있는데 , 이를
2 개 붙이면 최대 150Mbps, 약 18.7MB 속도로 빨라진다 .
197

---

## Page 198

II. 캐리어 어그리게이션 (Carrier Aggregation ) 의 개념도
전통적
네트워크
LTE
Advanced
네트워크
198

---

## Page 199

I. 기지국간 협력 통신 , 주파수간 간섭제어 기술 , CoMP (Coordinated Multi - Point)
가 . 등장배경
- 두 개의 무선공유기를 근거리에 두고 두 개 모두 주파수 채널을 1 로 설정한다고 가정
- 두 개의 무선공유기간 주파수 간섭현상이 발생하여 무선인터넷이 매우 느린 현상 .
- 노드간 간섭현상을 제어하여 , 보다 효율적인 주파수 통신환경을 구축함으로써 보다 빠른 이동통신
인프라를 구축 - > IRC(Interference Rejection Combining : 간섭 제거 합성 )’ 기술 필요
나 . 주파수 간섭제어 기술 , JP - CoMP 와 CS/CB CoMP 2 가지 설명
II. JP-CoMP - 하나의 패킷을 2 개 이상의 eNodeB 가 병렬로 동시 전송하는 방식 .
- Joint processing
199

---

## Page 200

나 . CS/CB - CoMP : eNodeB 간 정해진 룰을 통해 ( 셀 영역간 정해진 룰 ) UE( 사용자 단말 ) 에 주파수
간섭을 최소화 하여 통신
-> 동일 지역 , 인접 구역으로 스케쥴링이 되지 않도록 처리 .
[ 참고 ]
CS/CB-CoMP -> JP-CoMP 발전 .
200

---

## Page 201

V. 4G 데이터의 효율적 전송을 위한 TD - LTE 와 FDD - LTE 의 개요
가 . TD - LTE(Time Division) 의 정의
- 주파수를 시간 단위로 나누어 송수신을 모두 처리하는 비대칭적인 데이터 처리기술인 4 세대 통신망의
표준 프로토콜
[ 참고 ; TDD – (Time Division Duplex , time division duplexing ; 시분할 송수신 장치 )
- 시분할 전송 방식에서 1 개의 프레임 내부를 송신용과 수신용으로 분할하여 1 개의 주파수로 양방향
통신을 하는 방식 .
나 . FDD - LTE( Division ) 의 정의
- 데이터 송신과 수신을 위해 각기 다른 주파수 영역을 설정해 사용하는 음성통화에 유리한 송수신
대칭형 4 세대 통신망의 표준 프 로토콜
[ 참고 ; FDD - Frequency Division Duplex; 주파수 분할 송수신장치 ]
- 하나의 전송 매체에서 주파수를 분할하여 순방향과 역방향 통신 채널을 구분하는 접속 방식 .
- 예를 들면 , 위성 통신에서는 지구에서 위성으로 올려 보내는 전파와 위성에서 지구로 내려오는 전파는
각각 4[GHz]/6[GHz] 로 주파수대를 달리하여 송수신 신호 간의 간섭을 최대한 방지
201

---

## Page 202

구분 TDD-LTE FDD-LTE
구조도
- WiMax 와 동일한 TDD 방식 , 시분할방식 - 주파수 분할방식
- 하나의 주파수를 시간단위로 나누어 - 데이터 송신과 수신을 위해 각기 다른
원리
송수신을 모두 처리 주파수영역을 설정하여 사용
- Unpaired 방식 - Paired 방식
202

---

## Page 203

V. VOLTE ALL-IP 기반의 LTE 이용한 음성서비스 , VoLTE 의 개요 .
- VoLTE 는 ‘ Voice over LTE’ 를 줄인 말로 , 이름처럼 LTE 인터넷 망 위에서 이뤄지는 음성통화 서비스 .
최근 LTE 가입자가 급증하고 , 새로 출시되는 단말기에 VoLTE 기능이 탑재되고 있지만 VoLTE 통화를 이용
하는 고객은 미미한 수준이다 .
VoLTE 서비스를 제대로 이용하기 위해서는 이통 3 사간 망연동 합의가 필수다 . 하지만 이통 3 사 모두 대립
각을 세우며 이견을 좁히지 못하고 있는 상황이다 . ( 타사망 연동구간 불가로 인함 )
업계 관계자는 " 방통위가 이통 3 사 망연동 중재를 하려고 했지만 실패했다 " 며 " 이통 3 사의 입장 차이가
확연한 상황에서 서로 양보하지 않는 한 VoLTE 연동은 기약이 없다 " 고 설명했다 .
이처럼 이통 3 사가 망연동 협상에 대립각을 세우는 이유는 VoLTE 를 구현하는 IMS(IP 멀티미디어시스템 )
장비가 서로 호환돼야 하는데 각 사별로 의견 차이가 크기 때문이다 . (2013 년 4 월 기사 )
203

---

## Page 204

V. VOLTE ALL-IP 기반의 LTE 이용한 음성서비스 , VoLTE
가 . VoLTE(Voice over LTE) 개념
- 음성과 데이터의 구분이 없어지는 ALL - IP 방식의 LTE(4G 이동통신 ) 를 통한 음성서비스
- 4G 기반으로 같은 데이터 전송망을 이용 음성 , 데이터를 동일 패킷으로 전송할 수 있어 영상과 융합
한 서비스가 가능한 기술
204

---

## Page 205

나 . VoLTE 의 주요기술요소
기술요소
설명
- IP Multimedia Subsystem (Appendix 참조 )
*IMS
- 음성 , 오디오 , 비디오 , 데이터 등의 멀티미디어 콘텐츠를 IP 로 전송하기 위한 프레임워크
- IP 멀티미디어 서비스를 위한 호제어를 위한 프로토콜
SIP
- 송수신간의 session 을 설정하는데 사용하는 호연결 프로토콜
- 솔루션 을 통한 멀티미디어 커뮤니케이션 서비스 구현 을 MMtel 이라고 부름
MMTel
- 멀티미디어 통신구현 가능토록 지원하는 솔루션
- MultiMedia Telephony service (MMTel)
LTE-A(Advance)
1. 정의 : 다른 대역의 LTE 주파수 두 개를 묶어서 기존 LTE 보다 속도가 두 배 빠른 서비스 ( 약 150Mbps) 를
제공하는 기술
2. 현황 : 기존 LTE 이론상 75Mbps( 초당 75MB) 지만 , LTE - A 는 150Mps 로 800M 짜리 영화한편받을때 약
43 초 , 3G 는 7 분 24 초 , LTE 는 1 분 25 초소요
3. 적용 : LTE - A 서비스를 이용하려면 전용단말기를 새로구입해야 함 .
삼성전자 : 갤럭시 S4 - LTE - A 국내출시 준비중 ( 기존 갤럭시 S4 에 LTE - A 칩을 탑재 )
4. 연관 : LTE 속도를 높일 수 있는 또하나 방법은 , 주파수를 두 배로 넓히는 것 .
기존 보유한 주파수 옆에 새 주파수를 나란히 붙여 2 차선을 만드는 광대역화 방식 .
205

---

## Page 206

[ 참고 ] LTE - U(Unlicensed)
비면허 대역에서의 LTE
롱텀에벌루션 (LTE) 보다 4 배 빠른 ‘ LTE - U’ 기술 서비스
- 이 기술은 기존 와이파이 주파수 대역을 LTE 주파수로 활용하는 방식이다 . 전체 LTE 주파수 대역이 대
폭 늘어나 속도가 빨라지는 효과가 있다 .
LG 유플러스는 와이파이 주파수인 5.8 ㎓ 대역 20 ㎒ 폭과 2.6 ㎓ 광대역 LTE 20 ㎒ 폭을 묶어 총 40 ㎒ 폭을
만들어냈다 . 내려받기 속도는 최고 300Mbps 에 달한다 .
- 와이파이 AP 신호와 LTE 기지국 신호를 물리적으로 묶는 ‘ 와이파이 +LTE’ 이종망 묶음기술
- 와이파이 주파수 대역 자체를 LTE 로 활용한 기술 서비스를 말함 .
206

---

## Page 207

총 사업비 1 조 8000 억원 규모의 LTE - R 사업이 부산지하철 1 호선의 사업 발주를 시작으로 통신 업계 최
대 이슈로 떠오르고 있다 . 재난망에 사용될 PS - LTE 규격이 LTE - R 과 유사하기 때문에 재난망 추진 업체
대부분이 LTE - R 수주전을 병행 추진하고 있다 .
1. 열차제어시스템을 위한 LTE, LTE - R 의 개요
가 . LTE - R((Long Term Evolution - Railway) 의 정의
- 열차제어 및 철도의 음성 및 영상 서비스를 제공을 위해 LTE 기반의 철도용 차세대 통합 무선망
나 . LTE - R 의 특징
특징 설명
PCRF 정책관리시스템 ( Policy Charging & Rule Function) 를 이용한 우선 순위 설정 .
VPN IPSec VPN 활용을 통한 보안 적용 .
고신뢰성 철도 제어 시스템 오류는 대형 사고 발생 – 통화실패 , 열차정지 , 긴급정지 , 주파수 간섭 등
고속이동 350km/h 이상 속도에서의 핸드 오버 환경의 안정성 제공 .
700MHz PS-LTE 와 동일 주파수 대역을 사용하여 장비 호환 가능 .
207

---

## Page 208

II. LTE-R 의 구축 개념도와 요구사항
가 . LTE - R 의 구축 개념도
LTE 기반의 백홀에 기존 통신망을 수용하고 차상에 인터넷 서버 및 메인랙을 설치하고 WDS 를 통해
차량 내 Wi - Fi 사용자 등에게 광대역 서비스를 제공하는 형태 (Johann Garsternauer , 2010 인용 )
208

---

## Page 209

나 . LTE - R 의 요구사항
.
내용
분류 항목
개별 , 공공긴급 , 방송 , 그룹 , 다자간 , 정보 전송
음성 / 영상
데이터 멀티미디어 메시지 , 일반 데이터 , 열차 제어
기능
기능 어드레싱 , 위치기반 어드레싱 , 철도 긴급전화 , 입환모드 ,
철도 특화
직접통신
선로 제한 속도에서 통신 제공
커버리지
긴급통화 2 초 이내 100% 등
통화 설정
성공률은 99% 이상
비기능 핸드오버 , 호접속
99% 이상의 신뢰성과 가장 높은 우선순위
열차제어 데이터
이중화를 통한 High Availability 제공
HA
209

---

## Page 210

PS-LTE
기출문제
I. 국내의 재난 및 안전관리가 매우 중요한 영역으로 부상하고 있다 . 재난 및 안전관리를
위한 ICT 측면에서의 핵심기술을 설명하시오 .(108 회 , 컴퓨터시스템응용기술사 , 2 교시 )
5 국가재난안전통신망 , PS - LTE
문제 미래창조과학부 차세대 국가재난안전통신망 ( 이하 재난망 ) 기술방식 선정을 위하여
기술방식 정보제안서를 6 월 20 일 ( 금 ) 부터 모집한다고 밝혔다 . 국가재난안전통신망 구축을
위한 PS - LTE 네트워크 개념도와 주요 기술 , 기술방식 선정을 위한 통신 사업자들의
정보제안서 사항에 대해 설명하시오 .
정의 LTE 에 재난대응 무선 교신기술을 접목한 공공안전 통신망
키워드 PS-LTE (Public Safety - Long Term Evolution), 자가망 + 상용망 , 상호운용성 , SOP(Standard
Operating Procedure), LTE 주요 기술
출제배경 미래부 , 차세대 국가재난안전통신망 기술방식 선정을 위한 정보제안서 공개 모집
답안작성 전략 6 월 및 7 월에 진행된 정보제안서 내용 포함 , PS - LTE 목차 구성
참고문헌 김홍종 기술사 ( 제 99 회 정보관리기술사 ) 모의고사 ,
공공안전통신에서의 LTE 의 기술적 요구사항 ( 이순화 , 윤재선 ) 정보통신산업진흥원
210
출제자 강정배 PE ( 제 78 회 정보관리 / kangjungbae@naver . com)

---

## Page 211

I. LTE 기술을 기반으로 하는 공공안전 (Public Safety) 통신망 , PS - LTE
( Public Safety - Long Term Evolution ) 의 정의
- 화재 , 홍수 , 지진 , 해일 등 재형 재난 발생 시 국가 차원의 신속하고 효율적인 재난 관리를 위해 재난
- 관련 기관에 적합한 무선 통신망을 4 세대 이동통신 표준인 LTE 에 재난대응 무선 교신기술
II. PS - LTE 네트워크 개념도
LTE 기술과 IMS 기반의 플랫폼을 채택하여 All IP 기반의 패킷 기반 단일 LTE 망에서 기존의 PPT
음성서비스와 데이터서비스를 함께 제공하는 PS - LTE 네트워크 개념도
211

---

## Page 212

관
제
센
터
212

---

## Page 213

PS-LTE 네트워크 주요 기술
구분 내용
- 기존 기술에 멀티케리어와 캐리어 어그리게이션 기술 적용하여 다자간 통화가 가능
한 ‘ 그룹 통화 ’, 단밀기간 ‘ 직접 통화 ’ 적용
LTE 기술 - OA&M (Operation, Administration & Maintenance): 기지국 상태를 관리자가 확인
할 수 있도록 − Link performance monitoring, Fault detection and fault signaling 처
리
- 상호운용성 지원을 위한 PS - LTE 와 민간 사업자간의 공중망간 로밍 서비스
상호운용성
- 기존 재난망 ( 예 - 경찰과 소방방재청이 쓰는 테트라 )' 연동
재난안전통신 폭주를 대비해 전담 주파수 활용 대응책을 강구 및 구축 비용을 최소화
폭주 대비 하려면 가능한 1 GHz 이하의 대역이 필요하며 , 주파수 이용 효율성을 높이기 위해 다른
공공서비스 수요와 함께 쓸 수 있는 주파수 대역을 발굴
3 GPP 의 인증과 보안에 관련된 공통적인 기술표준들이 PS - LTE 대부분 동일하게 사용
됨
- IMSI(International Mobile Subscriber Identity 을 통해 , 전화번호를 통해 해당
보안 기술
가입자를 식별하게 하는 15 자의 Digit 으로 구성됨 .
- HSS(Home Subscriber Server): 이동성 관리 , 통화 및 세션 확립 지원 , 사용자 인증
및 접근성 승인 기능성을 지원
SOP(Standard Operating Procedure) 를 반드시 수립하여 , 다양한 재난 시나리오를 만
SOP 운영 들고 , 이동통신업체 , 기관과 시뮬레이션을 진행하도록 하여 표준 운영 절차 마련하여
213
재난망의 안정성 확보

---

## Page 214

재난망 정보제안서 사항
구분 내용
'LTE 상용망 + 자가망 ' 하이브리드 방식을 재난망 기술방식 정보제안서 (RFI) 를 통해 제
안함 . 즉 기존의 LTE 기존망을 이용한 상용망 연동 제안
KT: 'LTE 상용망 + 자가망 + 기존망 ( 예 소방방재청에서 쓰는 TRS)' 방식 제안
SK 텔레콤 , 엘지유플러스 , KT LTE 자가망 + 상용망 기반으로 모두 제안
상용망 : 재난 현장에서 통신량 폭주 시에 대책 없음
재난망 제안
자가망 : LTE 재난 통신 전용망을 말함 , 단점으로 신규 망 구축 시 단점 대두됨
사용자 20 만 ~ 30 만명 추정 , 주파수 대역 : 700MHz 대역 사용의 10MHz
재난망 사용자
기관별로 특성에 맞게 설치된 ' 기존 재난망 ( 예 - 경찰과 소방방재청이 쓰는 테트라 )' 을
상호운용성
버리지 말고 상용망과 연동 사용 제안 .
2017 년 소방 , 경찰 , 해경 , 군 , 지방자치단체 등 재난 대응 관련 기관의 무선통신망을 통
합하는 ` 국가재난안전통신망 ( 재난통신망 )` 이 구축 완료
구축 일정 ( 예정 )
214

---

## Page 215

5G
III. 무선 Network 서비스
기출문제
1. IMT-2020/5G 에 대하여 설명하시오 .
( 컴퓨터시스템응용기술사 , 105 회 2 교시 )
215

---

## Page 216

I. 기존의 4G - LTE 시스템 대비 20 배 빠른 전송속도 구현 및 10 배 많은 다양한 디지털 디바이스 수용 ,
Real 3D 입체 영상 서비스 기술구현을 목표로 한 차세대 이동통신 기술
나 . 나 . IMT - 2020/5G 의 필요성
메가 트렌드 내용
 최근 멀티미디어 / 소셜네트워크 서비스에 대한 수요가 폭발적으로 증가
 사물인터넷의 등장으로 사물들 (Things) 의 숫자도 지속 증가
트래픽 양 증가
 모바일 브로드밴드 서비스의 지속적인 확장과 통신 기능이 부여된 사물들의
증대는 계속적인 트래픽 양의 증대를 야기
 모바일 디바이스들의 보급이 증가하는 것과 함께 , 새로운 미래 5G 모바일 서비
스 , IoT 서비스를 실현하기 위한 다양한 things
( 웨어러블 device, 센서 , 액추에이터 등 ) 의 보급 폭발적 증가
디바이스 수 증가
 이러한 서비스들이 점점 더 활성화 됨에 따라 모바일 디바이스와 다양한
connected things ( 커넥티드 사물 ) 의 숫자는 계속적으로 증가할 것으로 예상
 클라우드 컴퓨팅 시스템에 대한 사용자 수요의 증가에 따라 모바일 ( 퍼스널 ) 클
클라우드 의존성
라우드 컴퓨팅 시장을 겨냥한 다양한 솔루션들이 개발되면서 PC 시대에서 모
증가
바일 클라우드 컴퓨팅 시대로의 전이가 더욱 가속화될 것으로 예상
 증강현실 / 가상현실 , 초고정밀 위치기반 서비스 , 홀로그램 서비스 , 스마트 헬스
다양한 모바일 융합
케어 서비스 등 모바일 서비스를 기반으로 한 다양한 분야에서의 모바일 융합
서비스 등장
서비스들이 등장하고 있으며 , 이에 대한 추가적인 수요 또한 급증
216

---

## Page 217

II. IMT-2020/5G 의 주요 기술
217

---

## Page 218

후보기술 내용
기존 이동통신은 3GHz 이하의 낮은 주파수 대역에서 수십 MHz 대역폭을 이용 하
여 신호를 전송해야만 제한이 있었다 .
초고주파 광대역폭을 하지만 , 5G 에서는 센티미터파 (3GHz~30GHz), 밀리미터파 (30GHz~300GHz) 의
활용한 초고속 데이터 높은 주파수 대역에서 수백 MHz 이상의 광대역폭을 이용 하여 고속의 데이터 전송
전송기술 을 가능하게 된다 . 이렇게 초고주파 영역에서 광대역폭으로 신호를 전송시 기존보
다 더 빠른 속도의 신호 전송이 가능한 반면 , 전파의 경로 손실이 기존 대비 더 많
이 발생하게 되는 이슈가 발생된다 .
다수의 단말에게 별도의 용량을 갖는 신호를 안테나에서 방사되는 빔 Stream 으로
분리 및 전송하여 , LTE 의 MIMO 기술 대비 용량 증대 및 간섭 개선이 가능하게
대용량 다중 안테나
된다 .
기술
Massive MIMO 기술로 기지국에 고유 용량을 갖는 신호를 여러 안테나의
(Massive MIMO)
빔 Stream 으로 방사하더라도 실제로 수신 받는 단말은 단말 크기의 제약으로
내부에 다수 안테나 구현의 어려움이 있기에 소수의 Stream 만 수신이 가능하다 .
218

---

## Page 219

후보기술 내용
기존 Macro 커버리지 영역 내에 Traffic 이 대량으로 발생하는 소규모
Small Cell 구성 을
hot-spot 이나 빌딩 내에 Pico 및 Femto 와 같은 소형 기지국을 다수 설치 하여
통한 네트워크
HetNet (Heterogeneous Network) 기반 네트워크 용량을 증대하는 기술이다 .
용량 증대
기존 4G 에서도 HetNet 이 구성되었으나 , 초고주파 대역을 활용할 5G 에서는
기술
Small Cell 구성을 위한 HetNet 이 더 확대될 것으로 예상된다 .
기존 3G 에서는 음성신호의 품질을 보장하기 위해 디지털 신호를 코드기반
대역확산 CDMA 방식을 사용 하였고 ,
4G 에서는 높은 전송속도 확보를 위해 상대적으로 신호대 노이즈 성능이 우수한
직교 주파수 다중화 방식 (OFDMA) 방식을 사용해왔으나 , 5G 에서는 더 진보한
직교 주파수 다중화 방식과 전력 및 코드 다중화 방식을 추가하는 다양한 방식의
신규 이동통신 신호 처리 기술 (New Radio Access Technology) 이 논의 되고 있다 .
혁신적인 이동통신
신호처리 기술
219

---

## Page 220

후보기술 내용
5G 네트워크 운용 기술은 이동통신망을 구성하는 장비 ( 기지국 , RRU 등 ) 의 운용에
5G 네트워크 운용 필요한 주요 기능을 자동화하여 네트워크 스스로 최적의 초기 설정 및 운용 , 자율
기술 적인 유지 / 보수 등을 수행하도록 만들어 진 차세대 네트워크 운용 기술이다 .
(5G Operation 기존 4G Network 에서는 LTE 기반 자동 운용 기술 SON (Self Organizing
& Management) Network) 이 도입되었고 자동 구성 (Self Configuration), 자동 최적화 (Self -
Optimization), 자동 복구 (Self - Healing) 을 지원하고 있다 .
220

---

## Page 221

II. IMT-2020/5G 의 후보기술 ( 위 II 단락에 일부 보완 정리 )
목표 후보기술 내용
단위 면적당 네트워크 용량을 증가시켜 향후 폭발적 트래픽
네트워크 고밀도화
(Network Densification)
증가를 수용
기지국에 수십 혹은 수백 개의 안테나를 장착하여 동일 자원
대규모 안테나 시스템
(Massive MIMO)
으로 수십 명의 사용자를 동시에 지원
샤논의 한계 (Shannon limit: 채널 용량공식 ) 에 따른 무선
전이중
용량
(In-band Full Duplex)
링크 전송량 증가를 목표로 전이중 전송방식 연구 진행
증대
셀의 용량 증대 달성을 위한 후보기술로 동일한 시간 , 주파수
비직교 다중접속 (NOMA)
(Non-Orthogonal Multiple , 공간 자원 상에 두 대 이상의 단말에 대한 데이터를 동시 전
Access)
송하여 주파수 효율을 향상시키는 기술
현재의 최대 20 ㎒ 대역폭보다 1,000 배 많은 수백㎒ ～ 수㎓
초광대역 지원
데이터를 수용하기 위한 광대역 무선 채널 지원 기술
5G 의 주요서비스인 실시간 게임 , 실감형 통신 , 원격 의료 , 원
저지연 / 고신뢰 무선전송
(Low Latency & 격 제어를 위한 저지연 고신뢰 무선전송 필요
High reliability)
LTE 시스템 대비 1/10 줄어든 0.1ms 의 TTI* 를 고려
저지연
5G 에서 단말간 통신은 공공안전은 물론 IoT 를 포함한 상용
단말 네트워킹
(Device Networking)
서비스 제공으로 무게 중심이 옮겨갈 것으로 예측
221

---

## Page 222

III. 4G(IMT-Advanced) 와 5G(IMT - 2020) 핵심 성능 비교
구분 4G (IMT-Advanced) 5G (IMT-2020)
최고 전송속도 1Gbps 20Gbps
이용자 체감 전송속도 10Mbps 100~1,000Mbps
주파수 효율성 - 4G 대시 3 배
고속 이동성 350Km/h 500km/h
전송지연 10ms 1ms
5
6
최다 기기 연결 수 10 개 /km2 10 개 /km2
에너지 효율성 - 4G 대비 100 배
면적당 데이터 처리용량 0.1Mbps/m2 10Mbps/m2
222

---

## Page 223

IV. 네트워크 운영기술 진화 방향
현재 이동통신망 구조 및 개선점
① Flat 네트워크 구조 : 교통 인프라를 설계할 때 , 인프라의 구조적인 이유로 생기는 병목구간 을 최소화 해야
한다 . 마찬가지로 , 현재 계층적인 (Hierarchical) 구조를 가진 4G 네트워크는 트래픽이 상위 한 구간으로 모여
서 병목현상 이 생길 수 밖에 없는 구조로 되어있기 때문에 , 폭증하는 데이터를 효율적으로 분산되어 트래픽
을 전달할 수 있는 Flat 한 네트워크 구조로 진화해 야 한다
223

---

## Page 224

V. IMT-2020/5G 의 주요 서비스
가 . IMT - 2020/5G 기술 영역 별 서비스 제공 방안
- 초고용량 , 초실시간 , 초연결 기술로 다양한 신규 서비스 제공 기반 마련
224

---

## Page 225

V. IMT-2020/5G 의 주요 서비스
나 . IMT - 2020/5G 영역 별 서비스 상세
영역 서비스 내용
상대방이 자신 바로 옆에 있는 것 같은 몰입형 통신경험 제공하는
몰입형 통신 실감형 서비스 8K-UHD 등 초고용량 영상 콘텐츠 , 3D 영상 , 홀로그램 서비스 확대
실감형 미디어 형태의 오감을 지원하는 양방향 맞춤형 콘텐츠 발전
원격 조종 로봇의 외부 환경 변화에 즉각적인 반응 , 원격 의료 서비스
실시간 원격
제어 서비스 등의 실시간 원격 제어 서비스
초 실시간
기기간
자동 주행 차량 등 기기간 통신 서비스 부각
통신 서비스
다양한 센싱 정보 , 상황 인지 , 지능화된 네트워크 정보 자원들과 융합
모바일 인식 및
증강현실
증강서비스
다양한 센서들을 통해 고도의 정밀도를 지원하는 수술 로봇
커넥티드
차량의 자율주행  정비 시스템 , 교통 제어
차량 서비스
공장 건물 설비 관리 시스템 : 에너지 절감 , 탄소배출 규제 , 위험물 누출
공장 건물 설비
사물인터넷
관리 시스템 : 방지 등을 자동화
원격으로 가전기기를 제어하거나 가정 내 기기간 통신으로 가사를 자동
스마트홈 서비스
화
빅데이터를 이용한 상황 인지 기술은 전체 사용자의 성향 , SNS 여론 및
상황 맞춤형
웹 정보들을 종합 분석하여 상황에 맞게 최적의 서비스를 제공하는 방
서비스
식으로 진화
빅데이터
현재 상황 인지뿐만 아니라 미래를 예측하여 최적의 서비스를 제공하고
인공 지능 서비스
, 적절한 예방 조치까지 제공하는 인공 지능 서비스로 진화
225

---

## Page 226

IMT-2020/5G 연구 단체 현황
5G Forum( 한국 ), ITU - R, 3GPP( 유럽 ), 5GPP( 유럽 ), IMT - 2020( 중국 ), ARIB( 일 본 ), 등 전세계적 관련 단
체에서 5G 네트워크에 대한 Vision 및 요구사항이 논의
226

---

## Page 227

NFC
기출문제
1. NFC(Near Field Communication) 의 규격 특성과 적용분야를 기술한 후 기존의 블루투스
(Bluetooth) 와 비교하여 설명하시오
( 관리 93 회 1 교시 )
2. NFC(Near Field Communication) 의 개념과 모드별 응용 영역에 대하여 설명하시오 .
( 관리 99 회 1 교시 )
4. 13.56MHz 대역 비접촉시 근거리 무선통신과 관련된 ISO/IEC 국제표준의 종류 , NFC(Near Field
Communication) 포럼에서 정의하고 있는 NFC 작동의 세 가지 모드 , NFC 기술의 응용분야에 대하여
설명하시오 .
( 컴시응 , 101 회 2 교시 )
5. HCE(Host Card Emulation) ( 정보관리 , 113, 1 교시 )
227

---

## Page 228

NFC
III. 무선 Network 서비스
I. 모바일 결제 서비스의 핵심기술 , NFC 의 개요
가 . NFC(Near Field Communication) 개념
- 10cm 이내의 거리에서 저전력으로 단말기간 데이터를 전송하는 근거리 무선통신 기술
- 13.56 ㎒ 대역의 주파수를 사용하고 초당 424Kbits 를 전송하는 RFID 의 유형
나 . NFC 의 특징
특 징 내 용
주파수 13.56MHz
속도 424Kbps
거리 최대 10cm( 확인 요망 )
표준 ISO/IEC 18092, ECMA, ETSI 국제표준
전력 저전력
보안 카드와 판독기사이 비밀키 기반 암호화
호환성 블루투스 , Wi - Fi/802.11,UWB 와 호환
통신방식 P2P 통신
운영모드 Active Type, Passive Type
내장방식 단말기반 ( 스마트카드 단말기에 내장 ), SIM 기반 (SIM 카드에 탑재 )
참여기업 NXP, 노키아 , 소니가 NFC 포럼을 설립하여 표준화 , 60 개 이상 글로벌 기업 참여
228

---

## Page 229

II. NFC 의 통신 동작방식
통신동작방식 내용
Active Communication Mode
발신기 (initiator) 와 목표기 (target) 모두 스스로 생성한 RF 필드를 사용하여 통신
능동통신모드
Initiator : 리더 역할 , Target : 태그 역할
리더와 리더간 P2P 통신
Passive Communication Mode
발신기가 RF 필드를 생성하고 목표기는 발신기의 명령에 load modulation
수동통신모드
Scheme 으로 응답
리더와 태그간 통신
229

---

## Page 230

III. NFC 작동 세가지 모드
Read/ Write Mode 에서의 RFID
데이터처리
전자 화폐 및 전자 티켓 ,
교통 카드 , 비접촉 신용
카드를 구현하는 모드
230

---

## Page 231

Host Card Emulation(HCE)
동작모드 설 명
호스트 카드 에뮬레이션 방식은 ' 보안요소 ' 를 통하지 않고 안드로이드 앱이 NFC 리더와
직접적으로 통신할 수 있도록 함으로써 카드사가 USIM 의 소유자인 네트워크 사업자의 협조
개념
없이 직접 신용카드 앱을 통해 결제를 수행할 수 있도록 한다 .
1) 마그네틱 띠에 저장된 카드 정보를 스마트폰이 아닌 클라우드에 보관한다 .
2) 스마트폰에는 어떤 카드 정보도 저장하지 않기 때문에 스마트폰을 분실하거나
특징
도난당해도 신용카드 정보가 유출되거나 부정 사용될 가능성이 낮다 .
개념도
1) 클라우드 기반 – 지불정보가 클라우드 서버에 저장
2) 보안요소 필요 없음 – 물리적 보안요소 (SE: Secure Element) 와 모바일거래 관리업체 (TSM;
기술요소
Trusted Service Manager) 의존 탈피 .
HCE 가 확산하면 통신사는 모바일 결제 서비스에서 통제력을 상실한다 .
효과
231

---

## Page 232

동작모드 설 명
NFC 활성화 상태에서 RFID Tag 정보를 인식 , 휴대폰이 카드 리더기로서 작동하는 모드
RFID 태그가 부착되어 있는 포스터에 NFC 스마트폰을 접촉하여 직접적인 정보획득을 할뿐
Read /
만 아니라 관련 웹사이트로의 연결까지 제공함으로써 새로운 서비스 연결이 가능해 짐 .
Write
RFID Tag 를 인식하기 위한 전력이 필요
두 대의 NFC 휴대폰이 카드 리더기로서 작동하여 데이터를 상호간에 전송할 수 있는 모드
스마트폰 간 데이터 전송 , PC 와 스마트폰 간 파일 공유 , 일반 가전제품과 스마트폰 간 정보
업데이트 등 NFC 를 지원하는 모든 기기 사이의 직접적인 데이터 통신을 한번의 접촉을 통
해 처리할 수 있으며 , 와이파이나블루투스 등 기존의 근거리 무선 통신과는 달리 ‘접촉’이라
Peer to Peer
는 물리적이고 직관적인 사용자 이용방식을 통해 구현되므로 매우 간편하게 데이터 통신을
연결할 수 있음 .
능동모드로서 데이터 전송을 위해 독자적인 RF 필드를 생성해야 하므로
전력소모량이 큼
232

---

## Page 233

IV. NFC 와 블루투스와의 비교
구분 NFC Bluetooth
표준 ISO/IEC 18092, ISO14443A IEEE 802.15.1
주파수 13.56MHz 2.4~2.5GHz
통신거리 20cm 이내 10m 이내
Topology Point to Point Point to Multipoint
전송속도 424Kbps 2.1Mbps
Set-Up 시간 0.1 초 이하 6 초 내외
RFID 호환성 가능 불가능
233

---

## Page 234

V. NFC 활성화를 위한 주요 적용분야
적용분야 설명
- 지접촉결제와 온라인 결제분야
- 비접촉분야는 현금결제를 대체하는 모
금융결제
바일 결제을 의미
분야
- 온라인결제는 온라인 계좌에 접속해 기
기간 통신으로 송금이 가능한 대체 수단
- 교통기관이나 이벤트 등의 티켓팅
- 이통망의 접속권한을 언더 pc, 차량등
액세스컨트롤분야 에 접속
- 단말간에 무선통신 접속을 간편하게 셋
업하는 페이링 분야
- 휴대폰에 저장된 개인정보를 이용해 사
개인정보 용자 인증 실행
관리 -GPS 기능과 연계한 위치정보를 전송하
는 ‘ 지역마케팅 ’
234

---

## Page 235

Wi-Fi Direct
기출문제
1. Wi-Fi Direct
( 조직응용 , 95 회 1 교시 )
235

---

## Page 236

I. 무선랜 기술의 와이파이 발전 모형 Wi - Fi Direct
가 . Wi - Fi Direct 개념
- 와이파이 다이렉트 (Wi - Fi Direct) 는 Wi - Fi Alliance 기기 간 접속을 지원하는 Wi - Fi Direct AP 를 거치지
않고 Wi - Fi 를 탑재한 기기간 직접적으로 통신하는 기술
나 . Wi - Fi Direct 특징
특징 설명
기존 무선통신 기술인 전송거리도 블루투스 보다 10 배 이상 넓어 100 m 이내에 있는 휴대폰과
블루투스 보다 넓은 전송범위 프린터 , 컴퓨터 , 헤드폰 등을 동시에 연결할 수 있음
현재 사용되는 블루투스가 최대 3 Mbps 의 전송속도를 지원하는 데 비해
기존 무선통신 기술인
와이파이 다이렉트는 802 . 11 n 무선기술을 활용 , 최대 250 Mbps 의 속도
블루투스 보다 빠른 속도
로 데이터를 주고받을 수 있음
무선공유기 ( 액세스포인트 ) 가 휴대폰과 TV 에 모두 와이파이 기능이 장착돼 있어도 서로 데이터를 전
필요 없음 송하려면 액세스포인트를 사용해야 합니다
최신 무선랜 규격인 802 . 11 n 은 물론 WPA 2 , WPS 등과 같은 최신 암호
보안강화
화 기술 사용
236

---

## Page 237

II. II. Wi-Fi Direct 의 구성도 및 Bluetooth 와의 비교
가 . Wi - Fi Direct 의 개념도
- AP 를 통한 인터넷 접속 및 네트워크 (LAN) 을 구성하는 동시에 주변의 디지털 카메라 , MP3 플레이어 ,
게임기 , 프린터 , 노트북 나아가 TV 등의 기기와 네트워크 (PAN) 을 구성
- Wi-Fi Direct 는 기존 무선랜 기술이 AP 를 중심으로 네트워킹이 되었던 한계에서 벗어나 기기와 기기가
직접 접속하여 데이터를 주고 받을 수 있음
237

---

## Page 238

나 . Bluetooth 와 비교
구분 블루투스 V3.0+HS Wi-Fi Direct
전송 속도 24Mbps 최대 300Mbps
전송범위 10m 이내 100m 이내
전력 소모 블루투스 우세
제품군 Wi-Fi Direct 우세
238

---

## Page 239

Zing
출제예상문제
1. Zing( 초고속 NFC) 기술에 대해 설명하시오 . (KPC 모의고사 )
출제의도 107 회 정보통신기술사 기출문제로 교차 출제 대비
 장치나 기계간에 기가급 정보를 실시간으로 전송하는 차세대 초근접 직접통신기술
핵심 내용
 초근접 ( 10 cm 이내 ), 차세대 NFC, 60 GHz 비면허 대역 , 5 Gbps/ 3 Gbps ( 리더 / 태그 ),
키워드
30 / 300 mW ( 리더 / 태그 )
1. 초근접 직접통신 초고속 NFC 기술 , Zing 의 개요
목차예시 2. Zing ( 초고속 NFC) 개념도 및 적용 기술
3. 초근접 직접통신 기술 동향
① Zing 개념 , 이해 부족 ( 1 ~ 2 점 )
채점 점수
② Zing 기본 이해 수준 ( 3 ~ 5 점 )
③ Zing 정확한 기술 제시 ( 5 ~ 6 점 )
가이드
④ Zing 추가요소 설명 (+ α )
초근접 직접통신 기술의 동향과 초고속 NFC 기술
참고문헌 ( 한국통신학회지 제 30 권 제 12 호 , 2013 . 11 )
＇ 13 년 방송통신기술개발사업 신규과제 RFP(KCA, 2013 년 )
239

---

## Page 240

I. 초근접 직접통신 초고속 NFC 기술 , Zing 의 개요
가 . Zing 의 개념
- 장치 (Device) 나 기계 (Machine) 등 온갖 사물로부터의 기가급 대용량 정보를 실시간으로 순간 전송할
수 있는 차세대 초근접 직접 통신 기술
나 . Zing 의 특징
국산기술 한국전자통신연구원에서 연구되고 있음
근접거리에서 무전원으로 실시간 데이터 전송을 활용하면 주변 무선장치들과의
주파수 활용도 증가
간섭 영향이 거의 없으므로 주파수 활용도가 매우 높음
태그형인 경우 , 필요한 순간에만 에너지를 자기유도 방식으로 태그에 전달하므로
유지보수 용이
사물에 대한 전원관리 등의 유지보수 및 운용이 거의 요구되지 않음
차세대 NFC 기술 초고속 , 저전력의 차세대 NFC 기술
240

---

## Page 241

II. 개념도
Zing 기술은 초고속 저전력 차세대 NFC 기술로서 현재 한국전자통신연구원에서 정부 사업으로 연구하
고 있다 . Zing 기술은 10 cm 이내 의 근접거리에서 60 GHz 비면허 대역을 이용 하여 수 Gbps 이상의
전송 속도를 저전력 ( 30mW( milliwatt ) 이내 ) 으로 제공하는 것 을 목표로 한다
241

---

## Page 242

II. 적용 기술 비교
항목 Zing( 순간전송 ) NFC
주파수 60 GHz 13.56 MHz
통신거리 10 cm 이내 10 cm 이내
태그 적용 ( 태그용 소형 안테나 RF) :
전송속도 3 Gbps 424 kbps
리더용 적용 : 5 Gbps
OOK/QPSK
ASK
( 반송파를 1(On) 과 0(Off) 으로 켰다
껏다하여 정보를 전송하는 Binary ( 디지털 신호 (0,1 등 ) 값에 따라 미리
ASK 변조 방식 ) 약속된 진폭의 정현파를 전송하면 ,
변조방식 - 수신측에서는 약속된 원래의
이진 값으로 복원시켜주는 방식 ,
진폭 편이 변조 (Amplitude Shift
Keying) 방식 )
태그 : 30 mW
소모전력 50 mW
리더 : 300 mW
전파간섭 무 무
전원 무전원 무전원
태그 : 10 pJ /bit
에너지효율 118 nJ/bit
리더 : 60 pJ /bit
예 ) 기존 LTE 보다 5G 는 1000 배 개선된 에너지 효율 기술 (400 nJ /bit → 400 pJ /bit) 향상을 이룬다는
목표다 .
242

---

## Page 243

Z-wave Stack 구조 ( 계층적 구조 )
응용 (Application) 계층
- parameter
네트워크 (Network) 계층
- 라우팅을 통한 토플로지 발견
(32-bit Home ID, 8-bit Node ID)
전송 (Transport) 계층
- 에러 검출 , 재전송
맥 (MAC) 계층
- MAC Frame
물리계층 (MEDIA) 계층
- 미디어 지칭
243

---

## Page 244

Chapter IV Network 구조 및 서비스
Chapter IV. Network 구조 및 서비스
IPv6 상
Mobile IP 상
상
WPAN
스마트 홈 중
Ad-hoc Network 중
VoIP 중
IMS 하
VDI 중
SON 하
244

---

## Page 245

1. IPv6
현재 쓰이는 인터넷 주소체계는 IPv4( 인터넷 프로토콜 버전 4) 인데 전 세계적으로 2~3 년 내
고갈될 위기에 처해 있다는 게 전문가들 의견이다 . 정부는 지난 2004 년부터 인터넷 주소 체계
인 IPv4 가 고갈될 것을 대비해 IPv6 확산 정책을 추진해 왔다 . 하지만 올해 들어서야 SK 텔레콤
이 사실상 ‘총대’를 메고 삼성전자와 함께 IPv6 기반의 롱텀에볼루션 (LTE) 상용 서비스를 갤럭
시노트 4 에 적용했고 LG 전자 스마트폰인 AKA 에 이를 적용하는 데 성공했다 . 현재 국내 IPv6
이용률은 0.01% 에 불과하다 . 반면 미국은 물론 스위스나 일본 등 선진국에서는 이용률이 10%
대 안팎에 이르고 있다 .
245

---

## Page 246

1. IPv6
IV. 차세대 Network 구조 및 서비스
한국이 이처럼 뒤처진 것은 지난 10 여 년 동안 통신업계와 포털업계 등이 적극적으로 나서지
않았기 때문이다 . IPv6 서비스를 이용하려면 단말기 , 네트워크 장비 , 서비스 서버 등에 모두 새
로운 IP 주소가 부여돼야 하지만 각각 떠넘기기에 급급했다 .
이동통신사는 인터넷 서비스업체가 웹 기반 환경부터 바꿔야 한다고 주장했고 , 포털업계는 모
바일 · 통신 기술 발전에 따라 이통사가 먼저 나서야 한다는 주장을 내세웠다 .
구축 비용이 많이 든다는 점도 걸림돌이다 .
미래창조과학부에 따르면 민간영역의 IPv6 전환 비용은 총 2 조 1000 억원에 달한다 . 전진형 한
국인터넷진흥원 연구원은 “해외 주요국은 IPv6 전환계획 로드맵을 발표하고 공공 분야에서 이
를 우선 도입해 관련 장비 기술에 대한 수요 진작을 통한 IT 산업 활성화 정책을 내놓고 있지만
한국은 걸음마 단계에 머물고 있다”고 지적했다 . 정지훈 경희사이버대 교수는 “단말기 , 라우터
등 IPv6 를 지원하는 제반 서비스가 조속히 갖춰져야 할 것”이라고 말했다 .
246

---

## Page 247

1. IPv6
IV. 차세대 Network 구조 및 서비스
기출문제
1. IPv4 에 대비하여 IPv6 의 기술적 특성을 서술 하시오 .
( 정보관리 84 회 1 교시 )
2. FMIPv6
( 조직응용 80 회 1 교시 )
3. IPv6 의 특징을 기술하고 , IPv6 환경에서 나타날 수 있는 보안 문제점들을 기술 하시오 .
( 조직응용 75 회 4 교시 )
4. IPv6 ( 정보관리 71 회 1 교시 )
5. IPv4(Internet Protocol Version 4) 와 IPv6(Internet Protocol Version 6) 의 특성 에 대하여
비교 설명하시오 .
( 조직응용 69 회 3 교시 )
247

---

## Page 248

1. IPv6
IV. 차세대 Network 구조 및 서비스
I. 차세대 인터넷 주소체계 , IPv6 의 개념
가 . IPv6(Internet Protocol Version 6) 의 정의
- 현재 IPv4 가 가지고 있는 주소고갈 , 보안성 , 이동성 지원 등의 문제점을 해결하기 위해서 개발된
128bit 주소체계를 갖는 차세대 인터넷 프로토콜
나 . 현 IPv4 주소체계의 문제점
- 최근 인터넷 호스트 (PC, 가전 , 이동전화 등 ) 증가로 인한 주소의 고갈 현상 심화
- 2010 년경 모든 주소의 고갈이 예상
- Class 별 할당방식으로 인한 주소의 낭비가 심함 (A,B,C : 할당 IP, D: 연구용 )
- IPv4 의 비효율적인 헤더사용
다 . IPv6 특징
- 128 bit 주소 체계 , 헤더 포맷 간소화 , 확장헤더 , 보안강화 , QoS 보장 , 멀티캐스팅 표준 제공
- Mobile 지원
248

---

## Page 249

II. IPv4 의 주소 클래스와 클래스의 단점
11011111.00101111.1001001.11111110
가 . IPv4 의 주소 클래스 구조
첫 비트가 1110, 28bit 는 multicast id 로서
멀티캐스트 주소에 등록된 host 만 이 패킷을 받을
수 있음
1) net - id 는 네트워크 그룹이 틀려서 , 라우팅을 해야되며 , net - id 가 같은 경우에는 라우팅 기능 필요
없음
2) 클래스 A 는 7 비트의 netid 와 24 비트 (256*256*256 개 ) 의 hostid 로 나누어져 있음
3) 클래스 B 는 중간 크기의 네트워크에서 사용
( 예 ) KT 등 2 - 3 업체
4) 클래스 C 는 netid3 개 사용 (xxx.xxx.xxx.23)
( 예 ) 옥션 211.233.17.xxx ~ 211.115.78.xxx, 222, 232 3 개 사용 .
5) 클래스 D 는 , 224.x.x.x 로 시작하는 IP 주소를 클래스 D 주소라고 부름 ; 멀티캐스트 전송용으로 사용
249

---

## Page 250

III. IPv6 와 IPv4 비교
구분 IPV4 IPV6
체 계 32bit 128bit
8 비트씩 4 부분 으로 나눠 16 비트씩 8 부분 으로 나눠
표시방법
10 진수로 표시 16 진수로 표시
IPv6 는 128 비트의 주소체계로
주소개수 약 42 억개
3.4*10^38 개 주소수
A.B.C.D 등 클래스 단위의 네트워크 규모 및 단말기수에 따른
주소할당
비순차적 할당 ( 비효율적 ) 순차적 할당 ( 효율적 )
등급별 . 서비스별로 패킷 구분 가능해 품
품질제어 품질보장 곤란
질보장 용이
보안기능 IPSec 프로토콜 별도 설치 확장기능에서 기본 제공
Plug & Play 지원 안함 지원함
Mobile IP 곤란 용이
웹 캐스팅 곤란 용이
250

---

## Page 251

IV. IPv4/IPv6 변환기술
가 . IPv4/IPv6 변환기술의 개념
- IPv4 전용호스트와 IPv6 전용호스트간의 통신을 위한 기술이며 주소와 헤더의 변환을 수행
나 . IPv4/IPv6 변환기술
IPv4/IPv6
- IP 계층에 IPV4 와 IPV6 와 기능 모두 설치
DUAL
- IPV4/IPV6 의 라우터에 장착
STACK
- 프로토콜 스택수정으로 인한 과다한 비용
( 라우팅관점 )
- IPv6 헤더의 캡슐화 로 실제로 IPv4 인터넷
환경상에서 IPV6 패킷을 전달 DTI (Dynamic
IPv4/IPv6
Tunnel Interface)
터널링
- IPv6 노드간에 IPv6 패킷을 IPv4 패킷 속에
( 네트워크 )
포함시켜 IPv4 망상으로 전달
- 구현이 어려우며 , 복잡한 동작과정
- 구현이 용이 : 변환방식이 투명 , 변환절차간단
IPv4/IPv6 - IPV4/IPV6 호스트의 프로토콜 스택에 대한 수정
변환 필요 없음 .
(G/W 관점 ) - IPv4/IPv6 의 라우터에 장착
- 종단 라우터에서 IPv6 를 IPv4 로 변환 ( 매핑 )
251

---

## Page 252

V. IPv6 도입에 따른 문제점 및 해결 방안
구분 문제점 해결방안
- IPv4 에서 IPv6 로 자연스러운 전환이
어려움
- 전환에 대한 국가적인 지원이 필요
IPv4->IPv6 - IPv6 로의 전환 시 선도 국가 역할이
- 공존에 대한 모델 제시와 테스트
전환 문제 필요
베드 구축
- IP 의 사용 증대로 예상보다 조기 고갈될
가능성이 높음
- HOA 을 이용한 DoS 공격 가능 - IPSec 을 이용한 보안 및 DoS 공격
Mobile 보안 - 라우팅 헤더를 이용한 방화벽 통과 방어
이슈 - All IP 로 인한 지속적인 보안 취약점 - RR 을 이용한 바인딩 Update 대응
노출 - 공개키 기반의 사용자 인증 강화
- 관련 장비 및 어플리케이션의 국제 - 홈네트워크 , 휴대인터넷 , IPTV 등
활성화 정책 경쟁력 심화 킬러어플리케이션의 전략적 확보 필요
- IPv6 의 킬러 어플리케이션의 필요 - 법적 , 제도적 활성화 정책 필요
252

---

## Page 253

V. IPv4/IPv6 전환기술의 보안 취약점 분석 및 보안성 강화 방안
구분 문제점 해결방안
- 인증기술 ( 단말 / 라우터 및 서버 )
- IPv4 와 IPv6 의 보안수준이 다른 경우
- 접근제어 ( 단말 / 라우터 및 서버 접근제어 -
보안 취약점 발생 ACL 설정 )
듀얼 스택 - 의도 하지 않은 터널링 발생 가능 - 침입탐지 / 대응 ( 트래픽 관제 및 대응 )
- 라우터 위장 공격 가능 - IPv4 에서 요구되는 보안 수준이 IPv6 상
에서도 동일하게 적용 되어 야 함
- 조작된 패킷에 의한 보안 취약점 발생
- 호스트 및 라우터의 상호인증 필요
- 관리자는 6to4 주소 간에 오용 릴레이
- PC 등 6to4 를 구현 및 터널링 적용
6to4 하지 않도록 라우터 설정
- 릴레이 ( 경유 ) 오용으로 인한 보안 취약성
- 인가된 6to4 라우터 인지 인증 필요
- 터널링 된 패킷에 대한 패킷 필터 , 안티바
터널링 공통 - 비인가된 터널링 생성 으로 인한 보안
이러스 , 방화벽 , IDS, 패킷 필터링정책을 통
사항 취약점 발생
해 비 인가된 터널링 트래픽 차단
- DAD(Duplicate Address Detection) 를 - 할당된 IPv6 주소가 DAD 검사에 실패했
을 때 그 주소를 사용할 수 없음을 명시하
악용한 서비스거부 공격 의 가능성
DAD 를 통한
고 있고 . 이를 악용하여 사용자는 DAD 검
공격 - 자동주소 설정기능을 이용해 IPv6 주소
사가 실패하도록 계속해서 고의적인 메시
를 생성하는 모든 노드들은 DAD 메커니즘
( 주소중복
지를 전송함으로써 서비스거부 공격을 발
을 이용하여 주소의 유효성 여부를 검증받
검사 ) - >
생시킬 수 있는 문제 해결 필요 .
아야 함 ( 일반적으로 부팅 시 자동으로 가장
자동설정
- DAD 의 실패 시의 처리 및 DoS 해결
먼저 생성되는 링크 로컬 주소를 검증하기
위해 DAD 가 처음으로 실행 ) 방안 제공
253

---

## Page 254

V. IPv4/IPv6 전환기술의 보안 취약점 분석 및 보안성 강화 방안
254

---

## Page 255

2. Mobile IP
IV. 차세대 Network 구조 및 서비스
기출문제
1. Mobile IPv6 in IPv4 터널링 기술현황 에 대해서 설명하시오
( 조직응용 77 회 2 교시 )
2. Mobile IP 에는 Mobile IPv4, 6 가 있다 . 이들의 특징을 비교하고 , Mobile IPv4 와 Mobile IPv6 의
연동방법을 제시하시오 .
( 조직응용 74 회 4 교시 )
3. FMIPv6 ( 조직응용 80 회 1 교시 )
4. 삼각 경로 설정 및 문제점 해결방안을 설명하시오 . ( 조직응용 81 회 2 교시 )
255

---

## Page 256

2. Mobile IP
IV. 차세대 Network 구조 및 서비스
I. 단말의 이동성을 보장하는 기술 , Mobile IP 개요
가 . Mobile IP 의 정의
- 기존 IP 를 확장하여 이동 컴퓨터에게 유일한 주소를 제공하여 , 어느 위치에서든 이동 컴퓨터의
Datagram 을 효율적으로 전달할 수 있게 하는 기술
- 차세대 이동통신 망에서 인터넷 가입자가 휴대 단말기를 이용하여 인터넷 서비스에 접속하면서
다른 망으로 이동 시 사용중인 IP 주소를 그대로 사용하며 , 통신의 끊김 없이 유지시켜주는 기술
나 . Mobile IP 의 등장 배경
- 이동 중의 끊김 없는 서비스 유지
[ 참고 ] Hand off: 이동전화 이용자가 통화를 하면서 하나의 기지국에서 다른 기지국으로 이동할 때 통화
채널을 자동으로 전환해주어 통화가 끊기지 않고 계속되도록 해주는 기능 .
기지국마다 보통 2~3km 의 통화가능 반경 ( 셀 ) 을 가지고 있는데 만일 핸드오프가 이뤄지지 않을 경우
휴대폰이 해당 반경을 벗어나면 바로 통화가 끊기게 된다 . 따라서 기지국은 옥상이나 도로변에 설치하고
기지국끼리는 반경이 약간 겹치게 설계한다 . 또 반경 안에 음영지역 ( 산간 · 지하 등 통신신호가 약해
통화가 어려운 지역 ) 이 있으면 미니셀을 만들어 핸드오프한다 .
- Hand over: 이동 단말기 이용자의 통화가 끊어지지 않고 무선 기지국으로부터 전파가 미치는 범위인
존 (zone) 을 넘어서 이동할 수 있는 기능 256

---

## Page 257

II. Mobile IP 의 동작 원리
( 삼각라우팅방식 )
CN( Correspondent Node)
MN 에게 메시지를 보내는 상대방 단말
①
터널링
HA FA
② 전송
③ MN 에게 전달
MN( Mobile Node): 이동하는 단말기
① CN 이 MN 에게 패킷을 전송하면 , HA ( 이동 단말이 원래 속해 있던 라우터 ) 가 패킷을 캡슐화하여
② FA 에 전송
③ 터널링되어 보내진 패킷들을 FA (MN 이 이동하는 곳의 일시적으로 소속되는 네트워크 라우터 ) 에
의해 de - tunneling 되어 MN 에게 전달됨
257

---

## Page 258

나 . Mobile IP 의 구성요소
구성요소 설명 및 특징
- Mobile Node
MN - 다른 네트워크로 이동하여 서비스를 요구하는 단말
- PC, Notebook, PDA 등의 이동단말기
- Home Agent
HA - 이동 단말이 원래 속해있던 네트워크의 라우터
- 이동 단말을 위해 Binding Repository 유지 , FA 로 터널링 역할
- Foreign Agent
FA - 이동 단말이 일시적으로 소속되는 네트워크의 라우터
- 이동 단말 (MN) 이 내부 네트워크로 들어오도록 가상 터널 구성
HoA - Home of Address; 초기에 할당 받은 IP address
- Care of Address
CoA - 이동 단말이 일시적으로 획득하는 IP 주소
( 이동한 곳의 사용하는 실제 주소 )
CN - CN (Correspondent Node): 상대 단말기
258

---

## Page 259

III. 삼각라우팅의 문제점 및 해결방안
가 . 삼각 라우팅 문제
- CN (Correspondent Node) 가 패킷을 HA 에게 보내고 , HA 는 MN 에 이동한 네트워크로 보내기
위해 , 패킷을 캡슐화하여 FA 로 전송 - > 전송 지연 (HA 를 거치므로 ) 및 패킷 손실 발생
나 . Binding Cache 를 이용한 삼각라우팅 문제점 해결 방법
- MN 의 위치이동 정보를 HA 가 가지는 것이 아니라 CN 이 Binding Cache 를 통해 관리
- CN 과 MN 의 직접 통신 가능하도록
- Binding 정보는 HOA (Home of Address; 초기 접속 주소 ) 와 CoA 로 구성
HoA CoA
CN
HA FA MN
259

---

## Page 260

IV. MIPv4 의 문제점 해결을 위한 MIPv6
가 . MIPv6(Mobile IPv6) 의 필요성
1) IPv6 에서의 Mobile IP, 기존 Mobile IPv4 의 문제점 해소
2) 기존 MIPv4 의 삼각 라우팅을 제거하고 라우팅 경로 재설정을 통해 효율 개선
3) Mobile IPv6 는 주소 자동 구성 , Neighbor Discovery 매커니즘을 사용하여 IP 계층의 이동성을
제공 (Neighbor Discovery Protocol(NDP) 을 이용하여 노드간 라우팅 정보 설정 )
나 . MIPv6 의 절차
순서 동작 설명
MN 이 인접 네트워크로 이동 , MN 이 라우터에 RA(Router
1 이동 감지 Advertisement; 메시지 ) 전송을 요청하는 Prefix( 주소구성정보 ) 및
구성정보 전송
CoA 획득 주소 자동 구성하여 CoA 획득
2
바인딩 업데이트 CoA 획득 후 BU (MN 이 CN 및 HA 에게 자신의 새로운 CoA 를 알려 줌 )
새로이 통신하는 CN 은 우선 HA 를 통하여 터널링 기반으로 MN 과 통신
3 데이터그램 전송
최초 통신 후 MN 이 CN 과 BU 를 요청하여 라우팅 재설정
4 라우팅 최적화 CN 은 바인딩 정보를 이용하여 HA 를 통하지 않고 MN 과 직접 통신
260

---

## Page 261

IV. FMIPv6(Fast Handover for Mobile IPv6)
가 . FMIPv6 ( Fast Handover for Mobile IPv6) 의 정의
- MIPv6 에서의 Handover Latency 최소화와 Packet 손실을 줄이기 위해 2 계층 핸드오버가 발생
하기 전에 3 계층 핸드오버를 미리 수행하는 메커니즘
- PAR 이 이동노드의 고속핸드오버를 위해 NAR 에게 HI(Handover Initiate) 를 전송하는 구조
나 . 주요 용어 설명
구성요소 세부내용
- Previous Access Router
PAR
- 이동노드가 이동 하기 전에 연결되어 있던 이동노드의 기본 라우터
- New Access Router
NAR - 이동 노드가 새로운 네트워크로 이동하였을 경우 이동 노드가 연결될 것으로
예상되는 기본 라우터
* 이동 노드는 메시지내에 포함된 새로운 액세스 라우터 (NAR) 의 프리픽스 (Prefix) 정보를 사용하여
새로운 서브넷에서 사용할 CoA 를 미리 생성한다 .
* HI: 두 가지 역할을 한다 . 하나는 NAR 에게 메시지에 포함된 이동 노드의 CoA 에 대한 주소 중복
검사 (Duplicate Address Detection, DAD ) 를 수행하도록 하기 위함이고 다른 하나는 PAR 과
NAR 간에 터널 을 설정하기 위함이다 .
261

---

## Page 262

IV. FMIPv6(Fast Handover for Mobile IPv6)
다 . FMIPv6 와 MIPv6 의 비교
항목 MIPv6 FMIPv6
핸드오버 2 계층 핸드오버 후 2 계층 핸드오버 시행 시
과정 3 계층 수행 3 계층 핸드오버를 수행
속도 핸드오버 지연 MIPv6 에 비해 빠름
패킷손실 핸드오버 동안 패킷 손실 가능 버퍼링 등으로 패킷 손실 적음
지연 등으로 실시간 서비스에 Fast Handover 로 VoIP 와 같은 실시간 서
서비스
지장 비스
262

---

## Page 263

3. WPAN
IV. 차세대 Network 구조 및 서비스
기출문제
1. 개인수준의 ( 근거리 ) 무선통신 프로토콜의 종류를 비교 설명하시오 .
( 정보관리 78 회 1 교시 )
2. 근거리 무선네트워크 기술 WPAN(Wireless Personal Area Network) 의 Bluetooth, UWB, Zigbee 를
비교하여 설명하시오 .
( 컴시응 , 113, 2 교시 )
263

---

## Page 264

3. WPAN
IV. 차세대 Network 구조 및 서비스
I. 근거리 무선 네트워크 기술 , WPAN 의 개요
가 . WPAN (Wireless Personal Area Network) 정의
- 정보통신기기나 디지털 가전 제품들 간의 유무선 접속장치 없이 (Ad - hoc Network 형태 ) 무선으로
연결해 주는 근거리 무선 네트워크 기술
- 무선 WPAN 는 10m 이내의 짧은 거리에 존재하는 컴퓨터와 주변기기 , 휴대폰 , 가전제품 등을 무선
으로 연결하여 이들 기기간의 통신을 지원함으로써 다양한 응용 서비스를 하게 하는 무선 네트워크
나 . WPAN 특징
- 저전력 소비 , 저비용 ( 저비용 Chip 사용 ), 단순한 구조
- 사용 편의성 (WPAN 영역에 접근하면 자동적으로 동기화 ) - > Ad - Hoc 네트워크
다 . 중요성
- 인터넷주소체계 (IPv6), 전자태그 (RFID), 개인무선망 (WPAN: Wireless Personal Area Network) 등은
디지털 미디어의 개인화 ( Personalization ) 를 한층 가속화하고 홈네트워크 / 텔레매틱스를 실현하는
중요한 기반 기술로 각광
- 유비쿼터스 패러다임 실현을 위한 핵심 기술
264

---

## Page 265

II. 무선 PAN 의 종류
가 . 무선 연결의 쌍방향 실시간 통신 Bluetooth 의 개요
1) 블루투스 (Bluetooth) 의 정의
- 근거리에 놓여있는 컴퓨터나 이동단말기 , 가전제품 등을 무선으로 연결하여 쌍방향 실시간
가능하게 하는 근거리 무선 데이터 통신 규격 또는 제품
- ISM 밴드 를 이용하여 10m 내외의 근거리 디바이스간 통신을 지원하기 위한 무선접속규격
[ 참고 ] Industrial Scientific Medical band: 산업 , 과학 , 의료용 기기에서 사용 가능한 주파수 대역
2) 블루투스 특징 ( 블루투스 Ver 1.1)
구 분 내 용
- Master-Slave 구조
네트워크 구성 - Master 가 활성화된 최대 7 개의 종속기 (slave) 와 망 구성
1 : N( 7 대까지 가능 )
- 주파수 호핑 방식 ( 패킷이 목적까지 도착하는 경로에 있어서 노드에서
전송방식
노드로 몇 번이고 연결이 이루어지는 전송 )
전력소모량 ( 저전력 ) - 대기상태 0 . 3 mA, 송수신시 30 mA 의 저소비 전력
전송속도 - 최대 723 Kbps 의 속도
간섭현상 - IEEE 802.11b 와 전파 간섭 현상 발생
265

---

## Page 266

3) 근거리 무선통신 기술의 대표주자인 블루투스의 발전 모형 Bluetooth 3.0
Bluetooth 3.0 개념
- 2009 년 4 월 21 일에 최초로 발표되었으며 가장 큰 특징은 802.11 PAL(Protocol Adaptation Layer) 를
채용하여 속도를 최대 24Mbps 로 향상시킨 근거리 무선접속기술 .
나 . Bluetooth 3.0 의 특징
특징 설명
802.11 PAL(Protocol Adaptation Layer) 를 채용해서 기존버전보다 속도를
속도향상
최대 24 Mbps 로 향상 시킴
용량확대 블루투스 기기간에 대용량 그림 , 동영상 , 파일 을 주고받을 수 있음
PC 를 모바일 기기로 동기화를 할 수 있고 프린터나 PC 로 많은 사진을 내려
PC& 모바일기기 동기화
받을 수 있음
저전력 내장된 전력 기능을 통해 전력소모를 크게 줄일 수 있음
[ 참고 ] 블루투스 3.0 은 이전세대의 독자적인 설계를 벗어나 IEEE 802.11 PAL(Protocol Adaptation
Layer) 를 채용 , 실제 데이터를 전송할 땐 와이파이 (Wi - Fi) 프로토콜을 이용한다 . 때문에 현재 ‘ 블루투스
2.1+EDR’(3Mbps) 보다 10 배 이상 빨라짐 .
266

---

## Page 267

[ 참고 ] 블루투스 기술의 발전과정
267

---

## Page 268

4) Low Energy 를 지원하는 블루투스 4.0 의 개요
블루투스 4.0 의 정의
- 2.4GHz ISM RF 대역에서 극히 적은 피크 / 평균 / 대기 전력으로 에너지 사용을 효율화 하여 , 헬스케어 ,
자동차 , 센서 등으로 쓰임새를 확장한 차세대 Bluetooth 기술
- 1.0, 2.0 의 Classic 블루투스에서 802.11 PAL 을 적용한 High Speed 블루투스 (3.0) 와 전력소모를
최소화하는 Low Energy 블루투스 (4.0) 으로 발전 중 .
나 . 블루투스 4.0 의 기술요소
구분 기술특징
전송속도 짧은 데이터 패킷 지원 : 1Mbps 의 속도로 전송
가변연결 연결되는 양단은 서로 인식하고 있지만 , 절대적으로 필요할 때만 연결
인터벌 방식 모든 연결은 짧은 듀티 사이클을 달성하기 위해 진보된 Sniff - Subrating 사용
주파수 호핑 AFH(Adaptive Frequency Hopping) : 효율적인 멀티패스 확보로 송신거리 늘어남 .
신속한 연결 최소 3ms 내에 연결 셋업 , 변조지수가 늘어나 최대 전송거리 100m 이상 증가
견고성 / 보안 패킷에 강력한 24 비트 CRC 를 적용 및 Full AES - 128 암호화
32 시트 주소 모든 패킷에 32 비트 액세스 주소를 사용해 수십억 개의 디바이스 연결
268

---

## Page 269

5) 블루투스 4.0 의 동작모드와 및 기술요소
블루투스 4.0 의 동작모드
듀얼모드 (Dual - mode) 싱글모드
- 통합성이 높고 크기가 작아 작은 디바이스에
- 저에너지 블루투스 기능이 기존의 클래식
적합
블루투스에 통합된 방식
- 싱글모드 칩은 적은 대기모드 전력 , 간단한
- 기존 클래식 블루투스 기술의 많은 부분을
디바이스 감지 , 저비용으로 절전기능과
공유하므로 경제적
보안성이 높은 암호화된 연결
269

---

## Page 270

BLE 프로토콜 구조
크게 3 개 영역으로 구분
GAP: 디바이스 검색 , 연결 생성 및 보안 절차 부분에 주로 사용
GATT: Attribute Protocol 을 사용하여 서비스 프레임워크 , 서비스 포맷 및
컨트롤러 , 호스트 , 어플리케
절차 - 이 절차는 검색 (discovering), 읽기 (reading), 쓰기 (writing), 알림
이션 영역
(notify), 지시 (indicating) 특성의 설정을 정의한다 .
컨트롤러 , 호스트
영역 통신을 위한
인터페이스
L2CAP: 상위 레벨로 데이터서비스를
Link Manager:
제공하고 , 컨트롤러로 보낼 패킷을
두 장치간 무선 링크를 설
쪼개거나 받은 패킷을 재조합하는
정하고 , 컨트롤 사용
역할
270

---

## Page 271

6) 블루투스 버전 별 비교
구분 1.0 V2.1+EDR 3.0+HS 4.0
주파수 대역 2.4 GHz 2.4 GHz 2.4 GHz 2.4 GHz
속도 1Mbps 2.1Mbps 24Mbps 1Mbps
커버리지 10m 10m 100m 100m
보안 강화 및 AMP
Ultra-low
패어링 향상을 위 (Alternate
특징 power
한 SSP(Secure MAC/PHY),
Bluetooth
Simple Pairing) High Speed
7) 블루투스 3.0 과 블루투스 4.0 의 비교
구분 블루투스 3.0 블루투스 4.0
핵심특징 High Speed Low Energy
전송속도 24Mbps 1Mbps
전력소모 15~20mW 1.5~2.0mW
토폴로지 스캐터넷 스타버스
활용분야 휴대폰 , 헤드셋 , PC 헬스케어 , 센서 , 기기제어
271

---

## Page 272

나 . 유비쿼터스 구현을 위한 초광대역 무선기술 UWB 의 개요
1) UWB (Ultra Wide band) 의 정의
- 매우 낮은 전력을 사용하며 , 초광대역의 주파수 대역으로 디지털 데이터를 전송하는 차세대 무선
전송 기술
- 단거리 구간에서 0.5mW( milliwatt ) 정도의 저전력으로 넓은 스펙트럼 주파수를 통해 70 미터의 거리
까지 많은 양의 디지털 데이터를 전송하는 무선 기술
2) 등장배경
- 한정된 주파수 자원 및 기존 주파수 대역에 관계없이 전파 자원을 효율적으로 사용하기 위한 신기술
필요
3) UWB 의 특징
구 분 내 용
전송방식 Baseband ( 변조하지 않고 디지털 그대로 전송하는 방식 ) 신호로 전송
제작 비용 송신기의 제작이 매우 쉽고 싼 가격으로 구현
간섭현상 없음 (GPS, PCS, WLAN 기능과 함께 하나의 기기에 통합 가능 )
전력 사용 - 매우 낮은 스펙트럼 전력 사용
- 송수신 기기의 소형화 , 저전력화
보안성 매우 우수 ( 초기 군사용 목적 )
MEMS 기술 Micro Electro Mechanical system 기술 적용하여 기판 위에 집적화시킴
기타 거리 측정 가능
272

---

## Page 273

- 기존 시스템보다 더 낮은 비용과 전력 소비로 훨씬 넓은 주파수 대역 ( 범위 ) 을 이용
- 기존 협대역 시스템 (Narrow; 데이터 통신에 사용되는 주파수 대역 중에서 음성 신호에 비해 대역폭
이 좁은 대역 . 소량의 데이터만을 전송 ) 이나 광대역 ( 개념상 협대역 (narrowband) 의 반댓말 ; 보통보다
아주 넓거나 빠른 대역 ) CDMA 시스템에 비해 매우 넓은 주파수 대역에 걸쳐 상대적으로 낮은 스펙트
럼 전력 밀도가 존재하므로 , 기존 무선통신 시스템에 간섭을 주지 않고 주파수를 공유하여 사용할 수
있음
273

---

## Page 274

다 . 대규모 센서 네트워킹 기술 , Zigbee 의 개요
1) Zigbee (Low Data Rate) 의 정의
- 저속 전송속도로 집에 놓여 있는 다양한 가전제품 등을 리모콘 하나로 작동시킬 수 있는 새로운
저속 WPAN 기술로 홈네트워킹에 강함
- 저전력 , 저비용의 가정용 무선 네트워크 규격
2) Zigbee 의 구조 및 특징
- 저전력 기반 구조로 수개월 ~ 수년 사용 가능
- 최대 65,000 개의 Slave 연결 가능
- 다양한 네트워크 토폴로지 사용 가능
구분 내용
데이터 전송율 250Kbps
적용거리 100M
주파수대역 920MHz, 2.4GHz
활용온도 범위 - 40~ +95 도
설계기술 저전력설계 , 최적화 변복조 설계
274

---

## Page 275

3) Zigbee 네트워크 구성
275

---

## Page 276

III. 무선 PAN 기술간 비교
명칭 Bluetooth UWB Zigbee
표준명칭 IEEE 802.15.1 IEEE 802.15.3a IEEE 802.15.4
주파수 2.4GHz(ISM Band) 500MHz 920Mhz, 2.4G( 글로벌 )
MAC TDMA - CSMA/CA
버전마다 다름
전송속도 500Mbps 250K(40K, 20Kbps)
V3.0, 4.0, 4.2
전송거리 10m ~ 100m 70m 100m 내외 ( 일부 수백 m)
활용 음성 전송 멀티미디어 데이터전송 센서간 통신
IV. WPAN 의 활용 및 동향
가 . 산업용 제어 : 산업용 장비 모니터링 및 자동화
- 재난 관리 : 재난 발생의 인식과 위치 결정
- 원격제어 : 장난감 및 게임 분야 활용 , 가전제품 원격제어
- 자동차 제어분야 : 타이어 압력 센서 , 자동차 내 통신
나 . 홈 네트워킹 및 정보 가전 분야 활용
- 가정 내 PC 의 주변기기로 무선마우스 , 키보드 , 조이스틱 , 보급형 PDA, 게임기 등 활용
- 난방 , 환기 , 에어컨 , 보안 , 전등제어 , 출입문 / 창문 잠금 제어 , 장난감 및 게임 등 활용
276
- 유비쿼터스 컴퓨팅 : 무선 인터넷 , 휴대전화 , 단말기 등 이동성 보장 서비스 ‘끝’

---

## Page 277

종류 설명
 Universal Plug & Play
 홈 네트워크 분야의 표준 네트워크 프로토콜로 주로 홈 네트워크 상의 장치들 , TV
UPnP
나 오디오 , PC, 냉장고 등이 서로 연동될 수 있도록 지원하는 범용 표준 프로토콜
 DLNA 에서 공식 규격으로 채택된 기술이며 최근 Wi - Fi Direct 호환 기능까지 제공
 Devices Profile for Web Services
 UPnP 와 동일한 기능이지만 단말에 설치된 웹 기반 서비스를 대상으로 통신
DPWS
 웹 서비스 구동 위치에 따라 hosted device 와 hosting device 로 구분되고 클라이
언트 단말이 hosting device 에 있는 웹 서비스에 접속하여 서비스를 제공 받음
 무선랜이 지원되면 사용 가능한 기술로 IEEE 802.11n 을 기반으로 확장
WiFi Direct  단말기 안에 AP 를 구현하여 무선 AP 가 없어도 언제 어디서나 이동 중에도 기기간
통신이 가능
 2.4GHz 대역의 ISM 주파수 대역을 이용하여 10m 이내의 근거리 디바이스 간 통
Bluetooth 신을 지원하기 위한 무선접속 규격
 Master-Slave 구조로 하나의 Master 는 최대 7 개의 Slave 와 통신 가능
 LTE 단말기가 항상 신호를 수신하고 있어 LTE - D2D 는 자동으로 서로 인식하고 속
도도 75Mbps 까지 구현 가능
LTE-D2D
 인가 주파수 사용에 따른 높은 보안성을 가지고 단말기가 별도의 통신 방식을 병
행하지 않아도 되어 배터리 소모도 줄어 듬
277

---

## Page 278

278

---

## Page 279

주요 통신 기술 비교
279

---

## Page 280

4. Smart Home/Home Networking
기출문제
1. 지능형 홈 네트워킹 미들웨어
( 조직응용 84 회 1 교시 )
2. 사설공간인 홈 (Home) 에서 컨텐츠는 다양한 장치에서 자유롭게 사용 (Seamless access) 할 수
있어야 한다 .
반면에 홈의 범위를 벗어난 불법적인 복제나 재분배로부터 컨텐츠는 보호되어야 한다 .
홈 네트워크환경에서 두가지 조건을 만족할 수 있는 효과적인 컨텐츠보호 구조와 방안을 제시 하시오 .
( 정보관리 84 회 3 교시 )
3 상황인식컴퓨팅 (Context - aware Computing) 을 정의하고 홈 (home) 환경을 가정하여 다음상황에
대한 상황요소를 각각 5 개 이상 제시 하시오 .
- 사용자 신체 , 공간 , 환경 , 컴퓨팅자원 ( 정보관리 84 회 4 교시 )
4. 홈 네트워킹의 구성 요소를 설명하고 보안기술 및 보안 취약점에 대하여 설명 하시오 .
( 조직응용 78 회 4 교시 )
5. 대표적인 홈 네트워크 미들웨어 표준화 기술을 다섯 가지 이상들고 적용분야 및 특징을 설명하시오 .
( 조직응용 77 회 3 교시 )
6. 무선 홈네트워킹 기술에 대하여 기술하시오
( 정보관리 75 회 4 교시 )
280

---

## Page 281

4. Home Networking
I. 가전제품을 비롯한 집안의 모든 장치를 연결해 제어하는 기술 , 홈 네트워킹 / 스마트 홈의 개요
가 . 홈 네트워킹 (Home Networking) 킹 정의
- 가정 내 디지털 정보 가전 간 데이터 통신 제공 및 외부 인터넷 망과의 접속 제공을 통한
지능화된 커뮤니케이션이 가능하도록 하는 네트워킹 방식 .
나 . 홈 네트워킹 등장 배경
281

---

## Page 282

4. Home Networking
I. 홈 네트워킹의 개요
가 . 홈 네트워킹 (Home Networking) 킹 정의
- 가정 내 디지털 정보 가전 간 데이터 통신 제공 및 외부 인터넷 망과의 접속 제공을 통한
지능화된 커뮤니케이션이 가능하도록 하는 네트워킹 방식 .
나 . 홈 네트워킹 등장 배경
- 인터넷 기술의 발달과 가정 내 PC 의 급속한 보급으로 인터넷 사용의 보편화
- 디지털 컨버전스 가속화에 따른 유비쿼터스 환경 구축 필요
- 가정 내 정보화 실현 및 IT 산업에서의 신규 부가가치 창출 필요
- 인터넷을 중심으로 한 통신 인프라 확충
기술 측면
- 정보통신 기술의 융합과 복합화 추이
- 가정 내 디지털 기기간 네트워크화 요구
수요 측면
- 저가격 , 사용 편이성 뛰어난 복합 단말기 요구
-PC 중심 시장 수익률 약화 → 새로운 수익원 요구
공급 측면
- 기업중심 네트워크 장비 업체들의 시장 확대
282

---

## Page 283

II. Home Networking 구성도 및 구성요소
가 . Home Networking 구성도
- 스마트홈은 스마트기기와 가전제품 , 보안장비 , 센서 , 액추에이터 등을 통제함으로써 구현
283

---

## Page 284

II. Home Networking 구성도 및 구성요소
가 . Home Networking 구성요소
구 분 설명 관련기술
외부인터넷과 접속을 가능하게 해주
가입자 망 xDSL, Cable, WLL. PowerLine, Satellite
는 역할 수행
가입자망과 홈 네트워크 사이의
홈 게이트웨이 스마트박스 , 이전 - HAVi, UPnP, JINI 등
인터페이스 역할 수행
- 유선 : HomePNA , PLC( 전력선 ), USB,
Ethernet, IEEE802.11 등
홈 네트워크 Home NW 단말기와 가입자 망 연결
- 무선 : 블루투스 , UWB, Zigbee ,
HomeRF, IrDA, 무선 LAN
Webphone, Communication Device,
홈 네트워크 외부망과 정보공유를 위한 네트워크
Entertainment Device,
단말기 기능을 갖춘 단말기
Computing Device
홈 네트워크 홈 네트워크 단말기를 활용한 각종 편 댁내 자동차 서비스 , 엔터테인먼트 서비스 ,
서비스 의 서비스 텔레포니 서비스 , 건강 / 복지 서비스
284

---

## Page 285

III. Home Networking 기술 설명
가 . 유선 Home Networking 기술
구분 내용
- Home Phoneline Networking Alliance
Home PNA
- 기존 전화선을 이용해 정보통신 기기들을 하나로 연결
- 직렬버스 방식의 Digital interface 기술
IEEE 1394
- 고속 실시간 전송 가능
- 가정에 기 설치된 전원배선을 활용하여 통신망 구성 , 즉 가정이나 사무실에서
PLC
전기선을 꽂으면 , 전기선을 통하여 음성 , 데이터 , 인터넷 등을 고속으로 이용할 수
(Power Line
있게 제공한 서비스 ( 전력선 통신 )
Communicati
- 초당 200 MBps 데이터 전송속도 , 수십 ~ 수백 kHz 이상 고주파 이용 ,
on
- 상대적으로 저속이며 잡음 가능성 존재 , 스마트 그리드 연계
나 . 무선 Home Networking 기술
구분 내용
Z-wave - 미국 , 920MHz, 통신기술 정리 .
- 무선 네트워킹의 사실상 표준 (802.11b)
무선 랜
- 블루투스 , HomeRF 와 동일한 2.4Ghz 주파수 사용
- 양방향근거리통신을 저가격으로 구현
블루투스
- 2.4Ghz 의 ISM 대역의 라디오 주파수 사용
IrDA - 적외선을 이용한 데이터 전송 , 안정성이 높으나 장애물 통과 불가
- 저속 전송속도로 집에 놓여 있는 다양한 가전제품 작동
Zigbee
- 저가 저전력형 WPAN(Wireless Personal Area Network) 기술
285

---

## Page 286

III. Home Networking 기술 설명
다 . Home Networking 게이트웨이 및 서버 기술
구분 내용
Home Gateway - 외부 Internet 망과 내부 홈네트워크 망을 연결하는 게이트웨이
- 가정내부의 정보기기들은 유 . 무선 네트워크를 통하여 통합 연결하여 가정 내
Home Server 어디에서나 각종 정보기기들을 제어 및 서비스 제공
- 홈 네트워크 미들웨어 탑재
라 . Home Networking 미들웨어 기술
구 분 내 용
HAVi - 소니 , 톰슨 , 필립스 등 AV 가전기기 회사 중심 개발
(Home Audio/Video - AV Entertainment 기기들끼리의 정보 교환 및 상호연동
interoperability) - IEEE1394 기술을 채택한 기기간의 데이터 전송과 상호 호환성
- Sun Microsystems 개발
JINI
- 자바 기반의 분산 시스템을 만들기 위한 미들웨어 , Java RMI 통신
(Java Intelligent Network
Infra-structure)
- JVM(Java Virtual Machine) 사용으로 하드웨어에 독립적
- 마이크로소프트 등 컴퓨터업계 중심 개발
UPnP
- 기존에 존재하던 IP 네트워크와 HTTP 프로토콜을 사용
(Universal Plug and Play)
- SOAP 등 검증된 Web 기술을 기반으로 상호 운용성과 경제성이 높음
286

---

## Page 287

IV. 스마트홈 ( 홈 IoT ) 생태계의 6 대 구성요소
287

---

## Page 288

V. 스마트홈 연관 산업 ( 출처 : 중앙시사매거진 )
288

---

## Page 289

V. 스마트홈 표준화 경쟁 현황
289

---

## Page 290

5. Ad-hoc Network
1. 유비쿼터스 센서 네트워크 (Ubiquitous Sensor Network:USN) 의 특성에 대해 논하고 , 이 USN
은 Ad - hoc 통신기법으로 데이터를 전송하는데 , Ad - hoc 네트워크와 기존 기반구조 네트워크
(Infrastructure Network) 의 차이점에 대해 설명하시오 .
( 조직응용 83 회 2 교시 )
2. 무선 에드 - 혹 네트워크 (Wireless ad - hoc network) 의 특성을 설명하고 , 이러한 네트워크에서
사용되는 라우팅 프로토콜을 2 - 3 가지로 분류하여 설명하시오 .
( 조직응용 75 회 3 교시 )
3. 사물인터넷 (IoT) 환경에서는 정보통신 인프라 보호 기술과 밀접하게 연관된 RFID/USN 보안 기술과 홈
네트워크 보안 기술이 요구된다 .
이와 관련하여 다음 물음에 답하시오 .
가 . RFID 와 USN 을 설명하시오 .
나 . 홈네트워크의 보안 취약점을 설명하시오 .
다 . MANET(Mobile Ad - hoc NETwork) 라우팅 프로토콜을 설명하시오 .
( 모의고사 , 2016)
4. 무선센서네트워크 (WSN) 와 이동 가능한 무선단말로 구축되는 애드혹 (Ad - hoc)
네트워크의 차이점을 비교하고 , 애드혹 네트워크의 경로제어 방법인 리액티브 (Reactive) 형 방법과 프로액
티브 (Proactive) 방법에 대하여 비교 설명하시오 . ( 정보관리 , 110 회 )
290

---

## Page 291

5. Ad-hoc Network
I. 무선 통신 및 네트워크 능력을 가진 통신 네트워크 , Ad - hoc Network 의 개요
가 . Ad - hoc 네트워크의 정의
- ‘ad - hoc’ 는 별도의 기반 시설 (Infrastructure) 없이 , 모바일 디바이스만으로 구성가능 (Self -
organizing) 하며 , 네트워크의 변화에도 적응적 (Adaptive) 한 네트워크
나 . Ad - hoc 네트워크의 특징
특 징 설 명
이동 ad - hoc 네트워크는 무선 인터페이스를 사용하여 이동 노드들간의 통
Peer-to-Peer 통신
신 지원
무선 인터페이스는 기본적으로 전송 대역폭 및 전송거리 제약 있음
이동 노드 -> 원거리 노드들 간의 통신을 위한 멀티 - 홉 통신이 필수적
호스팅 기능 외에 라우팅 기능 필요
동적인 네트워크 포폴로지 구성으로 노드의 일부 혹은 전체 노트가 연결되
동적 네트워크
거나 삭제 될 수 있음
- 대역폭 제한과 전파간섭 문제 , 다중링크로 인한 보안 문제 발생
불안정한 링크
- 브로드캐스팅되는 라우팅 제어 메시지의 해킹 문제 발생
291

---

## Page 292

II. Ad-hoc Network 구성도 및 유무선 네트워크 비교
가 . Ad - hoc Network 구성도
게이트웨이
기반망
1) 독립적으로 존재하는 Ad - hoc N/W 2) 기반망과 연동하는 Ad - hoc N/W 구성 형태
292

---

## Page 293

II. Ad-hoc Network 구성도 및 유무선 네트워크 비교
나 . Ad - hoc Network 구성도
구 분 Ad-hoc Network 유무선 Network
망 형태
망 구성 대등하고 능동적인 망 계층적 , 수직적 망 구성
각각의 단말기들이 공간상에
독립적으로 존재 하나의 허브를 중심으로 수십 , 수백
망 구조
대의 단말기들이 연결하는 망
자신이 인식할 수 있는 기기 연결
하여 네트워크 구성
노드들간 협력 라우팅 ,
라우팅
고정된 라우팅에 의한 라우팅 제공
자체 라우팅
필요 기술
IPv6, RFID, 스마트카드 허브 , 기지국 , 중계기 등
293

---

## Page 294

III. Ad-hoc 네트워킹 라우팅 프로토콜 기술
라우팅 구 분 설 명 사례
모든 이동 노드들이 항상 최신의 루트 장점 : 지연없이 항상 최적의 루트 유지
정보를 유지하며 , 라우팅 정보를 주기
Proactive
단점 : 변화가 심한경우 전파하기
적으로 , 변경 시에 네트워크 전체로 전
라우팅 방식
파하여 각 노드들이 자신의 라우팅 정 위한 오버헤드
보 변경 하는 구조
장점 : 루트정보는 루트 상의 각 노드에 저장되
트래픽이 발생 시에 루트를 탐색하는
Reactive 나 , 일정기간 비사용시에 삭제됨
구조
라우팅방식 단점 : 트래픽 발생시점 루트 탐색으로 추가적
라우팅의 오버헤드 감소
인 소요 시간 필요 - > 트래픽 전송 지연
294

---

## Page 295

IV. Ad-hoc 네트워크를 위한 무선 기술
가 . IrDA (Infrared Data Association); 적외선 을 이용한 무선 통신 방식
나 . Bluetooth (WPAN)
다 . Home RF SWAP (Shared Wireless Access Protocol):
- 45m, 1.6Mbps 속도 , 2.4GHz ISM (Industrial Scientific Protocol) 대역 이용
- 가정 내 환경에서 컴퓨터 , 전화 , TV, 오디오 기기 등을 무선으로 연결하는 하나의 무선 네트워크
표준
라 . IEEE 802.11(WLAN)
295

---

## Page 296

[ 모의고사 문제 삽입 ]
MANET(Mobile Ad-hoc NETwork) 라우팅 프로토콜
가 . MANET(Mobile Ad - hoc NETwork) 라우팅 프로토콜의 정의
- 멀티 홉 무선링크로 연결된 여러 개의 모바일 단말 ( 라우터 기능 포함 ) 로 구성된 망으로 , 스스로 이웃
노드와 연결되어 하나의 망을 구성하고 , 일부 노드 고장 시 , 스스로 새로운 경로를 설정하는 네트워크
- 주요 프로토콜로 DSDV 프로토콜과 AODV 프로토콜 방식이 있음 .
구분 기술 설명
- Destination-Sequenced Distance Vector
DSDV - 노드들의 라우팅 정보를 테이블 형태로 관리하는 라우팅 프로토콜
- 선행적 방식의 라우팅 프로토콜
- Ad Hoc On-Demand Vector Routing
- 필요에 따라 경로 요구 패킷을 네트워크 전체에 보낸 후 , 목적지 경로를 찾는
AODV
라우팅 프로토콜
- 반응적 방식의 라우팅 프로토콜
296

---

## Page 297

VoIP
1. VoIP(Voice of Internet Protocol)
( 조직응용 , 93 회 1 교시 )
2. VoIP 서비스를 수행할 때 발생 가능한 , 다음 스팸 공격의 특성에 대해 논하시오 .
1) 콜 스팸 (Call Spam) 2) 인스턴스 메시징 스팸 (IM Spam) 3) 프레즌스 스팸 (P spam )
( 조직응용 , 83 회 2 교시 )
3. SIP (Session Initiation Protocol)
( 정보관리 , 74 회 1 교시 )
4. MVMO(Mobile Virtual Network Operator) 의 VoIP(Voice over Internet Protocol_
서비스 제공방안을 CPND(Contents, Platform, Network, Device) 관점에서 설명하시오 .
(105, 컴시응 , 2 교시 )
5. OTT(Over The Top) 기술이 ICT(Information Communication Technology) 산업에 미치는 영향을
진입장벽 , 구매자 협상력 , 공급자협상력 , 대체재 (Substitute Goods) 및 기존경쟁 등 5 가지 경쟁요인
측면에서 설명하시오 . (105 회 , 컴시응 , 3 교시 )
6. SIP(Session Initiation Protocol) 의 개념을 설명하고 , 세션 (Session) 의 생성 과정을 설명하시오 .
( 컴시응 , 110 회 3 교시 )
297

---

## Page 298

I. 초고속인터넷과 같이 IP 망을 기반으로 패킷 데이터를 통해 음성통화를 구현하는 통신기술 , VoIP 개요
가 . VoIP(Voice over Internet Protocol ) 의 정의
- 음성서비스를 패킷 교환망을 통하여 제공하는 기술 및 시스템
- IP Datagram 을 통하여 전송하며 실시간 또는 비실시간 (messaging 형태 ) 형태로 제공
- 인터넷의 IP 프로토콜을 사용하여 음성을 전송하는 기술
나 . 표준화 기구
ITU-T : 멀티미디어 단말과 보안에 관한 연구 , H.323 프로토콜 을 이용한 VoIP 시스템 구현방법
IETF : 웹서비스와 PSTN/ISDN 의 상호 연동 연구 , SIP 를 이용한 VoIP 구현
298

---

## Page 299

II. VoIP G/W 노드 구성도 및 프로토콜
가 . VoIP G/W 노드 구성도
SIP Request 함수
DNS 서버
세션 시작
H.323, SIP 를
서버 전송
통한 호연결
Location
서비스 / 서버
PC, 단말기 PC, 단말기
Proxy 서버 Proxy 서버
SIP
SIP
UAC (UAC)
SIP
SIP Proxy Server
User Agent(UA) Client SIP Proxy Server SIP Request 함수
- 서버
- 클라이언트 - 서버 ( 반드시 거침 ) 대한 응답메시지
- 라우팅 수행 ACK 함수를 통해
UAS 라고 함 Response 응답 .
- User Agent Server
- UAC and UAS 가
SIP transaction 에
대해 모두 수행
IP Multimedia Subsystem
참조 : https://en.wikipedia.org/wiki/Session_Initiation_Protocol
299

---

## Page 300

II. VoIP G/W 노드 구성도 및 프로토콜
나 . VoIP 서비스 구성요소
분류 항목 설명
UAC(User Agent Client) - 세션 종단에 위치하며 , 호를 생성하고 설정을 요청
SIP
Client
UAS(User Agent Server) - UAC 로부터 호를 수락하거나 거절 또는 Redirect 함
- 전화기와 같은 SIP 장비에 의해 현재 location 등록에
Register Server 사용
- SIP REGISTER 메시지를 기준으로 데이터베이스에 저장
- Proxy Server 는 주로 라우팅 역할 수행
Proxy Server - 요청 메시지를 실제 메시지가 전달되어야 할 곳으로
forwarding 하는 역할
SIP
- UAC 로부터의 SIP Call 을 받게 되면 , 목적지 (UAS) 의
Server
주소를 알려주는 역할
Redirect Server
- Redirect Server 는 메시지를 전송한 UAC 로 목적지를
3 xx redirect 메시지로 알려줌 .
- 사용자 (SIP UA) 의 위치를 등록해 놓은 DB
- Proxy server 나 Redirect server 로 부 터 SIP Call 의
Location Server
목적지 노드의 주소가 요청되면 이를 Resolution 하는
역할
- PSTN 전화망과 IP 네트워크를 서로 연결해 주는 역할
Gateway
SIP Gateway
( 서로 다른 이기종 망을 연결하는 장비 )
300

---

## Page 301

라 . VoIP 프로토콜 설명
구분 프로토콜 특징
- 프로토콜의 간략함 , 확장성 등에서 장점 ( 개발 용이 )
SIP - 장비 호환성 및 서비스 안정성 등 확보 필요
- HTTP 기반의 텍스트
VoIP 프로토콜
- 장비간 호환성 및 안정성의 장점
H.323
- 프로토콜의 복잡성 및 확장성 등에서 단점
- Media Gateway Control Protocol
- Text/UDP 기반 프로토콜 , IETF 표준
MGCP
- MGC(Media Gateway Controller): 전화망 /IP 망 컨트롤
Gateway
- MG: 미디어 게이트웨이
(MG 와 MGC 간
프로토콜 )
- 개방형 프로토콜 ( 미디어의 인터페이스를 제공 )
Megaco -IETF/ITU-T 에서 협력 개발
-MGCP 에서 발전된 프로토콜
301

---

## Page 302

다 . VoIP 프로토콜
구분 프로토콜 특징
- 프로토콜의 간략함 , 확장성 등에서 장점 ( 개발 용이 )
SIP - 장비 호환성 및 서비스 안정성 등 확보 필요
- HTTP 기반의 텍스트
VoIP 프로토콜
- 장비간 호환성 및 안정성의 장점
H.323
- 프로토콜의 복잡성 및 확장성 등에서 단점
- Master/Slave 프로토콜
- Text/UDP 기반 프로토콜 , IETF 표준
MGCP
- MGC(Media Gateway Controller):
MG 와 MGC 간
- MG: 미디어 게이트웨이
프로토콜
- 개방형 프로토콜 ( 미디어의 인터페이스를 제공 )
Megaco /H.248 - IETF/ITU-T 에서 협력 개발
- MGCP 에서 발전된 프로토콜
-IP 를 기반으로 한 프로토콜
SIP-T -PSTN 망과의 연동을 고려한 프로토콜
MGC 와 MGC 간
-SIP 등 VoIP 프로토콜과 연동이 용이
프로토콜
-ATM 및 IP 를 기반으로 한 프로토콜
BICC
-PSTN 망과의 연동을 고려한 프로토콜
302

---

## Page 303

IMS
출제예상문제
1. IMS(IP Multimedia Subsystem) 를 설명하시오 .
(KPC 모의고사 , 2013. 6 월 )
303

---

## Page 304

I. All IP 기반의 차세대 통신 기술 IMS 의 개요
가 . IMS(IP Multimedia Subsystem) 의 정의
- 멀티미디어의 효율성을 높이기 위해 IP 네트워크를 기존의 통신망에서 별도로 분리하여 IP 멀티미디어
서비스를 위한 호 제어 (Call Control) 를 위해 다양한 서버 장비를 망과 결합한 형태의 프레임워크
나 . IMS 의 특징
다양한 형태의 서비스군을 수용하는 표준화된 프레임워크로 서비스간 상호 연동
상호 운용성
용이
All IP 기반의 통일 IP 기반의 이기종 망간의 통합에 용이
효율적인 세션 관리 기능을 기반으로 다양한 3 rd party 의 응용과 손쉬운 연동 가
신속한 서비스 개발
능
304

---

## Page 305

II. IMS 의 구성도 및 주요 기능 블록
Call Session Control Function
가 . IMS 의 구성도 - CSCF 는 호 처리에 관련된
부분 담당하는 기능
- IMS 는 Service, Control, Transport 의 3 계층으로 나뉘어 지고 기능별로 블록으로 관리됨 .
※ SCIM(Service Capability Interaction Manager) : SIP 프로토콜을 사용하여 CSCF 및 Enabler 등의
IMS 시스템으로부터 전달된 요청에 대한 IMS 단말기 정보 조회 , 사용자 조회 , 접속 정보 조회 등의
역할을 담당
305

---

## Page 306

나 . IMS 의 주요 기능 블록
기능 블록 기능요소 내용
P-CSCF
- 유저가 IMS 망에 최초로 액세스하는 지점임 , 위치 등록 시 할당되는 SIP 서버임
(Proxy-CSCF)
I-CSCF
세션 제어 - 다른 망으로부터 SIP 메시지를 수신하는 Gateway 성격의 서버임
(Interrogating-
기능 블록 - 유저가 위치 등록할 때 해당하는 HSS 를 선택
CSCF)
S-CSCF - 세션제어 중심적인 SIP 서버임 , 유저 단말정보를 HSS 에 전송
(Serving-CSCF) - HSS 로부터 다운로드 받은 가입자 정보를 보관 유지
HSS - 세션제어 , 서비스제어에 필요한 모든 정보를 저장
(Home Subscriber - 이동통신의 UE 의 물리적 위치정보 ( 즉 , 기지국 정보 ) 를 저장하고 있는 HLR 과 연동
홈 가입자 Server) 저장정보
서버 블록 SLF - IMS 망 내에 복수개의 HSS 존재 시 , 해당 유저 정보 가진 HSS 를 찾기 위한 정보를
(Subscriber 가짐
Locator Function) - 1 개의 HSS 존재 시 필요 없음
- IP 패킷 망에서 CSCF/HSS 등과 연동을 통해 다양한 부가서비스를 제공할 인프라
AS
어플리케이션 제공 (Application Server)
서버 블록 - S-CSCF 에 의해 다양한 서비스를 제공하기 위해 SIP 메시지 종류에 따른 조건을 저
User Profile
장 필요 → HSS 내에 User Profile 로 저장
- Multimedia Resource Function Processor
멀티미디어 MRFC
- 음성 , 비디오 등의 Stream 을 Mix, 생성 , 처리
제어
- Multimedia Resource Function Controller
기능 블록 MRFP
- SIP 메시지를 IMS 내의 다른 서버와 송수신하여 , MRFP 를 제어
- MGW Control Function, IM-MGW 제어
MGCF
- IMS 의 SIP 와 Circuit Network 의 ISUP 간의 Signaling 의 변환
기존 망과 - IP Multimedia-Media Gateway
IM-MGW
게이트웨이 - IP Network 와 Circuit Network 간의 음성 , 비디오 변환기능
블록 SGW - Signaling Gateway, SIP ↔ ISUP 변환
- Breakout Gateway Control Function
BGCF
- IMS 로 전송한 세션 요청 메시지를 전송할 MGCF 선택
PCRF - Policy and Charging Rules Function. 정책을 결정
QoS 제어 블록
PCEF - Policy and Charging Enforcement Function, 정책을 실행
306

---

## Page 307

III. IMS 의 구조기반의 제공 서비스
제공서비스 설명
멀티미디어 서비스 VoLTE, 인터넷 전화 (VoIP), 영상통화 , 인스턴트 메시징 서비스
비디오 , 컨텐츠 파일 , 어플리케이션 공유 서비스나 푸시 서비스와 온라인 교육 ,
상호작용 서비스
게임 , 스트리밍 서비스
그룹형 서비스 주소록 , 버디 서비스
컨버전스 서비스 유무선 통합 , 통방융합 서비스
307

---

## Page 308

VDI
기출문제
1. 정보자원의 효율적 이용과 비용 절감을 위해 VDI(Virtual Desktop Infrastructure ) 도입을 검토하는
기업이 늘고 있다 . 이 기술 도입 시 고려사항과 위험요소에 대하여 설명하시오 .
( 정보관리 99 회 3 교시 )
2. VDI(Virtual Desktop Infrastructure) 프로토콜에 대해서 설명하시오 .
(KPC 모의고사 , 2013. 6 월 )
308

---

## Page 309

I. 가상화 데스크탑 , VDI 의 개요
가 . VDI(Virtual Desktop Infrastructure) 의 정의
- 중앙 데이터센터의 서버 자원을 이용해 데스크탑 업무환경을 개발 사용자에게 네트워크 상에서 제공
하는 컴퓨팅 환경
나 . VDI 개념도 및 구성요소
309

---

## Page 310

구성요소 설명
단말기 - 사용자가 중앙의 가상머신에 원격 접속하기 위해 사용
( 클라이언트 ) - 단말기는 단말의 구성요소에 따라 제로 클라이언트 , 씬 클라이언트 , PC 로 구분 가능
세션 브로커 - 사용자 단말기와 가상화 엔진의 접점에서 사용자 인증 등 정책을 적용하고 접속 요청에
서버 따라 어떠한 가상머신을 사용자에게 전달할 지에 대한 정보를 저장하는 장비
- 사용자 계정을 통합적으로 관리하고 접속사용자의 인증을 담당
인증 서버
- 계정정책 및 운영체제 환경에 대한 정책을 정의하여 일괄 배포
- 실제로 가상머신이 실행되는 요소로 각 제조사 마다 각자의 특성에 맞는 가상화 엔진을
하이퍼바이저
보유 개발 중이며 , 데스크톱 가상화의 성능과 관련되는 요소임
가상머신 - 운영체제 , 하이퍼바이저 , 애플리케이션 등이 설치되어 사용자별 가상화 환경을 제공하는
운영 서버 역할
공유 - 하이퍼바이저에서 실행되는 가상머신의 이미지 파일이 저장되는 공간으로 운영체제 ,
스토리지 애플리케이션 , 업무자료 등을 모두 포함
310

---

## Page 311

I. VDI 방식 데스크탑 가상화의 핵심인 VDI 프로토콜 개념
가 . VDI(Virtual Desktop Infrastructure) 프로토콜의 정의
- 데스크탑 가상화 환경에서 다양한 단말에 존재하는 클라이언트가 중앙의 가상머신과 통신하기 위한 규약
- VDI 환경에서 사용자가 자신의 PC 처럼 원격지 컴퓨터를 사용하도록 해주는 원격 디스플레이 프로토콜
나 . VDI 프로토콜 요구사항
구분 설명
Seamless 연결 - 끊김 없이 가상머신과 클라이언트 간의 연결 지원
- GDI, DirectX, OpenGL 의 3 D 그래픽 , WPF, WMV, Silverlight, Flash 등 다양한
다양한 포맷 지원
멀티미디어 포맷 세션 지원
경량 트래픽 - WAN 환경에서도 사용이 가능한 낮은 전송 대역폭 (bandwidth) 지원
효율적 렌더링 지원 - 클라이언트 및 가상머신 상의 CPU/GPU 를 사용한 빠른 렌더링 지원
311

---

## Page 312

II. VDI 프로토콜의 역할
가 . VDI 프로토콜의 동작구조
클라이언트 입력정보 전송
( 마우스 , 키보드 , 터치패널 )
호스트
클라이언 그래픽 명령어
가상머신
트 Screen capture, Compress,
단말 Encrypt
- 클라이언트 단말과 호스트 가상머신 사이에서 클라이언트의 입력정보 전달
- 클라이언트에 그래픽 명령 전달 ( 클라이언트 렌더링의 경우 )
- 가상머신 상의 화면을 캡처 , 압축 , 암호화하여 전달 ( 호스트 렌더링의 경우 )
312

---

## Page 313

나 . VDI 프로토콜의 역할
구분 설명
- 호스트와 클라이언트 사이의 GFI 파라미터 , 3D 설정 , 비디오 포맷 등에
Connection Negotiation
대한 초기화 작업 필요
클라이언트 입력 전송 - 클라이언트 단말에서 발생하는 이벤트를 호스트 가상머신에 동기화
그래픽 명령어 전송 - 클라이언트 렌더링을 위한 그래픽 명령어 전송
화면정보 압축 / 해제 - 네트워크 트래픽 축소를 위한 압축과 해제
화면정보 암 / 복호화 - 보안 전송을 위한 암 / 복호화 수행
313

---

## Page 314

III. VDI 프로토콜 구현 방법
가 . 클라이언트 렌더링 (client rendering) 방법
- 호스트 가상머신에서 전송된 다수의 그래픽 명령어를 클라이언트가 자신의 GPU( 그래픽 처리 장치
(Graphic Processing Unit) 를 사용하여 렌더링 수행
- 가장 이상적인 VDI 전송방법
장점
- 전송 대역폭이 작아 WAN 환경에서도 적용 용이함
- 모 든 애 플 리 케 이 션 에 대 한 다 양 한 그 래 픽 포 맷 을 클 라 이 언 트 가 이 해 하 고 렌 더 링 을 수 행
해야 하므로 VDI 프로토콜이 복잡함
단점 - 새로운 미디어 콘텐츠 마다 기능이 추가되어야 함
- 클 라 이 언 트 단 에 서 그 래 픽 렌 더 링 작 업 이 수 행 되 므 로 일 정 성 능 이 상 의 씬 클 라 이 언 트 가
요구됨
나 . 호스트 렌더링 (client rendering) 방법
- 호스트 CPU, GPU 를 활용하여 렌더링 작업 수행 후 화면을 캡쳐 (capture), 압축 (compress), 암호화
( crypt) 과정을 거쳐 클라이언트로 전송
- 클라이언트는 복호화 (decrypt), 압축해제 ( uncompress ) 를 거쳐 화면을 보여줌
- 스 크 린 이 미 지 를 그 대 로 호 스 트 에 서 클 라 이 언 트 로 전 달 하 므 로 2 D, 3 D 및 애 플 리 케 이 션 에
무관하게 사용 가능
장점
- 클 라 이 언 트 가 네 트 워 크 로 전 달 받 은 데 이 터 를 풀 어 화 면 에 뿌 려 주 는 역 할 만 수 행 하 므 로
클라이언트 렌더링 방식에 비해 간단한 클라이언트로 구현 가능
- 렌더링과 압축작업에서 부하가 많이 걸려 호스트 성능 저하 발생
- 큰 용량의 비트맵 데이터를 네트워크로 전송해야 하므로 큰 네트워크 대역폭 요구됨
단점
- WAN 환 경 에 서 의 사 용 자 경 험 (User eXperience : UX) 이 클 라 이 언 트 렌 더 링 에 비 해 낮 음
( LAN 환경에서 우수한 UX 제공 )
314

---

## Page 315

SON
기출문제
1. SON(Self Organization Network) 에 대하여 설명하시오 .
(KPC 모의고사 , 2009, 2013 6 월 )
펨토셀은 가정이나 사무실 등 옥내에 설치된 브로드밴드 만을 이용해 이동통신 코어 네트워크에 접속
하는 초소형 이동통신 기지국이며 , HeNB 는 ‘ Home envolved NodeB ’ 의 약어로 LTE 어드밴스드 펨토셀
기지국을 가리킨다 .
315

---

## Page 316

I. 차세대 이동통신의 핵심기술 , SON(Self Organization Network) 의 개요
가 . SON(Self Organization Network) 의 개념
- 주변 환경의 변화와 가입자의 사용량 변화 , 심지어는 기지국 앞으로 지나가는 차량의 이동에도 끊임없
이 영향을 받는 전파의 특성을 보완할 목적으로 보다 효율적이고 안정적인 기지국 운용을 위해 인공
지능 기술을 통신장비에 접목시킨 기술
나 . SON 의 필요성
- 통신사업자가 단말기로 전파를 보내주는 기지국을 설치하려면 전문기술자가 직접 현장에 출동해서
기지국을 설치해야 하며 또 공사 이후에는 주변 기지국들과의 출력 , 간섭 , 지형지물에 따른 안테나
보정 등 수많은 작업을 일일이 사람이 지정하고 이를 시험하는 번거로운 과정이 필요함 이러한 문제를
스스로 문제를 해결하는 인공지능을 네트워크에 접속시킴으로써 해결할 수 있음
316

---

## Page 317

II. SON 의 특징 및 3 가지 기능
가 . SON 의 특징
자가설정 , 자가최적화 , 자가치유 기능을 이용하여 기존 기지국 장비에 비해 네트워크 품질을
향상시키고 유지보수비용을 절감이 가장 큰 특징임
317

---

## Page 318

나 . SON 의 3 가지 기능
기능 기능설명 목적
운영자의 간섭을 최소화함으로써 유지
자가설성 기지국과의 자동연결과 자동설정을 통
보수비용을 절감할 수 있으며 인력 작
(Self Configuration) 해 스스로 망을 통합함
업에 의한 오류를 미연에 방지함
각종 단말기 , 기지국 , 제어시스템 등의
무선망 전송범위와 용량 , 품질 등을 최
자가최적화 측정된 데이터를 기반으로 해당 기지국
적으로 유지함으로써 최종 사용자의 체
(Self-Optimization) 의 출력 및 출력 특성 , 네트워크 측정치
감품질을 높여줌
등을 자동으로 조절함
활용하면 서비스 중단을 사전에 차단할
자가치유 문제가 발생한 부분을 감지해 해당 요
수 있으며 고장난 부분을 빠른 시간 내
(Self -Healing) 소를 망에서 제거시킴
에 복구함
318

---

## Page 319

III. SON 의 현황 및 활용방안
- CDMA, WCDMA, LTE 등 다양한 무선통신 기술에 활용될 수 있음
- 총소유비용 절감과 운영효율성 향상이 통신사업자들의 화두로 떠오르면서 자가조직 네트워크 기술이
최적의 대안으로 평가받고 있음
- 전 세계 주요 통신장비 업체 역시 저마다 자가조직 네트워크 기술 개발에 나서며 데이터 사용량 급증과
정액요금제 등으로 비용절감이 절실해진 통신사업자 확보에 총력을 기울이고 있음
319

---

## Page 320

• CAPEX(Capital expenditures) 는 미래의 이윤을 창출하기 위해 지출된 비용 . 기업 고정자산 구매 ;
• OPEX(Operating Expenditure) ; 운영비용 ;
IV. 데이터 폭증 (DE: Data Explosion) 에 따른 펨토셀의 각광 , CAPEX/OPEX 절감을 위한 SON 의 필요성
대두 배경과 기술적 개요
SON(Self Organizing Network)
펨토셀을 포함한 소형셀
Smart Device 의 활성화
필요성 대두
(small cell) 인프라 각광
모바일 데이터 사용 급증
( 펨토셀 자동 설치 )
대용량 기지국간
음영 지역 해소 가능하
DE(Data Explosion) 대
전송 자동협업
사업자의 CAPEX/OPEX 절감
나 설치시간 / 운영비용
두
이용자의 무선 환경 질적 개선
증가
한정된 주파수 자원 문제
기존 매크로셀 ( 기지국 ) 기반 셀 분할 기술 한계
- 단일망 매크로셀 ( Macrocell , 기지국 )/ 마이크로셀의 셀 분할 기술만으로 옥내 단말 무선 통신에 취약
하고 , 데이터 증가 요구를 수용하기 어려움
- 저출력 피코 / 펨토셀 , 무선중계기 등 소규모 영역을 이용한 이종망 구성으로 저비용으로 용량 증대 가능
- LTE-Advanced/3GPP 에서는 옥내 단말 무선 통신 용량 개선을 통한 전체 셀 용량 증대를 위해 ,
이종망 관련 기술을 중점 연구 / 논의 중
저출력 / 소규모 / 이종망 지원 펨토셀 , HeNB 개요
- 3GPP 에서는 LTE - Advanced 시스템 상에서 펨토셀을 지원하는 초소형 기지국을 HeNB 라고 명명하여
표준화 진행 중
- HeNB(3GPP UE): EUTRAN 을 무선 인터페이스로 이용하고 광대역 IP backhaul 을 통하여 이동통신
사업자 망에 접속하는 형태를 가지는 것을 특징으로 하는 사용자 소유의 기지국 장치
320

---

## Page 321

각 원은 해당 Cell 의 커버리지 반경을 의미함
321

---

## Page 322

V. 자가 조직 네트워크 , SON 의 요소 기술
시점구분 요소 기술 각 요소 기술의 역할
IP 주소 할 - 네트워크 인터페이스 설정
당 및 I/F - S1 인터페이스와 X 2 인터페이스를 연결
자동 설정 - S1 인터페이스 : MME( 단말 이동 관리 , 접근 제어 , 인증 수행 ) 와 연결
기능 - X2 인터페이스 : 기존의 다른 eNB 또는 HeNB ( 펨토셀 ) 와 직접 통신 ( 필요 시 )
OAM
- Operation, Administration, Maintenance
( 초기 구성
- OAM 또는 OAM 기능 하는 HeMS 와 연결 설정
정보 획득
구성정보
- 자기 정보 제공 , 인증 , 필요 SW 다운 , 파라미터 다운 , 주변 IP 획득 , 연결
기능 )
자동설정
PCI 설정 기 - 자신의 셀 영역 안에서 유일한 물리계층 식별자를 자동적으로 할당
능 - PCI 할당 프레임워크에는 분산적 , 중앙 집중적 두 가지 모두 지원 해야 함
ANR
- Automatic Neighbor Relation
( 주변 셀 정
- 이웃 감지 (neighbor detection function), NRT 관리 , NR 추가 / 삭제 연동
보 수집 및
- 이웃 제거 (neighbor removal function), 이웃관계가 없어진 셀 NRT 에서 제거
관리 )
- Coverage and Capacity Optimization
Basic CCO
- 서비스 커버리지 및 용량 최적화
자동설정
RO - RACH Optimization, 채널 최적화
운영정보 - Mobility Robustness Optimization
자동설정 MRO - Hand-over parameter 자동 조절
Radio
- 잘못된 핸드오버 검출 , 파라미터의 최적화 등
자동설정
- Energy Saving
ES
- 에너지 최소화 , 효율적 관리 ( 사업자의 정책에 따라 결정 )
322

---

## Page 323

Chapter V. 응용 서비스
Chapter V . 응용 서비스
무선충전기술 상
M2M 중
IoT 상
CoAP 상
WoT 하
IoE 중
V2V 중
비콘 중
WBAN 하
Multi-Channel Network 중
323

---

## Page 324

무선충전기술
기출문제
1. 최근 전기차의 발전이나 휴대폰과 같은 충전 장비가 발전함에 따라 무선충전기술이 중요해지고 있다 .
무선충전기술을 설명하고 응용 분야 및 동향을 기술하시오 . (KPC 모의고사 , 2013. 6 월 )
2. 무선충전시스템 표준 ( WPC , PMA, A4WP) 을 비교하여 설명하시오 . (KPC 모의고사 , 2015. 6 월 )
3. 스마트 미니더기기의 급속한 대중화로 인해 무선충전에 대한 수요가 확대되고 있다 .
무선충전기술 을 설명하고 응용 분야 및 동향을 기술하시오 . ( 컴시응 , 111 회 , 2 교시 )
324

---

## Page 325

I. 무선충전기술의 등장배경 및 개요 – ‘ 유도공명전 ’
가 . 무선충전기술 ( 무선전력전송 ; Wireless Power Transfer/Transmission: WPT ) 의 등장배경
- 일상생활에서 사용하는 거의 모든 가전 제품 , 휴대기기와 사무용 기기 그리고 산업용 기기들은 대부분
유선으로 공급되는 전기에너지를 사용
- 휴대기기의 발달과 광범위한 사용으로 유선 전력 공급이 휴대기기에 적합한 전력 공급원이 아님을 보여
줌
- 현재 스마트폰 , 노트북 등 모바일 기기에서의 배터리 부족문제는 무선충전기술로 해결 가능
- 문어발처럼 사용되고 잇는 전선 플러그의 문제를 해결하기 위한 방안
나 . 무선충전기술의 정의
- 전기 에너지를 무선 전송이 가능한 전자기파 또는 광파로 변환하여 무선으로 전력을 전달하는 것
- 주요 연구 대상은 투과성이 우수하며 , 상대적으로 인체에 영향이 적은 라디오주파수 (Radio Frequency:
RF ) 를 이용하는 방식이며 , 전송 전력과 전송 거리의 관점에서 크게 전자기 유도 방식 , 자기 공전 방식 ,
마이크로 웨이브 방식의 3 가지로 분류
325

---

## Page 326

II. 무선충전기술의 주요 방식 설명
가 . 무선충전기술 분류별 정의
기술 정의
- 전류가 흐르면서 생긴 자기장이 새로운 전류를 만드는 원리
자기 유도
- 충전 패드의 전원을 켜면 내부의 1 차 코일이 자기장을 발생 , 그리고 스마트폰 , 태블릿 PC 등의
방식
케이스에 내장된 2 차 코일이 유도 전류를 만들어 배터리를 충전하는 방식
전류가 흐르면서 , 자기장 ( 자석공간 ) 이
발생
-> 전류발생 ( 전위가 높은 곳에서 낮은
곳으로 이동 현상 ( 전류원리 )
326

---

## Page 327

자기 유도 방식
( 원리 )
1. 송신 코일에 전류를 흘리게 되면 , 자기장이 유도가 되고 , 시간에 따라 변하는 자기장은 다시 수신
코일에 전류를 유도하게 된다 .
2. 이렇게 유도된 전류가 다시 에너지 소스가 된다 .
3. 무선 상에서 에너지 전송 휴율이 우수하지 못해서 , 전동칫솔 등 주로 접촉에 가까운 근접거리에서
충전을 제공한다 .
[ 참고 ] 무선파워컨소시엄 : WPC(Wireless Power Consortium ), 파워매터스얼라이언스 (PMA) 가 양대축
으로 , 표준화 진행 중 327

---

## Page 328

자기유도 방식에서 ,
송신코일과 수신코일 간의 공진주파수가 정확히 일치하게 되면 무선 상에서 에너지 전송효율이 급격히
증가한다
따라서 기존의 자기유도 방식은 접촉에 가까운 수 mm 거리에서 충전서비스를 제공했지만 , 공진
자기유도 방식의 경우 1~2m 거리까지도 충전서비스를 제공한다 .
-> 공진을 이용한 자기유도 방식이다 , 공진방식은 위치에 구애받지 않기 때문에 편리한데 , 충전 효율이
낮아 상용화가 어렵다는 게 단점이다 . 공진방식은 7.68kHz 전력 주파수 대역을 사용하는
무선충전연합 (A4WP : Alliance for Wireless Power) 가 주도하고 있다 .
[ 최근 ] 무선충전단체 A4WP - PMA 병합 , ‘ 리젠즈 ’ 급물살 진행 중
328

---

## Page 329

기술 정의
- 송신부 코일에서 공진 ( 공명 ) 주파수로 진동하는 자기장을 생성하여 동일한 공진주파수로
자기 공명
설계된 수신부 코일에만 에너지가 전달되도록 하는 자기공명 (Magnetic Resonance) 방식
방식
- 자기 유도 방식의 거리에 대한 문제점 해결 가능함 !
공진자기유도방식은 2007 년 MIT 의 Soljacic 교수의 논문 [1] 에 기반을 두고 있다 . 기존의 자기유도방식에
서 송수신 코일 간의 공진을 발생하면 기존의 자기유도방식보다 급격히 효율이 증가된다는 내용을 담고
있는 논문으로서 Soljacic 교수의 위트리시티와 인텔 , 퀄컴 , 소니 등의 회사들이 현재 채택하여 상용화에
힘쓰고 있다 .( 공명 ; 레즈넌스 (Resonance; 진동계가 같은 고유진동수를 주기적으로 받아 , 진폭 증가현상 )
키워드 : 수 Mhz~ 수십 MHz 대역이용 , 1~2m 이내 , 삼성 / 인텔주도 ,
329

---

## Page 330

기술 정의
- 마이크로파를 이용 하여 안테나를 통해 마이크로파 신호를 공기 중에 방사하여 전력을
전자기파
전달하는 기술로서 , 주로 원거리 전력 전송에 활용 ( 우리가 보통 말하는 전자파 )
방식
주요업체 : NASA project
• AC/DC: 교류를 뜻하는 단어인 Alternating Current(AC) 와 직류를 뜻하는 단어인 Direct Current(DC) 를
합쳐놓은 것으로 , 교류 / 직류 겸용 등을 표시
• 마이크로파 : 마이크로파 (micro 波 ) 는 라디오파와 적외선 사이의 파장과 주파수를 가지고 있는 전자기파
• RF/DC: 에너지를 스마트 폰에 사용 가능한 DC 전류로 변환시켜줌 , 즉 RF - DC 컨버터
• 렉터나 ( Rectenna ) : 마이크로파를 직접 직류전력으로 변환하는 소자 ( 장치 )
330

---

## Page 331

나 . 무선 충전기술 비교
구분 자기 유도 방식 자기 공명 방식 전자기파 방식
1, 2 차 코일간 전자유도 송수신 코일 간 공명 현상 이 전자기파를 빔 형태 안테나로
원리
현상 이용 용 직접 송수신
주파수 125KHz, 13.56MHz 수십 kHz~ 수 MHz 2.45GHz, 5.8GHz
전송거리 근접형 ( 수 cm 이내 ) 중거리 ( 수 m) 장거리 ( 수십 Km 이상 )
특징 대전력 전송 유리 다수 , 근거리 전송 유리 장거리 전송 유리
휴대폰 , 노트북 ,
적용 휴대폰 , TV 등 가전기기 위성과 지구 간 전력 전송
전기 자동차
고효율 ( 90 % 이상 ), 여러 기기 멀티 충전 가능 ,
장점 장거리 전송 가능
기술구현 용이 이동편의성 증가
충전거리가 짧다 , 금속 인체 무해성 등 상용화 검증
단점 인체에 유해
주변 와류 현상 발생 단계
331

---

## Page 332

III. 무선충전기술 응용분야
가 . 무선충전기술 응용분야 개념도
- 전기 자동차나 스마트폰 등 휴대옹 기기에 광범위한 응용
- wireless 홈가전을 위해 청소기 , TV, 프린터 , 모니터 등과 같은 가전제품에도 적용 가능
- 원거리 전력전송기술을 이용하여 우주태양광 발전에 활용
332

---

## Page 333

나 . 무선충전기술 주요 응용분야
응용분야 설명
정차상태 또는 주행 중에도 충전되는 기술 , 전기차 시장의 확산에 영향을 미칠 것으로
전망
전기차
시내버스 , 마을버스 , 고속버스 , 택시 , 승용차 , 골프카 , 공장 , 항만 등 대규모 단지 내 이
송차량
10m 이내의 거리에서 플레이어와 디스플레이 , 스피커의 유선 연결 없이 전력 및 데이
AV 시스템
터 전송
가정의 PC 나 TV 전원에 연결해 1m 내에 있는 모든 기기를 동시에 무선으로 충전하는
가전용품 기술
TV, 가전제품 , 청소기 등
레저분야 사파리 , 보트 , 놀이공원 등에서 활용
철도분야 경전철 , 지하철 , 고속철의 무선 충전
한대의 충전기로 스마트폰 , 스마트 패드 등 여러 대의 단말기를 동시에 무선 충전할 수
휴대기기분야
있는 기술
로봇분야 가정용 , 산업용 , 군용 로봇의 무선 충전
333

---

## Page 334

공진자기유도방식 무선에너지전송 서비스 시나리오
334

---

## Page 335

무선 충전기술과 NFC 기술의 결합
구분 내용
무선충전기술과 NFC 기술을 결합하는데 있어 디바이스 측면에서 살펴보게 되면
개념
이는 무선 전력전송을 받을 수 있는 안테나와 NFC 안테나를 하나의 모듈로 구현
장점 소형화 ( 기존 개별 안테나 대비 50% 이상의 획기적인 소형화 )
연성회로기판 (FPCB) NFC 안테나를 기반으로 하여 NFC 통신
핵심 기술
MST( 마그네틱보안송신 ) 통신 및 무선충전 안테나로 활용
전파 간섭 시분할 (TDD) 혹은 주파수분할 (FDD) 를 통해 간섭 해결
335

---

## Page 336

사물지능통신
기출문제
1. 사물지능통신 (M2M) 의 개념 , 관련기술 및 응용 서비스에 대하여 설명하시오 .
( 관리 95 회 1 교시 )
2. 차세대 방송통신 융합 인프라인 사물지능통신 (M2M : Machine to Machine Communication)
에 대해 자세하게 설명하고 , 대표적인 사물지능통신 서비스 및 시장전망에 대해 기술하시오 .
(25 회 모의고사 )
336

---

## Page 337

M2M
I. 인터넷 인프라를 인간 대 사물 , 사물 대 사물 간의 영역으로 확대 및 연계통신 , 사물지능통신의 개요 .
가 . 사물지능통신 (Machine to Machine) 의 정의
- 광대역 통합망 (BcN), 차세대인터넷 주소 체계 (IPv6) 등 사람 중심의 인터넷 인프라를 인간 대 사물 ,
사물 대 사물 간의 영역으로 확대 및 연계하여 사람이 아닌 사물에 의해 저렴하고 안전하게 정보를
감지 , 전달할 수 있는 인프라
- M2M 혹은 O2N(Object to Object Intelligent Network) 으로 불리며 다양한 기기들안에 들어 있는
센서에 감지된 정보를 인터넷 유무선 통신만을 통해 수집해 한 차원 높은 다양한 서비스를 제공하는
차세대 방송 / 통신 융합 인프라
나 . 사물지능통신의 특징
구분 설명
- 다양한 방송통신망 (2G,3G,WIBRO 등 ) 의 통합 , 이종 (ICT+ 비 ICT) 융합 서비스
통합 . 융합화
제공이 가능한 지능기반 네트워크
광대역 , 모빌리티 , - 수천 억개의 사물 간 정보교환을 위해 광대역 , 이동성이 보장
글로벌화 - 인터넷 기반으로 세계 어느 곳에서도 사물정보의 상호 교환이 가능
- 공공 / 민간의 중요한 사물 정보 및 서비스에 대한 차별화 된 보안 및 고품질
보안 / 품질 보장화 보장이 가능 ( 사물정보의 중요성으로 인해 별도의 인증 , 식별 , 정보보호
체계를 적용 )
고기능화 - IPV6 기반으로 U - City 등 대규모 사물정보 서비스 제공에 적합
337

---

## Page 338

II. 사물지능통신의 기술적 구성도
338

---

## Page 339

III. M2M 주요 기술
계층 구분 주요기술
- 지능형 상황인식 기술
개인 맞춤형 서비스
- 개인 환경 서비스를 위한 프로파일 갱신기술
- 위험상황 인지기술 , 단말탈취 및 파손 대응기술
스마트 안심서비스
응용서비스 - 신체통신기술 , 초소형 저전력 휴대장치 기술
- 무인프라 교통흐름 제어 및 최적 경로 제공기술
차량 지능화 서비스
- 교통사고 가능성 인지 및 전달기술
공공 SoC 서비스 - 무전원 , 저전력 , 자가 전원 기능
- 수집정보 바탕으로 위치기반 정보 , 지리정보 처리 및 표시
서비스 제공계층
서비스 - 정보 전달 단문 메시지 전송 , 인증 , 과금 , IMS 를 이용 연동
플랫폼
- 수집정보 가공처리 , 데이터 형식 변환 , QoS 보장
네트워크 제공계층
- M2M 디바이스 동작 감시
Communication Ne - Access, Transport, Core Network 로 구성
tworks - xDSL, PLC, satellite, LTE, WLAN, WiMax 등
인프라 /
전달망
Area Network - NFC, Bar Code, QR Code, RFID, WiFi, Zigbee, 블루투스
( 사물인식 , 정보수집 ) - Security Camera, Smart Home, Automatic Meters
인터페이스 - 센서 /Actuator(Controller), M2M 통신모듈
하드웨어 , OS - OS(Firmware), 센서 / 제어 인터페이스 , 장치 Driver
- 상태관리 및 처리기능 , 원격제어기능 , 구성정보 처리기능 , 장애진단
단말장치
미들웨어 및 처리기능 , 사용통계 , 트래픽 스케줄링 기능 등
- M2M 디바이스 인증 , 데이터 무결성 검증 , 키관리 기능
어플리케이션 - 데이터 전처리 , OTA, 수집정보처리 및 변환 , 트랜잭션 처리
339

---

## Page 340

340

---

## Page 341

IoT(Internet of Things)
기출문제
1. 사물인터넷 (Internet of Things) 의 특성과 기본 구성요소를 설명하시오
( 정보관리 99 회 1 교시 4 번 )
oneM2M:
전자 퀄컴 마이크로소프트 진영
AllSeen Alliance: LG , ,
구글 주도
Thread Group:
올조인 사물인터넷 오픈 플랫폼 프레임워크 구성
(AllJoyn): .
전송을 담당하는 코어 라이브러리와 와 실제 장비의 서비스를 개발하는 기본 서비스
- (Core Library)
또는 데이터 주도 로 구성 라우터 구성요소임 단체
(Base Service) API(Data Driven API) , . : AllSeen
Alliance
아이오티비티 삼성전자와 인텔 오픈인터컨소시엄 진영 홈 허브 플랫폼 서비스 타이
(IoTivity): (OIC) .( IoT ,
젠 적용 단체
) : OIC
레이어 암기 필요
삼성참여
OIC(Open Interconnect Consortium):
운용체계 와 서비스 공급자가 달라도 기기간 데이터 전송이 가능한 커넥티비티 플랫폼 아이오티비
(OS)
티 을 개발 아이오티비티는 프로토콜에 기반을 둔 기술
1.0.0 . CoAP(Constrained Application Protocol)
341

---

## Page 342

IoT(Internet of Things)
기출문제
1. MQTT(Message Queue Telemetry Transport) 와 CoAP(Constrained Application Protocol) 에
대하여 비교 설명하시오 .
( 정보관리 108 회 2 교시 )
2. MQTT(Message Queuing Telemetry Transport) 에 대해 설명하시오 . (2015 모의고사 )
3. 사물 인터넷 연결 프로토콜 (Connectivity Protocol) 의 대표적인 프로토콜인 CoAP
(Constrained Application Protocol) 에 대해 설명하시오 .
(2015. 모의고사 )
4. oneM2M 아키텍처에 대하여 다음의 질문에 대하여 답하시오 .
가 . oneM2M 아키텍처의 엔티티에 대하여 설명하시오 .
나 . oneM2M 아키텍처의 참조 포인트에 대하여 설명하시오 . ( 정보관리 108 회 3 교시 )
5. IoT 기술 표준화 단체인 Thread group 과 Allseen alliance 를 비교 설명하시오 .
( 정보관리 , 107, 1 교시 3 번 )
6. 사물인터넷 (IoT : Internet of Things) 시스템의 TRL(Technology Readiness Level) 에 대하여
설명하시오 . ( 컴시응 , 105 회 )
342

---

## Page 343

IoT(Internet of Things)
기출문제
7. 사물인터넷 (IoT) 네트워크는 초연결성을 가지고 있어 장치 간 신뢰성 확보가 필수적으로 요구된다 .
사물인터넷 (IoT) 네트워크 보안 기술의 개념 , 특성 , CoAP / MQTT / LwM2M 프로토콜 구조 ,
보안 이슈에 대하여 설명하시오 .
( 정보관리 , 111 회 )
343

---

## Page 344

1. IoT (Internet of Things) 의 주목이유와 핵심기술에 대하여 설명하시오 .
( 모의고사 )
- 2009 년부터 컴퓨터나 스마트폰 등 사람이 사용하는 디바이스보다 각종 센서 , 카메라 , 자동차 등 일명
사물로 일컫는 디바이스들이 인터넷에 더 많이 연결되기 시작했다 . IBM 은 이 시점을 사물인터넷 ( IoT :
Internet of Things) 이 탄생 시기라고 말한다 .
- 기존 제품을 웹으로 연결해 보다 스마트하게 만들기 위한 ` WoT (Web of Things)` 기술
344

---

## Page 345

I. IoT(Internet of Things) 의 주목이유
- 모바일 컴퓨팅과 네트워크의 성장으로 인간의 개입 없이 기계 간에 통신을 통해 다양한 정보의 수집과
유통 , 그리고 실행이 가능해짐 .
- 인간과 사물 , 서비스를 포함하는 인간 주변 환경 (Ambient Environment) 을 상호 연결해주는 사물공간
연결망
345

---

## Page 346

II. 실세계에 존재하는 모든 영역간의 인터넷 연동 , IoT 의 특성
자체 연결 사물과 서비스간 스스로 연결성 지향
천이적 연결 사물과 사물 , 사물과 서비스간의 상호 전송관점의 연결 지향
346
346

---

## Page 347

III. IoT 구현을 위한 핵심기술
가 . 기술 분류
기술 분류 세부 기술
Wireline - Ethernet, PLC(Power Line Communication)
Wireless
- GSM/GPRS/EDGE, CDMA/EV-DO, 3G/4G, Satellite, LTE
WAN Cellular
- IEEE 802.11, WiMax, Wibro, WiFi(802.11n), Directed WiFi,
Wireless LAN
Wave(802.11p)
Wireless PAN - Bluetooth, Zigbee(802.15.4), RFID, NFC, 6LoWPAN
WSN - Zigbee, 6LoWPAN
나 . 주요 네트워크 기술
기술 설명 기반기술
- 사물에 RFID 태그를 부착하여 해당 EPC Network, EPC(Electronic
RFID
사물을 EPC 로 인식 , 활용하는 기술 Product Code)
WSN
- 센서노드와 통신할 수 있는 저전력
(Wireless ZigBee Aliance
Adhoc 네트워크 기술
Sensor Network)
- 경량화된 TCP/IP 프로토콜 기반의 WSN
IP 기반 WSN IETF 의 6 LoWPAN
- 추가 노력 없이 글로벌 인프라 구축 가능
347
347

---

## Page 348

IV. IoT 의 활용 사례
항 목 설 명
- 전력 센서들의 정보를 실시간을 취합 , 전력망간의 지능적인 상호 통신을 통해
스마트 그리드
Peak Time 전력을 관리 , 지능형 전력망 관리 기술로서 활용
스마트 카 - VMC(V2V, V2I, IVN) 와 노변 기지국간 통신 , 무인자동차 운행 , ITS 연동으로 활용
스마트 City - Home Security, 대기오염 측정 / 관리 , 수질오염 방지 , 폐기물 자동 관리 활용
348
348

---

## Page 349

V. TRL(Technology Readiness Level) – 기술성숙도 ; 1989 년 NASA( 미국 ) 에서 도입 , 기술성숙도 지표
Technology readiness levels (TRLs) are measures used to assess the maturity of evolving
technologies (devices, materials, components, software, work processes, etc.) during their
349
349
development and in some cases during early operations. ( 출처 : Wiki, KEIT)

---

## Page 350

V. 단체
스레드그룹 (Thread Group)
새로운 인터넷규약 (IP) 을 기반으로 한 무선 통신망 프로토콜을 통해 상호호환이 가능한 사물인터넷을 구현
하기 위해 설립된 컨소시엄 . 구글의 자회사이자 자동화 (Home Automation) 전문회사 네스트랩스의 대표
를 주축으로 2014 년 7 월 설립된 컨소시엄
올신얼라이언스 ( AllSeen Alliance)
2013 년 12 월 리눅스 재단이 사물인터넷 확산을 위해 설립한 범산업 컨소시엄 . 이 연합은 상호운용 가능한
기기와 서비스를 만들 수 있도록 오픈 소프트웨어 프레임워크 개발을 위해 소프트웨어와 엔지니어링 리소
스를 제공
350

---

## Page 351

항목 Allseen Alliance Thread Group
Wi-Fi, NFC, 블루투스등 기존 무선통신
다양한 유형의 스마트홈 단말들이 브랜드나
기술대비 향상된 성능을 보유한 스마트홈
목표 작동환경을 넘어 상호연결 가능한 오픈소스
네트워킹 프로토콜 ' 스레드 (Thread)' 개발
기반 플랫폼 제정을 목표
목표
- 스마트 홈 단말간 상호운용성의 보장 ,
- 메쉬네트워킹 방식 ( 전력 소모량 최소화 )
별도의 HW 불필요
- IPv6 지원 ( 효율적 , 안정적 )
기술특징 - 기존운영체제나 칩셋 구동 SW 에 약간의 프
- 기존 기기 SW 업데이트 만으로 ' 스레드 ' 사
로그래밍 코드추가로 사용가능
용 가능
AlljoyN 을 기반으로 TV, 음향시스템 , 스마트 2015 년 스마트홈 단말특화된 세부기술 사항
제품화
빌딩 , 모바일 어플리케이션등의 기술 제품화 발표 , 정식제품 출시 예정
SW, 플랫폼 , 보안 , 제조등 여러분야의 80 개 홈자동화 , 반도체 , 전자정보통신 등의 11 개
단체구성
사로 구성 (2014.11) 사로 구성 (2014.11 기준 )
참여사 LG, 파나소닉 , 퀄컴등 삼 성 , 프리스케일 , ARM 등 반도체 기업
- Alljoyn 의 기술적 완성도 높아서 주목되나
- 통신방식에 한정 표준화 전략 구성
퀄컴주도의 한계
- 최적화된 통신 방식 사용시 진영에 상관없
표준상황 - 후발주자인 OIC 와 경쟁중
이 해당 기술 사용가능성 존재
- OIC 의 스마트홈 표준에 채택가능성
351

---

## Page 352

V. 표준 3 가지 정리 요망
가 . 올조인 (AllJoyn):
나 . 아이오티비티 (IoTivity):
다 . oneM2M : 기출
IoTivity
352

---

## Page 353

V. 표준 3 가지 정리 요망
가 . 올조인 (AllJoyn): 올조인 (AllJoyn) 의 정의
- 여러 장치와 응용 프로그램이 서로 통신하고 연결하기 위해 모든 장치의 공통의 기능을 제공하는 핵심
라이브러리와 조명과 가전 등 각 장치에 필요한 서비스 프레임워크로 구성된 오픈 소스 소프트웨어 기반의
IoT 프레임워크
AllJoyn Network 상에서
사용할 수 있는 공통의
서비스를 제공
AllJoyn Network 를
사용하기 위한
lowest-level API 를
제공
353

---

## Page 354

V. 표준 3 가지 정리 요망
2) 올조인 (AllJoyn ) 의 기능 : 올조인은 기본적으로 로컬 ( 홈 ) 을 대상으로 하는 시스템으로 원격 연결은
AllJoyn Gateway 를 통해 IoT 인프라와 확장하는 방식으로 연결
MQTT(Message Queueing Telemetry Transport):
CoAP 와 유사하게 모바일 기기나 낮은 대역폭의 소형 디바이스들에 최적화된 메시징 프로토콜이다 .
Telemetry: 원격측정 , 텔레미트리의 의미 .
354

---

## Page 355

MQTT(Message Queue Telemetry Transport)
출제예상문제
문제
MQTT(Message Queue Telemetry Transport) 에 대해 설명하시오 .
Topic/ Data 전송 , TCP/UDP 레이어 이용
핵심 내용
oneM2M 의 IoT 표준 프로토콜 , MQTT Broker, Message Bus 방식
키워드
Transport 계층 , Publish - Subscribe 구조
1. 정보처리기술사 이론과 전략 강의교재 시리즈 참조
참고문헌
2. http://cafe.naver.com/arduinostory/33464
3. KPC 모의고사
355

---

## Page 356

I. IoT 기반의 TCP/UDP 프로토콜 사용 , 센서 (Publisher ) 의 측정 데이터 (data) 전송기술 , MQTT 개요
가 . MQTT(Message Queuing Telemetry Transport) 의 정의
- 통신대역폭이 한정적인 환경에서 동작하고 모바일에 최적화된 Publish - Subscribe 방식의 경량
메시지 프로토콜로 , Topic/ Data 전송을 전송하며 , TCP/UDP 레이어 이용함
나 . MQTT 의 특징
특징 설명
단순 단순하고 작은 Publish/Subscribe 메시지 프로토콜
작은 메시지 사이즈 2bytes,
오버헤드 최소화
가변길이 MQTT 헤더 + 어플리케이션 Payload
QoS 제공 중요 메세지 전달 보장
자체 연결보정 클라이언트와 서버간 유실 시 자체 보정 기능
356

---

## Page 357

II. MQTT 개념도 및 프로토콜 메시지 타입
가 . MQTT 개념도
- TCP/UDP 프로토콜 사용하여 , 센서 (Publisher) 는 측정 데이터 (data) 를 브로커에세게 보낼 때 ,
‘Topic’ 이라는 tag 와 같이 보내는 구조이다 .
예 ) Topic 은 다음과 같은 디렉토리 구조 를 갖음 .
예를 들어 센서는 이런 Topic 을 붙여서 데이터를 보냄 .
" 온습도센서 /OO 아파트 /OOOO 동 /OOO 호 / 거실 /5 번 "
357

---

## Page 358

II. MQTT 개념도 및 프로토콜 메시지 타입
나 . MQTT 구성요소
구분 설명
Publisher - IoT 기반의 센서데이터를 발생하는 주체
( 발행자 ) - Broker 에 센서 데이터를 전달하고 등록 (Broker 의 클라이언트 )
Broker - Proxy Server 의 역할로 발행자와 구독자 간 topic 의 등록과 구독에 대한
( 중개자 ) 정보를 주고 받는 정보를 연결하는 주체
Subscriber - 센서 데이터를 구독하는 형태로 데이터를 이용하는 주체
( 구독자 ) - 정보를 사용하는 Application (Broker 의 클라이언트로 동작 )
358

---

## Page 359

• MQTT 의 구현 및 적용은 어떻게 되고 있나 ?
1. 현재 Facebook 메신저가 사용 - 특히 PUSH 메시징 서비스에 많이 적용되고 있다 .
2. IBM 은 스마트 전력 관리 시스템에 MQTT 를 적용하였다 .
359

---

## Page 360

CoAP
기출문제
1. CoAP(Constrained Application Protocol) 대해 설명하시오 .
( 출제예상문제 )
웹기반 기기
Constrained Application Protocol,
관리 프로토콜
원엠투엠 ( oneM2M)
코드 크기
CoAP : 24 KB, LWM2M(Lightweight Machine
OMA
- to - Machine)
사물인터넷 연결의 대표 프로토콜
MQTT(Message Queue Telemetry Transport)
메시징 프로토콜
MQTT
이용
Broker, Publish, TCP/IP
XMPP(Extensible Messaging and Presence Prot
ocol)
XMPP
기반 기반한 메시지지향 미들웨어용 통신 프
XML
로토콜
프로토콜
LwM2M - Light Weight .
에서 만듦
LwM2M OMA(Open Mobile Alliance) .
를 주로 사용함
CoAP .
360

---

## Page 361

I. 사물인터넷 연결의 대표 프로토콜 , CoAP (Constrained Application Protocol) 의 개요
가 . CoAP (Constrained Application Protocol) 의 정의
- 저전력 및 통신 중 데이터 손실 가능성이 큰 제약적인 환경에서의 노드 (Node) 와 네트워크에 특화된
웹 전송 프로토콜
- 적은 전력을 소모하고 , 신뢰성 있는 통신을 제공함으로써 , 사물 인터넷 환경에서 다양한 서비스를 제공
하기 위한 핵심 프로토콜 (IETF 표준 프로토콜 )
나 . CoAP 의 특징
- M2M 요구사항을 만족시키는 REST 기반의 저성능 노드용 응용계층 프로토콜
- Stateless HTTP 매핑 (HTTP 를 통해 CoAP 통신을 하는 M2M 노드의 연결정의 및 프록시 기능 )
- 비동기 트랜잭션 지원
361

---

## Page 362

II. CoAP 의 추상적 계층
추상적 계층상의 CoAP 의 위치를 나타낸다 . CoAP 은 기본적으로 UDP 와 같은 데이터그램 방식
의 트랜스포트 계층 위에서 비동기적으로 전송되는 것을 다룬다 . 따라서 신뢰성 있는 전달을 위한 재전송
및 타이머 관리를 옵션으로 포함하고 있다 . 보안을 위해서 UDP 계층과 CoAP 계층 사이에 DTLS(Datagram
Transport Layer Security) 계층이 사용될 수 있다 .
CoAP 은 확인형 (confirmable), 비확인형 (non - confirmable), 승인 (acknowledgement), 리셋 (reset) 의
4 가지 메시지 타입을 정의하고 있다 . CoAP 메시지는 요청 (request) 과 응답 (response) 의 상호작용으로
362
전달된다 .

---

## Page 363

나 . CoAP 프로토콜 계층별 역할
계층 내용
UDP - CoAP 에서 사용하는 기본 전송계층 프로토콜 (User Datagram Protocol)
- 트랜잭션을 비동기나 동기적으로 처리하는 계층
CoAP Transactions
- 트랜잭션 메시지는 트랜잭션 별로 ID 를 생성 ( 중복 패킷 전송 방지 )
- REST 데이터 처리를 위한 계층
CoAP REST
- HTTP 방식인 GET, POST, PUT, DELETE 의 기본적인 방식 사용
[ 용어해설 ] RESTful REST 는 Representational State Transfer
( 표현 가능한 상태 전송 ) 의 줄임말 이며 , 웹과 같은 분산 시스템을 위한
소프트웨어 아키텍처의 한 종류임 . HTTP 위에 별도의 계층 없이 ,
HTTP 의 GET, PUT, POST, DELETE 의 메소드를 사용하여 데이터를 교환함 .
데이터의 식별 , 즉 리소스의 구조는 URL 을 통해 표현됨 .
단순하면서도 다양한 기능을 제공하여 손쉽게 서비스를 개발할 수 있음 .
363

---

## Page 364

XMPP
I. XML 기반의 실시간 메시지 교환 프로토콜 , XMPP 의 개요
가 . XMPP(eXtensible Messaging and Presence Protocol) 의 정의
- 2 인 이상의 참여자 간에 구조적 데이터를 거의 실시간에 가깝게 교환할 수 있게 해주는 XML 기반의
TCP 커뮤니케이션 프로토콜
나 . XMPP 의 특징
특징 내용
XMPP 는 중앙 서버에 의존하지 않고 여러 트랜스퍼 에이전트
분산화
(Transfer agents) 에 의해 작동
개방형 표준 IETF 가 지정한 표준 , 개발은 단일 업체에 제한 되지 않음
유연성 사용자가 직접 만든 XMPP 최상단에 빌드 가능
보안성 SASL, TLS 의 강력한 보안 제공
DNS 화 작동 방식이 e - mail 과 유사
364

---

## Page 365

II. XMPP 의 개념도 및 구성요소
- 게이트웨이에서 외부 메시징 및 프로토콜 간의 변환 기능 제공
구성요소 설명
서버 DNS 에 의한 호스트 이름 또는 IP 로 네트워크 상에 표현
클라이언트 이메일 주소와 같이 호스트 이름과 아이디를 이용한 형태로 구성
클라이언트와 같이 특정 서버에 연결 되고 게이트웨이를 통해서 다른
게이트웨이
네트워크의 게이트웨이와 연결 되는 통로
- 확장 가능한 프로토콜인 XMPP 는 다양한 end - point 프로토콜 간의 보편적인 연결을 제공하는
365
백본 프로토콜

---

## Page 366

III. IoT 네트워크 프로토콜 , MQTT, CoAP, XMPP 의 비교
구분 MQTT CoAP XMPP
개발목적
사물 인터넷 메시지 전송 제한된 디바이스 간 통신 인스턴스 메시지 통신
전송 프
TCP(UDP) UDP TCP
로토콜
계층적 군소 토픽 전탈 HTTP 기반
XML 기반 메시지 처리
메시지 버스 방식 RESTful 아키텍처
구성
강력한 보안 기능
저전력 저전력
다수 메신저 적용
대량 메시지 전송 비동기 전송
Facebook 메신저 ,
활용현황
M2M 단말 통신 구글 , MSN 메신저
이통사 Push
표준화
OASIS IETF IETF
366

---

## Page 367

I. LwM2M(Light Weight Machine to Machine)
LwM2M Protocol Stack LwM2M Protocol 정의
CoAP 을 기반으로 하여 Device 에 정의되어
있는 Object 와 resource 관리ㆍ서비스를 위한
프로토콜
LwM2M Protocol 보안 특징
- DTLS 에 기반한 UDP 채널 보안 , 접근 제어
제공
- DTLS 를 통한 UDP 보안으로 세션키 생성 ,
상호 인증 , 무결성 , 기밀성 보장
- CoAP 와 동일한 DTLS 기반 4 가지 보안 모드
제공
LwM2M 에서 사용되는 표준 객체를 정의하며 LwM2M Security 객체는 서버
LwM2M Objects
URI, 부트스트랩서버 여부 , 보안모드 , 공용키 , 비밀키 등의 리소스 포함
LwM2M Object 에 대해 Discovery, Subscription, Notification 등의
LwM2M Protocol
추상화된 Protocol 제공
UDP 및 SMS 상 전송되는 Message 에 대해 CoAP 전송 프로토콜을 사용 .
CoAP
이 프로토콜은 메시지 헤더 , 요청 / 응답 코드 , 메시지 옵션 및 재전송
메커니즘을 정의
DTLS LwM2M Server/Client 간 교환 Message 에 대해 secure UDP / SMS 제공
UDP 전송에 대한 신뢰성 보장을 위해서 CoAP 에 내장된 재전송 메커니즘을
UDP Binding
사용
with CoAP
367

---

## Page 368

II. LwM2M(Light Weight Machine to Machine) 의 아키텍처
- 서버와 클라이언트 사이에서 , 인터페이스를 통해 , 서버정보를 얻고 , 클라이언트에서 객체와 리스소를
등록하고 , 사용하는 아키텍처이다 .
368

---

## Page 369

LPWAN - NB-IoT, LoRa
기출문제
1. 4 개 기술 비교하시오 . ( 출제 예상 문제 )
2. LPWA(Low Power Wide Area) 에 대해 설명하시오 . ( 정보관리 , 110 회 )
저전력 , 장거리 LPWAN(Low Power WAN) 네트워크 ,
LoRa 개념
저전력 저비용 고신뢰를 충족하며 장거리 커버리
- , ,
지를 제공하는 무선통신 네트워크 기존의 무선 프로
,
LoRa(Long Range) 비면허대역
토콜보다 훨씬 긴 범위 가시거리 확보된 환경에서 최
(
대 서비스 제공
21km)
868 MHz , 0.3 kbps ~ 50 kbps
LoRaWAN 표준은 데이터 전송 속도가 낮은 사물인터
넷 (IoT) 과 M2M(Machine - to - Machine)
SigFox 800~900Mhz 비면허대역
LTE -M 3GPP release 12. 면허대역
NB -IoT 면허대역 , 가드대역내 사용하지 않은 자원블록 이용 면허대역
369

---

## Page 370

370

---

## Page 371

I. IoT(Internet Of Things) 의 저성능 , 저전력 설계 LPWAN 의 개요
- 저성능 컴퓨팅 파워를 사용하면 저속 통신을 하는 사물들을 연결하기 위해 10Mbps 미만 무선통신을
기반으로 킬로바이트 단위의 적은 데이터를 전달하는 기술
II. IoT 지원 LPWAN 의 방식분류 및 세부기술 설명
가 . LPWAN 의 방식분류
구분 비전용망 방식 (Licensed 대역 ) 전용망 방식 (ISM 대역 )
기존의 LTE 망을 이용하여 , IoT 지원을 위한
개념 LTE 망이 아닌 , ISM 대역을 이용하여 IoT 지원
주파수 대역을 할당
- 뛰어난 전송경로 , QoS 인증보안
- 신규 사업자 / 서비스 업체 선택 가능
장점 - 기존 셀룰러 망 재활용
- 비용측면 유리함
- 신속한 커버리지 확대 가능
- 이통사들에 의존적
- 보안 / 커버리지 제한적
단점 - Time-To-Market 측면열세
- 소수의 글로벌 플레이어
- 주파수 비용
371

---

## Page 372

나 . LPWAN 의 세부기술 설명
구분 비전용망 방식 (Licensed 대역 ) 전용망 방식 (ISM 대역 )
기술명 LTE-M NB-IOT SIGFOX LoRa
커버리지 11km 15km 12km 10km
채널
14Mhz 200Khz 200Khz 500/250/125Khz
대역폭
통신속도 1Mbps 150Kbps 100bps 10kbps
표준화 3GPP Rel.13 3GPP Rel.13 비표준 비표준
서비스
2016 년 상용화 2016 년 상용화 2016 년 상용화 2016 년 상용화
시기
견고한 데이터 타기술대비 많은 전
기존 LTE 망 활용 넓은 커버리지와 다수
특징 전송 력소모 , 낮은전파간
NW 구축비용절감 파트너 보유
안전성 보유 섭
관련 KT,LG 유플러스 KT,LG 유플러스
SK 텔레콤 SK 텔레콤
국내망 SK 텔레콤 SK 텔레콤
372

---

## Page 373

WoT(Web of Things)
기출문제
1. 사물 웹 - WoT(Web of Things) 를 설명하시오
( 출제 예상 문제 )
I. 서비스 개발자와 사용자 입장에서 본 유비쿼터스 세상 , WOT 의 개요
가 . 사물간 통신의 흐름
- 실제 세계 사물의 기능 또는 데이터를 사물을 제어하는 고유의 프로토콜이나 방법으로 접근하는 방법
에서 벗어나 보편적인 방법으로 접근하고자 하는 노력이 있었음
- 특히 보편적으로 보급되고 활용되고 있는 웹을 통해 사물의 기능을 노출시키고 접근하는 방법이 많이
개발되고 있음
- HTML, JavaScript, PHP 등의 언어를 활용하여 사물의 기능과 데이터를 접근 제어할 수 있음
- 웹 방식을 이용함으로써 부가적으로 가능한 사물에 대한 브라우징 , 검색 및 북마킹 등의 기능이 지원
되고 URI(Uniform Resource Identifiers) 를 통해 사물과 통신할 수 있게 되는 것
373

---

## Page 374

II. 사물 웹 (WoT) 의 개념
- M2M, IoT 개념은 실제적으로 사물 웹을 통해 구현될 수 있음
374

---

## Page 375

III. 사물 웹 적용 모델
- 실제의 사물이 웹에 통합되고 이들은 단지 웹 상에서 접근 가능한 하나의 서비스로 보여짐
375

---

## Page 376

IoE
기출문제
1. IoE(Internet of Everything)
( 컴시응 , 102 회 1 교시 )
376

---

## Page 377

I. 세상의 나머지 99% 까지 모두 인터넷에 연결돼 실시간 상호 소통함으로써 전례 없는 가치를 창출해
내는 시대
- 인터넷 ( 전자기기 ) > 사물인터넷 ( IoT : 모든 사물 ) > 만물인터넷 ( IoE : 세상 모든 것 )
구분 대상 설명
Things -IoT 에서 말하는 인터넷에서 연결되는 일반 사물
- IoT 를 통해 우리가 어떻게 다른 사람 , 사물 , 서비스와 연결될
People
것인가에 대한 것
Everything
Process - 상황에 맞게 처리하는 방식 , 순서 , 정보 탐색 방법
- 축적된 데이터에서 가치를 발굴해 내는 빅데이터
Data
- 그 가치를 실시간으로 필요한 곳에 전달하는 Data in Motion
Method Internet -Everything 을 실시간으로 연결하는 지능형 네트워크
Big Data - 실시간으로 쌓이는 대량을 데이터를 저장 / 관리 / 분석하는 기술
Cloud - 가상화 기술을 기반으로 네트워크 상의 복잡한 인프라구조 관리
Technology
IPv6 -IPv4 를 대폭 확장한 ( 속도 / 용량 / 주소 ) 차세대 인터넷 주소 체계
IoT - 생활 속 사물들을 유무선 네트워크로 연결해 정보 공유하는 환경
377

---

## Page 378

V2V
기출문제
1. V2V(Vehicle to Vehicle) 의 개념과 적용시 고려사항에 대해 설명하시오 .
( 정보관리 , 104 회 1 교시 )
378

---

## Page 379

I. V2V(Vehicle to Vehicle) 의 개념
가 . V2V 의 정의
- VANET((Vehicular Ad-hoc NETwork) 의 요소기술로 , 차량 안전서비스를 위한 차량간 멀티홉 통신 기술
나 . V2V 의 요구사항
요구사항 설명
호환성 - WAVE 를 기반으로 한 V2X 기술들과의 호환되는 성질
자체구성 - 주기적 안전주행 메시지 브로드캐스팅을 통한 홉 ( 차량 ) 통신 지원
보안성 - V2X 기술과의 호환 , 내부 참여자 통신시 메시지는 보안성 만족
프라이버시 - 차량 위치 및 차량 정보 등 프라이버시의 불필요한 공개 금지
- 운전자의 신원은 보호되야 하나 , 타 차량 신원은 인증되어야 하며 , 프라이버시는
보호 되어야 하나 , 긴급 상황 시 추적이 가능해야 하는 등 , 적용 시 상충되는 고려사항 존재
379

---

## Page 380

II. IoV(Internet of Vehicles) 의 개념 및 주요 기술
IoV(Internet of Vehicles) 의 개념
- 사물인터넷 시스템을 탑재한 형태로 IT 기술과 자동차를 연결 , 자동차가 주변과 실시간으로 소통하며
운전자에게 안전과 편의를 제공하는 기술
- IoV 의 초기 개념이라고 할 수 있는 커넥티드카 (Connected Car) 가 중요한 기술요소 .
- 커넥티드카의 연결성은 웨어러블 또는 V2X 통신환경에서 제공
- 주요서비스 : 자율주행 , 클라우드 접속 , 운전자 인터렉션 , 차세대 텔레메틱스
380

---

## Page 381

III. IoV(Internet of Vehicles) 의 주요기술
주요 기술 기술 관점 기술 설명
자동차에 내장 , 스마트폰과 연동하면서 유무선 통신으로
텔레메틱스 (Telematics)
인터넷에 접근 .
DSRC, WAVE 같은 표준방식의 V 2 X 이용 . 도로상황인식 ,
커넥티드카 첨단교통시스템
성능향상 , 안전운전정보 제공 , 경보제공 ( 능동적 안전 관리 )
(Connected
지능형 자동차 반 (Half) 자율주행 , 무인주행
Car)
인포테인먼트 기기 (Device), USB, Bluetooth, Mirror Link,
통신 (Communication)
Wi - Fi Hotspot
정보접근성 고객 맞춤형 정보생성
차량중심 유무선통신 IVN, V2V Network, V2I, P2V( 보행자 )
5.9GHz, 시속 180Km/h 이상 고속주행 환경에서
WAVE 패킷프레임 100ms 이내의 송수신 표준 . IEEE 802.11 a/g
수정 / 개량
0 단계 : 운전자 직접 통제
V2X 통신
1 단계 : 특정기능 1 개 이상 자동화 시스템 탑재
가이드라인 (Guideline) 2 단 계 : 대 부 분 상 황 운 전 자 운 전 , 2 개 이 상 자 동 화
- NHTSA( 미도로교통국 ) 시스템 탑재
3 단계 : 본격적 자율주행 ( 구글카 , 아우디 TTS)
4 단계 : 완벽한 자율주행 가능차량 ( 목적지 입력시 주행 )
자동차를 스마트 객체로 활용 , 정보 수집 및 가공
클라우드 접속 서비스 - 블랙박스 촬영 / G 센서를 이용한 각종정보 수집
- 도로상황 정보 / 시간별 교통정보 생성
기타 기술
운전자 인터렉션 서비스 음성인식 , 핸즈프리 , 터치 인터페이스 , 모션캡처 등
도로상황 및 교통정보 , 카 쉐어링 , 주변정보 , 차량 관리
차세대 텔레 메틱스
381
정보

---

## Page 382

IV. V2V(Vehicle to Vehicle) 적용 시 고려사항
고려사항 항목 설명
- 전송된 메시지가 정당한 사용자로부터 생성된
인증 (Authentication) 메시지임을 검증해야 함 ( 무결성 , 부인방지 기
밀성 )
보안성
- 메시지를 탈취하여 재전송하는 네트워크 혼란
재생공격 (replay attack) 방지
을 야기하는 재생공격을 방지해야 함
추적성 (Traceability) - 사고등 분쟁발생 시 차량의 실제 ID 추적가능
프라이버시
익명성 (Anonymity) - 차량통신시스템은 개인정보에 접근하면 안됨
- 암호연산 및 통신 오버헤드가 정상적인 V2V 서
가용성 (Availability)
비스를 저해하면 안됨
네트워크
다이버시티 - 신뢰성 있는 통신링크를 제공하기 위해서 다이
( Diversity) 버시티 기법의 적용
382

---

## Page 383

IV. 스마트카 인포테인먼트 (Infotainments) 플랫폼의 주요동향
주요 플랫폼 특징 설명
OAA 결성 2014.1 결성 및 안드로이드 오토 공개
Android
자유도 향상 , 자동차에 내장되는 플랫폼을
(Google) Open Platform
독자적으로 변경설계
클라우드 서비스 플랫폼 Bluetooth Profile 로 다양한 연결성 제공
CarPlay
시리 (Siri) 를 이용 , 음성연결 , 핸즈프리 , 메모 ,
(Apple)
음성에이전트 활용
선택서비스
Embedded Automotive OS(Operating 쉬운 개발 환경 , 스마트폰과의 블루투스
Window in the System) 연결하여 다양한 사용자 인터페이스를 제공 .
Car 스마트폰과 자동차의 정보 단말 연결을 위한
Mirror Link
(MS) 호환 표준 ( 차량에 설치된 입력 수단으로
(CCC: Car Connectivity Consortium)
스마트폰 앱 제어 )
리눅스 파운데이션 추진 , 오픈소스 프로젝트 ,
Tizen -IVI 프로젝트 날씨 , 지도 , 대시보드 , 미디어 재생 , 스마트폰
AGL
연결 등
(Tizen)
Tizen -IVI 프로젝트의 OS 와 웹 표준
리눅스 , HTML5 등
환경제공 ( 자바 스크립트 , CSS 제공 )
383

---

## Page 384

비콘 (Beacon)
기출문제
1. 비콘 (Beacon) 를 설명하시오
( 출제 예상 문제 )
2. 국내 Beacon 서비스의 주요 응용분야를 제시하고 , 활성화에 대한 한계요인을 설명하시오 .
(107, 정보관리기술사 )
384

---

## Page 385

I. 비콘 – 등대의 의미
아이비콘은 애플이 표준화하는 비콘의 한 형태다
385

---

## Page 386

I. 위치기반 서비스의 핵심 인프라 , 비콘 (Beacon) 의 개요
가 . 비콘 (Beacon) 의 개념
- 블루투스 4.0(BLE) 프로토콜을 기반으로 하는 정확한 실내 위치기반 차세대 근거리 무선통신 기술
- UUID(Unique User Identifier) 를 가지고 지속적으로 전송할 때 Frequency Hopping( 주파수 호핑 ) 기
술을 사용하여 할당된 주파수 내에서 초당 약 1,600 회로 주파수를 변경하는 전송기술
( 주파수 호핑 기술로 다른 무선 신호와 혼선 회피 가능 )
나 . 비콘 (Beacon) 특징
- 사용자 몰림 현상에도 정확한 위치확인 기술로 개발 사용자 구별가능 ( 실내 사용가능 )
- 고도화되고 정교화된 지역 ( 위치 ) 맟춤서비스 제공 가능 (LBS )
- 결제 , 피드백 , 지역 설문 , 정보 전달 등 다양한 응용서비스 이용 가능
- 저전력 ( 별도의 전원 연결 없이 약 3 년 ) 으로 운용 가능한 BLE 기술 사용
386

---

## Page 387

II. 비콘의 동작원리 및 구성요소
가 . 비콘의 동작원리
비콘 단말장치는 자신의 신호 도달거리 내로 스마트폰을 가진 사람이 들어오면
Advertising Packet 을 전송
1 단계
( 이 패킷 안에는 특정 장비의 ID, 서비스 장소명 , 송신 신호체계 등의 데이터 값이 포함되어
전송 )
스마트폰 앱은 ID 값을 인식하여 , 서버로 전달
2 단계
( 수신단말 - BLE 장치간 거리를 이용하여 기준점 측위 또는 다변측위로 위치를 계산함 )
ID 를 가지고 있는 서버는 위치를 확인 , 해당 위치에 설정된 이벤트나 서비스 정보를
3 단계
스마트폰에 전송
387

---

## Page 388

나 . 비콘의 구성요소
구성요소 구현 내용
일정한 주기로 WPAN(BLE 또는 초음파 ) 기반 비콘 신호 (UDDI, 각도 ,
Access BLE,
세기 ) 송신장치
Point 초음파 송신기
위치를 알고 싶은 대상체로 비콘에서 발생한 WPAN 신호기반 비콘
Tag 스마트폰 O/S 앱
신호 수신 장치
RSS(Received Signal Strength), TOF(Time of Flight; 초음파와 적외
선 등을 통해 , 어떤 사물의 거리를 측정하는 기술로서 , 도달시간 측정 )
Position
TOF, RSS 등 Tag 의 위치정보 계산장치 ( 위치 추적기술 중 TOF 는 Access Point
Engine
와 불특정 다수인 Tag 간 시간동기화가 필요하여 사용이 어려워 , 신호
세기기반인 RSS 가 주로 활용 )
388

---

## Page 389

III. 무선 근거리 통신기술 비교
구분 NFC RFID Beacon
인식거리 최대 10cm 최대 수십 Cm ~ 수십 m 최대 50m
전송속도 보통 느림 빠름
인식반경 한정된 방향성 한정된 방향성 자유 방향성
실내 위치 확인 불가능 불가능 가능
Bluetooth 4.0 이상 모든
지원 단말 NFC 탑재 단말 별도의 리더가 필요 단말 지원 가능
(Android, iOS 기능 지원 )
결제 , 정보 공유 결제 , 정보조회 , 물품추적 ,
( 교통카드 , 광고판 ) 물품추적 , 정보조회 데이터 교환
활용방안
RFID (radio frequency ( 하이패스 , 사물인식 tag) ( 박물관 , 마트 , 의료 , 극장
identification) 적용 등 실내 / 외 모두 활용 가능 )
수십 ~ 수백개의 인식속도를
장점
가지고 있음
389

---

## Page 390

II. 비교표
구분 비콘 NFC
기술
Bluetooth 4.0(Bluetooth low energy) RFID (radio frequency identification)
통신범위 최대 50m 10 cm ~ 최대 20 cm
전력소모 저전력 , 인프라 저비용 저전력 , 인프라 고비용
배터리 소모 배터리 교체없이 2 년 사용 가능 아이비콘보다 많이 소모
관련 기기 비콘 송신기 NFC toggle
주파수 2.4GHz 13.26MHz
통신기기수 1:1, 1:N 지원 1:1 지원
통신 타입 WPAN P2P
관련표준 BLE 4.0 기반 ISO 14443, ISO18092
기반 운영체제 Apple iOS 7 이상 , Andorid 4.3 Google Android 4.0 , windows 8,
주요 기능 - GPS 보다 정교한 위치 파악 -Wired mode 뱅킹 chip 과 app 사이 통신
- 위치에 맞는 메시지 전송 (push) - 휴대폰 카드 리더기
- 모바일 결재 수행 - NFC 장치간 주소록 , 사진 , 파일 P2P 전송
390

---

## Page 391

WBAN
기출문제
1. WBAN(Wireless Body Area Network)
( 조직 92 회 1 교시 )
391

---

## Page 392

WBAN
V. 최신 토픽
I. 인체 내외부의 무선통신 WBAN - 무선인체영역통신 - 의 개요
가 . WBAN (Wireless Body Area Network) 정의
- 건강보조 및 의료용 목적으로 의류나 인체에 장착된 디지털 기기들을 무선으로 연결 , 인체를 중심으
로 내 . 외부 3M 이내에서 자유로운 통신을 지원하는 근거리무선통신 기술
- 사용자 주변의 근거리에 존재하는 다양한 객체들 간에 무선기반 소형ㆍ저전력ㆍ저가형ㆍ친환경 전송
방식 및 응용 프로토콜을 제공하여 녹색성장 및 미래 그린 컴퓨팅을 지원하고 유비쿼터스 사회를 실
현하는 핵심기술
나 . WBAN (Wireless Body Area Network) 기술의 등장배경
1) 근거리무선통신의 요구
2) 다양한 객체들간에 무선기반 통신 요구
3) 소형 . 저전력 . 저가형 . 친환경 전송방식 요구
4) 모바일 환경의 발전으로 인해 언제 어디서나 환자의 상태를 모니터링하고 그 정보를 실시간으로 병
원에 전달하여 환자에게 적절한 서비스를 제공하여 건강을 관리할 수 있는 U - Health 서비스 구현
요구
392

---

## Page 393

II. WBAN 의 구분과 기술적 요구사항
가 . WBAN 의 용도별 구분
WBAN
Non-medical BAN Medical BAN
Wearable CE 저속 / 고속 Wearable Med Implant 저속 / 고속
분야 구분 설명
인체내부에 이식되어 인체내부의 건강상태에
의료용 이식형 무선기기 대한 모니터링이나 인체에 이상이 발생시
(Medical-WB 대처해 주도록 설계
AN) 인체외부 3 미터 이내에서 바이오 센서로부터
외부 무선기기
자료 수집
CE(Consumer Electronics) 용도의 다양한
비 의료용 IT 서비스를 제공하기 위하여 인체를 중심으로
(Non -Medical WBAN) 초근거리 ( 3 m 이내 ) 에 위치한 Sensor 및
Device 간의 무선통신을 지원하는 프로토콜에 대한 기술
393

---

## Page 394

II. WBAN 의 구분과 기술적 요구사항
나 . WBAN 의 기술적 요구사항 .
구분 인체외부 인체내부
용도 비디오 / 오디오 , 데이터 데이터 , 이미지
도달거리 < 3m < 2 m
수명 응용분야에 의존 5~10 년
전송속도 10 kbps ~ 10Mbps 10 kbps ~ 6 Mbps
Duty Cycle 1% ~ 100% 0.1% ~ 50%
안전성 중간 매우 높음
Piconet 개수 10 5
[ 참고 ] 한 주기 (= 전류가 흐른 시간 + 전류가 흐르지 않은 시간 ) 에 대한 전류가 흐른 시간의 비를
듀티 사이클이라고 함 /
394

---

## Page 395

III. WBAN 의 개념도
- 사람을 중심으로 하나의 WBAN 코디네이터와 다수의 WBAN 장치로 구성
395

---

## Page 396

IV. WBAN 의 활용분야
분야 설명
- ECG ( 무선심전도계 ), 인공심박조율기 , 무선내시경
의료분야
당뇨병 모니터링 , 원격진단 모니터링 , 보청기
- 인체 주변의 컴퓨팅 장치와 다양한 센서를 활용한 가상 현실 응용
엔터테인먼트
- 인간의 오감을 능가하는 증강 감각 등 게임이나 엔터테인먼트 서비스 제공
- 휴대용 CE 제어 , 스마트 키 , 헤드폰 , 헤드셋 , 모션캡쳐
디지털 가전
데이터 저장장치 , 원격 RGB 디스플레이
질병관리 - 애완동물 또는 가축의 질병관리
396

---

## Page 397

다중채널네트워크 (Multi - Channel Network)
출제예상문제
1. 다중채널네트워크 (Multi - Channel Network ) 에 대하여 설명하시오 .
(107 회 컴시응 1 교시 기출문제 )
문제 다중채널네트워크 (Multi - Channel Network) 에 대하여 설명하시오 .
도메인 디지털서비스
1 인 창작자의 콘텐츠 촬영 , 교육 , 마케팅 등 비즈니스 기반을 지원하고 채널에서
정의
얻는 광고 수익을 공유하는 사업
키워드 1 인 창작자 , 수익 쉐어 , 파트너 / 저작권 관리
출제의도분 콘텐츠 생산의 다양한 접근 경로에 따른 기술적 사업영역의 확장에 따른 관련 문제
석 출제
답안작성 서비스에 대한 확장에 대한 개념으로 집중적인 기술영역과 함께 서비스 측면과
전략 관련 사례 중심의 답안 접근
MCN 현황과 콘텐츠 기반 창작 , 창업 생태계 활성화 전망 , 방송통신진흥본부
참고문헌
방송통신기획
풀이
송정호 기술사 ( 제 107 회 정보관리기술사 / babosine@naver . com)
기술사님
397

---

## Page 398

I. 1 인 동영상 콘텐츠 통한 창작 / 배포를 통한 수익모델 , MCN 의 개요
가 . 다중채널네트워크 (Multi - Channel Network) 의 정의
- 1 인 창작자의 콘텐츠 촬영 , 교육 , 마케팅 등 비즈니스 기반을 지원하고 채널에서 얻는 광고 수익을 공유
하는 사업
나 . 다중채널네트워크의 등장배경
구 분 등장배경 설명
유튜브내에서 다양한 1 인 컨텐츠 창작자들을 묶어
구글의 동영상 플랫폼 유튜
시너지를 높이기 위해서 시작
브 시작
( 게임 , 음악 , 드라마 , 엔터테인먼트 , 연예 , 뷰티 등 )
기업
다양한 1 인 창작자들을 위한 지원 및 수익 공유 ( 광
1 인 창작자를 위한 사업
고 기반 )
1 인 창작자들의 영향력을 유지하기 위한 동영상 제
제작 수준 한계
작에 있어 수준의 한계
제작자
동영상의 영향력에 따라서 다양한 혜택과 수익을 쉐
수익 쉐어
어
398

---

## Page 399

II. 다중채널네트워크의 개념도
399

---

## Page 400

다중채널네트워크사업의 주요역할
구분 주요역활 설명
신규 창작자 발굴 신규 창작자를 발굴 성장 및 지원
창작자의
인큐베이션
장비등 제작 지원 촬영 및 컨텐츠 제작을 위한 장비등의 지원
효과적인 프로그램 제작 및 상품 제작을 위한 기획 지
마케팅 제품 및 프로그램 기획
원
커뮤니테이션
프로모션 진행 다양한 수익관련 프로모션 진행
저작권 관리 컨텐츠에 대한 계약을 통한 대리 관리
수익 쉐어 컨텐츠로 인한 광고 수익등에 대한 수익쉐어
비즈니스
파트너 관리 다양한 1 인 창작자들의 관리 및 광고 관련 파트너 관리
지원
신규 컨텐츠 및 창출 지원 새로운 컨텐츠 영역 발굴 및 수익모델 창출 지원
400

---

## Page 401

III. 다중채널네트워크의 국내외 주요 사례
주요사례 내용
- 10~20 대 겨냥한 코메디 , 패션 , 음악 , 드라마 등의 다양한 콘텐츠
AweSomnessTV - 개인 창작자 대상 교육 , 스튜디오 , 홍보 및 광고영업 등을 지원하면서
이들의 유튜브에서 광고로 창출하는 수익일부를 수취
국외 - 게임 , 스포츠 , 뷰티 , 패션 , 만화 등을 중심으로 10 대에 머물지 않고 , 미시
족까지 폭넓은 계층을 대상으로 하는 채널 제공
Maker Studio
- 개인 창작자 대상 교육 , 스튜디오 , 홍보 및 광고영업 등을 지원하면서
이들의 유튜브에서 광고로 창출하는 수익일부를 수취
- 국내에서 활동하고 있는 Creator 를 키워낸 산실
- 2013 년 12 월 유튜브와 콘텐츠 유통 협약
아프리카 TV - 2014 년 파트너 BJ 제도를 신설
- 파트너에게는 별풍선 수익 외에도 아프리카 TV 동영상 광고 수익 쉐어
국내 - 저작권 관리 , 유튜브 교육 등도 제공
- 판도라 TV 를 비롯한 소셜 비디오 콘텐츠 플랫폼에 창작자가 작품을 확
산하도록 지원
판도라 TV
- 바이럴 ( 입소문 ) 영상을 제작해 수익을 도모하는 것도 중요한 목표
- 창작자에겐 다양한 창작 기회를 제공해 연결고리 플랫폼 목표
401

---

## Page 402

Chapter VI. Network 관리 및 운영
Chapter VI. Network 관리 및 운영
SDN 상
OpenFlow 중
NFV 중
CIDR/Supernetting 중
VLSM/Subnetting 상
402

---

## Page 403

SDN
기출문제
1. SDN(Software Defined Networking)
( 컴시응 99 회 1 교시 9 번 )
2. OpenFlow 에 대해 설명하시오 . ( 출제예상문제 )
3. SD-WAN(Software-Defined Wide-Area Networking) 에 대해 설명하시오 . ( 출제예상문제 )
4. 최근 비즈니스 요구를 혁신적으로 구현하기 위해 소프트웨어를 통해 하드웨어를 완전히
통제하는 기술이 가속화되고 있다 . 이와 관련된 기술흐름을 소프트웨어 정의 네트워크
(Software Defined Network) 와 소프트웨어 정의 시스템 (Software Defined Network)
측면에서 설명하시오 . (107 회 , 정보관리기술사 )
5. SDDC(Software-defined Data Center) ( 정보관리 113 회 )
403

---

## Page 404

수년 동안 컴퓨터 과학자들은 네트워크의 속도와 안정성 , 에너지 효율 , 보안 등을 획기적으로 개선시킬
수 있는 방법을 꿈꿔왔다 . 그러나 그 방법을 설계하거나 고안하더라도 , 실제로 대규모 (large - scale) 로 실
험하거나 검증하는 것은 불가능했다 . 인터넷의 코어 (core) 를 구성하는
라우터나 스위치들이 이른바 완전히 닫혀 있어서 그 위에서 새로운 소프트웨어나 프로그램을 실험하는
것이 원천적으로 봉쇄되었기 때문이다 .
이러한 연유로 연구되어온 많은 기술 중 SDN 은 Software Defined Networking 을 의미하며 우리말로
소프트웨어 정의 네트워킹 이라 부른다 . SDN 은 OpenFlow 라는 기술 혹은 소프트웨어를 통하여 널리
알려졌다 . OpenFlow 와 SDN 은 뗄레야 뗄 수 없는 관계이다 . SDN 이 물론 더 큰 개념으로 네트워크 구조
혹은 새로운 패러다임이며 , OpenFlow 는 SDN 을 위한 “인터페이스 표준 기술 ”로 정의된다 .
SDN 은 네트워크 제어 기능 (control plane) 이 물리적 네트워크와 분리되어 있는 “ 네트워크 구조 ”를 말한
다 . 위키피디어에 따르면 SDN 을 특징짓는 두 가지 중요한 포인트는 다음과 같다 . 첫째 , 네트워크 제어
기능을 데이터 전달 기능 (data plane) 과 분리하여 구현해야 한다 .
둘째 , 네트워크 제어 기능이 개발되고 실행될 수 있는 환경을 분리하여 전형적인 낮은 성능의 CPU 가 장
착된 하드웨어 스위치에 더 이상 위치시키지 않는다 . 다시 말해서 SDN 이라면 기본적으로 네트워크 제어
기능이 기존의 스위치나 라우터 등의 하드웨어와 별도로 분리되어야 하고 , 데이터 전달 기능과도 역시
분리되어 개발 및 실행될 수 있는 네트워크 구조 를 가져야 한다 .
SDN 은 소프트웨어를 통해서 현재의 인터넷이 가지는 구조적 문제를 근본적으로 해결하고 혁신할 수 있
도록 대두된 새로운 네트워크 구조 혹은 패러다임 , 어플리케이션 , 네트워크 OS, 하드웨어 추상화 , 표준화
된 인터페이스 및 하드웨어를 모두 아우르는 개념 " 이다 .
404

---

## Page 405

SDN
I. 유연하고 스타트한 네트워크 인프라 , SDN 의 개요
가 . SDN(Software Defined Network) 의 정의
- 하드웨어 기반의 데이터 전달기능과 SW 제어기능이 밀접하게 결합돼 있는 기존의 스위칭 HW 와 제어
SW 를 분리하고 , 개방형 API 인 오픈플로우를 통해 네트워크의 트래픽 전달 동작을 프로그래밍하듯
SW 기반으로 컨트롤러에서 제어하는 네트워크 인프라
나 . SDN 의 등장배경
- 네트워크 스위치 , 라우터 벤더 간 인터페이스 상이하여 인프라 구축 어려움
- 다양한 컨텐츠의 증가로 기존 폐쇄형 네트워크에서는 지원이 어려움
- 폐쇄형 네트워크 인프라를 개방형으로 발전시킨 Openflow 기술 등장
405

---

## Page 406

2. SDN
II. SDN 의 개념도 및 구성요소
가 . SDN 의 개념도
- Openflow 을 지원하는 네트워크 장비와 Openflow Controller 가 Protocol 로 연동되며 , 라우팅 및
스위칭 등 핵심 제어 기능은 오픈 API 를 통해 구현
406

---

## Page 407

SDN
나 . SDN 의 구성요소
구성요소 설명
- Openflow 만을 지원하는 스위치 또는 기존 Layer2( 스위칭 ),
Layer3( 라우팅 ) 기능을 지원하는 스위치에 Openflow 기능을 추가한
Data Plane
스위치로 구성
- 단순 패킷 포워딩 , 스위칭 기능만 구현
- 전체 망에 대한 global view 를 갖고 전체 망 제어
- 기존 네트워크 제어기능 (ACL, 라우팅프로토콜 , 인증 등 ) 에 대한 중앙집중화 구현
Network OS
- Openflow Controller 는 Openflow protocol 를 통해 Data plane 에 있는
네트워크 장비의 Flow table 를 제어
- SDN 을 소프트웨어 적으로 통제 , 관리하는 기술 .
SDN 제어기
예 ) SKT 의 ONOS 가 대표적
- Network OS 상위에서 사용자 서비스를 지원하는 프로그램
Application
407

---

## Page 408

□ 구조
SDN Layer
408

---

## Page 409

409

---

## Page 410

[ 참고 ] SDx
가상화에 기반한 소프트웨어 정의의 개요
I.
가 소프트웨어 정의의 정의
- 클라우드 컴퓨팅의 발전과 함께 소프트웨어 기술을 활용해 기존에 하드웨어에서 직접 제어하던 영역들을
소프트웨어로 정의하는 기술
나 의 특징
. SDx
유연성 증대 소프트웨어 정의 기술을 활용한 프로그래밍을 인프라 및 데이터센터 전체를
1) (Agility) :
관리하는 데 활용
2) 상호 운용성 (Interoperability) 향상 : 인프라와 어플리케이션 통합이나 개방형 API 등을 통해 상호
운용성 증대
소프트웨어 정의 유형
II.
유형 내용
SDN - 소프트웨어 기술을 활용해 네트워크를 규정하고 활용
(Software Defined - SDN 의 핵심 철학은 네트워크 기능을 하드웨어 기능과 소프트웨어 기능으로
Network) 분리해 , 프로그래밍 가능성을 높이고 유연성을 증대
SDS
- 스토리지 하드웨어로부터 스토리지 자원들을 추상화
(Software Defined
- 자원들은 소프트웨어에 의해 정의돼 프로비저닝 , 관리 , 해제 수행
Storage)
SDDC
- 물리자원 , 논리자원 및 가상자원을 통칭하는 통합 데이터 모델에 기반해
(Software Defined
종합적으로 서버 , 네트워크 , 스토리지를 하드웨어로부터 추상화
Data Center)
410

---

## Page 411

[ 참고 ] SDx
유형 특징 내용
데이터 계층 , - 데이터 계층 (Data/Infra Layer) : 네트워크 구조를 데이터 전송을 담당
제어 계층 구분 - 제어 계층 (Control Layer) : 데이터 경로제어 및 정책관리 기능을
SDN
담당하고 SDN 컨트롤러 및 응용프로그램에 의해 제어할 수 있도록
(Software
분리됨
Defined
OpenFlow - SDN 에서 제어 계층과 데이터 계층 사이에 정의된 SDN 을 구현하는
Network)
프로토콜 대표적인 프로토콜
가상화 스토리지 - 가상 머신 및 서버 하이퍼바이저와 유사한 기능을 제공하는 스토리지
서비스 가상 머신을 통해 스토리지 서비스를 제공
- 민첩성 및 유연성 , 역할 기반 액세스 제어 및 위임 기능을 향상하고
SDS
데이터 보호 , 가용성 및 성능 특성이 미리 정의된 스토리지 서비스를 개발 .
(Software
Defined 멀티플랫폼 지원 - 범용 하드웨어 지원 , 클라우드 서비스 프로바이더와의 통합 등으로 특정
Storage) 스토리지 제조사 하드웨어뿐 아니라 타사의 스토리지 지원도 가능
애플리케이션 통합 - 광범위한 인프라와 관리 , 애플리케이션 파트너 간의 통합 등으로 개방형
API 집합을 통한 상호 운용성을 제공
통합 데이터 모델 - 물리자원 , 논리자원 및 가상자원을 통칭하는 통합 데이터 모델에 기반해
종합적으로 서버 , 네트워크 , 스토리지를 관리
SDDC
종합관리 및 - 종합적인 데이터센터 및 클라우드 관리 플랫폼으로 서버 , 네트워크 ,
(Software
오케스트레이션 스토리지 등 모든 자원을 템플릿화해 일괄 생성
Defined
도구 - 자동화 , 오토 스케일링 , 서비스 체이닝을 지원
Data
Center)
개방형 API - 표준 프로그래밍 방식으로 접근해 데이터센터 인프라 전체에 필요한
작업을 수행
411

---

## Page 412

[ 참고 ] SD - WAN(Software - Defined Wide - Area Networking)
I. 종단간 SDN 프로덕션 서비스를 위한 SD - WAN 의 개요
가 . SD - WAN(Software - Defined - WAN) 의 정의
- 데이터 센터 , 기업 , 대학 등의 근거리 네트워크 (LAN) 에서 데이터 Plane 과 제어 Plane 을 분리하는 소프트웨어
정의 네트워킹 (SDN) 을 통신망 사업자와 서비스 제공자 등의 WAN(Wide Area Network) 로 확장하여 적용하
는 네트워크 기술
 장비 제조사 의한 운영  서비스 신속한 적용
SD-WAN
 소프트웨어 벤더 종속  설치 , 운영비용 절감
 서비스 확장의 제한  사용 편의성 , 성능 , 보안 개선
- 최적화 , 가상화 , 자동화
412

---

## Page 413

- SD-WAN 의 구조는 기존 WAN 환경에서 소프트웨어 정의 코어망 (SD - Core) 과 에지망 (SD - Edge) 으로
구분하여 분류
413

---

## Page 414

SD-WAN 의 구성 및 기술 요소
구분 분류 설명
SD-Edge  사용자 네트워크와 직접 연계되는 SDN 기반 네트워크
구성
요소
SD-Core  분산된 SD - Edge 들을 상호 연동 할 수 있는 가상화된 네트워크
 논리적으로 중앙 집중화된 WAN 경로 제어와 결함 극복
최적화 기술
 링크 트래픽 부하 분산 및 조절 , 운영 관리 자동화 , 망 유연성 제공
 SD-Edge, SD-Core 의 동적 가상화 하여 상호 연동 및 분리
가상화 기술
 토폴로지 가상화 , 제어 가상화 , 주소 가상화
 가상화된 네트워크의 운영을 사용자와 응용 관점에서 구성하여 링크 ,
가시화 기술
종단간 트래픽 정보 , 실시간 가용 대역폭 , 지연 , 상태 정보
기술
제어 안정화 기술  시스템 장애나 보안에 대해서 신뢰성 제공
요소
다중 계층 제어
 다양한 네트워크 계층 , 벤더 별 장비의 통합 제어 및 자동 구성
자동화
서비스
 서비스 관점의 서로 다른 Edge 망에서 연동 가능하도록 연결 및 관리
오케스트레이션
 Software-Defined Exchange, 복수 개의 개별적 SD - WAN/SDN
SDx
도메인을 대응 접속하기 위한 소프트웨어 기반 교환노드 제어 기술
414

---

## Page 415

I. 하드웨어에서 소프트웨어로의 패러다임 쉬프트 SDE 의 개요
가 . SDE((Software Defined Everything) 의 개념
- 소프트웨어 기술을 활용해 기존에 하드웨어에서 직접 제어하던 영역들의 유연성 (Agility) 을 높이고
상호운용성 (Interoperability) 를 증대시키는 모든 기술의 총칭
- 네트워크를 시작으로 하여 스토리지 , 데이터센터로 점차 확장되면서 , 최근엔 비즈니스 및 서비스를
포괄하는 의미 (SDN + SDDC + SDI = SDE)
나 . SDE 의 등장배경
구분 등장배경 설명
IT 환경 클라우드 대중화
 소프트웨어 형태의 클라우드 서비스인 SaaS 형태 제공
측면
데이터센터의 진화
 물리적인 안정성과 N/W 확장성을 갖추어 서버와 N/W
를 제공
기술 측면 가상화 기술의 발전
 물리적인 자원뿐만이 아니라 N/W, OS 같은 논리적 자
원도 포함
SDN 의 성공
 최근 몇 년간 SDN 발전이 눈에 띄며 , 이는 H/W 보다 S/
W 들을 중심으로 구성하는 시도에 새로운 기회 제공
415

---

## Page 416

II. SDE 의 개념도
- SDE 는 인프라 레벨뿐만 아니라 비즈니스 및 응용 서비스 레벨까지 포괄하여 비즈니스 용어로 사용
416

---

## Page 417

III. 주요 분야별 SDE 적용 현황
설명
구분 상세
 네트워크 기능을 하드웨어 기능과 소프트웨어 기능으로 분리
SDN (Network)
 프로그래밍 가능성을 높이고 유연성을 증대
 스토리지 자원들 추상화하여 대칭형 / 비대칭형 스토리지 제공
 스토리지 자원들은 소프트웨어에 의해 정의되어 프로비저닝 , 관리 ,
SDS (Storage)
해제가 가능
인프라
 서버 가상화 및 SDN 을 바탕으로 하여 인프라 규정하는 SDI 와 데이터센터
SDI (Infrastructure)
전체를 규정하는 SDDC
or
 인프라 및 데이터센터 전체를 관리하는데 활용활 수 있어 시스템 유연성
증대
SDDC (Data Center)
 소프트웨어 정의 보안은 소프트웨어적으로 정의된 보안요소가 보안
정책을 따르면서 가상 머신의 생성 , 이동 , 삭제를 추적하여 자동으로 보안
보안 SDSec (Security)
정책이 적용되도록 하는 개념
 SDN 의 개념이 방송을 위한 비디오 네트워크 도메인에 영향을 미친 사례
SDVN (Video
 변하는 비디오 네트워크의 요구 사항을 유연성 있게 처리하고 여러 방송
Network)
장비 및 네트워크의 상호운용성을 지원 가능
응용 및
 기존 데이터센터 인프라를 포함하여 프라이버시에 민감한 사용자
서비스
데이터가 스토리지에 저장되고 해당 데이터가 유출되지 않도록 안정성
있는 네트워크 및 보안 제공
SDH (Healthcare)
 IoT, 빅데이터 인프라와의 결합 등을 통해 소프트웨어의 장점을 적극
활용하도록 발전하는 추세
417

---

## Page 418

OpenFlow
기출문제
1. OpenFlow 에 대해 설명하시오 .
( 출제예상문제 )
418

---

## Page 419

I. 미래 네트워크 제어 기술 , OpenFlow 의 개요
가 . OpenFlow 의 정의
- 이기종의 스위치와 라우터의 플로우 테이블을 개방형 프로토콜에 따라서 패킷전달과 제어기능을
SW 적으로 분리 구현한 미래 네트워크 기술
나 . 등장배경
- 장비 업체마다 장비를 운영하는 방식이나 사용자 인터페이스가 다르기 때문에 NW 사용자가 새로운
네트워크 프로토콜을 개발하여 적용하는 것이 매우 어려움
- 개방형 인터페이스를 제공하는 네트워크 기술들은 성능 대비 가격이 비싸기 때문에 상용화에 어려움
- 네트워크 스위치 ( 혹은 라우터 ) 의 패킷 포워딩 기능과 제어 기능을 분리하고 두 기능 간의 통신 프로토콜
제공 필요
419

---

## Page 420

II. OpenFlow 의 구조도 및 구성요소
가 . OpenFlow 의 구조도
FlowTable
:OpenFlow 스위치 내부에는 패킷 전달 경로와
방식에 대한 정보
- OpenFlow 스위치와 제어장치로 구분되며 , OpenFlow 프로토콜에 의하여 상호 연결
[ 참고 ]
흐름 (flow) 은 " 특정 시간 동안 네트워크상의 지정된 관찰 지점을 지나가는 패킷의 집합 " 이라고 정의된다 .
간단히 이야기하면 흐름이란 패킷의 출발지와 목적지 정보 등을 가진 데이터라고 할 수 있다
420

---

## Page 421

나 . OpenFlow 구성요소
구성요소 역할 / 기능
제어장치 - OpenFlow 프로토콜에 의하여 스위치 내부의 플로우 테이블을 작성
(Controller) - 새로운 플로우를 등록하거나 삭제하는 기능을 포함 (SW 로 구현 )
헤드 필드 - 스위치 포트 , 프로토콜 정보 , 플로우를 정의하는
(Header) 패킷 헤더 정보
- 패킷을 어떻게 처리할 지 여부를 표시
Flow table 액션 ( Action)
- 전달 , 차단 등 처리 방식 저장
카운터 - 플로우별 FlowTable 에 제어 정보가 등록된 순간부터
OpenFlow
(counters) 현재까지의 시간을 측정하는 용도
스위치
- 제어장치 (controller) 와 스위치 ( 포워딩 장치 )
OpenFlow 프로토콜
간에 통신을 위한 개방형 표준 프로토콜
- 스위치와 제어장치 간의 통신 채널
보안채널 - 스위치를 제어하는 중요한 정보가 교환되므로
암호화 되어 전달
421

---

## Page 422

다 . OpenFlow 스위치
구분 역할 / 기능
- 기존의 L2, L3 계층을 지원하지 않고 오직
- 전용 스위치
OpenFlow 만을 지원
종류
- 범용 스위치 - 기존의 스위치에 OpenFlow 기능을 추가
- 수신된 패킷을 플로우로 구분하고 Flow Table 에 정의된 규칙에 따라서 패킷을 처리한 뒤 ,
역할
목적지 포트로 전달하는 기능
- 수신 패킷이 플로우 테이블에 정의된 약속된 포트로 전달
(NW 를 통해서 패킷이 목적지로 전달되는 기능 수행 )
- 수신 패킷이 보안채널을 통해서 외부에 위치한 제어장치로 전달 ( 예 : 플로우 테이블에
동작유형 등록되어 있지 않는 새로운 플로우에 대한 첫 번째 패킷이 수신되는 경우 , 제어장치로
전달되어 플로우 테이블 등록여부를 결정 _
- 수신된 패킷이 폐기 ( 예 : 외부로부터 DoS 공격을 차단하거나 , 호스트로부터 폭주하는
discovery 트래픽을 완화시키기 위해서 수신 패킷을 폐기 )
422

---

## Page 423

[ 참고 주소 ] http :// helloworld.naver.com/helloworld/textyle/387756
III. OpenFlow 의 활용분야 및 최근 동향
가 . 활용분야
- 보안 , QoS , Energy Efficient( 전력 소모 관리 ), NW 가상화 , 무선 이동성 , 트래픽 부하 분산 등
나 . 최근 동향
- OpenFlow 의 사상은 네트워킹의 절대강자인 시스코의 입장과 전면 배치되는 것으로 평가되나
시스코도 최근 SDN 장비시장을 대비하기위해 사내벤처 운영
- 주니퍼와 HP 등도 현재 SDN 시장을 겨냥한 시장 포지셔닝을 적극 전개 중
- 구글이 네트워킹의 새로운 혁명인 오픈 플로우에 대한 투자를 통해 이미 충분한 수익을 거두고 있다는
입장을 발표
- 향후 SDN 과 오픈 플로우 도입논의는 급진전될 것으로 전망 “ 끝 ”
423

---

## Page 424

네트워크기능 가상화 (NFV)
기출문제
1. 대표적으로 네트워크 가상화 기술은 SDN 과 NFV 가 존재한다 . 다음에 대해 기술하시오 .
가 . SDN(Software Define Network)
나 . NFV(Network Function Virtualization)
다 . 미래 네트워크 가상화 기술의 발전방향
( 모의고사 )
2. OPNFV(Open Platform for NFV) 에 대해 설명하시오 . ( 모의고사 )
424

---

## Page 425

네트워크기능 가상화 (NFV)
기출문제
NFV 와 SDN 의 관계
- NFV 와 SDN 의 관계를 보여주는 그림이다 . SDN 은 추상 네트워크를 만들어 보다 빠른 변화를 가능하게
하고 , NFV 는 CAPEX(Capital expenditures), OPEX(Operating expenditures ), 공간과 자원의 소모를 줄
여준다 . NFV 와 SDN 는 서로 상호보완적인 관계로 독립적으로 구성하는 것이 가능하다 . 하지만 NFV 가
SDN 의 Solution 을 이용해 구현되면 그 잠재력은 굉장히 크다 .
425

---

## Page 426

I. 기존 라우터 서비스 현황
현재 사용되고 있는 Customer Site 의 Router Service 이다 . 각각의 Enterprise 에는 NID 와 함께
managed router 가 설치되어있고 , Data Plane 과 Control Plane 은 Aggregation
Router 를 통해 함께 움직이고 있다 . 일반적인 구조도이다 .
Data & Control 통신
NID(network interface device)
Customer Site 에서 사용하는 Router Service
426

---

## Page 427

NFV 기술로 Router 기능 가상화를 적용시킨 모형이다 . Enterprise 에는 NID 만 있고
데이터의 처리는 가상 환경에서 제공된 Router application 을 통해서 이루어진다 .
- Data 차원만 통신이 되고 , 통제 차원 ( 수준 ) 은 Central Office( 중앙 오피스 ) 에서 통제한다 .
a Central Office is a place where the ISP stores equipment that
connects many clients.
(Point of Presence)
NFV 기술로 Router 기능 가상화
427

---

## Page 428

II. NFV 아키텍쳐와 주요구성요소
구분 내용
아키텍쳐
428

---

## Page 429

II. NFV 아키텍쳐와 주요구성요소
구분 내용
아키텍쳐
429

---

## Page 430

NFVI 의 물리 및 가상 자원과 VNF 의 조율 및 라이프 사이클 관리를 담당함 . 특히 가상
화와 관련된 관리 업무를 관리 및 운영 담당
NFV M&O
OSS/BSS 연계하여 기존 환경의 전반적인 관리
Virtual Network Function
네트워크 기능 실현을 위한 소프트웨어 패키지
VNF
기존의 네트워크 노드를 소프트웨어로 가상화한 것으로 자체 관리 시스템인
EMS(Element Management System) 을 동반
Network Functions Virtualization Infrastructure
VNF 를 실행하는 실제의 물리적 / 소프트웨어적 자원
NFVI
NFVI 는 COTS 범용 하드웨어와 가속기능 및 하드웨어 가상화에 필요한 소프트웨어
계층으로 구성
OSS(Operation Support System)/ BSS(Business Support System)
OSS/BSS
통신사업자가 구현하는 시스템 부분
http:// www.ixiacom.kr/sites/default/files/content/support/library/brochures/korean/Network-Functions-
Virtualization_kor_whitepaper.pdf
430

---

## Page 431

Supernetting / Subnetting
기출문제
1. 192.168.4.0 ~ 192.168.7.0/24 IP 대역을 슈퍼네팅하여 NW ID, Subnet Mask, 유효 IP 호스트 수를
산출하시오 . ( 컴시응 , 107 회 2 교시 )
분류 설명 비고
네트워크번호 - 서브넷 번호 - 호스트번호 구성
보통 255.255.255.0
Subnetting
IP 와 and 연산을 통해 , Net 그룹 만들어짐
VLSM(Variable Length Subnet Mask)
Supernetting Subnetting 반대 작업
네트워크 등을 합치는 슈퍼네팅 등 적용한다는 개
CIDR (classless 념 슈퍼네팅
inter-domain routing) IP 주소 할당 방법의 하나로 , 기존 8 비트 단위로 통 ( 사수라고 암기 )
신망부와 호스트부를 구획하지 않는 방법 ( 병합 )
VLSM(Variable Length Subnet Mask)
VLSM(Variable Length S - Subnet Mask 를 가변길이로 할당하는 기법 . 즉 ,
서브네팅
ubnet Mask) 서로 다른 크기의 Subnet 을 지원하는 구조를 지칭
함 . (/25, /26 으로 분배 )
431

---

## Page 432

I. IP 주소 할당 기법
여러 Class
Class 초과 CIDR Suppernetting
병합
필요한
Host 수
파악
Class Class
VLSM Subnetting
미 만 분할
할당 방법 설명 특징
필요 Host 수 - 구성할 네트워크 중에 필요 Host 수가 가장 큰 Host 수 확인 - 큰 Host 수의
파악 - 필요 Host 수가 Class 초과 유무 파악 네트워크부터 할당
Class 초과 - 필요 Host 수에 맞게 네트워크 Class 병합 - CIDR 이용
Class 미만 - C class 기준 Host 수가 126 개 이하의 경우 네트워크 분할 - VLSM 이용
- 각 네트워크의 Network ID, Subnet Mask, Host ID,
IP 할당 - IP 할당 완료
Host 수 도출
- 네트워크를 서브네팅 할 경우 향후 확장성을 고려해 여유 있게 네트워크 대역을 구성해 주어야 함
432

---

## Page 433

II. IP 주소 할당 방법 비교
CIDR VLSM
구분
(Classless Inter-Domain Routing) (Variable Length Subnet Mask)
- 도메인간의 라우팅에 사용되는 인터넷 - 서브넷 마스크를 주소 클래스에서
개념 주소를 묶어서 라우팅 오버헤드 및 사용하는 고정된 길이가 아닌 다양한
트레픽을 줄이는 방법 ( 슈퍼네팅 ) 길이의 서브넷 마스크를 만드는 기술
개념도
- 연속된 여러 네트워크를 서브넷
- 서브네팅과 같은 목적으로 다양한
마스크를 이용해 주소를 병합해 IP 주소
목적 서브넷 마스크를 이용해 보다
클래스 체계를 쓸 때 보다 효율적으로 IP
효율적으로 네트워크 Segment 분리
관리 가능
433

---

## Page 434

1. IP Address Class
• 네트워크 규모 / 접속시스템의 크기에 따라 분류
• A~E 5 개의 Class 가 정의되어 있다 . (classful)
434

---

## Page 435

II. Bit 표기 이해
435

---

## Page 436

Subnet Mask
• 목적지 Host 가 로컬 서브넷에 있는지 아니면 원격 네트워크에 있는지 확인할 때 사용
• 서브넷 마스크와 IP 를 AND 연산 이후 같은 값이면 같은 네트워크 임 .
( 정리 ) Subnet Mask 의 11111111 11111111 11111111 의 부분은 1 이 24 개 있다 . (24 비트 )
8
뒤의 2 개 IP 가 같은 네크워크에 있으며 , 뒤의 8 비트가 호스트 주소 부분이 된다 .
네트워크 주소와 서브넷 마스크와 함께 사용하면 , 192.168.1.0/24 라고 한다 .
436

---

## Page 437

III. C-Class 의 Subnetting 예시
- 위의 2 비트를 서브넷으로 활용하면 , 2 개의 비트가 서브넷 부분이 된다 .
- 위 11 부분을 서브넷 부분이라고 한다 .
※ 할당된 Host 중 Network ID 및 Broadcast Address 등 2 개 IP 는 실제 Host IP 로 사용 불가
좀 더 쉽게 설명하면 , 서울시 – 강동구 – OOO 번지 부분이다 .
437

---

## Page 438

IV. 문제풀이
할당받은 IP : 192.168.4.0~192.168.7.0/ 24
1) 공통 비트 도출 : 할당받은 아이피를 2 진수로 변환해 보면 ,
192.168.4.0 : 11000000. 10101000. 00000100. 00000000
192.168.5.0 : 11000000. 10101000. 00000101. 00000000
192.168.6.0 : 11000000. 10101000. 00000110. 00000000
192.168.7.0 : 11000000. 10101000. 00000111. 00000000
2) 변환된 이진수에서 공통적인 부분자리까지 1 로 채운후 subnetmask 생성 – 나머지 2 개비트는
서브넷용 (22 비트만 네트워크 ID 로 사용 : 4 개로 분할해서 사용하는 경우 )
11111111. 11111111. 11111100. 00000000 -> 255.255.252.0 (Subnet Mask)
11000000. 10101000. 00000100. 00000000 -> 192.168.4.0/22 (Network ID); 동일한 부분까지 .
3) 유효 IP 호스트 수 도출 – 24 비트까지는 네트워크 주소이므로 .
192.168.4.0~255(256)
192.168.5.0~255(256)
192.168.6.0~255(256)
192.168.7.0~255(256)
최종 유효 IP : 256*4 - 2 = 1022 개
네트워크 주소 (0), 브로드캐스트 (255) 주소 제외
438

---

## Page 439

192.168.4.0 ~ 192.168.7.0 /24 IP 대역을 슈퍼네팅하여 NW ID, Subnet Mask, 유효 IP 호스트 수를
산출하시오 .
1) NW ID: 네트워크 식별자
192.168.000001 00(4)
192.168.00000101(5)
192.168.00000110(6)
192.168.00000111(7)
192.168.000001XX 까지가 동일 - > 십진수로 표현하면 - > 192.168.4.0 이 대표 네트워크
[ 참고 ] CIDR (classless inter - domain routing) = 네트워크 등을 합치는 슈퍼네팅 등 적용한다는 개념
IP 주소 할당 방법의 하나로 , 기존 8 비트 단위로 통신망부와 호스트부를 구획하지 않는 방법 . 인터넷 접
속 시 IP 주소는 A·B·C·D·E 등 5 종의 등급이 있는데 , 등급 C 의 주소 공간을 기본 단위로 할당한다 .
439

---

## Page 440

192.168.4.0 ~ 192.168.7.0 IP 대역에서
2) Subnet Mask
사용가능한 네트워크 범위를 나타내므로 , 255.255.2 개 비트만 다름 (xx).0 이므로
192.168.000001xx
255.255.252(128+64+32+16+8+4=252).0
3) 유효 IP 개수
1024 – 첫 IP( 네트워크 이름 ) – 브로드캐스팅용도 = 1022 개 사용 (192.168.4.1 번 부터 7.254 번까지 )
440

---

## Page 441

Q&A
441

---

## Page 442

무선 주파수 대역 (1953 년 CCIR 에서 분류한 방식 )
442

---

## Page 443

Digital Network 출제 경향
I. 이전 출제 상세 분석
토 픽 조직응용 ( 컴퓨터시스템응용 ) 출제 내역 정보관리 출제 내역
1. UsN USN 설명 , 미들웨어 USN 의 특징 / 구성 , 6LoWPAN
HSDPA, AMC, H-ARQ, WiBro, UMB, 차세대 이동통신 종류와 특징
2. 이동통신
LTE-U VoLTE, OHA, PS-LTE
UWB, ISM band, PAN, NFC
3. WPAN Home RF, Bluetooth, Zigbee, NFC, Zigbee
BLE(Bluetooth Low Energy)
NAT(FW 부분에서 다룸 )
4. IPv4, IPv6 IPv4 와 비교 , Anycast
IPv6 설명 , 기술적 특성
5. Mesh Network 특징과 구성 방법 -
Multicast 설명 , IGMP/MLD,
6. Multicast 멀티케스트 라우팅 구간 설명 , IP 구성 -
애니캐스트 ( Anycast )
기반구조 네트워크와 비교 , Ad - hoc NW 설명 ,
7. Ad-hoc Ad-hoc 프로토콜
라우팅 프로토콜
8. FTTH/HFC Optical Internet DOCSIS 3.0
터널링 기술 , FMIPv6, Mobile IPv4 와
9. Mobile IP
Mobile IPv6 연동방법
NGN 의 이동성 정의 / 구조 / 분류 , BcN
10. NGN/BcN BcN 계층별 특징
추진전략
443

---

## Page 444

Digital Network 출제 경향
I. 이전 출제 상세 분석 ( 계속 )
토 픽 조직응용 ( 컴퓨터시스템응용 ) 출제 내역 정보관리 출제 내역
11. Home
UPnP, OSGI -
Networking
BSS(Basic Service Set), 기가 와이파이
12. IEEE 802.11
(802.11ac), NAC
WAVE(Wireless Access in Vehicular
13. M2M M2M, IoT, IoE
Environment), IoE
14. 망중립성 - 망중립성
MOT(Multimedia Object Transfer)
15. Protocol - NTP Carousel 프로토콜 (TPEG 전송 프로토
콜 )
16. XYOD BYOD
모바일 인스턴트 메시징
(Mobile Instant Messaging)
17. 응용토픽
LBS(Location Based Service) 의
POI(Point of Interest)
444
