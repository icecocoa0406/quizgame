const quiz=[
    {
        question:'瀧澤直也の年齢は何歳でしょうか？',
        answers:[
            '15歳',
            '18歳',
            '20歳',
            '22歳'
        ],
        correct:'20歳'
    },    {
        question:'瀧澤直也の趣味は何でしょうか？',
        answers:[
            '料理',
            'ゲーム',
            'サッカー',
            'お昼寝'
        ],
        correct:'ゲーム'
    },    {
        question:'瀧澤直也の身長は何センチでしょうか？',
        answers:[
            '165cm',
            '170cm',
            '175cm',
            '180cm'
        ],
        correct:'170cm'
    }
];

const quizLength=quiz.length;
let quizIndex=0;
let score=0;

const $button=document.getElementsByTagName('button')
const buttonLength=$button.length;

const setupQuiz=()=>{
    document.getElementById('js-question').textContent= quiz[quizIndex].question;

    let buttonIndex=0;

    while(buttonIndex<buttonLength){
        $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler=(e)=>{
    if(quiz[quizIndex].correct===e.target.textContent){
        window.alert('正解です。');
        score++;
    }else{
        window.alert('不正解です。');
    }

    quizIndex++;

    if(quizIndex<quizLength){
        setupQuiz();
    }else{
        window.alert('クイズ終了！あなたの正解数は'+quizLength+'問中'+score+'問です！')
    }
}

let handleIndex=0;

while(handleIndex<buttonLength){
    $button[handleIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handleIndex++;
}