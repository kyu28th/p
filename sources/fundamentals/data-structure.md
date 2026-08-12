# Data Structure

```yaml
source:
  id: FD-P1
  document: "1. Data Structure_V3.9.pdf"
  source_ref: "local-source\\9주차_신규_pdf (2) (2)\\10.기타(표지없이 전체 4쪽모아찍기)\\1. Data Structure_V3.9.pdf"
  repository_policy: "Original PDF is kept locally; Markdown extraction is stored in Git."
material_note: "이 자료는 과거 강의자료입니다. 2016~2017 버전명이 포함되어 있고 파일 수정일은 2019-03-13입니다. 최신 기술, 법/제도, 표준, 제품 동향은 반드시 별도 검증이 필요합니다."
extraction:
  tool: "pdfjs-dist"
  pages: 68
  notes:
    - "Text was extracted page by page."
    - "Original images, charts, and exact visual layout are not embedded in this pass."
```

> 현행성 주의: 이 자료는 과거 강의자료입니다. 2016~2017 버전명이 포함되어 있고 파일 수정일은 2019-03-13입니다. 최신 기술, 법/제도, 표준, 제품 동향은 반드시 별도 검증이 필요합니다.

## Page 1

KPC 정보처리기술사 핵심 오브젝트
[Module 09]
Data Structure( 자료구조 )
이론과 전략
•

---

## Page 2

목차
분류 출제빈도 Page 분류 출제빈도 Page
Chapter I. 자료 구조 기본 자료구조
1. Linked List 중 1. 배열 (Array) 하
2. Tree 중 20 2. Stack( 스택 ) 하
Binary Tree( 이진트리 ) 상 3. Queue( 큐 ) 하
3. B-Tree(Balanced Tree) 상 31
4. Heap 중
5. T-Tree 하
6. R-Tree 하 53
7. AVL Tree 중

---

## Page 3

NO. 토픽 중토픽 키워드 특징 및 설명
1 Array 개념 및 초기화 작업
2 기본 자료구조 Stack
3 Queue
4 Single Linked List 노드 , 링크 , 포인터
연결 리스트
5 Double Linked List
( Linked List)
6 Circular Linked List( 환형 )
이진트리 , 깊이 , 차수 (Degree)
이진트리
7 좌우균형이 안맞으면 , 순차검색과 동일한 문제점
( Binary Tree)
전위 순회 , 중위 순회 , 후위 순회
하나의 노드에 여러 데이터가 배치되는 트리구조 (N 개면 , N
차 트리 )
Balanced Tree 예 ) 5 차 B 트리면 , 자료가 5 개까지 차수 있음 .
8
B-Tree( 비트리 ) 삽입과 삭제시에 스스로 균형 유지
균형잡는 트리를 말함
예 ) AVL Tree, 2 - 3 tree( 이삼트리 ), Red - Black Tree 등이 있음
9 B+ Tree
10 B* Tree 형제노드
트리
Expression Tree.
11 수식 트리
수식을 표현하는 이진 트리
균형인자 (Balance Factor) = 왼쪽트리의 높이 – 오른쪽 트리
12 AVL Tree 의 높이
Rotation( 회전 ) 연산 : RR, LL, LR, RL
이진 트리의 확장으로 , 한 노드가 세개까지의 자식을 가질
13 2-3 트리
수 있는 트리를 말함
14 레드 - 블랙 트리 red -black tree
15 Heap max -heap, min-heap
16 T-Tree
17 R-tree 공간 데이터 , MBR, 교차질의 , 포함질의 , 근접이웃질의
3
18 기타 트라이 ( Trie)

---

## Page 4

Data Structure 출제 경향
I. 113 회 정보관리기술사 기출문제
113 회 정보관리기술사 출제 분석
IT 경영전략
SW 공학과
통계 / 확률 , 1
프로젝트관리 ,
SW 공학과 프로젝트관리
3
인공지능 ( AI), 2
IT 경영전략 , 1
알고리즘 , 1 서비스
자료구조 , 0
네트워크
OS, 1
보안
CA 와 시스템 , 1
DATABASE, 데이터 분석
서비스 , 4
DATABASE, 데이터
CA 와 시스템
분석 , 3
OS
네트워크 , 4
자료구조
알고리즘
인공지능 ( AI)
보안 , 10
통계 / 확률
4

---

## Page 5

최근 출제 문제
기출문제
I. 111 회 정보관리기술사 기출문제
회차 교시 도메인 문제
3. 공간 인덱스 구조에서 MBR(Minimym Bounding Region) 을 설명하고 , R 트리 ,
111 4 자료구조
R+ 트리 , R* 트리 를 비교하시오 .
최근 현황 정리
- 108 회 정보관리기술사 , 컴퓨터시스템응용기술사 0 문제
- 110 회 정보관리기술사 , 컴퓨터시스템응용기술사 0 문제
5

---

## Page 6

최근 출제 문제
기출문제
다음과 같은 Node 구조를 통해 생성된 이진트리에 대해 물음에 답하시오 .
Typedef struct Node{
int value;
struct Node* left;
struct Node* right;
} Node;
이진 탐색 트리의 루트 노드와 정수를 인자로 받아 , 주어진 숫자를 이진 탐색 트리에 삽입하는
재귀함수 Node* insertBinaryTree (Node * node , int val ) 을 작성하시오 .
이진 탐색 트리란 " 트리 내의 임의의 노드에 대해 해당 노드의 값이 해당 노드의 부분트리의 모든
값보다 크고 오른쪽 부분트리의 모든 값보다 작은 이진트리 " 를 말한다 . 여기서 인자로 받은 val 값이
트리 내에 존재하지 않는다고 가정하며 , 작성한 리턴 값은 삽입이 완료된 트리의 루트 노드이다 .
(107 회 4 교시 6 번 , 정보관리기술사 )
6

---

## Page 7

최근 출제 문제
기출문제
다음과 같이 구조체 자료형인 _node 를 선언하고 이를 이용하여 연결 리스트 (linked list) 를 만들었다 . 다음 소스를 보고
물음에 답하시오 . ( 단 시작함수는 _ tmain ())
1) 숫자 10, 5, 8, 3, 1, 7 을 삽입하되 작은 수부터 연결 리스트가 유지되도로 함수 ordered_insert ( int k) 를 작성하시오 .
( 단 , k 는 삽입하려는 정수 )
2) 연결 리스트를 구성하는 각 node 의 변수 data 를 모두 출력하는 함수 print_list (node* t) 를 작성하시오 .
( 단 , t 는 node 에 대한 시작 포인터이고 , 화면에 출력할 함수는 printf () 를 사용 )
3) 삭제하려는 숫자를 인수로 받아 그 노드를 삭제하는 함수 delete_node ( int k) 를 작성하시오 .
( 단 , k 는 삭제하려는 정수 )
node *ordered_insert(int k) {}
node *print_list(node* t) {}
int delete_node(int k) {}
typedef struct _node
{
int _tmain(int argc, _TCHAR* argv[])
int data;
{
struct _node *next;
node *t;
} node;
init_list();
ordered_insert(10);
node *head, *tail;
ordered_insert(5);
ordered_insert(8);
void init_list(void)
ordered_insert(3);
{
ordered_insert(1);
head = (node*)malloc(sizeof(node));
ordered_insert(7);
tail = (node*)malloc(sizeof(node));
head->next = tail;
printf("\nInitial Linked list is ");
tail->next = tail;
print_list(head->next);
}
delete_node(8);
print_list (head->next);
return 0;
(101 회 2 교시 정보관리기술사 )
7
}

