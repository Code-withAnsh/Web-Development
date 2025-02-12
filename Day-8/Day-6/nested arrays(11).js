//see notes for dry run
let heroes = [['ironman', 'spiderman', ' thor'],['superman','winder woamn','flash']];
for(let i =0; i<heroes.length; i++){
    console.log(`list #${i}`);
    for(let j = 0; j<heroes.length; j++){
        console.log(heroes[i][j]);
    }
}