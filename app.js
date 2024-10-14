let container=document.querySelector(".container");
let cursor=document.querySelector("#cursor")
container.addEventListener("mouseenter",()=>{
    cursor.style.opacity=1;
})
container.addEventListener("mouseleave",()=>{
    cursor.style.opacity=0;
})
let pointer=document.querySelector(".pointer");
document.body.addEventListener("mousemove",(event)=>{
    pointer.style.left=event.clientX+'px';
    pointer.style.top=event.clientY+'px';
});