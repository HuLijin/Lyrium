function update() {

    var FOR = parseInt(document.caracPrincipales.valFOR.value);
    var AGI = parseInt(document.caracPrincipales.valAGI.value);
    var CON = parseInt(document.caracPrincipales.valCON.value);
    var INTEL = parseInt(document.caracPrincipales.valINT.value);
    var MEM = parseInt(document.caracPrincipales.valMEM.value);
    var VOL = parseInt(document.caracPrincipales.valVOL.value);
    var CHA = parseInt(document.caracPrincipales.valCHA.value);

    var ans = 37;
    ans = ans - FOR - AGI - CON - INTEL - MEM - VOL - CHA;
    document.getElementById("answerPts").innerHTML = ans;

    /* Mise à jour de la section du bas */
    /*var PV = CON+FOR+VOL;
    document.getElementById("infoPV").innerHTML = PV;
    var PF = CON+AGI+VOL;
    document.getElementById("infoPF").innerHTML = PF;
    var PM = MEM+INTEL+VOL;
    document.getElementById("infoPM").innerHTML = PM;
    var MAE = FOR+AGI;
    document.getElementById("infoMAE").innerHTML = MAE;
    var POU = INTEL+MEM;
    document.getElementById("infoPOU").innerHTML = POU;
    var ADA = INTEL+AGI;
    document.getElementById("infoADA").innerHTML = ADA;*/

    /* Autres informations complémentaires */
    /*var pdm = MEM+1;
    document.getElementById("infoPdm").innerHTML = pdm;
    document.getElementById("infoINT").innerHTML = INTtoDice(INTEL);*/

    return ans;
}


function updateComp(number) {
    var comp = "comp"+number;
    var dice = "comp"+number+"res";
    var base = parseInt(document.getElementById(comp).value);
    var modulo = (base/10)|0;
    if (modulo > 0) { document.getElementById(dice).innerHTML = modulo; }
    else { document.getElementById(dice).innerHTML = ""; }
    var pts = 40 - computeCompPts();
    document.getElementById("compRes").innerHTML = pts;
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

function INTtoDice(intel) {

    if (intel < 5) { return "1D4"; }
    if (intel < 6) { return "1D6"; }
    if (intel < 7) { return "1D8"; }
    if (intel < 5) { return "1D10"; }
    return "1D12";

}

function validateStats() {
    
    var ans = update();
    var s = "s";

    if (ans > 0) {
        if (ans == 1) { s = ""; }
        document.getElementById("answerVal").innerHTML = "Il reste "+ans+" point"+s+" à investir !";
    } else {
        if (ans < 0) {
            if (ans == -1) { s = ""; }
            document.getElementById("answerVal").innerHTML = "Le personnage a "+(-ans)+"point"+s+" en trop !";
        } else {
            var deltaFOR = parseInt(document.caracPrincipales.valFOR.value) - 5;
            var deltaAGI = parseInt(document.caracPrincipales.valAGI.value) - 5;
            var deltaCON = parseInt(document.caracPrincipales.valCON.value) - 5;
            var deltaINT = parseInt(document.caracPrincipales.valINT.value) - 5;
            var deltaMEM = parseInt(document.caracPrincipales.valMEM.value) - 5;
            var deltaVOL = parseInt(document.caracPrincipales.valVOL.value) - 5;
            var deltaCHA = parseInt(document.caracPrincipales.valCHA.value) - 5;
            var delta = 0;
            if (deltaFOR < 0) { delta = delta + deltaFOR; }
            if (deltaAGI < 0) { delta = delta + deltaAGI; }
            if (deltaCON < 0) { delta = delta + deltaCON; }
            if (deltaINT < 0) { delta = delta + deltaINT; }
            if (deltaMEM < 0) { delta = delta + deltaMEM; }
            if (deltaVOL < 0) { delta = delta + deltaVOL; }
            if (deltaCHA < 0) { delta = delta + deltaCHA; }
            if (delta < -4) {
                document.getElementById("answerVal").innerHTML = "Le personnage n'est pas valide, ses statistiques sont trop extrêmes, augmentez "+(-delta-4)+" de vos statistiques les plus faibles et baissez "+(-delta-4)+" de vos statistiques les plus fortes (vous n'avez droit de déplacer que 4 points d'une statistique à l'autre).";
            } else {
                document.getElementById("answerVal").innerHTML = "Le personnage est parfaitement valide.";
            }
        }
    }
}