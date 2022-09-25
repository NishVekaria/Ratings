// JavaScript source code

    let rating;
    let itemOne = document.getElementById("one");
        itemOne.addEventListener('click',e => {
        rating = 1;
        itemOne.style.backgroundColor = '#f27c29';
            
        })

    let itemTwo = document.getElementById("two");
        itemTwo.addEventListener('click', e => {
        rating = 2;
    itemTwo.style.backgroundColor = '#f27c29';
            
        })

    let itemThree = document.getElementById("three");
        itemThree.addEventListener('click', e => {
        rating = 3;
    itemThree.style.backgroundColor = '#f27c29';
            
        })

    let itemFour = document.getElementById("four");
        itemFour.addEventListener('click',e => {
        rating = 4;
    itemFour.style.backgroundColor = '#f27c29';
           
        })

    let itemFive = document.getElementById("five");
        itemFive.addEventListener('click', e => {
        rating = 5;
    itemFive.style.backgroundColor = '#f27c29';
             
        })
    function myFunctions() {
        location.href = "rating_feedback.html"
        sessionStorage.setItem('ratings', rating)
       

        


}





