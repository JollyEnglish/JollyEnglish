function scroller(id){
    if (id=="home"){
        document.body.scrollTop = 0;
    }
    document.querySelector('#'+id).scrollIntoView({
        behavior: 'smooth'
    });
}

