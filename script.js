function changeRate()
{
    var rateval = document.getElementById("rate").value;
    var rate = rateval+"%"
    document.getElementById("rate_val").innerHTML = rate;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if(principal <= 0){
        // document.getElementById("result").innerHTML="<mark>Enter a positive value to continue.</mark>"
        alert("Enter a positive value to continue.")
    }
    else {
        var interest = principal*rate*years / 100;
    
    // var total = parseFloat(principal) + parseFloat(interest);

    var year = new Date().getFullYear()+parseInt(years);
    
    var mes = "If you deposit <mark>"+ principal+ "</mark>,<br /> at an interest rate of <mark>" 
    + rate +"%</mark>,<br /> You will receive an amount of <mark>" + interest + "</mark>, <br /> in the year <mark>" + year + "</mark>";
    document.getElementById("result").innerHTML = mes;
    }

}