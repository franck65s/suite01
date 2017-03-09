/*
    Ecrire une fonction "getHumanTypeByAge",
    qui prend un paramètre un nombre,
    et qui retourne une chaine de caractère:
        - "enfant" si le nombre est strictement inférieur à 12
        - "ado" si le nombre est supérieur ou égal à 12 et strictement inférieur à 18
        - "adulte" si le nombre est supérieur ou égal à 18 et strictement inférieur à 124
        - "impossible... ou encore jamais vu" si le nombre est supérieur ou égal à 124
            ou si le nombre est strictement inférieur à 1;

*/

/*      Test 1
    Appel à la fonction "getHumanTypeByAge",
    prenant en paramètre le nombre -5,
    et nous attendons comme résultat "impossible... ou encore jamais vu";
*/
function getHumanTypeByAge(val){
if(val >= 124 || val < 1){
    return "impossible  ....ou encore jamais vu";
}
else if(val >= 12 && val < 18){
    return "ado";
}
else if(val >= 18 && val < 124){
    return "adulte";
}
else if(val <12){
return "enfant";
}
}



console.log(getHumanTypeByAge(-5));

/*      Test 2
    Appel à la fonction "getHumanTypeByAge",
    prenant en paramètre le nombre 6,
    et nous attendons comme résultat "enfant";
*/

console.log(getHumanTypeByAge(6));

/*      Test 3
    Appel à la fonction "getHumanTypeByAge",
    prenant en paramètre le nombre 17,
    et nous attendons comme résultat "ado";
*/

console.log(getHumanTypeByAge(17));

/*      Test 4
    Appel à la fonction "getHumanTypeByAge",
    prenant en paramètre le nombre 33,
    et nous attendons comme résultat "adulte";
*/

console.log(getHumanTypeByAge(33));

/*      Test 5
    Appel à la fonction "getHumanTypeByAge",
    prenant en paramètre le nombre 140,
    et nous attendons comme résultat "impossible... ou encore jamais vu";
*/

console.log(getHumanTypeByAge(140));

//  écrire votre code sous ce commentaire
