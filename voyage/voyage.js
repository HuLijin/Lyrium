function calculate(pieds) {
    /* temps de trajet */
    var base = document.pieds.dist.value;
    var vit = base / 6;
    var hour = vit - vit % 1;
    var min = (vit - hour) * 60;
    min = min - min % 1;
    /* fatigue */
    var quality = document.pieds.qual.value;
    var tired = base - parseInt(quality)*10;
    alert("Temps de trajet : "+hour+"h"+min+"\nFatigue : "+tired);
}