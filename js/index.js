const wrapper = document.querySelector(".wrapper"),
generatorBtn = wrapper.querySelector(".form button"),
result = wrapper.querySelector(".qr-code"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img");


generatorBtn.addEventListener("click",() => {
    let qrValue = qrInput.value;
    if(!qrValue) return; // return empty
    generatorBtn.innerText = "Genrating QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImg.addEventListener("load", () => { // once QR code img loaded
        wrapper.classList.add("active");
        generatorBtn.innerText = "Generate QR Code";
    })
    result.style.transition = "opacity 1.5s ease";
    result.classList.remove("fade"); 
    result.classList.remove("visually-hidden")
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value){
        wrapper.classList.remove("active");
        result.style.transition = "none";
        result.classList.add("fade"); 
        result.classList.remove("visually-hidden")
    }
})

