let x = prompt('Il fait quel temps ?');
switch (x) {
    case "ensoleillé":
        alert(' Il fait beau');
        break;
    case "nuageux":
        alert(" c'est couvert");
        break;
    case "pluvieux":
        alert('Il pleut. Je prend un parapluie');
        break;
    case "neigeux":
        alert('Il neige, il faut te couvrir');
        break;
    default:
        break;
}