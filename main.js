let result = document.getElementById("result");
let buttons = document.querySelectorAll("input[type='button']");

for(let i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click" , function(event) {
        if(event.target.value == "=")
        {
            result.value = eval(result.value);
        }
        else if(event.target.value == "Clear")
        {
            result.value ="";
        }
        else if(event.target.value == "Back")
        {
            newvalue = result.value.substring(0,result.value.length -1)
            result.value = newvalue;
        }
        else if(event.target.value == "Random")
        {
            newvalueRandom=Math.random(result.value);
            result.value = newvalueRandom;
        }
        else if(event.target.value == "Round")
        {
            newvalueRound=Math.round(result.value);
            result.value = newvalueRound;
        }
        else if(event.target.value == "Sqrt")
        {
            newvalueSqrt=Math.sqrt(result.value)
            result.value = newvalueSqrt;
        }
        else if(event.target.value == "Sin")
        {
            newvalueSin=Math.sin(result.value)
            result.value = newvalueSin;
        }
        else if(event.target.value == "Cos")
        {
            newvalueCos=Math.cos(result.value)
            result.value = newvalueCos;
        }
        else if(event.target.value == "Ceil")
        {
            newvalueCeil=Math.ceil(result.value)
            result.value = newvalueCeil;
        }
        else if(event.target.value == "Floor")
        {
            newvalueFloor=Math.floor(result.value)
            result.value = newvalueFloor;
        }
        else if(event.target.value == "Pow")
        {
            newvaluePow=Math.pow(result.value,result.value)
            result.value = newvaluePow;
        }
        else{
            result.value += this.value;
        }
    })

    
}