
var allProducts = document.querySelectorAll(" .list  li")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")

var totalPrice= 0
var show = document.querySelector("#show")
// ///////////////////////////////////////////////////

allProducts.forEach(function (item){
item.onclick =function (){
    totalPrice += +(item.getAttribute("price"))
content.innerHTML += item.textContent + "   "

if(content.innerHTML !="" ){
btn.style.display="block" 

}
}
})

btn1.onclick =function ()  {
    
    document.getElementById("show").innerHTML=(totalPrice)
      
    }

   


     if (confirm("Do you have an account in Trade Line?")) {
        // code to execute if the user clicked "OK"
          prompt("Enter Your Email")
      } else {
        // code to execute if the user clicked "Cancel"
        console.log("User does not have an account in Trade Line.");
      }
   
       
    
     

    // //////////////////////////////////////////////







