'use strict'
var  a = {
    name:'Fincke',
    vorname: 'Sebastian',
    adresse : {
        strasse : 'Lindenstr',
        nummer : 5
    }
};

document.write(a.name + '<br>');
document.write(a.adresse.strasse + '<br>' + a.adresse.nummer + '<br>');
