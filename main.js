let links = document.querySelector(".links");
let mega = document.querySelector(".mega-menu");

links.onclick= function(){
    if (mega.style.opacity === "1"){
        mega.style.display = "none";
        mega.style.opacity = "0";
        mega.style.transform = "translateY(20px)";
    }else{
        mega.style.display = "flex";
        setTimeout(() => {
            mega.style.opacity = "1";
            mega.style.transform = "translateY(-20px)";
        }, 300);
    }
}
document.onclick = function(){
    if (mega.style.opacity === "1"){
        mega.style.display = "none";
        mega.style.opacity = "0";
        mega.style.transform = "translateY(20px)";
    }
}
// scroll to top
let scroll = document.querySelector(".scroll");
let landing = document.querySelector(".landing");

window.onscroll = function(){
    if(window.scrollY <= landing.offsetTop){
        scroll.style.opacity = "0";
        scroll.style.display = "none";
    }else{
        scroll.style.display = "flex";
        setTimeout(() => {
            scroll.style.opacity = "1";
        }, 300);
    }
}
scroll.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

//gallery section
let add = document.querySelector(".add i");
let file = document.querySelector(".add input");
let gallery = document.querySelector(".gallery .container");
let lastChild = document.querySelector(".last-child");
var uploaded_image = "";


file.addEventListener('change', function() {
    const reader = new FileReader();
    let im = document.createElement("img");
    reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    im.src = uploaded_image;
    });
        reader.readAsDataURL(this.files[0]);
        
        let el = document.createElement("div");
        el.classList.add("box");

        let el2 = document.createElement("div");
        el2.classList.add("img");
        
        
        el2.appendChild(im);
        el.appendChild(el2);
        gallery.appendChild(el);
        gallery.insertBefore(el, lastChild);
});

