var entrypoint = document.getElementById('pizza');


entrypoint.innerHTML = "<p>This is a piece of text</p>";

window.addEventListener("load", function () {

    entrypoint.innerHTML =
        `
<div id="EntireWidget" class="layout">
<div class="verticalDisplay">
    <div class="pizzaNav">

    </div>

    <div class="pizzaAndPrice">

        <div class="pizzadisplay">
            <canvas id="pizzaCanvas" name="pizzaCanvas" height="350" width="350"></canvas>
        </div>

        <div class="AddToOrderWidget">
        <div id="specialSign" class="specialSign"></div>
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
        <input  type="radio" id="XL" name="pizzaSizes" value="Extra Large" onclick="SizeChanged()">
            <label for="XL">Extra Large</label><br>
            <p id="text1" style="display: none"> $20</p>

        <input type="radio" id="Large" name="pizzaSizes" value="Large" onclick="SizeChanged()">
            <label for="Large">Large</label><br>
            <p id="text2" style="display: none"> $15</p>

        <input type="radio" id="Medium" name="pizzaSizes" value="Medium" onclick="SizeChanged()">
            <label for="Medium">Medium</label><br>
            <p id="text3" style="display: none"> $10</p>

        <input type="radio" id="Small" name="pizzaSizes" value="Small" onclick="SizeChanged()">
            <label for="Small">Small</label><br>
            <p id="text4" style="display: none"> $6</p>    

        <h1>Pizza Toppings</h1>
    </div>

    <div class="toppings">

        <!--Pepperoni-->    
        <input class= "check" type="checkbox" id="pepperoniOption" name="pepperoniOption" value="Pepperoni" onclick="ToppingsChanged()">
            <label for="pepperoniOption">Pepperoni</label><br>
        <!--radio pepperoni options-->
        <input class= "check" type="radio" id="extraPep" name="Pepperoni" value="Extra Pepperoni">
            <label for="extraPep">Extra Pepperoni</label><br>
        <input type="radio" id="halfPep" name="Pepperoni" value="Half Pepperoni">
            <label for="halfPep">Half Pepperoni</label><br>
  

        <!--Sausage-->
        <input class= "check" type="checkbox" id="sausageOption" name="sausageOption" value="Sausage" onclick="ToppingsChanged()">
            <label for="sausageOption">Sausage</label><br>
        <!--radio sausage options-->
        <input class= "check" type="radio" id="extraSaus" name="Sausage" value="Extra Sausage">
            <label for="extraSaus">Extra Sausage</label><br>
        <input type="radio" id="halfSaus" name="Sausage" value="Half Sausage">
            <label for="halfSaus">Half Sausage</label><br>

        <!--Ham-->
        <input class= "check" type="checkbox" id="hamOption" name="hamOption" value="Ham" onclick="ToppingsChanged()">
            <label for="hamOption">Ham</label><br>
        <!--radio ham options-->
        <input class= "check" type="radio" id="extraHam" name="Ham" value="Extra Ham">
            <label for="extraHam">Extra Sausage</label><br>
        <input type="radio" id="halfHam" name="Ham" value="Half Ham">
            <label for="halfHam">Half Sausage</label><br>

        <!--Beef--> 
        <input class= "check" type="checkbox" id="beefOption" name="beefOption" value="Beef" onclick="ToppingsChanged()">
            <label for="beefOption">Beef</label><br>
        <!--radio beef options-->
        <input class= "check" type="radio" id="extraBeef" name="Beef" value="Extra Beef">
            <label for="extraBeef">Extra Beef</label><br>
        <input type="radio" id="halfBeef" name="Beef" value="Half Beef">
            <label for="halfBeef">Half Beef</label><br>


        <!--Pineapple-->     
        <input class= "check" type="checkbox" id="pineappleOption" name="pineappleOption" value="Pineapple" onclick="ToppingsChanged()">
            <label for="pineappleOption">Pineapple</label><br> 
        <!--radio pineapple options-->
        <input class= "check" type="radio" id="extraPine" name="Pineapple" value="Extra Pineapple">
            <label for="extraPine">Extra Pineapple</label><br>
        <input type="radio" id="halfPine" name="Pineapple" value="Half Pineapple">
            <label for="halfPine">Half Pineapple</label><br>


        <!--Bacon-->     
        <input class= "check" type="checkbox" id="baconOption" name="baconOption" value="Bacon" onclick="ToppingsChanged()">
            <label for="baconOption">Bacon</label><br>
        <!--radio bacon options-->
        <input class= "check" type="radio" id="extraBacon" name="Bacon" value="Extra Bacon">
            <label for="extraBeef">Extra Bacon</label><br>
        <input type="radio" id="halfBacon" name="Bacon" value="Half Bacon">
            <label for="halfBacon">Half Bacon</label><br>


        <!--Onions-->     
        <input class= "check" type="checkbox" id="onionsOption" name="onionsOption" value="Onions" onclick="ToppingsChanged()">
            <label for="onionsOption">Onions</label><br>    
        <!--radio onion options-->
        <input class= "check" type="radio" id="extraOnion" name="Onions" value="Extra Onion">
            <label for="extraOnion">Extra Onion</label><br>
        <input type="radio" id="halfOnion" name="Onions" value="Half Onion">
            <label for="halfOnion">Half Onion</label><br>


        <!--Olives-->     
        <input class= "check" type="checkbox" id="olivesOption" name="olivesOption" value="Olives" onclick="ToppingsChanged()">
            <label for="olivesOption">Olives</label><br>
        <!--radio olives options-->
        <input class= "check" type="radio" id="extraOlives" name="Olives" value="Extra Olives">
            <label for="extraOlvies">Extra Olives</label><br>
        <input type="radio" id="halfOlives" name="Olives" value="Half Olives">
            <label for="halfOlvies">Half Olives</label><br>


        <!--Mushrooms-->     
        <input class= "check" type="checkbox" id="mushroomsOption" name="mushroomsOption" value="Mushrooms" onclick="ToppingsChanged()">
            <label for="mushroomsOption">Mushrooms</label><br>
        <!--radio mushrooms options-->
        <input class= "check" type="radio" id="extraMush" name="Mushrooms" value="Extra Mushrooms">
            <label for="extraMush">Extra Mushrooms</label><br>
        <input type="radio" id="halfMush" name="Mushrooms" value="Half Mushrooms">
            <label for="halfMush">Half Mushrooms</label><br>
            

        <!--Banana Peppers--> 
        <input class= "check" type="checkbox" id="bananaPeppersOption" name="bananaPeppersOption" value="Banana Peppers" onclick="ToppingsChanged()"> 
            <label for="bananaPeppersOption">Banana Peppers</label><br>
        <!--radio banana peppers options-->
        <input class= "check" type="radio" id="extraBP" name="BananaPeppers" value="Extra Banana Peppers">
            <label for="extraBP">Extra Banana Peppers </label><br>
        <input type="radio" id="halfBP" name="BananaPeppers" value="Half Banana Peppers">
            <label for="halfBP">Half Banana Peppers</label><br>
    </div>

    <div class="premadeOptions">
        <h1>Premade Pizza Options</h1>    
        <input type="radio" id="Pepperoni" name="premadeOptions" value="Pepperoni Pizza" onclick="PremadeChanged()">
            <label for="Pepperoni">Pepperoni Pizza</label><br>    
        <input type="radio" id="MeatLovers" name="premadeOptions" value="Meat Lovers Pizza" onclick="PremadeChanged()">
            <label for="Meat Lovers">Meat Lovers</label><br>
        <input type="radio" id="Cheese" name="premadeOptions" value="Cheese Pizza" onclick="PremadeChanged()">
            <label for="Cheese">Cheese Pizza</label><br>    
        <input type="radio" id="Hawaiian" name="premadeOptions" value="Hawaiian Pizza" onclick="PremadeChanged()">
            <label for="Hawaiian">Hawaiian Pizza</label><br>
        <input type="radio" id="DeepDish" name="premadeOptions" value="Chicago Deep Dish Pizza" onclick="PremadeChanged()">
            <label for="DeepDish">Chicago Deep Dish</label><br>                   
        </div>
    </div>
</div>
<script src="controller.js"></script>
<script src="Pizza.js"></script>
`;
Init();

var layout = document.getElementById('EntireWidget');
layout.addEventListener("change", function() {
    updatePage();
})
});

