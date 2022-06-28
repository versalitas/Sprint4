const {Players, Scores} = require ('../models/game.js');

//execute game
const playGame = async function (req, res) {
    
    try {
        const reqId = req.params.id
        const player = await Players.findOne({
        where: { id: parseInt(reqId) },
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

        const reqId = parseInt(req.params.id)

        const player = await Players.findOne({
            where: { id: reqId },
            });
        
            // check if player exists
            if(!player) return res.status(400).send({ status: "fail", message: "User not found"}); 
       
            // Get the pertinent scores 
            let scores = await Scores.findAll({
                where: { playerId: player.id },
              });
        
            res.status(200).send({
            status: "success",
            scores
        });

    } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
};


//delete scores by player id
const deleteScores = async function (req, res) {
    
    try {
        const player = await Players.findOne({
            where: { id: parseInt(req.params.id) },
            });
        
            // check if player exists
            if(!player) return res.status(400).send({ status: "fail", message: "User not found"}); 
       
            // delete all scores
            await Scores.destroy({
                where: {playerId: player.id}});
        
            res.status(200).send({
            status: "success",
            data: {playerId: player.id,
                message: 'Scores successfully deleted.'
            }
        });

    } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
};



module.exports = {playGame, getScores, deleteScores};