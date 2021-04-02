let userName = prompt("Adiniz: ")
let item = document.querySelector("span#myName")

/*ornek siteden farklı olarak sadece karakter,turkce karakter ve bosluk
 girilmesini gerektiren bir kısıtmala getirmek istedim.*/
const FORBIDDEN_CHARACTERS = new RegExp(/^[a-zA-Z/" "/"ığüşöçĞÜŞÖÇİ"]+$/)

if(FORBIDDEN_CHARACTERS.test(userName)){
    item.innerHTML = userName
}else{
    alert("Hatalı giriş")
    location.reload()
}

function showTime() {

    let date = new Date()
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let d = date.getDay();

    d == 1 ? d = "Pazartesi": 
    d == 2 ? d = "Salı" : 
    d == 3 ? d = "Çarşamba" : 
    d == 4 ? d = "Perşembe" : 
    d == 5 ? d = "Cuma":
    d == 6 ? d = "Cumartesi":
    d == 7 ? d = "Pazar" : null

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = `${h}:${m}:${s} ${d}`
    document.querySelector("div#myClock").innerHTML = time
    setTimeout(showTime,1000)

}

showTime()
