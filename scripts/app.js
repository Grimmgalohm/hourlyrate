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
  console.log(e.target.name.value);
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