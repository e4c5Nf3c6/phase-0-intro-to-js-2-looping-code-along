function writeCards(names, eventName) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    }
    
    return cards;
}

function countDown(positiveInteger) {
    while (positiveInteger >= 0) {
        console.log(positiveInteger--);
    }
}