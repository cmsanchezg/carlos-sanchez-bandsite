const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey ="ce158f6f-29bb-4ff9-8bef-bf250b918974";

    // HTML

    const showList = document.querySelector(".show__list");

    function showEntry(entry) {
        
    const showItem = document.createElement("li");
    showItem.classList.add("show__item");

    // div Date

    const showDate = document.createElement("div");
    showDate.classList.add ("show__date");

    const showSubHeader1 = document.createElement("p");
    showSubHeader1.classList.add ("show__sub__header");
    showSubHeader1.classList.add ("show__sub__header--mobile__invisible");
    showSubHeader1.innerText = "date";

    const showInfo1 = document.createElement("p");
    const dateFormat = new Date(entry.date);
    showInfo1.classList.add ("show__info");
    showInfo1.classList.add ("show__info--bolder");
    showInfo1.innerText = dateFormat.toDateString();
        

    //div Venue

    const showVenue = document.createElement("div");
    showVenue.classList.add ("show__venue");

    const showSubHeader2 = document.createElement("p");
    showSubHeader2.classList.add ("show__sub__header");
    showSubHeader2.classList.add ("show__sub__header--mobile__invisible");
    showSubHeader2.innerText = "venue";

    const showInfo2 = document.createElement("p");
    showInfo2.classList.add ("show__info");
    showInfo2.innerText = entry.place;

    //div Location

    const showLocation = document.createElement("div");
    showLocation.classList.add ("show__location");

    const showSubHeader3 = document.createElement("p");
    showSubHeader3.classList.add ("show__sub__header");
    showSubHeader3.classList.add ("show__sub__header--mobile__invisible");
    showSubHeader3.innerText = "location";

    const showInfo3 = document.createElement("p");
    showInfo3.classList.add ("show__info");
    showInfo3.innerText = entry.location;

    // div ticket

    const showBuyTicket = document.createElement("div");
    showBuyTicket.classList.add("show__buy__ticket__btn");

    const showBuyTicketLink = document.createElement("a");
    showBuyTicketLink.innerText = "buy ticket";


    
    showDate.appendChild(showSubHeader1);
    showDate.appendChild(showInfo1);
    showItem.appendChild(showDate);

    showVenue.appendChild(showSubHeader2);
    showVenue.appendChild(showInfo2);
    showItem.appendChild(showVenue);

    showLocation.appendChild(showSubHeader3);
    showLocation.appendChild(showInfo3);
    showItem.appendChild(showLocation);

    showBuyTicket.appendChild(showBuyTicketLink);
    showItem.appendChild(showBuyTicket);
    
    showList.appendChild(showItem);


    showItem.addEventListener("click", function(event) {
        const showItems = document.querySelectorAll (".show__item");
        showItems.forEach(concert => concert.classList.remove("show__item--clicked"));
        event.currentTarget.classList.add("show__item--clicked");
    })
}

function getShow () {
    axios
    .get(`${apiUrl}/showdates?api_key=${apiKey}`)
    .then((response) => {
        const data = response.data;
        showList.innerText = "";

        data.forEach (entry => {
            showEntry (entry)
        }); 
    })
    .catch((error) => {
        console.log ("error: ",error);
    });
}

getShow ();
