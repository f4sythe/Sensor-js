// alert('test')
let pTag = document.getElementById('p')
let inputTag = document.getElementById('input')
// let curseWord = ("Shit", "shit", "Fuck", "fuck")
function show() {
    console.log(inputTag.value);
    // pTag.innerHTML = <span>${inputTag.value}</span>
      pTag.innerHTML = inputTag.value.replaceall("shit", "****")   
    //   pTag.replace("shit", "****")
    //   console.log(pTag.innerHTML.replace("shit", "****"));
      
      
    //   console.log(pTag.innerHTML.replace("fuck", "****"));
}

