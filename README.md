 # 📅 Calendar App
<img width="1027" height="525" alt="image" src="https://github.com/user-attachments/assets/a38ebe1b-b4fc-40bc-a577-6e35361866a0" />



React Native와 Expo를 사용하여 개발된 캘린더 및 일정 관리 앱입니다.

## 🚀 주요 기능

- **캘린더 뷰**: 월별 캘린더를 통한 일정 확인
- **일정 목록**: 리스트 형태로 일정 관리
- **일정 추가/편집**: 모달을 통한 일정 생성 및 수정

## 🛠 기술 스택

- **React Native** 0.79.5
- **Expo** ~53.0.22
- **TypeScript** ~5.8.3
- **Jotai** ^2.13.1 (상태 관리)
- **Expo Router** ~5.1.5 (네비게이션)

## 📱 지원 플랫폼

- iOS
- Android
- Web

## 🏗 프로젝트 구조

```
calendar-app/
├── app/                    # Expo Router 기반 앱 구조
│   ├── (tabs)/            # 탭 네비게이션
│   │   ├── index.tsx      # 홈 화면
│   │   ├── calendar-board.tsx  # 캘린더 화면
│   │   └── schedule-board.tsx  # 일정 목록 화면
│   ├── modal.tsx          # 일정 추가 모달
│   └── edit-modal.tsx     # 일정 편집 모달
├── components/            # 재사용 가능한 컴포넌트
│   ├── calendar/          # 캘린더 관련 컴포넌트
│   ├── schedule/          # 일정 관련 컴포넌트
│   └── common/            # 공통 컴포넌트
├── store/                 # Jotai 상태 관리
│   └── atoms.ts           # 전역 상태 정의
├── types/                 # TypeScript 타입 정의
│   └── ScheduleDate.ts    # 일정 데이터 타입
└── utils/                 # 유틸리티 함수
    └── date.ts            # 날짜 관련 함수
```

## 🚀 시작하기

### 사전 요구사항

- Node.js (18.x 이상)
- Expo CLI
- iOS Simulator 또는 Android Emulator (선택사항)

### 설치 및 실행

1. **의존성 설치**

   ```bash
   npm install
   ```

2. **개발 서버 시작**

   ```bash
   npm start
   ```

3. **플랫폼별 실행**

   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

## 📝 주요 컴포넌트

- **Calendar**: 월별 캘린더 그리드
- **ScheduleCard**: 개별 일정 카드
- **ScheduleList**: 일정 목록
- **FAB**: 플로팅 액션 버튼

## 🔧 개발 명령어

```bash
# 린트 검사
npm run lint

# 프로젝트 리셋
npm run reset-project
```

## 📄 라이선스

이 프로젝트는 개인 프로젝트입니다.
