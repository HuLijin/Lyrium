function toggle(name,other = ""){
    var elt = document.getElementsByClassName(name);
    var elt2 = document.getElementsByClassName(name+"Link");
    for (var i = 0; i < elt.length; i++) {
        if (elt[i].className == name+" hidden") { 
            elt[i].className = name; 
            elt2[0].innerHTML = "(cacher)";
        } else { 
            elt[i].className = name+" hidden"; 
            elt2[0].innerHTML = "(afficher"+other+")";
        }
    }
}

function toggleTable(){
    var elt = document.getElementsByClassName("tablePlus");
    var elt2 = document.getElementsByClassName("tablePlusLink");
    for (var i = 0; i < elt.length; i++) {
        if (elt[i].className == "t_it1 t_smallfont tablePlus hidden") { 
            elt[i].className = "t_it1 t_smallfont tablePlus"; 
            elt2[0].innerHTML = "Cacher les intensités suivantes (9 à 16)";
        } else { 
            elt[i].className = "t_it1 t_smallfont tablePlus hidden"; 
            elt2[0].innerHTML = "Afficher les intensités suivantes (9 à 16)";
        }
    }
}

function calculateDice() {
    var dice = parseInt(document.calculateur.dice.value);
    
    if (!dice) {
        document.getElementById("answerDice").innerHTML = "";
        return 0;
    } else {
        /* Calcul du nombre d'intensités pour nb dés */
        var cost = 1;
        if (dice > 4) { if (dice < 10) { cost = 2; } else { cost = 3; } }
        var value = cost;
        var it = cost;
        var nb = parseInt(document.calculateur.nbDice.value);
        for (var i = 2; i <= nb; i++) {
            if (i%2 == 0) { value = value+1; }
            it = it +  value;
        }

        /* Calcul du nombre d'intensités pour des dégâts min assurés */
        /* Note : les dégâts min sont automatiquement ajustés si l'utilisateur entre un nombre trop grand */
        var mindmg = parseInt(document.calculateur.minDice.value);
        mindmg = Math.min(mindmg, nb*(dice/2-1));
        it = it + mindmg;

        /* Calcul des projectiles supplémentaires */
        var proj = 1 + parseInt(document.calculateur.projDice.value);
        if (proj > 1) { it = it + (proj-1) * 4; }

        /* Answer */
        var ans = "Coût intermédiaire : "+it+" intensités.<br/>Dégâts : "+nb+"D"+dice+" (fourchette de dégâts :"+(mindmg+nb)+" - "+(nb*dice)+").";
        if (proj > 1) { ans = ans + "<br/>"+proj+" projectiles : dégâts totaux : "+(mindmg*proj)+" - "+(nb*dice*proj)+"."; }
        document.getElementById("answerDice").innerHTML = ans;
        return it;
    }
}

function calculateDim() {

    /* Gestion de la distance */
    var dist = parseInt(document.calculateur.contact.value);
    var it = Math.max(parseInt(document.calculateur.line.value),1);
    var ans2 = "<br/>Sort à distance (jusqu'à "+(it*4)+"m).";
    if (!dist) { it = -2; ans2 = "<br/>Sort au contact."; }

    /* Gestion de la zone d'effet */
    var aoe = parseInt(document.calculateur.aoe.value);
    it = it + Math.max(aoe,0);

    /* Gestion du temps */
    var time = parseInt(document.calculateur.tps.value);
    var mult = Math.max(parseInt(document.calculateur.multTime.value),1);
    it = it + (time*mult);

    /* Affichage de la réponse */
    var ans = "Coût intermédiaire : "+it+" intensités."+ans2;
    if (aoe > 0) { ans = ans + "<br/>Aire de la zone d'effets : "+(aoe*2)+"m²."; }
    if (time > 0) { 
        var ans3 = "";
        /* A améliorer, c'est moche ce qui suit */
        if (time ==  1) { ans3 = "entre "+(1*mult)+" et "+(4*mult)+" tours." }
        if (time ==  2) { ans3 = "entre "+(1*mult)+" et "+(6*mult)+" tours." }
        if (time ==  4) { ans3 = "entre "+(2*mult)+" et "+(8*mult)+" tours." }
        if (time ==  8) { ans3 = (10*mult)+" minutes." }
        if (time == 12) { ans3 = ( 1*mult)+" jour(s)." }
        ans = ans + "<br/>Durée du sort : "+ans3;
    }
    document.getElementById("answerDim").innerHTML = ans;
    return it;
}

function calculateSkill() {

    /* Récupération de tous les résultats et calcul des PM */
    var it = calculateDice() + calculateDim();
    it = it + parseInt(document.calculateur.it.value);
    var ans2 = "<br/>Coût en PM : "+(it/2)+".";

    /* Calculs */
    it = it + Math.min(parseInt(document.calculateur.modif.value),0);
    var ans = "Coût total en intensités : "+it;
    ans = ans + " (degré de difficulté du sort : "+(it+5)+").";
    
    document.getElementById("answerSkill").innerHTML = ans + ans2;
}