---

## Page 8

최근 출제 문제
기출문제
1. B 트리와 B+ 트리와 관련하여 다음을 설명하시오 .
1) B 트리와 B+ 트리의 정의와 차이점
2) B 트리의 삽입 알고리즘
3) B 트리의 삭제 알고리즘
4) 26, 57, 5, 33, 72, 45 를 순서대로 삽입하고 , 72, 33, 45 를 순서대로 삭제하는 모든 과정의 B 트리를
그리시오 .
( 단 , 차수는 3)
(101 회 3 교시 정보관리술사 기출문제 )
8

---

## Page 9

최근 출제 문제
기출문제
1. 쓰레드 이진트리 (Threaded Binary Tree) 를 정의하고 쓰레드 이진트리를 표현하는 일반적 규칙과 쓰
레드 이진트리 를 나타내기 위한 노드 구조를 제시하시오 .
또한 다음에 제시된 이진트리에 대하여 전위운행 (Preorder Traversal) 방식에 의한 쓰레드 이진트리가
메모리 내에서 어떻게 표현되는지 연결리스트 를 사용하여 그림으로 제시하시오 .
2 진 트리의 링크 표현 방식에서 발생
하는 널 링크를 그 트리를 중위 순서로
순회할 때 다음에 방문할 노드를 가리
키는 포인터로 사용하는 2 진 트리 . 이
포인터를 스레드라 한다 .
( 컴퓨터시스템응용기술사 , 101 회 3 교시 )
9

---

## Page 10

Chapter I. 자료구조
1. Linked List
2. Tree
3. B-Tree
4. Heap
5. T-tree
10

---

## Page 11

Linked List
Linked List
 자료구조 중 링크드 리스트 (Linked List) 의 종류를 설명하고 , 입력 / 삭제 알고리즘을 설명하시오 .
(2009. 4 월 KPC 모의고사 4 교시 )
11

---

## Page 12

- 101 회 정보관리기술사 기출문제
다음과 같이 구조체 자료형인 _node 를 선언하고 이를 이용하여 연결 리스트 (linked list) 를 만들었다 . 다음 소스를 보고
물음에 답하시오 . ( 단 시작함수는 _ tmain ())
1) 숫자 10, 5, 8, 3, 1, 7 을 삽입하되 작은 수부터 연결 리스트가 유지되도로 함수 ordered_insert ( int k) 를 작성하시오 .
( 단 , k 는 삽입하려는 정수 )
2) 연결 리스트를 구성하는 각 node 의 변수 data 를 모두 출력하는 함수 print_list (node* t) 를 작성하시오 .
( 단 , t 는 node 에 대한 시작 포인터이고 , 화면에 출력할 함수는 printf () 를 사용 )
3) 삭제하려는 숫자를 인수로 받아 그 노드를 삭제하는 함수 delete_node ( int k) 를 작성하시오 .
( 단 , k 는 삭제하려는 정수 )
node *ordered_insert(int k) {}
node *print_list(node* t) {}
int delete_node(int k) {}
typedef struct _node
{
int _tmain(int argc, _TCHAR* argv[])
int data ; /* 정보 저장 */
{
struct _node *next ; /* 다음 노드의 위치 저장 */
node *t;
} node;
init_list();
node *head, *tail;
ordered_insert(10);
ordered_insert(5);
void init_list (void)
ordered_insert(8);
{
ordered_insert(3);
head = (node*) malloc ( sizeof (node));
ordered_insert(1);
tail = (node*) malloc ( sizeof (node));
ordered_insert(7);
head - >next = tail;
tail - >next = tail;
printf("\nInitial Linked list is ");
}
print_list(head->next);
delete_node(8);
print_list (head->next);
return 0;
12
}

---

## Page 13

I. 데이터의 링크 연결 자료 구조 , Linked List 의 개념 및 특징
가 . 연결 리스트 (Linked List) 의 개념
- 노드 (Node) 와 링크 (Link) 의 구성으로 ,
노드 : 실제 정보를 담고 있는 단위
링크 : 인접 노드의 위치를 저장하고 있어 , 연결 리스트의 순서를 유지할 수 있게 하는 연결고리
- Linked List 는 데이터를 노드 단위로 관리하는 속성을 가지며 Stack, Queue 와 함께 가장 기본적인
자료구조의 하나임
나 . 특징
- 자료들은 각 노드 (Node) 의 데이터 영역에서 관리되고 각 노드의 연결정보 (Pointer) 에 의해 다음
노드와의 연결을 유지 .
- 노드별 4byte 의 포인터형 ( int ) 이 필요하기 때문에 자료구조의 사이즈가 좀 더 커질 수 있음
- 2 중 링크드 리스트의 경우 그 두 배가 추가로 필요함
13

---

## Page 14

II. Linked List 의 개념도
 배열과는 달리 유연하게 크기를 바꿀 수 있는 자료구조
 각 노드는 다음 노드를 가리키는 포인터를 가짐 .
 각 노드를 다음 노드를 가리키는 포인터로 연결하여 만든 리스트 .
아래 그림은 단순 연결 리스트 ( Single Linked List) 라고 함 .
12 87 56 144
14

---

## Page 15

III. C 언어로 표현하는 링크드 리스트의 노드
typedef struct _node /* _node 구조체 정의 : 태그명이라고 함 */
{
int Data; /* 데이터 필드 */
struct _node *next; /* 다음 노드를 가리키는 포인터 */
} node; /* node 라는 데이터형 */
- 재귀적의 정의 : _node 의 구조체가 정의되기 전에 정의 내부에 다시 _node 의 포인터가 들어가 있는
이런 구조체 정의를 재귀적인 정의라고 부름
- struct _node 를 node 라는 이름으로 코딩 됨 .
- typedef : 사용자 정의형으로 구조체 선언에 유리
- typedef struct : 사용자 정의형 구조체
15

---

## Page 16

