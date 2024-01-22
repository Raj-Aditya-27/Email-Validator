let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "email": "akshaykumar@codewithharry.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "codewithharry.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

let submit = document.getElementById('submitBtn');
submit.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    document.getElementById('resultContent').innerHTML = `<img width="123" src="image/loading.svg" alt="loadingImage">`
    // let key = "ema_live_ITkV5Pqq40WNdMLdjqMZlNcb4AEBrNvWiSFd1MYE"
    // let email = document.getElementById("email").value 
    // let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    // let res = await fetch(url)
    // let result = await res.json()
    // let str = ``
    // for (key of Object.keys(result)) {
    //     if(result[key] !== "" && result[key]!== " "){ 
    //         str = str + `<div>${key}: ${result[key]}</div>`
    //     }
    // }

    // console.log(str)
    // resultContent.innerHTML = str
})