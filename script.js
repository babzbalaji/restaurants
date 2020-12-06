
       
    alertText = document.getElementById("alert");
    alertText.style.display = "none";

function addItems(){
    //Get element from Input Box
    var dish = document.getElementById("dish");
    var quantity = document.getElementById("quantity");
    var amount = document.getElementById("amount");


    if(dish.value, quantity.value, amount.value == ""){
        alertText.style.display ="";

    }
    else{
    //Create td and tr element
    var newRow = document.createElement('tr');
    var newCell = document.createElement('td');
    var newCell1 = document.createElement('td');
    var newCell2 = document.createElement('td');
    var deleteButton = document.createElement('button');

    //insert cell values
    newCell.innerHTML=dish.value;
    newCell1.innerHTML=quantity.value;
    newCell2.innerHTML=amount.value;   
    deleteButton.innerHTML = "X"

    //Add Css
    newCell.style.paddingLeft = "50px";
    newCell1.style.paddingLeft = "50px";
    newCell2.style.paddingLeft = "50px";
    deleteButton.style.marginLeft = "50px";
    newCell.style.paddingRight = "50px";
    newCell1.style.paddingRight = "50px";
    newCell2.style.paddingRight = "50px";
    deleteButton.style.marginRight = "50px";
    
    //Add Classto Button
    deleteButton.className="btn-danger btn";

    //Add Values to the cell
    newRow.append(newCell);
    newRow.append(newCell1);
    newRow.append(newCell2);
    newRow.append(deleteButton);

    //Get insert table id to insert value
    var show = document.getElementById('showDish');

    //Append all element into row
    show.appendChild(newRow);

    //Clear the values in textbox
    dish.value="";
    amount.value="";
    quantity.value="";
    alertText.style.display = "none";
    }   

    var deleteList = document.getElementById('showDish');

    deleteList.addEventListener("click", removeItem);

    function removeItem(e){
        if(e.target.classList.contains('btn')){
            var newRow = e.target.parentElement;
            deleteList.removeChild(newRow);
        }
    }

}


// Add Values 2nd method

// function addItems(){
   
//     //Get element from Input Box
//     var dish = document.getElementById("dish");
//     var quantity = document.getElementById("quantity");
//     var amount = document.getElementById("amount");

//     //Get insert table id to insert value
//     var show = document.getElementById('showDish')

//     //Create tr element
//     var row = document.createElement('tr');

//     //Insert Value
//     row.innerHTML = `
//     <td>${dish.value}</td>
//     <td>${quantity.value}</td>
//     <td>${amount.value}</td>
//     `
//     //Add to row
//     show.appendChild(row)
// }


//DropdownList

function dropValues(){

    //Get Value form dropdown list
    var countryCode = document.getElementById("drop");

    //Get the Input Element ID
    var countryInsert = document.getElementById("countryInsert");

    //Insert dropdownvalue into Textbox
    countryInsert.value=countryCode.value;
    
}
