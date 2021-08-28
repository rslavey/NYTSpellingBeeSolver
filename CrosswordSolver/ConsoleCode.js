var ls = JSON.parse(window.localStorage.getItem('sb-today'));
ls.words = window.gameData.today.answers.slice(0,window.gameData.today.answers.length - 1);
window.localStorage.setItem('sb-today',JSON.stringify(ls));
console.log(window.gameData.today.answers[window.gameData.today.answers.length - 1]);


var a = JSON.parse(localStorage.getItem('localforage/169689553@11729'));
var answers = '';
var prevWord = 0;
for (var i = 0; i < a.cells.length; i++){
    if (a.cells[i].type == 0) continue;
    a.cells[i].guess = a.cells[i].answer;
    var letter = a.cells[i].answer;
    if (i > 0 && a.cells[i].clues[0,0] != prevWord){
        letter = ' ' + a.cells[i].answer;
    }
    answers = answers.concat(letter);
    prevWord = a.cells[i].clues[0,0]
}
console.log(answers);
var answers = '';a.cells.map((cell) => {answers = answers.concat(cell.type == 1 || cell.clues[0,0] ? cell.answer : ' ')});


function fireKey(el,key)
{
    if(document.createEventObject)
    {
        var eventObj = document.createEventObject();
        eventObj.keyCode = key;
        el.fireEvent("onkeydown", eventObj);
        eventObj.keyCode = key;   
    }else if(document.createEvent)
    {
        var eventObj = document.createEvent("Events");
        eventObj.initEvent("keypress", true, true);
        eventObj.which = key; 
        eventObj.keyCode = key;
        el.dispatchEvent(eventObj);
    }
} 
var a = JSON.parse("{}");
for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).indexOf("@") >= 0) {
        var tk = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (tk.status && !tk.status.isSolved)
        {
            a = tk;
        }
    }
}
for (var i = 0; i < a.cells.length; i++){
    if (a.cells[i].type == 0) {
        continue;
    }
    var elem = $(`rect#cell-id-${i}`);
    fireKey(elem,a.cells[i].answer.charCodeAt(0));
}

javascript: (() => {
    function fireKey(el, key) {
        if (document.createEventObject) {
            var eventObj = document.createEventObject();
            eventObj.keyCode = key;
            el.fireEvent("onkeydown", eventObj);
            eventObj.keyCode = key;
        } else if (document.createEvent) {
            var eventObj = document.createEvent("Events");
            eventObj.initEvent("keypress", true, true);
            eventObj.which = key;
            eventObj.keyCode = key;
            el.dispatchEvent(eventObj);
        }
    }
    var a = JSON.parse("{}");
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf("@") >= 0) {
            var tk = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if (tk.status && !tk.status.isSolved) {
                a = tk;
            }
        }
    }
    for (var i = 0; i < a.cells.length; i++) {
        if (a.cells[i].type == 0) {
            continue;
        }
        var elem = $(`rect#cell-id-${i}`);
        fireKey(elem, a.cells[i].answer.charCodeAt(0));
    }
})();

var answers = '';
var prevWord = 0;
 for (var i = 0; i < a.cells.length; i++){
    if (a.cells[i].type == 0) {
        continue;
    }
    var letter = a.cells[i].answer;
    a.cells[i].guess = letter;
    // if (i > 0 && a.cells[i].clues[0,0] != prevWord){
    //     //fireKey(elem,9);
    // }
    answers = answers.concat(letter);
    prevWord = a.cells[i].clues[0,0]
    var elem = $(`rect#cell-id-${i}`);
    //fireKey(elem,9);
    fireKey(elem,a.cells[i].answer.charCodeAt(0));
}
