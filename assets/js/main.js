function init(){
   
    // RESPONSIVE TOGGLE MENU
    var menu = document.getElementById("menu");
    var active = false;

    menu.addEventListener("click", function(){
        toggleMenu(active);
        console.log(document.body.scrollTop );
    });

    function toggleMenu(active){
        if(active == false){
            menu.classList.add("active");
            reset(true);
        }else{
            menu.classList.remove("active");
            reset(false);
        }
    }

    function reset(stats){
        active = stats;
    }
}