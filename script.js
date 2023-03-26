let posts = document.querySelectorAll(".post");

document.addEventListener('scroll', checkPosts);
document.addEventListener('DOMContentLoaded', checkPosts);


function checkPosts(){
posts.forEach(function(post){
if(window.scrollY + window.innerHeight > post.offsetTop){
post.classList.add("slide");
}
else{
post.classList.remove("slide");
}
})
}