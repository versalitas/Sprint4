const {Rooms} = require('../models/models.js');

//initiate Limbo - room 0

const initLimbo = async () => {
    const roomExist = await Rooms.findOne({ roomName:'Limbo' });
    
    if(!roomExist) {
        room = await Rooms.create({ roomName:'Limbo' });
    }
}    


//create room 
const createRoom = async(roomName) => {

    let result;

    try {
        // checks if room exists
        const roomExist = await Rooms.findOne({ roomName });

        if(roomExist) {
            result =  {status:'fail', message:'room already created'};
        } else {
            const room = await Rooms.create({ roomName })
            result = {status: 'success', room: {roomId: room._id, roomName: room.roomName}}
        }
    } catch (err) {
        result =  {status:'error', message: err.message};
    }

    return result;
}
//retrieve all rooms
const getRooms = async() => {

    let result;

    try {

        let rooms = await Rooms.find({});

        rooms = rooms.map(({_id, roomName})=> { 
            return {roomId:_id, roomName};
          });

        result = {status: 'success', rooms};

    } catch (err) {
        result =  {status:'error', message: err.message};
    }

    return result;
}

module.exports = {initLimbo, createRoom, getRooms}