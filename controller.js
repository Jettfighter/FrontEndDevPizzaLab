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