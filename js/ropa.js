


{/* <div class="col-sm-12 col-md-6 col-lg-4">
                        <img src="img/Pijamaperro.jpg" alt="">
                        <p class="precio"><span>$10.000</span><br>Pijama para perro</p>
                    </div> */}




const addData=(data)=>{


    data.forEach(ele => {
        if(ele.category!=="electronics" && ele.category!=="jewelery"){
            
        let div = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");

        div.className="col-sm-12 col-md-6 col-lg-4";
        img.src=ele.image;
        img.className="imgsize"

        p.textContent=ele.title;
        p.className="ps"

        div.append(img)
        div.append(p)
        
        document.querySelector(".conte-ropa").append(div);
        }
        
    });

}


const getRopa=async()=>{
    const ropa = await fetch("http://fakestoreapi.com/products")
    const data = await ropa.json();
    addData(data);
}

getRopa();