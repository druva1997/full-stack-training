document.querySelector ('button').addEventListener('click', function (evt){
console.log(evt)
})
const input =document.querySelector ('input');
input.addEventListener ('keydown', function (e){
    console.log(e.key)
    console.log(e.code)
})
/*input.addEventListener ('keyup', function (){
    console.log("keyup")
})*/

window.addEventListener('keydown',function(e){
    switch (e.code){
        case 'Arrowup':
            console.log("up")
            break;
            case 'Arrowdown':
            console. log("down")
            break;

            case 'Arrowleft':
                console. log("left")
                break;

                case 'Arrowright':
            console. log("right")
            break;
            default : 
            console.log ("ignored")


    }

    
})