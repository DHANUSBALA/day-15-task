var button = document.createElement("button"); //<button type="button">Submit</button> 
button.setAttribute("type","button"); //Submit
button.innerHTML = "Submit";
//it takes 2 parameter
//first is the event name
//second is the function that has to be executed
button.addEventListener("click",foo);
document.body.append(button);

function foo(){ 
    var x=parseInt(prompt("enter your number"));
    var result =x+5;
    console.log(result);
}

