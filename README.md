# node-scraper
3 types of scraper to scrape the amount of instagram and twitter followers I have
Based on on a tutorial by Wes Bos.
1st type will manually scrape Twitter and Instagram when the program is run.
2nd is an API which will save the amount of followers to an LowDB database base the API endpoint is accessed.
The 3rd version included a CronJob scheduler that will also run automatically few times an hour even if the API is not accessed.

Currently the Twitter and Instagram username is hardcoded into the program, I will extend the program in future to allow users to specify the username themself.
