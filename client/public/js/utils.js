//sort Limb to top and order buttonlist
const sortBtnList = (btn) => {
    let buttonList = document.getElementById(btn);
    let buttonArray = Array.from(buttonList.getElementsByTagName("BUTTON"))
    let limbo = buttonArray.shift(); 
    buttonList.append(limbo);
    buttonArray.sort((a, b) => {
            return a.textContent.localeCompare(b.textContent)
        })
        .forEach(li => buttonList.append(li));
}

 //add to css 
// sort users so User is always on top

const sortUserList = (ul) => {
    let userList = document.getElementById(ul);
    let userListArray = Array.from(list.getElementsByTagName("LI"));
    let userName = userListArray.shift();
    userListArray.sort((a, b) => {
            return a.textContent.localeCompare(b.textContent)
        })
        .forEach(li => userList.appendChild(li));
    }