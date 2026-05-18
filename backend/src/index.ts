import { Elysia, t } from "elysia";
import cors from "@elysiajs/cors";
import { prisma } from "./db";

const app = new Elysia()
  .use(cors())

  // ─── Questions ───────────────────────────────────────

  // 질문 생성
  .post(
    "/questions",
    async ({ body }) => {
      return prisma.question.create({
        data: { content: body.content },
      });
    },
    {
      body: t.Object({
        content: t.String({ minLength: 1 }),
      }),
    }
  )

  // 질문 목록 조회
  .get("/questions", async () => {
    return prisma.question.findMany({
      orderBy: { createdAt: "desc" },
    });
  })

  // ─── Answers ─────────────────────────────────────────

  // 답변 저장
  .post(
    "/answers",
    async ({ body }) => {
      return prisma.answer.create({
        data: {
          content: body.content,
          userId: body.userId,
          questionId: body.questionId,
        },
        include: {
          question: true,
        },
      });
    },
    {
      body: t.Object({
        content: t.String({ minLength: 1 }),
        userId: t.String({ format: "uuid" }),
        questionId: t.String({ format: "uuid" }),
      }),
    }
  )

  // 마지막 N개 답변 (기본 1개)
  .get(
    "/answers/last",
    async ({ query }) => {
      const count = query.count ? Number(query.count) : 1;
      return prisma.answer.findMany({
        orderBy: { createdAt: "desc" },
        take: count,
        include: { question: true },
      });
    },
    {
      query: t.Object({
        count: t.Optional(t.String()),
      }),
    }
  )

  // 최근 10개
  .get("/answers/recent", async () => {
    return prisma.answer.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      include: { question: true },
    });
  })

  // 최근 1개월치
  .get("/answers/monthly", async () => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    return prisma.answer.findMany({
      where: { createdAt: { gte: oneMonthAgo } },
      orderBy: { createdAt: "desc" },
      include: { question: true },
    });
  })

  // 특정 사용자의 답변 목록
  .get(
    "/answers/user/:userId",
    async ({ params }) => {
      return prisma.answer.findMany({
        where: { userId: params.userId },
        orderBy: { createdAt: "desc" },
        include: { question: true },
      });
    }
  )

  // ─── Users ───────────────────────────────────────────

  // 사용자 생성 (UUID 자동 발급)
  .post("/users", async () => {
    return prisma.user.create({ data: {} });
  })

  .listen(3000);

console.log(`🦊 Backend running at http://localhost:${app.server?.port}`);
