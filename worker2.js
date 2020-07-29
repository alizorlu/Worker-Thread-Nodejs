
function writeNumbers() {

    for (let index = 0; index < 100000; index++) {

        if (index % 2 === 0)
            console.log(`Çift : ${index}`)
        else continue;
    }
}

writeNumbers();