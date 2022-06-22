const {Players} = require ('../models/game');
const Sequelize = require('sequelize')
  
 
const addPlayer = async (req, res) => {

    try {
        let userName = req.body.username;
        let player = '';

        if (userName) {

            const isRegistered = await Players.findOne({
                where:{ username: userName },
            });

            if(isRegistered){
                return res.status(400).send({ status: "fail", message: "Username is not unique"}); 
            }

            player = await Players.create({ username: userName})

        } else {
            
            player = await Players.create();
        }
            
            res.status(200).send({
                status: "success",
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
 


const updatePlayer = async (req,res) => {
    

   try {
        
        const userId = parseInt(req.params.id);
        const userName = req.body.username;

        //search for user
        const player = await Players.findOne({ where: {id : userId}});
        
        //if id correspond to registered user
        if (!player) {
            return res.status(400).send({status: 'fail', message: 'Bad request: id not valid.'})
        }
        //if req.body contains new userName 
        if(!userName){
            return res.status(400).send({status: 'fail', message: 'Bad request: username not defined.'})
        }
        //if new userName is unique
        const isUnique = await Players.findOne({where: {username: userName}});

        if(!isUnique){
            return res.status(400).send({status: 'fail', message: 'Bad request: username is not unique.'})
        }
        
       //update property
        player.name = userName;
        await player.save();

       res.status(200).send({status: 'success', message: "Username has been updated correctly."})

    } catch(err) {
            res.status(500).send({
                status: 'error',
                message: err.message
            })
    }

   /*
    const getPlayers = async(req, res) => {
       try {

        let players = await Players.findAll();
        let playersInfo = players.map(player => {}




        } catch(err) {
            res.status(500).send({
                status: 'error',
                message: err.message
            })
    }

*/

    

module.exports = {addPlayer, updatePlayer, getPlayers};

module.exports = addPlayer; */