var entrypoint = document.getElementById('pizza');

entrypoint.innerHTML = "<p>This is a piece of text</p>";

window.addEventListener("load", function () {

    entrypoint.innerHTML =
        `

<div class="layout">
<div class="verticalDisplay">
    <div class="pizzaNav">

    </div>

    <div class="pizzaAndPrice">

        <div class="pizzadisplay">
            <canvas id="pizzaCanvas" name="pizzaCanvas" height="250" width="250"></canvas>
        </div>
        <div class="AddToOrderWidget">
            <button>ADD TO ORDER</button>
        </div>
    </div>

    <div class="pizzaOptions">

    <div class="pizzaSizes">
        <h1>Pizza Sizes</h1>
        <input class= "check" type="radio" id="XL" name="XL" value="Extra Large" onclick="SizeChanged()">
            <label for="XL">Extra Large</label><br>
            <p id="text1" style="display: none"> $20</p>

        <input class= "check" type="radio" id="Large" name="Large" value="Large" onclick="SizeChanged()">
            <label for="Large">Large</label><br>
            <p id="text2" style="display: none"> $15</p>

        <input class= "check" type="radio" id="Medium" name="Medium" value="Medium" onclick="SizeChanged()">
            <label for="Medium">Medium</label><br>
            <p id="text3" style="display: none"> $10</p>

        <input class= "check" type="radio" id="Small" name="Small" value="Small" onclick="SizeChanged()">
            <label for="Small">Small</label><br>
            <p id="text4" style="display: none"> $6</p>    

        <h1>Pizza Toppings</h1>
    </div>

    <div class="toppings">

        <!--Pepperoni-->    
        <input class= "check" type="checkbox" id="pepperoniOption" name="pepperoniOption" value="Pepperoni" onclick="ToppingsChanged()">
            <label for="pepperoniOption">Pepperoni</label><br>
        <!--radio pepperoni options-->
        <input type="radio" id="extraPep" name="extraPep" value="Extra Pepperoni">
            <label for="extraPep">Extra Pepperoni</label><br>
        <input type="radio" id="halfPep" name="halfPep" value="Half Pepperoni">
            <label for="halfPep">Half Pepperoni</label><br>

        <!--Sausage-->
        <input class= "check" type="checkbox" id="sausageOption" name="sausageOption" value="Sausage" onclick="ToppingsChanged()">
            <label for="sausageOption">Sausage</label><br>
        <!--radio sausage options-->
        <input type="radio" id="extraSaus" name="extraSaus" value="Extra Sausage">
            <label for="extraSaus">Extra Sausage</label><br>
        <input type="radio" id="halfSaus" name="halfSaus" value="Half Sausage">
            <label for="halfSaus">Half Sausage</label><br>

        <!--Ham-->
        <input class= "check" type="checkbox" id="hamOption" name="hamOption" value="Ham" onclick="ToppingsChanged()">
            <label for="hamOption">Ham</label><br>
        <!--radio ham options-->
        <input type="radio" id="extraHam" name="extraHam" value="Extra Ham">
            <label for="extraHam">Extra Sausage</label><br>
        <input type="radio" id="halfHam" name="halfHam" value="Half Ham">
            <label for="halfHam">Half Sausage</label><br>

        <!--Beef--> 
        <input class= "check" type="checkbox" id="beefOption" name="beefOption" value="Beef" onclick="ToppingsChanged()">
            <label for="beefOption">Beef</label><br>
        <!--radio beef options-->
        <input type="radio" id="extraBeef" name="extraBeef" value="Extra Beef">
            <label for="extraBeef">Extra Beef</label><br>
        <input type="radio" id="halfBeef" name="halfBeef" value="Half Beef">
            <label for="halfBeef">Half Beef</label><br>


        <!--Pineapple-->     
        <input class= "check" type="checkbox" id="pineappleOption" name="pineappleOption" value="Pineapple" onclick="ToppingsChanged()">
            <label for="pineappleOption">Pineapple</label><br> 
        <!--radio pineapple options-->
        <input type="radio" id="extraPine" name="extraPine" value="Extra Pineapple">
            <label for="extraPine">Extra Pineapple</label><br>
        <input type="radio" id="halfPine" name="halfPine" value="Half Pineapple">
            <label for="halfPine">Half Pineapple</label><br>


        <!--Bacon-->     
        <input class= "check" type="checkbox" id="baconOption" name="baconOption" value="Bacon" onclick="ToppingsChanged()">
            <label for="baconOption">Bacon</label><br>
        <!--radio bacon options-->
        <input type="radio" id="extraBacon" name="extraBacon" value="Extra Bacon">
            <label for="extraBeef">Extra Bacon</label><br>
        <input type="radio" id="halfBacon" name="halfBacon" value="Half Bacon">
            <label for="halfBacon">Half Bacon</label><br>


        <!--Onions-->     
        <input class= "check" type="checkbox" id="onionsOption" name="onionsOption" value="Onions" onclick="ToppingsChanged()">
            <label for="onionsOption">Onions</label><br>    
        <!--radio onion options-->
        <input type="radio" id="extraOnion" name="extraOnion" value="Extra Onion">
            <label for="extraOnion">Extra Onion</label><br>
        <input type="radio" id="halfOnion" name="halfOnion" value="Half Onion">
            <label for="halfOnion">Half Onion</label><br>


        <!--Olives-->     
        <input class= "check" type="checkbox" id="olivesOption" name="olivesOption" value="Olives" onclick="ToppingsChanged()">
            <label for="olivesOption">Olives</label><br>
        <!--radio olives options-->
        <input type="radio" id="extraOlives" name="extraOlives" value="Extra Olives">
            <label for="extraOlvies">Extra Olives</label><br>
        <input type="radio" id="halfOlives" name="halfOlives" value="Half Olives">
            <label for="halfOlvies">Half Olives</label><br>


        <!--Mushrooms-->     
        <input class= "check" type="checkbox" id="mushroomsOption" name="mushroomsOption" value="Mushrooms" onclick="ToppingsChanged()">
            <label for="mushroomsOption">Mushrooms</label><br>
        <!--radio mushrooms options-->
        <input type="radio" id="extraMush" name="extraMush" value="Extra Mushrooms">
            <label for="extraMush">Extra Mushrooms</label><br>
        <input type="radio" id="halfMush" name="halfMush" value="Half Mushrooms">
            <label for="halfMush">Half Mushrooms</label><br>


        <!--Banana Peppers--> 
        <input class= "check" type="checkbox" id="bananaPeppersOption" name="bananaPeppersOption" value="Banana Peppers" onclick="ToppingsChanged()"> 
            <label for="bananaPeppersOption">Banana Peppers</label><br>
        <!--radio banana peppers options-->
        <input type="radio" id="extraBP" name="extraBP" value="Extra Banana Peppers">
            <label for="extraBP">Extra Banana Peppers </label><br>
        <input type="radio" id="halfBP" name="halfBP" value="Half Banana Peppers">
            <label for="halfBP">Half Banana Peppers</label><br>
    </div>

    <div class="premadeOptions">
        <h1>Premade Pizza Options</h1>    
        <input class= "check" type="checkbox" id="Pepperoni" name="Pepperoni" value="Pepperoni Pizza" onclick="PremadeChanged()">
            <label for="Pepperoni">Pepperoni Pizza</label><br>    
        <input class= "check" type="checkbox" id="MeatLovers" name="Meat Lovers" value="Meat Lovers Pizza" onclick="PremadeChanged()">
            <label for="Meat Lovers">Meat Lovers</label><br>
        <input class= "check" type="checkbox" id="Cheese" name="Cheese" value="Cheese Pizza" onclick="PremadeChanged()">
            <label for="Cheese">Cheese Pizza</label><br>    
        <input class= "check" type="checkbox" id="Hawaiian" name="Hawaiian" value="Hawaiian Pizza" onclick="PremadeChanged()">
            <label for="Hawaiian">Hawaiian Pizza</label><br>
        <input class= "check" type="checkbox" id="DeepDish" name="DeepDish" value="Chicago Deep Dish Pizza" onclick="PremadeChanged()">
            <label for="DeepDish">Chicago Deep Dish</label><br>                   
        </div>
    </div>
</div>
</div>

<script src="controller.js"></script>

`;

Init();
});