IV. Linked List 의 초기화
연결 리스트의 첫 번째 노드를 헤드 (Head), 마지막 노드를 테일 (Tail) 이라고 한다 .
Head
Tail
node *head, *tail;
void init_list(void)
{
head = (node*)malloc(sizeof(node)); /* 미 리 공간 메모리 할당 */
tail = (node*)malloc(sizeof(node));
head->next = tail; /* 미 리의 다음은 꼬리 할당 */
tail->next= tail;
}
16

---

## Page 17

V. Linked List 의 구현 ( 삽입 / 삭제 ) 알고리즘
가 . 삽입 알고리즘
1) 노드 2 가 삽입되면
노드 1 노드 3
데이타 데이타 Null
2) 노드 1 가 노드 2 를 가리키도록 포인터를 수정
3) 삽입된 노드 2 역시 다음 노드로 노드 3 를 가리키도록
포인터 수정
데이타
4) 추가된 노드 2 가 가장 마지막일 경우 NULL 을 가리키게
노드 2
수정
1) 기본 빈 연결 리스트에 노드 삽입하는 함수 inert_after ( ) 함수 작성
함수는 정수형의 k 와 node 형의 포인터 t 를 인자로 받는다 .
즉 , t 의 뒤에다 Data k 값을 가지는 노드를 새로 만들어서 삽입함 .
2) 소스 사례
node *insert_after(int k, node* t)
기존 노드 t
{
삽입
/* 테일과 헤드 사이에 NewNode 를 삽입한다 . */
예정
node *s;
s = (node*)malloc(sizeof(node));
s->Data = k;
s->next = t->next;
t->next = s;
노드 S
return s;
k
} 17

---

## Page 18

V. Linked List 의 구현 ( 삽입 / 삭제 ) 알고리즘
나 . 삭제 알고리즘
노드 1 노드 2 노드 3
데이타 데이타 데이타 Null
1) 노드 2 가 없어지면 노드 2 를 가리키던 노드 1 이 노드 3 를 가리키도록 포인터를 변경
2) 노드 2 를 free 시킴 , 이때 처음 노드를 삭제한다면 , 단지 처음 노드만 free 시키면 됨
int delete_node(int k) /* k 를 인자로 받아 , k 값을 가지는 노느를 찾을 예정 */
{
node *s; /* 검색을 할 노드 */
node *p; /* s 가 가리키는 노드의 앞 (previous) 노드 */
p = head;
s = p->next;
노드 P 노드 S
while (s->key !=k && s !=tail)
{
k tail
p = p->next;
s = p->next;
}
if(s != tail) { /* 여기에 왔다는 것은 while 문장을 수행하고 왔으므로 , 찾았다는 것임 */
p->next = s->next;
free(s);
returen 1; }
else
return s;
18
}

---

## Page 19

VI. Linked List 의 종류
가 . Single Linked List
- 가장 간단한 구조를 가지는 링크드 리스트
- 각 노드는 저장하고자 할 데이터와 다음 노드를 가리키는
포인터를 포함
노드 노드
- 각 노드는 다음 노드의 위치를 가리키며 , 반드시 시작 노드의
데이타 데이타 Null
위치를 알고 있어야 하며 , 이전 노드의 위치는 알 수 없음
- 마지막 노드의 Pointer 는 Null 을 가르킴
나 . Double Linked List
- 이전 노드를 가리키는 포인터도 가지고 있음
노드
- 전 / 후 방향 어느 쪽으로도 순환이 가능한
데이타 데이타
Null
Null
링크드 리스트임
노드
- 처음과 마지막 노드의 Pointer 는 Null 을 가르킴
다 . Circular Linked List( 환형 )
1)Single Circular Linked List
노드 노드
- 마지막 노드가 NULL 이 아닌 처음노드를 가리키는 것을 제외하고 Single
데이타 데이타
Linked List 와 같음
2)Double Circular Linked List
- 처음과 마지막 노드가 NULL 이 아닌 처음노드를 가리키는 것을 제외하고 Double Linked List 와
같음
19

---

## Page 20

VII. 유사 자료구조와 비교를 통해 본 Linked List 의 특징
구분 Linked List Array(Stack, Queue)
연속적이지 않을 수 있음 . 이를 위해
자료 저장위치 연속된 공간에 저장
Pointer 로 연결
- 처음과 끝 데이터 : 용이
삽입 / 삭제 용이성 매우 효율적
- 중간 데이터 : 불가능
크기조정 여부 자유롭게 조정가능 제약 ( realloc 예외 )
추가정보 Pointer 를 위한 4Byte 추가 데이터 필요 - 불필요
- int 형 숫자를 저장하는 링크드 리스트인 경우 단지 4byte(or 2 Bytes) 를 저장하기 위해 4byte 의
추가적인 정보가 들어가야 하기 때문에 2 배의 메모리 낭비 발생함
20

---

## Page 21

Tree
출제예상문제
1. Tree 에 대해 설명하시오 .
( 출제 예상 문제 )
21

---

## Page 22

I. 나무를 닮은 자료구조 , 트리 (Tree) 개요 .
가 . 개념 .
- 어떤 하나의 집합 ( 레코드나 디렉토리 등 ) 으로부터 하위 레벨 (lower level ) 로 가지가 나오는 집합
관계를 갖는 계층 구조 (hierarchic structure ) Tree
- 대상 정보를 계층적으로 구조화시키고자 할 때 사용하는 자료구조 .
니 . 사례
22

---

## Page 23

II. 트리 구성 요소 정리
① 루트 높이 ( height) = 0
트리의 높이 (height) 가
높이 ( height) = 1
2 인 ‘ 가장 깊은 곳 ’ 을
② 차수
의미함
높이 ( height) = 2
③ 잎
② 차수 (Degree)
① 최상위 노드를 근노드 (root node, ② 잎 (Leaf)
그 노드의 자식 개수를 말함 .
뿌리노드 ) 라고 하며 , Terminal 을 지칭함
가장 많은 차수가 3 이므로
반드시 1 개의 근노드가 있어야 함 .
트리의 추수는 3 이다라고 표현
노드 삽입 , 삭제 시 트리의
구조에 균형이 잡히도록 재구성
Balanced
트리 (Tree) 및 2 진 트리 (Binary tree )
사례
Tree
[ 참고 ] 링크드 리스트는 선형적인 구조 , 나무 (Tree) 는 비선형구조
루돌프 바이어 ( 독일어 : Rudolf Bayer, 1939 년 5 월 7 일 ~ ) 는 1972 년 이래로 뮌헨 공과 대학교에서
23
정보과학 ( 명예 ) 교수로 재직중 . – B - tree 개발자 /B 의 의미는 추정함 .

---

## Page 24

