const ceaserChiper = (chiper, text) => {
    return (
        text.split("").map((char) => {
            if (char !== " ") {
                if (char.charCodeAt(0) > 96) {
                    let charCode = char.charCodeAt(0) - 97
                    charCode = (charCode + chiper) % 26
                    charCode  = charCode + 97
                    return(String.fromCharCode(charCode))
                } else {
                    let charCode = char.charCodeAt(0) - 65
                    charCode = (charCode + chiper) % 26
                    charCode  = charCode + 65
                    return(String.fromCharCode(charCode))                    
                }
            } else {
                return " "
            }
        }).join("")
    )
}

export default ceaserChiper