var XtraLarge = false;
var Large = false;
var Medium = false;
var Small = false;
var Pepperoni = false;
var PepHalf = false;
var PepXtra = false;
var Sausage = false;
var SausHalf = false;
var SausXtra = false;
var Ham = false;
var HamHalf = false;
var HamXtra = false;
var Beef = false;
var BeefHalf = false;
var BeefXtra = false;
var Pineapple = false;
var PineHalf = false;
var PineXtra = false;
var Bacon = false;
var BaconHalf = false;
var BaconXtra = false;
var Onions = false;
var OnionsHalf = false;
var OnionsXtra = false;
var Olives = false;
var OlivesHalf = false;
var OlivesXtra = false;
var Mushrooms = false;
var MushHalf = false;
var MushXtra = false;
var BananaPeppers = false;
var BPHalf = false;
var BPXtra = false;
var PremadePepperoni = false;
var PremadeMeatLovers = false;
var PremadeCheese = false;
var PremadeHawaiian = false;
var PremadeDeepDish = false;

function Init() {
    XtraLarge = document.getElementById('XL').checked;
    Large = document.getElementById('Large').checked;
    Medium = document.getElementById('Medium').checked;
    Small = document.getElementById('Small').checked;
    Pepperoni = document.getElementById('pepperoniOption').checked;
    PepHalf = document.getElementById('halfPep').checked;
    PepXtra = document.getElementById('extraPep').checked;
    Sausage = document.getElementById('sausageOption').checked;
    SausHalf = document.getElementById('halfSaus').checked;
    SausXtra = document.getElementById('extraSaus').checked;
    Ham = document.getElementById('hamOption').checked;
    HamHalf = document.getElementById('halfHam').checked;
    HamXtra = document.getElementById('extraHam').checked;
    Beef = document.getElementById('beefOption').checked;
    BeefHalf = document.getElementById('halfBeef').checked;
    BeefXtra = document.getElementById('extraBeef').checked;
    Pineapple = document.getElementById('pineappleOption').checked;
    PineHalf = document.getElementById('halfPine').checked;
    PineXtra = document.getElementById('extraPine').checked;
    Bacon = document.getElementById('baconOption').checked;
    BaconHalf = document.getElementById('halfBacon').checked;
    BaconXtra = document.getElementById('extraBacon').checked;
    Onions = document.getElementById('onionsOption').checked;
    OnionsHalf = document.getElementById('halfOnion').checked;
    OnionsXtra = document.getElementById('extraOnion').checked;
    Olives = document.getElementById('olivesOption').checked;
    OlivesHalf = document.getElementById('halfOlives').checked;
    OlivesXtra = document.getElementById('extraOlives').checked;
    Mushrooms = document.getElementById('mushroomsOption').checked;
    MushHalf = document.getElementById('halfMush').checked;
    MushXtra = document.getElementById('extraMush').checked;
    BananaPeppers = document.getElementById('bananaPeppersOption').checked;
    BPHalf = document.getElementById('halfBP').checked;
    BPXtra = document.getElementById('extraBP').checked;
    PremadePepperoni = document.getElementById('Pepperoni').checked;
    PremadeMeatLovers = document.getElementById('MeatLovers').checked;
    PremadeCheese = document.getElementById('Cheese').checked;
    PremadeHawaiian = document.getElementById('Hawaiian').checked;
    PremadeDeepDish = document.getElementById('DeepDish').checked;
    UpdatePizza();
}

