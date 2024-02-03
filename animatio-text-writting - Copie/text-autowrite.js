/**
 * Au chargement de la page , le h1 contenu le hello i'm Doumbia Alhassan est recuperé 
 * ensuite le contenu est split en une liste constitué de plusieurs mots (les mots du titre)
 * 
 * les contenu de cette liste seront pris pour constituer des listes  qui seront ajouté à une liste 
 * 
 * on aura donc : final_list=[[h,e,l,l,o],[j,e],[s,u,i,s],[l,e],[t,i,t,r,e]]
 * 
 * on va attirer sur cette liste et afficher chaque element un par 1 
 * 
 *Mais n'y a t'il pas un moyen plus simple ? 
    on va recuperer le contenu de l'H1 
    ensuite on vaa split ce contenu et le transformer en une liste de mots 
    on va maintenant vider le h1 
    on va utiliser la liste de motts et iterer d'abord sur la iste de mots puis sur chaque mots 
    on va ajoute rau h1 maintenant chaque lettre sur laquelle on itère maintenant sur un intervalle de 0.7s sot 700ms
    
    pour pouvoir faire ca il faudra utiliser un set interval ,un set interval qui contiendra toutes les boucles etc 


 
 */
const titleEl=document.getElementById('title');
const title=titleEl.textContent;
let wordlist=title.split(" ");
//on met le contenu du h1 à rien 
titleEl.innerHTML="";
// on a maintenant la liste de mot 
for(let i=0;i<wordlist.length;i++){
    let word=wordlist[i]
    for(let j=0;j<word.length;j++){
        //on rajoute chacun des caractère d'une phrase dans le h1
        setTimeout(()=>{  titleEl.textContent+=`${word[j]}`},700*(i * word.length + j + 1))  
    }
}



