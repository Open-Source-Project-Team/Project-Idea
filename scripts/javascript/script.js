// Makes navbar dynamic
function nav(){
    // select nav button container ( The <li> tag)
    var nav_btn_li = document.querySelectorAll(".nav-btn-container");
    // adds event listener to all nav buttons
    for(let index = 0; index < nav_btn_li.length; index++){
        nav_btn_li[index].addEventListener("click", (event_log) => {navigate(index);});
    }
    function navigate(class_index){
        // reset all button to default color (makes them inactive);
        for(let i = 0; i < nav_btn_li.length; i++){
            nav_btn_li[i].classList.remove("active");
        }
        // activates the clicked nav btn
        nav_btn_li[class_index].classList.add("active");
        show_content(class_index);
    }
    // shows content based on active nav btn
    function show_content(section_index){
        // selects all section
        var sections = document.querySelectorAll("section");
        // hides all section
        for(let i = 0; i < sections.length; i++){
            sections[i].classList.remove("show");
        }
        sections[section_index].classList.add("show");
    }
}
nav();