// var total = 0;
// addTopping(topping); {
//     This.total += topping.cost;
//     document.getElementByID("total").innerHTML = this.total;
// }

// if (topping >= 2 < 5 || topping.extra) {
//     total + 1;
//     console.log(this.total);
// } else if (topping = 5) {
//     total + 3;
//     console.log(this.total);
// } else if (topping > 5) {
//     total + 4
//     console.log("Special Deal " + this.total);

// } else {
//     console.log(this.total);
// }



// function size1() {
//     var checkbox = document.getElementById("XL");
//     var text = document.getElementById("text1");

//     if (checkbox.checked == true) {
//         text.style.display = "block";
//     } else {
//         text.style.display = "none";
//     }
// }

// function size2() {
//     var checkbox = document.getElementById("Large");
//     var text = document.getElementById("text2");

//     if (checkbox.checked == true) {
//         text.style.display = "block";
//     } else {
//         text.style.display = "none";
//     }
// }

// function size3() {
//     var checkbox = document.getElementById("Medium");
//     var text = document.getElementById("text3");

//     if (checkbox.checked == true) {
//         text.style.display = "block";
//     } else {
//         text.style.display = "none";
//     }
// }

// function size4() {
//     var checkbox = document.getElementById("Small");
//     var text = document.getElementById("text4");

