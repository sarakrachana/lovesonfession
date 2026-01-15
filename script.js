const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Yayyy I love you";
    gif.src="https://i.pinimg.com/originals/54/af/a0/54afa0c1cf345d3b30c21802e73cf2aa.gif"
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth-noBtnRect.width;
    const maxY = window.innerHeight-noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left= randomX + "px";
    noBtn.style.top= randomY + "px";
})
