

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
	 var caja = document.createElement("div");
	 var labeltip = document.createElement("p");
	 var labeldescripcion = document.createElement('p');
	 var labelcodigo = document.createElement('p');
	 var labelprecio = document.createElement('p');
	 var labelimagen = document.createElement('img');

	 labeltip.innerHTML = tip;
	 labeldescripcion.innerHTML = descripcion;
	 labelcodigo.innerHTML = codigo;
     labelprecio.innerHTML = precio;
     labelimagen.src = 'imagen' ;


     caja.classList.add('caja');
	 labeltip.classList.add('presentacion');
	 labeldescripcion.classList.add('presentacion');
	 labelcodigo.classList.add('presentacion');
	 labelprecio.classList.add('presentacion');
	 labelimagen.classList.add('presentacion');

	 contenedor.appendChild(caja);

	 caja.appendChild(labeltip);
	 caja.appendChild(labeldescripcion);
	 caja.appendChild(labelcodigo);
	 caja.appendChild(labelprecio);
	 caja.appendChild(labelimagen);
}

