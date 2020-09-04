var input   =   document.getElementById('input');
var button =   document.getElementById('enter');
var ul  =   document.querySelector('ul');

// make  'create  element'  as  function    for less    code;
function    createliElement()   
    {
        var li  =   document.createElement('li');
        li.innerHTML    =   input.value;
        ul.appendChild(li);
        input.value =   '';
    }


// repeated operation; 
function    inputValueLength()  
    {
        return  input.value.length;
    }

//  add   Li  After   Button  Click;
function    addLiAfterButtonClick() 
    {
        if  (inputValueLength()   >   0)  
            {
                createliElement();
            }

    }

//  add   Li  After   Button  Click;
function    addLiAfterKeyDown(event) 
    {

        if  (inputValueLength()   >   0  &&  event.keyCode === 13)  
            {
                createliElement();
            }

    }

button.addEventListener('click',   addLiAfterButtonClick);
input.addEventListener('keydown',  addLiAfterKeyDown);
