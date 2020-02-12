//setting and getting attribute
//classList add or remove
//parents,children,siblings
//event basic
//create element or remove element
//event bubbling

let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");
let button = document.querySelector("button");

button.addEventListener('click',()=>{
    const li = document.createElement("li");
    li.textContent="something to do";
    ul.append(li);
});


lists.forEach(list=>{
    list.addEventListener('click',e=>{

       // e.target.remove();
    //    console.log("LI");
    //    e.stopPropagation();
    });
});

ul.addEventListener('click',e=>{
    console.log(e.target);
    e.target.remove();
});



