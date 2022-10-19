const createRoom = () => {
    const newRoomName = document.getElementById("roomForm").newRoom.value;

    if (newRoomName) {
      socket.emit('new-room', newRoomName)
      document.getElementById("roomForm").newRoom.value = '';
     }
    return false;
 }

const joinRoom = (room) => {
    
    // Check if room other than current
    if (sessionStorage.roomId === room.roomId) return;

     // emit to server 'join-room' event
    socket.emit('join-room', room);

    // Update variables
    sessionStorage.roomName = room.roomName;
    sessionStorage.roomId = room.roomId;

    // Change room name
    document.getElementById("roomName").innerHTML = `${room.roomName}`;

   //clear messages from former room
    document.getElementById("messageList").innerHTML = "";
   
    //clear forms
    document.getElementById("roomForm").newRoom.value = "";
    document.getElementById("messageForm").newMessage.value = "";
    document.getElementById("newMessage").focus();
}

const displayRoom = (room) => {
    //create new element for room list of buttons
    const btn = document.createElement('button');
    
    //check if room is default and join
    if (room.roomName === 'Limbo') {
        btn.classList.add('room-btn-active');
        joinRoom(room);
    }   
    
    //set values to text and id
    btn.textContent = room.roomName;
    btn.setAttribute('id', room.roomId);
    btn.classList.add('room-btn');
    btn.onclick = () => {
        
        //remove current active button
        if (sessionStorage.roomId) {
            document.getElementById(sessionStorage.roomId).classList.remove('room-btn-active')
        }
        //update as active the chosen/new room 
        btn.classList.add('room-btn-active');
        //and join...
        joinRoom(room);
    }

    //snippet for handling responsive buttons
    let roomItem = document.getElementById('room');
    if (roomItem.classList.contains('responsive')) {

        roomItem.classList.remove('responsive');
        
        //display user
        let user = document.getElementById('user');
        user.classList.remove('d-none');
        
        //display room
        let chat = document.getElementById('chat');
        chat.classList.remove('d-none');
     }
   
    //retrieve roomlist and append the new room button
    const rooms = document.getElementById("roomList");
    rooms.append(btn);
    //sort list alphabetically with default "Limbo" on top
    sortBtnList("roomList");
}


const displayRoomUsers = (room, users) => {
    document.getElementById(room.roomId).textContent = `${room.roomName} (${users.length})`
}





        l