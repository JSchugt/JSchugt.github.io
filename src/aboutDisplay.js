

export const getAboutDisplay = () => {
    let text = `
    <h2>What I've Been Doing</h2>
    <h3>Austing Peay State University</h3>
    <p>Starting off at APSU, I rememberd how much fun coding was from middle school
    <br>
    first learning QBasic and basic functionality of program development.
    <br>
    Starting off as a Computer Science major, working with C++ learning, about algorithms and
    <br>
    software design. After a year and wanting to add some challenges, I added a major in 
    <br>
    Information security. Taking courses in offensive security, risk management and ethics.
    </p>
    <h3>SSE INC</h3>
    <p>Since graduating from APSU in May of 2019, began working with SSE Inc in St. Louis, MO.
    <br>
    Working on real time simulation for the Boeing P8 crew trainer. This involved using C++,
    <br>
    Java and learning new skill sets. One skill set was learning to use Git for version control
    <br>
    along with company specific software. This experience, provided challenges, learning about 
    <br>
    the P8 Trainer how it's systems work. While providing code and going through rigorous
    <br> 
    peer review process.
    </p>
    `

    document.getElementById("main-display").innerHTML = text
    document.getElementById("pageTitle").innerHTML = "About"


}