import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function memoriesRoutes(app: FastifyInstance) {
  app.get("/memories", async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        resume: memory.content.substring(0, 115).concat("..."),
      };
    });
  });

  app.get("/memories/:id", async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(req.params);

    const memory = prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return memory;
  });

  app.post("/memories", async (req) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { content, coverUrl, isPublic } = bodySchema.parse(req.body);

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: "4b0a9bcc-cb55-490f-afd8-6fa87a197909",
      },
    });

    return memory;
  });

  app.delete("/memories/:id", async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(req.body);

    await prisma.memory.delete({
      where: {
        id,
      },
    });
  });

  app.put("/memories/:id", async (req) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(req.params);

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { content, coverUrl, isPublic } = bodySchema.parse(req.body);

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    });

    return memory;
  });
}
