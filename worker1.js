
function writeNumbers() {

    for (let index = 0; index < 100000; index++) {

        if (index % 2 !== 0)
            console.log(`Tek : ${index}`)
        else continue;
    }
}

writeNumbers();