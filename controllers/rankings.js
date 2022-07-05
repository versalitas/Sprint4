
//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
//https://stackoverflow.com/questions/60198208/sequelize-js-finding-the-rank-of-a-row-based-on-a-column-value
//https://stackoverflow.com/questions/59928730/sequelize-js-how-to-get-average-aggregate-of-associated-model
//https://stackoverflow.com/questions/22627258/how-does-group-by-works-in-sequelize
//https://stackoverflow.com/questions/28206680/using-group-by-and-joins-in-sequelize

const findRanking = require('../utils/findRankings.js');


const getRanking =  async (req, res) => {
    try {
        let ranking = await findRanking();

        res.status(200).send({
            status: "success",
            ranking
        });

    } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
}

const getWinner = async (req, res) => {
    try {
        
        let ranking = await findRanking();
        
        //winner postition 0 of array
        let winner = ranking.playerranking[0];
        if (!winner){winner = 'No winner yet'};
        
        res.status(200).send({
            //status: "success",
            winner
        });
        
    } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
}

const getLoser = async (req, res) => {
    try {
        
        let ranking = await findRanking();

        //last postiton of ranking
        let loser = ranking.playerranking[ranking.playerranking.length -1];
        if (!loser){loser = 'No winners nor losers yet!'};
        
        res.status(200).send({
            //status: "success",
            loser
        });
        

    } catch (err) {
        res.status(500).send({
            //status: 'error',
            message: err.message
        })
    }
}

     
module.exports = {getRanking, getWinner, getLoser};
  
  





