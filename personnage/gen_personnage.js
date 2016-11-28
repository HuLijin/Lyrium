/* CHOIX TYPE DE MAGICIEN */

function displayMagie(cat) {
    document.getElementById("mage-profane").className = "hidden";
    document.getElementById("mage-elementaire").className = "hidden";
    document.getElementById(cat).className = "";
}



/* CARACTERISTIQUES PRIMAIRES */

function getFOR () { return parseInt(document.getElementById("for").value); }
function getAGI () { return parseInt(document.getElementById("agi").value); }
function getCON () { return parseInt(document.getElementById("con").value); }
function getINT () { return parseInt(document.getElementById("int").value); }
function getMEM () { return parseInt(document.getElementById("mem").value); }
function getVOL () { return parseInt(document.getElementById("vol").value); }
function getCHA () { return parseInt(document.getElementById("cha").value); }

function updateFOR() {
    var FOR = getFOR();
    computeCaracPts();

    /* Mise à jour des valeurs dans la feuille de personnage */
    computeCompCaractFOR();
}

function updateAGI() {
    var FOR = getAGI();
    computeCaracPts();

    /* Mise à jour des valeurs dans la feuille de personnage */
    computeCompCaractAGI();
}

function updateCON() {
    var FOR = getCON();
    computeCaracPts();

    /* Mise à jour des valeurs dans la feuille de personnage */
    computeCompCaractCON();
}

function updateINT() {
    var FOR = getINT();
    computeCaracPts();

    /* Mise à jour des valeurs dans la feuille de personnage */
    computeCompCaractINT();
}

function INTtoDice(intel) {

    if (intel < 5) { return "1D4"; }
    if (intel < 6) { return "1D6"; }
    if (intel < 7) { return "1D8"; }
    if (intel < 5) { return "1D10"; }
    return "1D12";
}

function updateMEM() {
    var FOR = getMEM();
    computeCaracPts();

    /* Mise à jour des valeurs dans la feuille de personnage */
    computeCompCaractMEM();
}

function updateVOL() {
    var FOR = getVOL();
    computeCaracPts();

    /* Mise à jour des valeurs dans la feuille de personnage */
}

function updateCHA() {
    var FOR = getCHA();
    computeCaracPts();

    /* Mise à jour des valeurs dans la feuille de personnage */
    computeCompCaractCHA();
}

function computeCaracPts() {
    var   FOR = parseInt(document.getElementById("for").value);
    var   AGI = parseInt(document.getElementById("agi").value);
    var   CON = parseInt(document.getElementById("con").value);
    var INTEL = parseInt(document.getElementById("int").value);
    var   MEM = parseInt(document.getElementById("mem").value);
    var   VOL = parseInt(document.getElementById("vol").value);
    var   CHA = parseInt(document.getElementById("cha").value);

    var ans = 37 - FOR - AGI - CON - INTEL - MEM - VOL - CHA;
    if (ans != 0) {
        var s = "s";
        if (Math.abs(ans) == 1) { s = ""; }
        document.getElementById("carac-pts").innerHTML = "Point"+s+" restant"+s+" : "+ans;
    } else {
        ans = "Le personnage est valide."

        /* Calcul du cas où le personnage est déséquilibré */
        var delta = 0;
        var deltaFOR =   FOR - 5; if (deltaFOR < 0) { delta += deltaFOR; }
        var deltaAGI =   AGI - 5; if (deltaAGI < 0) { delta += deltaAGI; }
        var deltaCON =   CON - 5; if (deltaCON < 0) { delta += deltaCON; }
        var deltaINT = INTEL - 5; if (deltaINT < 0) { delta += deltaINT; }
        var deltaMEM =   MEM - 5; if (deltaMEM < 0) { delta += deltaMEM; }
        var deltaVOL =   VOL - 5; if (deltaVOL < 0) { delta += deltaVOL; }
        var deltaCHA =   CHA - 5; if (deltaCHA < 0) { delta += deltaCHA; }
        
        if (delta < -4) { ans = "Le personnage est déséquilibré\xa0!" }
        document.getElementById("carac-pts").innerHTML = ans;
    }
}



/* COMPETENCES */

