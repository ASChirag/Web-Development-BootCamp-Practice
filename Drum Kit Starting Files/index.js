let btns = document.getElementsByClassName('drum');

var audio1 = new Audio('./sounds/crash.mp3');
var audio2 = new Audio('./sounds/kick-bass.mp3');
var audio3 = new Audio('./sounds/snare.mp3');
var audio4 = new Audio('./sounds/tom-1.mp3');
var audio5 = new Audio('./sounds/tom-2.mp3');
var audio6 = new Audio('./sounds/tom-3.mp3');
var audio7 = new Audio('./sounds/tom-4.mp3');

let w = document.getElementById('w');
let a = document.getElementById('a');
let s = document.getElementById('s');
let d = document.getElementById('d');
let j = document.getElementById('j');
let k = document.getElementById('k');
let l = document.getElementById('l');


for (var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        let btnClicked = this.innerHTML;
        switch(btnClicked) {
            case 'w':
                audio1.play();
                break;
            case 'a':
                audio2.play();
                break;
            case 's':
                audio3.play();
                break;
            case 'd':
                audio4.play();
                break;
            case 'j':
                audio5.play();
                break;
            case 'k':
                audio6.play();
                break;
            case 'l':
                audio7.play();
                break;
            default:
                console.log("An Error has Occured");
        }

        buttonAnimation(btnClicked);
    })
}

document.addEventListener('keydown', function(event){
    switch (event.key){
        case 'w':
            audio1.play();
            break;
        case 'a':
            audio2.play();
            break;
        case 's':
            audio3.play();
            break;
        case 'd':
            audio4.play();
            break;
        case 'j':
            audio5.play();
            break;
        case 'k':
            audio6.play();
            break;
        case 'l':
            audio7.play();
            break;
        default:
            console.log('Another Key was pressed');
            break;
    }

    buttonAnimation(event.key);
})

let lightIndustries = document.querySelector('footer');
lightIndustries.style.fontSize = '24px';

function buttonAnimation(currentKey){
    var activeKey = document.querySelector('.' + currentKey);
    console.log(activeKey);
    activeKey.classList.add('pressed');
    setTimeout(function (){
        activeKey.classList.remove('pressed');
    }, 100);

}