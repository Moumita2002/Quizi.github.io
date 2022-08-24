let questionBank=[
    {
        question: "Which veda depicts the infromation about the most ancient vedic age culture?",
        o: [{ans:"Rig Veda", isCorrect:true},
        {ans:"Yajur Veda", isCorrect:false},
        {ans:"Atharva Veda", isCorrect:false},
        {ans:"Sama Veda", isCorrect:false}
        ]
    }, 
    
    {
        question: "What is the full form of HTML?",
        o:[
            {ans:"Hyper Text Markup Language", isCorrect:true},
            {ans:"Hidden Text Marking Level", isCorrect:false},
            {ans:"Hyper Text Marking Language", isCorrect:false},
            {ans:"Hyper Text Making Language", isCorrect:false}
        ]
    }, 

   

    {
        question: "Which of the following is related to Bharat Nirman Scheme?",
        o:[
            {ans:"Foodgrain production self sufficiency", isCorrect:false},
            {ans:"Family welfare programme", isCorrect:false},
            {ans:"Infrastructure development", isCorrect:true},
            {ans:"Employment generation program", isCorrect:false}

        ]
    }, 

    {
        question: "The hottest planet in the solar system?",
        o:[
            
                {ans:"Mercury", isCorrect:false},
                {ans:"Venus", isCorrect:true},
                {ans:"Mars", isCorrect:false},
                {ans:"Jupiter", isCorrect:false}
            
        ]
    }, 

    {
        question: "Where was the electricity supply first introduced in India?",
       
        o:[
            
            {ans:"Mumbai", isCorrect:false},
            {ans:"Dehradun", isCorrect:false},
            {ans:"Darjeeling", isCorrect:true},
            {ans:"Chennai", isCorrect:false}
        
    ]
    }


];

let i=0;
let correct=0;
var start=true;
let selected="";

let loadQuestions=()=>
{
    let question=document.querySelector(".q");
    let option1=document.querySelector("#option1");
    let option2=document.querySelector("#option2");
    let option3=document.querySelector("#option3");
    let option4=document.querySelector("#option4");
    let tot_ques=document.querySelector(".tot_ques");

    question.innerHTML=questionBank[i].question;
    option1.innerText=questionBank[i].o[0].ans;
    option2.innerText=questionBank[i].o[1].ans;
    option3.innerText=questionBank[i].o[2].ans;
    option4.innerText=questionBank[i].o[3].ans;
    tot_ques.innerText="Question No. : " + (i+1) + "/5";


    option1.value=questionBank[i].o[0].isCorrect;
    option2.value=questionBank[i].o[1].isCorrect;
    option3.value=questionBank[i].o[2].isCorrect;
    option4.value=questionBank[i].o[3].isCorrect;

    option1.addEventListener("click", () => {
        option1.style.backgroundColor = "crimson";
        option2.style.backgroundColor = "black";
        option3.style.backgroundColor = "black";
        option4.style.backgroundColor = "black";
        selected = option1.value;
    })
    
    // Show selection for op2
    option2.addEventListener("click", () => {
        option1.style.backgroundColor = "black";
        option2.style.backgroundColor = "crimson";
        option3.style.backgroundColor = "black";
        option4.style.backgroundColor = "black";
        selected = option2.value;
    })
    
    // Show selection for op3
    option3.addEventListener("click", () => {
        option1.style.backgroundColor = "black";
        option2.style.backgroundColor = "black";
        option3.style.backgroundColor = "crimson";
        option4.style.backgroundColor = "black";
        selected = option3.value;
    })
    
    // Show selection for op4
    option4.addEventListener("click", () => {
        option1.style.backgroundColor = "black";
        option2.style.backgroundColor = "black";
        option3.style.backgroundColor = "black";
        option4.style.backgroundColor = "crimson";
        selected = option4.value;
    })
    
}
loadQuestions();

let submit=document.querySelector(".submit");

submit.addEventListener("click", ()=>
{
    if(selected==="true"){
        correct++;
        console.log(selected);
    }
    else
    {
        correct+=0;
        console.log(selected);
    }

    if(i<4)
    {
        i++;
        loadQuestions();
        console.log(i);
    }
    else{
        console.log(correct);
        let text=document.querySelector("#text");
        if(correct==5)
        {
        text.innerHTML=
        `<h1>Hurray! You have completed the quiz</h1>
        <h2>Your Score : ${correct}/5</h2> 
        <h3>🤩</h3>
        <button class="restart_button" onclick="location.reload()">Restart</button>
        `;
        }
        if(correct>=3 && correct<=4)
        {
        text.innerHTML=
        `<h1>Hurray! You have completed the quiz</h1>
        <h2>Your Score : ${correct}/5</h2> 
        <h3>😊</h3>
        <button class="restart_button" onclick="location.reload()">Restart</button>
        `;
        }
        if(correct<=2)
        {
        text.innerHTML=
        `<h1>Hurray! You have completed the quiz</h1>
        <h2>Your Score : ${correct}/5</h2> 
        <h3>😐</h3>
        <button class="restart_button" onclick="location.reload()">Restart</button>
        `;
        }
        if(correct==0)
        {
        text.innerHTML=
        `<h1>Hurray! You have completed the quiz</h1>
        <h2>Your Score : ${correct}/5</h2> 
        <h3>😥</h3>
        <button class="restart_button" onclick="location.reload()">Restart</button>
        `;
        }
        
        text.classList.remove('result');
        let container=document.querySelector(".container");
        container.remove();
    }
})
