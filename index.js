var wordToBeSearched = "";
var CharEntered;
var timer;
var listItems = [];
for (var i = 0; i < document.querySelectorAll("li").length; i++) {
    listItems.push(document.querySelectorAll("li")[i].textContent);
}


//Focus Lost and Focus in Animations/Changes
document.querySelector(".textbox").addEventListener("focusout", focusLost);
document.querySelector(".textbox").addEventListener("focusin", function () {
    document.querySelector(".maindiv").classList.add("dropshadow");
});
document.querySelector(".search-label input").addEventListener("keydown", search);


//function for focuslost
function focusLost() {
    document.querySelector(".search-label input").value = "";
    document.querySelector(".maindiv").classList.remove("dropshadow");
    clearInterval(timer);//For Resetting the Search Interval
    wordToBeSearched = ""; //To Clear the word so that new word can be searched
    for (i = 0; i < document.querySelectorAll("li").length; i++) {
        document.querySelectorAll(".list-items-container")[i].classList.remove("hide");
    }
}



//Function for Searching
function search() {

    //Focus Loses on pressing Enter
    if (event.key === "Enter") {
        document.querySelector(".textbox input").blur();
        return;
    }

    if (event.key === "Backspace") {
        wordToBeSearched = wordToBeSearched.slice(0, wordToBeSearched.length - 1);
    }


    //Search Code
    CharEntered = event.key;
    if (event.keyCode >= 65 && event.keyCode <= 91) {
        wordToBeSearched = wordToBeSearched + CharEntered;
    }



    for (var i = 0; i < document.querySelectorAll("li").length; i++) {
        if (document.querySelectorAll("li")[i].textContent.slice(0, wordToBeSearched.length) === wordToBeSearched) {

            document.querySelectorAll(".list-items-container")[i].classList.remove("hide");
        }
        else {
            document.querySelectorAll(".list-items-container")[i].classList.add("hide");
        }
    }


}
