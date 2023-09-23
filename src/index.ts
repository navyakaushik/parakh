import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req: Request, res: Response) => {
  console.log(req.baseUrl);
  res.json({ message: "Hello World!!" });
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
