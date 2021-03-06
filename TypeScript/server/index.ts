import express from "express";
// rest of the code remains same
const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
