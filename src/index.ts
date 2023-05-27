import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/api/quotes", async (_: Request, res: Response) => {
  try {
    const allUsers = await prisma.quote.findMany({});
    res.send(allUsers);
    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
});

app.post("/api/quotes/new", async (req: Request, res: Response) => {
  try {
    const newQuoteRequest = req.body;
    console.log(newQuoteRequest);
    const newQuoteResponse = await prisma.quote.create({
      data: newQuoteRequest,
    });
    res.send(newQuoteResponse);
    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Quoth API hath begun listening on port 3000...");
});
