import axios from "axios";
import cheerio from "cheerio";
import db from "./db";
export async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

export async function getTwitterFollowers(html) {
  //load up cheerio
  const $ = cheerio.load(html);
  const span = $('[data-nav="followers"] .ProfileNav-value');
  return parseInt(span.data("count"));
}

export async function getInstagramFollowers(html) {
  const $ = cheerio.load(html);
  const dataInString = $('script[type="application/ld+json"]').html();
  const pageObject = JSON.parse(dataInString);
  const instaCount = parseInt(
    pageObject.mainEntityofPage.interactionStatistic.userInteractionCount
  );

  return instaCount;
}
export async function getInstagramCount() {
  const instaHTML = await getHTML("https://www.instagram.com/narultra/");
  const instaCount = await getInstagramFollowers(instaHTML);
  return instaCount;
}

export async function getTwitterCount() {
  const twHTML = await getHTML("https://twitter.com/AK_Essalim");
  const twCount = await getTwitterFollowers(twHTML);
  return twCount;
}
