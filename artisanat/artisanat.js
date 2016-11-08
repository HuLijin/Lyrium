function calculate (cate) {
    var obj;
    var mat;
    var qual;

    if (cate == "weapon") {
        obj = document.weaponForm.weapons.value.split(',');
        mat = document.weaponForm.weaponMat.value.split(',');
        qual = document.weaponForm.weaponQual.value.split(',');
    }
    if (cate == "armor") {
        obj = document.armorForm.armors.value.split(',');
        mat = document.armorForm.armorMat.value.split(',');
        qual = document.armorForm.armorQual.value.split(',');
    }
    if (cate == "item") {
        obj = document.itemForm.items.value.split(',');
        mat = document.itemForm.itemMat.value.split(',');
        qual = document.itemForm.itemQual.value.split(',');
    }
    
    var sol = parseInt(obj[0]) + parseInt(mat[0]) + parseInt(qual[0]);
    var ddf = parseInt(obj[1]) + parseInt(mat[1]);
    var ddfCond = parseInt(qual[1]);

    var ans = "Solidité finale : "+sol+"."
    ans += "<br/>Degré de difficulté de fabrication : "+ddf;
    ans += " (qualité obtenue si la marge est supérieure à "+ddfCond+")."
    var id = cate+"Answer";
    document.getElementById(id).innerHTML = ans;
    return sol;
}