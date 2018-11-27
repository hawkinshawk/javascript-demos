var lottozahlen = [];
var doppelteZahlen = [];
// 1-49
// 6 zahlen

for (var i = 0; i < 6; i++) {
    var gezogeneZahl = ziehe();
    while (lottozahlen.includes(gezogeneZahl)) {
        if (!doppelteZahlen.includes(gezogeneZahl)){
            doppelteZahlen.push(gezogeneZahl);
        }
        gezogeneZahl = ziehe();
    }
    lottozahlen.push(gezogeneZahl);
}
function ziehe() {
    return Math.floor(Math.random() * 49) + 1;
}

document.write('gezogen: ');
document.write(lottozahlen);
document.write('<br>')
document.write('mehrmals gezogen: ');
document.write(doppelteZahlen);