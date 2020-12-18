const flankText = document.getElementById('flank')
const about = document.querySelector('.about')
const about_flank_big = document.querySelector('.about_flank_big')

flankText.addEventListener('mousedown',showPage)
flankText.addEventListener('touchstart',showPage)
flankText.addEventListener('touchend',up)

flankText.addEventListener('mouseup',up)

function showPage(e){

    about.classList.remove("hidden")
    about.classList.add("visible")
    about_flank_big.classList.add("about_flank_big_animated")
}
function up(e){
    about.classList.remove("visible")
    about.classList.add("hidden")
    about_flank_big.classList.remove("about_flank_big_animated")

}



// second layer

const peach = document.querySelector(".peach")
const second_layer = document.querySelector(".second_layer")
let whichNextParagraphStillHidden = 2
second_layer.addEventListener("click",showNextText)
function showNextText(e){
    if(!peach.classList.contains("hidden"))peach.classList.add("hidden")
    if(whichNextParagraphStillHidden ===6) return
    document.querySelector(`.p${whichNextParagraphStillHidden}`).classList.remove("hidden")
    whichNextParagraphStillHidden+=1
}