"use strict";
let subject = ["Peter", "Johannes", "Linda", "Eric", "Sabrina"];
let verb = ["liebt", "hasst", "will", "braucht", "vergöttert"];
let object = ["Limonade", "Lasagne", "Pizza", "Eis", "Toastbrot"];
var ZufallsGedicht;
(function (ZufallsGedicht) {
    if (subject.length != verb.length || verb.length != object.length) {
        console.log("Alle Arrays müssen die selbe Anzahl Positionen haben");
    }
    else {
        while (subject.length > 0) {
            console.log(getVerse());
            if (!(subject.length > 0)) {
                break;
            }
        }
    }
    function getVerse() {
        let vers;
        vers = pickWord(subject, Math.floor(Math.random() * (subject.length - 1))) + " ";
        vers += pickWord(verb, Math.floor(Math.random() * (verb.length - 1))) + " ";
        vers += pickWord(object, Math.floor(Math.random() * (object.length - 1)));
        return vers;
    }
    function pickWord(array, index) {
        return array.splice(index, 1).toString();
    }
})(ZufallsGedicht || (ZufallsGedicht = {}));
//# sourceMappingURL=ZufallsGedicht.js.map