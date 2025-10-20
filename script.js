


function addstuff(heading, paragraph, date){
    const newDiv = document.getElementById("card");
    const cloned = document.createElement("div");
    cloned.innerHTML = newDiv.innerHTML;


    cloned.querySelector("h2").textContent = heading;
    cloned.querySelector("p").innerHTML = paragraph;
    cloned.querySelector("h5").textContent = date;

    cloned.classList = "card"
    document.getElementById("my-div").insertBefore(cloned, document.getElementById("my-div").firstChild)
}



async function initload() {
    const res = await fetch('https://bckend-dbam.onrender.com/cards');
    const data = await res.json();
    
    data.cards.forEach(c => {
        addstuff(c.heading, c.content, c.date);
    });

}


window.onload = initload()
