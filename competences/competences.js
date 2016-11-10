function toggle(name){
    var elt = document.getElementsByClassName(name);
    var elt2 = document.getElementsByClassName(name+"Link");
    console.log(elt2);
    /*if (elt.length == 0) { 
        var hidden = name+" hidden";
        elt = document.getElementsByClassName(hidden);
        for (var i = 0; i < elt.length; i++) {
            elt[i].className = name;
        }
    } else {
        for (var i = 0; i < elt.length; i++) {
            elt[i].className = name+" hidden";
        }
    }*/
    for (var i = 0; i < elt.length; i++) {
        if (elt[i].className == name+" hidden") { 
            elt[i].className = name; 
            elt2[0].innerHTML = "(cacher)";
        }
        else { 
            elt[i].className = name+" hidden"; 
            elt2[0].innerHTML = "(afficher)";
        }
    }
}