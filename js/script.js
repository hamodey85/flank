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
const secondLayer = document.querySelector(".second_layer")
const contactLayer = document.querySelector(".contact")
let whichNextParagraphStillHidden = 2
let isNextLayerOn = false
secondLayer.addEventListener("click",showNextText)
function showNextText(e){
    document.querySelector(`.p${whichNextParagraphStillHidden}`).classList.remove("hidden")
    if(!peach.classList.contains("hidden")){

        peach.classList.add("hidden")
        document.querySelector(".tab_that").classList.add("hidden")
    }
    if(whichNextParagraphStillHidden ===6) {
        if(isNextLayerOn) return
        contactLayer.classList.remove("displayNone")
        isNextLayerOn = true
    return
    }
    document.querySelector(`.p${whichNextParagraphStillHidden}`).classList.remove("hidden")
    if(whichNextParagraphStillHidden >= 2 || whichNextParagraphStillHidden <=5 ){
        console.log(whichNextParagraphStillHidden);
        console.log(`.p${whichNextParagraphStillHidden-1}_img`);
        document.querySelector(`.p${whichNextParagraphStillHidden-1}_img`).classList.add("hidden")
    }

    whichNextParagraphStillHidden+=1
}