let ingreseNombre = prompt("Ingrese su nombre de usuario");
while (ingreseNombre != "germanpintoz") {
    if (ingreseNombre === "valentino54") {
        ingreseContrasena = prompt("Ingrese su contraseña");
    } else {
        alert("Nombre de usuario incorrecto");
        ingreseNombre = prompt("Ingrese nombre de ususario");
    }
}

let ingreseContrasena = prompt("Ingrese su contraseña");
while (ingreseContrasena != "123456") {
    alert("Contraseña incorrecta");
    ingreseContrasena = prompt("Ingrese su contraseña");
}

if (ingreseNombre === "germanpintoz" && ingreseContrasena === "123456") {
    alert("tokens disponibles" + "=" + "67");
} else if (ingreseNombre === "valentino54" && ingreseContrasena === "123456") {
    alert("tokens disponibles" + "=" + "700");
}