import { getCurrent, navEnumMinus, navEnumAdd, setCurrent } from "./src/navEnum.js"
// import { getTechExperience } from "./src/workExperience.js"
import { getHomeDisplay } from "./src/homeDisplay.js"
const bodyListener = document.getElementById("main")
const l_nav_listener = document.getElementById("l-side-nav")

const liClick = (liId) => {
    console.log(document.getElementById(getCurrent()).classList !== null)
    if (liId !== getCurrent() && liId !== "side-nav" && !(document.getElementById(getCurrent()).classList === null)) {
        document.getElementById(getCurrent()).classList.remove("is-active")
        setCurrent(liId)
        document.getElementById(liId).classList.add("is-active")
    }
}


l_nav_listener.addEventListener("click", event => {
    console.log(event.target)
    liClick(event.target.id)
})
// let canScroll = true
// let scrollControler = null
// window.addEventListener("wheel", event => {
//     console.log(event, "wheel event")
//     var delta = (event.wheelDelta) ? -event.wheelDelta : event.detail * 20;
//     console.log(delta, canScroll)
//     if ((delta > 0 || delta < 0) && canScroll) {

//         if (event.wheelDeltaY < 0 && !event.ctrlKey) {
//             document.getElementById(getCurrent()).classList.remove("is-active")
//             navEnumAdd()
//             document.getElementById(getCurrent()).classList.add("is-active")
//         }
//         else if (event.wheelDeltaY > 0 && !event.ctrlKey) {
//             document.getElementById(getCurrent()).classList.remove("is-active")
//             navEnumMinus()
//             document.getElementById(getCurrent()).classList.add("is-active")
//         }
//         canScroll = false;
//         clearTimeout(scrollControler);
//         scrollControler = setTimeout(function () {
//             canScroll = true;
//         }, 800);
//     }
// })


const main = () => {
    getHomeDisplay()

}


main()