const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey ="5c4dc9ab-87bc-46a1-ba63-8149376c7edb";


const conversationForm = document.querySelector(".conversation__form");
const commentUl = document.querySelector(".comment");


function clearComment (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// HTML

function displayComment(comment) {

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
commentUserName.innerText = comment.name;


const commentDate = document.createElement("p");
const dateFormat = new Date(comment.timestamp);
commentDate.classList.add("comment__date");
commentDate.innerText = dateFormat.toLocaleDateString();


// div comment input

const commentInput = document.createElement("div");
commentInput.classList.add("comment__input");

const commentText = document.createElement("p");
commentText.classList.add("comment__text");
commentText.innerText = comment.comment;



commentItem.appendChild(commentUserImage);

commentHeader.appendChild(commentUserName);
commentHeader.appendChild(commentDate);
commentInfo.appendChild(commentHeader);
commentItem.appendChild(commentInfo);


commentInput.appendChild(commentText);
commentInfo.appendChild(commentInput);


commentUl.appendChild(commentItem);

};


function getComment() {
    axios
    .get(`${apiUrl}/comments?api_key=${apiKey}`)
    .then((response) => {
        const data = response.data;
        commentUl.innerText = "";

        data.sort ((a, b) => new Date (b.timestamp) - new Date (a.timestamp))

        data.forEach(comment => {
            displayComment (comment)
        });    
    })
    .catch((error) => {
        console.log("error: ",error);
    });
}

getComment();

conversationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event)

        const newComment = {
        name: event.target.commentUserName.value,
        comment: event.target.commentText.value,
    };

    axios
    .post (`${apiUrl}/comments?api_key=${apiKey}`, newComment)
    .then((response) => {

        event.target.commentUserName.value = "";
        event.target.commentText.value = "";

    }).then (() => getComment())
    .catch((error) => {
        console.log("error: ",error);
    });
});
