let wrapper = document.createElement("div");
document.body.append(wrapper);
let lang = 0;

let title = document.createElement("div");
wrapper.prepend(title);
title.innerHTML = "RSS Виртуальная клавиатура";
title.style.textAlign = "center";
title.style.fontSize = "40px";
title.style.color = "#3b5470";
title.style.margin = "10px 0";

let wrapperArea = document.createElement("div");
wrapper.append(wrapperArea);
wrapperArea.style.display = "flex";
wrapperArea.style.justifyContent = "center";
wrapperArea.style.marginBottom = "10px";

let textarea = document.createElement("textarea");
wrapperArea.append(textarea);
textarea.style.width = "700px";
textarea.style.height = "200px";
textarea.style.fontSize = "30px";

let keyboard = document.createElement("div");
wrapper.append(keyboard);
keyboard.style.backgroundColor = "#544848";
keyboard.style.padding = "5px";
keyboard.style.border = "3px solid #222222";
keyboard.style.width = "704px";
keyboard.style.margin = "0 auto";
keyboard.style.fontFamily = "Tahoma";

function createStandartKey(value, id) {
    let key = document.createElement("div");
    key.style.backgroundColor = "#29282b";
    key.style.width = "40px";
    key.style.height = "40px";
    key.style.display = "flex";
    key.style.justifyContent = "center";
    key.style.alignItems = "center";
    key.innerHTML = value;
    key.style.color = "white";
    key.style.borderRadius = "5px";
    key.style.cursor = "pointer";
    key.classList.add("key");
    key.style.transition = "background-color", "0.5s";
    key.style.userSelect = "none";
    key.id = id;
    return key;
}

let row_1 = document.createElement("div");
keyboard.append(row_1);
row_1.style.display = "flex";
row_1.style.justifyContent = "space-between";
row_1.style.marginBottom = "8px";

const ROW_1_ARR = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backscape"];
const ROW_1_ARR_CHAR = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8];

for (let i = 0; i < 14; i++) {
    row_1.append(createStandartKey(ROW_1_ARR[i], ROW_1_ARR_CHAR[i]));
}

row_1.lastElementChild.style.width = "100px";
row_1.lastElementChild.style.backgroundColor = "black";
row_1.lastElementChild.classList.add("black");

let row_2 = document.createElement("div");
keyboard.append(row_2);
row_2.style.display = "flex";
row_2.style.justifyContent = "space-between";
row_2.style.marginBottom = "8px";


const ROW_2_ARR = ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\/" , "Del"];
const ROW_2_ARR_CHAR = [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46];
const ROW_2_ARR_RUS = ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\/" , "Del"];

if (lang == 1) {
for (let i = 0; i < 15; i++) {
    row_2.append(createStandartKey(ROW_2_ARR_RUS[i], ROW_2_ARR_CHAR[i]));
}
}
else for (let i = 0; i < 15; i++) {
    row_2.append(createStandartKey(ROW_2_ARR[i], ROW_2_ARR_CHAR[i]));
}


row_2.firstElementChild.style.width = "50px";
row_2.firstElementChild.style.backgroundColor = "black";
row_2.lastElementChild.style.backgroundColor = "black";
row_2.lastElementChild.style.width = "44px";
row_2.firstElementChild.classList.add("black");
row_2.lastElementChild.classList.add("black");


let row_3 = document.createElement("div");
keyboard.append(row_3);
row_3.style.display = "flex";
row_3.style.justifyContent = "space-between";
row_3.style.marginBottom = "8px";

const ROW_3_ARR = ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"];
const ROW_3_ARR_CHAR = [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13];
const ROW_3_ARR_RUS = ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"];

if (lang == 1) {
for (let i = 0; i < 13; i++) {
    row_3.append(createStandartKey(ROW_3_ARR_RUS[i], ROW_3_ARR_CHAR[i]));
}
}
else for (let i = 0; i < 13; i++) {
    row_3.append(createStandartKey(ROW_3_ARR[i], ROW_3_ARR_CHAR[i]));
}

row_3.firstElementChild.style.width = "100px";
row_3.firstElementChild.style.backgroundColor = "black";
row_3.lastElementChild.style.backgroundColor = "black";
row_3.lastElementChild.style.width = "86px";
row_3.firstElementChild.classList.add("black");
row_3.lastElementChild.classList.add("black");

