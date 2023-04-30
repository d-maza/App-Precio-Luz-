
// Obtiene la serie de precios completa
fetch ('https://api.preciodelaluz.org/v1/prices/all?zone=PCB')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

// Obtiene el precio medio de la serie
  fetch ('https://api.preciodelaluz.org/v1/prices/avg?zone=PCB')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

// Obtiene el precio más alto de la serie
  fetch ('https://api.preciodelaluz.org/v1/prices/max?zone=PCB')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

// Obtiene el precio más bajo de la serie
  fetch ('https://api.preciodelaluz.org/v1/prices/min?zone=PCB')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))

  // Obtiene el precio en el momento de la consulta
  fetch ('https://api.preciodelaluz.org/v1/prices/now?zone=PCB')
  .then(response => response.json())
  .then(json => console.log(json))

  // Obtiene los (n) precios más económicos de la serie (en este caso las dos franjas mas economicas)
  fetch ('https://api.preciodelaluz.org/v1/prices/cheapests?zone=PCB&n=2')
  .then(response => response.json())
  .then(json => console.log(json))

  // https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=2023-04-30T00:00&end_date=2023-04-30T23:59&time_trunc=hour