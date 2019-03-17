import express from "express";
import { getHTML, getTwitterCount, getInstagramCount } from "./lib/scraper";
import db from "./lib/db";

const app = express();

app.get("/scrape", async (req, res, next) => {
  console.log("scraping...");

  const [iCount, tCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]);
  console.log(iCount, tCount);
  db.get("twitter")
    .push({
      date: Date.now(),
      count: tCount
    })
    .write();

  db.get("instagram")
    .push({
      date: Date.now(),
      count: iCount
    })
    .write();
  res.json({ iCount, tCount });
  console.log("done");
});

const listener = app.listen(2093, () =>
  console.log(`example app running on port ${listener.address().port}`)
);
