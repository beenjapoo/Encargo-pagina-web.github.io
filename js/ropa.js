






// cambio todo

const addData=(data)=>{


    data.forEach(ele => {
        if(ele.category!=="electronics" && ele.category!=="jewelery"){
            
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        let h5 = document.createElement("h5")

        div.className="card";
        div.style.width="18rem"
        div.style.marginBottom="1%"

        div2.className="card-body"
        div2.style.backgroundColor="rgba(222,222,222,0.5)"

        img.src=ele.image;
        img.className="card-img-top"

        h5.className="card-title"
        h5.textContent=ele.title;

        div2.append(h5)

        div.append(img)
        div.append(div2)
        
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