//     if (checkbox.checked == true) {
//         text.style.display = "block";
//     } else {
//         text.style.display = "none";
//     }

// }

function Init() {
    XtraLarge = document.getElementById('XL').value;
    Large = document.getElementById('Large').value;
    Medium = document.getElementById('Medium').value;
    Small = document.getElementById('Small').value;
    Pepperoni = document.getElementById('pepperoniOption').value;
    PepHalf = document.getElementById('halfPep').value;
    PepXtra = document.getElementById('extraPep').value;
    Sausage = document.getElementById('sausageOption').value;
    SausHalf = document.getElementById('halfSaus').value;
    SausXtra = document.getElementById('extraSaus').value;
    Ham = document.getElementById('hamOption').value;
    HamHalf = document.getElementById('halfHam').value;
    HamXtra = document.getElementById('extraHam').value;
    Beef = document.getElementById('beefOption').value;
    BeefHalf = document.getElementById('halfBeef').value;
    BeefXtra = document.getElementById('extraBeef').value;
    Pineapple = document.getElementById('pineappleOption').value;
    PineHalf = document.getElementById('halfPine').value;
    PineXtra = document.getElementById('extraPine').value;
    Bacon = document.getElementById('baconOption').value;
    BaconHalf = document.getElementById('halfBacon').value;
    BaconXtra = document.getElementById('extraBacon').value;
    Onions = document.getElementById('onionsOption').value;
    OnionsHalf = document.getElementById('halfOnion').value;
    OnionsXtra = document.getElementById('extraOnion').value;
    Olives = document.getElementById('olivesOption').value;
    OlivesHalf = document.getElementById('halfOlives').value;
    OlivesXtra = document.getElementById('extraOlives').value;
    Mushrooms = document.getElementById('mushroomsOption').value;
    MushHalf = document.getElementById('halfMush').value;
    MushXtra = document.getElementById('extraMush').value;
    BananaPeppers = document.getElementById('bananaPeppersOption').value;
    BPHalf = document.getElementById('halfBP').value;
    BPXtra = document.getElementById('extraBP').value;
    PremadePepperoni = document.getElementById('Pepperoni').value;
    PremadeMeatLovers = document.getElementById('MeatLovers').value;
    PremadeCheese = document.getElementById('Cheese').value;
    PremadeHawaiian = document.getElementById('Hawaiian').value;
    PremadeDeepDish = document.getElementById('DeepDish').value;
    UpdatePizza();
}

