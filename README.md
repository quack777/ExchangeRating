# (☞ ﾟヮﾟ)☞ ExchangeRating ☜(ﾟヮﾟ ☜)

15팀 과제

# ༼ つ ◕*◕ ༽つ TEAM*총대장님과 아이들 | 과제

## 👫 팀원

- 첫번째 계산기 - 조은총, 전수현
- 두번째 계산기 - 최병현, 조용우
- 배포주소 : http://exchangerating.s3-website.ap-northeast-2.amazonaws.com/
- Front-end: React(Funiction-Component)\_reactr-router-dom(V6), CSS Module, JavaScript(ES6)
- 협업툴: Slack, Notion, Github

## ✔과제 구현 목록

- 첫번째 계산기
  1. 수취 국가를 선택하면 환율이 바뀌어 나타납니다.
  2. 송금액을 입력하고 Submit을 누르면 수취금액이 계산해서 화면에 노출됩니다.
- 두번째 계산기
  1. 송금 국가를 선택할 수 있으며 해당 송금 국가에 대한 수취 국가 환율 비율을 구할 수 있음

## 🎞구현영상

![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/65222200/151019432-7eebd0b8-13b8-411a-bee3-ffd442c25cea.gif)
![ezgif com-gif-maker (9)](https://user-images.githubusercontent.com/65222200/151020591-307265d9-e456-4988-b225-df85d40d00e0.gif)

## 📆개발 기간

- 기간: 2022년 1월 24일 ~ 2022년 1월 26일 (3일간)

## 🕹설치 및 시작하는 법

1. git clone
2. npm install
3. npm run start

## 📃프로젝트 구조

```
├─ public
│     index.html
│
├─ src
│  └─ api
│  │   client.js
│  │
│  ├─ coponents
│  │     ├─ CalculateFirst
│  │     │      CalculateFirst.css
│  │     │      CalculateFirst/js
│  │     └─ CalculateSecond
│  │            CalculateRateBox.css
│  │            CalculateRateBox.js
│  │            CalculateSecond.js
│  │            CalculateSecondForm.css
│  │            CalculateSecondForm.js
│  │            CalculateSecondTemplate.css
│  │            CalculateSecondTemplate.js
│  │
│  ├─ pages\Main
│  │     MainPage.css
│  │     MainPage.js
│  │
│  ├─ styles
│  │    common.css
│  │    reset.css
│  │
│  ├─ utils
│  │     format.test.js
│  │     GetApi.js
│  │     GetExchangeRateByUSD.js
│  │     setMonthconvert.js
│  │     SetNumberFormat.js
│  └─ config.js
│     index.js
│     Router.js
└─


```

## 🔎구현 기능 및 개인 역할

> 최병현:
>
> \- API 통신에 따른 state값 저장 및 저장된 state값에 따라 화면 동적 랜더링 작업 담당
>
> \- 송금 국가-수취 국가에 대한 API 통신을 통해 전달 받은 Response에서 필요한 data 값만을 디스트럭쳐링 할당
>
> \- API 통신을 통해 받아 온 data값과 Component 자체에서 관리되는 state 값을 사용하여 화면에 동적 랜더링
>
> \- new Date 인스턴스를 통해 생성한 date 객체에서 월, 별, 일 를 가져오는 메서드를 사용하여 디자인 시안에 맞춘 날짜 출력
>
> \- Object.entries()를 사용하여 현재 선택되어진 key에 대한 val를 출력되어야 할 금액에 표시되도록 동적 랜더링
>
> 조은총:
>
> \-API 통해 staste값으로 저장 이 state를 이용해 환율 추출
>
> \-송금액을 입력하고 Submit을 누르면 수취금액이 계산해서 화면에 노출시키기
>
> \-두번째 계산기에 usd값만 가지고 환율 구하는 솔루션 제공
>
> 전수현 :
>
> \- API를 통해 데이터 받아오기 및 환율 계산, 출력
>
> \- 환율 계산을 할 나라를 바꿀때마다 실시간으로 환율 정보 업데이트
>
> \- 송금액 조건 추가 후. 조건을 만족하지 않을 시 알람 메세지를 출력.
>
> 조용우:
>
> \- 두번째 계산기에 대한 전체적인 CSS, layout작업
>
> \- API 호출 값 받아오기
>
> \- Input type을 text로 변경 후 글자수를 계산하여 일정 글자 수 이상 입력시 콤마가 추가 되도록 수정했습니다. 이후 오류발생으로 최병현 팀원님이 재수정 했습니다.
>
> \- type을 text로 변경하여도 text가 입력되지 않도록 조치했습니다. 이후 오류발생으로 최병현 팀원님이 재수정 했습니다.

## ❗소감 및 후기

> 최병현:
>
> pair를 이루어 하나의 프로젝트를 서로 의견을 공유하며 프로젝트를 만든 경험이 처음에는 다소 어색하였다. 누군가 내 코드를 작성하는 것을 실시간으로 보는 것이 과연 많은 도움이 될지 고민하였는데, 구문 상에서의 실수 및 로직을 같이 의견을 나눌 수 있었던 점이 프로젝트의 작업 속도를 높일 수 있었다. 기능 상으로도 많은 경험을 쌓을 수 있었는데, state에서 관리하는 배열 객체에 특정 일부 요소만을 다른 요소로 바꾸기 위해 복사본 객체를 새로 생성한 이후에 인덱스 값으로 해당 배열 객체의 특정 요소를 바꾸는 연산은 간단하지만 향후 프로젝트에서 유의미하게 쓰일 수 있는 좋은 경험이었다.
>
> 조은총:
>
> 다른 팀원 분과 과제를 진행하는데 내가 직접 코드를 짜지 않고 대화하면서 진행하는게 새로웠다. 똑같은 문제를 가지고도 다르게 생각하고 코드도 다를 수 있다는 점을 다시 한 번 깨닫게 됐다. 팀원분들과 소통하면서 맨 처음에 초기 세팅을 진행하였는데 폴더 구조를 다 잡아놓고 초기세팅을 만들고 진행하니까 훨씬 수월해서 앞으로 혼자여도 이런 부분들은 꼼꼼하게 집고 넘어가야겠다.
>
> 전수현:
>
> 프로젝트를 진행하면서 혼자서 공부해서는 알 수 없었을 지식들을 회의를 하면서 배울 수 있었던 것 같다. 덕분에 서로의 부족한 부분들을 채우고 배우며 많은 것들을 얻어간 프로젝트라고 생각이 된다.
>
> 조용우:
>
> 협업이 처음이라 처음에는 익숙하지 않았습니다. 하지만 작업을 시작하고 서로 아이디어를 공유하고 이야기하면서 제가 모르는 부분에 대해서도 더 많이 알게 되었고 협업의 중요성과 필요성에 대해 확실히 알게 되었습니다. 너무 좋은 경험이었습니다.

## 📕레퍼런스

- 이 프로젝트는 <u>[원티드 프론트엔드 프리온보딩](https://www.wanted.co.kr/events/pre_onboarding_course_6)으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
