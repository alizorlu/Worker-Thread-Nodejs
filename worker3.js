
function writeNumbers() {

    for (let index = 0; index < 100000; index++) {

        if (index % 10 !== 0)
            console.log(`Onlu : ${index}`)
        else continue;
    }
}

writeNumbers();