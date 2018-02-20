/**
 * jQuery breadcrum dinamic plugin prototipe v1.0
 * @homepage ....
 * ymanzon <ymanzon@gmail.com>
 */
(function($){
	$.fn.extend({
		breadcrumb: function(options){

		//se agregan valores por default cuando se carga la pagina de inicio
			defaults = {
				page:'index.html',
				text:'',
				icon: null
			}

			var options = $.extend({}, defaults, options);

			this.each(function(){

				var mapa = [];
				//se verifica si hay almacenamiento en el cliente
				if (typeof (Storage) != "undefined") {
					//se verifica si existe la variable de almacenamiento
					if (sessionStorage["mapa"]) {
						//se obtiene la variable del almacenamiento
						mapa = JSON.parse( sessionStorage["mapa"] );

						var index = exist(mapa, options.text, options.page, options.icon);

						if(index == -1){
							mapa.push( { title:options.text, href:options.page, icon:options.icon } );
						}
						else
						{
							mapa.splice( index + 1 );
						}
					
					} else {
						mapa[0] = { title:options.text, href:options.page, icon:options.icon };
					}

					//se actualiza la sesion del cliente
					sessionStorage["mapa"] = JSON.stringify(mapa);

					 var pageMap = "";
					 //obtiene el indice del ultimo elemento almacenado
					 var lastIndex = mapa.length - 1;

					 //recorre todos los elementos de la lista
					 $.each(mapa, function(index, item){

						var strLink  = ""
						//si es el ultimo elemento, lo activa, de lo contrario lo despliega como un acceso
						if(index == lastIndex){
							if(item.icon != null){
							//strLink ="<li class='breadcrumb-item active'><p><span class='fa "+item.icon+"'>" + item.title + "</p></li>";
							strLink ="<li class='breadcrumb-item active'><i class='fa "+item.icon+"'></i> " + item.title + "</li>";
							}
							else{
								strLink ="<li class='breadcrumb-item active'>" + item.title + "</li>";
							}

						}else{
							if(item.icon != null){
								//strLink ="<li class='breadcrumb-item'><a href='" + item.href + "'><span class='fa "+item.icon+"'>" + item.title + "</a></li>";
								strLink ="<li class='breadcrumb-item'><a href='" + item.href + "'><i class='fa "+item.icon+"'></i> " + item.title + "</a></li>";
							}else{
								strLink ="<li class='breadcrumb-item'><a href='" + item.href + "'>" + item.title + "</a></li>";
							}
							
						}

						pageMap = pageMap + strLink;
					 });
					 var strbreadcrup = "<ol class='breadcrumb'>"+pageMap+"</ol>";
					 //lo despliega
					 $(this).html(strbreadcrup);

						}
					//});
	});
}})}(jQuery));

function exist(map, text, link){
	return map.findIndex(x=>x.href==link);
}