Binary tree
이진 트리
1. 이진 탐색 트리 (Binary search tree) 의 데이터 삽입 과정에 대하여 설명하시오 . ( 관리 99 회 1 교시 )
2. B-tree 의 장점과 단점에 대해 설명하시오 . ( 관리 89 회 1 교시 )
3. 이진 탐색 트리의 루트 노드와 정수를 인자로 받아 , 주어진 숫자를 이진 탐색 트리에 삽입하는
재귀함수 Node* insertBinaryTree (Node* node, int val ) 을 작성하시오 .
이진 탐색 트리란 " 트리 내의 임의의 노드에 대해 해당 노드의 값이 해당 노드의 부분트리의 모든
값보다 크고 오른쪽 부분트리의 모든 값보다 작은 이진트리 " 를 말한다 . 여기서 인자로 받은 val 값이
트리 내에 존재하지 않는다고 가정하며 , 작성한 리턴 값은 삽입이 완료된 트리의 루트 노드이다 .
(107 회 4 교시 6 번 , 정보관리기술사 )
[ 참고 ]
이진 트리 구현은
1) 배열이용방법
2) 연결리스트 이용방법
24

---

## Page 25

이진 트리 정의 (Binary Tree)
 모든 노드가 2 개의 서브트리를 가지고 있는 트리
 서브트리는 공집합일수 있다 .
 이진트리의 노드에는 최대 2 개 까지의 자식 노드가 존재
 모든 노드의 차수가 2 이하가 된다 . ( 차수 (Degree): 한 노드가 가질 수 있는 최대 가지 수 )
25

---

## Page 26

포화 이진 트리 (Full Binary Tree ) = 꽉 차 있는 이진 트리 ( 나무 )
트리의 각 레벨에 노드가 다 차있는 이진트리
A
B E
C D F G
완전 이진 트리 (Complete Binary Tree)
제일 마지막 레벨을 제외하고는 각 레벨의 노드들이 꽉 차 있는 이진 트리
A A A
B E B E B E
C C D C D F
26

---

## Page 27

C 언어와 연결리스트를 이용하여 표현하는 이진 트리 정의
typedef struct _node /* _node 구조체 정의 : 태그명이라고 함 */
{
int Data; /* 데이터 필드 */
struct _node *left; /* 왼쪽 자식 노드를 가리키는 포인터 */
struct _node *right; /* 오른쪽 노드를 가리키는 포인터 */
} node; /* node 라는 데이터형 */
- 이진 트리 (binary tree) 는 한 노드가 최대 2 개의 자식 노드를 가지는 트리를 말하며 첫 번째 노드는
부모 (parent), 자식 노드는 왼쪽 (left), 오른쪽 (right) 라고 불립니다 .
- 이진 탐색 트리는 이진 트리의 모든 노드를 방문하여 작업하는 것을 이진 탐색 트리라고 합니다 .
27

---

## Page 28

I. O(log2 N) 의 평균 탐색 속도 보장 , 이진 탐색 트리의 정의
항 목 설 명
규칙 1 모든 원소의 키는 유일해야 함
규칙 2 루트보다 작은 값은 왼쪽에 위치
규칙 3 루트보다 큰 값은 오른쪽에 위치
II. 이진 탐색 트리에서의 데이터 삽입 매커니즘
가 . 이진 탐색 트리에서의 데이터 삽입 알고리즘
구 분 설 명
1 ) 전체 트리에서 삽입하고자 하는 키 값이 존재하는지 탐색
2 ) 탐색이 성공하면 이미 존재하는 노드로 간주하고 종료
알고리즘 3) 탐색이 실패하면
3-1) 탐색이 실패한 곳의 부모 노드가 NULL 이면 루트로 삽입
3-2) 부모 노드의 키 값과 비교하여 작으면 왼쪽 , 크다면 오른쪽 자식으로 삽입
전위 순회 루트 - > 왼쪽 서브 트리 - > 오른쪽 서브 트리 방향으로 모든 트리 탐색
탐색 방법 중위 순회 왼쪽 서브 트리 - > 루트 - > 오른쪽 서브 트리 방향으로 모든 트리 탐색
후위 순회 왼쪽 서브 트리 - > 오른쪽 서브 트리 - > 루트 방향으로 모든 트리 탐색
28

---

## Page 29

나 . 이진탐색 트리에서의 데이터 삽입 알고리즘 세부 과정
구 분 삽입 과정 삽입 프로세스 세부 내역
4 삽입시도
- 삽입하고자 하는 키 값이 루트 노드의
Phase #1
키값보다 작으므로 왼쪽 서브트리 탐색
- Level2 의 왼쪽 서브노드의 키 값과 비교
4 삽입시도
Phase #2 - 삽입하고자 하는 키값이 크므로 오른쪽으로
탐색 진행
- Level 3 의 오른쪽 서브노드의 키 값과 비교
- 삽입하고자 하는 키 값이 크므로 오른쪽으로
Phase #3 탐색 진행
- Level 4 의 오른쪽 서브트리가 NULL 이므로
4 삽입시도
노드를 생성하고 삽입 완료
29

---

## Page 30

II. 순회 방법 (Tree Traverse) – 이진 트리 타기
가 . Inorder 순회
- 특정 노드에서 자신의 왼쪽 서브 트리를 모두 방문하고 , 자기 노드를
방문한 후에 오른쪽 서브 트리를 방문 .
- 이 원리를 모든 노드에 재귀적으로 적용하면 모든 노드들을 한번씩 방문
- Left - > Root - > Right
나 . Preorder 순회
- 특정 노드에서 먼저 자기 노드를 방문하고 , 왼쪽 서브 트리를
모두 방문 .
- Root - > Left - > Right
다 . Postorder 순회
- 특정 노드에서 자신의 왼쪽 서브 트리와 오른쪽 서브 트리를
차례로 방문한 후 , 마지막으로 자신의 노드를 방문
- Left - > Right - > Root
[Reminder] 방문 노드에 대한 것을 스택에 표시를 할 수 있어야 한다 . 출제 예상 문제
30

---

## Page 31

III. B-tree 의 구조와 장점 및 단점
1) 삽입 , 삭제 후에도 균형 트리 유지
2) 효율적인 알고리즘 제공
장점
3) 저장 장치의 효율성
4) 균등한 탐색 속도 보장 가능
1) 노드의 삽입과 삭제 시 트리의 균형을 유지하기 위해 복잡한 연산 ( 재분배 , 합병 ) 이 필요
단점 2) 순차탐색 시에 inorder( 중위 ) 순회로 비효율적
-> B+ Tree 구조에서 leaf node 간의 linked list 로 순차 탐색 효율 향상됨 .
31

---

## Page 32

