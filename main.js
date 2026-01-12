fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => userRender(data))

const elUserList = document.querySelector(".user__list")
const elPostList = document.querySelector(".post__list")
const elCommentList = document.querySelector(".comment__list")

function userRender(item){
    elUserList.innerHTML = "";

    for(let i = 0; i < item.length; i++){
        elUserList.innerHTML += `<li data-user-id = ${item[i].id} class="user__item">
                        <div class="user__top-content">
                            <span class="user_id">${item[i].id}</span>
                            <h3 class="user_title">${item[i].name}</h3>
                        </div>
                        <h4 class="user__subtitle">${item[i].username}</h4>
                        <a href="mailto:${item[i].email}" class="user_email">${item[i].email}</a>
                    </li>`
    }
}
function postRender(item){
    elPostList.innerHTML = "";

    for(let i = 0; i < item.length; i++){
        elPostList.innerHTML += `<li data-post-id = ${item[i].id} class="post__item">
                        <div class="post__top-content">
                            <span class="post_id">${item[i].id}</span>
                            <h3 class="post_title">${item[i].title}</h3>
                        </div>
                        <p class="post_text">${item[i].body}</p>
                    </li>`
    }
}
function commentRender(item){
    elCommentList.innerHTML = "";

    for(let i = 0; i < item.length; i++){
        elCommentList.innerHTML += `<li class="comment__item">
                        <div class="comment__top-content">
                            <span class="comment_id">${item[i].id}</span>
                            <h3 class="comment_title">${item[i].name}</h3>
                        </div>
                        <a href="mailto: ${item[i].email}" class="comment_email">${item[i].email}</a>
                        <p class="comment_text">${item[i].body}</p>
                    </li>`
    }
}


elUserList.addEventListener('click', (evt) => {
    let card = evt.target.closest(".user__item")
    
    if(card) {
        let elUserId = evt.target.dataset.userId

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${elUserId}`)
        .then((res) => res.json())
        .then((data) => postRender(data))
    }
});
elPostList.addEventListener('click', (evt) => {
    if(evt.target.closest(".post__item")){
        let elPostId = evt.target.dataset.postId

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${elPostId}`)
        .then((res) => res.json())
        .then((data) => commentRender(data))
    }
});