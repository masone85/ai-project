function handleClick() {
  alert("come on you Reds!");
}

let buttonElement = document.querySelector("#special-button");
buttonElement.addEventListener("click", handleClick);

//function showAnswer(response) {
//alert(response.data.answer);}

//let apiKey = "af8a02404a8co87d6b9be4abdat1baf3";
//let context = "be polite and provide a very short answer";
//let prompt = "who was the first female president";
//let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

//axios.get(apiUrl).then(showAnswer);
