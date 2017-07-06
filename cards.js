
    // Create an HTML page that contains a text area and a button labeled Create.
    // When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
    // When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

var text = document.getElementById("textBox");
var button = document.getElementById("button").addEventListener("click", builder);
var cardArr = document.getElementById("cardArr");
var card = document.getElementById("card");

function builder(){
	var textStuff = text.value;
	card.innerHTML += addCard(textStuff);
};

function addCard(text) {
	return `<p>${text}<input type="button" class="deleteBtn" value="Delete"></p>`;
};

cardArr.addEventListener("click", function() {
	if (event.target.classList.contains("deleteBtn")){
		killMe(event.target);
	}
	// console.log("", event.target.classList);
});

function killMe(button){
	button.parentNode.remove();
	// console.log("button", button.parentNode);
};


