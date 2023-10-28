const inputvalue =  document.getElementById('input')
const button = document.getElementById('arrow')
const error = document.getElementById('error')
const pError = document.getElementById('p-error')
const sectionInput = document.getElementById('input-section')

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

button.addEventListener('click' ,  () =>{
    if(validateEmail(inputvalue.value)){
        alert('email ok')
        error.style.display = 'none'
        pError.style.display = 'none'
        sectionInput.style.borderBlockColor = '#00000071'
    }else{
        error.style.display = 'block'
        pError.style.display = 'block'
        sectionInput.style.borderBlockColor = 'red'

        console.log(validateEmail(inputvalue.value))
    }
})






