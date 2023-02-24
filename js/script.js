
let allItems = ["Gardens", "Living Things", "Plants", "Houses"];



//Loop through the array 
for (let i = 0; i <= allItems.length - 1; i++) {

    //Pick a random number (0 or 1)
    //If it is 0, assign this to the first column, otherwise to the second column 
    if ((Math.floor(Math.random() * 2)) == 0){

        //Append a div to the FIRST column, with a class 'button'. Inside the button, add the text from the array
        $(".column1").append("<div class='button'>" + allItems[i] + "</div>");
       

    } else {

        //Append a div to the SECOND column, with a class 'button'. Inside the button, add the text from the array
        $(".column2").append("<div class='button'>" + allItems[i] + "</div>");
       
    }


}


//Animate in the columns and the arrow
gsap.fromTo($(".column1"), { opacity: "0", x: "-500" }, { opacity: "1", x: "0", duration: .5 });
gsap.fromTo($(".circle"), { opacity: "0"}, { opacity: "1", duration: .5, delay: .1 });
gsap.fromTo($(".column2"), { opacity: "0", x: "500" }, { opacity: "1", x: "0", duration: .5, delay: .2 });

//Loop through the buttons and animate them in one at a time
for (let k = 0; k <= allItems.length - 1; k++) {

    gsap.fromTo($(".button").eq(k), { opacity: "0" }, { opacity: "1", duration: .5, delay: .5 + (k*.2) });


}