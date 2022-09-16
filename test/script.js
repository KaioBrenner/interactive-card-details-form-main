

var checkName = 0;


function test(check){
    return check = 1;
}

console.log(test(checkName))






























/**
 const masks = {
    cpf(value){
        console.log(value)
        return value
        .replace(/\D/g, '')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1 $2')
        .replace(/(\d{4})(\d)/, '$1 $2')
    }
}



document.querySelectorAll("input").forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener("input", (e)=>{
        e.target.value = masks[field](e.target.value)
    }, false)
})
 */


