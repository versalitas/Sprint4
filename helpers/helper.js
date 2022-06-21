const random = require('random');
const min = 1;
const max = 7;

const randomizer = () => { return random.int(min, max)};

const diceRoll = () => {
    let dice1 = randomizer();
    let dice2 = randomizer();
    const score = dice1 + dice2;
    const win = (score === 7)? 100 : 0;

    return {dice1, dice2, win}
    }

module.exports = diceRoll;