var FlirtrModel = {  
    
   var score= 0;
  
   /* It sets the phrase to analyse */
   analyse : function (phrase){
       alert("asdad");
       for (i=0; i < patterns.length();i++){
        if (phrase.contains(patterns[i][0])){
            score = score patterns[i][1];
        }
        if (phrase.contains(patterns[i][2])){
            score = score -1;
        }
        }
              
   },
  
   /* Returns the flirting score (number) of the phrase.
    * It is computed by looking for flirting patterns, 
    * adding up the individual scores of the matching
    * patterns (unless the pattern neutraliser is found to 
    * the right of the matching word)
    */
   getScore : function () {
       
    alert("score");
   }
         
};
