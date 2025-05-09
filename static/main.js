var btn = document.getElementById("btn");
var inp = document.getElementById("inp");
function valtozas(){
    var option = document.getElementById("hely").value;
    console.log(option)
    

    if (option == 2){
        btn.innerHTML = "<button>Tovább</button>"
    }else if(option == 1){

        inp.innerHTML = '<input type="text" name="come" id="inps" placeholder="Helyileg honnan jössz?" onkeypress="mivanbenne()">'
    }else{
        inp.innerHTML = ""
        btn.innerHTML = "<button disabled>Tovább</button>"

    }
}

function mivanbenne(){
    var input = document.getElementById("name").value;
    console.log(input.length)
    if(input.length > 0){
        btn.innerHTML = "<button>Tovább</button>"
    }else{
        btn.innerHTML = "<button disabled>Tovább</button>"
    }

}