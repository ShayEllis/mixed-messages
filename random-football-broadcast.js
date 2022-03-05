// Random Football Broadcast Generator:

//create function that will randomly pick an item in one of the arrays
testArr = ["hi", "bye", "later", "sometime", "never"];

const randomlyPick = (wordArr) => {
    return Math.floor(Math.random() * wordArr.length);
};

console.log(testArr[randomlyPick(testArr)])

//object to hold template message and words
const FootballBroadcast = { // ***fix the word palcement***
    broadcast: "",
    adjectives: [],
    _selectedAdjectives: [], // 2 - 1, 2
    nous: [],
    _selectedNouns: [], // 4 - 6, 7, 8, 9
    ingVerb: [], // 1 - 14
    pluralNoun: [], // 1 - 13
    pluralAnimal: [], // 1 - 12
    footballPlayers: [], 
    _selectedFootballPlayers: [], // 3 - 3, 4, 5
    bodyPart: [], // 1 - 11
    number: [], // 1 - 10
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
        University ${a1} and the West Point ${a2}.
        The center has just snapped the ${a3} back to the Columbia
        star halfback, ${a4}, who is running around his own left
        ${a5}. There he's tackled hard around the ${a6}. Now
        it's West Point's ball and ${a7} to go. They're coming out of the
        huddle. The ball is snapped back to ${a8}, who fades
        back and throws ${a9} long, ${a10} pass which is caught by
        ${a11}, who is West Point's ${a12} quarterback.
        He's in the clear, and he races over the ${a13} for a touchdown.
        No, no, wait! The referee is calling the play back to the 35-a
        line. He's going to penalize West Point for ${a14}.`
    },
    get randomBroadcast () {
        
    }
};