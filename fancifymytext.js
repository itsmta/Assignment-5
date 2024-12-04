
function popUp(){
    alert("Hello, world!");
}

function makeTextBigger() {
    //Access the textarea element by its ID
    const textArea = document.getElementById("textArea");
    //Set its font size to 24pt
    textArea.style.fontSize = "24pt";
}

function handleRadioChange() {
    const fancyRadio = document.getElementById("fancyShmancy");
    const textArea = document.getElementById("textArea");

    if (fancyRadio.checked) {
        //"FancyShmancy" selected: Apply bold, underline, and blue text
        alert("FancyShmancy selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        //"BoringBetty" selected: Reset to normal styles
        alert("BoringBetty selected!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooifyText() {
    const textArea = document.getElementById("textArea");

    //get the current value of the text area
    let text = textArea.value;

    //convert the text to uppercase
    text = text.toUpperCase();

    //split the text into sentences by periods
    let sentences = text.split(".");

    //Add "-Moo" to the last word of each sentence
    sentences = sentences.map(sentence => {
        sentence = sentence.trim(); //Remove extra whitespace
        if (sentence.length > 0) {
            const words = sentence.split(" "); //Split sentence into words
            words[words.length - 1] += "-Moo"; //Add "-Moo" to the last word
            return words.join(" "); //Rejoin the words into a sentence
        }
        return ""; //Handle empty sentences
    });

    //Rejoin sentences with periods and set the updated text
    textArea.value = sentences.join(". ") + (text.endsWith(".") ? "." : "");
}