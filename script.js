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
fetch("https://cataas.com/cat").then(response => {
  response.blob().then(blobResponse => {
    data = blobResponse;
    const urlCreator = window.URL || window.webkitURL;
    document.getElementById('myImage').src = urlCreator.createObjectURL(data);
  })

});

console.log(cats)

function displayCats(catArray){
    
}