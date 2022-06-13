/*
Here creating the constructor for the cats object
*/
function Cat(name, type, color, age, gender, info){
    this.name = name,
    this.type = type,
    this.color = color,
    this.age = age,
    this.gender = gender,
    this.info = info
}
/*
This is the constructor for the form elements
We set here the element type(input, select, textarea etc.),
the label of the input, the id for the input and the attribute type of it.
*/
function FormElement(elementType, label, id, typeAttribute){
    this.elementType = elementType,
    this.id = id,
    this.label = label,
    this.typeAttribute = typeAttribute
}

adoptedCats = []    //This is an empty array for the adopted cats
/*
This is an array the default cats are stored. The new cats will be here as well.
*/
let cats = [
    new Cat("Flórián","Perzsa", "fehér", 5, "Kandúr", "Barátságos, játékos, szereti a társoságot, szereti a kacsahúst"),
    new Cat("Bendegúz", "Sziámi", "fekete/barna", 3, "Kandúr", "Lustálkodó, hízelgő, mindig éhes"),
    new Cat("Hanna", "Bengáli", "szürke/fekete", 7, "Nőstény", "Játékos, karmolászós ezért gyereknek nem ke odaadni"),
    new Cat("Klementina", "Skót lógófülü", "világosszürke", 2, "Nőstény", "Barátságos, bujós, szeret enni és hizelegni"),
    new Cat("Kleo", "Szfinx", "rózsaszín/barna", 5, "Nőstény", " Mogorva arckifejezése ellenére kedves, barátságos, játekos, hal a kedvence neki"),
    new Cat("Lord", "Tacskomacska", "sötétbarna", 1, "Kandúr", "Marhahús kedvelő, szeret futni, barátságos"),
    new Cat("Bogyó", "Brit rövidszőrű", "világosszürke", 2, "Nőstény", "Halacskás kaja, lustálkodó"),
    new Cat("Bódi", "Himalája macska", "fehér", 6, "kandúr", "játékos, gyerekszerető, bujós")
]
/*
This is the array for the addNew form element. This is used for generating the add new cat form.
*/
let addNewFormElements =[
    new FormElement("input","Név","name","text"),
    new FormElement("input","Fajta","type","text"),
    new FormElement("input","Szín","color","text"),
    new FormElement("input","Kor","age","number"),
    new FormElement("select","Nem","gender", ""),
    new FormElement("textarea","Leírás","info","")
]
/*
Same as the other one but for the adoptation form.
*/
let adoptFormElements =[
    new FormElement("input","Név","ownerName","text"),
    new FormElement("input","Telefonszám","phone","text"),
    new FormElement("input","Születési dátum","birthDate","date"),
]
/*
Whith this we choose the select type input and set the options for it.
*/
addNewFormElements.find((element)=>{
    if(element.elementType == "select"){
        element.options = ["Kandúr", "Nőstény"]
    }
})

loadMain()  //Load the site first.

for(let cat of cats){   //Display the cats for the first time from the cats array.
    displayCat(cat)
}

displayPlusButton() ///Add the plus button wich can add more cats to the site.

