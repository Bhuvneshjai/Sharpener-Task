const getTicket = () => {
    return  new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('wife : I have ticket');
            resolve('ticket');
        }, 1000);
    });
}

const getPopcorn = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('husband : your popcorn');
            resolve('popcorn');
        },1000);
    });
}

const addButter = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('husband : add butter on popcorn');
            resolve('butter added');
        }, 1000);
    });
}

const coldDrink = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('husband : your cold drink');
            resolve('cold drink');
        }, 1000);
    });
}

const watchMovie = async () => {
    let ticket = await getTicket();
    let popcorn = await getPopcorn();
    console.log('husband : let go in');
    console.log('wife : no i am hungry');
    let butterPopcorn = await addButter();
    let drink = await coldDrink();
    console.log('wife : thanks, now we can watch the movie');
}

watchMovie();