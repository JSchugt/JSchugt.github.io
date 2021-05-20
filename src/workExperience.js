const workObject = [{
    company: "System Srvices Enterprises Inc",
    location: "St. Louis, MO",
    timeFrame: "May 2019 - Dec 2020",
    title: "Boeing P8 VMT Developer",
    responsibilities: ["Worked on the P8 Poseidon program in radar and sensors simulations", "Extensive work in version control and customer specific repos"],
    achieveMents: [""]
}, {
    company: "Austin Peay State University",
    location: "Clarksville, TN",
    timeFrame: "Sep 2018 - May 2019",
    title: "Student Tutor Level II",
    responsibilities: ["Tutored students in group sessions and one-on-one, training 10 students weekly, in C++, Java, Security, and Database Management"],
    achieveMents: [""]
}]

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
<br>        weekly, in C++, Java, Security, and Database Management
<br>
</p>
`

export const getTechExperience = () => {
    let text = techExp.replace(/\s/g, '&nbsp;')

    document.getElementById("main-display").innerHTML = text
}