function displayComp(cat) {
    document.getElementById("specialiste").className = "hidden";
    document.getElementById("touche-a-tout").className = "hidden";
    document.getElementById(cat).className = "";
    computeCompCaractFOR();
    computeCompCaractAGI();
    computeCompCaractCON();
    computeCompCaractINT();
    computeCompCaractMEM();
    computeCompCaractCHA();
}

function canComputeCompCaracs() {
    var hidden = document.getElementById("specialiste").className;
    if (hidden == "hidden") {
        hidden = document.getElementById("touche-a-tout").className;
        if (hidden == "hidden") {
            return "";
        } else {
            return "score-bis";
        }
    }
    return "score";
}

function computeCompCaractFOR () {
    var ad = canComputeCompCaracs();
    if (ad == "") { return; }
    var FOR = getFOR();
    document.getElementById("comp3"+ad).innerHTML = FOR;
    document.getElementById("comp5"+ad).innerHTML = FOR;
}

function computeCompCaractAGI () {
    var ad = canComputeCompCaracs();
    if (ad == "") { return; }
    var AGI = getAGI();
    document.getElementById("comp7"+ad).innerHTML = AGI;
    document.getElementById("comp9"+ad).innerHTML = AGI;
    document.getElementById("comp11"+ad).innerHTML = AGI;
    document.getElementById("comp13"+ad).innerHTML = AGI;
}

function computeCompCaractCON () {
    var ad = canComputeCompCaracs();
    if (ad == "") { return; }
    var CON = getCON();
    document.getElementById("comp1"+ad).innerHTML = CON;
}

function computeCompCaractINT () {
    var ad = canComputeCompCaracs();
    if (ad == "") { return; }
    var INTEL = getINT();
    document.getElementById("comp2"+ad).innerHTML = INTEL;
    document.getElementById("comp4"+ad).innerHTML = INTEL;
    document.getElementById("comp6"+ad).innerHTML = INTEL;
    document.getElementById("comp8"+ad).innerHTML = INTEL;
}

function computeCompCaractMEM () {
    var ad = canComputeCompCaracs();
    if (ad == "") { return; }
    var MEM = getMEM();
    document.getElementById("comp15"+ad).innerHTML = MEM;
    document.getElementById("comp16"+ad).innerHTML = MEM;
    document.getElementById("comp17"+ad).innerHTML = MEM;
}

function computeCompCaractCHA () {
    var ad = canComputeCompCaracs();
    if (ad == "") { return; }
    var CHA = getCHA();
    document.getElementById("comp10"+ad).innerHTML = CHA;
    document.getElementById("comp12"+ad).innerHTML = CHA;
    document.getElementById("comp14"+ad).innerHTML = CHA;
}

function updateComp(number) {
    var comp = "comp"+number;
    var dice = "comp"+number+"res";
    var base = parseInt(document.getElementById(comp).value);
    var modulo = (base/10)|0;
    if (modulo > 0) { document.getElementById(dice).innerHTML = modulo; }
    else { document.getElementById(dice).innerHTML = ""; }
    var pts = 40 - computeCompPts();
    document.getElementById("comp-pts").innerHTML = pts;
}

function computeCompPts() {
    var pts = 0;
    var comp = "";
    var i = 1;
    for (i; i <= 17; i++) {
        comp = "comp" + i.toString();
        pts += parseInt(document.getElementById(comp).value);
    }
    return pts;
}



/* MANOEUVRES */

function toggleManoeuvres() {
    var inner = document.getElementById("link-form-manoeuvres").innerHTML;
    if (inner == "Afficher") {
        document.getElementById("link-form-manoeuvres").innerHTML = "Cacher";
        document.getElementById("form-manoeuvres").className = "";
    } else {
        document.getElementById("link-form-manoeuvres").innerHTML = "Afficher";
        document.getElementById("form-manoeuvres").className = "hidden";
    }
}

function updateManoeuvre(cat = "") {
    if (cat != "") {
        var val = parseInt(document.getElementById(cat+"1").value);
        if (val == 0) {
            document.getElementById("manoeuvre-"+cat).className = "hidden";
            document.getElementById("manoeuvre-"+cat+"-bonus").className = "eg hidden";
        } else {
            document.getElementById("manoeuvre-"+cat).className = "";
            document.getElementById("manoeuvre-"+cat+"-bonus").className = "eg";
        }
    }
    /* Calculer tout plein de trucs */
}