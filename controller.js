var entrypoint = document.getElementById('pizza');


entrypoint.innerHTML = "<p>This is a piece of text</p>";

window.addEventListener("load", function() {
entrypoint.innerHTML = 
`
<div id="EntireWidget" class="layout">
    <div class="verticalDisplay">
        <div class="pizzaNav">

        </div>

        <div class="pizzaAndPrice">
            <div class="pizzadisplay">
            </div>

            <div class="AddToOrderWidget">
                <div id="toppingListDisplay"></div>

                <div class="pricearea">
                    <div >Total:</div>
                    <div id="price" >$0.00</div>
                </div>

                <button href="#" onclick="getToppings() ; return false;" class="orderbutton">ADD TO ORDER</button>
            </div>
        </div>

        <div class="pizzaOptions">

            <div class="pizzaSizes">
                <h1>Pizza Sizes</h1>
                <input class= "sizeCheck" type="radio" id="XL" name="size" value="Extra Large" onclick="size1()">
                    <label for="XL">Extra Large</label><br>
                    <p id="text1" style="display: none"> $20</p>

                <input class= "sizeCheck" type="radio" id="Large" name="size" value="Large" onclick="size2()">
                    <label for="Large">Large</label><br>
                    <p id="text2" style="display: none"> $15</p>

                <input class= "sizeCheck" type="radio" id="Medium" name="size" value="Medium" onclick="size3()">
                    <label for="Medium">Medium</label><br>
                    <p id="text3" style="display: none"> $10</p>

                <input class= "sizeCheck" type="radio" id="Small" name="size" value="Small" onclick="size4()">
                    <label for="Small">Small</label><br>
                    <p id="text4" style="display: none"> $6</p>    

                <h1>Pizza Toppings</h1>
            </div>

            <div class="toppings">

                <!--Pepperoni-->    
                <input class= "check" type="checkbox" id="pepperoniOption" name="pepperoniOption" value="Pepperoni">
                    <label for="pepperoniOption">Pepperoni</label><br>
                <!--radio pepperoni options-->
                <input type="radio" id="extraPep" name="extraPep" value="Extra Pepperoni">
                    <label for="extraPep">Extra Pepperoni</label><br>
                <input type="radio" id="halfPep" name="halfPep" value="Half Pepperoni">
                    <label for="halfPep">Half Pepperoni</label><br>

                <!--Sausage-->
                <input class= "check" type="checkbox" id="sausageOption" name="sausageOption" value="Sausage">
                    <label for="sausageOption">Sausage</label><br>
                <!--radio sausage options-->
                <input type="radio" id="extraSaus" name="extraPep" value="Extra Sausage">
                    <label for="extraSaus">Extra Sausage</label><br>
                <input type="radio" id="halfSaus" name="halfSaus" value="Half Sausage">
                    <label for="halfSaus">Half Sausage</label><br>

                <!--Ham-->
                <input class= "check" type="checkbox" id="hamOption" name="hamOption" value="Ham">
                    <label for="hamOption">Ham</label><br>
                <!--radio ham options-->
                <input type="radio" id="extraHam" name="extraHam" value="Extra Ham">
                    <label for="extraHam">Extra Sausage</label><br>
                <input type="radio" id="halfHam" name="halfHam" value="Half Ham">
                    <label for="halfHam">Half Sausage</label><br>

                <!--Beef--> 
                <input class= "check" type="checkbox" id="beefOption" name="beefOption" value="Beef">
                    <label for="beefOption">Beef</label><br>
                <!--radio beef options-->
                <input type="radio" id="extraBeef" name="extraBeef" value="Extra Beef">
                    <label for="extraBeef">Extra Beef</label><br>
                <input type="radio" id="halfBeef" name="halfBeef" value="Half Beef">
                    <label for="halfBeef">Half Beef</label><br>


                <!--Pineapple-->     
                <input class= "check" type="checkbox" id="pineappleOption" name="pineappleOption" value="Pineapple">
                    <label for="pineappleOption">Pineapple</label><br> 
                <!--radio pineapple options-->
                <input type="radio" id="extraPine" name="extraPine" value="Extra Pineapple">
                    <label for="extraPine">Extra Pineapple</label><br>
                <input type="radio" id="halfPine" name="halfPine" value="Half Pineapple">
                    <label for="halfPine">Half Pineapple</label><br>


                <!--Bacon-->     
                <input class= "check" type="checkbox" id="baconOption" name="baconOption" value="Bacon">
                    <label for="baconOption">Bacon</label><br>
                <!--radio bacon options-->
                <input type="radio" id="extraBacon" name="extraBacon" value="Extra Bacon">
                    <label for="extraBeef">Extra Bacon</label><br>
                <input type="radio" id="halfBacon" name="halfBacon" value="Half Bacon">
                    <label for="halfBacon">Half Bacon</label><br>


                <!--Onions-->     
                <input class= "check" type="checkbox" id="onionsOption" name="onionsOption" value="Onions">
                    <label for="onionsOption">Onions</label><br>    
                <!--radio onion options-->
                <input type="radio" id="extraOnion" name="extraOnion" value="Extra Onion">
                    <label for="extraOnion">Extra Onion</label><br>
                <input type="radio" id="halfOnion" name="halfOnion" value="Half Onion">
                    <label for="halfOnion">Half Onion</label><br>


                <!--Olives-->     
                <input class= "check" type="checkbox" id="olivesOption" name="olivesOption" value="Olives">
                    <label for="olivesOption">Olives</label><br>
                <!--radio olives options-->
                <input type="radio" id="extraOlvies" name="extraOlvies" value="Extra Olives">
                    <label for="extraOlvies">Extra Olives</label><br>
                <input type="radio" id="halfOlives" name="halfOlives" value="Half Olives">
                    <label for="halfOlvies">Half Olives</label><br>


                <!--Mushrooms-->     
                <input class= "check" type="checkbox" id="mushroomsOption" name="mushroomsOption" value="Mushrooms">
                    <label for="mushroomsOption">Mushrooms</label><br>
                <!--radio mushrooms options-->
                <input type="radio" id="extraMsuh" name="extraMush" value="Extra Mushrooms">
                    <label for="extraMush">Extra Mushrooms</label><br>
                <input type="radio" id="halfMush" name="halfMush" value="Half Mushrooms">
                    <label for="halfMush">Half Mushrooms</label><br>


                <!--Banana Peppers--> 
                <input class= "check" type="checkbox" id="bananaPeppersOption" name="bananaPeppersOption" value="Banana Peppers">
                    <label for="bananaPeppersOption">Banana Peppers</label><br>
                <!--radio banana peppers options-->
                <input type="radio" id="extraBP" name="extraBP" value="Extra Banana Peppers">
                    <label for="extraBP">Extra Banana Peppers </label><br>
                <input type="radio" id="halfBP" name="halfBP" value="Half Banana Peppers">
                    <label for="halfBP">Half Banana Peppers</label><br>
            </div>

            <div class="premadeOptions">
                <h1>Premade Pizza Options</h1>
                <input class= "premadeCheck" type="radio" id="Pepperoni" name="premade" value="Pepperoni Pizza">
                    <label for="Pepperoni">Pepperoni Pizza</label><br>    
                <input class= "premadeCheck" type="radio" id="Meat Lovers" name="premade" value="Meat Lovers Pizza">
                    <label for="Meat Lovers">Meat Lovers</label><br>
                <input class= "premadeCheck" type="radio" id="Cheese" name="premade" value="Cheese Pizza">
                    <label for="Cheese">Cheese Pizza</label><br>    
                <input class= "premadeCheck" type="radio" id="Hawaiian" name="premade" value="Hawaiian Pizza">
                    <label for="Hawaiian">Hawaiian Pizza</label><br>
                <input class= "premadeCheck" type="radio" id="DeepDish" name="premade" value="Chicago Deep Dish Pizza">
                    <label for="DeepDish">Chicago Deep Dish</label><br>
                </div>
        </div>
        <button href="#" onclick="getValue() ; return false;">Add to Order</button>

    </div>
</div>

<script src="controller.js"></script>
<script src="Pizza.js"></script>
`;
})

function updatePage() {
    // updatePizza();
    updatePrice();
}

function updatePrice() {

    var toppings = getToppings();

    var price = calculatePrice(toppings);
}

function getToppings(){
    var checks = document.getElementsByClassName("check");
    var str = [];

    for( i = 0; i < checks.length; i++) {
        if (checks[i].checked == true) {
            str[i] = checks[i].value;
        }
    }

    return str;
}