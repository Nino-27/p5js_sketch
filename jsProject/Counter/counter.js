const decrease = document.querySelector('#decrease');
const rest = document.querySelector('#reset');
const increase = document.querySelector('#increase');


const myH2 = document.querySelector('#myH2');
let count = 0;
compara();

decrease.addEventListener('click', function(){
    count--;
    compara();
    console.log("You clicked me !");
    myH2.innerText = count;
});

rest.addEventListener('click', function(){
    count = 0;
    compara();
    console.log("You clicked me !");
    myH2.innerText = count;
});

increase.addEventListener('click', function(){
    count++;
    compara();
    console.log("You clicked me !");
    myH2.innerText = count;
});

function compara(){
    if (count > 0){
        myH2.style.color = 'lightgreen'
    }
    else if (count < 0){
        myH2.style.color = 'red'
    }
    else {
        myH2.style.color = 'black'
    }

}

