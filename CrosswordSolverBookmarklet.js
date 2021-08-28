javascript: (() => {
    function k(e, f) {
            var o = document.createEvent("Events");
            o.initEvent("keypress", true, true);
            o.which = f;
            o.keyCode = f;
            e.dispatchEvent(o);
    }
    var a;
    for (var l=localStorage,i = 0; i < l.length; i++) {
            try{
                var t = JSON.parse(l.getItem(l.key(i)));
                if (t.status && !t.status.isSolved) {
                    a = t;
                }
            }
            catch(e){continue;}
    }
    for (var i = 0; i < a.cells.length; i++) {
        if(a.cells[i].type!=0)
        {
            k(document.getElementById('cell-id-'+i), a.cells[i].answer.charCodeAt(0));
        }
    }
})();