window.onload = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            var menuData = JSON.parse(this.responseText);

            var headerMenu =document.createElement("ul");
            for (var i =0;i<menuData.length;i++){
                var menuItem = document.createElement("li");
                var menuLink = document.createElement("a");
                menuLink.textContent=menuData[i].texto;
                menuLink.href=menuData[i].url;
                menuItem.appendChild(menuLink);
                headerMenu.appendChild(menuItem);
            }
            document.getElementById("header")[0].appendChild(headerMenu);
        }
    };
    xhttp.open("GET", "js/menu.json", true);
    xhttp.send();
};