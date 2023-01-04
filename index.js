document.querySelector(".textbox").addEventListener("focusout",focusLost);
document.querySelector(".textbox").addEventListener("focusin",function(){
    document.querySelector(".maindiv").classList.add("dropshadow");
});
document.querySelector(".search-label input").addEventListener("keydown",function(){
    if(event.key==="Enter"){
        document.querySelector(".textbox input").blur();
    }
})


function focusLost(){
    document.querySelector(".search-label input").value="";
    document.querySelector(".maindiv").classList.remove("dropshadow");
}