function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    ibg();