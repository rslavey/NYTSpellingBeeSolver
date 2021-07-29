var ls = JSON.parse(window.localStorage.getItem('sb-today'));
ls.words = window.gameData.today.answers.slice(0,window.gameData.today.answers.length - 1);
window.localStorage.setItem('sb-today',JSON.stringify(ls));
console.log(window.gameData.today.answers[window.gameData.today.answers.length - 1]);


var a = JSON.parse(localStorage.getItem('localforage/169689553@10568'));
var answers = '';
var prevWord = 0;
for (var i = 0; i < a.cells.length; i++){
    if (a.cells[i].type == 0) continue;
    var letter = a.cells[i].answer;
    if (i > 0 && a.cells[i].clues[0,0] != prevWord){
        letter = ' ' + a.cells[i].answer;
    }
    answers = answers.concat(letter);
    prevWord = a.cells[i].clues[0,0]
}
console.log(answers);
var answers = '';a.cells.map((cell) => {answers = answers.concat(cell.type == 1 || cell.clues[0,0] ? cell.answer : ' ')});