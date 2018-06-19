

function alertBox() {
    alert('This is a test');

}

function incrementValue() {

    var value = parseInt(document.getElementById('myTextArea').value,10);
    value = isNaN(value) ?  0 : value; 
    value++;
    document.getElementById('myTextArea').value = value; 
    document.getElementById('numberArea').innerHTML = value; 

}


