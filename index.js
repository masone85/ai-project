function showAnswer(response) {
  console.log(response);
}

let apiKey = "af8a02404a8co87d6b9be4abdat1baf3";
let context = "be polite and provide a very short answer";
let prompt = "who is matt delac";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
