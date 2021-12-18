var valid = require('validator');

var result= valid.isEmail("abc@hady.com");
if(result==true){
    console.log("Valid Email");}
else{
    console.log("Invalid Email");}


