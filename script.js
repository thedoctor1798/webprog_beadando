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

adoptedCats = []

let cats = [
    new Cat("Abeszin1", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica"),
    new Cat("Abeszin2", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica"),
    new Cat("Abeszin3", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica"),
    new Cat("Abeszin4", "Abigél", "abe színű", 5, "Nőstény", "Gyerek szerető, bújós kislány cica")
]

let addNewFormElements =[
    new FormElement("input","Fajta","type","text"),
    new FormElement("input","Név","name","text"),
    new FormElement("input","Szín","color","text"),
    new FormElement("input","Kor","age","number"),
    new FormElement("select","Nem","gender", ""),
    new FormElement("textarea","Leírás","info","")
]

let adoptFormElements =[
    new FormElement("input","Név","ownerName","text"),
    new FormElement("input","Telefonszám","phone","text"),
    new FormElement("input","Születési dátum","birthDate","date"),
]

addNewFormElements.find((element)=>{
    if(element.elementType == "select"){
        element.options = ["Kandúr", "Nőstény"]

    }
})

console.log(addNewFormElements)

switchToMain()

for(let cat of cats){
    displayCat(cat)
}

displayPlusButton()


function displayCat(cat){

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

    btn.addEventListener("click", function(e){
        createNewForm("adoptNewForm", adoptFormElements, function(){adoptCat(e)}, e)
        console.log(e)
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

    btnDiv.addEventListener("click", function(){
        createNewForm("addNewForm", addNewFormElements, addNew)
        document.getElementById("cats").setAttribute("class", "blur")
    })
}

function displayPopup(contentForm){
    let position = document.getElementById("main")
    let popupBackground = document.createElement("div");
    let popup = document.createElement("div");
    let closePopupDiv = document.createElement("div");
    
    let closeImg = document.createElement("img");
    
    position.appendChild(popupBackground)
    popupBackground.appendChild(popup)
    closePopupDiv.appendChild(closeImg)
    popup.appendChild(closePopupDiv)
    popup.appendChild(contentForm)
    
    popupBackground.setAttribute("id", "popupBackground")
    popup.setAttribute("class", "popup")
    closePopupDiv.setAttribute("id", "closePopup")
    closeImg.setAttribute("src", "./assets/plus.png")
    
    closePopupDiv.addEventListener("click", closePopup)
    
}

function createNewForm(formId, formElements, submitFunction, startEvent){

    let newForm = document.createElement("form");
    // let buttonContainer = document.createElement("div")
    // let btn = document.createElement("button")

    newForm.setAttribute("id", formId)
    newForm.addEventListener("submit", function(e){
        e.preventDefault()
    })

    displayPopup(newForm)

    for(let formInput of formElements){
        let formContainer = document.createElement("div");
        let label = document.createElement("label")
        let labelText = document.createTextNode(formInput.label)

        label.appendChild(labelText)
        formContainer.appendChild(label)
        newForm.appendChild(formContainer)

        formContainer.setAttribute("class", "formContainer")
        label.setAttribute("for", formInput.id)

        if(formInput.elementType == "select"){

            let select = document.createElement(formInput.elementType);

            select.setAttribute("id", formInput.id)

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

    createFormButton(submitFunction, "Küldés", newForm)

    // if(startEvent){
    //     createFormButton(function(){
    //         submitFunction(startEvent)
    //     }, "Küldés", newForm)
    // }
    // else{
    //     createFormButton(submitFunction, "Küldés", newForm)
    // }
    
    /*buttonContainer.setAttribute("class", "buttonContainer")

    btn.appendChild(document.createTextNode("Küldés"))
    buttonContainer.appendChild(btn)
    addNewForm.appendChild(buttonContainer)

    btn.addEventListener("click", addNew)*/
}

function displayAdoptForm(){
    
    createFormButton(function(){alert("click")}, "Click")
}

function createFormButton(callback, text, position){

    let buttonContainer = document.createElement("div")
    let btn = document.createElement("button")

    buttonContainer.setAttribute("class", "buttonContainer")

    btn.appendChild(document.createTextNode(text))
    buttonContainer.appendChild(btn)

    btn.addEventListener("click", callback)

    position.appendChild(buttonContainer)
}

function setPicture(imgElement){
        fetch("https://cataas.com/cat")
        .then(response => {
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
    
    if(document.getElementById("addNewForm")){
        let name = document.getElementById("name").value;
        let type = document.getElementById("type").value; 
        let color = document.getElementById("color").value; 
        let age = document.getElementById("age").value;
        let gender = document.getElementById("gender").value; 
        let info = document.getElementById("info").value;

        let cat = new Cat (name, type, color, age, gender, info)

        let isFormValid = 
            validateEmptyInput(name) && validateEmptyInput(type) && validateEmptyInput(color) &&
            validateEmptyInput(age) && validateEmptyInput(info)

        if(isFormValid){
            cats.push(cat);
            console.log(cats)
            displayCat(cat)
            closePopup()
        }
        else{
            alert("Tölts ki minden input mezőt!!!")
        }
            
    }
    
}

function adoptCat(eventObject){
    
    let catDiv = eventObject.target.parentElement.parentElement
    let catsDiv = catDiv.parentElement;
    let index = Array.from(catsDiv.children).indexOf(catDiv)
    let adoptedCat = cats[index]
    
    adoptedCat.ownerName = document.getElementById("ownerName").value
    adoptedCat.ownerPhone = document.getElementById("phone").value
    adoptedCat.ownerBirth = document.getElementById("birthDate").value

    adoptedCats.push(adoptedCat)
    console.log(adoptedCats)

    cats.splice(index, 1)
    console.log(cats)

    catsDiv.removeChild(catDiv)
    closePopup()
}

function closePopup(){
    let popupPosition = document.getElementById("popupBackground")
    let popupParent = popupPosition.parentElement;

    document.getElementById("cats").removeAttribute("class")

    popupParent.removeChild(popupPosition)
}

function validateEmptyInput(input){
    return (input=="")?false:true;
}
