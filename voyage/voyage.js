function calculate(pieds) {
    /* temps de trajet */
    var base = document.pieds.dist.value;
    var vit = base / 12;
    var hour = vit - vit % 1;
    var min = (vit - hour) * 60;
    min = min - min % 1;
    /* fatigue */
    var quality = document.pieds.qual.value;
    var tired = base - parseInt(quality)*10;
    alert("Temps de trajet : "+hour+"h"+min+"\nFatigue : "+tired);
}

function toggle(name){
    var elt = document.getElementsByClassName(name);
    var elt2 = document.getElementsByClassName(name+"Link");
    for (var i = 0; i < elt.length; i++) {
        if (elt[i].className == name+" hidden boxed") { 
            elt[i].className = name+" boxed"; 
            elt2[0].innerHTML = "(cacher la description des "+name+")";
        } else { 
            elt[i].className = name+" hidden boxed"; 
            elt2[0].innerHTML = "(afficher la description des "+name+")";
        }
    }
}