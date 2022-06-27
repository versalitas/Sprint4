//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
//https://stackoverflow.com/questions/60198208/sequelize-js-finding-the-rank-of-a-row-based-on-a-column-value
//https://stackoverflow.com/questions/59928730/sequelize-js-how-to-get-average-aggregate-of-associated-model
//https://stackoverflow.com/questions/22627258/how-does-group-by-works-in-sequelize
//https://stackoverflow.com/questions/28206680/using-group-by-and-joins-in-sequelize

const {Players, Scores} = require ('../models/game.js');
const Sequelize = require('sequelize');


const findRanking = async () => {
    
    
        // calculates average score from Scores and add to Players
        let players = await Players.findAll({
                include: [{
                model: Scores,
                attributes: []
                }],
            attributes: ['id','username',[Sequelize.fn('AVG', Sequelize.col('win')), 'win', ]],
            group: 'id',
            
        });
       
        //average score all users
        let averageScore = await Scores.findAll({
            attributes:[[Sequelize.fn('AVG', Sequelize.col('win')), 'win', ]]
        })

        averageScore = (averageScore[0].win * 100);
        
        //filtering only players with wins
        let onlyWinners = (players.filter(p => p.dataValues.win));
        //sorted by desc order
        let orderedWinners = onlyWinners.sort((a,b) => (b.dataValues.win - a.dataValues.win));
        
        //modify win to percent
        orderedWinners = orderedWinners.map(obj => {
        obj.dataValues.win = Math.floor(obj.dataValues.win * 100)
        return obj});
            
       
        return {
            status: 'success',
            allplayersavg : averageScore,
            playerranking: orderedWinners
        }

}

module.exports = findRanking;