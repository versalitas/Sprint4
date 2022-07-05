const {Players, Scores} = require ('../models/game.js');
const Sequelize = require('sequelize');

//add player
const addPlayer = async (req, res) => {

    try {
        let userName = req.body.username;
        let player = '';

        if (userName) {

            const isRegistered = await Players.findOne({
                where:{ username: userName },
            });

            if(isRegistered){
                return res.status(400).send({ 
                    //status: "fail", 
                    message: "Username is not unique"}); 
            }

            player = await Players.create({ username: userName})

        } else {
            
            player = await Players.create();
        }
            
            res.status(200).send({
                //status: "success",
                message: "User has succesfully been created.",
                data: {
                    id: player.id,
                    username: player.username,
                }
            });
            
     } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
}
 

//update name
const updatePlayer = async (req,res) => {

    try {

        const userId = req.params.id;
        
        const userName = req.body.username;

        //search for user
        const player = await Players.findOne({ where: {id : userId}});
        
        //if id correspond to registered user
        if (!player) {
            return res.status(400).send({
                //status: 'fail', 
                message: 'Bad request: id not valid.'})
        }
        //if req.body contains new userName 
        if(!userName){
            return res.status(400).send({
                //status: 'fail', 
                message: 'Bad request: username not defined.'})
        }
        //if new userName is unique
        const isUnique = await Players.findOne({where: {username: userName}});

        if(isUnique){
            return res.status(400).send({
                //status: 'fail', 
                message: 'Bad request: username is not unique.'})
        }
        
       //update property
       await Players.update(
        { username: userName},
        { where: { id: userId } }
    );

        res.status(200).send({status: 'success', message: "Username has been updated correctly."})

    } catch(err) {
            res.status(500).send({
                status: 'error',
                message: err.message
            })
    }
}

 //get all players
const getPlayers = async(req, res) => {
    try {
        //get players with win percentage
        let players = await Players.findAll({
            include: [{
            model: Scores,
            attributes: []
            }],
        attributes: ['id','username',[Sequelize.fn('AVG', Sequelize.col('win')), 'win', ]],
        group: 'id',
        
        });
        //multiply rate by 100
        players = players.map(obj => {
            obj.dataValues.win = Math.floor(obj.dataValues.win * 100)
            return obj});

      if(players === []){
        res.status(200).send({
            
            message: 'No players registered.'})

      }      
     
     res.status(200).send({
         //status: 'success', 
         message: players})

     } catch(err) {
         res.status(500).send({
             status: 'error',
             message: err.message
         })
     }
}    
    

module.exports = {addPlayer, updatePlayer, getPlayers};



