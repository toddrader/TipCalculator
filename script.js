// document.getElementById("enterper").style.display = "none";

var button = document.getElementById("button");
button.onclick = function calc() {
    var bill = Number(document.getElementById("bill").value);
    console.log(bill);
    if (document.getElementById("twentyper").checked) {
        tip_value = document.getElementById("twentyper").value;
        // console.log(tip_value);
    } else if (document.getElementById("fifper").checked) {
        tip_value = document.getElementById("fifper").value;
        // console.log(tip_value);
    } else if (document.getElementById("tenper").checked) {
        tip_value = document.getElementById("tenper").value;
        // console.log(tip_value);
    } else if (document.getElementById("radioper").checked) {
        // document.getElementById("enterper").style.display = "";
        ent = document.getElementById("enterper").value;
        tip_value = ent/100
        // console.log(tip_value);
    } else {
        return;
    }
    var tip_total = bill * tip_value;
    var total = bill += tip_total;
    console.log(tip_total);
    console.log(tip_value);
    console.log(total)
    document.getElementById("tip").innerHTML = "$" + Number(tip_total).toFixed(2);
    document.getElementById("total").innerHTML = "$" + Number(bill).toFixed(2);
}
