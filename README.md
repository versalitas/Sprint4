# REST API DICE GAME
Instructions:
Install node modules.

```
npm install

```
Convert .env.example to .env and adapt variables to pertinent environment.

Run server with

```
npm start
```

or in developper mode

```
npm run dev
```

TASK: 
Game with two dice. 

If the sum of the roll adds up to 7 = win.


### ENDPOINTS

POST /players-- add player with unique name or 'anonymous' as default, sequelize adds id and register date.
 
PUT /players/:id updates a players name

GET/players return list of all Players with winPercentage

POST /games/:id player(id) cast the dice

DELETE /games/:id delete all scores of player

GET /games/:id list of all rounds of player (id)

GET /scores: player ranking according to winPercentage, and winMedium
getPlayers: playerName, winPercentage, winMedian

GET /scores/loser: return Player with less winPercentage

GET /scores/winner: return Player with best winPercentage






