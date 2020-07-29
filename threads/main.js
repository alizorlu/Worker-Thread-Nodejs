

const { Thread, spawn, Worker } = require("threads")


async function main() {

    //GET BTC
    const GetBtc = await spawn(new Worker("./worker_btc"))
    const result = await GetBtc("https://api.coindesk.com/v1/bpi/currentprice.json")

    //GET USER
    const GetUser = await spawn(new Worker("./worker_user"))
    const userResult = await GetUser("https://randomuser.me/api/")

    console.log(`BTC : ${result}`)
    console.log(`USER: ${userResult.first} ${userResult.last}`)

    

    await Thread.terminate(GetUser)
    await Thread.terminate(GetBtc)
    
    Thread.events(GetUser).subscribe((event) => { console.log("Event : " + event.type.toString()) })

}

main().catch(console.error)