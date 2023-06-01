

document.addEventListener("DOMContentLoaded",(e)=>{

    const url = "./navbar.html"
    const httpx = new XMLHttpRequest();

    httpx.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.querySelector(".minav").innerHTML=this.responseText;
        }
    }

    httpx.open("get",url)
    httpx.send()

})
