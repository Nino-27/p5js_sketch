const macho = document.querySelector('#machoInput')
const hembra = document.querySelector('#hembraInput')
const fecha = document.querySelector('#fecha')
const btnMandar = document.querySelector('#btnMandar')

const table = document.querySelector('#myTable')

let inicio = true;

const localStorageContent = localStorage.getItem('names');
const localStorageContent2 = localStorage.getItem('idsss');
const localStorageContent3 = localStorage.getItem('names2');
const localStorageContent4 = localStorage.getItem('fechass');

let names, idsss, names2, fechass;
let good = 0

leerDatos();

function leerDatos(){

    //Leer names
    if (localStorageContent === null){
        names=[];
    }
    else{
        names = JSON.parse(localStorageContent)
      
        console.log(names)
        console.log('length', names.length);
        //console.log('idsss', names2.length);
        //addDatos();
        good += 1;
    }

    //Leer idsss
    if (localStorageContent2 === null){
        idsss=[];
    }
    else{
        idsss = JSON.parse(localStorageContent2)
    
        console.log(idsss)
        console.log('length', idsss.length);
        //console.log('idsss', names2.length);
        //addDatos();
        good += 1;
    }

        //Leer names2
        if (localStorageContent3 === null){
            names2=[];
        }
        else{
            names2 = JSON.parse(localStorageContent3)
        
            console.log(names2)
            console.log('length', names2.length);
            //console.log('idsss', names2.length);
            //addDatos();
           // addLocalData();
            good += 1;
        }

            //Leer fechass
         if (localStorageContent4 === null){
             fechass=[];
         }
         else{
              fechass = JSON.parse(localStorageContent4)
    
              console.log(fechass)
              console.log('length', fechass.length);
              //console.log('idsss', names2.length);
              //addDatos();
              good += 1;
    }

    if (good === 4){
        addLocalData();
    }

}




var ids = 0;
btnMandar.addEventListener('click', function(){
    ids += 1;
    console.log(fecha.value);
    
   /* const row = table.insertRow(1)

    let id = row.insertCell(0)
    let nombre = row.insertCell(1)
    let nombre2 = row.insertCell(2)
    let fechas = row.insertCell(3)*/

    /*const idss = ids;
    const machoNombre = macho.value;
    const hembraNombre = hembra.value;
    const fechaDate = fecha.value;*/
    addDatos();
    

    /*id.innerText = idss
    nombre.innerText = machoNombre
    nombre2.innerText = hembraNombre
    fechas.innerText = fechaDate
    */



    macho.value = ""
    hembra.value = ""
    fecha.value = ""

});

function addDatos(){

    const row = table.insertRow(1)

    const id = row.insertCell(0)
    const nombre = row.insertCell(1)
    const nombre2 = row.insertCell(2)
    const fechas = row.insertCell(3)
    const dia = row.insertCell(4)


    const idss = ids;
    const machoNombre = macho.value;
    const hembraNombre = hembra.value;
    const fechaDate = fecha.value;
    
    //Calculando los dias:
    var hoy = new Date();
    var pasadoDia = new Date(fecha.value)
    console.log("pasadoDia",pasadoDia)
    console.log("todayDate",hoy)
    var difference_time = hoy.getTime() - pasadoDia.getTime();
    console.log("difference_time", difference_time)
    var diasTotal = difference_time / (1000 * 3600 *24);
    console.log("diasTotal",diasTotal)

    const dias = Math.round(diasTotal);
    //document.write(dias)


    if(names && idsss && names2 && fechass){
        names.push(machoNombre);
        idsss.push(idss);
        names2.push(hembraNombre);
        fechass.push(fechaDate);

        localStorage.setItem('names', JSON.stringify(names));
        localStorage.setItem('idsss', JSON.stringify(idsss));
        localStorage.setItem('names2', JSON.stringify(names2));
        localStorage.setItem('fechass', JSON.stringify(fechass));
    }


    id.innerText = idss
    nombre.innerText = machoNombre
    nombre2.innerText = hembraNombre
    fechas.innerText = fechaDate
    dia.innerText = dias

}

function addLocalData(){
    

    for(let i = 0; i < names.length; i++){
        const row = table.insertRow(1)

        const id = row.insertCell(0)
        const nombre = row.insertCell(1)
        const nombre2 = row.insertCell(2)
        const fechas = row.insertCell(3)
        const dia = row.insertCell(4)

        id.innerText = idsss[i]
        nombre.innerText = names[i]
        nombre2.innerText = names2[i]
        fechas.innerText = fechass[i]

         //Calculando los dias:
        var hoy = new Date();
        var pasadoDia = new Date(fechass[i])
        console.log("pasadoDia",pasadoDia)
        console.log("todayDate",hoy)
        var difference_time = hoy.getTime() - pasadoDia.getTime();
        console.log("difference_time", difference_time)
        var diasTotal = difference_time / (1000 * 3600 *24);
        console.log("diasTotal",diasTotal)
        //************************************************** */
        //arrglarlo
        const dias = Math.round(diasTotal);
        dia.innerText = dias;

        console.log("i",i)
    }
}


