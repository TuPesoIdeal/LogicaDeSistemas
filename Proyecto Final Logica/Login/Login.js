function autenticacion(){
    let correo=document.getElementById("email").value;
    let contraseña=document.getElementById("password").value;
    if (
        (correo=="andres2007navarro@gmail.com" && contraseña=="123456") ||

        (correo=="Nahumfkiller.555@gmail.com" && contraseña=="123456") ||

        (correo=="fuentesjosue064@gmail.com" && contraseña=="123456") ||

        (correo=="barriosramirezdianafernanda@gmail.com" && contraseña=="123456") ||

        (correo=="Javiervelazques67@gmail.com" && contraseña=="123456") ||

        (correo=="janeth@gmail.com" && contraseña=="123456")
        
    )

            {
                window.location.href ="../Inicio/Inicio.html";
            }

            else{
                alert("Error, Correo o contraseña incorrecta")
            }

}