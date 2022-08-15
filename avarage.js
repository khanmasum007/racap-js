 //problem 1 radianToDegree solved

 function radianToDegree(radian) {

    // checking that  the input is a valid  number or not

    if (typeof radian !== "number") {
                 return console.log('kaku please enter a valid number');
             }

            //  this is the main condition
    else{
        const degree = ((radian * 180) / Math.PI).toFixed(2);
   return degree;
    }

  }

 
  
   






//problem 2 isJavaScriptFile solved

function isJavaScriptFile(inputFile) {

    //checking that  the input is a valid string or not

    if (typeof inputFile !== 'string') {
        return ' kaku please enter a file name';
    }

   //this is the main condition

    else if (inputFile.endsWith (".js")) {
        return true;
    } else {
        return false;
    }
}







// problem 3 oilPrice solved

function oilPrice(desel, petrol, octen){
    
//checking that  the input is a valid number or not
   
      if (typeof desel !== "number" ||typeof petrol !== "number" ||typeof octen!=="number") {
                         return console.log("please enter a valid number");
                      }
          
            

      // price declare     
                let deselPrice = 114;
                let petrolPrice = 130;
                let octenPrice = 135;

//total price for single item

                let totalDesel = deselPrice*desel;
                let totalpetrol = petrolPrice*petrol;
                let totalOcten = octenPrice*octen;

 // total price

                const totalCost = totalDesel + totalpetrol +totalOcten;
                return totalCost;
           

}





// problem 4 publicBusFar solved

function publicBusFare(peoples){

//checking that  the input is a valid number or not

    if (typeof peoples !== "number") {
        return console.log("please enter a valid number");
    }

 //this is the main condition

   else if(peoples>50){
        let peopleOfMicroBus = peoples%50;
        if(peopleOfMicroBus>11){
            let  peopleOfPublicBus = peopleOfMicroBus%11;
            let  costOfPublicBus = peopleOfPublicBus*250;
         
            return costOfPublicBus;
         }
         else{
            costOfPublicBus = peopleOfMicroBus*250;
            return costOfPublicBus;
         }
    }

    else{
        console.log(0);
    
       
        }
    }
   

// problem 5 isBestFriend solved

function isBestFriend(friend1, friend2) {

//checking that  the input is a valid object or not

    if (typeof friend1 !== 'object' && typeof friend2 !== 'object') {
        let mistake = 'kaku valo kore object inpuut din'
        return mistake ;
    }

//this is the main condition

    if (friend1.name == friend2.friend && friend2.name === friend1.friend) {
        return true;
    } else {
        return false;
    }
}




