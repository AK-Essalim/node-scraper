import express from 'express';
import cors from 'cors';
import { getHTML, getTwitterCount, getInstagramCount } from './lib/scraper';
import db from './lib/db';
import './lib/cron';
import { uniqueCount } from './lib/utils';

const app = express();
app.use(cors());

app.all('/api/*', function(req, res, next) {
  if (req.method.toLowerCase() !== 'options') {
    return next();
  }
  return res.send(204);
});

app.get('/', async (req, res, next) => {
  console.log('scraping...');

  const [iCount, tCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]);
  console.log(iCount, tCount);
  db.get('twitter')
    .push({
      date: Date.now(),
      count: tCount
    })
    .write();

  db.get('instagram')
    .push({
      date: Date.now(),
      count: iCount
    })
    .write();
  res.json({ iCount, tCount });
  console.log('done');
});

app.get('/Data', async (req, res) => {
  //Get the scrape data && Respond with JSON
  const { twitter, instagram } = db.value();
  //filter for unique values in Array
  console.log(req);
  const uniqueTwitter = uniqueCount(twitter);
  const uniqueInstagram = uniqueCount(instagram);
  res.json({ twitter: uniqueTwitter, instagram: uniqueInstagram });
});
const port = process.env.PORT || 2093;
const listener = app.listen(port, () =>
  console.log(`example app running on port  http://localhost:${port}`)
);
