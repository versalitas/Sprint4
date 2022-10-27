const {joinRoom} = require('../controllers/users.js');


module.exports = async(socket, user) => {
       let room = 
       let joinedRoom = joinRoom(user, room);
       console.log(room);
        // join new room
        socket.join(room.roomId);
                
        // inform new room of joined user
        socket.broadcast.to(room.roomId).emit('new-join-message', `${joinedRoom.user.userName} joined the room`);

        // get the current #users
        let currentUsers = await getUsers(room);

        // update current room's #users
        io.emit('update-room-users',room, currentUsers.users);

        // retrieve messages from the new room
        let currentMessages = await getMessages(room);
     
        //iterate through current room's messages if any
        if ((currentMessages.status === 'success') && (currentMessages.messages !== null)) {
            currentMessages.messages.forEach (message => io.to(socket.id).emit('new-message', message))
        } else {
            io.to(socket.id).emit('error', currentMessages.message)
        }
   }
