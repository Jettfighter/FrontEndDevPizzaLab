var entrypoint = document.getElementById('pizza');

entrypoint.innerHTML = "<p>This is a piece of text</p>";

window.addEventListener("load", function () {

    entrypoint.innerHTML =
        `

<div id="EntireWidget" class="layout">
<div class="verticalDisplay">
    <div class="pizzaNav">
        <h1>Je Suis Une Pizza</h1>
    </div>
    
    <div class="pizzaAndPrice">

        <div class="pizzadisplay">

        </div>
        <div class="AddToOrderWidget">

            <div class="pricearea">
                <div >Total:</div>
                <div id="price" >$0.00</div>
            </div>

            <button class="orderbutton"  data-toggle="modal" data-target="#pizzaAdded">ADD TO ORDER</button>

            <div class="modal" id="pizzaAdded">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Je Suis Une Pizza</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">Your order has been completed! Thank you for dining with us :)</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

    </div>
  </div>
</div>


        </div>
    </div>

    <div class="pizzaOptions">
       
        <h1>Pizza Sizes</h1>
        <input class="check" type="radio" id="XL" name="XL" value="Extra Large" onclick="size1()">
            <label for="XL">Extra Large</label><br>
            <p id="text1" style="display: none"> $20</p>
            
        <input class= "check" type="radio" id="Large" name="Large" value="Large" onclick="size2()">
            <label for="Large">Large</label><br>
            <p id="text2" style="display: none"> $15</p>

        <input class= "check" type="radio" id="Medium" name="Medium" value="Medium" onclick="size3()">
            <label for="Medium">Medium</label><br>
            <p id="text3" style="display: none"> $10</p>
            
        <input class= "check" type="radio" id="Small" name="Small" value="Small" onclick="size4()">
            <label for="Small">Small</label><br>
            <p id="text4" style="display: none"> $6</p>    

        <h1>Pizza Toppings</h1>

        <!--Pepperoni-->    
        <input class= "check" type="checkbox" id="pepperoniOption" name="pepperoniOption" value="Pepperoni">
            <label for="pepperoniOption">Pepperoni</label><br>
        <!--radio pepperoni options-->
        <div id="toppingOption">
        <input type="radio" id="extraPep" name="extraPep" value="Extra Pepperoni">
            <label for="extraPep">Extra Pepperoni</label><br>
        <input type="radio" id="halfPep" name="halfPep" value="Half Pepperoni">
            <label for="halfPep">Half Pepperoni</label><br>
        </div>
        <!--Sausage-->
        <input class= "check" type="checkbox" id="sausageOption" name="sausageOption" value="Sausage">
            <label for="sausageOption">Sausage</label><br>
        <!--radio sausage options-->
        <div id="toppingOption">
        <input type="radio" id="extraSaus" name="extraPep" value="Extra Sausage">
            <label for="extraSaus">Extra Sausage</label><br>
        <input type="radio" id="halfSaus" name="halfSaus" value="Half Sausage">
            <label for="halfSaus">Half Sausage</label><br>
        </div>
        <!--Ham-->
        <input class= "check" type="checkbox" id="hamOption" name="hamOption" value="Ham">
            <label for="hamOption">Ham</label><br>
        <!--radio ham options-->
        <div id="toppingOption">
        <input type="radio" id="extraHam" name="extraHam" value="Extra Ham">
            <label for="extraHam">Extra Sausage</label><br>
        <input type="radio" id="halfHam" name="halfHam" value="Half Ham">
            <label for="halfHam">Half Sausage</label><br>
        </div>
        <!--Beef--> 
        <input class= "check" type="checkbox" id="beefOption" name="beefOption" value="Beef">
            <label for="beefOption">Beef</label><br>
        <!--radio beef options-->
        <div id="toppingOption">
        <input type="radio" id="extraBeef" name="extraBeef" value="Extra Beef">
            <label for="extraBeef">Extra Beef</label><br>
        <input type="radio" id="halfBeef" name="halfBeef" value="Half Beef">
            <label for="halfBeef">Half Beef</label><br>
        </div>

        <!--Pineapple-->     
        <input class= "check" type="checkbox" id="pineappleOption" name="pineappleOption" value="Pineapple">
            <label for="pineappleOption">Pineapple</label><br> 
        <!--radio pineapple options-->
        <div id="toppingOption">
        <input type="radio" id="extraPine" name="extraPine" value="Extra Pineapple">
            <label for="extraPine">Extra Pineapple</label><br>
        <input type="radio" id="halfPine" name="halfPine" value="Half Pineapple">
            <label for="halfPine">Half Pineapple</label><br>
        </div>

        <!--Bacon-->     
        <input class= "check" type="checkbox" id="baconOption" name="baconOption" value="Bacon">
            <label for="baconOption">Bacon</label><br>
        <!--radio bacon options-->
        <div id="toppingOption">
        <input type="radio" id="extraBacon" name="extraBacon" value="Extra Bacon">
            <label for="extraBeef">Extra Bacon</label><br>
        <input type="radio" id="halfBacon" name="halfBacon" value="Half Bacon">
            <label for="halfBacon">Half Bacon</label><br>
        </div>

        <!--Onions-->     
        <input class= "check" type="checkbox" id="onionsOption" name="onionsOption" value="Onions">
            <label for="onionsOption">Onions</label><br>    
        <!--radio onion options-->
        <div id="toppingOption">
        <input type="radio" id="extraOnion" name="extraOnion" value="Extra Onion">
            <label for="extraOnion">Extra Onion</label><br>
        <input type="radio" id="halfOnion" name="halfOnion" value="Half Onion">
            <label for="halfOnion">Half Onion</label><br>
        </div>

        <!--Olives-->     
        <input class="check" type="checkbox" id="olivesOption" name="olivesOption" value="Olives">
            <label for="olivesOption">Olives</label><br>
        <!--radio olives options-->
        <div id="toppingOption">
        <input type="radio" id="extraOlvies" name="extraOlvies" value="Extra Olives">
            <label for="extraOlvies">Extra Olives</label><br>
        <input type="radio" id="halfOlives" name="halfOlives" value="Half Olives">
            <label for="halfOlvies">Half Olives</label><br>
        </div>

        <!--Mushrooms-->     
        <input class= "check" type="checkbox" id="mushroomsOption" name="mushroomsOption" value="Mushrooms">
            <label for="mushroomsOption">Mushrooms</label><br>
        <!--radio mushrooms options-->
        <div id="toppingOption">
        <input type="radio" id="extraMsuh" name="extraMush" value="Extra Mushrooms">
            <label for="extraMush">Extra Mushrooms</label><br>
        <input type="radio" id="halfMush" name="halfMush" value="Half Mushrooms">
            <label for="halfMush">Half Mushrooms</label><br>
        </div>

        <!--Banana Peppers--> 
        <input class= "check" type="checkbox" id="bananaPeppersOption" name="bananaPeppersOption" value="Banana Peppers">
            <label for="bananaPeppersOption">Banana Peppers</label><br>
        <!--radio banana peppers options-->
        <div id="toppingOption">
        <input type="radio" id="extraBP" name="extraBP" value="Extra Banana Peppers">
            <label for="extraBP">Extra Banana Peppers </label><br>
        <input type="radio" id="halfBP" name="halfBP" value="Half Banana Peppers">
            <label for="halfBP">Half Banana Peppers</label><br>                
        </div>

        <h1>Premade Pizza Options</h1>    
        <input class= "check" type="checkbox" id="Pepperoni" name="Pepperoni" value="Pepperoni Pizza">
            <label for="Pepperoni">Pepperoni Pizza</label><br>    
        <input class= "check" type="checkbox" id="Meat Lovers" name="Meat Lovers" value="Meat Lovers Pizza">
            <label for="Meat Lovers">Meat Lovers</label><br>
        <input class= "check" type="checkbox" id="Cheese" name="Cheese" value="Cheese Pizza">
            <label for="Cheese">Cheese Pizza</label><br>    
        <input class= "check" type="checkbox" id="Hawaiian" name="Hawaiian" value="Hawaiian Pizza">
            <label for="Hawaiian">Hawaiian Pizza</label><br>
        <input class= "check" type="checkbox" id="DeepDish" name="DeepDish" value="Chicago Deep Dish Pizza">
            <label for="DeepDish">Chicago Deep Dish</label><br>                   
    </div>



    <button href="#" onclick="getValue() ; return false;">Add to Order</button>

    <script>
        function getValue(){
            var checks = document.getElementsByClassName;
            var str = "";

            for( i = 0; i < 19; i++) {
                if (checks[i] === true) {
                    str += checks[i].value + " ";
                }
                return console.log(str + "Thanks For Your Order");
            }
        }
    </script>
</div>
</div>

<script src="controller.js"></script>


`;
})

var thePizza = new Pizza("XL", [], "Plain Pizza");

var total = 0;
addTopping(topping); {
    This.total += topping.cost;
    document.getElementByID("total").innerHTML = this.total;
}

if (topping >= 2 < 5 || topping.extra) {
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



function size1() {
    var checkbox = document.getElementById("XL");
    var text = document.getElementById("text1");

    if (checkbox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
    var checkbox = document.getElementById("XL");
    var text = document.getElementById("text1");
    if (checkbox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function size2() {
    var checkbox = document.getElementById("Large");
    var text = document.getElementById("text2");

    if (checkbox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function size3() {
    var checkbox = document.getElementById("Medium");
    var text = document.getElementById("text3");

    if (checkbox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function size4() {
    var checkbox = document.getElementById("Small");
    var text = document.getElementById("text4");

    if (checkbox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }

}