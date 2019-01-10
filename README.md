# Chuck-Norris-Jokes
This ReacJS app feeds a viewport with random Chuck Norris jokes. To get more jokes you have to scroll down.

When you click on a joke you will be redirected to a page with the specific joke. If you press the button "back" you come back to the viewport, so you can get more Chuck Norris jokes!


## Express
This project use express as backend and it's connected by a proxy with the app. ReactJS app is on port 3000 and express is on 3001. 

## Categories filter

To filter by a category yo have to select one of them and you will see just the jokes which belong to that category. If you want to see all jokes just change category filter to '--Select--'.

## Top jokes
If you access to the top clicking "Top jokes" on navbar you will get top 5 jokes. 

It is possible to access using the url:
 http://localhost:3000/topjokes/N


## To run this project

On root folder:
```
> npm start
```

On /client folder:
```
> npm start
```

Open the browser and go to localhost:3000
