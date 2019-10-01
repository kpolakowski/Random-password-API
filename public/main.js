const generate = () => {
    let url = "./api"
    const xhr = new XMLHttpRequest();

    let options = {
        min:document.getElementById("minLength").value,
        max:document.getElementById("maxLength").value,
        caseSensitive:document.getElementById("caseSensitive").checked,
        numbersIncluded:document.getElementById("numbersIncluded").checked || false,
        howManyNumbers:document.getElementById("howManyNumbers").value,
        specialCharsIncluded:document.getElementById("specialCharsIncluded").checked,
        howManySpecialChars:document.getElementById("howManySpecialChars").value
    }

    let params = []
    for(let prop in options){
        if(options[prop] || typeof(options[prop])==="boolean"){
            params.push([prop,options[prop]]);
        }
    }
    params = params.map(param => param.join("=")).join("&");

    url = [url,params].join("?");

    xhr.open('GET',url);

    xhr.responseType = 'json'

    xhr.onload = () => {
        const data = xhr.response;
        document.querySelector("#password").value = data.password;
    }

    xhr.send();
}

let copy = () =>{
    /* Get the text field */
  const copyText = document.getElementById("password");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
  if (window.getSelection) {window.getSelection().removeAllRanges();}
    else if (document.selection) {document.selection.empty();}
    const p = document.querySelector("div.password p");
    p.classList.add("visible")
    setTimeout(() => {
        p.classList.remove("visible");
    }, 2000);
}