
const {Players, Scores} = require ('../models/game.js');

const playGame = async function (req, res) {
    
    try {
        const player = await Players.findOne({
        where: { id: parseInt(req.params.id) },
        });
    
        // checks if player exists
        if(!player) return res.status(400).send({ status: "fail", message: "User not found"}); 
    
        //cast dice
        let dice1 = Math.floor(Math.random() * 6 + 1)
        let dice2 = Math.floor(Math.random() * 6 + 1)
        const result = dice1 + dice2;
        const hasWon = (result === 7)? 1 : 0;
            
        const score = {
            playerId: player.id,
            dice1,
            dice2,
            win: hasWon
        }   
            
        await Scores.create(score);
            res.status(200).send({
            status: "success",
            game: score
        });

    } catch (err) {
            res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
};


//getScores by player id
const getScores = async function (req, res) {
    
    try {

        const player = await Players.findOne({
            where: { id: parseInt(req.params.id) },
            });
        
            // checks if player exists
            if(!player) return res.status(400).send({ status: "fail", message: "User not found"}); 
       
            // Get all the rolls of this player
            let scores = await Scores.findAll({
                where: { playerId: player.id },
              });
        
            res.status(200).send({
            status: "success",
            message: scores
        });

    } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
};


//delete scores by player id



module.exports = {playGame, getScores};