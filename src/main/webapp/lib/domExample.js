function showResults(value, index, ar) {
    alert(index);
}


var ele = document.createElement('h1');



ele.textContent = 'Mein Header';
document.getElementById('div1').appendChild(ele);
document.getElementsByTagName('div')[1].innerHTML = 'Mein Div2<h2>Mein Header 2</h2>';
Array.prototype.forEach.call(document.getElementsByTagName('h1'), function(){});
document.getElementsByTagName('h1').forEach(function(){
    element.innerHTML = 'meine H';
});