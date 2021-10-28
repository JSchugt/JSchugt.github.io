

export const getHomeDisplay = () => {
    let text = `
    <h2>What makes coding fun is the puzzles you will solve.</h2>
    <p>Focused and quick-learning ASP.net Full stack developer. Skilled in C#, C++, Agile Methodologies, React, with a working knowledge of Java and Bash. Strong engineering professional with a Bachelor of Science - BS focused in Computer and Information Security Science Austin Peay State Unitversity.</p>
    <div id="experienceStack">
        <div id="techLIst">
            <h3>Languages</h3>
            <div id="techListItme">
                <div>
                    <ul>
                        <li>C#</li>
                        <li>C++</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li> Python </li>
                    </ul>
                </div>
            </div>
        </div>
    <div>
    <h3> Technologies </h3>
        <ul>
            <li> C# .NET Full Stack </li>
            <li> Git </li>
            <li> React </li>
        </ul>
    </div>
    </div>
    <div id="techImages">
        <img class="techImage" src="./images/csharp.png">
        <img class="techImage" src="./images/cplusplus.png">
        <img class="techImage" src="./images/java.jpg">
        <img class="techImage" src="./images/python2.png">
        <img class="techImage" src="./images/react.png">
        <img class="techImage" src="./images/github.png">
    </div>
    `
    document.getElementById("pageTitle").innerHTML = "Home"
    document.getElementById("main-display").innerHTML = text
}