IV. 기출문제 풀이
- val 값이 트리 내에 존재하지 않는다고 가정
조건
- 작성한 함수의 리턴 값은 삽입이 완료된 트리의 루트 노드
/**
* 새로운 노드 생성 및 초기화 , 데이터 적용
* val 삽입 데이터
* @return Node* 새롭게 할당된 노드의 포인터
*/
Node* newNode(int val)
{
Node *temp = (Node *)malloc(sizeof(Node)); // 메모리 할당
temp->value = val; // 데이터 할당
temp->left = temp->right = NULL; // 자식노드 초기화
return temp;
}
32

---

## Page 33

IV. 기출문제 풀이
/**
* 이진탐색 트리 삽입 알고리즘 , 메인함수에서 insertBinaryTree (Node* node, int val ) 호출
* node 탐색노드
* val 삽입 데이터 4, 3, 5
* @return Node* 삽입이 완료된 트리의 루트 노드
*/
Node* insertBinaryTree(Node* node, int val)
{
if (node == NULL) return newNode(val); // tree 가 비어 있는 경우 , 새로운 노드 할당 후 리턴
if (val < node->value) { // 삽입될 값이 노드 값보다 작은 경우 , 왼쪽 자식노드 삽입시도 3<4
node->left = insertBinaryTree(node->left, val);
}
else if (val > node->value) { // 삽입될 값이 노드 값보다 큰 경우 , 오른쪽 자식노드 삽입시도
node->right = insertBinaryTree(node->right, val);
}
// 작성한 함수의 리턴 값은 삽입이 완료된 트리의 루트 노드 리턴
return node;
33
}

---

## Page 34

이진트리 , 깊이 , 차수 (Degree)
이진트리
좌우균형이 안맞으면 , 순차검색과 동일한 문 C 언어 사용을 통해 코딩 적용
( Binary Tree)
제점
삽입과 삭제시에 스스로 균형 유지
균형잡는 트리 ,
Blanced Tree 약자로 우리는 B - Tree 라고 부름 .
예 ) AVL Tree, 2 - 3 tree( 이삼트리 ),
Red-Black Tree, B-Tree
하나의 노드에 여러 데이터가 배치되는 트
B -Tree( 비트리 ) 리구조 (N 개면 , N 차 트리 ) 이진트리와 혼동하지 말것 !
예 ) 5 차 B 트리면 , 자료가 5 개까지 차수 있음 .
34

---

## Page 35

B-Tree
B-Tree
1. 데이터베이스의 Index 접근 방법에서의 가장 중요한 문제는 인덱스 엔트리 자체를 어떻게
조직하느냐 하는 것이다 . 다음에 대해 설명하시오 .
가 . B - 트리
나 . B+ - 트리
2. B 트리와 B+ 트리와 관련하여 다음을 설명하시오 .
1) B 트리와 B+ 트리의 정의와 차이점
2) B 트리의 삽입 알고리즘
3) B 트리의 삭제 알고리즘
4) 26, 57, 5, 33, 72, 45 를 순서대로 삽입하고 , 72, 33, 45 를 순서대로 삭제하는 모든 과정의 B 트리를
그리시오 . ( 단 , 차수는 3)
35

---

## Page 36

I. Balanced Tree 를 통한 균등한 응답속도 보장을 위한 탐색 트리 , B - tree 의 개요
가 . Balanced tree 정의
- 데이터를 정렬하여 탐색 , 삽입 , 삭제 및 순차 접근이 가능하도록 유지하는 트리형 자료구조
- B 는 Balanced 의 의미 이며 , leaf node 가 한쪽 방향으로 쏠리는 (skewed) 현상이 적음 .
- 임의의 노드 (node) 에 주목했을 때 , 거기서 파생하는 좌우의 부분 트리 (subtree) 의 노드의 수가
최대 「 1 」밖에 차이가 나지 않는 트리
나 . Balanced - tree 의 특징
- AVL(Adelson, Velskii , Landis) 트리 , 2 - 3 트리 , 2 - 3 - 4 트리가 대표적임
- AVL 트리는 이진 검색 트리와 같이 ‘ 왼쪽 자식 < 부모 < 오른쪽 자식 ’ 등식이 성립한다 .
36

---

## Page 37

II. . Balanced Search Tree 의 구조
가 . 구조
균형도 수치 (Balanced Factor)
0 = 4-4
3-0 = 3 ( 왼쪽 나무의 높이에서 오른쪽 나무의 높이는 뺀 값
3
1. 균형도를 모두 갱신한다 .
키 2 개 자식 3 개
2. 균형도가 절대값 2 이상 수치에 대해서 회전 (Rotation) 실시한다 .
3. 회전의 결과가 전체적인 균형도를 다시 갱신한다 .
37

---

## Page 38

구분 B 트리 알고리즘 - 삽입
여유공간 있을 경우 - 삽입할 key 값은 항상 Leaf 노드에 삽입
- 해당 Leaf 노드에 새로운 key 값을 삽입 했을 경우 가정
- 중간 key 값을 중심으로 2 개 노드로 분할 (Split)
여유공간 없을 경우
- 중간 key 값은 분할된 노드에 대해 부모 노드에 삽입
- 이 때 , 부모 노드에서 Overflow 발생할 경우 분할 작업 반복
26, 57, 5, 33, 72, 45 를 순서대로 삽입
26 의 중간 key 값을 중심으로 2 개 노드로 분할 (Split)
33 - 삽입할 key 값은 항상 Leaf 노드에 삽입
X
38

---

## Page 39

구분 B 트리 알고리즘 - 삽입
여유공간 있을 경우 - 삽입할 key 값은 항상 Leaf 노드에 삽입
- 해당 Leaf 노드에 새로운 key 값을 삽입 했을 경우 가정
- 중간 key 값을 중심으로 2 개 노드로 분할 (Split)
여유공간 없을 경우
- 중간 key 값은 분할된 노드에 대해 부모 노드에 삽입
- 이 때 , 부모 노드에서 Overflow 발생할 경우 분할 작업 반복
26, 57, 5, 33, 72, 45 를 순서대로 삽입
규칙 : 차수 (Degree): 한 노드가 가질 수 있는 최대 가지 수 : 3
1) 노드 자료 수가 N 개 라면 , 자식 수는 N+1 이어야 한다 .
( 자식 수 = 노드 수 )
2) Root 는 적어도 2 개 이상의 자식을 가져야 한다 .
3) Root 를 제외하고 , 모든 노드는 적어도 M/2 개의
자료를 가지고 있어야 한다 .( 셀 - 소수점 자리 제외 , 2.5 = 2)
예 ) 3 차 , 3/2 = 1 개 이상 자료를 가지고 있어야 한다 .
(M 차 트리의 경우 / M 이 3 보다 큰 경우로 가정 시 , 차수 3 )
39
( 동영상 ) https ://www.youtube.com/watch?v=WBqKyrL6u - Q

