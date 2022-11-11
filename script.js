class Carta{

    clasificacion = ["corazones", "treboles", "diamantes","picas"]
    cadena = ["as","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","J","Q","K"]
    numero = [1,2,3,4,5,6,7,8,9,10,11,12,13]

    //01 corazones
    //1 treboles
    //2 diamantes
    //3 picas
    mostrarCarta(numero,clasificacion){
        console.log(`La carta es: ${this.numero[numero]} - ${this.cadena[numero]} de ${this.clasificacion[clasificacion]}`)
    }
}

let unaCarta = new Carta()
unaCarta.mostrarCarta(2,3)

class Baraja extends Carta{

    mazo = []
    constructor(){
        super()
        this.mazoCartas()
    }

    mazoCartas(){
       
        for (let i = 0; i < this.clasificacion.length; i++){
            for(let x = 0; x < this.cadena.length; x++){
                this.mazo.push(`${this.clasificacion[i]} ${this.cadena[x]}`)
              
            }
        }
        
    }

    mezclarBaraja(array){
        let  m = array.length, t, i;
        // While there remain elements to shuffle…
        while (m) {      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }      
        return array;
    }

    restablecer(){}

    repartir(array){

        let i
        let cartaAleatoria
        i = Math.floor(Math.random() * this.mazo.length);
        cartaAleatoria = array[i]           // selecciona carta aleatoria
        array.splice(i, 1)                  //elimina la carta aleatoria del mazo
        return {cartaAleatoria, array}
    }

}

let nuevoMazo = new Baraja ()
console.log("nueva baraja")
console.log(nuevoMazo.mazo) 
let barajaMezclada = nuevoMazo.mezclarBaraja(nuevoMazo.mazo)
console.log("baraja mezclada")
console.log(barajaMezclada)
let unaCartaRepartida = nuevoMazo.repartir(barajaMezclada)
console.log("carta aleatoria")
console.log(unaCartaRepartida.cartaAleatoria)
console.log("baraja sin la carta")
console.log(unaCartaRepartida.array)


class Jugador extends Baraja 
{
    mano =[]
    constructor(nombre,numCartas){
        super()
        this.nombre=nombre
        this.numCartas = numCartas

        console.log("el nombre del jugador es " + this.nombre)
    }

        repartirMano(){    
           // console.log("mano del jugador:")       
            for(let i=0; i<this.numCartas;i++){
                
               //console.log(this.repartir(barajaMezclada))
               let nuevaMano=this.repartir(barajaMezclada)
               this.mano.push(nuevaMano.cartaAleatoria)
               
                
            } 
            return this.mano;
              
             
    }
}

let jugador1= new Jugador("silvana",5)
let mazoJugador1 = jugador1.repartirMano();
console.log("mazo del jugador:")
console.log(mazoJugador1)
console.log("baraja sin el mazo del jugador: ")
console.log(unaCartaRepartida.array)


