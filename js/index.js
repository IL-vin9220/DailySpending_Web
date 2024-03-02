// click all checkbox table

function clickAllCkb(){
    let checkboxes = document.getElementsByName('ckb');

        if(document.querySelector("#ckb_head").checked == true)
        {
            // Lặp và thiết lập checked
            for (let i = 0; i < checkboxes.length; i++){
                checkboxes[i].checked = true;
            }
        }
        else
        {
            // Lặp và thiết lập checked
            for (let i = 0; i < checkboxes.length; i++){
                checkboxes[i].checked = false;
            }
        }
}

// display detail product
function displayDetailProduct(){
    let checkDisplay = document.getElementById("detailProduct").style.display;

    if(checkDisplay == ''){
        document.getElementById("detailProduct").style.display = "block";
    }
    if(checkDisplay == "block"){
        document.getElementById("detailProduct").style.display = "";
    }
}

// save detail product
function SaveDetailProduct(){
    // save data

    //close dialog form
    displayDetailProduct();
}

// change type display
function changeDisplay(){
    let nuclear = document.getElementById("nuclear").style.marginLeft;

    if(nuclear==""){
        document.getElementById("nuclear").style.marginLeft = "50px";
        document.getElementById("style-grid").style.display = "none";
        document.getElementById("style-detail").style.display = "block";
    }
    else{
        document.getElementById("nuclear").style.marginLeft = "";
        document.getElementById("style-grid").style.display = "flex";
        document.getElementById("style-detail").style.display = "none";
    }
}

// change style
function changeStyle(){

}

// checked create bill
function changeCreateBillDate(){
    let ipDate = document.getElementById("inputdate").checked;

    if(ipDate == true){
        document.getElementById("inputdate").checked = true;
        document.getElementById("inputmonth").checked = false;
        document.getElementById("inputyear").checked = false;
        console.log("true");
    }
}

function changeCreateBillMonth(){
    let ipMonth = document.getElementById("inputmonth").checked;

    if(ipMonth == true){
        document.getElementById("inputmonth").checked = true;
        document.getElementById("inputdate").checked = false;
        document.getElementById("inputyear").checked = false;
        console.log("true");
    }
}

function changeCreateBillYear(){
    let ipYear = document.getElementById("inputyear").checked;

    if(ipYear == true){
        document.getElementById("inputyear").checked = true;
        document.getElementById("inputdate").checked = false;
        document.getElementById("inputmonth").checked = false;
        console.log("true");
    }
}