
function animation(){
    document.images[0].width+=1;
}

for (var i=100; i<1000;i++){
    setTimeout('animation()', i)
}
