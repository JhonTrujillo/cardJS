//1. Creamos el arreglo que contendra los objetos card
const escolaridad = [
    {
        titulo:'Primaria',
        imagen:'img/primaria.jpg',
        descripcion:'Jardin a Quinto',
        enlace:'primaria.html',
    },
    {
        titulo:'Secundaria',
        imagen:'img/secundaria.avif',
        descripcion:'Sexto a Once',
        enlace:'secundaria.html',
    },
    {
        titulo:'Cursos',
        imagen:'img/clasesvacacionales.jpg',
        descripcion:'Cursos - Refuerzo',
        enlace:'cursos.html',
    },
    {
        titulo:'Primaria',
        imagen:'img/primaria.jpg',
        descripcion:'Jardin a Quinto',
        enlace:'primaria.html',
    }  
];

//2. Seleccionamos por id el contenedor que tendra las card.
let card = document.getElementById("contcard")

//3. con el interador for recorremos los objetos del arreglo y creamos los elemento de cada objeto.
// for(inicializacion, condicion, incremento).  escolaridad es el arreglo y .length cuenta los objetos del arreglo.
for(let i = 0; i < escolaridad.length; i++) {

    let creatarjeta = document.createElement("div"); //creamos variable que almacena la creacion de un div.
    creatarjeta.className = "creartarjeta"; // Se le asigna una Class al div creado en la linea anterior.

        let titulo = document.createElement("h3"); //Creamos variable que almacena creacion de una etiqueta h3.
        let imagen = document.createElement("img"); //creamos variable que almacena creacion de una etiqueta img.
        let descripcion = document.createElement("p"); //creamos variable que almacena creacion de una etiqueta p.
        let enlace = document.createElement("a"); //creamos variable que almacena la creacion de etiqueta a.
        
        //se llama la variable titulo y con .textContent asignamos el titulo = escolaridad[objeto].titulo.
        titulo.textContent = escolaridad[i].titulo; 
        imagen.setAttribute('src', escolaridad[i].imagen);
        descripcion.textContent = escolaridad[i].descripcion; 
        enlace.setAttribute('href', escolaridad[i].enlace);
        enlace.textContent = ("Click Aqui");

        //llamamos el div creartarjeta y con .appendChild agregamos cada uno de sus hijos.            
        creatarjeta.appendChild(titulo);
        creatarjeta.appendChild(imagen);
        creatarjeta.appendChild(descripcion);
        creatarjeta.appendChild(enlace);

        // llamamos variable card el cual contiene el elemento que sera el contenedor global y con .appendChild agregamos la tarjeta
        card.appendChild(creatarjeta); 
        
}

 