function Add()
{
        var basicText =Number(document.getElementById("basicText").value);
        var basicText1 = Number(document.getElementById("basicText1").value);
        var sum = (basicText)+(basicText1) ;
        console.log(sum);
}


function Subtract()
{
  var basicText =Number(document.getElementById("basicText").value);
  var basicText1 = Number(document.getElementById("basicText1").value);
  var sub = parseInt(basicText)-parseInt(basicText1) ;
  console.log(sub);
}

function Multiply()
{
  var basicText =Number(document.getElementById("basicText").value);
  var basicText1 = Number(document.getElementById("basicText1").value);
  var mul = parseInt(basicText)*parseInt(basicText1) ;
  console.log(mul);
}

function Divide()
{
  var basicText =Number(document.getElementById("basicText").value);
  var basicText1 = Number(document.getElementById("basicText1").value);
  var div = parseInt(basicText)/parseInt(basicText1) ;
  console.log(div);
}