function UpdatePizza() {
    var context = document.getElementById("pizzaCanvas").getContext("2d");

    if (XtraLarge) {
        context.beginPath();
        context.arc(150, 125, 125, 0, 2 * Math.PI);
        context.fillStyle = "#c39b77";
        context.fill();
        context.stroke();
    }
    else if (Large) {
        context.beginPath();
        context.arc(75, 50, 50, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = "#c39b77";
    }
    else if (Medium) {
        context.beginPath();
        context.arc(50, 25, 50, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = "#c39b77";
    }
    else if (Small) {
        context.beginPath();
        context.arc(25, 0, 50, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = "#c39b77";
    }
    if (Pepperoni) {
        context.fillStyle = "red";
    }
    if (PepHalf) {
        context.fillStyle = "red";
    }
    if (PepXtra) {
        context.fillStyle = "red";
    }
    if (Sausage) {
        context.fillStyle = "brown";
    }
    if (SausHalf) {
        context.fillStyle = "brown";
    }
    if (SausXtra) {
        context.fillStyle = "brown";
    }
    if (Ham) {
        context.fillStyle = "pink";
    }
    if (HamHalf) {
        context.fillStyle = "pink";
    }
    if (HamXtra) {
        context.fillStyle = "pink";
    }
    if (Beef) {
        context.fillStyle = "brown";
    }
    if (BeefHalf) {
        context.fillStyle = "brown";
    }
    if (BeefXtra) {
        context.fillStyle = "brown";
    }
    if (Pineapple) {
        context.fillStyle = "yellow";
    }
    if (PineHalf) {
        context.fillStyle = "yellow";
    }
    if (PineXtra) {
        context.fillStyle = "yellow";
    }
    if (Bacon) {
        context.fillStyle = "pink";
    }
    if (BaconHalf) {
        context.fillStyle = "pink";
    }
    if (BaconXtra) {
        context.fillStyle = "pink";
    }
    if (Onions) {
        context.fillStyle = "white";
    }
    if (OnionsHalf) {
        context.fillStyle = "white";
    }
    if (OnionsXtra) {
        context.fillStyle = "white";
    }
    if (Olives) {
        context.fillStyle = "black";
    }
    if (OlivesHalf) {
        context.fillStyle = "black";
    }
    if (OlivesXtra) {
        context.fillStyle = "black";
    }
    if (Mushrooms) {
        context.fillStyle = "gray";
    }
    if (MushHalf) {
        context.fillStyle = "gray";
    }
    if (MushXtra) {
        context.fillStyle = "gray";
    }
    if (BananaPeppers) {
        context.fillStyle = "yellow";
    }
    if (BPHalf) {
        context.fillStyle = "yellow";
    }
    if (BPXtra) {
        context.fillStyle = "yellow";
    }
    if (PremadePepperoni) {
        context.fillStyle = "";
    }
    if (PremadeMeatLovers) {
        context.fillStyle = "";
    }
    if (PremadeCheese) {
        context.fillStyle = "";
    }
    if (PremadeHawaiian) {
        context.fillStyle = "";
    }
    if (PremadeDeepDish) {
        context.fillStyle = "";
    }
}

function SizeChanged() {
    XtraLarge = document.getElementById('XL').value;
    Large = document.getElementById('Large').value;
    Medium = document.getElementById('Medium').value;
    Small = document.getElementById('Small').value;
    UpdatePizza();
}

function ToppingsChanged() {
    topping = document.getElementById('').value;
    UpdatePizza();
}

function PremadeChanged() {
    premade = document.getElementById('').value;
    UpdatePizza();
}