/*
The displayCat function is used for displaying a cat on the site without reloading it.
*/
function displayCat(cat){

    let catsDiv = document.getElementById("cats")   //Get the outer div element.

    //Create the elemnts for one cat
    let catDiv = document.createElement("div");
    let imageContDiv = document.createElement("div");
    let infoContDiv = document.createElement("div");
    let catImg = document.createElement("img");
    let btnContDiv = document.createElement("div");
    let btn = document.createElement("button");
    let btnText = document.createTextNode("Adoptálás")

    setPicture(catImg)  //Add the random cat picture to the catImg element.
    imageContDiv.appendChild(catImg)

    //Set every element's attributes for the css.
    catDiv.setAttribute("class", "cat")
    imageContDiv.setAttribute("class", "imageContainer")
    infoContDiv.setAttribute("class", "infoContainer")
    btnContDiv.setAttribute("class", "buttonContainer")

    btn.appendChild(btnText)
    btnContDiv.appendChild(btn)
    
    //Add the event listener to the button. When the button is clicked call the adoptCat function and the background is blured.
    btn.addEventListener("click", function(e){
        document.getElementById("cats").setAttribute("class", "blur")
        document.getElementById("container").setAttribute("class", "blur")
        createNewForm("adoptNewForm", adoptFormElements, function(){adoptCat(e)}, e)
    })  

    catDiv.appendChild(imageContDiv)
    catDiv.appendChild(infoContDiv)
    catDiv.appendChild(btnContDiv)

    for(let c in cat){  // Witch a foreach we go trough the cat array.
        
        let titleText = document.createTextNode(getTitleByIndex(c))
        let infoText = document.createTextNode(cat[c])

        //This if is for the name label. If the titleText contains an "n" we don't add label to this row, 
        //but set the p element style.
        if(titleText.textContent == "n"){ 
            let pElement = document.createElement("p")

            pElement.setAttribute("style","font-weight:bold; text-align: center;width:100%")

            pElement.appendChild(infoText)

            infoContDiv.appendChild(pElement)
        }
        else{
            let h3element = document.createElement("h3")
            let pElement = document.createElement("p")
    
            h3element.appendChild(titleText)
            pElement.appendChild(infoText)
    
            infoContDiv.appendChild(h3element)
            infoContDiv.appendChild(pElement)
        }
    }

    catsDiv.appendChild(catDiv) //Add one cat to the outer div.
    
}
/*
This function creates the Title for the cats displayed on the page depends on the index.
*/
function getTitleByIndex(index){
    switch(index){
        case "name": return "n";
        case "type": return "Fajta: ";
        case "color": return "Szín: ";
        case "age": return "Kor: ";
        case "gender": return "Nem: ";
        case "info": return "Leírás:";
        default: return "Egyéb:";
    }
}
/*
The displayPlusButton function as the name suggests displays the plus button in the bottom left corner.
*/
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

    //Set the event listener to the img. When clicked creat a new form to add a new cat and blur the background.
    btnDiv.addEventListener("click", function(){
        createNewForm("addNewForm", addNewFormElements, addNew)
        document.getElementById("cats").setAttribute("class", "blur")
        document.getElementById("container").setAttribute("class", "blur")
    })
}

