var entrypoint = document.getElementById('pizza');

entrypoint.innerHTML = "<p>This is a piece of text</p>";

window.addEventListener("load", function() {
    
entrypoint.innerHTML = 
`<div class="layout">
    <div class="verticalDisplay">
        <div class="pizzaNav"></div>
        <div class="pizzaAndPrice"></div>
        <div class="pizzaOptions"></div>
    </div>
</div>`;
})



var total = 0;
addTopping(topping); {
  This.total += topping.cost;
  document.getElementByID("total").innerHTML = this.total;
}

if (topping >= 2 < 5 || topping.extra){
    total + 1;
    console.log(this.total)
}
 else if (topping = 5) {
     total + 3;
     console.log(this.total)
 }
 else if (topping > 5) {
     total + 4
     console.log("Special Deal " + this.total)
     
 }
 else {
     console.log(this.total)
 }



function size1(){
     var checkbox = document.getElementById("XL");
     var text = document.getElementById("text1");

    if (checkbox.checked == true){
         text.style.display = "block";
     } else {
         text.style.display = "none";
     }
    }
     function size2(){
        var checkbox = document.getElementById("Large");
        var text = document.getElementById("text2");
   
        if (checkbox.checked == true){
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    function size3(){
        var checkbox = document.getElementById("Medium");
        var text = document.getElementById("text3");
   
        if (checkbox.checked == true){
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    function size4(){
            var checkbox = document.getElementById("Small");
            var text = document.getElementById("text4");
       
            if (checkbox.checked == true){
                text.style.display = "block";
            } else {
                text.style.display = "none";
            }
        
 }