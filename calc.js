
//@PARIBARTAN DHAKAL, JULY 19, 2018

var number1="";
var num_array=[];
var op_array=[];
var answer="";
var operator="";
var operator_bool=false;      //variable set to true when user clicks on any operations. 
var equal_bool=false;         //variable set to true when user clicks on equal button
                            //so that num_array doesn't push an empty string which might lead to NaN.                     
var case3=true;
var do_equal=false;         //for case 6b
var new_num_array=[];
var operator_copy="";

$(function(){

  $('.button').click(function(){

    do_equal=true;
    //this checks whether the user has clicked any operation or not
    //if yes, it will clear out the display for next number
    if (operator_bool) {
      $('#display').val('');
    }
    number1=number1+this.value;
    $('#display').val(number1); 

    if(number1!="" && op_array.length==0)
    {
      case3=true;
    }
  });

  $('.operation').click(function(){
    operator_bool=true;
    do_equal=false;
    op_array.push(this.id);

    //this is for case 4
    if(number1!="" && op_array.length>1) {
      console.log(num_array);
      console.log('i am 3');
      num_array.push(number1);
      operator=op_array[0];
      answer=operate(operator);
      $('#display').val(answer);
      op_array.shift();
      num_array=[]
      num_array.push(answer);
      number1="";

     }
     //this is for case7
      else if(op_array.length==2)
    {
      console.log("i am 4");
      op_array.shift();
    }
    //this checks whether the user has clicked equal to sign or not
    //if yes, won't let empty string to be pushed on the num_array.
      else if (!equal_bool ){
      console.log('I am 1')
      num_array.push(number1);
      number1="";
    }

    //this is for case 3
    else if(equal_bool && case3){
      console.log('i am 2');
      num_array=[];
      num_array.push(number1);
      number1="";
    }    
  });

  $('#clearButton').click(function(){
    number1="";
    num_array=[];
    op_array=[];
    answer="";
    $('#display').val('');

  });

  $('#equalsButton').click(function(){
    
    equal_bool=true;
    case3=false;

    //for every other case   
    if(num_array.length==1 && op_array.length==1 && do_equal)
    {
      num_array.push(number1);
      new_num_array=num_array.slice();
      operator=op_array.pop();
      operator_copy=operator;
      answer=operate(operator);
    }
     //for case 6b
     else if (num_array.length==1 && op_array.length==1)
    {  
      answer=num_array[0];
    }
    //for case 6c;
    else if(number1=="" && answer=="")
    {
      num_array.push(new_num_array[1]); 
      operator=operator_copy;
      answer=operate(operator);
    }

    //if the user has not pressed any operator case 6 first part
    else if(op_array.length==0){
      console.log("i am here2!");
      answer=number1;
      num_array.push(answer);
      operator="";
    }
    $('#display').val(answer);
    number1="";
    answer="";  
  });

  function operate(operator){
    switch(operator){
      case "addButton":
        answer=parseInt(num_array[0])+parseInt(num_array[1]);
        num_array=[];
        num_array.push(answer);
        break;
      case "subtractButton":
        answer=parseInt(num_array[0])-parseInt(num_array[1]);
        num_array=[];
        num_array.push(answer);
        break;
      case "multiplyButton":
        answer=parseInt(num_array[0])*parseInt(num_array[1]);
        num_array=[];
        num_array.push(answer);
        break;
      case "divideButton":
        if (parseInt(num_array[1])==0)
        {
          answer="Infinity";
        }
        else{
          answer=parseInt(num_array[0])/parseInt(num_array[1]);
          num_array=[];
          num_array.push(answer);
        }
        break;
    }
    return answer;
  }
  
});