  /* 
  Exercice 1
  -- Transformer un tableau en chaîne de caractère --
  1. La fonction reçoit en paramètre un tableau
  2. Initialiser la variable de sortie -> une chaîne de caractère
  3. Créer une boucle qui va de 0 jusqu'à la longueur du tableau
  4. Ajouter à la variable de sortie chaque case du tableau
  5. Retourner la variable de sortie
  */

  function tabToString(tab){
    // let sArr = t
    // let res = ''

    //   for (let i = 0; i < t.length; i++) {
    //   res += sArr[i] + '';

    let res = ""
    for (let i = 0; i < tab.length; i++) {
      res += tab[i];
    }
    return res
    // console.log(res)
  }

  /* 
  Exercice 2
  -- Transformer une chaîne de caractère en tableau --
  0. Regardez ce que fait la méthode "push"
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser la variable de sortie -> un tableau
  3. Créer une boucle qui va de 0 jusqu'à la longueur de la chaîne de caractère
  4. Ajouter chaque caractère à une case du tableau de sortie
  5. Retourner la variable de sortie
  */

  function stringToTab(str){
    let res = []
    
    for (let i = 0; i < str.length; i++){
      res.push(str[i]);
    }
    return res
  }

  /* 
  Exercice 3
  -- Transformer un tableau en chaîne de caractère version rapide --
  0. Regardez ce que fait la méthode "concat"
  1. La fonction reçoit en paramètre un tableau
  2. Initialiser une variable "resLeft" qui va être remplie avec la partie gauche du tableau
  3. Initialiser une variable "resRight" qui va être remplie avec la partie droite du tableau
  4. Initialiser une variable "j" qui va être égale à la longueur du tableau -1
  5. La boucle va parcourir le tableau à la fois depuis la droite et depuis la gauche.
     Pour se faire on va à chaque itération ajouter 1 ("i") à une variable soustraire 1 ("j") à l'autre.
     À créer donc une boucle qui commence à 0 et qui va jusqu'à "j" (qui diminuera de 1 à chaque itération)
  6. Dans la boucle, ajouter chaque case du tableau en partant du début à resLeft 
  7. Dans la boucle, tester si on est pas sur la même case avec "i" et "j"
  8. Si on est pas sur la même case, ajouter chaque case du tableau en partant de la fin resRight
     Attention au sens de l'ajout
  9. Décrémenter "j" 
  8. Quand la boucle est finie, on concatène resLeft et resRight et on retourne la valeur
  */

  function tabToStringFast(tab){
    //initialise les variables
    let resLeft = ""
    let resRight = ""
    let j = tab.length -1;
    let res = ""
    let sam = ""

    //boucle : debut +1 / fin -1 
    for (let i = 0; i <= j; i++){
      resLeft += tab[i]
      resRight += tab[j]
      j--    
    }

    //boucle : inverse l'ordre des lettres
    for (let i = resRight.length-1; i >= 0; i--){
      sam += resRight[i]
    }
    // console.log(sam)

    //couper une des valeurs - l'index de la fin pour enlever "r" en trop
   res = resLeft.slice(0,-1).concat(sam)  

    return res
  }

  /* 
  Exercice 4
  -- Transformer une chaîne de caractère en tableau version rapide --
  0. Regardez ce que fait la méthode "unshift"
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser une variable "resLeft" qui va être remplie avec la partie gauche de la chaîne
  3. Initialiser une variable "resRight" qui va être remplie avec la partie droite de la chaîne
  4. Initialiser une variable "j" qui va être égale à la longueur de la chaîne -1
  5. La boucle va parcourir la chaîne à la fois depuis la droite et depuis la gauche.
     Pour se faire on va à chaque itération ajouter 1 ("i") à une variable soustraire 1 ("j") à l'autre.
     À créer donc une boucle qui commence à 0 et qui va jusqu'à "j" (qui diminuera de 1 à chaque itération)
  6. Dans la boucle, ajouter chaque caractère de la chaîne en partant du début à chaque case de resLeft 
  7. Dans la boucle, tester si on est pas sur le même caractère avec "i" et "j"
  8. Si on est pas sur le même caractère, ajouter chaque chaque caractère de la chaîne en partant 
     de la fin à chaque case de resRight. Attention à ajouter à chaque fois à la dernière case
  9. Décrémenter "j" 
  8. Quand la boucle est finie, on concatène resLeft et resRight et on retourne la valeur
  */

  //correction =>
  /* 
  Exercice 4
  -- Transformer une chaîne de caractère en tableau version rapide --
  0. Regardez ce que fait la méthode "unshift"
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser une variable "resLeft" qui va être remplie avec la partie gauche de la chaîne
  3. Initialiser une variable "resRight" qui va être remplie avec la partie droite de la chaîne
  4. Initialiser une variable "j" qui va être égale à la longueur de la chaîne -1
  5. La boucle va parcourir la chaîne à la fois depuis la droite et depuis la gauche.
     Pour se faire on va à chaque itération ajouter 1 ("i") à une variable soustraire 1 ("j") à l'autre.
     À créer donc une boucle qui commence à 0 et qui va jusqu'à "j" (qui diminuera de 1 à chaque itération)
  6. Dans la boucle, ajouter chaque caractère de la chaîne en partant du début à chaque case de resLeft 
  7. Dans la boucle, tester si on est pas sur le même caractère avec "i" et "j"
  8. Si on est pas sur le même caractère, ajoute à resRight chaque caractère de la chaîne en partant 
     de la fin de celle-ci. Chaque caractère sera ajouté au début de resRight
     Exemple : La fin de la chaîne est égale à "eau". Première boucle on va avoir pour resRight "u".
     2ème on va avoir "au". Et dernière, on va avoir "eau". Chaque fois le caractère est ajouté au début.
  9. Décrémenter "j" 
  8. Quand la boucle est finie, on concatène resLeft et resRight et on retourne la valeur
  */

  function stringToTabFast(str){
    let resLeft = []
    let resRight = []
    let j = str.length -1
    let res = []

    for (let i = 0; i <= j; i++){
      resLeft.unshift(str[i])
      resRight.unshift(str[j])
      j--    
    }
    
    res = resLeft.reverse().concat(resRight)
    return res
 }

  

  /* 
  Exercice 5
  -- Transformer un tableau en chaîne de caractère version récursive --
  0. Regarder ce que fait la méthode "slice"
  1. La fonction reçoit en paramètre un tableau
  2. Initialiser la variable de sortie
  3. On regarde si notre la longueur du tableau est plus grande que 0
  4. Si notre la longueur du tableau est plus grande que 0, on concatène à notre valeur de sortie
     la valeur de la première case du tableau avec le résultat de notre fonction qu'on rappel en lui 
     renvoyant un tableau avec la première case en moins
  5. On retourne le résultat concaténé 
  */

  function tabToStringRec(tab) {
    let res = "";

    if (tab.length > 0){
      res = tab[0] + tabToStringRec(tab.slice(1));
      // res = res.concat(tab[0]); 
      // res = res.concat(tabToStringRec(tab.slice(1)));
    }
      
    return res;
  }

  /* 
  Exercice 6
  -- Transformer une chaîne de caractère en tableau version récursive --
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser la variable de sortie
  3. On regarde si la longueur de chaîne est plus grande que 0
  4. On ajoute à la variable de sortie, à la case suivante, le premier caractère de la chaine
  5. On concatène à notre valeur de sortie le résultat de notre fonction qu'on rappel en lui 
     renvoyant la chaine de caractère emputée de son premier caractère
  6. On retourne le résultat concaténé 
  */
  
  function stringToTabRec(str) {   
    let res = [];
    
    if (str.length > 0){
     
      res.push(str[0]);

      res = res.concat(stringToTabRec(str.slice(1)));
      
    }
      
    return res;
  }

  
  /* 
  Exercice 7
  -- Chercher si un mot est un palindrome --
  0. On va comparer la première lettre avec la dernière, puis la seconde avec l'avant dernière, etc.
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Initialiser la variable de boucle "j" qui a comme valeur de départ la longuer de la chaîne
  3. Initialises la boucle avec comme condition que la boucle continue tant que la variable 
     qui s'incrémente "i" soit plus petite que celle qui se décrémente "j" (que les indices se rejoignent)
  4. Tester les caractères courant entre eux (1er avec dernier, 2nd avec avant dernier, etc.)
  5. Si le test trouve des valeurs différentes entre les deux caractères comparés, 
     alors on retourne "faux"
  7. On décrémente la variable "j" et incrémente "i" (automatique dans une boucle for pour cett dernière)
  6. Une fois la boucle terminée, on retourne "vrai" en dehors de la boulce
  */

  function isPalindrome(str){
    let j = str.length;
    let test = true

    for (let i = 0; i < j; i++){

      if (str[i] !== str[j = j - i]){ 
       
        test = false
       
      }else{

        test = true

      }
      
    }
    return test
  }

  /* 
  Exercice 8
  -- Chercher si un mot est un palindrome version recursive --
  0. On va comparer la première lettre avec la dernière, puis la seconde avec l'avant dernière, etc.
  1. La fonction reçoit en paramètre une chaîne de caractère, l'indice du caractère à gauche et l'indice
     du caractère à droite (on va sans cesse comparer ces deux caractère). Les valeurs par séfaut sont
     respectivement 0 et la longeur de la chaîne de caractère
  2. Tester si l'indice de gauche et celui de droite ne se sont pas rejoint ou dépassé
  3. Tester si le caractère de gauche et celui de droite sont égaux.
    3a. Si c'est le cas, continuer à chercher en relançant la fonction, en retournant son résultat,
        avec comme paramètre toujours la chaîne mais aussi l'indice de gauche augmenté de 1 et 
        l'indice de droite diminué de 1
    3b. Si les deux caractères sont différents, renvoyer "faux"
  4. En dehors du test, retourner "vrai" (cela veut dire qu'on aura soit lancé toutes les instructions,
     soit que gauche et droite se seront rejoint ou dépassé.)
  */

  function isPalindromeRecursif(str,left=0,right=str.length-1){  

    let test;

    for (left = 0; left < right; left++){

      if (str[left] == str[right]){
          isPalindromeRecursif(str, ++left, --right)
          test = false
      }else{
          test = true
      }
    }
    return test
  }

  /* 
  Exercice 9
  -- Chercher si un mot est un palindrome version recursive avec coupe de chaîne --
  0. On va à chaque fois comparer la première lettre avec la dernière. À chaque récursion, on va
     emputer la chaîne du premier et dernier caractère.
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. Tester si la chaîne est vide ou à 1 de longueur (soit dès le départ on a un palindrome, soit
    à force de couper la chaîne et après avoir fait toute les comparaisons on a un palindrome)
  3. Si c'est le cas, on retourne "vrai" 
  4. Tester si le caractère le premier caractère de la chaîne est égal au dernier.
    4a. Si c'est le cas, continuer à chercher en relançant la fonction, en retournant son résultat,
        avec comme paramètre toujours la chaîne mais le premier et le dernier caractère en moins
    4b. Si les deux caractères sont différents, renvoyer "faux"
  */

  function isPalindromeRecursifSubString(str){
    
    if(str.length === 0) { 
      
      return true;
    
    }

    if(str[0] !== str[str.length-1]){ 
      
      return false;
    
    }
    
    return isPalindromeRecursifSubString(str.substr(1,str.length-2));
 
  }

  

  /* 
  Exercice 10
  -- Inverser une chaîne de caractère en partant de la fin de celle-ci --
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. On initialise la variable de retour
  3. On initialise la boucle pour partir de la fin de la chaine et décrémenter de 1 jusqu'à 0
  4. À chaque pas de boucle, on conctène le caractère courant à notre variable de retour
  5. On retourne notre variable de retour en sortie de boucle 
  */

  function strInvertForEnd(str){
    let retour = ""

    for (let i = str.length - 1; i >=  0; i--) {

      retour += str[i];

    }
    return retour
  }

  /* 
  Exercice 11
  -- Fonction permettant d'échanger de place des caractère dans une chaîne grace à substring --
  1. La fonction reçoit en paramètre une chaîne de caractère et les indices des deux éléments à échanger
  2. On concatène différentes partie de la chaîne
    2a. On découpe la partie de gauche jusqu'au premier élément
    2b. On ajoute le second élément
    2c. On ajoute la partie de chaîne entre les deux éléments
    2d. On ajoute le premier élément
    2e. On ajoute la fin de chaîne à partir du second élément
  3. On retourne le tout concaténé à la sortie (de la boucle)
  */

  function swapStr(str, a, b){

    a = str[0]
    b = str[2]

    let c = str.split("");
    
    for (let i = 0; i< c.length; i++) {
      if (c[i] === a) {
        c[i] = b;

      }else if 
        
        (c[i] === b) {
          c[i] = a;
        }
    }
      return c.join('')
    
  }

  /* 
  Exercice 12
  -- Fonction permettant d'inverser les lettres d'une chaîne de caractère en utilisant la fonction 
  précédente qui permet d'échanger des lettres --
  0. Cette fonction va prendre les caractères de gauche et ceux de droite et les échanger les uns avec
  les autres en allant vers le centre jusqu'à ce que la chaîne soit complétement inversée
  1. La fonction reçoit en paramètre une chaîne de caractère
  2. On initialise la variable de l'indice de droite en lui affectant la longueur de la chaîne 
  3. On initialise la valeur de retour en lui affectant la valeur d'entrée de la fonction
  4. On initialise la boucle avec comme condition de sortie que l'indice de gauche rejoint l'indice de droite
  5. On affecte à la valeur de retour le résultat de notre fonction échangeant des lettres
  6. On décrémente la valeur de l'indice de droite 
  4. On retourne le résultat à la sortie de la boucle
  */

  function strInvertFor(str){
    let right = str.length;
    let left = str[0];

    for (left = 0; left < right; left++){
        return swapStr(str)
        
    }
    right--
    return str
  }

  /* 
  Exercice 13
  -- Fonction permettant d'échanger de place des valeurs dans un tableau --
  0. À savoir que les tableaux se comportent comme des variables publiques
  1. La fonction reçoit en paramètre un tableau et les indices des deux éléments à échanger
  2. On initialise une valeur temporaire en lui affectant la valeur se trouvant au premier indice
     dans le tableau
  3. On affecte à la case du tableau avec le premier indice la valeur de la case du tableau au second indice
  4. On affecte à la case du tableau avec le second indice la valeur de la variable temporaire
  5. Pas besoin de retourner de valeur car le tableau est directement affecté
  */

  function swap(tab, a, b){
    let c = tab[a]
    tab[a] = tab[b]
    tab[b] = c
  }

  /* 
  Exercice 14
  -- Fonction permettant d'inverser les cases d'un tableau avec leurs valeurs en utilisant la fonction 
  précédente qui permet d'échanger des cases de tableau avec leurs valeurs --
  0. Cette fonction va prendre les cases de gauche et celles de droite et les échanger les uns avec
  les autres en allant vers le centre jusqu'à ce que tout soit inversé
  1. La fonction reçoit en paramètre un tableau
  2. On initialise la variable de l'indice de droite en lui affectant la longueur du tableau
  3. On initialise la boucle avec comme condition de sortie que l'indice de gauche rejoint l'indice de droite
  4. On lance la fonction échangeant des cases
  5. On décrémente la valeur de l'indice de droite 
  6. On retourne le tableau qu'on a reçu en entrée de fonction
  */

  function tabInvertFor(tab){
    let res = tab
    let r = tab.length-1;

    for (let i = 0; i < r; i++){
      swap(res, i, r);
      r--;
      
    }
    return res
  }

  /* 
  Exercice 15
  Commentez et expliquez la fonction suivante :
  */

  //Fonction permettant d'inverser un string 
  //(En gros, on regarde si le string peut être divisé en part égal, si oui, on inverse, sinon on crée une opperation pour definir la moitier et ainsi pouvoir l'inverser)
  function strInvertRec(str,right=0,left=str.length-1,res="") {   
    //si la droite et pareil que la gauche...
    if (right == left){
      //...alors le resultat sera le resultat + string de gauche
      res = res + str[left];
    }else{ //sinon...
      //...On initialise une variable "mid" qui prend la partie de droite + un chiffre entier qui est inférieur ou égal à un nombre lié à gauche et droite, divisé par 2
      let mid = right + Math.floor((left-right)/2);
      //...On initialise une variable "resLeft" qui appel la fonction strInvertRec et rajoute le paramètre "mid"
      let resLeft = strInvertRec(str, right, mid, res);
      //...On initialise une variable "resRight" qui appel la fonction strInvertRec et rajoute +1 au paramètre "mid"
      let resRight = strInvertRec(str, mid+1, left, res);
      
      //Si resLeft est plus grand que 0...
      if (resLeft.length > 0){
        //...alors le resultat sera le resultat + resLeft
        res =  res + resLeft;
      }
      //Si resRight est plus grand que 0...
      if (resRight.length > 0){
        //...alors le resultat sera le resultat + resRight
        res = resRight + res;
      }
    }    
    //Retourne le resultat final  
    return res;
  }

  /*
  Exercice 16
  Tentez de faire une fonction d'inversion de chaîne récursive en utilisant la fonction de chaîne native
  substring
  */



  function strInvertRecSubstr(str) {
    let res ='';

    if(str.length > 0){
  
      res = strInvertRecSubstr(str.substring(1)) + str.substring(0,1);

  }
  console.log(res)
  return res;
}
  let string = "anticonstitutionnellement";
  console.log( "Exercice 16 : À l'envers, '"+string+"' s'écrit : "+strInvertRecSubstr(string)+"\n--\n");
  


  /*
  Exercice 17
  Faire des fonctions qui permettent de vérifier si une chaîne reçu en entrée est un palindrome ou non
  en utilisant les fonctions d'inversion de chaîne précédente. Une ligne avec un return suffit à chaque fois
  */

  //Avec strInvertRec
  function isPalindromeAgain(str){
    return strInvertRec(str)
  }
   isPalindromeAgain("salut")
   console.log(isPalindromeAgain("salut"))
  

  //Avec strInvertFor
  function isPalindromeAgain2(str){
    return strInvertFor(str)
  }
  isPalindromeAgain2("salut")
  console.log(isPalindromeAgain2("salut"))


  //Avec tabInvertFor
  function isPalindromeAgain3(str){
    return tabInvertFor(str)
  }
  isPalindromeAgain3("salut")
  console.log(isPalindromeAgain3("salut"))


  //Avec strInvertRecSubstr
  function isPalindromeAgain4(str){
    return strInvertRecSubstr(str)
  }
  isPalindromeAgain4("salut")
  console.log(isPalindromeAgain4("salut"))


  //Avec strInvertForEnd
  function isPalindromeAgain5(str){
    return strInvertForEnd(str)
  }
  isPalindromeAgain5("salut")
  console.log(isPalindromeAgain5("salut"))



  /*
  Exercice 18
  Faites une fonction qui cherche la valeur minimum dans un tableau avec une boucle simple
  */

  function minimumFor(tab){
    let a = tab.length
    minimum = tab[a-1];
    while (a--){
      if(tab[a] < minimum){
        minimum = tab[a]
      }
    }
    return minimum;
  }

  /*
  Exercice 19
  Faites une fonction qui cherche la valeur minimum dans un tableau avec une boucle avec deux indices
  pour parcourir le tableau depuis le début et la fin jusqu'à ce que les indices se rejoignent 
  (milieu du tableau). 
  */

  function minimumForTwoStep(tab){
    for (let i = 0; i > tab; i++){
        while (a--){
          if(tab[a] < minimum){
            minimum = tab[a]
          }
        }
      }
      return minimum
  }

  /*
  Exercice 20
  -- Fonction permettant de chercher de manière récursive la valeur minimum dans un tableau --
  1. La fonction prend en paramètre un tableau, un indice (pour la partie droite du tableau) 
     ayant 0 comme valeur par défaut et un autre indice (pour la partie gauche du tableau) ayant 
     la longueur du tableau comme valeur par défaut
  2. On initialise la valeur de retour (le minimum) en lui affectant la valeur de la case du tableau 
     à l'indice de droite
  3. On test si l'indice de droite est toujours plus petit que celui de gauche (en ce cas les deux 
     indices ne se sont pas rejoins et on continue de chercher la valeur minimu)
  4. Si la valeur de retour (voir point 2) est plus petite ou égale à la valeur de la case du tableau 
     à l'indice de gauche :
     4a. On affecte à la valeur de retour le résultat de notre fonction récursive qui aura en paramètre
         le tableau, l'indice de droite, et l'indice de gauche décrémenté de 1
     4b. SINON on affecte à la valeur de retour le résultat de notre fonction récursive qui aura en 
         paramètre le tableau, l'indice de droite incrémenté de 1, et l'indice de gauche
  5. En dehors des conditions, on retourne la valeur de retour (le minimum)
  */
  
  //Cette fonction déplace notre pointeur de gauche à droite jusqu'à se fixer sur la valeur la plus petite
  function minimumRecursif(tab,right=0,left=tab.length-1){
    let minimum = right

    if (right <= left){
        return minimumForTwoStep(tab, right, left-1)
    }else{
        return minimumForTwoStep(tab, right+1, left)
    }
  return minimum  
  }
  

  /*
  Exercice 21
  Commentez le code suivant
  */

  function minimumRecursifTwoStep(tab,start=0,end=tab.length-1,min=tab[start]){
    
    //cherche le plus petit chiffre en recursif en deux étapes
    //du debut à la fin
    if (start < end) {
      //on cherche dans la table du coté gauche et du coté droit
      if ( (tab[start]<min) || (tab[end]<min) ) {
        //si le debut est plut petit que la fin
        if (tab[start]<min) {
          //on recherche du coté gauche (du debut)
          min = minimumRecursifTwoStep(tab,start+1,end-1,tab[start]);
        }else{ //on recherche du coté droit (de la fin vers le milieux)
          min = minimumRecursifTwoStep(tab,start+1,end-1,tab[end]);
        }
      }else{ //
        min = minimumRecursifTwoStep(tab,start+1,end-1,min);
      }
    }

    //on retourne le plus petit
    return min;

  }

  /*
  Exercice 22
  Commentez et expliquez le code suivant
  */

  //retourne le plus petit chiffre en recursif
  function minimumRecursifMath(tab, len=tab.length-1) {        
      if (len == 0){ //
      //
          return tab[0]; 
      }
      //retourne le plus petit chiffre 
      return Math.min(tab[len - 1], minimumRecursifMath(tab, len - 1));
  } 

  /*
  Exercice 23
  1) Commentez et expliquez le code suivant
  2) Dessinez ou décrivez les différentes étapes afin que l'on voit ce qui se passe sur le tableau de
  départ : [1,43,98,723,-2,4,-28,17,45,13,-11,0,37,-23]
  */

  //retourne du plus petit chiffre au plus grand
  function minimumRecursifDivideAndConquer(tab,start=0,end=tab.length-1) {
    //on divise le tableux en deux
    if ((end-start) < 2){
      //on divise encore 
      return ((tab[end]<tab[start]) ? tab[end] : tab[start]);
    }else{ //
      //on divise encore
      let mid = Math.floor((end+start)/2); 
      //on met la partie gauche du tableux du plus petit au plus grand
      let minLeft = minimumRecursifDivideAndConquer(tab, start, mid);
      //on met la partie droite du tablaux du petit au plus grand
      let minRight = minimumRecursifDivideAndConquer(tab, ++mid, end);
      //on retourne le resultat du plus petit au plus grand
      return ((minLeft<minRight) ? minLeft : minRight);
    }
  }

  /*
  Exercice 24
  Faites une fonction qui permet de chercher le minimum ET le maximum dans un tableau
  Retournez un tableau de deux cases contenants ces deux valeurs
  Inspirez-vous des algos précédent
  */

  function minAndMaxRecDAC (tab,start=0,end=tab.length-1){
    // optimiser 
    let a = tab.length
    minimum = tab[a-1];
    while (a--){
      if(tab[a] < minimum){
        minimum = tab[a]
      }
    }

    let b = tab.length;
    maximum = tab[b-1];
    while (b--){
        if(tab[b] > maximum){
            maximum = tab[b]
        }
    }
    toto = [minimum, maximum]
    return toto
  }

  //Partie lançant les différents fonction et affichant leurs résultats 

  //Initialisation des variables
  let res = "";
  let t = ["J","e"," ","s","u","i","s"," ","u","n","e"," ","s","t","r","i","n","g"," ","m","a","i","n","t","e","n","a","n","t"];
  let s = "Je suis une string transformé en tableau";

  //Partie de transformation de tableau en String ou de string en tableau
  res += "Exercice 1 : "+tabToString(t)+"\n--\n";
  res += "Exercice 2 : ["+stringToTab(s)+"]\n--\n";
  res += "Exercice 3 : "+tabToStringFast(t)+"\n--\n";
  res += "Exercice 4 : ["+stringToTabFast(s)+"]\n--\n";
  res += "Exercice 5 : "+tabToStringRec(t)+"\n--\n";
  res += "Exercice 6 : ["+stringToTabRec(s)+"]\n--\n";

  //Partie Palindrome
  s ="repasser"; 
  res += "Exercice 7 : '"+s+"' est palindrome ? -> "+isPalindrome(s)+"\n--\n";
  s ="ressasser";
  res += "Exercice 7 : '"+s+"' est palindrome ? -> "+isPalindrome(s)+"\n--\n";
  s ="koala";
  res += "Exercice 8 : '"+s+"' est palindrome ? -> "+isPalindromeRecursif(s)+"\n--\n";
  s ="kayak";
  res += "Exercice 8 : '"+s+"' est palindrome ? -> "+isPalindromeRecursif(s)+"\n--\n";
  s ="turing";
  res += "Exercice 9 : '"+s+"' est palindrome ? -> "+isPalindromeRecursifSubString(s)+"\n--\n";
  s ="ada";
  res += "Exercice 9 : '"+s+"' est palindrome ? -> "+isPalindromeRecursifSubString(s)+"\n--\n";

  //Partie inversion de string ou de tableau
  s = "bons";
  res += "Exercice 10 : À l'envers, '"+s+"' s'écrit : "+strInvertForEnd(s)+"\n--\n";
  s = "rage";
  res += "Exercice 11 : si on inverse la première et troisième lettre à '"+s+"' ça donne : "+swapStr(s, 0, 2)+"\n--\n";
  s = "zen";
  res += "Exercice 10 : À l'envers, '"+s+"' s'écrit : "+strInvertFor(s)+"\n--\n";
  t = ["r","a","g","e"];
  //Regardez ce qu'il se passe dans la console
  console.log(t);
  swap(t, 0, 2);
  console.log(t);
  res += "Exercice 13 : si on inverse la première et 3ème case du tableau [r,a,g,e] ça donne :"+t+"\n--\n";
  t = ["é","c","a","r","t"];
  res += "Exercice 14 : à l'envers le tableau ["+t+"] donne : "+tabInvertFor(t)+"\n--\n";
  s = "saper";
  res += "Exercice 15 : À l'envers, '"+s+"' s'écrit : "+strInvertRec(s)+"\n--\n";

  //Partie recherche de minimum
  t = [1,43,98,723,-2,4,-28,17,45,13,-11,0,37,-23];
  res += "Exercice 18 : le plus petit chiffre dans le tableau ["+t+"] est : "+minimumFor(t)+"\n--\n";
  res += "Exercice 19 : le plus petit chiffre dans le tableau ["+t+"] est toujours : "+minimumForTwoStep(t)+"\n--\n";
  res += "Exercice 20 : le plus petit chiffre dans le tableau ["+t+"] est encore : "+minimumRecursif(t)+"\n--\n";
  
  //Partie recher de minimum et maximum
  res += "Exercice 24 : le plus petit et le plus grand chiffre dans le tableau ["+t+"] sont : "+minAndMaxRecDAC(t)+"\n--\n";
  
  //Affichage dans la textarea au chargement ou reload de la page
  window.addEventListener("load", function () {  
    document.forms['myForm'].elements['result'].value = res;
  });
  