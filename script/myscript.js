// dichiarazione variabile
let squareContainer = document.getElementById("square-container");

for(let i=1; i<=100; i++){

    // numero divisibile per 3 e 5
    if((i % 3 === 0)&&(i % 5 === 0)){

        let square = `<div class="square red-square">fizzbuzz</div>`;
        squareContainer.innerHTML += square;

    // numero divisibile per 3
    }else if(i % 3 === 0){

        let square = `<div class="square green-square">fizz</div>`;
        squareContainer.innerHTML += square;

    // numero divisibile per 5
    }else if(i % 5 === 0){

        let square = `<div class="square yellow-square">buzz</div>`;
        squareContainer.innerHTML += square;

    // numero non divisibile
    }else{
        let square = `<div class="square blu-square">${i}</div>`;
        squareContainer.innerHTML += square;
    }

}
