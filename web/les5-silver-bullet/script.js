const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}

let current_index = 0;

let lokaties = 
[
    {
        "titel":"Ingang",
        "image":"img/0.jpg",
        "directions":{
            "zuid": 1,
        }
    },
    {
        "titel":"Gang",
        "image":"img/1.jpg",
        "directions":{
            "west": 2,
            "oost": 5,
            "zuid": 4,
            "noord": 0
        }

    },
    {
        "titel":"Gang",
        "image":"img/2.jpg",
        "directions":{
            "zuid": 3,
            "oost": 1
        }

    },
    {
        "titel":"C0.95",
        "image":"img/3.jpg",
        "directions":{
            "noord": 2
        }
    },
    {
        "titel":"C0.91",
        "image":"img/4.jpg",
        "directions":{
            "noord": 1
        }
    },
    {
        "titel":"Gang",
        "image":"img/5.jpg",
        "directions":{
            "noord": 10,
            "oost": 6,
            "west": 1
        }
    },
    {
        "titel":"Gang bij toiletten",
        "image":"img/6.jpg",
        "directions":{
            "oost": 7,
            "zuid": 11,
            "west": 5
        }
    },
    {
        "titel":"Gang bij toiletten",
        "image":"img/7.jpg",
        "directions":{
            "zuid": 8,
            "noord": 9,
            "west": 6
        }
    },
    {
        "titel":"C0.93",
        "image":"img/8.jpg",
        "directions":{
            "noord": 7
        }
    },
    {
        "titel":"C0.92",
        "image":"img/9.jpg",
        "directions":{
            "zuid": 7,
            "west": 10
        }
    },
    {
        "titel":"C0.90",
        "image":"img/10.jpg",
        "directions":{
            "oost": 9,
            "zuid": 5
        }
    },
    {
        "titel":"Toiletten",
        "image":"img/11.jpg",
        "directions":{
            "noord": 6,
        }
    }
];

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index;

    updateDirections();
}

function updateDirections(){
    let possible = lokaties[current_index].directions;
    let possible_keys = Object.keys(possible);
    let button_keys = Object.keys(directionButtons);
    
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for (const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    } 
}

function getInput(){
    show(myInput.value);
    myInput.value = ""
    myInput.focus();
}

function goDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index)
}

show(0)