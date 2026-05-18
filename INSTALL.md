# 설치 및 실행 가이드

## 사전 요구사항

- [Bun](https://bun.sh/) v1.0+
- [PostgreSQL](https://www.postgresql.org/) 15+

## 프로젝트 클론

```bash
git clone https://github.com/snakeblanket/kr.bainble.likelion-ideathon.git
cd kr.bainble.likelion-ideathon
```

## Backend 설정

```bash
cd backend
bun install
```

### 환경변수 설정

```bash
cp .env.example .env
```

`.env` 파일을 열고 PostgreSQL 연결 정보를 입력합니다:

```
DATABASE_URL="postgresql://user:password@localhost:5432/ideathon?schema=public"
```

### DB 마이그레이션

```bash
bun run db:migrate
```

### 서버 실행

```bash
bun dev
```

서버가 `http://localhost:3000`에서 실행됩니다.

## Frontend 설정

```bash
cd frontend
bun install
```

### 개발 서버 실행

```bash
bun dev
```

`http://localhost:5173`에서 확인할 수 있습니다.

## 프로젝트 구조

```
├── frontend/       React + Vite + Tailwind
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   └── public/
├── backend/        Elysia + Prisma + PostgreSQL
│   ├── src/
│   └── prisma/
├── .gitignore
├── README.md
└── INSTALL.md
```

## API 엔드포인트

| Method | Path | 설명 |
|--------|------|------|
| POST | `/users` | 사용자 생성 |
| POST | `/questions` | 질문 생성 |
| GET | `/questions` | 질문 목록 |
| POST | `/answers` | 답변 저장 |
| GET | `/answers/last?count=N` | 마지막 N개 답변 |
| GET | `/answers/recent` | 최근 10개 |
| GET | `/answers/monthly` | 최근 1개월치 |
| GET | `/answers/user/:userId` | 사용자별 답변 |
