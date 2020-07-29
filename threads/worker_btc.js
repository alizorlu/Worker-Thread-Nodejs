
const { expose } = require("threads")
var axios = require('axios');


expose(async function GetBtc(uri) {

    // console.log("Girilen : " + uri)


    return await axios.get(uri)
        .then(response => {
            return `${response.data.bpi.EUR.rate} €`
            // console.log();

        })
        .catch(error => {
            console.log(error);
        });

});

