import { getTechExperience } from "./workExperience.js"
import { getHomeDisplay } from "./homeDisplay.js"
import { getContactDisplay } from "./contactDisplay.js"
import { getAboutDisplay } from "./aboutDisplay.js"
const navEnum = {
    home: "Home",
    works: "Works",
    about: "About",
    contact: "Contact",
    current: "Home"
}
export const getCurrent = () => {
    return navEnum.current
}
export const setCurrent = (element) => {
    navEnum.current = element
    switch (element) {
        case "Home": getHomeDisplay()
            break;
        case "Works": getTechExperience()
            break;
        case "About": getAboutDisplay()
            break;
        case "Contact": getContactDisplay()
            break;
        default:
    }
}
export const navEnumAdd = () => {
    switch (navEnum.current) {
        case "Home": navEnum.current = "Works";
            break;
        case "Works": navEnum.current = "About"
            break;
        case "About": navEnum.current = "Contact"
            break;
        case "Contact": navEnum.current = "Home"
            break;
        default:
    }
    setCurrent(navEnum.current)
}
export const navEnumMinus = () => {
    switch (navEnum.current) {
        case "Home": navEnum.current = "Contact";
            break;
        case "Works": navEnum.current = "Home"
            break;
        case "About": navEnum.current = "Works"
            break;
        case "Contact": navEnum.current = "About"
            break;
        default:
    }
    setCurrent(navEnum.current)
}
