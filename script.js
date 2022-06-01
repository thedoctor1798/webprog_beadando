html, body{
    font-family: Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
}
html{
    
}
#cats{
    width: 100%;

    padding: 50px; /*Lajosnak nem tetszett a távolság*/
    box-sizing: border-box;
    
    margin: auto;

    display: flex; /*Itt volt a csavar*/
    justify-content: space-between;
    flex-wrap: wrap;
}
.cat{
    display: inline-block;
    width: 300px;
    height: 600px;
    
    border: 1px solid grey;
    border-radius: 5px;
    margin: 20px;

    box-shadow: 0px 0px 8px;
    
}

.imageContainer{
    box-sizing: border-box;
    width: 300px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
img{
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    display: block;
}
.infoContainer{
    padding: 20px;
}
.infoContainer h3, .infoContainer p{
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
    margin: 5px 0;
} 
.infoContainer h3{
    font-weight: bold;
    color: darkblue;
}

.buttonContainer{
    width: 100%;
}
.buttonContainer button{
    margin: auto;
    display: block;
    padding: 8px;
    border: 1px solid white ;
    border-radius: 10px;
    background-color: royalblue;
    color: white;
}
.buttonContainer button:hover{
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 0px 8px;
}   
#addNewContainer{
    display: flex;
    width: 60px;
    height: 60px;
    padding: 10px;
    border: 1px solid gray;
    background-color: white;
    border-radius: 40px;
    padding: 0;
    margin: 0;
    position: fixed;
    right: 40px;
    bottom: 40px;

    justify-content: center;
    align-items: center;

    box-shadow: 0 0 8px;
    cursor: pointer;
}
#addNewContainer:hover{
    transform: scale(1.05);
}
#addNewButton{
    width: 60%;
    height: 60%
}
.formContainer label{
    width: 30%;
    display: inline-block;
}
.formContainer input, .formContainer select, .formContainer option, .formContainer textarea{
    width: 65%;
    display: inline-block;
}
.formContainer textarea{
    height: 25px;
    resize: vertical;
}
.formContainer{
    padding: 10px 20px;
    box-sizing: border-box;
}

#addNewForm{
    padding: 10px;
}

#closePopup{
    width: 15px;
    height: 15px;
    position: absolute;

    top: 10px;
    right: 10px;

    cursor: pointer;
}

/*Lali Shadow*/

#closePopup img{
    transform: rotate(45deg);
}

#popupBackground{
    z-index: 100;
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
    top:0;
    left: 0;

    
  }
  .popup{
    width: 400px;
    /*height: 150px;*/
    background-color: white;
    box-shadow: 0 0 8px;
    position: absolute;
    margin: auto;
    padding: 20px 0;
    border-radius: 10px;
  }

  .blur{
    filter: blur(4px);
  }