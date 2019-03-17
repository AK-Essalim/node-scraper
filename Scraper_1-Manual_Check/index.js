import express from "express";
import { getHTML, getTwitterCount, getInstagramCount } from "./lib/scraper";

async function go() {
  const tPromise = await getHTML("https://twitter.com/AK_Essalim");
  const iPromise = await getHTML("https://www.instagram.com/narultra/");
  const [html, instaHtml] = await Promise.all([tPromise, iPromise]);
  const twCount = await getTwitterFollowers(html);
  const instaCount = await getInstagramFollowers(instaHtml);
  console.log(
    `You have ${twCount} Twitter follower(s) and ${instaCount} Instagram follower(s)`
  );
}
go();
