const header = document.querySelector("header")
const secondLayer = document.querySelector(".second_layer")
const contactLayer = document.querySelector(".contact")

document.addEventListener("scroll",setFixedPosition)
let PHeight = screen.height
const layers = [header,secondLayer,contactLayer]
const TotalLayers = layers.length
function setFixedPosition(e){
    let scrollPosition = window.pageYOffset
    let whichLayer= 1 ;
    console.log(scrollPosition);
    console.log(PHeight);
    if(scrollPosition >= PHeight){
        PHeight *= 2
        layers[whichLayer].style.position = 'sticky'
        layers[whichLayer].style.top = 0
        whichLayer++
        if(whichLayer >= TotalLayers) return
    }
    console.log(layers[whichLayer]);
}



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
        document.querySelector(`.p${whichNextParagraphStillHidden-1}_img`).classList.add("hidden")
    }

    whichNextParagraphStillHidden+=1
}