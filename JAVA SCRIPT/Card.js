function createCard(cardImagePath, GivenDuration, title, cName, views, uploaded){
    let div = document.createElement("div");
    div.className = "card";

    let div2 = document.createElement("div");
    div2.className = "mainImage";

    let Image = document.createElement("img");
    Image.className = "cardImage";
    Image.src = cardImagePath;

    let dur = document.createElement("div");
    dur.className = "duration";
    dur.innerHTML = GivenDuration;

    div2.appendChild(Image);
    div2.appendChild(dur);
    
    let div3 = document.createElement("div");
    div3.className = "content";

    let div4 = document.createElement("div");
    div4.className = "title";

    let h1 = document.createElement("h1");
    h1.textContent = title;
    div4.appendChild(h1);

    let div5 = document.createElement("div");
    div5.className = "otherDetails";

    let diva = document.createElement("div");
    diva.className = "channelName";
    diva.innerHTML = cName;

    let divb1 = document.createElement("div");
    divb1.className = "division";
    
    let divc = document.createElement("div");
    divc.className = "views";
    divc.innerHTML = views;

    let divb2 = document.createElement("div");
    divb2.className = "division";

    let divd = document.createElement("div");
    divd.className = "uploadedSince";
    divd.innerHTML = uploaded;

    div5.appendChild(diva);
    div5.appendChild(divb1);
    div5.appendChild(divc);
    div5.appendChild(divb2);
    div5.appendChild(divd);

    div3.appendChild(div4);
    div3.appendChild(div5);

    div.appendChild(div2);
    div.appendChild(div3);
    document.querySelector(".mainBox").appendChild(div);
}

let option = true;
while(option){
    if(confirm("Do You want to Add a new Card ?") == false) break;
    else{
        ImagePath = "pexels-studio-art-smile-3476860.jpg";
        let Duration = prompt("Enter the Duration of the card in the form of 'MM:SS':.");
        let title = prompt("Enter the title of the card.");
        let cName = prompt("Enter the name of the Channel.");
        let views = prompt("Enter the views for this card.");
        let uploaded = prompt("Enter the age of this Video.");

        createCard(ImagePath, Duration, title, cName, views, uploaded);
    }
}