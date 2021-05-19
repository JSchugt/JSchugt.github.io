let currentLi = "home"


const bodyListener = document.getElementById("main")

const liClick = (liId) => {
    console.log(document.getElementById(currentLi).classList !== null)
    if (liId !== currentLi && liId !== "side-nav" && document.getElementById(currentLi).classList !== null) {
        document.getElementById(currentLi).classList.remove("is-active")
        currentLi = liId
        document.getElementById(liId).classList.add("is-active")
    }
}
bodyListener.addEventListener("click", event => {
    console.log(event.target)
    liClick(event.target.id)
})


const techExp = `
<p>
<br>System Srvices Enterprises Inc            St. Louis, MO           May 2019 - Dec 2020
<br>   Boeing P8 VMT Developer
<br>    -	Worked on the P8 Poseidon program in radar and sensors simulations
<br>    -	Extensive work in version control and customer specific repos
<br>
<br>Austin Peay State University               Clarksville, TN         Sep 2018 - May 2019
<br>   Student Tutor Level II
<br>    -	Tutored students in group sessions and one-on-one, training 10 students 
<br>        per-week, in C++, Java, Security, and Database Management
<br>
</p>
`

const getTechExperience = () => {
    let text = techExp.replace(/\s/g, '&nbsp;')
    document.getElementById("tech-experience").innerHTML = text
}
const main = () => {
    getTechExperience()

}

main()