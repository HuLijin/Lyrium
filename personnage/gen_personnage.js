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
}

function updateAGI() {
    var FOR = getAGI();
    computeCaracPts();

    /* Mise à jour des valeurs dans la feuille de personnage */
}

function updateCON() {
    var FOR = getCON();
    computeCaracPts();

    /* Mise à jour des valeurs dans la feuille de personnage */
}

function updateINT() {
    var FOR = getINT();
    computeCaracPts();

    /* Mise à jour des valeurs dans la feuille de personnage */
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