//$("#champsSaisie").focus();

function annuler(){
    document.getElementById('champsSaisie').value = "";
    $("#champsSaisie").focus();
}

function cacheExemples(){
    if(def == true){
        var selec = document.getElementsByClassName('aff');
        for(var i = 0; i < selec.length; i++){
            selec[i].classList.toggle('cacher');
        };
        e = document.getElementById("btExample");
        e.classList.toggle("desactiv");
    }
}