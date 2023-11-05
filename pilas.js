//Ejercicio 1 
/*class Stack{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
    }

    pop(){
        if(this.stack.length > 0){
            return this.stack.pop();
        }else{
            return null;
        }
    }

    peek(){
        if(this.stack.length > 0){
            return this.stack[this.stack.length - 1]; 
        }else{
            return null;
        } 
    }

    getSize(){
        return this.stack.length;
    }
}

const myStack = new Stack();

myStack.push("Melon");
myStack.push("sandia");
myStack.push("papaya");
myStack.push("Naranja");
myStack.push("apio");
myStack.push("cebolla");
myStack.push("Manzana");

console.log(myStack);

function Elements() {
    let elementsMyStack = [];
    for (let i = 0; i < 4; i++) {
        elementsMyStack.push(myStack.peek());
        myStack.pop();  
           
    }    

    console.log(elementsMyStack);
    return elementsMyStack    
}

Elements();*/



//ejercicio 1 intento 2
/*class Stack{
    constructor(){
        this.stack = [];
    }

    apply(element){
        this.stack.push(element);
    }

    detach(){
        this.stack.pop();
        
    }

    see(){
         return this.stack[this.stack.length - 1]; 
        
    }
}

const stack = new Stack();
stack.apply(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandia','Melon'],4);
console.log(stack)


let number = 4;
 
let Elements =[];

function elementsMyStack(array,number) {
    let i = 0
    while(i < number){
        Elements.push(array[i]);
        i++;
    }
    console.log(Elements);
}
elementsMyStack(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandia','Melon'],4);*/



//ejercicio 2
//intento1
//Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2);
//Salida: [3,2,3,4,6,8,1,7];
/*class Stack{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
    }

    pop(){
        if(this.stack.length > 0){
            return this.stack.pop();
            
        }else{
            return null;
        }
    }

    peek(){
        if(this.stack.length > 0){
            return this.stack[this.stack.length - 1]; 
        }else{
            return null;
        } 
    }

    getSize(){
        return this.stack.length;
    }      
}

const stack =new Stack();
stack.push("3");
stack.push("2");
stack.push("3");
stack.push("4");
stack.push("6");
stack.push("8");
stack.push("1");
stack.push("2");
stack.push("5");
stack.push("5");
console.log(stack)


console.log(stack.stack);
  
function reemplazar(nuevo, viejo) {
  const results = new Stack();

  while (stack.getSize() > 0) {
    const elemento = stack.pop();
    if (elemento === viejo) {
      results.push(nuevo);
    } else {
      results.push(elemento);
    }
  }

  while (results.getSize() > 2) {
    stack.push(results.pop());
  }

  console.log(stack.stack);
}

reemplazar("7", "2");*/


//ejercicio2
//intento2
/*class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(value) {
      this.stack.push(value);
    }
  
    pop() {
      if (this.stack.length > 0) {
        return this.stack.pop();
      } else {
        return null;
      }
    }
  
    peek() {
      if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1];
      } else {
        return null;
      }
    }
  
    getSize() {
      return this.stack.length;
    }
  }
  
  const stack = new Stack();
  
  stack.push(3);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(6);
  stack.push(8);
  stack.push(1);
  stack.push(2);
  stack.push(5);
  stack.push(5);
  
  
  console.log(stack.stack);
  
  function reemplazar(nuevo, viejo) {
    const results = new Stack();
  
    while (stack.getSize() > 2) {
      const elemento = stack.pop();
      if (elemento === viejo) {
        results.push(nuevo);
      } else {
        results.push(elemento);
      }
    }
  
    while (results.getSize() > 0) {
      stack.push(results.pop());
    }
  
    console.log(stack.stack);
  }
  
  reemplazar(7, 2);*/


