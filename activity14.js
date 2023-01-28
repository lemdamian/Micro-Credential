console.log('Damian Lema')
let menu1 = document.querySelector('.menu')
let openMenu1 = document.querySelector('.openMenu')
openMenu1.addEventListener('click', function(){
    this.classList.toggle('active')
    menu1.classList.toggle('openClose')
})
/*SESSION STORAGE IN FORM*/
function passValues(){
   let username = document.querySelectorAll('#user').value
   sessionStorage.setItem('userN', username)
   return false
}
let input1 = document.querySelector('.submit1')
input1.addEventListener('click', passValues)


