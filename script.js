let input = document.getElementById('todoInput');
let text =document.querySelector('.text');

function Add () {
    if(input.value == ""){
        alert("hello")
        }

        else {
            let newEle = document.createElement('ul');
            newEle.innerHTML = `${input.value}`;

            text.appendChild(newEle);
            input.value = ""
                }
}


let p = new Promise((resolve, reject) => {
    let a = 3 + 1 
    if (a == 4){
        resolve('Yes')
    }
    else {
        reject('No')
    }
})

p.then((message) => {

    console.log('Answer is ' + message)


}).catch((message) => {

    console.log('Answer is ' + message)

}
)


let c = new Promise((resolve, reject) => {
    let b = 99 + 5
    if( b == 104 ) {
        resolve('Hamza')
    }
    else{
        reject('nahi')
    }
})

c.then ((message) => {
    console.log('ur name is ' + message)

}).catch((message) => {
    console.log('ur name is ' + message)
}
)