let row_4 = document.createElement("div");
keyboard.append(row_4);
row_4.style.display = "flex";
row_4.style.justifyContent = "space-between";
row_4.style.marginBottom = "8px";

const ROW_4_ARR = ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"];
const ROW_4_ARR_CHAR = [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, "ShiftRight"];
const ROW_4_ARR_RUS = ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/", "▲", "Shift"];

if (lang == 1) {
for (let i = 0; i < 13; i++) {
    row_4.append(createStandartKey(ROW_4_ARR_RUS[i],ROW_4_ARR_CHAR[i]));
}
}
else for (let i = 0; i < 13; i++) {
    row_4.append(createStandartKey(ROW_4_ARR[i],ROW_4_ARR_CHAR[i]));
}

row_4.firstElementChild.style.width = "100px";
row_4.firstElementChild.style.backgroundColor = "black";
row_4.lastElementChild.style.backgroundColor = "black";
row_4.lastElementChild.previousElementSibling.style.backgroundColor = "black";
row_4.lastElementChild.previousElementSibling.classList.add("black");
row_4.firstElementChild.style.backgroundColor = "black";
row_4.lastElementChild.classList.add("black");
row_4.firstElementChild.classList.add("black");
row_4.lastElementChild.style.width = "86px";

let row_5 = document.createElement("div");
keyboard.append(row_5);
row_5.style.display = "flex";
row_5.style.justifyContent = "space-between";

const ROW_5_ARR = ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"];
const ROW_5_ARR_CHAR = [17, 91, 18, 32, "AltRight", 37, 40, 39, "v"]

for (let i = 0; i < 9; i++) {
    row_5.append(createStandartKey(ROW_5_ARR[i],ROW_5_ARR_CHAR[i]));
}

row_5.children[3].style.width = "330px";

for (let i = 0; i < 3; i++) {
    row_5.children[i].style.backgroundColor = "black";
    row_5.children[i].classList.add("black");
}

for (let i = 4; i < 9; i++) {
    row_5.children[i].style.backgroundColor = "black";
    row_5.children[i].classList.add("black");
}

keyboard.onmouseover = function(event) {
    if (event.target.classList.contains("key")) {
        event.target.style.backgroundColor = "#354a21";
    }
}

keyboard.onmouseout = function(event) {
    if (event.target.classList.contains("black")) {
        event.target.style.backgroundColor = "black";
        event.target.style.borderRadius = "5px";
    }
    else if (event.target.classList.contains("key")) {
        event.target.style.backgroundColor = "#29282b";
        event.target.style.borderRadius = "5px";
    }
}

keyboard.onmousedown = function(event) {
    if(event.target.classList.contains("key")) {
        let value = event.target.innerHTML;
        console.log(value);
        if (event.target.innerHTML === "Backscape") {
            textarea.value = textarea.value.slice(0, textarea.value.length - 1);
        }
        else textarea.value = textarea.value + value;
        event.target.style.backgroundColor = "#1d8220";
        event.target.style.borderRadius = "50%";
    }
}

keyboard.onmouseup = function(event) {
    if (event.target.classList.contains("black")) {
        event.target.style.backgroundColor = "black";
        event.target.style.borderRadius = "5px";
    }
    else if(event.target.classList.contains("key")) {
        event.target.style.backgroundColor = "#354a21";
        event.target.style.borderRadius = "5px";
    }
}


