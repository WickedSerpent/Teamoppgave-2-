








var userText = document.getElementById(userText);
var messenge = document.getElementById(your-message);
var btn = document.getElementById(btnSend);


// document.addEventListener("DOMContentLoaded", () => {
//     const inputField = document.getElementById("your-message");
//     inputField.addEventListener('keydown', (e) => {
//         if (e.code === "Enter") {
//             let input = inputfield
//         }
//     })
// })





        // //model
        // 

        // //view
        // chatBotSvar();
        // function chatBotSvar() {
        // document.getElementById('app').innerHTML = `
        //     Tekstbox <br/>
        //     <input 
        //         id="Melding"
        //         type="text"
        //         value="blank" 
        //         />
        //     <button onclick="send()">Send</button>
        //     `}

        // //controller
        //     function send(){
        //         document.getElementById("sendeMelding").innerHTML = svar();
        //     }

        //     function Svar(){
        //     if (input == 'hei') return;
        //     else if ('')
        //     chatBotSvar()
        //     } */}



const trigger = [
// 0        
["hei", "hallo", "hey", "yo", "heisann"],
// 1
["hvordan har du det?", "står til?","skjer?","hvordan går det?", "sup?"],
// 2
["bra", "bare bra", "kjembebra", "har det fint",],
// 3
["ja", "stemmer det", "jupp", "yes", "jau"],
["nei", "nop"]
// 4
["get","getacademy"],
];

const reply = [
// 0
["Heisann!", "Hallo til deg også", "Hey!!!" ],
// 1
["Det går bra med meg, hva med deg?", "Kan ikke klage, enn du?", "Kjempebra!, og du?"],
// 2
["Det er godt å høre, ser du er på kodekurs? stemmer det?"],
["*raises eyebrow*", "Hæ? løgner!"],

// 3
["stilig! hva heter det?"],

["Åh JØSS! De har jeg hørt mye bra om!"],
];


const alternative = [
"Ooookeeyyy....","hæ?","Den skjønte jeg ikke","det der står ikke I mine arrays!"
];

if (sammenlign(trigger, reply, text)) {

}

function sammenlign(triggerArray, replyArray, userText) {
    let item; 
    for (let x = 0; < triggerArray.length; x++) {
        for (let y = 0; < triggerArray.length; y++) {
            if (triggerArray[x][y] == userText) {
                items=replyArray[x];
                item=items[Math.floor(Math.random() * items.length)];
            }
        }
    }
    return item;
}

