console.log("Create a program of Saayri !");
//parameter 1. Rishta kya hai (single ,mingle) 2. Rishte ki isthathi kya hai (ACha chal rha hai , theek thak garanti ni hai) , 3. aage vale ki jisdagi me aapki tabjju kya hai (PArva krne vali hai , Thoda sa khudh daari me bhul na)


function DilEijehar (StatusOfRelation, SituationOfRelation, SecondPersoneImportanceForYou ) {
     //Status Relation
     if(StatusOfRelation === 'Mingle'){
          console.log("Haii Ye Ahsas Tumre pyaar ka inko me kese Baya karu, Todha Sabr Kr te Hai or Jikr karte hai...❤️ ", '\b');
          if (SituationOfRelation === 'Badhiya') {
               console.log("Hai Ye Rishta Meetha Sa Kese Jikr Karu Raato Ki Ninde Ud Jaati hai Tumri har nai Baat Batane main ...👀");
               if (SecondPersoneImportanceForYou === '0') {
                    console.log("nothing")
               }

          }else if(SituationOfRelation === 'Good'){
               console.log("Hai Ye Rishta Meetha Sa isme Thodi si Pyaar ke Meethash ki Kami hai Saath do Agr tum to Ye bhi Sudhar de... !",'\b');
          }

     }else if(StatusOfRelation === 'Single'){
               console.log("padhai kr le")
     }else{
          console.log("Saale Itne Jut Maaruga Sahi Value Daal !.....");
     }

     const Aehsas = "Dil ki tabjju kar li hoti agr kal to....";
     console.log(Aehsas);
     
}

//function by mingle 

DilEijehar('Mingle','Badhiya','0');