---

## Page 40

[ 참고 ] 처리 알고리즘 – 삽입 – 59 삽입 하는 사례
- 여유공간이 있을 경우 : 단순히 순서에 맞게 삽입
- 여유공간이 없을 경우 : Overflow 발생 , split 작업 ( 높이 증가 )
① 해당 노드를 두 개의 노드로 분할 – 50 과 58 노드를 분리
② 해당 노드의 키 값에 새로운 키 값을 삽입했다고 가정
③ 중간 키 값을 중심으로 큰 키들은 새로운 노드에 저장 – 59 새로운 노드 저장
④ 중간키 값은 분할된 노드의 부모 노드로 올라가서 삽입 – 58 올려 .
⑤ 이 때 , 다시 Overflow 발생 시 위와 같은 분할 (split) 작업 반복
40

---

## Page 41

노드 o 에 59 삽입
① 해당 노드를 두 개의 노드로 분할
41

---

## Page 42

I. B+ 트리의 개요
Index Set: 키 , 포인터만 존재 .
Index Set 에 있는 Node 는 Leaf 를 찾아갈 수 있는 Key 값과 Pointer 값만 가지고 있음
Sequence Set: Data 만 존재 .
Leaf Node 값은 오름차순으로 정렬되어 있으며 , 삽입으로 인한 분기 시 Sequence Set 에
연결되면서 , 순차성 유지 : 성능 저하 해결
42

---

## Page 43

II. B- 트리와 B+ - 트리의 비교
비교항목 B-Tree B+Tree
개념도
- root 에서 Leaf 까지 동일높이 - 인덱스 Set, 순차 Set 구성
구조특징
- 노드 분열 시 보조연산 수행 - 전체 데이터는 순차 Set 에 구성
순차접근 - 중위순회 - Leaf 노드만 검색
직접접근 - 트리 순회 검색 - 인덱스 Set 를 순회 검색
속도 - 보통 ( 소량데이터 검색 시 유리 ) - 순차검색 빠름
중복성 - 탐색키 중복성 없음 - 인덱스 set, 순차 Set 중복키
노드키 이동 기준 - 노드의 1 / 2 이상 채워졌을 시 - 노드의 1 / 2 이상 찼을 때
- Lead 가 아닌 노드 크기가 더 크며 - 모든 노드 크기 동일
노드관리
저장공간 관리가 복잡함 . - 삭제될 노드는 Leaf 에 존재
43

---

## Page 44

III. B* tree 의 정의
- B-tree 의 문제점 ( 보조연산 필요 ) 를 보완하기 위해서 B - tree 를 약간 변형한 트리 ( 보조연산 회수를 줄임 )
- B-tree 에 비해 공간활용도를 높일 수 있음
(B-tree 는 최소 1/2 면 분열할 수 있지만 , B* tree 는 최소 2/3 가 되어야 분열함 )
- 노드의 분열을 줄여서 보조연산회수를 감소시킴 .
- 노드가 꽉차면 분열하지않고 형제노드로 재배치 ( 인접노드 찰 때까지 지연 가능 ) - 빈번한 노드의 분열을
줄이고자 하는 것으로 모든 키와 그에 관련된 레코드들이 잎 노드에 존재
노드 사용공간 개선 - > 빈번한 노드의 분열 줄임 목적
44

---

## Page 45

IV. B-tree 와 B+tree 의 비교 및 활용
가 . B - tree 와 B+tree 의 비교
구분 B-tree B+tree
- 순차 접근이 어려움
- 순차 접근이 용이함
접근성 - 탐색 중 원하는 키 값의 레코드위치를
- 레코드의 위치는 leaf node 에서만 파악됨
파악해야 함
중복성 - 탐색 키의 중복성을 제거함 - Index Set 와 Sequence Set 에 중복성 존재
- non-leaf node 크기가 더 크며 tree 에 - 모든 node 의 크기가 같으며 삭제될 node 가
복잡성
대한 저장공간 관리가 복잡함 항상 leaf node 에 존재함
나 . B - tree 의 활용
- DBMS 의 인덱스 자료구조로 활용됨 (B+ tree 및 B*tree 로 발전 적용 )
- 검색엔진 , 패턴 매칭 등 빠르면서도 성능이 일정하게 유지되는 탐색이 요구되는 분야에 활용 됨 .
45

---

## Page 46

Heap
Heap
 자료구조 Heap 을 설명하고 , Heap 의 2 가지 유형인 max - heap 과 min - heap 의 차이점을 설명하시오 .
( 관리 90 회 1 교시 )
I. 완전 이진트리 이면서 동시에 최대 트리 혹은 최소 트리 , Heap 의 개념
가 . Heap 의 정의
- 여러 개의 노드들 가운데서 가장 큰 키 값을 가지는 노드나 가장 작은 키 값을 가지는 노드를 빠른 시간
내에 찾아내도록 만들어진 자료 구조
나 ) Heap 의 특징
- 완전 이진 트리의 하나 로서 각각의 노드는 유일한 키 값을 가짐
- 다른 말로 Priority Queue 라고 하는데 , 큐는 큐이되 우선순위를 가진 큐
다 . Heap 의 루트노드 특성
구분 조건 루트 노드의 키 값
최대 힙 (Max Heap) ( 부모 노드의 키 값 ) ≥ ( 자식 노드의 키 값 ) 트리 전체 중 최대 값
최소 힙 (Min Heap) ( 부모 노드의 키 값 ) ≤ ( 자식 노드의 키 값 ) 트리 전체 중 최소 값
46

---

## Page 47

II. max-heap 과 min - heap 의 설명 및 차이점
가 . max - heap 의 개념
- 완전 이진 트리이며 heap 의 한 노드는 그 노드의 모든 자손 노드들보 다 큰 키 값을 가진다 .
- 루트에는 항상 가장 큰 키 값을 가지는 노드가 위치하므로 우선순위 큐 (priority queue) 를 구성하는데
적합한 자료 구조
나 . min - heap 의 개념
- 완전 이진 트리이며 heap 의 한 노드는 그 노드의 모든 후손 노드들보다 작은 키 값을 가짐
다 . max - heap 과 min - heap 의 차이점
항목 Max-heap Min-heap
노드 자손 노드보다 큰 값 자손 노드 보다 작은 값
사용 Descending priority Ascending priority
예제
47

---

## Page 48

III. Heap 의 사용
- 콜렉션으로부터 가장 큰 값을 신속하게 찾거나 제거할 필요가 빈번하게 발생하는 상황에서 유용하게
사용
- 중요도에 따라 수행할 작업들을 정리하고 , 가장 급박한 것을 골라 수행
- 효율성에 따라 수행할 적업들을 정리하고 , 가장 효율적인 작업수행 ( 프린트 수행 시 1 페이지짜리 출력과
100 페이지 출력이 있을 때 , 1 페이지 출력 먼저 수행 )
48

