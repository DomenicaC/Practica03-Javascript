/**h */
function validarCamposObligatorios(elemento) {
    var bandera = true

    for (var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value == '' && elemento.type == 'text') {
            if (elemento.id == 'cedula') {
                /*document.getElementById('mensajeCedula').innerHTML = '<br>El campo cedula esta vacio'*/
            }
            if (elemento.id == 'nombres') {
                // document.getElementById('mensajeNombres').innerHTML = '<br>El campo nombre esta vacio'
            }
            if (elemento.id == 'apellidos') {
                // document.getElementById('mensajeApellidos').innerHTML = '<br>El campo apellido esta vacio'
            }
            if (elemento.id == 'direccion') {
                //  document.getElementById('mensajeDireccion').innerHTML = '<br>El campo direccion esta vacio'
            }
            if (elemento.id == 'telefono') {
                // document.getElementById('mensajeTelefono').innerHTML = '<br>El campo telefono esta vacio'
            }
            if (elemento.id == 'fecha') {
                //   document.getElementById('mensajeFecha').innerHTML = '<br>El campo fecha nacimiento esta vacio'
            }
            if (elemento.id == 'correo') {
                //  document.getElementById('mensajeCorreo').innerHTML = '<br>El campo correo esta vacio'
            }
            if (elemento.id == 'contrasena') {
                //    document.getElementById('mensajeContrasena').innerHTML = '<br>El campo contraseña esta vacio'
            }
            elemento.style.border = '1px red solid'
            elemento.className = 'error'
            bandera = false
        }
    }

    if (!bandera) {
        alert('Error: algunos campos estan vacios')
    }

    return bandera
}

function verificar() {
    console.clear();

    let cadena = document.getElementById("cadena").value;

    if (cadena.indexOf(" ") === -1) {
        console.log(`\"${cadena}\" no contiene espacios`);
    } else {
        console.log(`\"${cadena}\" contiene al menos un espacio`);
    }
}

function validarLetras(elemento) {

    if (elemento.value.length > 0) {
        document.getElementById('mensajeNombres').innerHTML = ''
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
       // console.log(miAscii)

        if (miAscii >= 97 && miAscii <= 122 || miAscii >= 65 && miAscii <= 90 || miAscii == 32) {
            if (elemento.indexOf(" ") === -1) {
                return true
            } else {
                document.getElementById('mensajeNombres').innerHTML = '<br>El campo nombre debe contener dos nombres'
                return false
            }

        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length - 1)
            document.getElementById('mensajeNombres').innerHTML = '<br>El campo nombre debe contener solo letras'
            return false
        }
        /*
                if (elemento.value.Contains(" ")) {
                    return true
                } else {
                    
                    document.getElementById('mensajeNombres').innerHTML = '<br>El campo nombre debe contener dos nombres'
                    return false
                }*/

    } else {
        return false
    }
}

function validarNumeros(elemento) {
    if (elemento.value.length > 0) {
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        console.log(miAscii)

        if (miAscii >= 48 && miAscii <= 57) {
            if (elemento.value.length > 10) {
                document.getElementById('mensajeTelefono').innerHTML = '<br>El campo telefono debe tener solo 10 numeros'
            }
            return true
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length - 1)
            return false
        }
    } else {
        return true
    }
}

function validarCedula(elemento) {
    document.getElementById('mensajeCedula').innerHTML = ''
    if (elemento.value.length == 10) {
        var tercerDigito = Integer.parseInt(elemento.substring(2, 3))
        if (tercerDigito < 6) {
            // Coeficientes de validación cédula
            // El decimo digito se lo considera dígito verificador
            var coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2]

            var verificador = Integer.parseInt(elemento.substring(9, 10));
            var suma = 0;
            var digito = 0;
            for (var i = 0; i < (elemento.length() - 1); i++) {
                digito = Integer.parseInt(elemento.substring(i, i + 1)) * coefValCedula[i];
                suma += ((digito % 10) + (digito / 10));
            }

            if ((suma % 10 == 0) && (suma % 10 == verificador)) {
                cedulaCorrecta = true;
            } else if ((10 - (suma % 10)) == verificador) {
                cedulaCorrecta = true;
                document.getElementById('mensajeCedula').innerHTML = ''
            } else {
                cedulaCorrecta = false;
                document.getElementById('mensajeCedula').innerHTML = '<br> La cedula es incorrecta'
            }
        } else {
            cedulaCorrecta = false;
            document.getElementById('mensajeCedula').innerHTML = '<br>La cedula solo debe tener 10 digitos'
        }
    } else {
        cedulaCorrecta = false;
        document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula es incorrecta'
    }

    return cedulaCorrecta;

}


function valCedula(cedula) {
    document.getElementById('mensajeCedula').innerHTML = ''
    if (cedula.value.length == 10) {
        var digito_region = cedula.substring(0, 2)
        if (digito_region >= 0 && digito_region <= 24) {
            var ultimo_digito = cedula.substring(9, 10)
            var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8))

            var numero1 = cedula.substring(0, 1)
            var numero1 = (numero1 * 2)
            if (numero1 > 9) {
                var numero1 = (numero1 - 9)
            }

            var numero3 = cedula.substring(2, 3);
            var numero3 = (numero3 * 2);
            if (numero3 > 9) {
                var numero3 = (numero3 - 9);
            }

            var numero5 = cedula.substring(4, 5);
            var numero5 = (numero5 * 2);
            if (numero5 > 9) {
                var numero5 = (numero5 - 9);
            }

            var numero7 = cedula.substring(6, 7);
            var numero7 = (numero7 * 2);
            if (numero7 > 9) {
                var numero7 = (numero7 - 9);
            }

            var numero9 = cedula.substring(8, 9);
            var numero9 = (numero9 * 2);
            if (numero9 > 9) {
                var numero9 = (numero9 - 9);
            }

            var impares = numero1 + numero3 + numero5 + numero7 + numero9

            var suma_total = (pares + impares)

            var primer_digito_suma = string(suma_total).substring(0, 1)

            var decena = (parseInt(primer_digito_suma) + 1) * 10

            var digito_validador = decena - suma_total

            if (digito_validador == 10) {
                digito_validador = 0
            }

            if (digito_validador == ultimo_digito) {
                document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula es valida'
            } else {
                document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula es invalida'
            }
        } else {

            document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula no pertenece a ninguna region'
            return false
        }

    } else {

        document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula debe tener 10 digitos'
        return false
    }

    return true
}

/*function validarCed2(elemento) {
    if (elemento.value.length > 0) {
        var total = 0
        var longitud = cad.length
        var longcheck = longitud - 1

        if (longitud == 10) {
            for (var i = 0; i < longcheck; i++) {
                if (i % 2 == 0) {
                    var aux = elemento.charAt(i) * 2
                    if (aux > 9) {
                        aux -= 9
                        total += aux
                    }
                } else {
                    total += parseInt(elemento.charAt(i))
                }
            }
            total = total % 10 ? 10 - total % 10 : 0

            if (elemento.charAt(longitud - 1) == total) {
                document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula es valida'
                return true
            } else {
                document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula es incorrecta'
                return false
            }
        }
    }

}

function validarCed1(cad) {
    //cad = document.getElementById("ced").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;

        if (cad.charAt(longitud - 1) == total) {
            document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula es valida'
        } else {
            document.getElementById('mensajeCedula').innerHTML = '<br>  La cedula es incorrecta'
        }
    }
}*/


function validarFecha() {

}