const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let charactersLenght = 12
let generate = document.getElementById("generate")

function getRandomCharacters(){
    let randomChar = Math.floor(Math.random() *characters.length)
    return characters[randomChar]
}


function generatePasswords(){
    let randomPassword = ""
for (let i = 0; i < 12; i++){
    randomPassword += getRandomCharacters()
    
    
}return randomPassword.toString();
}

generate.addEventListener("click", function() {
  document.getElementById("firstpassword-el").textContent = generatePasswords();
  document.getElementById("secondpassword-el").textContent = generatePasswords();

});


