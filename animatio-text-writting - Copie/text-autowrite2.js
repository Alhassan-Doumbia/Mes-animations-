// // const titleEl=document.getElementById('title');
// // const title=titleEl.textContent;
// // let wordlist=title.split(" ");
// // //on met le contenu du h1 à rien 
// // titleEl.innerHTML="";

// // // on utilisera une promesse pour creer une sorte de fonction sleep qui arrêtera l'execution du code jusqu'à ce que 
// // // la promese soit remplie ; ma promesse consstera à attendre un setTimeout d'une certaine valeur 
// // function sleep(time){
// //     return new Promise((resolve)=>{setTimeout(resolve,time)})
// // }
// // // cette fonction produit une promesse qui attends  un temsps en milliseconde  avant d easser à l'execution des autres code s
// // /**
// //  * 
// //  * @param {Array} value 
// //  */

// // async function textAppearing(value){
// //     for (let i=0;i<value.length;i++){
// //         let word=value[i];
// //         for(let j=0;j<word.length;j++){
// //             //on rajoute chacun des caractère d'une phrase dans le h1
// //             setTimeout(()=>{  titleEl.textContent+=`${word[j]}`},1000)//(i * word.length + j + 1))  
// //             if(j===word.length-1){ word+=" "}
// //         }
// //         console.log(word)     //dbeugging
// //         let awaitingTime=1000*word.length;
// //         console.log(awaitingTime);
// //         await sleep(awaitingTime);
// //     }
// // }
// // textAppearing(wordlist);



// const titleEl=document.getElementById('title');
// const title=titleEl.textContent;
// let wordlist=title.split(" ");
// //on met le contenu du h1 à rien 
// titleEl.innerHTML="";

// // on utilisera une promesse pour creer une sorte de fonction sleep qui arrêtera l'execution du code jusqu'à ce que 
// // la promese soit remplie ; ma promesse consstera à attendre un setTimeout d'une certaine valeur 
// function sleep(time){
//     return new Promise((resolve)=>{setTimeout(resolve,time)})
// }
// // cette fonction produit une promesse qui attends  un temsps en milliseconde  avant d easser à l'execution des autres code s
// /**
//  * 
//  * @param {Array} value 
//  */

// async function textAppearing(value){
//     for (let i=0;i<value.length;i++){
//         let word=value[i];
//         for(let j=0;j<word.length;j++){
//             //on rajoute chacun des caractère d'une phrase dans le h1
//             setTimeout(()=>{  titleEl.textContent+=`${word[j]}`},1000)//(i * word.length + j + 1))  
//             if(j===word.length-1){ word+=" "}
//         }
//         console.log(word)     //dbeugging
//         let awaitingTime=1000*word.length;
//         console.log(awaitingTime);
//         await sleep(awaitingTime);
//     }
// }
// textAppearing(wordlist);



const titleEl = document.getElementById('title');
const title = titleEl.textContent;
let wordlist = title.split(" ");
titleEl.innerHTML = "";

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

async function textAppearing(value) {
    for (let i = 0; i < value.length; i++) {
        let word = value[i];
        let wordContainer = document.createElement('span');
        wordContainer.className = 'appear';
        titleEl.appendChild(wordContainer);

        for (let j = 0; j < word.length; j++) {
            let char = document.createElement('span');
            char.textContent = word[j];
            wordContainer.appendChild(char);
            await sleep(100); // Délai entre chaque caractère
        }

        titleEl.appendChild(document.createTextNode(' ')); // Ajoute un espace après chaque mot
        await sleep(500); // Délai entre chaque mot
    }
}

textAppearing(wordlist);
// Explicatio de ce code : en gros c'est des spans dans des spans 
// On a créé une animation dans le css qui fais l'apparition , et dans le premier span qui est d'abord vide 
// on ajoute les mots un par un avec leur contenu dans un deuxième span grace à la deuxieme boucle et cela on le fait 
// avec la fonction sleep que j'ai créé  
// après la boucle  qui ajoute le caractère du mot  on ajoute un espace entreles mots et puis on utiise encore 
// ma fonction sleep pour faire fonctionner tout ca 