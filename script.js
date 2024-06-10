const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if(pageName === "index.html"){
    document.querySelector(".home").classList.add("active");
}
if(pageName === "service.html"){
    document.querySelector(".service").classList.add("active");
}
if(pageName === "blog.html"){
    document.querySelector(".blog").classList.add("active");
}
if(pageName === "pricing.html"){
    document.querySelector(".pricing").classList.add("active");
}

