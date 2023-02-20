const show = [
    {
        showSubHeader1: "Date",
        showSubHeader2: "Venue",
        showSubHeader3: "Location",
        showDate:"Mon Sept 06 2021",
        showVenue: "Roland Lane",
        showLocation:"San Francisco, CA",
        showBuyTicketLink: "Buy Ticket",
    },
    {
        showSubHeader1: "Date",
        showSubHeader2: "Venue",
        showSubHeader3: "Location",
        showDate:"Mon Sept 06 2021",
        showVenue: "Roland Lane",
        showLocation:"San Francisco, CA",
        showBuyTicketLink: "Buy Ticket",
    },
    {
        showSubHeader1: "Date",
        showSubHeader2: "Venue",
        showSubHeader3: "Location",
        showDate:"Mon Sept 06 2021",
        showVenue: "Roland Lane",
        showLocation:"San Francisco, CA",
        showBuyTicketLink: "Buy Ticket",
    },
    {
        showSubHeader1: "Date",
        showSubHeader2: "Venue",
        showSubHeader3: "Location",
        showDate:"Mon Sept 06 2021",
        showVenue: "Roland Lane",
        showLocation:"San Francisco, CA",
        showBuyTicketLink: "Buy Ticket",
    },
    {
        showSubHeader1: "Date",
        showSubHeader2: "Venue",
        showSubHeader3: "Location",
        showDate:"Mon Sept 06 2021",
        showVenue: "Roland Lane",
        showLocation:"San Francisco, CA",
        showBuyTicketLink: "Buy Ticket",
    },
    {
        showSubHeader1: "Date",
        showSubHeader2: "Venue",
        showSubHeader3: "Location",
        showDate:"Mon Sept 06 2021",
        showVenue: "Roland Lane",
        showLocation:"San Francisco, CA",
        showBuyTicketLink: "Buy Ticket",
    },
];



    //HTML

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
    showSubHeader1.innerText = entry.showSubHeader1;

    const showInfo1 = document.createElement("p");
    showInfo1.classList.add ("show__info");
    showInfo1.classList.add ("show__info--bolder");
    showInfo1.innerText = entry.showDate;
        

    //div Venue

    const showVenue = document.createElement("div");
    showVenue.classList.add ("show__venue");

    const showSubHeader2 = document.createElement("p");
    showSubHeader2.classList.add ("show__sub__header");
    showSubHeader2.classList.add ("show__sub__header--mobile__invisible");
    showSubHeader2.innerText = entry.showSubHeader2;

    const showInfo2 = document.createElement("p");
    showInfo2.classList.add ("show__info");
    showInfo2.innerText = entry.showVenue;

    //div Location

    const showLocation = document.createElement("div");
    showLocation.classList.add ("show__location");

    const showSubHeader3 = document.createElement("p");
    showSubHeader3.classList.add ("show__sub__header");
    showSubHeader3.classList.add ("show__sub__header--mobile__invisible");
    showSubHeader3.innerText = entry.showSubHeader3;

    const showInfo3 = document.createElement("p");
    showInfo3.classList.add ("show__info");
    showInfo3.innerText = entry.showLocation;

    // div ticket

    const showBuyTicket = document.createElement("div");
    showBuyTicket.classList.add("show__buy__ticket__btn");

    const showBuyTicketLink = document.createElement("a");
    showBuyTicketLink.innerText = entry.showBuyTicketLink;


    
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

for (i = 0; i < show.length; i++) {
    showEntry (show[i]);
}


    


