

function calculateFoodOrder(numAnimals, avgFood) {
    // IMPLEMENT THIS FUNCTION!
    var total=Number(numAnimals)*Number(avgFood);
    if (total>0){
        return total;
    }
    else{
        return -1;
    }
}


function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!
    
    if(week && week.length){
    var length=week.length;
    var highest=week[0].traffic;
    var days=new Array();
    var day="";
    for(var i=0; i<length;++i){
        if(Number(highest)<Number(week[i].traffic)){
            highest=week[i].traffic;
            days=[week[i].name];
            day=week[i].name;

        }
        else if(Number(highest)==Number(week[i].traffic)){
            days.push(week[i].name); 
        }
        
    }

    return (days.length>1)?days:day;
    }
    return null;
}

/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!
    var animals=[];
    if (names && types && breeds && names.length == types.length && names.length == breeds.length)
    { 
      for (var i=0; i<names.length; ++i){
            animals.push({name:names[i],type:types[i],breed:breeds[i]});
      }
      return animals;
    }
    return animals;
}


function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}


function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}

function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}



function helloworld() {
    return 'hello world!';
}

