let defaultOptions = {
    min:6,
    max:12,
    caseSensitive:true,
    numbersIncluded:true,
    howManyNumbers:2,
    specialCharsIncluded:false,
    howManySpecialChars:1,
}

module.exports = (options = {}) => {
    try{
        options = Object.assign({...defaultOptions},options);

        let result = "";

        const min = parseInt(options["min"],10);
        const max = parseInt(options["max"],10);
        const length = Math.floor( Math.random() * (max - min + 1)) + min;

        const caseSensitive = (options["caseSensitive"]==="true" || options["caseSensitive"]===true) ? true : false;
        const letters = "abcdefghijklmnopqrstuvwxyz";

        const numbersIncluded = (options["numbersIncluded"]==="true" || options["numbersIncluded"]===true) ? true : false;
        const howManyNumbers = parseInt(options["howManyNumbers"],10);
    
        const specialCharsIncluded = (options["specialCharsIncluded"]==="true" || options["specialCharsIncluded"]===true) ? true : false;
        const specialChars = ";,/?:@&=+$-_.!~*'()#"
        let howManySpecialChars = parseInt(options["howManySpecialChars"],10);

        for(let i = 0; i < length; i++){
            // FIRST NUMBERS
            if(i<howManyNumbers && numbersIncluded){
                result = result.concat(Math.floor( Math.random() * 10 ));
            } else if(specialCharsIncluded && howManySpecialChars>0){
            // THEN SPECIAL CHARACTERS
                let char = specialChars[ Math.floor( Math.random() * specialChars.length ) ];
                result = result.concat(char);
                howManySpecialChars--;

            } else {
            // THEN LETTERS
                let letter = letters[ Math.floor( Math.random() * letters.length) ];
                if(caseSensitive && Math.floor( Math.random() * 2) === 1)
                    letter = letter.toUpperCase(); 
                result = result.concat(letter);

            }
        }

        const arr = result.split("");

        // SHUFFLE CHARACTERS
        for(let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        result = arr.join("");
        return result;
    }catch(err){
        return err;
    }
}