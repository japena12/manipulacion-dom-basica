console.log("Hello World")
const h1= document.querySelector('h1')
const p= document.querySelector('p')
const parrafito= document.querySelector('.parrafito')
//con .(punto para llamar una clase)
const pid= document.querySelector('#pid')
//con # para llamar u id
const input=document.querySelector('input')

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})
h1.innerHTML='patito <br> Feo' // cambia texto del h1(etiqueta seleccionado
//h1.innertext='feo' // interpreta todo como texto
h1.getAttribute('')//para conseguir atributos dentro de html
h1.setAttribute