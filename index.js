
let
   output=document.getElementById("result");
   
   
   function display(num){
	     output.value += num;
   }
   function calci(){
	   try{
	     output.value=eval(output.value);
	   }
	   catch(err){
		   alert("Don't Do")
	   }  
   }
   function clearval(){
	   output.value="";
   }
   function deleted(){
	   output.value=output.value.slice(0,-1);
   }
   