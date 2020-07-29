//https://randomuser.me/api/

const { expose } = require("threads")
var axios = require('axios');


expose(async function GetUser(uri) {

    // console.log("Girilen : " + uri)


    return await axios.get(uri)
        .then(response => {
            // return `${response.data.bpi.EUR.rate} €`
            return (response.data.results[0].name);

        })
        .catch(error => {
            console.log(error);
        });

});