---

## Page 49

T-tree
I. AVL-Tree 와 B - Tree 의 개선된 형태 T - Tree 의 개요
가 . T - Tree 의 정의
- AVL - Tree 의 이진 탐색 특성 및 높이 균형과 B - Tree 의 업데이트와 저장 효율 ( 한 노드는 여러 개
데이터 가짐 ) 을 물려 받은 메모리 기반 DBMS 에서 선호되는 인덱스 알고리즘
나 . T - Tree 의 특징
1) T - Tree 는 이진 트리이기 때문에 AVL - Tree 의 이진 검색 특성을 가짐
2) T 노드에는 많은 데이터가 포함되기 때문에 B - Tree 와 같이 데이터 변경이 용이하며 저장 효율이
좋은 특성
3) 저장된 데이터에 대해서는 AVL - Tree, B - Tree, 체인버켓 해시 (Chain Bucket Hash), 확장 해시
(Extendible Hash), 선형 해시 (Linear - Hash) 에 비해 전반적으로 탁월한 성능을 가지며 , 공간 사용에
있어서 효율적임
[ 참고 ] AVL - tree (Adelson - Velskii and Landis tree) : 한 노드를 중심으로 좌우 종속 트리의 높이 차가 1 이하인 균형 잡
힌 트리로서 , 이진 트리의 삽입 , 삭제를 계속할 때 어느 한 방향으로 치우치거나 , 높이 차이로 인해서 수행 시간이 증가되
는 것을 막기 위해 균형을 유지하도록 한 트리 구조 .
49

---

## Page 50

II. T-tree 의 구조
< 그림 > 두 개의 서브트리를 가지는
내부노드 (Internal node) 의 T - Tree 의
GLB(Greatest Lower Band ):
와 LUB(Lowest/Least Upper Band )
50

---

## Page 51

III. T-Tree 와 B - Tree 의 비교
구분 T-Tree B-Tree
활용 DBMS MMDBMS RDBMS
논리주소 변환 메모리 주소 직접 논리주소 - > 물리주소
해당 레코드 포함
엔트리 크기 메모리 주소 사용 경제적
데이터 페이지 포인팅
설계초점 CPU 사용 시간 절감 디스크 I/O 최소화
self-balancing binary search tree
메모리 공간 사용 구조를 이용 비 경제적
상대적 경제적
접근속도 빠름 보통
51

---

## Page 52

R-Tree
출제예상문제
1. 키워드 : 공간 데이터 , MBR, 교차질의 , 포함질의 , 근접이웃질의
( 출제 예상 문제 )
2. 공간 인덱스 구조에서 MBR(Minimum Bounding Region) 을 설명하고 , R 트리 , R + 트리 , R* 트리 를
비교하시오 .
(111 회 , 정보관리 , 3 교시 )
52

---

## Page 53

I. R 트리는 다차원의 공간 데이터를 저장하는 색인 자료구조
예 ) 지리학에서 R 트리는 " 현재 위치에서 200km 이내의 모든 도시를 찾아라 " 와 같은 질의에 대해
빠르게 답을 줄 수 있다 .
가 . 공간 데이터베이스의 핵심 R - Tree 정의
- 최소 사각형 (MBR: Minimum Bounding Rectangle) 에 기반 한 인덱싱 기법
- 다차원의 공간 데이터를 저장하는 색인 구조로 , 점 , 선 , 면 , 도형 등 다양한 다차원 공간 데이터 객체를
저장하고 검색하기 위한 다차원 인덱스 구조
- N 차원의 공간 데이터를 효과적으로 저장하고 지리정보와 관련된 질의를 빠르게 수행할 수 있는 자 료
구 조
나 . R - Tree 의 특징
- R-Tree 의 저장과 삭제 알고리즘은 가까운 데이터들은 가능한 같은 단말 노드에 두고자 시도
- 타이트 (Tight) 한 MBR 을 유지할 수 있고 , 검색이 좋아짐 .
- 검색 알고리즘은 MBR 을 사용하여 하위 레벨의 자식 노드를 검색할지를 결정
53

---

## Page 54

II. 개념도
54

---

## Page 55

III. 검색 , 삽입 , 삭제 처리 설명
검색 (search ) 예
가 . 교차 질의 (Intersection)
: 최소 경계 사각형 MBR 을 질의 입력으로 받지만 , 검색은 B - 트리와 상당히 유사하다 . 검색은 루트 노드
로부터 시작하는데 , 단말 노드를 제외한 모든 중간의 비단말 노드들은 자식 노드의 MBR 을 포함하는
MBR 을 가지며 , 단말 노드들의 MBR 은 단말 노드가 가리키는 공간 데이터들을 둘러싸는 최소 경계 사각
형이다 . 따라서 , 모든 노드들은 질의 입력 MBR 과 자식 노드들의 MBR 을 비교하여 교차되는 영역이 있
는 자식 노드들에게만 질의를 전달한다 . 이러한 검색은 재귀 함수로 구현할 수 있다 .
나 . 포함 질의 (Containment)
: 교차 질의와 유사하나 , 교차되는 영역이 있는 자식노드가 아닌 , 질의를 포함하는 자식노드들만 검색한
다 .
다 . 근접 이웃 질의 (Nearest Neighbor)
: 점 좌표와 거리를 입력으로 받는다 . 특정 점 좌표로부터 가장 가까운 거리에 위치한 데이터를 찾는 알
고리즘이 필요하다 .
55

---

## Page 56

[ 참고 ]
R+ 트리 ?
- 트리 노드들의 최소 경계 사각형 (MBR, Minimum Bounding Rectangle) 이 서로 겹치는 것을 허용
하지 않으며 , ( 중첩되면 )
겹치는 영역이 불가피 한 경우에는 대신 데이터를 복제하여 여러 단말 노드에 저장하는 구조
[ 목적 ]
R- 트리에서 노드 간의 겹치는 영역을 없앰 : 검색 속도의 향상이 주된 목적임
- 위 그림과 같이 r4 가 중복저장되며 , MBR 이 충첩될 때의 문제점을 해결함 .
56

---

## Page 57

[ 참고 ]
R* 트리 ?
- R- 트리의 삽입 , 삭제 알고리즘 개선하여 , 삽입 , 삭제시 부모 노드의 MBR 이 효율적으로 확장될 수
있도록 알고리즘을 개선한 R 트리의 변형
예를들면 ,
중간 노드의 선택 : 면적 최소화 (MBR 크기 증가가 작은 노드 선택 ) 등 개선 .
- 2 단계 Heuristic 사용 : 분할 축 선택 : 둘레 길이 최소화 등 기능 추가
현재 학계에서는 R* 트리가 대표적인 R 트리로 인식되고 있음
57

