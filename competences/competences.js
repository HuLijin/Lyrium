function toggle(name){
    var elt = document.getElementsByClassName(name);
    var elt2 = document.getElementsByClassName(name+"Link");
    for (var i = 0; i < elt.length; i++) {
        if (elt[i].className == name+" hidden") { 
            elt[i].className = name; 
            elt2[0].innerHTML = "(cacher)";
        }
        else { 
            if (elt[i].className == name+" hidden eg") { 
            elt[i].className = name+" eg"; 
            elt2[0].innerHTML = "(cacher)";
            }
            else { 
                if (elt[i].className == name+" eg") { 
                    elt[i].className = name+" hidden eg"; 
                    elt2[0].innerHTML = "(afficher)";
                } else {
                    elt[i].className = name+" hidden"; 
                    elt2[0].innerHTML = "(afficher)";
                }
            }
        }
    }
}