const Players = require('../models/player.js');
const Sequelize = require('sequelize');


const addPlayer = async (req,res) => {
    
    try {
        const userName = req.body.username.toLowerCase();
        let player = '';
    
        if(userName) {
            const duplicateName = (Players.findOne({where: {name: userName}}));
            
            if(duplicateName){
                  return res.status(400).send({status: 'fail', message: 'Duplicate data'})
                }

            player = await Players.create({ name: userName });
        
        } else {
            player = await Players.create();
        }

        res.status(200).send({status: 'success', message: 'Player has been created correctly.'})

        } catch (err) {
        res.status(500).send({
            status: 'error',
            message: err.message
        })
    }
}

/*
const updatePlayer = (req,res) => {
    const playerName = req.body.name;
    const newName = req.body.newname;
    
    if(!playerName || !newname){
        res.status(404).send({error :'fail', message : 'No name introduced'})
    }
    const player = await Player.findOne({ where: { name: playername } });
    if (player === null) {
        res.status(404).send({error :'fail', message : 'Not Found'})
    } else {
      player.name = newName;
      res.status(200).send({error :'success', message : 'Name has been updated.'})

    }
    
}

const showPlayer = (req,res) => {


}


module.exports = {addPlayer, updatePlayer, showPlayer};*/
module.exports = addPlayer;