const player1 = {
    NAME: 'Mario',
    VELOCITY: 4,
    MANEUVERABILITY: 3,
    POWER: 3,
    POINTS: 0,
}

const player2 = {
    NAME: 'Peach',
    VELOCITY: 3,
    MANEUVERABILITY: 4,
    POWER: 2,
    POINTS: 0,
}


const player3 = {
    NAME: 'Yoshi',
    VELOCITY: 2,
    MANEUVERABILITY: 4,
    POWER: 3,
    POINTS: 0,
}

const player4 = {
    NAME: 'Bowser',
    VELOCITY: 5,
    MANEUVERABILITY: 2,
    POWER: 5,
    POINTS: 0,
}

const player5 = {
    NAME: 'Luigi',
    VELOCITY: 3,
    MANEUVERABILITY: 4,
    POWER: 4,
    POINTS: 0,
}

const player6 = {
    NAME: 'Donkey Kong',
    VELOCITY: 2,
    MANEUVERABILITY: 2,
    POWER: 5,
    POINTS: 0,
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result

    switch (true) {
        case random < 0.33:
            result = 'STRAIGHT';
            break;
        case random < 0.66:
            result = 'TURN';
            break;
        case random < 0.99:
            result = 'CONFRONTATION';
            break;

        default:
            break;
    }
    return result;
}

async function logRollResult(character, block, diceResult, attribute) {
    console.log(`🏁 ${character.NAME} 🎲  rolls a dice of ${block} ${diceResult} + ${attribute} = ${diceResult
        + attribute}`);
}
async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`\n🏁 Round ${round} 🏁`);

        let block = await getRandomBlock();
        console.log(`BLOCK: ${block}!`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block === 'STRAIGHT') {
            totalTestSkill1 = character1.VELOCITY + diceResult1;
            totalTestSkill2 = character2.VELOCITY + diceResult2;

            await logRollResult(character1, "VELOCITY", diceResult1, character1.VELOCITY);
            await logRollResult(character2, "VELOCITY", diceResult2, character2.VELOCITY);

        } else if (block === 'TURN') {
            totalTestSkill1 = character1.MANEUVERABILITY + diceResult1;
            totalTestSkill2 = character2.MANEUVERABILITY + diceResult2;

            await logRollResult(character1, "MANEUVERABILITY", diceResult1, character1.MANEUVERABILITY);
            await logRollResult(character2, "MANEUVERABILITY", diceResult2, character2.MANEUVERABILITY);

        } else if (block === 'CONFRONTATION') {
            totalTestSkill1 = character1.POWER + diceResult1;
            totalTestSkill2 = character2.POWER + diceResult2;

            console.log(`🥊 ${character1.NAME} confronts ${character2.NAME}!`);

            await logRollResult(character1, "POWER", diceResult1, character1.POWER);
            await logRollResult(character2, "POWER", diceResult2, character2.POWER);

            if (totalTestSkill1 > totalTestSkill2 && character2.POWER > 0) {
                character2.POWER--;
                console.log(`💥 ${character1.NAME} wins the confrontation! ${character2.NAME} loses 1 POWER.`);
            } else if (totalTestSkill2 > totalTestSkill1 && character1.POWER > 0) {
                character1.POWER--;
                console.log(`💥 ${character2.NAME} wins the confrontation! ${character1.NAME} loses 1 POWER.`);
            } else {
                console.log(`🤝 It's a tie in the confrontation. No one loses power.`);
            }
        }

        if (totalTestSkill1 > totalTestSkill2) {
            character1.POINTS++;
            console.log(`✅ ${character1.NAME} wins Round ${round}!`);
        } else if (totalTestSkill2 > totalTestSkill1) {
            character2.POINTS++;
            console.log(`✅ ${character2.NAME} wins Round ${round}!`);
        } else {
            console.log(`🤝 Round ${round} is a tie! No points awarded.`);
        }

        console.log(`Current Score: ${character1.NAME} ${character1.POINTS} - ${character2.POINTS} ${character2.NAME}`);
        console.log("--------------------------------------------");
    }
}

async function declareWinner(character1, character2) {
    console.log(`🏁🏆🏁🏆🏁🏆🏁🏆🏁🏆🏁`);
    console.log(`\nFinal Results:`);
    console.log(`🏁 ${character1.NAME} Point(s): ${character1.POINTS}`);
    console.log(`🏁 ${character2.NAME} Point(s): ${character2.POINTS}`);

    if (character1.POINTS > character2.POINTS) {
        console.log(`🏁🏆 ${character1.NAME} is the winner! 🏆🏁`);
    } else if (character2.POINTS > character1.POINTS) {
        console.log(`🏁🏆 ${character2.NAME} is the winner! 🏆🏁`);
    } else {
        console.log(`🏁 It's a tie! Both players are winners! 🏁`);
    }

}

(async function main() {
    console.log(`🏁🚨 Race between ${player1.NAME} and ${player2.NAME} starting ...`)
    await playRaceEngine(player3, player4);
    await declareWinner(player3, player4);

})();