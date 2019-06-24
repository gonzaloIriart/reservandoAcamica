var Reserva = function(horario, cantidadPersonas, precioPorPersona, codigoDescuento){
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDescuento = codigoDescuento;
}

Reserva.prototype.calcularPrecioBase = function(){
    return this.precioPorPersona * this.cantidadPersonas;
}

Reserva.prototype.calcularDescuentoPorCantidad = function(){
    let descuento = 0;
    if(this.cantidadPersonas >= 8){
        descuento = this.calcularPrecioBase() * 0.15;
       }else if(this.cantidadPersonas >= 6){
            descuento = this.calcularPrecioBase() * 0.10;
            }else if(this.cantidadPersonas >= 3){
               descuento = this.calcularPrecioBase() * 0.05;
                }
        
    return descuento;
    
}

Reserva.prototype.calculoCodigoDescuento = function(){
    
   switch(this.codigoDescuento){
       case 'DES1':
           return  this.precioPorPersona;           
       case 'DES15':
           return  this.calcularPrecioBase * 0.15;           
       case 'DES200':
           return  200;           
       default:
           return  0;
        }
    
}

Reserva.prototype.calcularAdicional = function() {
    var adicional = 0;
    if(this.horario.getHours() === 13 || this.horario.getHours() === 20 ){
        adicional = this.calcularPrecioBase() * 0.05;
    }
    if (this.horario.getDay() === 0 || this.horario.getDay() === 6 || this.horario.getDay() === 5){
        adicional = this.calcularPrecioBase() * 0.10;
    }
    return adicional;
}

Reserva.prototype.calcularDescuentos = function() {
    return this.calcularDescuentoPorCantidad() + this.calculoCodigoDescuento();
}

Reserva.prototype.calcularPrecioFinal = function() {
    return precioFinal = this.calcularPrecioBase() + this.calcularAdicional() - this.calcularDescuentos();
}