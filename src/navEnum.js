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
}
