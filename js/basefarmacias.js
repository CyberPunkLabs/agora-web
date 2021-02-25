var cruzIcon = L.icon({
    iconUrl: 'cruz-roja.png',
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [19, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});


  var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		osm = L.tileLayer(osmUrl, {maxZoom: 50, attribution: osmAttrib});
  var map = L.map('map').setView([-32.8970492, -71.246642], 9).addLayer(osm);


///////////////////////////////////
// Comienzo de la base de datos //
//////////////////////////////////
  
  // V Region //

  // My Pets Oquiz (Veterinaria)
L.marker([-33.02646475, -71.5537739959], {icon: cruzIcon}).addTo(map).bindPopup('<b>My Pets Oquiz (Veterinaria)</b><br>Alvarez 646 Local 101<br>322602439');

// Isavet 24 Horas (Veterinaria)
L.marker([-33.0444269, -71.3850104], {icon: cruzIcon}).addTo(map).bindPopup('<b>Isavet 24 Horas (Veterinaria)</b><br>Avenida Valparaíso 1534<br>322950405 - 982893492 ');

// Farmacia Munnich
L.marker([-33.0468573, -71.6174759], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Munnich</b><br>Avenida Pedro Montt 2614<br>322230184');

// Farmacias Liga Contra La Epilepsia Spa.
L.marker([-33.0239904, -71.5532258], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Liga Contra La Epilepsia Spa.</b><br>Arlegui 646 Local 201<br>322970107');

// Farmaceutica Camval Limitada
L.marker([-33.0263713, -71.5432173], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmaceutica Camval Limitada</b><br>Avenida Valparaíso 786<br>322687977');

// Laboratorios Knop
L.marker([-32.7829659, -71.1906084], {icon: cruzIcon}).addTo(map).bindPopup('<b>Laboratorios Knop</b><br>José Joaquín Pérez 247<br>332229081');

// Asociación De Clínicas Veterinarias (Veterinaria)
L.marker([-33.0484525, -71.5620883], {icon: cruzIcon}).addTo(map).bindPopup('<b>Asociación De Clínicas Veterinarias (Veterinaria)</b><br>Variante Agua Santa 587<br>322612045');

// Farmaprecio
L.marker([-33.0429671, -71.6248975], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmaprecio</b><br>Valparaíso, Esmeralda 1132<br>322252799');

// Marcia Veronica Pinto Sanchez 
L.marker([-33.4150413, -71.6959055], {icon: cruzIcon}).addTo(map).bindPopup('<b>Marcia Veronica Pinto Sanchez </b><br>Isidoro Dubournais 1187<br>352474206');

// Farmacias Economicas
L.marker([-32.7848089, -71.5264244], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Economicas</b><br>Piloto Alcayaga 1919<br>322210871');

// Hector Bernardo Gutierrez Rojas
L.marker([-32.4248323, -71.063835], {icon: cruzIcon}).addTo(map).bindPopup('<b>Hector Bernardo Gutierrez Rojas</b><br>Humeres 571<br>332762981');

// Farmacias Jose Figueroa Dorantes E.I.R.L.
L.marker([-33.0251315, -71.551537], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Jose Figueroa Dorantes E.I.R.L.</b><br>Avenida Valparaíso 683<br>322979177');

// Farmacia Italia
L.marker([-32.8970492, -71.246642], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Italia</b><br>Ramón Freire 57<br>332310178');

// Farmacia Novasalud
L.marker([-33.0224293, -71.5659488], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Novasalud</b><br>Libertad 80, Local 7<br>225990020');

// Farmacia Cóndor
L.marker([-32.831655, -70.6085767], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Cóndor</b><br>Esmeralda 443<br>342421616');

// Farmacia Almendral
L.marker([-33.0459178, -71.6044078], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Almendral</b><br>Chacabuco 2797<br>322212199');

// Carla Andrea Gonzalez Godoy (Veterinaria)
L.marker([-32.7243475, -71.4115759], {icon: cruzIcon}).addTo(map).bindPopup('<b>Carla Andrea Gonzalez Godoy (Veterinaria)</b><br> Alcalde Juan Jose Mena 377<br>352471485');

// Farmacia Knop Ltda.
L.marker([-33.0503676, -71.4396632], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Knop Ltda.</b><br>Thompson 1491<br>225698300');

// Farmacia Red Farma
L.marker([-32.7765272, -70.9665828], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Red Farma</b><br>Condell 1205<br>322213547');

// Maria Ines Correa Correa 
L.marker([-32.6891939, -71.2147357], {icon: cruzIcon}).addTo(map).bindPopup('<b>Maria Ines Correa Correa </b><br>Isabel Brown 24<br>332280341');

// Redfarma
L.marker([-33.4150413, -71.6959055], {icon: cruzIcon}).addTo(map).bindPopup('<b>Redfarma</b><br>Isidoro Dubournais 127<br>352475022');

// Farmacias Del Doctor Simi
L.marker([-33.0462852, -71.6212806], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Del Doctor Simi</b><br>Condell 1509<br>322157242');

// Farmacia Antonio
L.marker([-32.6260451, -70.7200602], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Antonio</b><br>Ambrosio Camus 90<br>342501989');

// Farmacia Villanelo
L.marker([-33.023666, -71.556894], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Villanelo</b><br>Villanelo 255<br>322711249');

// Ecovital Farmacia
L.marker([-32.6442224, -71.4328194393], {icon: cruzIcon}).addTo(map).bindPopup('<b>Ecovital Farmacia</b><br>Avenida Del Mar 1789, Local 2<br>323282260');

// Claudia Patricia Pino Flores 
L.marker([-32.894395, -71.2541669], {icon: cruzIcon}).addTo(map).bindPopup('<b>Claudia Patricia Pino Flores </b><br>Los Quillayes 478<br>332314928');

// Farmacias Del Doctor Simi
L.marker([-33.0458207, -71.4430908], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Del Doctor Simi</b><br>Claudio Vicuña 651<br>322368425');

// Teodoro Valerio Medina Mariduena 
L.marker([-32.4499574, -71.2281525], {icon: cruzIcon}).addTo(map).bindPopup('<b>Teodoro Valerio Medina Mariduena </b><br>Diego Portales 706<br>332716843');

// Ecofarmacia 10
L.marker([-32.4492099, -71.2261705], {icon: cruzIcon}).addTo(map).bindPopup('<b>Ecofarmacia 10</b><br>Ortiz De Rozas 498<br>332713253');

// Moises Chahuan Issa Y Compania Limitada 
L.marker([-33.6007230455, -70.7105507], {icon: cruzIcon}).addTo(map).bindPopup('<b>Moises Chahuan Issa Y Compania Limitada </b><br>Carrera 737<br>332221194');

// Farmacia Nueva Cabildo 1
L.marker([-32.4248323, -71.063835], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Nueva Cabildo 1</b><br>Humeres 571<br>332762981');

// Sergio Enrique Lara Sandoval 
L.marker([-32.9921268, -71.5224352], {icon: cruzIcon}).addTo(map).bindPopup('<b>Sergio Enrique Lara Sandoval </b><br>Gomez Carreño 3601<br>322833952');

// Farmacia Veterinaria Valle Central Spa (Veterinaria)
L.marker([-33.065713, -71.4206597], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Veterinaria Valle Central Spa (Veterinaria)</b><br>Marga Marga 2592, Local 4<br>322488219');

// Farmacia Naturista El Bosque
L.marker([-33.0240542, -71.5514042], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Naturista El Bosque</b><br>Arlegui 470, Local 113<br>322711382');

// Centro Naturista La Campana
L.marker([-32.8970492, -71.246642], {icon: cruzIcon}).addTo(map).bindPopup('<b>Centro Naturista La Campana</b><br>Ramón Freire 209<br>332313892');

// Farmacia San Ignacio
L.marker([-32.8799502, -71.2585308], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia San Ignacio</b><br>La Concepción 990<br>332319407');

// Sociedad Farmavida Limitada 
L.marker([-32.6299491, -70.7172614], {icon: cruzIcon}).addTo(map).bindPopup('<b>Sociedad Farmavida Limitada </b><br>Comercio 478, Putaendo<br>342502129');

// Sociedad Farmavida Limitada 
L.marker([-32.8517879, -70.6224327], {icon: cruzIcon}).addTo(map).bindPopup('<b>Sociedad Farmavida Limitada </b><br>Calle Larga 2075<br>342462927');

// Vergara Carrasco Y Otra Gabriela De Lourdes
L.marker([-33.059533, -71.3852737], {icon: cruzIcon}).addTo(map).bindPopup('<b>Vergara Carrasco Y Otra Gabriela De Lourdes</b><br>Condell 9<br>322532867');

// Carla Andrea Gonzalez Godoy (Veterinaria)
L.marker([-33.4150413, -71.6959055], {icon: cruzIcon}).addTo(map).bindPopup('<b>Carla Andrea Gonzalez Godoy (Veterinaria)</b><br>Isidoro Dubournais 785<br>352471485');

// Farmaprecio
L.marker([-33.04961775, -71.4377204774], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmaprecio</b><br>Esmeralda 1132<br>227324959');

// Farmacia Montemar
L.marker([-32.9206228, -71.5077349484], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Montemar</b><br>Borgoño 25180<br>322813051');

// Farmacias Dr. Simi
L.marker([-32.7457523, -70.7211998], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Dr. Simi</b><br>Portus 239<br>342517775');

// Fima Limitada
L.marker([-32.985275, -71.4991656], {icon: cruzIcon}).addTo(map).bindPopup('<b>Fima Limitada</b><br>Camino Internacional 2440 Renaca Alto,  Locales E1-2<br>322672768');

// Farmacia Nueva Cabildo 1 
L.marker([-32.4248323, -71.063835], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Nueva Cabildo 1 </b><br>Humeres 571<br>332762981');


  // RM

  // Farmacia Mendoza
L.marker([-33.4231529,-70.6925735], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Mendoza</b><br>Avenida Carrascal 4360 Quinta Normal<br>(2)27724436 - (2)27739831');

// Farmacias Reunidas
L.marker([-33.4237595,-70.6113739], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Reunidas</b><br>Avenida Nueva Providencia 2058<br>(2)22314342 - (9)98662062 ');

// Clínica Veterinaria Los Robles Oftalmología Veterinaria (Veterinaria)
L.marker([-33.4580383,-70.6335373], {icon: cruzIcon}).addTo(map).bindPopup('<b>Clínica Veterinaria Los Robles Oftalmología Veterinaria (Veterinaria)</b><br>Pedro León Ugalde 1197<br>(2)25440306 - (9)95456645 ');

// Centro Veterinario Bayona (Veterinaria) 
L.marker([-33.4295769,-70.5545731], {icon: cruzIcon}).addTo(map).bindPopup('<b>Centro Veterinario Bayona (Veterinaria) </b><br>Avenida Tomás Moro 1905<br>(2)22125103 - (2)22120478 ');

// Clínica Veterinaria La Rotonda (Veterinaria) 
L.marker([-33.5332947,-70.594223], {icon: cruzIcon}).addTo(map).bindPopup('<b>Clínica Veterinaria La Rotonda (Veterinaria) </b><br>Vicuña Mackenna 8469<br>(2)22814656 - (2)22812934 ');

// Veterinaria California (Veterinaria)
L.marker([-33.4394913,-70.6103516], {icon: cruzIcon}).addTo(map).bindPopup('<b>Veterinaria California (Veterinaria)</b><br>Pedro De Valdivia 1783, Piso, 4, Loc. 189 - 191 Centro Comercial Madrid<br>(2)22258055 - (2)22256554  ');

// Comercial Colbo (Equipos E Instrumentos Médicos)
L.marker([-33.4633217,-70.632103], {icon: cruzIcon}).addTo(map).bindPopup('<b>Comercial Colbo (Equipos E Instrumentos Médicos)</b><br>Calle Paraguay 9122<br>(2)22914727 - (9)93213001  ');

// Veterinaria Y Peluquería Canina Llico (Clínica Veterinaria) 
L.marker([-33.5044594,-70.64563749999999], {icon: cruzIcon}).addTo(map).bindPopup('<b>Veterinaria Y Peluquería Canina Llico (Clínica Veterinaria) </b><br>Calle Llico 745<br>(2)25010845 - (9)88061351 ');

// Urgencias Veterinarias (Clínica Y Peluquería Veterinaria) 
L.marker([-33.5040283,-70.639183], {icon: cruzIcon}).addTo(map).bindPopup('<b>Urgencias Veterinarias (Clínica Y Peluquería Veterinaria) </b><br>Calle Pirámide 514<br>(2)25520751 - (2)24592076  ');

// Clínica Veterinaria San Marcos (Clínica Y Peluquería Veterinaria) 
L.marker([-33.532814,-70.6632156], {icon: cruzIcon}).addTo(map).bindPopup('<b>Clínica Veterinaria San Marcos (Clínica Y Peluquería Veterinaria) </b><br>Gran Avenida José Miguel Carrera 8475<br>(2)25274216 - (9)98202356  ');

// Farmacia Veterinaria Arkanet (Veterinaria) 
L.marker([-33.4606247,-70.5544968], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Veterinaria Arkanet (Veterinaria) </b><br>Leonardo Da Vinci 7193<br>(2)27233225 - (9)98703009  ');

// Veterinaria Infinito (Clínica Y Peluquería Veterinaria) 
L.marker([-33.5224991,-70.5974884], {icon: cruzIcon}).addTo(map).bindPopup('<b>Veterinaria Infinito (Clínica Y Peluquería Veterinaria) </b><br>Avenida Walker Martínez 232, Loc. 7<br>(2)32809865 ');

// Farmacias Brain
L.marker([-33.4569511,-70.6091309], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Brain</b><br>Avenida José Domingo Cañas 2151, Loc. 3<br>(2)32909196 ');

// Farmacias Econofarma
L.marker([-33.5332375,-70.7749863], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Econofarma</b><br>René Olivares 1427, Loc. 6-7<br>(2)32544429 - (2)32111723  ');

// Farmacias Hahnemann
L.marker([-33.4355316,-70.65301509999999], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Hahnemann</b><br>Calle Santo Domingo 922<br>(2)26328961 ');

// Farmaceutica Martinez Y Cia Ltda 
L.marker([-33.4216359,-70.6087067], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmaceutica Martinez Y Cia Ltda </b><br>Ricardo Lyon 62<br>(2)22342256 ');

// Farmacia Arauco
L.marker([-33.4720192,-70.6477127], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Arauco</b><br>Arauco 1055-1059<br>(2)25517782 ');

// Farmagestión Ltda.
L.marker([-33.5165944,-70.6584432], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmagestión Ltda.</b><br>José Miguel Carrera 6494<br>(2)23621700 ');

// Farmacias Damyfar
L.marker([-33.4535408,-70.64995569999999], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Damyfar</b><br>San Diego 656<br>(2)26725933 ');

// Roxana Del Carmen Castro Castro 
L.marker([-33.5074493,-70.78358039999999], {icon: cruzIcon}).addTo(map).bindPopup('<b>Roxana Del Carmen Castro Castro </b><br>Rinconada 1900<br>(2)25329277 ');

// Farmacias Galenica
L.marker([-33.4385719,-70.6484299], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacias Galenica</b><br>San Antonio 380<br>(2)25947900 ');

// Jorge Alfredo Garcia Acevedo 
L.marker([-33.451465,-70.6494623], {icon: cruzIcon}).addTo(map).bindPopup('<b>Jorge Alfredo Garcia Acevedo </b><br>San Diego 516<br>(2)26628606 ');

// Farmacia Farmavida
L.marker([-33.505806,-70.62377169999999], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Farmavida</b><br>Vecinal 5351<br>(2)25536383 ');

// Medicaltek
L.marker([-33.4663124,-70.64449309999999], {icon: cruzIcon}).addTo(map).bindPopup('<b>Medicaltek</b><br>San Francisco 1559<br>(2)29633240');

// Joana Roxana Contreras Hermosilla 
L.marker([-33.5529514,-70.7937383], {icon: cruzIcon}).addTo(map).bindPopup('<b>Joana Roxana Contreras Hermosilla </b><br>A Melipilla 18500<br>(2)25379015 ');

// Peluqueria Canina Le Fifi (Veterinaria) 
L.marker([-33.4356387,-70.6541754], {icon: cruzIcon}).addTo(map).bindPopup('<b>Peluqueria Canina Le Fifi (Veterinaria) </b><br>Morandé 683, Local 18<br>(2)26997461 ');

// Jose Romulo Venegas Fuentes 
L.marker([-33.4295663,-70.736103], {icon: cruzIcon}).addTo(map).bindPopup('<b>Jose Romulo Venegas Fuentes </b><br>José Joaquin Pérez 7274<br>(2)26691844 ');

// Farmacia Giroz Ltda.
L.marker([-33.4375137,-70.6486125], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Giroz Ltda.</b><br>San Antonio 478<br>(2)22771030 ');

// Farmacia Canaima
L.marker([-33.5535472,-70.66055039999999], {icon: cruzIcon}).addTo(map).bindPopup('<b>Farmacia Canaima</b><br>Julio Covarrubias 10004<br>(2)25489499 ');

