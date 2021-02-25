var vacaIcon = L.icon({
    iconUrl: 'carne.png',
    iconSize:     [25, 30], // size of the icon
    iconAnchor:   [19, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});

var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		osm = L.tileLayer(osmUrl, {maxZoom: 50, attribution: osmAttrib});
	var map = L.map('map').setView([-32.8491616, -71.1034439], 12).addLayer(osm);


///////////////////////////////////
// Comienzo de la base de datos //
//////////////////////////////////

// Adolfo Baez Sanchez
L.marker([-32.808231629, -70.9075864609], {icon: vacaIcon}).addTo(map).bindPopup('Adolfo Baez Sanchez<br>Panquehue');

// Adolfo Toribio Larrain Ruiz Tagle
L.marker([-33.3508404442, -71.4684247438], {icon: vacaIcon}).addTo(map).bindPopup('Adolfo Toribio Larrain Ruiz Tagle<br>Casablanca');

// Adulio Aguilera Baes
L.marker([-32.4286318482, -71.0093421842], {icon: vacaIcon}).addTo(map).bindPopup('Adulio Aguilera Baes<br>Cabildo');

// Agr. Florterra Ltda
L.marker([-32.3785756049, -71.3557889867], {icon: vacaIcon}).addTo(map).bindPopup('Agr. Florterra Ltda<br>Longotoma');

// Agr. Rio Negro Ltda
L.marker([-32.8959389474, -71.0881549229], {icon: vacaIcon}).addTo(map).bindPopup('Agr. Rio Negro Ltda<br>Ocoa');

// Agr. Sn Juan  Ltda
L.marker([-32.4166667, -70.95], {icon: vacaIcon}).addTo(map).bindPopup('Agr. Sn Juan  Ltda<br>Región de Valparaíso');

// Agricola  Patricio Rojas Ossa  E.I.R.L.
L.marker([-33.1876790777, -71.5192284648], {icon: vacaIcon}).addTo(map).bindPopup('Agricola  Patricio Rojas Ossa  E.I.R.L.<br>casabalanca');

// Agricola Casablanca Spa
L.marker([-33.4087589709, -71.5107686178], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Casablanca Spa<br>(empty)');

// Agricola Estero La Patagua Ltda
L.marker([-32.5813344933, -71.3093070574], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Estero La Patagua Ltda<br>Catapilco');

// Agricola Fusion Spa
L.marker([-33.5038909619, -71.0688815479], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Fusion Spa<br>Maria Pinto');

// Agricola Ganadera Y Forestal Silva Y Cia Ltda
L.marker([-32.3789380363, -71.3297822881], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Ganadera Y Forestal Silva Y Cia Ltda<br>Longotoma');

// Agricola Julio Massu Ltda
L.marker([-32.760303, -70.9745179], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Julio Massu Ltda<br>Santiago');

// Agrícola Las Represas Ltda
L.marker([-32.6157537878, -71.2934283801], {icon: vacaIcon}).addTo(map).bindPopup('Agrícola Las Represas Ltda<br>Catapilco');

// Agricola Manantiales Ltda
L.marker([-32.5561986139, -71.3281039782], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Manantiales Ltda<br>Catapilco');

// Agricola Ovalle Til Til Ltda
L.marker([-33.0933670118, -70.6613265936], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Ovalle Til Til Ltda<br>QUILAPILUM');

// Agrícola Santa Magdalena Ltda
L.marker([-33.2482668, -71.5014939], {icon: vacaIcon}).addTo(map).bindPopup('Agrícola Santa Magdalena Ltda<br>(empty)');

// Agricola Y Comercial Gu Ltda
L.marker([-33.3576469739, -71.3814903319], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Y Comercial Gu Ltda<br>(empty)');

// Agricola Y Ganadera Alfonso Ovalle Aldunate Eirl
L.marker([-33.0933984713, -70.6613346402], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Y Ganadera Alfonso Ovalle Aldunate Eirl<br>(empty)');

// Agricola Y Ganadera Chilicauquen Alto Ltda.
L.marker([-32.89035, -71.2392], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Y Ganadera Chilicauquen Alto Ltda.<br>(empty)');

// Agricola Y Ganadera Javier Salgado Eirl
L.marker([-32.691653848, -70.7729107279], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Y Ganadera Javier Salgado Eirl<br>San Felipe');

// Agricola Y Ganadera Pasos Del Agua Limitada
L.marker([-33.2229806861, -70.7356851879], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Y Ganadera Pasos Del Agua Limitada<br>Colina');

// Agrofrutillar
L.marker([-32.2247565706, -71.1307360132], {icon: vacaIcon}).addTo(map).bindPopup('Agrofrutillar<br>Palquico');

// Albert James Cussen Mackenna
L.marker([-32.7457688, -71.3838499], {icon: vacaIcon}).addTo(map).bindPopup('Albert James Cussen Mackenna<br>Puchuncaví');

// Alejandro Barco Barco
L.marker([-32.45, -71.1900092], {icon: vacaIcon}).addTo(map).bindPopup('Alejandro Barco Barco<br>Valle Hermoso');

// Alejandro Osorio T.
L.marker([-32.2762864313, -71.4502884618], {icon: vacaIcon}).addTo(map).bindPopup('Alejandro Osorio T.<br>Guaquen');

// Alfonso Ovalle Lecaros
L.marker([-33.2732587677, -71.2800129716], {icon: vacaIcon}).addTo(map).bindPopup('Alfonso Ovalle Lecaros<br>Casablanca');

// Amador Bazaes L
L.marker([-32.4973948, -71.2591218], {icon: vacaIcon}).addTo(map).bindPopup('Amador Bazaes L<br>Región de Valparaíso');

// Andrés Cadiz Correa
L.marker([-32.8508844, -70.9441937], {icon: vacaIcon}).addTo(map).bindPopup('Andrés Cadiz Correa<br>(empty)');

// Aravena Guzmán Alvarado H Y Otros.
L.marker([-32.4837995, -71.1920073], {icon: vacaIcon}).addTo(map).bindPopup('Aravena Guzmán Alvarado H Y Otros.<br>La Higuera');

// Bernardo Salgado Olave
L.marker([-32.96389907, -70.8134361267], {icon: vacaIcon}).addTo(map).bindPopup('Bernardo Salgado Olave<br>Región de Valparaíso');

// Boris Gonzales Cabrera
L.marker([-31.9004191523, -71.4774702394], {icon: vacaIcon}).addTo(map).bindPopup('Boris Gonzales Cabrera<br>Los Vilos');

// Carlos Órdenes Paña
L.marker([-32.434299, -70.9781894], {icon: vacaIcon}).addTo(map).bindPopup('Carlos Órdenes Paña<br>San Lorenzo');

// Christian Vera Oyarzun
L.marker([-32.8477436, -71.1249656], {icon: vacaIcon}).addTo(map).bindPopup('Christian Vera Oyarzun<br>Espinal');

// Claudio López Tapia
L.marker([-32.4075755316, -71.030118655], {icon: vacaIcon}).addTo(map).bindPopup('Claudio López Tapia<br>Los Molinos');

// Claudio Veas Fernández
L.marker([-32.1263588048, -71.3744076524], {icon: vacaIcon}).addTo(map).bindPopup('Claudio Veas Fernández<br>Guanguali');

// Comercial Arbahec Ltda.
L.marker([-18.470763921, -70.266593551], {icon: vacaIcon}).addTo(map).bindPopup('Comercial Arbahec Ltda.<br>Arica');

// Comercializadora Jl
L.marker([-32.6255233773, -71.1833364797], {icon: vacaIcon}).addTo(map).bindPopup('Comercializadora Jl<br>El Melón');

// Comunidad Fundo Santa Isabel De Dumaño
L.marker([-32.8065076736, -71.4424904704], {icon: vacaIcon}).addTo(map).bindPopup('Comunidad Fundo Santa Isabel De Dumaño<br>(empty)');

// Cristian Araya Prado
L.marker([-32.2365613949, -70.7777641075], {icon: vacaIcon}).addTo(map).bindPopup('Cristian Araya Prado<br>Chincolco');

// Cristian Olivares Olivares
L.marker([-32.4435753, -71.2234108], {icon: vacaIcon}).addTo(map).bindPopup('Cristian Olivares Olivares<br>La Ligua');

// Cristian Segura Tapia
L.marker([-32.35, -70.7872963], {icon: vacaIcon}).addTo(map).bindPopup('Cristian Segura Tapia<br>Alicahue');

// Cristian Silva Miquelea
L.marker([-32.3120085608, -71.2721040654], {icon: vacaIcon}).addTo(map).bindPopup('Cristian Silva Miquelea<br>Longotoma');

// Daniel Bugueño Vásquez
L.marker([-32.6071434, -71.33797], {icon: vacaIcon}).addTo(map).bindPopup('Daniel Bugueño Vásquez<br>Las Terneras');

// Daniel Tapia Bustamante
L.marker([-32.3298515916, -71.1821535039], {icon: vacaIcon}).addTo(map).bindPopup('Daniel Tapia Bustamante<br>Longotoma');

// Domingo Alfaro Farias
L.marker([-31.7794398, -70.9684247], {icon: vacaIcon}).addTo(map).bindPopup('Domingo Alfaro Farias<br>Salamanca');

// Doris Zuñiga Pérez
L.marker([-32.4893958067, -71.2611479558], {icon: vacaIcon}).addTo(map).bindPopup('Doris Zuñiga Pérez<br>Los Andes');

// Edacio Maturana Tapia
L.marker([-32.2512799509, -71.1412623125], {icon: vacaIcon}).addTo(map).bindPopup('Edacio Maturana Tapia<br>Región de Valparaíso');

// Eduardo Andres Olivares Gonzalez
L.marker([-32.1324816269, -71.5045793275], {icon: vacaIcon}).addTo(map).bindPopup('Eduardo Andres Olivares Gonzalez<br>Los Vilos');

// Eduardo Fernandez Gallardo
L.marker([-32.1233603728, -71.3726481233], {icon: vacaIcon}).addTo(map).bindPopup('Eduardo Fernandez Gallardo<br>Guanguali');

// Eduardo Fernández Gallardo
L.marker([-32.8513465, -71.1269682], {icon: vacaIcon}).addTo(map).bindPopup('Eduardo Fernández Gallardo<br>Hijuelas');

// Edulio Aguilera Baez
L.marker([-32.441019307, -70.9417076017], {icon: vacaIcon}).addTo(map).bindPopup('Edulio Aguilera Baez<br>Cabildo');

// Egidio Paz Diaz
L.marker([-32.2116742893, -70.8130834358], {icon: vacaIcon}).addTo(map).bindPopup('Egidio Paz Diaz<br>Chincolco');

// Eladio Araya Contrera
L.marker([-31.8589163615, -71.3456244306], {icon: vacaIcon}).addTo(map).bindPopup('Eladio Araya Contrera<br>Cavilolen');

// Eliana Cataldo Huerta
L.marker([-32.1234148906, -71.3752659593], {icon: vacaIcon}).addTo(map).bindPopup('Eliana Cataldo Huerta<br>Guanguali');

// Elix Astudillo O
L.marker([-32.3713266702, -71.3517549443], {icon: vacaIcon}).addTo(map).bindPopup('Elix Astudillo O<br>Longotoma');

// Emelina Tapia Gallardo
L.marker([-31.9347877997, -71.1327117555], {icon: vacaIcon}).addTo(map).bindPopup('Emelina Tapia Gallardo<br>Caimanes');

// Enelia Olivares Olivares
L.marker([-32.2792533218, -71.3604588597], {icon: vacaIcon}).addTo(map).bindPopup('Enelia Olivares Olivares<br>La Ligua');

// Eugenio Arancibia Torres
L.marker([-32.2752704682, -71.455052065], {icon: vacaIcon}).addTo(map).bindPopup('Eugenio Arancibia Torres<br>Guaquen');

// Fanny Salinas Meneses
L.marker([-31.9354433598, -71.1310809725], {icon: vacaIcon}).addTo(map).bindPopup('Fanny Salinas Meneses<br>Caimanes');

// Fernando Cruz Navarro
L.marker([-32.4420301952, -71.2150552936], {icon: vacaIcon}).addTo(map).bindPopup('Fernando Cruz Navarro<br>La Ligua');

// Fernando Merino Ossa
L.marker([-33.0191127985, -71.2696288049], {icon: vacaIcon}).addTo(map).bindPopup('Fernando Merino Ossa<br>(empty)');

// Forestal Agr. Y Ganadera Inh Ltda
L.marker([-33.5159675, -70.7320868], {icon: vacaIcon}).addTo(map).bindPopup('Forestal Agr. Y Ganadera Inh Ltda<br>Maipú');

// Franco Aguilera Totora.
L.marker([-32.7841148, -70.9243845], {icon: vacaIcon}).addTo(map).bindPopup('Franco Aguilera Totora.<br>(empty)');

// Fundo El Pangue
L.marker([-33.3344537, -71.380917], {icon: vacaIcon}).addTo(map).bindPopup('Fundo El Pangue<br>(empty)');

// Gabriel Astaburuaga Peigneguy
L.marker([-32.7655340309, -71.2883077587], {icon: vacaIcon}).addTo(map).bindPopup('Gabriel Astaburuaga Peigneguy<br>Hijuelas');

// Gabrile Diaz Astudillo
L.marker([-32.3890855272, -71.3311555791], {icon: vacaIcon}).addTo(map).bindPopup('Gabrile Diaz Astudillo<br>Longotoma');

// Ganadera Juan Pradena
L.marker([-32.7510437648, -71.4247968896], {icon: vacaIcon}).addTo(map).bindPopup('Ganadera Juan Pradena<br>Casas Viejas de Longotoma');

// Gaston Olivares
L.marker([-32.3658861, -71.1560287], {icon: vacaIcon}).addTo(map).bindPopup('Gaston Olivares<br>Región de Valparaíso');

// Gaston Olivares Brito
L.marker([-32.5385976053, -70.8343453727], {icon: vacaIcon}).addTo(map).bindPopup('Gaston Olivares Brito<br>La Petaca');

// Geraldo Prieto
L.marker([-32.487616452, -71.1759931409], {icon: vacaIcon}).addTo(map).bindPopup('Geraldo Prieto<br>La Ligua');

// German Del Carmen Astudillo Reinoso
L.marker([-32.4278915512, -71.325096616], {icon: vacaIcon}).addTo(map).bindPopup('German Del Carmen Astudillo Reinoso<br>La Ligua');

// Giovanni Moraga Ramirez
L.marker([-33.1191736347, -70.8566101909], {icon: vacaIcon}).addTo(map).bindPopup('Giovanni Moraga Ramirez<br>(empty)');

// Gonzalo Bertelsen Diaz
L.marker([-32.7192131107, -71.3627170434], {icon: vacaIcon}).addTo(map).bindPopup('Gonzalo Bertelsen Diaz<br>Región de Valparaíso');

// Héctor Astudillo Molina
L.marker([-32.2292007554, -70.9559163864], {icon: vacaIcon}).addTo(map).bindPopup('Héctor Astudillo Molina<br>Petorca');

// Hector Cortes Bugueño
L.marker([-31.6240788, -71.1722631], {icon: vacaIcon}).addTo(map).bindPopup('Hector Cortes Bugueño<br>Illapel');

// Hermosilla Bustamante
L.marker([-32.2501451787, -70.946260434], {icon: vacaIcon}).addTo(map).bindPopup('Hermosilla Bustamante<br>Petorca');

// Hernan Perez Leiva
L.marker([-32.3412453, -71.32386], {icon: vacaIcon}).addTo(map).bindPopup('Hernan Perez Leiva<br>Casas Viejas de Longotoma');

// Hernan Tapia Acosta
L.marker([-32.306639, -71.0732726], {icon: vacaIcon}).addTo(map).bindPopup('Hernan Tapia Acosta<br>Santa Julia');

// Humberto Barraza Aguilera
L.marker([-32.2444104441, -70.9127006348], {icon: vacaIcon}).addTo(map).bindPopup('Humberto Barraza Aguilera<br>Petorca');

// Inversiones Geache Ltda
L.marker([-33.4196242, -70.6102925], {icon: vacaIcon}).addTo(map).bindPopup('Inversiones Geache Ltda<br>Providencia');

// Isabel Berios Maturana.
L.marker([-32.4356001, -71.3178524], {icon: vacaIcon}).addTo(map).bindPopup('Isabel Berios Maturana.<br>Pullalli');

// Jaime Aravena Maturana
L.marker([-32.3412453, -71.32386], {icon: vacaIcon}).addTo(map).bindPopup('Jaime Aravena Maturana<br>Casas Viejas de Longotoma');

// Javier Eugenin Urzua
L.marker([-32.89581, -71.0980759], {icon: vacaIcon}).addTo(map).bindPopup('Javier Eugenin Urzua<br>(empty)');

// John Martínez L
L.marker([-32.4433858396, -71.3185395112], {icon: vacaIcon}).addTo(map).bindPopup('John Martínez L<br>La Ligua');

// Jorge Antonio Solar Cabrera
L.marker([-33.0085213591, -71.1818577055], {icon: vacaIcon}).addTo(map).bindPopup('Jorge Antonio Solar Cabrera<br>(empty)');

// Jorge Luis Osorio Reinoso
L.marker([-32.2884771, -71.4668967], {icon: vacaIcon}).addTo(map).bindPopup('Jorge Luis Osorio Reinoso<br>Guaquen');

// Jorge Marchan Perez
L.marker([-32.2265457, -70.7379514], {icon: vacaIcon}).addTo(map).bindPopup('Jorge Marchan Perez<br>Trapiche');

// Jorge Reinoso Ibacache
L.marker([-32.2862277547, -71.4541937581], {icon: vacaIcon}).addTo(map).bindPopup('Jorge Reinoso Ibacache<br>Guaquen');

// José Arancibia Torres
L.marker([-32.274835052, -71.4475847951], {icon: vacaIcon}).addTo(map).bindPopup('José Arancibia Torres<br>Guaquen');

// José Gajardo Pinilla
L.marker([-32.4419092969, -71.2174026518], {icon: vacaIcon}).addTo(map).bindPopup('José Gajardo Pinilla<br>La Ligua');

// Jose Manuel Cornejo Lagos
L.marker([-32.73531, -71.4966383], {icon: vacaIcon}).addTo(map).bindPopup('Jose Manuel Cornejo Lagos<br>Puchuncavi');

// Jose Poblete Vargas
L.marker([-33.0498722, -71.1195436], {icon: vacaIcon}).addTo(map).bindPopup('Jose Poblete Vargas<br>(empty)');

// Jose Vasquez Rojas
L.marker([-33.3039253, -71.556414], {icon: vacaIcon}).addTo(map).bindPopup('Jose Vasquez Rojas<br>(empty)');

// Juan Carlos Palacios Nuñez
L.marker([-32.4561540091, -71.183812923], {icon: vacaIcon}).addTo(map).bindPopup('Juan Carlos Palacios Nuñez<br>La Ligua');

// Juan Fuentes Rodríguez
L.marker([-32.8294409, -70.9833889], {icon: vacaIcon}).addTo(map).bindPopup('Juan Fuentes Rodríguez<br>(empty)');

// Juan Reinoso Olmos
L.marker([-32.4324850979, -71.299398802], {icon: vacaIcon}).addTo(map).bindPopup('Juan Reinoso Olmos<br>Pullalli');

// Juan Romero Ruz
L.marker([-33.0416783, -71.1746169], {icon: vacaIcon}).addTo(map).bindPopup('Juan Romero Ruz<br>(empty)');

// Juan Ruiz-Tagle Irarrazaval
L.marker([-32.5965934171, -71.368101079], {icon: vacaIcon}).addTo(map).bindPopup('Juan Ruiz-Tagle Irarrazaval<br>Catapilco');

// Julio Enrique Ibacache Osses
L.marker([-32.4371183, -71.2138069], {icon: vacaIcon}).addTo(map).bindPopup('Julio Enrique Ibacache Osses<br>Región de Valparaíso');

// Julio Monzon Torres
L.marker([-32.5782855, -70.8952333], {icon: vacaIcon}).addTo(map).bindPopup('Julio Monzon Torres<br>Región de Valparaíso');

// Julio Valencia Valencia
L.marker([-32.4226206498, -70.8481306828], {icon: vacaIcon}).addTo(map).bindPopup('Julio Valencia Valencia<br>Los Andes');

// Karin Ibacache Avaló
L.marker([-32.4395460548, -71.2203423529], {icon: vacaIcon}).addTo(map).bindPopup('Karin Ibacache Avaló<br>La Ligua');

// Karin Ibacache Avalos
L.marker([-32.4429777155, -71.2223593741], {icon: vacaIcon}).addTo(map).bindPopup('Karin Ibacache Avalos<br>La Ligua');

// Leonardo Ibacache R
L.marker([-32.2763589996, -71.4577128163], {icon: vacaIcon}).addTo(map).bindPopup('Leonardo Ibacache R<br>Guaquen');

// Leticia Liberon Lopez
L.marker([-32.9480820866, -70.8051820425], {icon: vacaIcon}).addTo(map).bindPopup('Leticia Liberon Lopez<br>Tiltil');

// Leticia Liberon López.
L.marker([-32.8855716189, -70.7040507778], {icon: vacaIcon}).addTo(map).bindPopup('Leticia Liberon López.<br>Región de Valparaíso');

// Lorena Aballay Bazaes
L.marker([-32.7783165, -70.96331], {icon: vacaIcon}).addTo(map).bindPopup('Lorena Aballay Bazaes<br>Catapilco');

// Luis Aballay V
L.marker([-32.2039963, -71.1502843], {icon: vacaIcon}).addTo(map).bindPopup('Luis Aballay V<br>Las Palmas');

// Luis Alberto Gonzalez Olivares
L.marker([-32.3538281, -71.4230198], {icon: vacaIcon}).addTo(map).bindPopup('Luis Alberto Gonzalez Olivares<br>Los Hornos');

// Luis Carvajal Cortes
L.marker([-31.1148795546, -71.1605970657], {icon: vacaIcon}).addTo(map).bindPopup('Luis Carvajal Cortes<br>(empty)');

// Luis González Olivares
L.marker([-32.276232005, -71.4487220517], {icon: vacaIcon}).addTo(map).bindPopup('Luis González Olivares<br>Guaquen');

// Mamerto Tapia Osorio
L.marker([-32.2730007, -71.4690802], {icon: vacaIcon}).addTo(map).bindPopup('Mamerto Tapia Osorio<br>Guaquen');

// Manuel Castillo L
L.marker([-32.4091417, -71.0371513273], {icon: vacaIcon}).addTo(map).bindPopup('Manuel Castillo L<br>Cabildo');

// Manuel Miranda Merry
L.marker([-32.7876699, -70.937492], {icon: vacaIcon}).addTo(map).bindPopup('Manuel Miranda Merry<br>(empty)');

// Manuel Prado Anativa
L.marker([-32.4204106602, -71.0508658263], {icon: vacaIcon}).addTo(map).bindPopup('Manuel Prado Anativa<br>Cabildo');

// Manuel Valencia
L.marker([-32.3815475, -71.3661745], {icon: vacaIcon}).addTo(map).bindPopup('Manuel Valencia<br>Longotoma');

// Mariano Carrasco Bonilla
L.marker([-32.4931325688, -71.4065016283], {icon: vacaIcon}).addTo(map).bindPopup('Mariano Carrasco Bonilla<br>Papudo');

// Mario Alberto Huerta Morales
L.marker([-32.1302111911, -71.3744934831], {icon: vacaIcon}).addTo(map).bindPopup('Mario Alberto Huerta Morales<br>Guanguali');

// Matias Riquelme Rebusnante
L.marker([-32.4403641636, -71.1923101611], {icon: vacaIcon}).addTo(map).bindPopup('Matias Riquelme Rebusnante<br>La Ligua');

// Multifruit Spa
L.marker([-33.1503911, -71.2900458], {icon: vacaIcon}).addTo(map).bindPopup('Multifruit Spa<br>(empty)');

// Nahur Campos Villalobo
L.marker([-32.3049704706, -71.0737875841], {icon: vacaIcon}).addTo(map).bindPopup('Nahur Campos Villalobo<br>Santa Julia');

// Nelson Atenas Solis
L.marker([-32.2390383389, -70.8987102325], {icon: vacaIcon}).addTo(map).bindPopup('Nelson Atenas Solis<br>Petorca');

// Nelson Bustamante Ossandon
L.marker([-31.9791915957, -71.1472795809], {icon: vacaIcon}).addTo(map).bindPopup('Nelson Bustamante Ossandon<br>Los Vilos');

// Nelson Godoy Castillo
L.marker([-32.3083598, -71.2558595], {icon: vacaIcon}).addTo(map).bindPopup('Nelson Godoy Castillo<br>Maiten Largo');

// Nemesio Yañez Diaz
L.marker([-31.9127628, -71.5014205], {icon: vacaIcon}).addTo(map).bindPopup('Nemesio Yañez Diaz<br>Los Vilos');

// Nibaldo Caroca Lizana
L.marker([-33.3242569, -71.36861], {icon: vacaIcon}).addTo(map).bindPopup('Nibaldo Caroca Lizana<br>(empty)');

// Orlando Olivares Borquez
L.marker([-32.3815475, -71.3661745], {icon: vacaIcon}).addTo(map).bindPopup('Orlando Olivares Borquez<br>Longotoma');

// Oscar Aranda Vasquez
L.marker([-33.3088108, -71.5847423], {icon: vacaIcon}).addTo(map).bindPopup('Oscar Aranda Vasquez<br>Casablanca');

// Pamela Muñoz Rosas
L.marker([-32.5, -71.2667], {icon: vacaIcon}).addTo(map).bindPopup('Pamela Muñoz Rosas<br>Casas de la Quebradilla');

// Pascual Varas Donoso
L.marker([-32.2216953, -70.8347986], {icon: vacaIcon}).addTo(map).bindPopup('Pascual Varas Donoso<br>Chincolco');

// Patricio Cortés Castro
L.marker([-31.8502408143, -71.3562674359], {icon: vacaIcon}).addTo(map).bindPopup('Patricio Cortés Castro<br>Cavilolen');

// Patricio Cortés Honires
L.marker([-32.8031097, -70.8755649], {icon: vacaIcon}).addTo(map).bindPopup('Patricio Cortés Honires<br>(empty)');

// Patricio Toro Acosta
L.marker([-32.2179006275, -70.8674496375], {icon: vacaIcon}).addTo(map).bindPopup('Patricio Toro Acosta<br>Los Comunes');

// Pedro Castillo Hidalgo
L.marker([-32.2189264225, -71.128650647], {icon: vacaIcon}).addTo(map).bindPopup('Pedro Castillo Hidalgo<br>Frutillar Bajo');

// Pedro Delgado Alvarado
L.marker([-32.4940146398, -70.9658725614], {icon: vacaIcon}).addTo(map).bindPopup('Pedro Delgado Alvarado<br>La Mora');

// Pedro Sazo Contreras
L.marker([-32.7367386, -71.2329929], {icon: vacaIcon}).addTo(map).bindPopup('Pedro Sazo Contreras<br>(empty)');

// Pedro Valencia Saavedra
L.marker([-32.4914932671, -70.965053549], {icon: vacaIcon}).addTo(map).bindPopup('Pedro Valencia Saavedra<br>Cabildo');

// Quilapilun Spa
L.marker([-33.0960378068, -70.6570860267], {icon: vacaIcon}).addTo(map).bindPopup('Quilapilun Spa<br>(empty)');

// Raimundo Prado Donoso
L.marker([-32.2177741665, -70.8188770073], {icon: vacaIcon}).addTo(map).bindPopup('Raimundo Prado Donoso<br>Chincolco');

// Raul Bruna Donoso
L.marker([-32.3322474, -71.1879249], {icon: vacaIcon}).addTo(map).bindPopup('Raul Bruna Donoso<br>Santa Marta');

// Ricardo Del Carmen  Figueroa Riquelme
L.marker([-32.8433844, -70.5240358], {icon: vacaIcon}).addTo(map).bindPopup('Ricardo Del Carmen  Figueroa Riquelme<br>Región de Valparaíso');

// Rolando Fuenzalida G.
L.marker([-32.2767944085, -71.4488293401], {icon: vacaIcon}).addTo(map).bindPopup('Rolando Fuenzalida G.<br>Guaquen');

// Schmidt Hnos
L.marker([-32.8478581239, -70.9821083256], {icon: vacaIcon}).addTo(map).bindPopup('Schmidt Hnos<br>Llay Llay');

// Schmidt Hnos Ltda
L.marker([-32.7725043488, -70.8433765529], {icon: vacaIcon}).addTo(map).bindPopup('Schmidt Hnos Ltda<br>Panquehue');

// Sergio Leiva Tapia
L.marker([-32.2511431712, -71.2556450381], {icon: vacaIcon}).addTo(map).bindPopup('Sergio Leiva Tapia<br>Trapiche');

// Servicios Agrícola Perinetti Ltda
L.marker([-32.7923375833, -70.9120120478], {icon: vacaIcon}).addTo(map).bindPopup('Servicios Agrícola Perinetti Ltda<br>Catemu');

// Soc. Agricola San Carlos De Catemu Ltda
L.marker([-32.7788981411, -70.9445418788], {icon: vacaIcon}).addTo(map).bindPopup('Soc. Agricola San Carlos De Catemu Ltda<br>Catemu');

// Soc. Santana Ltda
L.marker([-32.4820003071, -71.2517789589], {icon: vacaIcon}).addTo(map).bindPopup('Soc. Santana Ltda<br>La Ligua');

// Sociedad Agricola La Señora S.A.
L.marker([-33.3500158343, -71.4683337216], {icon: vacaIcon}).addTo(map).bindPopup('Sociedad Agricola La Señora S.A.<br>(empty)');

// Sociedad Agricola Minera Ltda
L.marker([-33.2350944938, -70.6589716196], {icon: vacaIcon}).addTo(map).bindPopup('Sociedad Agricola Minera Ltda<br>(empty)');

// Sociedad Agricola Y Ganadera Juan Espinoza E Hijos
L.marker([-32.7720904204, -70.915761294], {icon: vacaIcon}).addTo(map).bindPopup('Sociedad Agricola Y Ganadera Juan Espinoza E Hijos<br>Catemu');

// Sociedad Agricola Y Ganadera Pailam Limitada
L.marker([-32.6475836, -71.2275189], {icon: vacaIcon}).addTo(map).bindPopup('Sociedad Agricola Y Ganadera Pailam Limitada<br>El Melón');

// Sucecion Felipe Montalva
L.marker([-31.930107693, -71.1438482874], {icon: vacaIcon}).addTo(map).bindPopup('Sucecion Felipe Montalva<br>Caimanes');

// Sucesion Juan Oscar Fredes
L.marker([-32.420662408, -71.0592098142], {icon: vacaIcon}).addTo(map).bindPopup('Sucesion Juan Oscar Fredes<br>Cabildo');

// Venancio Olmos Olivares
L.marker([-32.76487, -71.18939], {icon: vacaIcon}).addTo(map).bindPopup('Venancio Olmos Olivares<br>La ballena');

// Vicente Astudillo Reinoso
L.marker([-32.2760966456, -71.4504094212], {icon: vacaIcon}).addTo(map).bindPopup('Vicente Astudillo Reinoso<br>La Ligua');

// Victor Astudillo Torres
L.marker([-32.2762864313, -71.4569403401], {icon: vacaIcon}).addTo(map).bindPopup('Victor Astudillo Torres<br>Guaquen');

// Victor Brito Pérez
L.marker([-32.4258064, -71.0661621], {icon: vacaIcon}).addTo(map).bindPopup('Victor Brito Pérez<br>Cabildo');

// Victor Tapia Castillo.
L.marker([-32.25, -70.9458312805], {icon: vacaIcon}).addTo(map).bindPopup('Victor Tapia Castillo.<br>Petorca');

// Victor Valencia Mondaca
L.marker([-32.4356001, -71.3178524], {icon: vacaIcon}).addTo(map).bindPopup('Victor Valencia Mondaca<br>Pullalli');

// Washington Arenas Barraza
L.marker([-32.8261619, -71.0305636], {icon: vacaIcon}).addTo(map).bindPopup('Washington Arenas Barraza<br>(empty)');

// Agricola Izaro Ltda
L.marker([-33.2225343582, -71.3132121865], {icon: vacaIcon}).addTo(map).bindPopup('Agricola Izaro Ltda<br>Casablanca');