---

## Page 58

AVL 트리 (Adelson - Velskii and Landis tree)
기출문제
1. 아래 내용에 대하여 서술하시오 .
가 . BST(Binary Search Tree) 와 AVL Tree 의 개념
나 . BST 와 AVL Tree 의 관계 및 AVL Tree 의 동작유형
다 . AVL Tree 를 유지하기 위한 Rotation 연산
( 출제 예상 문제 ) 아델슨 - 벨스키 - 랜디스
Tree
Binary Tree Balanced Tree
( 이진 트리 )
왼쪽 작은 나무의
높이와 오른쪽
작은 나무 높이가
2-3 tree,
같거나 차이가
AVL
하나 차이나는
나무
58

---

## Page 59

AVL 트리 (Adelson - Velskii and Landis tree)
기출문제
1. 높이균형이진트리인 AVL Tree 에 대하여 설명하고 , 아래 노드를 순서대로 AVL 트리에 삽입하면서
균형을 유지하는 과정을 설명하시오 .
노드 : 8, 9, 10, 2, 1, 5, 3, 6, 4
(2016 모의 고사 )
59

---

## Page 60

I. AVL(Adelson-Velskii, Landis) Tree 의 개념
각각의 노드 (node, 분기점 ) 마다 왼쪽과 오른쪽 부분 트리 (sub - tree) 의 높이 차이에 대한
정의
정보를 가지며 부분 트리의 높이 차이가 2 보다는 작아야 되는 성질을 가진 균형 탐색트리
1) 높이 균형 성질 (height - balance property) : 트리 T 의 모든 내부 노드 (internal node)
v 에 대하여 v 의 자식 노드들의 높이 차이가 최대 1 이다 .
특징
2) 임의의 이진탐색트리 : T 가 높이 균형 성질을 만족할 때 AVL 트리라고 한다 .
3) 균형인자 (Balance Factor) = 왼쪽트리의 높이 – 오른쪽 트리의 높이
- 위 알고리즘은 균형잡는 Tree 의 원조이다 .
- 균형도의 절대값이 2 이상인 노드에 대해서 회전을 실시한다 .
60

---

## Page 61

핵심 내용
Rotation( 회전 ) 연산 : RR, LL, LR, RL
요약
AVL 나무의 삽입 알고리즘
1) 이진 검색 나무와 같이 동일한 경로로 삽입하면서 균형도를 갱신한다 .
0
2) 균형도의 절대값이 2 이상 노드에 대해서 회전을 실시한다 .
3) 회전의 결과로 전체적인 나무의 균형도를 다시 갱신한다 .
F
Step 1: 비어있는 AVL 나무에 F 노드 삽입 : 균형도 0
Step 2: G 삽입
-1
G 는 당연히 , F 보다 크므로 , F 의 오른쪽에 삽입된다 . 이진 나무 검색과 동일하지 .
F
0
G
61

---

## Page 62

오늘쪽으로 (R 회전 ) 간다 .
-2
F
-1
Step 3: K 라는 노드 삽입하자 .
F 가 균형도 - 2 가 되어 AVL 규칙에 어긋난다 .
G
그림에서 보듯이 , 불균형이 일어나는 경로가 F 를 기준으로
오른쪽 , 오른쪽일 때 하는 회전 을 RR 회전이라고 한다 .
0
RR 회전을 하면 , 균형도는 모두 0 이 된다 .
K
0
G
결과 RR 회전 결과
0
0
F
K
62

---

## Page 63

0
G
LL 회전
0
0
Step 1: C 와 A 노드 삽입하자 .
F
K
C 를 삽입하는 경우 , 문제 없음
+1
G
+1
0
F
K
0
C
63

---

## Page 64

+2
Step 2: A 노드 삽입하자 .
G 와 F 가 균형도가 +2 가
G
되어 , AVL 나무조건을
+2
0
만족하지 않는다 .
F
K
불균형 삽입 경로가 왼쪽
+1
왼쪽일 경우 ( 경로가 ), 하는 회전을
LL 회전이라고 한다 .
C
0
A
+1
G
0
0
C
K
0
0
A
64
F

---

## Page 65

+2
LR 회전 ★
G
1) E 를 삽입하면 ,
-1
0
G 노드가 AVL 나무 조건에 맞지 않음 .
C
K
문제가 된 , G 로부터 E 가 삽입되는 경로가
0
+1
왼쪽 오른쪽이다 .
A
F
E 가 삽입되는 경로 그림
이 경우 , 균형을 맞추기 위하여
하는 회전을 LR 회전이라고 하며 ,
E
LR 회전은 두번의 회전으로 처리된다 .
2) 그림은 F 와 C 노드를 회전한 모습이다 .
+2
G
F 의 왼쪽 자식은 C 의 오른쪽 자식으로 주고 ,
G 의 왼쪽 자식은 F 로 바꾼다 .
K
F
+2
C
회전 후 노드 정리 ( 중간 처리 )
A
E
65

---

## Page 66

LR 회전 ★
3) 연속적으로 F 와 G 를 회전한다 . 회전은 F 의 오른쪽 자식으로 G 를 두고 .
F 의 오른쪽 자식이 있다면 , G 의 왼쪽 자식에 둔다 . ( 지금은 없는 경우 )
+0
G
+2
F
K
F
+2
G
C
- 1
C
A
K
E
A
E
66

---

## Page 67

RL 회전
F
1) I 삽입
F
-2
C G
G
C
+1
I
A
E
A K
E
K
중간 회전
0
I
G 가 AVL 나무의 조건을 어기게 된다 .
이 G 로 부터 ( 기준 ) 삽입되는 경로가 오른쪽
F
왼쪽 순이다 .
이런 경우 균형을 맞추기 위하여 하는 회전을
C
I
RL 회전 이라고 한다 .
역시 , RL 회전도 연속으로 처리한다 .
A
E
G
K
67

---

## Page 68

RL 회전
1) I 삽입
F
-2
F
G
C
+1
C
I
A K
E
A
E
G
K
0
I
G 가 AVL 나무의 조건을 어기게 된다 .
이 G 로 부터 ( 기준 ) 삽입되는 경로가 오른쪽
왼쪽 순이다 .
이런 경우 균형을 맞추기 위하여 하는 회전을
RL 회전 이라고 한다 .
AVL 나무는 실제 프로그래밍을 하면 , 번거로운 점이 너무 많다는 것을 알게된다 . 삽입과 삭제
후에 균형도가 어떻게 변화가 되었는지 확인하는 절차도 필요 , 균형을 맞후기 위한 회전을
한 경우에는 전체 AVL 나무의 균형도를 재조정할 필요가 또 있음
68
