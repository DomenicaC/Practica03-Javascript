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

function valCedula(ced) {
    document.getElementById('mensajeced').innerHTML = ''

    var miAscii = ced.value.charCodeAt(ced.value.length - 1)
    console.log(miAscii)
    if (miAscii >= 48 && miAscii <= 57) {
        if (ced.value.length == 10) {
            var dr = ced.value.substring(0, 2)
            if (dr >= 0 && dr <= 24) {
                var ud = ced.value.substring(9, 10)
                var pares = parseInt(ced.value.substring(1, 2)) + parseInt(ced.value.substring(3, 4)) + parseInt(ced.value.substring(5, 6)) + parseInt(ced.value.substring(7, 8))

                var n1 = ced.value.substring(0, 1)
                var n1 = (n1 * 2)
                if (n1 > 9) {
                    var n1 = (n1 - 9)
                }

                var n3 = ced.value.substring(2, 3);
                var n3 = (n3 * 2);
                if (n3 > 9) {
                    var n3 = (n3 - 9);
                }

                var n5 = ced.value.substring(4, 5);
                var n5 = (n5 * 2);
                if (n5 > 9) {
                    var n5 = (n5 - 9);
                }

                var n7 = ced.value.substring(6, 7);
                var n7 = (n7 * 2);
                if (n7 > 9) {
                    var n7 = (n7 - 9);
                }

                var n9 = ced.value.substring(8, 9);
                var n9 = (n9 * 2);
                if (n9 > 9) {
                    var n9 = (n9 - 9);
                }

                var impares = n1 + n3 + n5 + n7 + n9

                var sumTot = (pares + impares)

                var priDigS = (sumTot).toString().substring(0, 1)

                var decena = (parseInt(priDigS) + 1) * 10

                var digVal = decena - sumTot

                if (digVal == 10) {
                    digVal = 0
                }

                if (digVal == ud) {
                    return true
                } else {
                    document.getElementById('mensajeced').innerHTML = '<br>  La cedula es invalida'
                    return false
                }
            } else {

                document.getElementById('mensajeced').innerHTML = '<br>  La cedula no pertenece a ninguna region'
                return false
            }

        } else {

            document.getElementById('mensajeced').innerHTML = '<br>  La cedula debe tener 10 digitos'
            return false
        }
    } else {
        ced.value = ced.value.substring(0, ced.value.length - 1)
        document.getElementById('mensajeced').innerHTML = '<br>El campo debe contener solo numeros'
        return false
    }
    return true
}

function validarNombres(elemento) {
    document.getElementById('mensajeNombres').innerHTML = ''
    if (elemento.value.length > 0) {
        document.getElementById('mensajeNombres').innerHTML = ''
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        console.log(miAscii)
        var espacio1 = elemento.value.indexOf(' ')
        var j = 0
        if (miAscii >= 97 && miAscii <= 122 || miAscii >= 65 && miAscii <= 90 || miAscii == 32) {
            if (espacio1 != -1) {
                if (miAscii != 32) {
                    j = j + 1
                    console.log("j " + j)
                    if (j <= 1) {
                        return true
                    }
                } else {
                    document.getElementById('mensajeNombres').innerHTML = '<br>El campo debe contener dos nombres'
                    return false
                }
            } else {
                document.getElementById('mensajeNombres').innerHTML = '<br>El campo debe contener dos nombres'
                return false
            }
        } else {
            elemento.value = elemento.value.substring(0, elemento.value.length - 1)
            document.getElementById('mensajeNombres').innerHTML = '<br>El campo nombres debe contener solo letras'
            return false
        }
    } else {
        return false
    }
}

function validarApellidos(elemento) {
    document.getElementById('mensajeApellidos').innerHTML = ''
    if (elemento.value.length > 0) {
        document.getElementById('mensajeApellidos').innerHTML = ''
        var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        console.log(miAscii)
        var j = 0
        var espacio1 = elemento.value.indexOf(' ')
        if (miAscii >= 97 && miAscii <= 122 || miAscii >= 65 && miAscii <= 90 || miAscii == 32) {
            if (espacio1 != -1) {
                if (miAscii != 32) {
                    j = j + 1
                    console.log("j " + j)
                    if (j <= 1) {
                        return true
                    }
                } else {
                    document.getElementById('mensajeApellidos').innerHTML = '<br>El campo debe contener dos apellidos'
                    return false
                }
            } else {
                document.getElementById('mensajeApellidos').innerHTML = '<br>El campo debe contener dos apellidos'
                return false
            }
        }
    } else {
        return false
    }
}
