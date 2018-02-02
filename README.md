# jquery-breadcrumb!


Este plugin utiliza los siguientes componentes
>jquery

>bootstrap


---
## Agregar al proyecto
 
```html

    <script src="js/jquery.breadcrumb.js"></script>
    
 ```

---

## A usarlo
Para asignarlo a un componente, agregar la siguiente línea dentro de un segmento de script
```html

    <script type="text/javascript">
		$(function(){
			$("#breadcrumb").breadcrumb({ page: "index.html", text:"pagina inicio" });
		});
	</script>
```
En algún componente del html, por ejemplo

```HTML
    <div id="breadcrumb"></div>
```


Proporcionándole la página actual en la variable page, y el texto que se desplegará en la variable text.
Esto debe incluirse en las páginas que se agregaran al breadcrumb.


---
