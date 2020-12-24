console.log("Hello");
const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

fetch(url)
    .then((response) => response.json())
    .then((url) => {
        // const [
        //     id,
        //     symbol,
        //     name,
        //     image,
        //     current_price,
        //     high_24h,
        //     low_24h,
        //     price_change_24h,
        // ] = obj;
        // for (var i = 1; i <= 10; i++) {
            // console.log("Name: "+url[i].id+" currentPrice: "+url[i].current_price);
        // }

        let table_update='';
        for (var i = 0; i < 10; i++) {
            let image_link = url[i].image;
           table_update+= "<tr>";
        table_update+= "<td>" +`<img src=${image_link} style="height:30px;width:30px"/>` + "</td>";
        table_update+= "<td>" + url[i].name +" (" +url[i].symbol+") "+ "</td>";
           table_update+= "<td>" + url[i].current_price.toFixed(2) + "</td>";
           table_update+= "<td>" + url[i].high_24h.toFixed(2) + "</td>";
           table_update+= "<td>" + url[i].low_24h.toFixed(2) + "</td>";
           table_update+= "<td>" + url[i].price_change_24h.toFixed(2) + "</td>";
           table_update+='</tr>'
  
        }
        document.getElementById('tbody').innerHTML=table_update
        console.log("working shits");
        console.log("api by coingecko");

        console.log("visit: https://kanhu.netlify.app");
    });
