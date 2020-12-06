
function dropValues(){

    //Get Value form dropdown list
    var countryCode = document.getElementById("drop");

    //Get the Input Element ID
    var countryInsert = document.getElementById("countryInsert");

    //Insert dropdownvalue into Textbox
    countryInsert.value=countryCode.value;
    
}
