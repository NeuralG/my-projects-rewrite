//CURRENT DATE

const currentDateEl = document.getElementById("currentDate")

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    currentDateEl.innerText = "Şuanki saat:  " + clockStr;
}

updateTime()
setInterval(updateTime, 1000)

//LOCAL VIEW COUNT

const userViewCountEl = document.getElementById("userViewCount")
let userViewCount = localStorage.getItem("viewCount");

if (userViewCount){
    userViewCount++
    localStorage.setItem("viewCount", userViewCount);
}else{
    localStorage.setItem("viewCount", 0)
}

userViewCountEl.innerText = "Local görüntülenme sayısı: " + userViewCount
