//sort Hall to top and order buttonlist
const sortBtnList = (btn) => {
    let buttonList = document.getElementById(btn);
    let buttonArray = Array.from(buttonList.getElementsByTagName("BUTTON"))
    let hall = buttonArray.shift(); 
    buttonList.append(hall);
    buttonArray.sort((a, b) => {
            return a.textContent.localeCompare(b.textContent)
        })
        .forEach(li => buttonList.append(li));
}


//show users when @media min width
function showUsers() {

    let user = document.getElementById('user');
    user.classList.toggle('responsive');

    let room = document.getElementById('room');
    room.classList.toggle('d-none');

    let chat = document.getElementById('chat');
    chat.classList.toggle('d-none');
    
    if (user.classList.contains('responsive')){
        let userList = document.getElementById('userList');
        userList.addEventListener('click', e => {
            e.preventDefault();
            user.classList.remove('responsive');
            room.classList.remove('d-none');
            chat.classList.remove('d-none');

        });
    }
}

function showRooms() {
    
    let room = document.getElementById('room');
    room.classList.toggle('responsive');

    let user = document.getElementById('user');
    user.classList.toggle('d-none');

    let chat = document.getElementById('chat');
    chat.classList.toggle('d-none');

    if (room.classList.contains('responsive')){
        let roomList = document.getElementById('roomList');
        roomList.addEventListener('click', e => {
            e.preventDefault();
            room.classList.remove('responsive');
            user.classList.remove('d-none');
            chat.classList.remove('d-none');

        });
    }
}

