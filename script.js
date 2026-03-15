let num1
let num2
let operator


function operate() {
    num1 = parseFloat(document.getElementById('display').innerText)
    num2 = parseFloat(document.getElementById('display').innerText)
}

document.getElementById('btn1').addEventListener('click', function() {
    document.getElementById('display').innerText += '1'
});