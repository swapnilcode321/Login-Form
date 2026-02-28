const NameInput=document.querySelector("#name")
 const passowrdInput=document.querySelector("#Password")
 const btn=document.querySelector("#btn1")

btn.addEventListener('click',function(e){
    e.preventDefault()

    const name=(NameInput.value)
    const Password=(passowrdInput.value)

    // Correct Name 

    const CorrectName='Swapnil';
    const CorrectPassword='12345'

    // Condition apply
    if(name===CorrectName && Password===CorrectPassword){
        alert(' ✅ Login Successfully  ')
    } else{
        alert(" ❌ Login Faild ")
    }

})