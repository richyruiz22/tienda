

var productos = []


function registro(articulo) {
		var tip = document.getElementById('tipo').value;
		var descripcion = document.getElementById('descripcion').value;
		var codigo = document.getElementById('codigo').value;
		var precio = document.getElementById('precio').value;
		var imagen = document.getElementById('archivo').value;


		productos.push(tip,descripcion,codigo,precio,imagen,"<br>");
		document.getElementById('tipo').value = "";
		document.getElementById('descripcion').value = "";
		document.getElementById('codigo').value = "";
		document.getElementById('precio').value = "";
		document.getElementById('archivo').value = "";

	var contenedor = document.getElementById('articulo');

	 var labeltip = document.createElement("p");
	 var labeldescripcion = document.createElement('p');
	 var labelcodigo = document.createElement('p');
	 var labelprecio = document.createElement('p');
	 var labelimagen = document.createElement('img');

	 labeltip.classList.add('entradas');
	 labeldescripcion.classList.add('entradas');
	 labelcodigo.classList.add('entradas');
	 labelprecio.classList.add('entradas');
	 labelimagen.classList.add('entradas');

	 contenedor.appendChild(labeltip);
}

