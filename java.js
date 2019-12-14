

const createDivs = function(a){
    const divs = [];
    let squares = a * a;
    for (i = 0; i < squares  ; ++i){
    divs.push("div" + i);
    
    }
   return divs;
}

const startPage = function(a){
    const mainSpace = document.querySelector("#main");
    divsIDs = createDivs(a);
//create divs
    divsIDs.forEach(function(el) {
        
        var div = document.createElement("div");
        div.className = "divs";
        div.id = el;
        mainSpace.appendChild(div);
                                });
mainSpace.style.gridTemplateColumns = ("repeat(" + a + ", 1fr)");

                                //change bg code on hover

divsIDs.forEach(function(el) {
   
    var colorChange = document.querySelector("#" + el);
    
    colorChange.addEventListener('mouseenter', () => {
        colorChange.style.backgroundColor = "white";
    });
});
}



//btn

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {

    divsIDs.forEach(function(el) {
    
        var colChan = document.querySelector("#" + el);
        colChan.style.backgroundColor = "black";
                                });

    var sizeOfGrid = prompt("What size of grid eg 10, 20?");
    if (sizeOfGrid == isNaN || sizeOfGrid > 100 || sizeOfGrid < 1){
            alert("wrong number try again");
}else   {
startPage(sizeOfGrid);
};
                                    });
startPage(16);