let data;

function Cat(type, name, color, age, gender, info){
    this.type = type,
    this.name = name,
    this.color = color,
    this.age = age,
    this.gender = gender,
    this.info = info
}

let cats = [
    new Cat("Abeszin", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica"),
    new Cat("Abeszin", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica"),
    new Cat("Abeszin", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica"),
    new Cat("Abeszin", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica")
]


switchToMain()
displayCats(cats)
function displayCats(catsArray){
    for(let cat of catsArray){

        let catsDiv = document.getElementById("cats")

        let catDiv = document.createElement("div");
        let imageContDiv = document.createElement("div");
        let infoContDiv = document.createElement("div");
        let catImg = document.createElement("img");
        let btnContDiv = document.createElement("div");
        let btn = document.createElement("button");
        let btnText = document.createTextNode("Adoptálás")

        setPicture(catImg)
        imageContDiv.appendChild(catImg)

        catDiv.setAttribute("class", "cat")
        imageContDiv.setAttribute("class", "imageContainer")
        infoContDiv.setAttribute("class", "infoContainer")
        btnContDiv.setAttribute("class", "buttonContainer")

        btn.appendChild(btnText)
        btnContDiv.appendChild(btn)

        btn.addEventListener("click", function(){
            alert("Click")
        })  

        catDiv.appendChild(imageContDiv)
        catDiv.appendChild(infoContDiv)
        catDiv.appendChild(btnContDiv)

        for(let c in cat){
            
            let titleText = document.createTextNode(getTitleByIndex(c))
            let infoText = document.createTextNode(cat[c])

            let h3element = document.createElement("h3")
            let pElement = document.createElement("p")

            h3element.appendChild(titleText)
            pElement.appendChild(infoText)

            infoContDiv.appendChild(h3element)
            infoContDiv.appendChild(pElement)
        }



        catsDiv.appendChild(catDiv)
    }

    displayPlusButton()
}

function getTitleByIndex(index){
    switch(index){
        case "type": return "Fajta: ";
        case "name": return "Név: ";
        case "color": return "Szín: ";
        case "age": return "Kor: ";
        case "gender": return "Nem: ";
        case "info": return "Leírás:";
        default: return "Egyéb:";
    }
}

function displayPlusButton(){
    let position = document.getElementsByTagName("body")[0]
    let aside = document.createElement("aside")
    let btnDiv = document.createElement("div")
    let btnImg = document.createElement("img")

    btnDiv.setAttribute("id", "addNewContainer")
    btnImg.setAttribute("id", "addNewButton")
    btnImg.setAttribute("alt", "plusBtn")
    btnImg.setAttribute("src", "./assets/plus.png")

    btnDiv.appendChild(btnImg)
    aside.appendChild(btnDiv)
    position.appendChild(aside)

    btnDiv.addEventListener("click", switchToAddNew)
}

function setPicture(imgElement){
        fetch("https://cataas.com/cat").then(response => {
        response.blob().then(blobResponse => {
            data = blobResponse;
            const urlCreator = window.URL || window.webkitURL;
            imgElement.src = urlCreator.createObjectURL(data);
        })
    });
}

function switchToMain(){
    let position = document.getElementById("main")
    /*for(let element of position.children){
        if(element.tagName == "FORM"){
            continue;
        }
        position.removeChild(element)
    }*/
    let catsDiv = document.createElement("div")
    catsDiv.setAttribute("id", "cats")

    position.appendChild(catsDiv)

}
function switchToAddNew(){
    
    let text = document.createTextNode("Ide jön a form")

    let position = document.getElementById("main")
    let addNewDiv = document.createElement("div")

    /*for(let element of position.children){
        console.log(element)
        position.removeChild(element)
    }*/

    addNewDiv.setAttribute("id", "addNew")

    addNewDiv.appendChild(text)
    position.appendChild(addNewDiv)
}

function addNew(){
    cats.push(new Cat("Abeszin", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica"))
    switchToMain()
    displayCats(cats)
}   