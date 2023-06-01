

// las paginas utilizaran esto (nuevo)
document.addEventListener("DOMContentLoaded",(e)=>{

    const url = "./footer.html"
    const httpx = new XMLHttpRequest();

    httpx.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.querySelector(".footer").innerHTML=this.responseText;
        }
    }

    httpx.open("get",url)
    httpx.send()
})
