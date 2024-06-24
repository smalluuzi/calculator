function clearResult(){
 document.getElementById("display").value=" ";
}
function showInput(num){
    display.value += num;
}
function calculate(){
    display.value = eval(display.value);
}