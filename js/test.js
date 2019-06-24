var expect = chai.expect;

describe('test de la funcion reservarHorario()', function(){
    let restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
    it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo',function(){
        restaurantTest.reservarHorario("13:00");
        expect(restaurantTest.horarios.indexOf("13:00")).to.equal((-1));
    })
    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual',function(){
        var arrayHorariosAntes = (restaurantTest.horarios);
        restaurantTest.reservarHorario("13:00");
        expect(restaurantTest.horarios).to.eql(arrayHorariosAntes);
    })
    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual',function(){
        var arrayHorariosAntes = (restaurantTest.horarios);
        restaurantTest.reservarHorario();
        expect(restaurantTest.horarios).to.eql(arrayHorariosAntes);
    })
})

describe('test de la funcion obtenerPuntuación()',function(){
    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.',()=>{
        let restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
        expect(restaurantTest.obtenerPuntuacion()).to.equal(7.4)
    })
    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0',()=>{
        let restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [])
        expect(restaurantTest.obtenerPuntuacion()).to.equal(0)
    })
})

describe('test de la funcion calificar()',function(){
    let nuevaCalificacion = 5;
    it('Recibe un numero entero entre 0 y 10',()=>{
        expect(nuevaCalificacion).to.be.a('number').above(0).below(10);
        expect(nuevaCalificacion % 1).to.equal(0);
    })
    it('Se agrega la puntuacion al array de calificaciones',()=>{
        let restaurantTest = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        let cantidadCalificaciones = restaurantTest.calificaciones.length;
        restaurantTest.calificar(nuevaCalificacion);
        expect(restaurantTest.calificaciones.length).to.equal(cantidadCalificaciones+1);
    })
})

describe('test de la funcion buscarRestaurante()',function(){
    it('Devuelve un resultado objeto si pasamos un id válido',()=>{
        expect(listado.buscarRestaurante(1)).to.be.a('Object')
    })
    it('Devuelve un string si pasamos un id inválido',()=>{
        expect(listado.buscarRestaurante(100)).to.be.a('string')
    })
})

describe('test de la funcion obtenerRestaurantes()',function(){
    it('No se modifica con parametros nulos',()=>{
        expect(listado.obtenerRestaurantes(null,null,null).length).to.equal(listado.restaurantes.length)
    });
    it('Devuelve un array filtrado con un parametro ciudad',()=>{
        expect(listado.obtenerRestaurantes("Desayuno",null,null).length).to.equal(4)
    })
    it('Devuelve un array filtrado con un parametro rubro',()=>{
        expect(listado.obtenerRestaurantes(null,"Nueva York",null).length).to.equal(7)
    })
    it('Devuelve un array filtrado con un parametro horario',()=>{
        expect(listado.obtenerRestaurantes(null,null,"11:30").length).to.equal(1)
    })
    it('Devuelve un array vacio con parametros que no existen o vacios',()=>{
        expect(listado.obtenerRestaurantes("","","").length).to.equal(0)
    })
})

var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
var reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")

describe('Test de reserva',()=>{
    it('Calculo de precios base',()=>{
        expect(reserva1.calcularPrecioBase()).to.equal(2800)
        expect(reserva2.calcularPrecioBase()).to.equal(300)
    })
    it('Calculo de precios finales',()=>{
        expect(reserva1.calcularPrecioFinal()).to.equal(2310)
        expect(reserva2.calcularPrecioFinal()).to.equal(100)
    })
    it('horario es un objeto Date',()=>{
        expect(reserva1.horario).to.be.a('Date')
    })
})