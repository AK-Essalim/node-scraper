import cron from "node-cron";
import { runCron } from "./scraper";

cron.schedule("20,40,55 * * * *", () => {
  console.log("running the CRON...");
  runCron();
});
