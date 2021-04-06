/*
Mascota: Se refiere al animalito que los administradores registran y que los usuarios pueden adoptar.
Usuario: hay dos tipos de usuarios de nuestra aplicación, el tipo normal que busca adoptar una mascota y el tipo anunciante que puede ser el cuidador de la mascota o del centro de adopción. Se encarga de registrar a las mascotas y de contactarse con los usuarios cuando estos envían una solicitud, así como de aprobarla y rechazarla.
Solicitud: Una solicitud puede ser creada por un usuario para ponerse en contacto con el administrador y adoptar a una mascota.
Estos cuatro elementos serán nuestros modelos. Utilizando programación orientada a objetos podemos crear una clase para cada uno y así posteriormente el usuario podrá utilizar estos modelos creando instancias y obteniéndolas.

// Mascota.js

/** Clase que representa un animalito a adoptar */
class Mascota{
	constructor(nombre, categoria, fotos, descripcion, anunciante, ubicacion){
		this.nombre = nombre; // nombre de la mascota (o titulo del anuncio)
		this.categoria = categoria; // perro | gato | otro
		this.fotos = fotos; // links a las fotografías
		this.descripcion = descripcion; // descripción del anuncio
		this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
		this.ubicacion = ubicacion; // muy importante
	}
	
	guardar(){
		// función para guardar un nuevo registro en la base de datos.
	}
	
}

class UsuarioAdoptante {
    constructor(id,nombre,fechaNacim,tel,mail,foto,ubicacion){
        this.id = id;
        this.nombre = nombre; 
        this.fechaNacim = fechaNacim;
        this.ubicacion = ubicacion; 
        this.solicitud="";
        this.tel = tel;
        this.mail = mail;
        this.foto=foto;
    }
    solicitarAdopcion(idMascota,idAnunciante,id){}
    verMascotas(){}
    cancelarAdopcion(){}
    actualizarSolicitud(){}
    actualizarDatos(){}
}

class UsuarioAnunciante {
    constructor(nom{bre,mascota,ubicacion){
        this.nombre = nombre; // nombre de la persona que anuncia
        this.mascota = mascota; //mascota que anuncia
        this.ubicacion = ubicacion; // del interesado
    }

    anunciar(){}

}

class Solicitud {
    constructor(mascota,anunciante,adoptante,estatus){
        this.mascota = mascota; //mascota seleccionada
        this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
        this.adoptante = adoptante; // persona que quiere adoptar 
        this.estatus = estatus; //confirmada o rechazada
    }
}