/*
This function handle the poup window creation. Just a blank popup window with a close "X" button.
*/
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
/*
This function generate the form elements into the popup. We can set the id for the form HTML element,
the elements of the form wich are defined in an array and the function wich runs when submit button is clicked.
*/
function createNewForm(formId, formElements, submitFunction){

    let newForm = document.createElement("form");

    newForm.setAttribute("id", formId)

    //Prevent the page reloading here when submit button clicked.
    newForm.addEventListener("submit", function(e){
        e.preventDefault()
    })

    displayPopup(newForm)   //Put the form in the poup window.

    for(let formInput of formElements){
        let formContainer = document.createElement("div");
        let label = document.createElement("label")
        let labelText = document.createTextNode(formInput.label)

        label.appendChild(labelText)
        formContainer.appendChild(label)
        newForm.appendChild(formContainer)

        formContainer.setAttribute("class", "formContainer")
        label.setAttribute("for", formInput.id)

        //This if is for the select type HTML element. If it's a select we generate the options with a foreach.
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
    createFormButton(submitFunction, "Küldés", newForm) //Create the button with the createFormButton function. 
}
/*
This funtion generate the button for the form window.
we can set the callback type, the text displayed on the button and the position.
Position means which item it contains.
*/
function createFormButton(callback, text, position){

    let buttonContainer = document.createElement("div")
    let btn = document.createElement("button")

    buttonContainer.setAttribute("class", "buttonContainer")

    btn.appendChild(document.createTextNode(text))
    buttonContainer.appendChild(btn)

    btn.addEventListener("click", callback)

    position.appendChild(buttonContainer)
}
/*
This function calls random cat pictures from a free API with 600*600 size
and set the image in the image imgElement.
In the fetch we prevent caching the pictures on page refresh.
*/
function setPicture(imgElement){
        fetch("https://cataas.com/cat?width=600&height=600",{cache: "no-cache"})    //Itt kell a linket átírni értelemszerűen az angol tudásodra támaszkodva
        .then(response => {
        response.blob().then(blobResponse => {
            let data = blobResponse;
            const urlCreator = window.URL || window.webkitURL;
            imgElement.src = urlCreator.createObjectURL(data);
        })
    });
}
/*
The loadMain function gets the main element from the HTML
and puts the outer div in it with "cats" id
*/
function loadMain(){
    let position = document.getElementById("main")
    let catsDiv = document.createElement("div")
    catsDiv.setAttribute("id", "cats")

    position.appendChild(catsDiv)

}
/*
Here can we read the data from the add new cat form and create a new cat in the cat array.
*/
function addNew(){
    
    if(document.getElementById("addNewForm")){
        let name = document.getElementById("name").value;
        let type = document.getElementById("type").value; 
        let color = document.getElementById("color").value; 
        let age = document.getElementById("age").value;
        let gender = document.getElementById("gender").value; 
        let info = document.getElementById("info").value;

        let cat = new Cat (name, type, color, age, gender, info)

        //This is the validation to prevent empty form inputs.
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
/*
This function handles cat adoptation. This will run when the adopt button clicked.
*/
function adoptCat(eventObject){
    
    let catDiv = eventObject.target.parentElement.parentElement //We go back with parenElement to the cats div where to delete the cat.
    let catsDiv = catDiv.parentElement;
    let index = Array.from(catsDiv.children).indexOf(catDiv)    //Search for the adopted cat index in the outer div.
    let adoptedCat = cats[index]    //Put the adopted cat into the array.

    //Read the data of the adopter from form.
    let ownerName = document.getElementById("ownerName").value
    let ownerPhone = document.getElementById("phone").value
    let ownerBirth = document.getElementById("birthDate").value

    let isFormValid = validateEmptyInput(ownerName) && validateEmptyInput(ownerPhone) && validateEmptyInput(ownerBirth)
    let isPhoneValid = validatePhoneNumber(ownerPhone)

    //This is the validation to prevent empty form field and wrong phone number style.
    if(isFormValid == false){
        alert("Töltsön ki minden mezőt!!!")
    }
    else if(isPhoneValid == false){
        alert("Hibás telefonszám!!!")
    }
    else{
        //Add the adopter's data.
        adoptedCat.ownerName = ownerName;
        adoptedCat.ownerPhone = ownerPhone;
        adoptedCat.ownerBirth = ownerBirth;

        adoptedCats.push(adoptedCat)    //Push to the adoptedCat array.
        console.log(adoptedCats)

        cats.splice(index, 1)   //Remove the adopted cat from the cats array.

        catsDiv.removeChild(catDiv) //Remove the cat from the website.
        closePopup()    //And close the popup at the end.
    }
}
/*
This function removes the popup from his parentElement and with this we close the form and removes the attribute wich cause the blur.
*/
function closePopup(){
    let popupPosition = document.getElementById("popupBackground")
    let popupParent = popupPosition.parentElement;

    document.getElementById("cats").removeAttribute("class")
    document.getElementById("container").removeAttribute("class")

    popupParent.removeChild(popupPosition)
}
/*
This two function is for validating the inputs. first is for prevent empty input and second is for prevent wrong phone number format.
*/
function validateEmptyInput(input){
    return (input=="")?false:true;
}
function validatePhoneNumber(input){
    let regex = /((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/
    return input.match(regex)?true:false;
}