//ejercico 3 
//Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
//Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
/*class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value)
    }

    pop() {
        if (this.stack.length > 0) {
            return this.stack.pop();
        } else {
            return null;
        }
    }
}

const stack = new Stack();

function Trip() {
    setTimeout(function () {
        stack.push("Pueblo origen");
        console.log(stack);

        setTimeout(function () {

            stack.push("Pueblo 1");
            console.log(stack);

            setTimeout(function () {

                stack.push("Pueblo 2");
                console.log(stack);

                setTimeout(function () {

                    stack.push("Destino");
                    console.log(stack);

                    setTimeout(function () {
                        stack.pop();
                        console.log(stack);

                        setTimeout(function () {
                            stack.pop();
                            console.log(stack);

                            setTimeout(function () {
                                stack.pop()
                                console.log(stack)
    
                            }, 2000);    

                        }, 2000);

                    }, 2000);

                }, 2000);

            }, 2000);

        }, 2000);

    }, 2000)


}

Trip();*/



//ejercicio 4
//intento1
/*class Store {
    constructor() {
        this.pilaAlmacen = [];
        this.pilaTemporal = [];
    }
    apilarCajas(contenedor) {
        this.pilaAlmacen.push(contenedor);
    

    }
    retirarCaja(id) {

        while (this.pilaAlmacen.length > 0) {
            const contenedorDos = this.pilaAlmacen.pop();

            if (contenedorDos.id=== id) {

                console.log(`retirando ${contenedorDos.id}`);
                console.log(this.pilaAlmacen);


                while (this.pilaTemporal.length > 0) {
                    this.pilaAlmacen.push(this.pilaTemporal.pop());
                }
                return;
            } else {
                this.pilaTemporal.push(contenedorDos);

            }
        }
    
    }
}

const store = new Store();
store.apilarCajas({id: "ropa" });
store.apilarCajas({id: "accesorios" });
store.apilarCajas({id: "plasticos" });
store.apilarCajas({id: "maquillaje" });
store.apilarCajas({id: "trastes" });
store.apilarCajas({id: "collares" });
store.apilarCajas({id: "juguetes" });
store.apilarCajas({id: "medicamentos" });


store.retirarCaja("maquillaje");
store.retirarCaja("juguetes");
store.retirarCaja("plasticos");*/


//ejercicio 4
//intento 2
/*class Store {
    constructor() {
        this.pilaAlmacen = [];
        this.pilaTemporal = [];
    }
    apilarCajas(contenedor) {
        this.pilaAlmacen.push(contenedor);
        console.log(`se intriduce ${contenedor.id}`)
        


    }
    retirarCaja(id) {

        while (this.pilaAlmacen.length > 0) {
            const contenedorDos = this.pilaAlmacen.pop();

            if (contenedorDos.id === id) {

                console.log(`retirando ${contenedorDos.id}`);
                console.log(this.pilaAlmacen);


                while (this.pilaTemporal.length > 0) {
                    this.pilaAlmacen.push(this.pilaTemporal.pop());
                }
                return;
            } else {
                this.pilaTemporal.push(contenedorDos);

            }
        }

    }
}


const store = new Store();


function working() {
    setTimeout(function(){
        console.log("dia de trabajo")
        store.apilarCajas({ id: "ropa" });
        store.apilarCajas({ id: "accesorios" });
        store.apilarCajas({ id: "plasticos" });
        store.apilarCajas({ id: "maquillaje" });
        store.apilarCajas({ id: "trastes" });
        store.apilarCajas({ id: "collares" });
        store.apilarCajas({ id: "juguetes" });
        store.apilarCajas({ id: "medicamentos" });
        console.log(store);
        
        setTimeout(function(){
            store.retirarCaja("collares");


            setTimeout(function(){
                store.retirarCaja("plasticos")


                setTimeout(function(){
                    store.retirarCaja("juguetes");
                    store.apilarCajas({id:"dulces"});
                    store.apilarCajas({id:"celulares"});



                    setTimeout(function(){
                        store.retirarCaja("dulces");
                        store.retirarCaja("celulares");
                        store.retirarCaja("medicamentos");



                        setTimeout(function(){

                            const almacenTerminal = store.pilaAlmacen.map(contenedorDos => contenedorDos.id).join(',');
                            console.log(`termina el dia de trabajo. el almacen tiene ${almacenTerminal}`);
                        

                        }, 2000);
                    }, 2000);
                }, 2000);
            },2000);
        }, 2000);
    }, 2000);
}

working();*/