let keyActive;
document.onkeydown = function(event) {
    event.preventDefault();
    keyActive = document.getElementById(event.keyCode);
    let value = keyActive.innerHTML;
    if(event.keyCode === 18 && lang == 0) {
        row_2.innerHTML = "";
        row_3.innerHTML = "";
        row_4.innerHTML = ""
        for (let i = 0; i < 15; i++) {
            row_2.append(createStandartKey(ROW_2_ARR_RUS[i], ROW_2_ARR_CHAR[i]));
        }
        row_2.firstElementChild.style.width = "50px";
        row_2.firstElementChild.style.backgroundColor = "black";
        row_2.lastElementChild.style.backgroundColor = "black";
        row_2.lastElementChild.style.width = "44px";
        row_2.firstElementChild.classList.add("black");
        row_2.lastElementChild.classList.add("black");
        for (let i = 0; i < 13; i++) {
            row_3.append(createStandartKey(ROW_3_ARR_RUS[i], ROW_3_ARR_CHAR[i]));
        }
        
        row_3.firstElementChild.style.width = "100px";
        row_3.firstElementChild.style.backgroundColor = "black";
        row_3.lastElementChild.style.backgroundColor = "black";
        row_3.lastElementChild.style.width = "86px";
        row_3.firstElementChild.classList.add("black");
        row_3.lastElementChild.classList.add("black");
        for (let i = 0; i < 13; i++) {
            row_4.append(createStandartKey(ROW_4_ARR_RUS[i],ROW_4_ARR_CHAR[i]));
        }
        
        row_4.firstElementChild.style.width = "100px";
        row_4.firstElementChild.style.backgroundColor = "black";
        row_4.lastElementChild.style.backgroundColor = "black";
        row_4.lastElementChild.previousElementSibling.style.backgroundColor = "black";
        row_4.lastElementChild.previousElementSibling.classList.add("black");
        row_4.firstElementChild.style.backgroundColor = "black";
        row_4.lastElementChild.classList.add("black");
        row_4.firstElementChild.classList.add("black");
        row_4.lastElementChild.style.width = "86px";

        lang = 1;
        }
        else if(event.keyCode === 18 && lang == 1) {
        row_2.innerHTML = "";
        row_3.innerHTML = "";
        row_4.innerHTML = ""
        for (let i = 0; i < 15; i++) {
            row_2.append(createStandartKey(ROW_2_ARR[i], ROW_2_ARR_CHAR[i]));
        }
        row_2.firstElementChild.style.width = "50px";
        row_2.firstElementChild.style.backgroundColor = "black";
        row_2.lastElementChild.style.backgroundColor = "black";
        row_2.lastElementChild.style.width = "44px";
        row_2.firstElementChild.classList.add("black");
        row_2.lastElementChild.classList.add("black");
        for (let i = 0; i < 13; i++) {
            row_3.append(createStandartKey(ROW_3_ARR[i], ROW_3_ARR_CHAR[i]));
        }
        
        row_3.firstElementChild.style.width = "100px";
        row_3.firstElementChild.style.backgroundColor = "black";
        row_3.lastElementChild.style.backgroundColor = "black";
        row_3.lastElementChild.style.width = "86px";
        row_3.firstElementChild.classList.add("black");
        row_3.lastElementChild.classList.add("black");
        for (let i = 0; i < 13; i++) {
            row_4.append(createStandartKey(ROW_4_ARR[i],ROW_4_ARR_CHAR[i]));
        }
        
        row_4.firstElementChild.style.width = "100px";
        row_4.firstElementChild.style.backgroundColor = "black";
        row_4.lastElementChild.style.backgroundColor = "black";
        row_4.lastElementChild.previousElementSibling.style.backgroundColor = "black";
        row_4.lastElementChild.previousElementSibling.classList.add("black");
        row_4.firstElementChild.style.backgroundColor = "black";
        row_4.lastElementChild.classList.add("black");
        row_4.firstElementChild.classList.add("black");
        row_4.lastElementChild.style.width = "86px";
        lang = 0;
    }

    if (event.code === "ShiftRight") {
        keyActive = document.getElementById("ShiftRight");
    }
    if (event.code === "ControlRight") {
        keyActive = document.getElementById("ControlRight");
    }
    if (event.code === "AltRight") {
        keyActive = document.getElementById("AltRight");
    }
    if (value === "Backscape") {
        textarea.value = textarea.value.slice(0, textarea.value.length - 1);
    }
    else if(event.keyCode !== 18 && event.keyCode !== 17
        && event.keyCode !== 91 && event.keyCode !== 16
        && event.keyCode !== 20 && event.keyCode !== 13
        && event.keyCode !== 46 && event.keyCode !== 9) textarea.value = textarea.value + value;
    keyActive.style.backgroundColor = "#1d8220";
    keyActive.style.borderRadius = "50%";
};

document.onkeyup = function(event) {
    event.preventDefault();
    if (keyActive.classList.contains("black")) {
        keyActive.style.backgroundColor = "black";
        keyActive.style.borderRadius = "5px";
    }
    else if(keyActive.classList.contains("key")) {
        keyActive.style.backgroundColor = "#29282b";
        keyActive.style.borderRadius = "5px";
    }
};

let subTitle = document.createElement('div');
subTitle.innerHTML = "Для смены языка нажмите Alt";
subTitle.style.marginTop = "15px";
subTitle.style.textAlign = "center";
subTitle.style.fontSize = "25px";
subTitle.style.color = "#8B4513";
document.body.append(subTitle);



























