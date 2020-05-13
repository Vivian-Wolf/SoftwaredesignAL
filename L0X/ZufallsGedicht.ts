let subject: string[] = ["Peter", "Johannes", "Linda", "Eric", "Sabrina"];
let verb: string[] = ["liebt", "hasst", "will", "braucht", "vergöttert"];
let object: string[] = ["Limonade", "Lasagne", "Pizza", "Eis", "Toastbrot"];
//Der Namespace muss glaube ich direkt am Anfang festgelegt werden
namespace ZufallsGedicht {
    if (subject.length != verb.length || verb.length != object.length) {
        console.log("Alle Arrays müssen die selbe Anzahl Positionen haben");
    } else {
        while(subject.length > 0) {
            console.log(getVerse());
            if (!(subject.length > 0)) {
                break;
            }
        }

    }

    function getVerse(): string {
        let vers: string;
        vers = pickWord(subject, Math.floor(Math.random() * (subject.length - 1))) + " ";
        vers += pickWord(verb, Math.floor(Math.random() * (verb.length - 1))) + " ";
        vers += pickWord(object, Math.floor(Math.random() * (object.length - 1)));
        return vers;
    }

//Funktionsparameter müssen einen _ haben    
    function pickWord(array: string[], index: number): string {
        
        return array.splice(index, 1).toString();
    }
}
