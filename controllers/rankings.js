//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
//https://stackoverflow.com/questions/60198208/sequelize-js-finding-the-rank-of-a-row-based-on-a-column-value

const {Players, Scores} = require ('../models/game.js');
const Sequelize = require('sequelize');

const getRanking = async() =>{
    let players = await Players.findAll({
        include: [{
            model: Scores,
            required: false
        }],
        attributes: ['id','username',[Sequelize.fn('AVG', Sequelize.col('win')), 'win', ]],
        group: 'id'

        




});


}