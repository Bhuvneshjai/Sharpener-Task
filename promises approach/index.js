const wifeBringsTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('wife : I have the ticket');
        resolve('ticket');
    },1000);
});

const husbandGetPopcorns = wifeBringsTicket.then((ticket) => {
    console.log('husband : Let go in');
    console.log('wife : No, I am hungry');
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('husband : Here your popcorn');
            resolve('popcorn');
        },1000);
    });
});

const wifeWantsButter = husbandGetPopcorns.then((popcorn) => {
    console.log('wife : I want butter on my popcorn');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('husband : Add butter on popcorn');
            resolve('popcorn with butter');
        },1000);
    });
});

const wifeWantsColdDrinks = wifeWantsButter.then(() => {
    console.log('wife : I had like a cold drink');
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('husband : Here cold drink.');
            resolve('cold drink');
        },1000);
    });
});

wifeWantsColdDrinks.then(() => {
    console.log('wife : thanks, now we can watch the movie');
});