function UpdatePizza() {
    var context = document.getElementById("pizzaCanvas").getContext("2d");
    context.clearRect(0, 0, 350, 350);

    for (var i = 0; i < 5; i++) {
        var ratio = 3 - (i * 0.1);
        var height = 50;
        var width = 100;
        var xStart = 130 + ((width - (width * ratio)) / 2);
        var yStart = 250 - (height * i);


        if (XtraLarge) {
            console.log(XtraLarge);
            context.beginPath();
            context.arc(175, 175, 150, 0, 2 * Math.PI);
            context.fillStyle = "#c39b77";
            context.fill();
            context.stroke();
        } else if (Large) {
            console.log("Large...");
            context.beginPath();
            context.arc(175, 175, 125, 0, 2 * Math.PI);
            context.stroke();
            context.fillStyle = "#c39b77";
            context.fill();
            context.stroke();
        } else if (Medium) {
            console.log("Medium...");
            context.beginPath();
            context.arc(175, 175, 100, 0, 2 * Math.PI);
            context.stroke();
            context.fillStyle = "#c39b77";
            context.fill();
            context.stroke();
        } else if (Small) {
            console.log("Small...");
            context.beginPath();
            context.arc(175, 175, 75, 0, 2 * Math.PI);
            context.stroke();
            context.fillStyle = "#c39b77";
            context.fill();
            context.stroke();
        }
        if (Pepperoni) {
            context.fillStyle = "red";
            for (var pep = 0; pep < width * ratio; pep += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + pep + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + pep + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + pep + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (PepHalf) {
            context.fillStyle = "";
        } else if (PepXtra) {
            context.fillStyle = "";
        } 
        
        if (Sausage) {
            context.fillStyle = "brown";
            for (var saus = 0; saus < width * ratio; saus += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + saus + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + saus + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + saus + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (SausHalf) {
            context.fillStyle = "brown";
        } else if (SausXtra) {
            context.fillStyle = "brown";
        } 
        
        if (Ham) {
            context.fillStyle = "pink";
            for (var hams = 0; hams < width * ratio; hams += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + hams + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + hams + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + hams + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (HamHalf) {
            context.fillStyle = "pink";
        } else if (HamXtra) {
            context.fillStyle = "pink";
        } 
        
        if (Beef) {
            context.fillStyle = "brown";
            for (var beefs = 0; beefs < width * ratio; beefs += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + beefs + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + beefs + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + beefs + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (BeefHalf) {
            context.fillStyle = "brown";
        } else if (BeefXtra) {
            context.fillStyle = "brown";
        } 
        
        if (Pineapple) {
            context.fillStyle = "yellow";
            for (var pin = 0; pin < width * ratio; pin += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + pin + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + pin + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + pin + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (PineHalf) {
            context.fillStyle = "yellow";
        } else if (PineXtra) {
            context.fillStyle = "yellow";
        } 
        
        if (Bacon) {
            context.fillStyle = "pink";
            for (var bac = 0; bac < width * ratio; bac += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + bac + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + bac + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + bac + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (BaconHalf) {
            context.fillStyle = "pink";
        } else if (BaconXtra) {
            context.fillStyle = "pink";
        } 
        
        if (Onions) {
            context.fillStyle = "white";
            for (var oni = 0; oni < width * ratio; oni += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + oni + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + oni + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + oni + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (OnionsHalf) {
            context.fillStyle = "white";
        } else if (OnionsXtra) {
            context.fillStyle = "white";
        } 
        
        if (Olives) {
            context.fillStyle = "black";
            for (var oli = 0; oli < width * ratio; oli += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + oli + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + oli + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + oli + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (OlivesHalf) {
            context.fillStyle = "black";
        } else if (OlivesXtra) {
            context.fillStyle = "black";
        } 
        
        if (Mushrooms) {
            context.fillStyle = "gray";
            for (var mus = 0; mus < width * ratio; mus += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + mus + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + mus + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + mus + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (MushHalf) {
            context.fillStyle = "gray";
        } else if (MushXtra) {
            context.fillStyle = "gray";
        } 
        
        if (BananaPeppers) {
            context.fillStyle = "yellow";
            for (var ban = 0; ban < width * ratio; ban += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + ban + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + ban + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + ban + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (BPHalf) {
            context.fillStyle = "yellow";
        } else if (BPXtra) {
            context.fillStyle = "yellow";
        }
        if (PremadePepperoni) {
            context.fillStyle = "red";
            for (var prePep = 0; prePep < width * ratio; prePep += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + prePep + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + prePep + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + prePep + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (PremadeMeatLovers) {
            context.fillStyle = "";
        } else if (PremadeCheese) {
            context.fillStyle = "yellow";
        } else if (PremadeHawaiian) {
            context.fillStyle = "yellow";
            for (var prePine = 0; prePine < width * ratio; prePine += (width * ratio) / 5) {
                context.beginPath();
                context.arc(xStart + prePine + ((width * ratio) / 20), yStart + 40, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + prePine + ((width * ratio) / 7), yStart + 25, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();

                context.beginPath();
                context.arc(xStart + prePine + ((width * ratio) / 20), yStart + 10, 5 * ratio, 0, 2 * Math.PI, false);
                context.fill();
            }
        } else if (PremadeDeepDish) {
            context.fillStyle = "red";
        }
    }
}

function SizeChanged() {
    XtraLarge = document.getElementById('XL').checked;
    Large = document.getElementById('Large').checked;
    Medium = document.getElementById('Medium').checked;
    Small = document.getElementById('Small').checked;
}

function ToppingsChanged() {
    Pepperoni = document.getElementById('pepperoniOption').checked;
    PepHalf = document.getElementById('halfPep').checked;
    PepXtra = document.getElementById('extraPep').checked;
    Sausage = document.getElementById('sausageOption').checked;
    SausHalf = document.getElementById('halfSaus').checked;
    SausXtra = document.getElementById('extraSaus').checked;
    Ham = document.getElementById('hamOption').checked;
    HamHalf = document.getElementById('halfHam').checked;
    HamXtra = document.getElementById('extraHam').checked;
    Beef = document.getElementById('beefOption').checked;
    BeefHalf = document.getElementById('halfBeef').checked;
    BeefXtra = document.getElementById('extraBeef').checked;
    Pineapple = document.getElementById('pineappleOption').checked;
    PineHalf = document.getElementById('halfPine').checked;
    PineXtra = document.getElementById('extraPine').checked;
    Bacon = document.getElementById('baconOption').checked;
    BaconHalf = document.getElementById('halfBacon').checked;
    BaconXtra = document.getElementById('extraBacon').checked;
    Onions = document.getElementById('onionsOption').checked;
    OnionsHalf = document.getElementById('halfOnion').checked;
    OnionsXtra = document.getElementById('extraOnion').checked;
    Olives = document.getElementById('olivesOption').checked;
    OlivesHalf = document.getElementById('halfOlives').checked;
    OlivesXtra = document.getElementById('extraOlives').checked;
    Mushrooms = document.getElementById('mushroomsOption').checked;
    MushHalf = document.getElementById('halfMush').checked;
    MushXtra = document.getElementById('extraMush').checked;
    BananaPeppers = document.getElementById('bananaPeppersOption').checked;
    BPHalf = document.getElementById('halfBP').checked;
    BPXtra = document.getElementById('extraBP').checked;
}

function PremadeChanged() {
    BPHalf = document.getElementById('halfBP').checked;
    BPXtra = document.getElementById('extraBP').checked;
    PremadePepperoni = document.getElementById('Pepperoni').checked;
    PremadeMeatLovers = document.getElementById('MeatLovers').checked;
    PremadeCheese = document.getElementById('Cheese').checked;
    PremadeHawaiian = document.getElementById('Hawaiian').checked;
    PremadeDeepDish = document.getElementById('DeepDish').checked;
}


function updatePage() {
    UpdatePizza();
    updatePrice();
}

function updatePrice() {
    var toppings = getToppings();

    var price = calculatePrice(toppings);

    var pricetag = document.getElementById("price");

    pricetag.textContent = "$" + price.toFixed(2);

    updateSign(toppings);

    populateToppingList(toppings);
}

function getToppings() {
    var checks = document.getElementsByClassName("check");
    var str = [];

    var counter = 0;
    for (i = 0; i < checks.length; i++) {
        if (checks[i].checked == true) {
            str[counter] = checks[i].value;
            counter = counter + 1;
        }
    }

    return str;
}

function calculatePrice(list) {
    var total = 0;

    if (list.length < 2) {
        total = 10;
    } else if (list.length < 5) {
        total = list.length + 9;
    } else if (list.length >= 5) {
        total = list.length + 8;
    }

    return total;
}

function updateSign(list) {
    var specialSign = document.getElementById("specialSign");
    if (list.length >=5) {
        specialSign.textContent = "SPECIAL DEAL!!!";
    }
}

function populateToppingList(list) {
    var str = "";
    
    for (let i = 0; i < list.length; i++) {
        if(list.length == 1) {
            str = list[i];
            break;
        }
        if (i < list.length-1) {
            str += list[i] + ", ";
        } else if (i == list.length-1) {
            str += "and " + list[i];
        }
    }

    var display = document.getElementById("toppingListDisplay");
    display.textContent = str;
}