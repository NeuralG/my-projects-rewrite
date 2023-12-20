//WEBSITE DATABASES' CONFIG

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, set} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-3cdb5-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const webInDB = ref(database, "Sitelerim")
const webInDB2 = ref(database, "Sitelerim2")

const myPass = "umcumc1."
const myName = "NeuralG"

const userEl = document.getElementById("username")
const passEl = document.getElementById("password") 
const webNameEl = document.getElementById("website-name")
const webLinkEl = document.getElementById("website")
const isMyProjectEl = document.getElementById("is-my-project")

const buttonEl = document.getElementById("button")
const webListEl = document.getElementById("web-list")
const webListEl2 = document.getElementById("web-list2")

//WEBSITE DATABASE 1
let databaseLengthFirst = 0

onValue(webInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.values(snapshot.val())
        itemsArray = itemsArray.reverse() //NEWEST FİRST :3
        webListEl.innerHTML = ""
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let myObject = currentItem.split(",")
            let currentName = myObject[0]
            let currentLink = myObject[1]
            webListEl.innerHTML += `<li>
            <a class="webLink" href="https://${currentLink}" target="_blank">${currentName}
            <iframe sandbox="allow-scripts" class="web-link-popup" id="web-link${i}" src="https://${currentLink}"></iframe>
            </a>
            </li>`
        }
        databaseLengthFirst = itemsArray.length
    } else {
        webListEl.innerHTML = "No items here... yet"
    }
})

//WEBSITE DATABASE 2

onValue(webInDB2, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.values(snapshot.val())
        webListEl2.innerHTML = ""
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let myObject = currentItem.split(",")
            let currentName = myObject[0]
            let currentLink = myObject[1]
            webListEl2.innerHTML += `<li>
            <a class="webLink" href="https://${currentLink}" target="_blank">${currentName}
            <iframe sandbox="allow-scripts" class="web-link-popup" id="web-link${i+databaseLengthFirst}" src="https://${currentLink}"></iframe>
            </a>
            </li>`
        }    
    } else {
        webListEl2.innerHTML = "No items here... yet"
    }
})

//WEBSITES DATABASES PUSH

function clearAll(){
    userEl.value = ""
    passEl.value = ""
    webNameEl.value = ""
    webLinkEl.value = ""
    isMyProjectEl = ""
}

buttonEl.addEventListener("click", function(){
    let name = userEl.value 
    let pass = passEl.value 
    let webName = webNameEl.value
    let webLink = webLinkEl.value
    let isMyProject = isMyProjectEl.checked    

    if (name == myName && pass == myPass && webName && webLink){
        if(isMyProject){
            let webData = [webName,webLink]
            let webDataStringed = webData.toString()
            push(webInDB,webDataStringed)
            clearAll()
        }
        else{
            let webData = [webName,webLink]
            let webDataStringed = webData.toString()
            push(webInDB2,webDataStringed)
            clearAll()
        }
    }
    else {
        if(name == myName && pass == myPass){
            alert("Bütün kutucukları doldurup tekrar deneyiniz.")
        }else{
            alert("Bilgileriniz yanlıştır tekrar deneyiniz.")
        }
    }
})

//GLOBAL VIEW COUNT 

const viewCountInDB = ref(database,"ViewCountResume")
const viewCountEl = document.getElementById("viewCount")

onValue(viewCountInDB, function(snapshot){
    let myValue = Object.values(snapshot.val())[0]
    myValue += 1

    function writeViewCount(myValue) {
        set(viewCountInDB, {
            ViewCount: myValue,
        });
}

    viewCountEl.innerText = `Toplam görüntülenme sayısı: ${myValue}`

    writeViewCount(myValue)
},{
    onlyOnce: true
})

//HOVER PREVIEW 

let widthBrowser = window.innerWidth //check if its desktop or not

if (widthBrowser > 992){
    setTimeout(()=>{
        const webLinks = document.getElementsByClassName("webLink")
        for (let i=0;i<webLinks.length;i++){
            webLinks[i].addEventListener("mouseover", ()=>{
            document.getElementById(`web-link${i}`).style.display = "inline"
        })
            webLinks[i].addEventListener("mouseout", ()=>{
            document.getElementById(`web-link${i}`).style.display = "none"
            })
    
    
    }
    },1000)
}
else{
    for (frame in window.frames){
        frame.src = "none"
    }
}

