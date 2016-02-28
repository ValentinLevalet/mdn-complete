//$("#champsSaisie").focus();

function annuler(){
    document.getElementById('champsSaisie').value = "";
    $("#champsSaisie").focus();
}

function cacheExemples(){
    var selec = document.getElementsByClassName('aff');
    for(var i = 0; i < selec.length; i++){
        selec[i].classList.toggle('cacher');
    };
}