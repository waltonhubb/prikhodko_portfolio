function checkCurr(d) {
    if(window.event) {
        if (event.keyCode == 37 || event.keyCode == 39) return;
    }
    d.value = d.value.replace(/\D/g,'');
}