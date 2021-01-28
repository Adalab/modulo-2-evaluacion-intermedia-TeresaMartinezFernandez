'use strict'

        //funcion que genera numero aleatorio

    function getRandomNumber(max) {
        return Math.ceil(Math.random() * max);

        }
        const randomNumber = getRandomNumber(100);
        console.log (randomNumber);

        //me traigo los elementos del html

        const inputBottonElement = document.querySelector('.js-inputbtn');
        const inputValueElement = document.querySelector('.js-inputvalue');
        const boxPistaElement = document.querySelector('.js-pista');


        function handleUpdateBtn () {

            const inputValue = inputValueElement.value;

            if (inputValue > randomNumber) {
                boxPistaElement.innerHTML = "Demasiado alto";
                console.log ()
            }
            else if (inputValue < randomNumber) {
                boxPistaElement.innerHTML = "Demasiado bajo";
            }
            else if (inputValue === randomNumber) {
                boxPistaElement.innerHTML = "Has ganado campeona";
            }
            else if (inputValue >100 || inputValue <1) {
                    boxPistaElement.innerHTML = "El numero debe estar entre 1 y 100";

        }
    }

        inputBottonElement.addEventListener ('click', handleUpdateBtn);
