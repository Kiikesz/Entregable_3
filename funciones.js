const empleados = ['juan perez' , 'luis rodrigez' , 'raul vargas']



function listarEmpleados(){
    console.table(empleados)
}


function agregarEmpleado() {
    let nuevoEmpleado = prompt("Ingresa el nombre del nuevo empleado")
    nuevoEmpleado = nuevoEmpleado.toLowerCase()
    console.clear()
    empleados.push(nuevoEmpleado)
    console.log("se agregó a " + nuevoEmpleado + " como nuevo empleado a la nomina")
    listarEmpleados()
}


function quitarEmpleado() {
    let todook = 1
    let eliminado = prompt("Ingrese el nombre del empleado a eliminar")
    eliminado = eliminado.toLowerCase()
    verificacionEliminado = empleados.includes(eliminado)
    if (verificacionEliminado === true){
        todook= 2
    }

    while (todook != 2) {
        console.clear()
        listarEmpleados()
        eliminado = prompt("El empleado que ingresaste no se encuentra en la lista, por favor revisa la lista en 'console' e ingresa el nombre correcto del empleado")
        eliminado = eliminado.toLowerCase()
        verificacionEliminado2 = empleados.includes(eliminado)
        if (verificacionEliminado2 === true){
            todook= 2
        }
    }
    eliminado = empleados.indexOf(eliminado)
    parseFloat(eliminado)
    empleados.splice(eliminado, 1)

}

function buscarEmpleado() {
    empleadoBuscado = prompt("Ingresa el nombre del empleado a buscar")
    let resultado = empleados.includes(empleadoBuscado)
    if (resultado === true) {
        console.clear()
        alert("el empleado " + empleadoBuscado + " se encuentra en la base de datos, puedes revisarlo en la lista del 'consele'")
        console.log("el empleado " + empleadoBuscado + " se encuentra en la base de datos, puedes revisarlo en la lista del 'consele'")
        listarEmpleados()
    }
    else {
        alert("no se encontro a" + empleadoBuscado + " en la base de datos")
        console.warn ("no se encontro a" + empleadoBuscado + " en la base de datos")
    }
}

