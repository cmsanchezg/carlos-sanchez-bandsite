const conversationForm = document.querySelector(".conversation__form");
const comment = document.querySelector(".comment");


const commentList = [
    {
        commentUserName:"Connor Walton",
        commentDate: new Date("02/17/2021").toLocaleDateString(),
        commentText:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        commentUserName:"Emilie Beach",
        commentDate: new Date("01/09/2021").toLocaleDateString(),
        commentText:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        commentUserName:"Miles Acosta",
        commentDate:new Date("12/20/2020").toLocaleDateString(),
        commentText:"I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
    },
];


conversationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    comment.innerText = "";

    const newComment = {
        commentUserName: event.target.commentUserName.value,
        commentDate: new Date().toLocaleDateString(),
        commentText: event.target.commentText.value,
    }
    commentList.push(newComment);
    displayComment();
    event.target.reset();
});


// HTML

function displayComment() {

    commentList.sort ((a, b) => new Date(b.commentDate) - new Date(a.commentDate));

    for (let i = 0; i < 3; i++) {
    

// li comment entry

const commentItem = document.createElement("li");
commentItem.classList.add('comment__item');

// div comment user image

const commentUserImage = document.createElement("div");
commentUserImage.classList.add("comment__user__image");

// div comment info

const commentInfo = document.createElement("div");
commentInfo.classList.add("comment__info");

// div comment header

const commentHeader = document.createElement("div");
commentHeader.classList.add("comment__header");

const commentUserName = document.createElement("p");
commentUserName.classList.add("comment__user__name");
commentUserName.innerText = commentList[i].commentUserName;

const commentDate = document.createElement("p");
commentDate.classList.add("comment__date");
commentDate.innerText = commentList[i].commentDate;



// div comment input

const commentInput = document.createElement("div");
commentInput.classList.add("comment__input");

const commentText = document.createElement("p");
commentText.classList.add("comment__text");
commentText.innerText = commentList[i].commentText;



commentItem.appendChild(commentUserImage);

commentHeader.appendChild(commentUserName);
commentHeader.appendChild(commentDate);
commentInfo.appendChild(commentHeader);
commentItem.appendChild(commentInfo);


commentInput.appendChild(commentText);
commentInfo.appendChild(commentInput);


comment.appendChild(commentItem);

};
}

displayComment();