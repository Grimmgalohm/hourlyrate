/*
 * 3) Dentro de la función "handleSubmit" sucederá todo el proceso
 * de evaluación, usamos e.preventDefault() para evitar que el
 * formulario intente enviar los datos a otro lado como está
 * programado por definición.
 * Para recabar cada uno de los valores de los inputs utilizamos 
 * líneas como la del ejemplo: 
 * e.target.<nombre_del_input>.value
 */
function handleSubmit(e){
  e.preventDefault();

  var nombre = e.target.name.value;
  var horaslab = e.target.horaslaborales.value;
  var diaslab = e.target.diaslaborales.value;
  var salariomens = e.target.salariomensual.value;
  var diaslib = e.target.diaslibres.value;
  var diasdeinc = e.target.diasincapacidad.value;
  var tiempojunt = e.target.tiempojuntas.value;
  var gastosmens = e.target.gastosmensuales.value;
  var jubi = e.target.jubilacion.value;

  var salariobrutoanual = salariomens * 12;
  var horasposibles = (horaslab * diaslab)*52;
  var horabasica = salariobrutoanual/horasposibles;
  var horasnolaborables = (diaslib * horaslab) + (diaslib * horaslab);
  var tiempoadministrativo = (tiempojunt/100) * (horasposibles - horasnolaborables);
  var gastosfijos = gastosmens * 12;
  var precioextra = horasnolaborables + tiempoadministrativo + gastosfijos;
  var horasefectivas = (horasposibles-horasnolaborables-tiempoadministrativo)*horabasica;
  var rentabilidad = precioextra/horasefectivas;
  var precioxhora = (horabasica + (horabasica*rentabilidad))+(horabasica*(jubi/100));

  document.querySelector(".resultado").innerHTML=precioxhora;
  document.querySelector(".tunombre").innerHTML=nombre;
  document.querySelector(".rentabilidad").innerHTML=rentabilidad;
}


/*
 * 2) Lo que hacemos dentro de la función "initialize" es tomar 
 * el formulario del DOM y asignarlo a una variable para después
 * pasar nuestra función "handleSubmit" como listener del evento
 * submit de este formulario.
 */
function initialize(){
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
}

/* 
 * 1) Al cargar la página manda llamar
 * la función "initialize"
 */
window.onload = (function(){
  initialize();
})();