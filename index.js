const inputElement = document.getElementById("inputEl");
const button = document.getElementById('mainButton');
const outPut = document.getElementById("txtarea");

const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");

const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

button.addEventListener("click",(e)=>{
    e.preventDefault();
        
        if(!inputElement.value){
            alert("Input is Unavailable");
        }
        else  if(!select1.value || !select2.value){
            alert("Need to select from and to");
        }
        else  if(select1.value == select2.value){
            alert("From and to values cannot be same");
        }
        else if(select1.value == "dec" && select2.value == "hex"){
            let number = parseInt(inputElement.value);
            let str = number.toString(16);
             outPut.value = str;
             outPut.style.color = "black";
        }else if(select1.value == "dec" && select2.value == "oct"){
            let number = parseInt(inputElement.value);
            let str = number.toString(8);
            outPut.value = str;
             outPut.style.color = "black";
        }else if(select1.value == "dec" && select2.value == "bin"){
            let number = parseInt(inputElement.value);
            let str = number.toString(2);
            outPut.value = str;
            outPut.style.color = "black";
        }else if(select1.value == "hex" && select2.value == "dec"){
            let number = inputElement.value;
            let str = parseInt(number,16);
            outPut.value = str;
            outPut.style.color = "black";
        }else if(select1.value == "hex" && select2.value == "oct"){
            let number = inputElement.value;
            let str = parseInt(number,16).toString(8)
            outPut.value = str;
             outPut.style.color = "black";
        }else if(select1.value == "hex" && select2.value == "bin"){
            let number = inputElement.value;
            let str = (parseInt(number, 16).toString(2)).padStart(8, '0')
            outPut.value = str;
            outPut.style.color = "black";
        }else if(select1.value == "oct" && select2.value == "dec"){
            let number = inputElement.value;
            let str = parseInt(number,8).toString(10);
            outPut.value = str;
            outPut.style.color = "black";
        }else if(select1.value == "oct" && select2.value == "hex"){
            let number = inputElement.value;
            let str =  parseInt(number,8).toString(16);
            outPut.value = str;
            outPut.style.color = "black";
        }else if(select1.value == "oct" && select2.value == "bin"){
            let number = parseInt(inputElement.value);
            let str =   parseInt(number,8).toString(2);
            outPut.value = str;
            outPut.style.color = "black";
        }else if(select1.value == "bin" && select2.value == "dec"){
            let number = parseInt(inputElement.value);
            let str =  parseInt(number,2).toString(10);
            outPut.value = str;
            outPut.style.color = "black";
        }else if(select1.value == "bin" && select2.value == "hex"){
            let number = parseInt(inputElement.value);
            let str =  parseInt(number,2).toString(16);
            outPut.value = str;
            outPut.style.color = "black";
        }else if(select1.value == "bin" && select2.value == "oct"){
            let number = parseInt(inputElement.value);
            let str =  parseInt(number,2).toString(8);
            outPut.value = str;
            outPut.style.color = "black";
        }
       
})

const swapButton = document.getElementById("swapBtn");

swapButton.addEventListener("click" , (e)=>{
    e.preventDefault();
    let v = select2.value;
    let b = select1.value;
    select1.value = v;
    select2.value = b;
})