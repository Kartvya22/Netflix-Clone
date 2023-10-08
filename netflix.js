
let questions = document.getElementsByClassName('question');
let answer = document.getElementsByClassName('answer');
let icons = document.getElementsByClassName('icon');

// console.log(questions,answer,icons);
// console.log(questions.length);

for(let i=0; i<questions.length; i++){
    questions[i].addEventListener('click', () => {
        if(parseInt(answer[i].style.height) != answer[i].scrollHeight){
          answer[i].style.height =  (answer[i].scrollHeight + 20) + "px";
          icons[i].classList.add('active');

        }
        else{
            answer[i].style.height = "0px";
            icons[i].classList.remove('active');
        }

        for(let j=0; j<answer.length; j++){
            if(j !== i){
                answer[j].style.height = "0px";
                icons[j].classList.remove('active');
            }
        }
    })
}