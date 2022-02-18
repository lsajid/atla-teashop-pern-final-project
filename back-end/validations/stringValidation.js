const validateSpace = (tea) => {
    if(!tea.image){
        tea.image = 'https://dummyimage.com/600x400/359a9c/f2f2f7.jpg&text=zuko+forgot+to+upload+an+image+:+('
    }
    let array = tea.name.split(" ");
    let upperCaseWord = array.map((word) => {
        if(word.length > 2){
            return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
        }else{
            return word.toLowerCase();
        }
    }).join(" ");
    return upperCaseWord;
}

module.exports = validateSpace;