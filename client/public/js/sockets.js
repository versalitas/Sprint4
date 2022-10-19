const socket = io('http://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: {
        'token': sessionStorage.accessToken
    }
});

let socketConnected = false;

socket.on('connect', () => {

     //display new message in chat
    socket.on('new-message', message => {
        // console.log("new-message", message);
        displayMessage(message);
    })
    //emit join message to chat
    socket.on('new-join-message', message => {
        // console.log("new-join-message", message);
        displayJoinMessage(message);
    })
    
    //new room created, updating user list
    socket.on('new-room', (room, users) => {
        // console.log('new-room room', room);
        // console.log('new-room users', users);
        displayRoom(room);
        displayRoomUsers(room, users);
    })

    socket.on('update-room-users', (room, users) => {
        
        // Display updated list
        if (sessionStorage.roomId === room.roomId) {
            displayUsers(users)
        }
        displayRoomUsers(room, users);
    })
  
    //disconnect user
    socket.on('disconnect', () => {
      
    });

    // Delete room list
    document.getElementById("roomList").innerHTML = '';

    // Retrieve room list 
    socket.emit('get-rooms');
})