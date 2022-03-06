/* --Random Football Broadcast Generator-- */

// Randomly generates a number from 0 to the number passed in or the array's last index.
const randomlyPick = (numOrArr) => {
    let maxVal = 0;
    if (Array.isArray(numOrArr)) {
        maxVal = numOrArr.length;
    } else {
        maxVal = numOrArr;
    }
    return Math.floor(Math.random() * maxVal);
};

// Object that stores the broadcast and the methods used to generate it.
const FootballBroadcast = {
    broadcast: "",
    adjectives: [],
    _selectedAdjectives: [],
    nous: [],
    _selectedNouns: [],
    ingVerb: [],
    pluralNoun: [],
    pluralAnimal: [],
    footballPlayers: [],
    _selectedFootballPlayers: [],
    bodyPart: [],
    number: [],
    selectedAdjectives() {
        while (true) {
            let word = this.adjectives[randomlyPick(this.adjectives)];
            if (this._selectedAdjectives.indexOf(word) == -1) {
                this._selectedAdjectives.push(word);
            };
            if (this._selectedAdjectives == 3) {
                break;
            };
        }
    },
    selectedNouns() {

    },
    selectedFootballPlayers() {

    },
    generateBroadcast() {
        `Good afternoon, ladies and gentlemen. This is your favorite sportscaster
        bringing you the big football game between the Columbia
        University ${PA} and the West Point ${PN}.
        The center has just snapped the ${N1} back to the Columbia
        star halfback, ${MC1}, who is running around his own left
        ${N2}. There he's tackled hard around the ${POTb}. Now
        it's West Point's ball and ${NUM} to go. They're coming out of the
        huddle. The ball is snapped back to ${MC2}, who fades
        back and throws a long, ${A1} pass which is caught by
        ${MC3}, who is West Point's ${A2} quarterback.
        He's in the clear, and he races over the ${N3} for a touchdown.
        No, no, wait! The referee is calling the play back to the 35-${N4}
        line. He's going to penalize West Point for ${verbEndIng}.`
    },
    get randomBroadcast () {
        
    }
};