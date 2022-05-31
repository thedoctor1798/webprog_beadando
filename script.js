function Cat(type, name, color, age, gender, info){
    this.type = type,
    this.name = name,
    this.color = color,
    this.age = age,
    this.gender = gender,
    this.info = info
}

function FormElement(elementType, label, id, typeAttribute){
    this.elementType = elementType,
    this.id = id,
    this.label = label,
    this.typeAttribute = typeAttribute
}

let cats = [
    new Cat("Abeszin", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica"),
    new Cat("Abeszin", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica"),
    new Cat("Abeszin", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica"),
    new Cat("Abeszin", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica")
]

let addNewFormElements =[
    new FormElement("input","Fajta","type","text"),
    new FormElement("input","Név","name","text"),
    new FormElement("input","Szín","color","text"),
    new FormElement("input","Kor","age","number"),
    new FormElement("select","Nem","gender", ""),
    new FormElement("textarea","Leírás","info","")
]

addNewFormElements.find((element)=>{
    if(element.elementType == "select"){
        element.options = ["Kandúr", "Nőstény"]

    }
})

console.log(addNewFormElements)

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

    btnDiv.addEventListener("click", displayAddNewForm)
}

function displayAddNewForm(){
    let position = document.getElementById("main")
    let popupBackground = document.createElement("div");
    let popup = document.createElement("div");
    let closePopupDiv = document.createElement("div");
    let addNewForm = document.createElement("form");
    let closeImg = document.createElement("img");
    let buttonContainer = document.createElement("div")
    let btn = document.createElement("button")

    position.appendChild(popupBackground)
    popupBackground.appendChild(popup)
    closePopupDiv.appendChild(closeImg)
    popup.appendChild(closePopupDiv)
    popup.appendChild(addNewForm)
    

    popupBackground.setAttribute("id", "popupBackground")
    popup.setAttribute("class", "popup")
    closePopupDiv.setAttribute("id", "closePopup")
    closeImg.setAttribute("src", "./assets/plus.png")
    addNewForm.setAttribute("id", "addNewForm")

    closePopupDiv.addEventListener("click", closePopup)

    for(let formInput of addNewFormElements){
        let formContainer = document.createElement("div");
        let label = document.createElement("label")
        let labelText = document.createTextNode(formInput.label)

        label.appendChild(labelText)
        formContainer.appendChild(label)
        addNewForm.appendChild(formContainer)

        formContainer.setAttribute("class", "formContainer")
        label.setAttribute("for", formInput.id)

        if(formInput.elementType == "select"){

            let select = document.createElement(formInput.elementType);
            formContainer.appendChild(select)

            for(let o of formInput.options){

                let option = document.createElement("option")
                let optionText = document.createTextNode(o)

                option.appendChild(optionText)
                select.appendChild(option)
            }
        }
        else{
            let input = document.createElement(formInput.elementType);
            input.setAttribute("id", formInput.id)
            input.setAttribute("type", formInput.typeAttribute)

            formContainer.appendChild(input)
        }
    }

    buttonContainer.setAttribute("class", "buttonContainer")

    btn.appendChild(document.createTextNode("Küldés"))
    buttonContainer.appendChild(btn)
    addNewForm.appendChild(buttonContainer)
}

function setPicture(imgElement){
        fetch("https://cataas.com/cat").then(response => {
        response.blob().then(blobResponse => {
            let data = blobResponse;
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

function closePopup(){
    let popupPosition = document.getElementById("popupBackground")
    let popupParent = popupPosition.parentElement;

    popupParent.removeChild(popupPosition)
}