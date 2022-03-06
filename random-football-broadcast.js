/* --Random Football Broadcast Generator-- */

// Randomly generates a number from 0 to the number passed in or the array's last index.
const randomlyPick = (numOrArr) => {
    let maxVal = 0;
    if (Array.isArray(numOrArr)) {
        maxVal = numOrArr.length;
    } else {
        maxVal = numOrArr;
    };
    return Math.floor(Math.random() * maxVal);
};

// Pass in an array of words (wordArr) and the number of words needed (numWords), it returns a new array with (numWords) of unique random words from the (wordArr).
const selectWords = (wordArr, numWords) => {
    let selectedWordArr = [];
    let word = "";
    if (wordArr.length < numWords) {
        return "numWords cannot be greater then the array length."
    }
    while (selectedWordArr.length < numWords) {
        word = wordArr[randomlyPick(wordArr)];
        if (selectedWordArr.indexOf(word) === -1) {
            selectedWordArr.push(word);
        };
    };
    return selectedWordArr;
};

// Object that stores the broadcast and the method used to generate it.
const footballBroadcast = {
    adjectives: {
        words: ["reminiscent", "ajar", "makeshift", "zany", "tightfisted", "separate", "inquisitive", "defiant", "volatile", "scrawny"],
        needed: 2,
        selected: []
    },
    nouns: {
        words: ["crown", "dust", "arch", "clover", "cake", "plate", "unit", "yoke", "wheel", "plane"],
        needed: 4,
        selected: []
    },
    animals: {
        words: ["Alligators", "Baboons", "Bush Pigs", "Capybaras", "Corgis", "Elephants", "Tigers"],
        needed: 2,
        selected: []
    },
    footballPlayers: {
        words: ["Tom", "Matthew", "Aaron", "Russell", "Rob", "Matt", "Chuck", "Bob", "Jack", "Brandon", "Sean", "Chris", "Greg"],
        needed: 3,
        selected: []
    },
    bodyPart: {
        words: ["waist", "leg", "arm", "neck", "ankle", "chest"],
        needed: 1,
        selected: []
    },
    number: {
        words: [5, 10, 15],
        needed: 1,
        selected: []
    },
    ingVerb: {
        words: ["daydreaming", "fighting", "skating", "running", "forgetting", "picnicking", "panicking", "traveling"],
        needed: 1,
        selected: []
    },
    generateBroadcast() {
        console.log(`Good afternoon, ladies and gentlemen. This is your favorite sportscaster
        bringing you the big football game between the Columbia
        University ${this.animals.selected[0]} and the West Point ${this.animals.selected[1]}.
        The center has just snapped the ${this.nouns.selected[0]} back to the Columbia
        star halfback, ${this.footballPlayers.selected[0]}, who is running around his own left
        ${this.nouns.selected[1]}. There he's tackled hard around the ${this.bodyPart.selected[0]}. Now
        it's West Point's ball and ${this.number.selected[0]} to go. They're coming out of the
        huddle. The ball is snapped back to ${this.footballPlayers.selected[1]}, who fades
        back and throws a long, ${this.adjectives.selected[0]} pass which is caught by
        ${this.footballPlayers.selected[2]}, who is West Point's ${this.adjectives.selected[1]} quarterback.
        He's in the clear, and he races over the ${this.nouns.selected[2]} for a touchdown.
        No, no, wait! The referee is calling the play back to the 35-${this.nouns.selected[3]}
        line. He's going to penalize West Point for ${this.ingVerb.selected[0]}.`)
    }
};

for (let obj in footballBroadcast) {
    if (footballBroadcast[obj].hasOwnProperty('needed')) {
        footballBroadcast[obj].selected = selectWords(footballBroadcast[obj].words, footballBroadcast[obj].needed)
    };
};

console.log(footballBroadcast.generateBroadcast());