function annuler(){
    document.getElementById('champsSaisie').value = "";
}

function cacheExemples(){
    var selec = document.getElementsByClassName('example');
    for(var i = 0; i < selec.length; i++){
        selec[i].classList.toggle('cacher');
    }
}