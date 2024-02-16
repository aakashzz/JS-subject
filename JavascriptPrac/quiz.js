const question = [
    {
        question: "Where is eiffel tower ?",
        option: ['Berline', 'Paris', 'Australia', 'England'],
        correct: "Paris"
    },
    {
        question: "which country space agency name is ISRO ?",
        option: ['INDIA', 'CHINA', 'JAPAN', 'PAKISTAN'],
        correct: "INDIA ❤️ "
    },
    {
        question: "Highest Collection Movie Name in india 2023 ?",
        option: ['JAWAN', 'ANIMAL', 'GADAR 2', 'TAIGER 3'],
        correct: "JAWAN "
    },
    {
        question: "Which Cricket Team Wins World Cup in 2023 ?",
        option: ['INDIA', 'Australia', 'England', 'South Africa'],
        correct: 'Australia'
    },
]

const score = 0;

function selectOnlyThis(id) {
    for (var i = 1; i <= 4; i++) {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
}
//function 
let ques = [];
let option = [];
let corr = [];
question.map((e) => {
    ques.push(e.question),
        option.push(e.option),
        corr.push(e.correct),
        console.log(option)
    return ques, option, corr;
})
//click condition
const selectDiv = document.getElementById('quiz-container2');
const quesHead = document.querySelector('.ques-p');
const optSelectDiv = document.getElementsByClassName('option-div')
const showBtn = document.querySelector('.show-btn');
const submit = document.getElementById('submit');
const input = document.getElementById('inputs');
const referBtn = document.getElementById('showSubmitBtn');
//nextButton function
function ShowQuestion() {
    for (let i = 0; i < ques.length; i++) {
       const newDiv1 = document.createElement('div');
        newDiv1.className = "showDiv";
        newDiv1.innerHTML =
         `<p class="ques-p">(${i+1}) ${ques[i]}</p>
            <div class="option-div">
                <p class="lables" id="0">(01). ${option[i][0]}</p>
                <p class="lables" id="0">(02). ${option[i][1]}</p>
                <p class="lables" id="0">(03). ${option[i][2]}</p>
                <p class="lables" id="0">(04). ${option[i][3]}</p>
                <input class="answer" id="inputs" type="text" style="width: 40px; margin-left: 30px">
                
            </div>`
            selectDiv.appendChild(newDiv1);
            console.log("program fase 1");
            console.log("program fase 2");
        }
        AddSubmitBtn();
        console.log(input)

    // showBtn.setAttribute("disabled")
}

function AddSubmitBtn(){
    console.log("PROGRAM PASE 1 IN PRINT input btn");
    const secDiv = document.createElement('div');
    secDiv.innerHTML = `<button id="result" onClick="resultMatch()"> Submit </button>`;
    referBtn.appendChild(secDiv);
}

function resultMatch(){
    console.table(corr);
    console.log()
}