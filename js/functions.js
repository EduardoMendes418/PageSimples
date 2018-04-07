 
/*CRIANDO  MAPA NO JAVASCRIPT*/
 window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center:new google.maps.LatLng(-23.045477,-46.973223),
			scrollwheel:false,
			zoom:12,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		map = new google.maps.Map(document.getElementById('mapa'), mapProp);
	}

/*LOCALIZAÇAO DO MAPA*/
	function addMarker(lat,lng,icon,content,click){
		var latLng = {'lat':lat,'lng':lng};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

/*FUNÇAO USUARIO CLIACA NO MAPA*/
		if(click == true){
			google.maps.event.addListener(marker,'click',function(){
			infoWindow.open(map,marker);
		});
		}else{
			infoWindow.open(map,marker);
		}
	}

	initialize();

/*ADD COR NO MAPA*/
	var conteudo = '<p style="color:black;font-size:14px;padding:10px 0;">Meu endereço</p>';
	addMarker(-23.045477,-46.973223,'',conteudo,true);
}