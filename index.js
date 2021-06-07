window.onload = function(){
    // core
    function calc(w, h, s) {
        w = parseFloat(w);
        h = parseFloat(h);
        s = parseInt(s);
        let sp = PRICESLIST[s];
        let kw = w/1000;
        let cl = kw*h*sp;
        return parseFloat(cl.toFixed(PRECISION));
    }
    const ARABICHEADNUM = ["الاولى", "الثانية", "الثالثة", "الرابعة", "الخامسة", "السادسة", "السابعة", "الثامنة"];
    function getid(i) {
        return document.getElementById(i);
    }
    function checkSeparatorNumber() {
        let checkBool = (PRICESLIST.length == 8 && USAGELIST.length == 8 && ARABICHEADNUM.length == 8);
        if(!checkBool) {
            alert("Error. Check the console.");
            console.log("Separation Numbers are not equals!");
        }
        return checkBool;
    }
    // --------
    // view
    function showSeparatorSelectionBox() {
        if(checkSeparatorNumber()) {
            let el = getid('selectionBox');
            for(let i = 0; i < USAGELIST.length; i++) {
               let op = document.createElement("option");
               op.text = "الشريحة " + ARABICHEADNUM[i] + " [" + USAGELIST[i] + "]";
               op.value = i;
               el.add(op);
            }
        }
    }
    function viewCalcResult(w, h, s) {
        let p = calc(w, h, s);
        getid('rusage').innerHTML = w + ' وات';
        getid('rhours').innerHTML = h;
        getid('rseparation').innerHTML = ARABICHEADNUM[s];
        getid('rprice').innerHTML = p + ' جنيه مصري';
    }
    function calcOp() {
        let usage = getid('usage').value;
        let type = getid('usage_type').value;
        let watt = usage;
        if(type == "kw") watt = usage*1000;
        else watt = usage;
        let separation = getid('selectionBox').value;
        let hours = getid('hours').value;
        getid('result').style.display = 'block';
        viewCalcResult(watt, hours, separation);
    }
    // --------
    showSeparatorSelectionBox();
    getid('current_ym').innerHTML = CURRENT_SEPARATION_YEAR;
    getid('btnCalc').onclick = calcOp;
};