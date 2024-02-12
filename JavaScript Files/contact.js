var urgent = document.getElementById("urgency");
urgent.addEventListener("click", colorAdjust);

var reason = document.getElementById("reason");
var explanation = document.getElementById("hate_explanation");
var placeholder = document.getElementById("explain");
reason.addEventListener("blur", hateAdjust);

var reset_button = document.getElementById("resetButton");
reset_button.addEventListener("click", resetText);

function colorAdjust()
{
    if(urgent.value == 0 && urgent.className == "urgent")
    {
        urgent.classList.remove("urgent");
    }
    else if(urgent.value == 1 && urgent.className == "")
    {
        urgent.classList.add("urgent");
    }
}

function hateAdjust()
{
    var reason_value = reason.value;
    var reason_text = reason.options[reason.selectedIndex].text;
    if(reason_text == "Hate Mail")
    {
        explanation.innerHTML = "Hate";
        placeholder.innerHTML = "You are fucking trash because...";
    }
    else
    {
        resetText();
    }
}

function resetText()
{
    explanation.innerHTML = "Explanation";
    placeholder.innerHTML = "I'm contacting you because...";
}