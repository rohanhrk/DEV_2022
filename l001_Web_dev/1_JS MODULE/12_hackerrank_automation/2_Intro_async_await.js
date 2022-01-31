function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink === 'coffee') {
            resolve("order placed");
        } else {
            reject("sorry, we only serve coffee");
        }
    })
}

function processOrder(order) {
    return new Promise(function (resolve) {
        console.log("order is being process");
        resolve(`coffee served for the ${order}`);
    })
}

// // Scenrio with promises
// placeOrder("coffee").then(function(orderFromCustomer) {
//     console.log("request recieved");
//     let orderIsProcessed = processOrder(orderFromCustomer);
//     return orderIsProcessed;
// }).then(function(orderIsProcessed) {
//     console.log(orderIsProcessed);
// }).catch(function(err) {
//     console.log(err);
// })

// assync await
async function serveOrder() {
    try {
        const orderRecieved = await placeOrder("coffee");
        console.log(orderRecieved);
        const processedOrder = await processOrder(orderRecieved);
        console.log(processedOrder);
    } catch (error) {
        console.log(error);
    }
}

serveOrder();
