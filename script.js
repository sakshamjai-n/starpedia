var diva = document.getElementById("mainBeginner");
var displaya = 1;
var btna = document.getElementById("btnBeginner")
function showHide1()
{
    if(displaya==1)
    {
        diva.style.display = 'block';
        displaya=0;
        btna.textContent='Hide Quiz';
    }
    else
    {
        diva.style.display = 'none';
        displaya=1;
        btna.textContent='Take Quiz';
    }
}
var divb = document.getElementById("mainIntermediate");
var displayb = 1;
var btnb = document.getElementById("btnIntermediate")
function showHide2()
{
    if(displayb==1)
    {
        divb.style.display = 'block';
        displayb=0;
        btnb.textContent='Hide Quiz';
    }
    else
    {
        divb.style.display = 'none';
        displayb=1;
        btnb.textContent='Take Quiz';
    }
}
var div = document.getElementById("mainAdvanced");
var display = 1;
var btn = document.getElementById("btnAdvanced")
function showHide3()
{
    if(display==1)
    {
        div.style.display = 'block';
        display=0;
        btn.textContent='Hide Quiz';
    }
    else
    {
        div.style.display = 'none';
        display=1;
        btn.textContent='Take Quiz';
    }
}
