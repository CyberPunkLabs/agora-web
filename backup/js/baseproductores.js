
var cruzIcon = L.icon({
    iconUrl: 'cruz-roja.png',
    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [19, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});

var lechugaIcon = L.icon({
    iconUrl: 'lechuga.png',
    iconSize:     [30, 40], // size of the icon
    iconAnchor:   [19, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});

var vacaIcon = L.icon({
    iconUrl: 'carne.png',
    iconSize:     [25, 30], // size of the icon
    iconAnchor:   [19, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -10] // point from which the popup should open relative to the iconAnchor
});


var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		osm = L.tileLayer(osmUrl, {maxZoom: 50, attribution: osmAttrib});
var map = L.map('map').setView([-35.0338593, -73.1401901], 5).addLayer(osm);

map.locate({setView: true, maxZoom: 16});

///////////////////////////////////
// Comienzo de la base de datos //
//////////////////////////////////

// Adolfo Baez Sanchez
L.marker([-32.4532208, -71.2499938], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Adolfo Baez Sanchez</b><br>Diego Portales, 1500<br>9-93201054');

// Adolfo Barco Lopez
L.marker([-32.6862063496, -71.1743242574], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Adolfo Barco Lopez</b><br>Nogales, Región De Valparaíso, Chile<br>84729103');

// Adolfo Romero Miranda
L.marker([-32.8453072827, -70.9709288784], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Adolfo Romero Miranda</b><br>Longitudinal Norte, Sector: Montenegro-Los Ermitaños<br>nan');

// Agricola El Sauce E.I.R.L
L.marker([-32.9286823099, -71.2884297435], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Agricola El Sauce E.I.R.L</b><br>Chacra La Primavera<br>nan');

// Agricola Rivarola Ltda
L.marker([-32.9904233, -71.2587864], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Agricola Rivarola Ltda</b><br>Eastman 561<br>09-3377858');

// Alejandro Alberto Ponce Martinez
L.marker([-32.8308278617, -71.01794109], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Alejandro Alberto Ponce Martinez</b><br>Hijuelas, Región De Valparaíso, Chile<br>50113434 ');

// Alejandro Ponce Martinez
L.marker([-32.8289668, -71.0254372], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Alejandro Ponce Martinez</b><br>Unnamed Road,<br>50113434 ');

// Alfredo Manzur Cabrera
L.marker([-32.76965, -71.16032], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Alfredo Manzur Cabrera</b><br>Unnamed Road<br>09-0932620');

// Andrea Silva Silva
L.marker([-32.7773313652, -70.8932748008], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Andrea Silva Silva</b><br>E-645<br>63263118 ');

// Angel Herrera Arevalo
L.marker([-32.7997333359, -71.0536847078], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Angel Herrera Arevalo</b><br>Unnamed Road<br>nan');

// Anibal Navia Vasquez
L.marker([-32.768578158, -70.9548415614], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Anibal Navia Vasquez</b><br>E-615 374<br>nan');

// Antonio Edmundo Canto Sepulveda
L.marker([-32.8721280074, -70.933850021], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Antonio Edmundo Canto Sepulveda</b><br>E-434<br>nan');

// Arturo Pedro  Gatica Zamora
L.marker([-32.7351975637, -71.1844500717], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Arturo Pedro  Gatica Zamora</b><br>F-320<br>9-3377220');

// Augusto Manuel Azua Vega
L.marker([-32.8258332918, -71.0416278061], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Augusto Manuel Azua Vega</b><br>F-301-E<br>nan');

// Benjamin Rodriguez Bustamante
L.marker([-32.7954993908, -71.0580883946], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Benjamin Rodriguez Bustamante</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Bernardo Salas Rendic
L.marker([-32.7712356233, -70.882671925], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Bernardo Salas Rendic</b><br>Catemu, Región De Valparaíso, Chile<br>nan');

// Berta Urbina Huerta
L.marker([-32.6889173216, -71.1970406021], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Berta Urbina Huerta</b><br>F-121<br>982041983jorge ');

// Braulio Humberto Reinoso Latoja
L.marker([-32.7967632, -71.1686531], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Braulio Humberto Reinoso Latoja</b><br>Petorquita 688<br>nan');

// Carlos Carvacho Velasquez
L.marker([-32.9237391396, -71.2638282362], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Carlos Carvacho Velasquez</b><br>Parcela Nº13 La Capilla San Pedro<br>nan');

// Carlos Nicolas Cerda Mendoza
L.marker([-32.8208745531, -71.0141645397], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Carlos Nicolas Cerda Mendoza</b><br>Hijuelas, Región De Valparaíso, Chile<br>332442094');

// Carlos Vasquez Puebla
L.marker([-32.8151713733, -71.156939026], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Carlos Vasquez Puebla</b><br>Hijuelas, Región De Valparaíso, Chile<br>984285565benito');

// Cecilia Leonor Reinoso Osses
L.marker([-32.8749607, -70.6486465], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Cecilia Leonor Reinoso Osses</b><br>E-57 2464<br>nan');

// Cesar Bernal Olmedo
L.marker([-32.7421079753, -71.1638131309], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Cesar Bernal Olmedo</b><br>Quillota, Región De Valparaíso, Chile<br>nan');

// Claudia Daniela Gomez Zamora
L.marker([-32.8171237417, -71.0265241589], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Claudia Daniela Gomez Zamora</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 6750 1361 ');

// Claudio  Vera Olivares
L.marker([-32.8119892, -71.0470376], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Claudio  Vera Olivares</b><br>Parcela 7 La Sombra<br>33-2272548');

// Claudio Araya Cabrera
L.marker([-32.8029428, -71.14366], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Claudio Araya Cabrera</b><br>F-301-E 1851<br>nan');

// Claudio Rodrigo Contreras Aguirre
L.marker([-33.3556597809, -71.3146188378], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Claudio Rodrigo Contreras Aguirre</b><br>Parcela 36-A La Vinilla Norte, Casablanca<br>8-572-8201 ');

// Comercializarora Jl Spa
L.marker([-32.7980018, -71.1437211], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Comercializarora Jl Spa</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 8838 5546 ');

// Cooperativa Agr. Chacareros De El Melon De Nogales
L.marker([-32.6889874928, -71.2094075513], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Cooperativa Agr. Chacareros De El Melon De Nogales</b><br>Panamericana Norte<br>nan');

// Dimas Del Carmen  Cuevas Salinas
L.marker([-32.8552736444, -71.1173330273], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Dimas Del Carmen  Cuevas Salinas</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 9120 2486');

// Edwards Gaete Ponce
L.marker([-32.679524028, -71.2289125753], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Edwards Gaete Ponce</b><br>Nogales, Región De Valparaíso, Chile<br>9 5769 4540 ');

// Efrain Nolberto Lizama Vargas
L.marker([-32.8458230746, -71.0805497133], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Efrain Nolberto Lizama Vargas</b><br>F-300<br>952337337 ');

// Eladio Martinez Osorio
L.marker([-32.8304492, -71.0807666], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Eladio Martinez Osorio</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 7476 0168');

// Eleuterio Paras Herrera
L.marker([-33.2846366, -71.5862724], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Eleuterio Paras Herrera</b><br>F-814<br>nan');

// Elias Valencia Tapia
L.marker([-32.8018255635, -71.0561737978], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Elias Valencia Tapia</b><br>F-313<br>nan');

// Elizabeth Ivon Ortiz Solis
L.marker([-32.7980018, -71.1437211], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Elizabeth Ivon Ortiz Solis</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 6479 0450 ');

// Eugenio Rafael Reyes Arriagada
L.marker([-32.8201532555, -71.0736452069], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Eugenio Rafael Reyes Arriagada</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Federico Antonio Bustamante Camus
L.marker([-32.820609491, -71.0285597417], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Federico Antonio Bustamante Camus</b><br>F-311<br>nan');

// Felipe Araya Salinas
L.marker([-32.8153517084, -71.1217055284], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Felipe Araya Salinas</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Felipe David Bustamante Lazcano
L.marker([-32.8272217193, -71.0914979901], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Felipe David Bustamante Lazcano</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Fernando Rodrigo  Guerra Mendez
L.marker([-32.7378869576, -71.1689172711], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Fernando Rodrigo  Guerra Mendez</b><br>Nogales, Región De Valparaíso, Chile<br>944302142');

// Fidel Palacios Rocha
L.marker([-33.2188499, -70.6621747], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Fidel Palacios Rocha</b><br>Santa Filomena 32<br>9 8472 4083 ');

// Florentino Cardenas Contreras
L.marker([-32.8243367, -71.0778509106], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Florentino Cardenas Contreras</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 7911 5801');

// Guilberto Montenegro
L.marker([-32.8411225687, -71.1178454574], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Guilberto Montenegro</b><br>Hijuelas, Región De Valparaíso, Chile<br>54178815');

// Guillermo Correa Maldonado
L.marker([-32.8976526422, -71.2317843441], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Guillermo Correa Maldonado</b><br>Parcela 9 La Tetera<br>8-9526432');

// Hector David Beas Vargas
L.marker([-32.79891, -71.1464112], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Hector David Beas Vargas</b><br>Manuel Rodríguez 1425<br>09-4868682');

// Hector Vicencio Matinez
L.marker([-32.9785931, -71.2875374], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Hector Vicencio Matinez</b><br>Los Aromos 19<br>9 5665 9254 ');

// Heriberto Enrique Perez Zamorano
L.marker([-32.8287363169, -71.0261808361], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Heriberto Enrique Perez Zamorano</b><br>Hijuelas, Región De Valparaíso, Chile<br>994909094client');

// Hernan  Segundo  Maturana Valdivia
L.marker([-32.772751175, -71.1827360119], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Hernan  Segundo  Maturana Valdivia</b><br>Calera, Región De Valparaíso, Chile<br>982350677');

// Hernan Santibañez Vera
L.marker([-32.8304492, -71.0807666], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Hernan Santibañez Vera</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Hilda Sabat Yarur
L.marker([-32.783486, -70.832452], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Hilda Sabat Yarur</b><br>Antofagasta S/N<br>nan');

// Hugo Enrique Gonzalez Cabrera
L.marker([-32.672019186, -71.19870052], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Hugo Enrique Gonzalez Cabrera</b><br>Nogales, Región De Valparaíso, Chile<br>nan');

// Humberto Edmundo Estay Bustamante
L.marker([-32.7980018, -71.1437211], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Humberto Edmundo Estay Bustamante</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Humberto Santibañez Apablaza
L.marker([-32.8232547936, -71.079395863], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Humberto Santibañez Apablaza</b><br>Hijuelas, Región De Valparaíso, Chile<br>9-85544551');

// Isabel Perez
L.marker([-32.8754463, -71.18757], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Isabel Perez</b><br>Unnamed Road<br>nan');

// Jaime Ivan Fierro Vidal
L.marker([-32.8587164017, -71.1164721664], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jaime Ivan Fierro Vidal</b><br>F-304<br>nan');

// Javier Bustamante
L.marker([-32.8254702, -71.0230608], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Javier Bustamante</b><br>F-301-E, 9225<br>nan');

// Javier Eduardo Castillo Contreras
L.marker([-32.8558745, -71.0862033], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Javier Eduardo Castillo Contreras</b><br>Unnamed Road<br>84602306');

// Javier Matias Bustamante Lazcano
L.marker([-32.8238318119, -71.016310307], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Javier Matias Bustamante Lazcano</b><br>Hijuelas, Región De Valparaíso, Chile<br>8-8037793');

// Jeronimo Tapia Delgado
L.marker([-32.8304492, -71.0807666], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jeronimo Tapia Delgado</b><br>Unnamed Road<br>nan');

// Joel Arancibia Maturana
L.marker([-32.8250752906, -71.0725067371], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Joel Arancibia Maturana</b><br>F-301-E<br>nan');

// Jorge Carulla Perez
L.marker([-32.7179199695, -71.1867020396], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jorge Carulla Perez</b><br>Nogales, Región De Valparaíso, Chile<br>nan');

// Jorge Del Carmen Perez Zamorano
L.marker([-32.8338388167, -71.020464332], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jorge Del Carmen Perez Zamorano</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Jorge Enrique Brito Fernandez
L.marker([-32.7835476477, -71.0697647417], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jorge Enrique Brito Fernandez</b><br>F-313<br>nan');

// Jose  Lindor Lopez Lopez
L.marker([-33.3920816, -70.6139342], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jose  Lindor Lopez Lopez</b><br>Del Valle<br>83043860 ');

// José Apablaza Apablaza
L.marker([-32.8573924, -71.0880987], {icon: lechugaIcon}).addTo(map).bindPopup('<b>José Apablaza Apablaza</b><br>Unnamed Road,<br>nan');

// Jose Bustamante Solis
L.marker([-32.8229482274, -71.0519274887], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jose Bustamante Solis</b><br>F-301-E<br>nan');

// Jose Francisco Maturana Correa
L.marker([-32.8263562233, -71.0748468365], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jose Francisco Maturana Correa</b><br>Hijuelas, Región De Valparaíso, Chile<br>9-0909411');

// Jose Humberto Salfate Jil
L.marker([-32.7105710631, -71.2338304551], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jose Humberto Salfate Jil</b><br>Nogales, Región De Valparaíso, Chile<br>92975506 ');

// José Salfate Jil
L.marker([-32.7188693, -71.2304752], {icon: lechugaIcon}).addTo(map).bindPopup('<b>José Salfate Jil</b><br>Unnamed Road,<br>92975506 ');

// Josue Salas Mitchell
L.marker([-32.7958883, -71.1600783], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Josue Salas Mitchell</b><br>Panamericana Norte, 600<br>996192654');

// Juan Antonio Herrera Milla
L.marker([-32.8304492, -71.0807666], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Antonio Herrera Milla</b><br>Purehue, Hijuelas, Región De Valparaíso, Chile<br>nan');

// Juan Bautista Maturana Correa
L.marker([-32.7993447952, -71.1466240386], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Bautista Maturana Correa</b><br>Calle Nueva<br>nan');

// Juan Eugenio Mena Benavides
L.marker([-32.7980018, -71.1437211], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Eugenio Mena Benavides</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Juan Felipe Duran Mena
L.marker([-32.8318916221, -71.1013659652], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Felipe Duran Mena</b><br>F-301-E<br>nan');

// Juan Jacinto Ahumada Duran
L.marker([-32.8304492, -71.0807666], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Jacinto Ahumada Duran</b><br>Purehue, Hijuelas, Región De Valparaíso, Chile<br>nan');

// Juan Luis Gonzalez Osorio
L.marker([-32.8180434028, -71.0467776474], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Luis Gonzalez Osorio</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Juan Ossandon Saavedra
L.marker([-32.7614833319, -71.1877996755], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Ossandon Saavedra</b><br>Nogales, Región De Valparaíso, Chile<br>9 4429 3441');

// Juan Ramon Alvarado Tello
L.marker([-32.8197745483, -71.0412844833], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Ramon Alvarado Tello</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 78116430 clie');

// Julio Cifuentes Oyarzun
L.marker([-32.8180434028, -71.0443743881], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Julio Cifuentes Oyarzun</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 8278 5809');

// Leonardo Marcelo Mesias Perez
L.marker([-32.7676158268, -70.8546498438], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Leonardo Marcelo Mesias Perez</b><br>E-635<br>nan');

// Leonel Francisco Jamett Aranda
L.marker([-32.8244261537, -71.071991753], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Leonel Francisco Jamett Aranda</b><br>F-301-E<br>nan');

// Luis Alberto Ortiz Cataldo
L.marker([-32.8304492, -71.0807666], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Alberto Ortiz Cataldo</b><br>Purehue, Hijuelas, Región De Valparaíso, Chile<br>33 2 272962');

// Luis Cristian Silva Bafalluy
L.marker([-32.6000687898, -71.3778519134], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Cristian Silva Bafalluy</b><br>Unnamed Road<br>997444272');

// Luis Eduardo Carmona Zenteno
L.marker([-32.7813062303, -71.157267044], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Eduardo Carmona Zenteno</b><br>Manuel Rodríguez 86<br>958720600 ');

// Luis Jamett Abarca
L.marker([-32.8256258, -71.0596187], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Jamett Abarca</b><br>F 301 E<br>nan');

// Luis Marcelo Rodriguez Villarroel
L.marker([-32.7417014042, -71.1664359243], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Marcelo Rodriguez Villarroel</b><br>Nogales, Región De Valparaíso, Chile<br>nan');

// Luis Martinez Osorio
L.marker([-32.8243907713, -71.0979327377], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Martinez Osorio</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Luis Nicolas Bustamante Camus
L.marker([-32.8217796625, -71.0364174346], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Nicolas Bustamante Camus</b><br>Unnamed Road<br>nan');

// Luis Osorio Aguilera
L.marker([-32.8143418273, -71.0602936708], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Osorio Aguilera</b><br>Hijuelas, Región De Valparaíso, Chile<br>981756765');

// Luisa Hernandez Avalos
L.marker([-32.7402309773, -71.1671326426], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luisa Hernandez Avalos</b><br>Nogales, Región De Valparaíso, Chile<br>nan');

// Luz  Adriana Cabrera Bravo
L.marker([-32.8164697776, -71.1286148988], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luz  Adriana Cabrera Bravo</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 9873 2690');

// Marcela Beatriz Lopez Gomez
L.marker([-32.8351224754, -71.09941716], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marcela Beatriz Lopez Gomez</b><br>F-301-E<br>nan');

// Marcelino Bustamante
L.marker([-32.8254702, -71.0230608], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marcelino Bustamante</b><br>F-301-E, 9225<br>9 8887 1192');

// Maria Ines Marin Puelma
L.marker([-32.8307616, -71.0939531], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Maria Ines Marin Puelma</b><br>Catemu, Región De Valparaíso, Chile<br>65741685');

// Maria Isabel Vasquez Herrera
L.marker([-32.8123657, -71.1401832], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Maria Isabel Vasquez Herrera</b><br>F-301-E 2982<br>984285565');

// Maribel Duran Zamora
L.marker([-32.713544477, -71.1816198659], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Maribel Duran Zamora</b><br>Nogales, Región De Valparaíso, Chile<br>nan');

// Mario Osses Vergara Y Otro
L.marker([-32.8272757889, -71.1587008651], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Mario Osses Vergara Y Otro</b><br>F-300<br>97971340');

// Maximo Gustavo Jimenez Rojas
L.marker([-33.4775986456, -71.1036630988], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Maximo Gustavo Jimenez Rojas</b><br>Parcela 23 Santa Emilia, Maria Pinto<br>974378383');

// Michael Humberto Bustamante Gomez
L.marker([-32.6884096, -71.2108023], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Michael Humberto Bustamante Gomez</b><br>El Melón, Nogales, Región De Valparaíso, Chile<br>9 7415 4575');

// Miguel Angel Silva Osorio
L.marker([-32.8477436, -71.1249656], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Miguel Angel Silva Osorio</b><br>F-300<br>nan');

// Miguel Ortiz Carvajal
L.marker([-32.822058, -71.0938452], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Miguel Ortiz Carvajal</b><br>F-301-E,<br>994995236');

// Miguel Rodrigo Arnau Saavedra
L.marker([-32.9078779438, -71.2639975071], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Miguel Rodrigo Arnau Saavedra</b><br>San Francisco Paradero 3, Quillota<br>9-92780102 ');

// Miguel Saavedra Riveros
L.marker([-32.8304492, -71.0807666], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Miguel Saavedra Riveros</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 93145085');

// Miriam Escobarc Espinoza
L.marker([-32.8304492, -71.0807666], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Miriam Escobarc Espinoza</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 6212 5610 ');

// Nehemias Santiago Cabello Carrasco
L.marker([-32.8376627, -70.968872], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Nehemias Santiago Cabello Carrasco</b><br>Morandé 15<br>991646282');

// Octavio Francisco Jamett Abarca
L.marker([-32.826936, -71.0346459], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Octavio Francisco Jamett Abarca</b><br>F-301-E<br>971777197');

// Octavio Jemett Abarca
L.marker([-32.8237536, -71.0486749], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Octavio Jemett Abarca</b><br>F-313,<br>971777197');

// Omar Olivares Vera
L.marker([-32.7788963, -71.16432], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Omar Olivares Vera</b><br>F-303, 7<br>7-6599625');

// Patricio Antonio Beiza Bastias
L.marker([-32.821563276, -71.0716938476], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Patricio Antonio Beiza Bastias</b><br>Unnamed Road<br>nan');

// Pedro Antonio Muñoz Escobar
L.marker([-33.0396435, -71.2446104], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pedro Antonio Muñoz Escobar</b><br>Parcela 19 B, Los Leones Limache<br>nan');

// Pedro Del Transito Olivares Brito
L.marker([-32.8201206862, -71.0725521545], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pedro Del Transito Olivares Brito</b><br>Unnamed Road<br>986036558');

// Pedro Hernan Henriquez Lobos
L.marker([-32.8209862429, -71.0799335937], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pedro Hernan Henriquez Lobos</b><br>Unnamed Road<br>nan');

// Pedro Juan Olivares Bustamante
L.marker([-32.7382875379, -71.1710857848], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pedro Juan Olivares Bustamante</b><br>Unnamed Road<br>nan');

// Pedro Juan Osses Vergara
L.marker([-32.8323376295, -71.103209015], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pedro Juan Osses Vergara</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Rafael Patricio Vial Urrejola
L.marker([-32.4413566642, -71.2557148437], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Rafael Patricio Vial Urrejola</b><br>La Ligua, Región De Valparaíso, Chile<br>09 2221131');

// Ramon Santibañez Zamora
L.marker([-32.82150566, -71.0673770126], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Ramon Santibañez Zamora</b><br>F-313<br>97690328');

// Roberto Bernal Rojas
L.marker([-32.7383834885, -71.1603338552], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Roberto Bernal Rojas</b><br>Nogales, Región De Valparaíso, Chile<br>nan');

// Roberto Del Carmen Aguilera
L.marker([-32.670252543, -71.2025856475], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Roberto Del Carmen Aguilera</b><br>Unnamed Road<br>nan');

// Rodolfo Olmos Salinas
L.marker([-32.8304492, -71.0807666], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Rodolfo Olmos Salinas</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 8220 2506 ');

// Rodrigo Alejandro Perez Llanca
L.marker([-32.8123603, -71.1402113], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Rodrigo Alejandro Perez Llanca</b><br>F-301-E 2982<br>nan');

// Romelio Carvajal
L.marker([-32.9166886, -71.4061082], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Romelio Carvajal</b><br>F-360,<br>nan');

// Rosa Del Carmen Romero Valencia
L.marker([-32.8267564055, -71.034100006], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Rosa Del Carmen Romero Valencia</b><br>F-301-E<br>nan');

// Rosalia Maturana Maturana
L.marker([-32.8304492, -71.0807666], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Rosalia Maturana Maturana</b><br>Purehue, Hijuelas, Región De Valparaíso, Chile<br>9 6505 2380 ');

// Saturnino Bustamante Villarroel
L.marker([-32.824015625, -71.0716938476], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Saturnino Bustamante Villarroel</b><br>Unnamed Road<br>nan');

// Segundo Calizario González
L.marker([-32.8636018, -70.9670509], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Segundo Calizario González</b><br>Santa Rosa,<br>nan');

// Segundo Figueroa Riquelme
L.marker([-32.8304492, -71.0807666], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Segundo Figueroa Riquelme</b><br>Purehue, Hijuelas, Región De Valparaíso, Chile<br>nan');

// Sergio Aballay Santana
L.marker([-32.7169811963, -71.2294028071], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sergio Aballay Santana</b><br>Nogales, Región De Valparaíso, Chile<br>83566837 ');

// Sergio Aballay Santana
L.marker([-32.7188693, -71.2304752], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sergio Aballay Santana</b><br>Unnamed Road,<br>83566837 ');

// Sergio Bustamante Lazcano
L.marker([-32.7923740754, -70.9904274904], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sergio Bustamante Lazcano</b><br>F-301-E<br>nan');

// Sergio Rojas Leiva
L.marker([-32.6988131623, -71.1644249405], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sergio Rojas Leiva</b><br>Nogales, Región De Valparaíso, Chile<br>nan');

// Soc Agroavicola Meneses Ltda
L.marker([-32.8374302181, -71.100790451], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Soc Agroavicola Meneses Ltda</b><br>F-301-E<br>nan');

// Soc. Agric. Manzur Hmnos. Ltda.
L.marker([-32.7305621832, -71.174347351], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Soc. Agric. Manzur Hmnos. Ltda.</b><br>Unnamed Road<br>990932620Robert');

// Sociedad Agricola Jamett Hnos Ltda
L.marker([-32.8268711, -71.0336639], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sociedad Agricola Jamett Hnos Ltda</b><br>Parcela 13 Lote 1<br>7-6147068');

// Sociedad Agrícola Los Bellotos Ltda
L.marker([-33.0468869, -71.2453697], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sociedad Agrícola Los Bellotos Ltda</b><br>Avenida Jose Tomás Urmeneta, 998<br>97331086');

// Sociedad Agricola San Eugenio Ltda
L.marker([-32.6884096, -71.2108023], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sociedad Agricola San Eugenio Ltda</b><br>El Melón, Nogales, Región De Valparaíso, Chile<br>nan');

// Sociedad Agricola Segundo Y Severino
L.marker([-33.2081356, -70.678369], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sociedad Agricola Segundo Y Severino</b><br>María Ester Fuenzalida 116<br>nan');

// Suc. Juan Ponce Gaete
L.marker([-32.8297412659, -71.0182366334], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Suc. Juan Ponce Gaete</b><br>Hijuelas, Región De Valparaíso, Chile<br>nan');

// Susana Vasquez Herrera
L.marker([-32.8133273, -71.1416925], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Susana Vasquez Herrera</b><br>Parcela 56<br>nan');

// Tomas Swett Astaburuaga
L.marker([-32.8210861723, -71.0386643373], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Tomas Swett Astaburuaga</b><br>Hijuelas, Región De Valparaíso, Chile<br>033-272566 ');

// Uberlinda Sandoval Saavedra
L.marker([-32.7356884279, -71.1712574462], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Uberlinda Sandoval Saavedra</b><br>Unnamed Road<br>nan');

// Ulises Ahumada Duran
L.marker([-32.7474501722, -71.1614678171], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Ulises Ahumada Duran</b><br>Nogales, Región De Valparaíso, Chile<br>nan');

// Victor Alejandro Sandoval Sandoval
L.marker([-32.8242598046, -71.0372052156], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Victor Alejandro Sandoval Sandoval</b><br>Hijuelas, Región De Valparaíso, Chile<br>9 7341 2563 ');

// Victor Francisco Olivares Alvear
L.marker([-32.7607846, -71.1794981], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Victor Francisco Olivares Alvear</b><br>Parcela 299 La Peña<br>9 7728 4185');

// Yerko Salas Herrera
L.marker([-32.7904383, -71.1499989], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Yerko Salas Herrera</b><br>Manuel Rodríguez 396<br>nan');

// Zunilda Ines Bustamante Solis
L.marker([-32.7976854, -71.1467957], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Zunilda Ines Bustamante Solis</b><br>Manuel Rodríguez<br>nan');

// Agricola El Molino Ltda
L.marker([-32.8997384, -71.2670925], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Agricola El Molino Ltda</b><br>Camino Troncal Paradero 3 San Pedro<br>332310006');

// Lorenzo  Del Transito  Perez   Perez
L.marker([-32.741872864, -71.1671332987], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Lorenzo  Del Transito  Perez   Perez</b><br>Unnamed Road<br>933262104');

// Manuel Antonio Escobar Nuñez
L.marker([-33.3161211, -70.8531893], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Manuel Antonio Escobar Nuñez</b><br>Callejon Rio De Janeiro Nº97, Lampa<br>954185286');

// Pamela Vivanco Astudillo
L.marker([-32.4475023, -71.317699], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pamela Vivanco Astudillo</b><br>E-39 150<br>974928179');

// Nolberto Brito Cena
L.marker([-32.4353145, -71.214494], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Nolberto Brito Cena</b><br>Calle Miraflores 1715<br>977168239');

// Marto Morales Roldan
L.marker([-32.7826312388, -71.1657159656], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marto Morales Roldan</b><br>El Olivo 3<br>981649157');

// Cristian Marcelo Ordenes Saavedra
L.marker([-32.4528083, -71.2405168], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Cristian Marcelo Ordenes Saavedra</b><br>Diego Portales 1705<br>981716506');

// Agr. Reyes Y Cia Ltda
L.marker([0.0, 0.0], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Agr. Reyes Y Cia Ltda</b><br>Sitio 13 Los Leones<br>982329744');

// Marco Antonio  Llanten Espinoza
L.marker([-32.8907167, -71.2126157], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marco Antonio  Llanten Espinoza</b><br>Parcela 23 Las Pataguas, La Palma, Quillota<br>983523328');

// Patricio Rezzio Jimenez
L.marker([-32.722916642, -71.4110673987], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Patricio Rezzio Jimenez</b><br>Alcalde Juan José Mena 11<br>985245827');

// Prod. Y May. Frutas Y Verduras Juan Hernán Tapia Vega
L.marker([-32.7342205515, -71.2160132197], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Prod. Y May. Frutas Y Verduras Juan Hernán Tapia Vega</b><br>Juan Rusque 440<br>988047558');

// Jaime Arancibia Godoy
L.marker([-32.7502576645, -71.3566431259], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jaime Arancibia Godoy</b><br>F-220<br>988270429');

// Teodoro Adrian Quinteros Lorca
L.marker([-33.3059749, -70.8459985], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Teodoro Adrian Quinteros Lorca</b><br>Isla Azore Nº 1641 Cerro Navia<br>988293828');

// Rodrigo Del Solar Icaza
L.marker([-32.6813301102, -71.2097723317], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Rodrigo Del Solar Icaza</b><br>Panamericana Norte<br>988385546');

// Genaro Osses Vergara
L.marker([-32.7510234572, -71.1624977854], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Genaro Osses Vergara</b><br>F-317<br>988752518');

// Reinaldo Osses Vergara
L.marker([-32.6899717077, -71.2121648622], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Reinaldo Osses Vergara</b><br>Los Alamos<br>988752518');

// Lopez Y Lopez Ltda
L.marker([-33.2945129593, -70.8545529366], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Lopez Y Lopez Ltda</b><br>Miraflores 6783, Renca<br>989034426');

// Alberto Saavedra Palacios
L.marker([-33.1881735132, -70.6607013373], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Alberto Saavedra Palacios</b><br>Abate Juan Ignacio Molina 2010<br>990990586');

// Gabriela Perez Saavedra
L.marker([-32.4535798542, -71.244549718], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Gabriela Perez Saavedra</b><br>Camino De Acceso Poniente 1340<br>990992367');

// Diego Abraham Arredondo Arancibia
L.marker([-32.4432637, -71.1965657], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Diego Abraham Arredondo Arancibia</b><br>Esmeralda<br>992688683');

// Soc. Toso Hermanos Limitada
L.marker([-33.0357952, -71.2423626], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Soc. Toso Hermanos Limitada</b><br>Parcela 14 A ; Los Leones<br>993328790');

// Suc. Angel Custodio Prado
L.marker([-32.445094186, -71.2204078422], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Suc. Angel Custodio Prado</b><br>Esmeralda 290<br>994369203');

// Ronny Rufolf Motzfeld Muñoz
L.marker([-32.6809327753, -71.2044079137], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Ronny Rufolf Motzfeld Muñoz</b><br>Unnamed Road<br>994429691');

// Digna Zapata Villalon
L.marker([-32.8555174295, -71.2095325708], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Digna Zapata Villalon</b><br>Parcela 37; San Jorge;Pocochay<br>995115820');

// Juan Delfin Villalon Beltran
L.marker([-32.6985784196, -71.190635487], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Delfin Villalon Beltran</b><br>Unnamed Road<br>995412205');

// Jeyson Salas Herrera
L.marker([-32.7960992, -71.1605635], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jeyson Salas Herrera</b><br>Manuel Rodriguez 396<br>996192658');

// Soc. Agr.C Bazaes Ltda
L.marker([-32.8598471, -71.21531], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Soc. Agr.C Bazaes Ltda</b><br>Paraddero 8 Parcela 2, La Puntilla.<br>997025696');

// Urbano Perez Olivares
L.marker([-32.6963642, -71.206887], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Urbano Perez Olivares</b><br>F-121<br>997813815');

// Tomislav Kustera Bencic
L.marker([-32.7275022583, -71.1952686366], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Tomislav Kustera Bencic</b><br>F-320<br>998173585');

// Cristian Gonzalo Faune Alvarez
L.marker([-33.3662105, -70.8240491], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Cristian Gonzalo Faune Alvarez</b><br>Parcela N° 47 Peralillo<br>998901757');

// Lidia Ibacache Meneses
L.marker([-32.456002, -71.2490798], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Lidia Ibacache Meneses</b><br>Talanquen 160<br>999164873');

// Marco Arangue
L.marker([-32.9204047, -71.322127], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marco Arangue</b><br>Parcela N#9 Rauten, Quillota<br>+56935131790');

// Rene Bahamondez
L.marker([-32.89172, -71.24711], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Rene Bahamondez</b><br>Juan Bautista Alberdi, 35<br>+5696157 0163');

// Juan Márquez
L.marker([-33.0938253, -71.3543563], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Márquez</b><br>F-572,<br>+56964949508');

// Marcos Loyola Flores
L.marker([-33.4663389, -71.1061779], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marcos Loyola Flores</b><br>Santa Emilia S/N, María Pinto<br>+56975739486');

// Sergio Astudillo
L.marker([-32.2459560929, -71.1325384576], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sergio Astudillo</b><br>E-315<br>+56983404461');

// Aldo Arrieta
L.marker([0.0, 0.0], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Aldo Arrieta</b><br>Paradero #10 Cay Cay, Limache<br>+56989936763');

// José Luis Céspedes Peña
L.marker([-32.9087108, -71.2564861], {icon: lechugaIcon}).addTo(map).bindPopup('<b>José Luis Céspedes Peña</b><br>Huerto Llaiquen Lote Nº 3, Quillota<br>+56993370417');

// Juan Edmundo Castañeda Aranda
L.marker([-33.4823355, -71.1271894], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Edmundo Castañeda Aranda</b><br>Parcela N18  Santa Emilia, María Pinto<br>+56993680245');

// Rosamel Baeza Rojas
L.marker([-33.0335143, -71.2434943], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Rosamel Baeza Rojas</b><br>Avenida Jose Tomás Urmeneta, N° 999<br>76047413');

// Luis Santibañez Zamora
L.marker([-32.8250729, -71.0796846], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Santibañez Zamora</b><br>Longitudinal Norte, Sector: Montenegro-Los Ermitaños, 755<br>85807927');

// Pedro Olivares Brito
L.marker([-32.8261758, -71.0603307], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pedro Olivares Brito</b><br>F-313,<br>86036558');

// Juan González Olivares
L.marker([-32.8559011, -71.2101148], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan González Olivares</b><br>San Jorge<br>931864989');

// Hector Tapia Fredes
L.marker([-32.9303849, -71.3043103], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Hector Tapia Fredes</b><br>Parcela Nº 5, Carolmo<br>932377273');

// Marco Arangue Navia
L.marker([-32.9211824, -71.3232074], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marco Arangue Navia</b><br>Parcela Nº22 Rauten, Quillota<br>935131790');

// Moisés Arancibia Maturana
L.marker([-32.8280256, -71.0334033], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Moisés Arancibia Maturana</b><br>F-301-E,<br>944088761');

// Héctor Beas Vargas
L.marker([-32.79773, -71.14654], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Héctor Beas Vargas</b><br>Manuel Rodríguez, 1245<br>94868682');

// Eusebio Morales Carrera
L.marker([-33.0301734, -71.247143], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Eusebio Morales Carrera</b><br>Parcela 2-A Los Leones<br>954108161');

// Romelio Ojeda Villalon
L.marker([-32.7224988718, -71.1721784902], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Romelio Ojeda Villalon</b><br>Nogales, Región De Valparaíso, Chile<br>961420863');

// Samuel Villarroel Toledo
L.marker([-32.8228208, -71.0287389], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Samuel Villarroel Toledo</b><br>F-311,<br>961709591');

// Nivaldo Contreras Collao
L.marker([-32.7289, -70.92703], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Nivaldo Contreras Collao</b><br>E-615, 6318<br>962139538');

// Fernando Bustamante
L.marker([-32.9030419, -71.2238294], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Fernando Bustamante</b><br>Parcela #45 San Isidro, Quillota<br>962303069');

// Patricio Navia Olivarez
L.marker([-32.900943, -71.236452], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Patricio Navia Olivarez</b><br>Parcela N#9 San Isidro, Quillota<br>963467078');

// Juan Hernández Olivares
L.marker([-32.7893181, -70.9512216], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Hernández Olivares</b><br>E-635<br>964033012');

// Elias Joel Mella Maureira
L.marker([-32.908208, -71.274065], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Elias Joel Mella Maureira</b><br>Camino Troncal Sn San Pedro<br>965727566');

// Marta Figueroa Gaete
L.marker([-32.87785, -71.20467], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marta Figueroa Gaete</b><br>F-326<br>967863400');

// Carlos Guerra Melo
L.marker([-33.0431582, -71.2481554], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Carlos Guerra Melo</b><br>Parcela N*4 Los Leones, Lliu Lliu<br>972896766');

// Francisco Guerra
L.marker([-32.7548778532, -71.1724762121], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Francisco Guerra</b><br>F-317<br>973778267');

// Marcelo Roco
L.marker([-32.8618364, -71.2609741], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marcelo Roco</b><br>La Capilla, 190<br>973978603');

// Sociedad Agrícola Jamett Hnos
L.marker([-32.8251686, -71.0598198], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sociedad Agrícola Jamett Hnos</b><br>F-313,<br>976147068');

// Juan Gonzalez Olivares
L.marker([-32.8493678629, -70.9509973832], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Gonzalez Olivares</b><br>Longitudinal Norte, Sector: Montenegro-Los Ermitaños<br>976201555');

// Sergio Villalobos Escobar
L.marker([-32.8281623, -71.0848837], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sergio Villalobos Escobar</b><br>F-301-E,<br>97629629');

// Heriberto Pérez Zamorano
L.marker([-32.8206355, -71.034631], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Heriberto Pérez Zamorano</b><br>Unnamed Road,<br>978043826');

// José Alvarado Tello
L.marker([-32.8087778, -71.0569943], {icon: lechugaIcon}).addTo(map).bindPopup('<b>José Alvarado Tello</b><br>F-313,<br>978116430');

// Juan Alvarado Tello
L.marker([-32.8087786, -71.0570028], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Alvarado Tello</b><br>F-313,<br>978116430');

// Manuel Hernandez Ortiz
L.marker([-32.8653036, -70.9358246], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Manuel Hernandez Ortiz</b><br>E-424<br>979018566');

// Florentino Cárdenas
L.marker([-32.8231037, -71.060488], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Florentino Cárdenas</b><br>F-313,<br>979115801');

// Luis Flores Zamora
L.marker([-32.75633, -70.9432755], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Flores Zamora</b><br>E-615, 24<br>97973970');

// Agricola Rodrigo Martinez E.I.R.L.
L.marker([-32.8493264887, -71.196259654], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Agricola Rodrigo Martinez E.I.R.L.</b><br>Parcela 16, Pocochay<br>981576404');

// Luis Olivares Brito
L.marker([-32.8228226, -71.02874], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Olivares Brito</b><br>F-311<br>981734694');

// Luis Olivares Prieto
L.marker([-32.8123647, -71.0499204], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Olivares Prieto</b><br>F-301-E, 39<br>981734694');

// Ariel Osorio
L.marker([-32.9304346, -71.3349248], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Ariel Osorio</b><br>Parcela N18 Rauten, Quillota<br>981782468');

// Nicolas Pou Vera
L.marker([-33.3439286, -71.3592074], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Nicolas Pou Vera</b><br>Parcela 2B Mundo Nuevo, Casablanca<br>982051091');

// Juan Silva Gutiérrez
L.marker([-32.9174596, -71.2925679], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Silva Gutiérrez</b><br>Parcela La Vega Lotes 2A Bien Común 3, Quillota<br>982472880');

// Ventura Sepulveda
L.marker([-32.7289, -70.92703], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Ventura Sepulveda</b><br>E-615, 6318<br>982478498');

// Julio Bustamante Caseres
L.marker([-32.7457268, -71.1720471], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Julio Bustamante Caseres</b><br>F-320,<br>982742652');

// Julio Cifuente Oyarzun
L.marker([-32.8253886, -71.057395], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Julio Cifuente Oyarzun</b><br>F-301-E,<br>982785809');

// Julio Cifuentes Oyarzun.
L.marker([-32.8251457, -71.05301], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Julio Cifuentes Oyarzun.</b><br>F-301-E, 32<br>982785809');

// Miguel Bustamante Camus
L.marker([-32.8256637, -71.0500149], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Miguel Bustamante Camus</b><br>Parcela San Juan, Romeral N°2, Hijuela<br>983423302');

// Miguel Bustamante Camus
L.marker([-32.8251447, -71.0530074], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Miguel Bustamante Camus</b><br>F-301-E, 32<br>983423302');

// Adolfo Ahumada Y Hnos
L.marker([-32.8491616, -71.1034439], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Adolfo Ahumada Y Hnos</b><br>Los Maitenes Parcela 12; Ocoa<br>984161860');

// Juan Rosas Tapia
L.marker([-32.3194073173, -71.2943342137], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Rosas Tapia</b><br>E-253<br>984193321');

// Rosa Jeldes Zamora
L.marker([-32.6888187, -71.209203], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Rosa Jeldes Zamora</b><br>Panamericana Norte,<br>984294467');

// Javier Castillo Contreras
L.marker([-32.8573924, -71.0880987], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Javier Castillo Contreras</b><br>Unnamed Road,<br>984602306');

// Orlando Jamett Abarca
L.marker([-32.8270385, -71.0345765], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Orlando Jamett Abarca</b><br>Unnamed Road<br>984621714');

// Pedro Mesías Carballo
L.marker([-32.7909377, -70.9149103], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pedro Mesías Carballo</b><br>E-635,<br>984696956');

// Hipólito Palacios Soto
L.marker([-33.0112873, -71.228209], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Hipólito Palacios Soto</b><br>Avenida Jose Tomás Urmeneta, 998<br>985413948');

// Carlos Rojo Maturana
L.marker([-32.809477, -71.053839], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Carlos Rojo Maturana</b><br>Unnamed Road,<br>986735231');

// Juan Guillermo Bustamante
L.marker([-32.778392995, -70.902184434], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Guillermo Bustamante</b><br>E-645<br>987639530');

// Juan Guillermo Bustamante M.
L.marker([-32.8286194, -71.039881], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Guillermo Bustamante M.</b><br>F-301-E, 35<br>987639530');

// Juan Guillermo Bustamante Mena
L.marker([-32.7912867, -70.9776966], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Guillermo Bustamante Mena</b><br>El Carmelo<br>987639530');

// Hector Tapia Figueroa
L.marker([-32.922219849, -71.3500950754], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Hector Tapia Figueroa</b><br>Parcela Nº5 Carolmo, Quillota<br>988585081');

// Marcelino Bustamanate
L.marker([-32.8256851, -71.0499911], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marcelino Bustamanate</b><br>Parcela San Juan 1<br>988871192');

// Manuel Arredondo Barrera
L.marker([-33.4866634463, -71.1543367326], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Manuel Arredondo Barrera</b><br>Parcela Nº57 El Luchador, Maria Pinto<br>989002642');

// Juan Allendes Acevedo
L.marker([-33.3553502, -71.3156965], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Allendes Acevedo</b><br>La Vinilla Norte S N<br>989767173');

// José Maturana Correa
L.marker([-32.828446, -71.1296949], {icon: lechugaIcon}).addTo(map).bindPopup('<b>José Maturana Correa</b><br>Panamericana Norte, 131<br>990909411');

// Marco Perez Pasten
L.marker([-32.7428983, -71.1732708], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marco Perez Pasten</b><br>F-320, Parcela B1 N° 281 La Peña, Nogales<br>990910831');

// Marco Pérez Pastene
L.marker([-32.7561212199, -71.1571369391], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marco Pérez Pastene</b><br>Unnamed Road<br>990910831');

// Omar Olivares Vera.
L.marker([-32.7723291, -71.1754937], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Omar Olivares Vera.</b><br>Unnamed Road,<br>990932620');

// Soc. Agrí. Manzur Hnos.
L.marker([-32.7690241319, -71.174994419], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Soc. Agrí. Manzur Hnos.</b><br>Unnamed Road<br>990932620');

// Alberto Saavedra Palacios
L.marker([-32.7699969, -70.9643028], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Alberto Saavedra Palacios</b><br>Pablo De Rokha,<br>990990586');

// Comercial Santa Fe  Ltda.
L.marker([-33.0118783344, -71.2005647723], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Comercial Santa Fe  Ltda.</b><br>Las Cruces S.N. Olmue<br>991502337');

// Nehemias Cabello Carrasco
L.marker([-32.8363357, -70.9705379], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Nehemias Cabello Carrasco</b><br>España, 171<br>991646282');

// Angel Tapia Ovalle
L.marker([-32.9293959, -71.4283743], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Angel Tapia Ovalle</b><br>Parcela Nº 16 La Victoria, Limache<br>991995057');

// Jorge Oyadenel Mondaca
L.marker([-32.8534293, -71.0802978], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jorge Oyadenel Mondaca</b><br>Unnamed Road,<br>992133408');

// Luis Zamora Aravena
L.marker([-32.8467161, -71.0931115], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Zamora Aravena</b><br>Puente Aconcagua, 100<br>993001514');

// Miguel Saavedra Rivero
L.marker([-32.7995168958, -71.1410603487], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Miguel Saavedra Rivero</b><br>Hijuelas, Región De Valparaíso, Chile<br>993145085');

// Gonzalo González Olivares
L.marker([-32.9090177, -71.2608066], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Gonzalo González Olivares</b><br>Chacra Las Mercedes Paradero 3<br>993192330');

// Agricola Jose Alfonso Meneses Tapia E.I.R.L
L.marker([-32.9168316638, -71.3286751215], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Agricola Jose Alfonso Meneses Tapia E.I.R.L</b><br>Parcela 7, Carolmo, Quillota<br>993256324');

// Arturo Gatica Zamors
L.marker([-32.7383846, -71.1775988], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Arturo Gatica Zamors</b><br>F-320,<br>993377220');

// Nancy Del Carmen Cisternas Muñoz
L.marker([-30.5997277611, -71.4938735485], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Nancy Del Carmen Cisternas Muñoz</b><br>Parcela Nº61 Lote E Los Olivos<br>993494601');

// Edmundo Fernando Castañeda Fuentes
L.marker([-33.473362, -71.11413], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Edmundo Fernando Castañeda Fuentes</b><br>Parcela Nº 30 Santa Emilia<br>993680245');

// Sergio Hernández Olivares
L.marker([-32.7790221, -70.9382664], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sergio Hernández Olivares</b><br>E-635,<br>993694718');

// Victor Saavedra
L.marker([-32.7896541, -70.9073093], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Victor Saavedra</b><br>Callejón Lo Garzo, 069<br>993711502');

// Victor Saavedra Muñoz
L.marker([0.0, 0.0], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Victor Saavedra Muñoz</b><br>Baldomero Lillo #1574, Quillota<br>993711502');

// Carlos Diaz Arias
L.marker([-32.8453613879, -71.0632969025], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Carlos Diaz Arias</b><br>Unnamed Road<br>99396594');

// Manuel Aros Donoso
L.marker([-32.9425713, -71.2693503], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Manuel Aros Donoso</b><br>Los Laureles, 053<br>994211238');

// Pedro Huerta Tapia
L.marker([-33.3438034, -71.3659744], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pedro Huerta Tapia</b><br>F-90<br>994212223');

// David Olivares Morales
L.marker([-32.9198544, -71.2787356], {icon: lechugaIcon}).addTo(map).bindPopup('<b>David Olivares Morales</b><br>Parcela Nº 8 Paradero 8 Camino Troncal, Quillota<br>994375811');

// Rosa Romero Valencia
L.marker([-32.826567, -71.0289629], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Rosa Romero Valencia</b><br>F-301-E,<br>994426520');

// Jorge Pizarro Gallardo
L.marker([-32.8500386, -71.1130482], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jorge Pizarro Gallardo</b><br>Parcela 1 Lote 3<br>994701442');

// Claudio Vera Olivares
L.marker([-32.8123916, -71.0470203], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Claudio Vera Olivares</b><br>Unnamed Road<br>994807231');

// Héctor Beas Vargas
L.marker([-32.8544015, -71.0978956], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Héctor Beas Vargas</b><br>Unnamed Road,<br>994868682');

// Miguel Ortiz Carvajal
L.marker([-32.8302841, -71.0926], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Miguel Ortiz Carvajal</b><br>F-301-E<br>994995236');

// Pedro Pablo González Olivares
L.marker([-32.8390798, -71.1065176], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pedro Pablo González Olivares</b><br>F-301-E, 7305<br>995056044');

// Hector Martínez Martínez
L.marker([-33.4986308, -71.0677429], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Hector Martínez Martínez</b><br>Parcela N#8 Santa Emilia, María Pinto<br>995363646');

// Soc. Agr. Trans. Iselan
L.marker([-32.7880059, -70.9751408], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Soc. Agr. Trans. Iselan</b><br>El Ñilhue Sin Número<br>995380641');

// Sociedad Agrícola Y Transporte Iselan Ltda.
L.marker([-32.8150279, -71.1378744], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Sociedad Agrícola Y Transporte Iselan Ltda.</b><br>F-328,<br>995380641');

// Margarita Azocar González
L.marker([-33.3337673, -71.3803962], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Margarita Azocar González</b><br>Parcela N°22 Puente Tapihue Casablanca<br>996565120');

// Soc. Agrí. Aguas Claras
L.marker([-32.5038108, -70.9353799], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Soc. Agrí. Aguas Claras</b><br>Diego De Almagro, 1827<br>997290785');

// Osvaldo Rojas Morales.
L.marker([-32.8746366, -70.9529322], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Osvaldo Rojas Morales.</b><br>Longitudinal Norte, Sector: Montenegro-Los Ermitaños 688<br>997419907');

// Hernan Reyes Valerio
L.marker([-33.5050343, -71.1488886], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Hernan Reyes Valerio</b><br>Parcela N #12 El Rosario, María Pinto<br>997679487');

// Mario Osses Vergara Y Otros.
L.marker([-32.7803622, -70.9547986], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Mario Osses Vergara Y Otros.</b><br>Santa Isabel<br>997971340');

// Juan Gonzalez Olivares
L.marker([-32.7786816503, -70.9113254023], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Gonzalez Olivares</b><br>Unnamed Road<br>998274027-976201555');

// Pedro Bustamante Campus
L.marker([-32.8286194, -71.039881], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pedro Bustamante Campus</b><br>F-301-E, 35<br>998334200');

// Pedro Bustamante Camus
L.marker([-32.8257455, -71.0499454], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Pedro Bustamante Camus</b><br>Sitio N°48 Los Pinos Romeral, Hijuela<br>998334200');

// Nicolas Villagra Salinas
L.marker([-33.294081, -70.8401138], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Nicolas Villagra Salinas</b><br>Parcela N 56B Flor De Chile, Lampa<br>998716041');

// Luis Manuel Reyes Segura
L.marker([-33.0354389, -71.2434013], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Manuel Reyes Segura</b><br>Los Leones Sitio 13<br>998950051-982329744');

// Juan Carlos Morales
L.marker([-32.8153114, -71.0560901], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Juan Carlos Morales</b><br>F-313,<br>999264861');

// Marcela Olivares Brito
L.marker([-32.8153116, -71.0560925], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Marcela Olivares Brito</b><br>F-313,<br>999264861');

// Lino Orlando Reinoso Morales
L.marker([-32.9020353635, -71.2018587708], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Lino Orlando Reinoso Morales</b><br>Parcela Nº22 Los Almendros<br>999368497');

// Carlos Mena Hernández
L.marker([-33.4265685, -71.0536064], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Carlos Mena Hernández</b><br>Parcela Nº 1 Miraflores<br>999596696');

// Alfredo Manzur Cabrera
L.marker([-32.7747803, -71.1782599], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Alfredo Manzur Cabrera</b><br>F-303,<br>999932620');

// Jorge Aguilera Tapia
L.marker([-32.6949398297, -71.2013750519], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jorge Aguilera Tapia</b><br>F-121 526<br>982041983-282280480');

// Andres Del Transito Vera Torres
L.marker([-32.8281571, -71.0842201], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Andres Del Transito Vera Torres</b><br>Parcela13 Los Aromos B<br>982106404-332272666');

// Oscar Miguel Martinez Gomez
L.marker([-33.3034432, -70.8534306], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Oscar Miguel Martinez Gomez</b><br>Pasaje Domingo Jara Vasquez N°508<br>978685302-968261184');

// Ibacache Vera Y Cia. Ltda.
L.marker([-32.4435753, -71.2234108], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Ibacache Vera Y Cia. Ltda.</b><br>A Valle Hermoso 96<br>992443150-374971852');

// Roonel Marin Robles Cortes
L.marker([-32.8947825514, -71.2112921], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Roonel Marin Robles Cortes</b><br>Parcela 37, La Palma<br>332265981-982747485');

// Dagoberto Tejos Contreras
L.marker([0.0, 0.0], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Dagoberto Tejos Contreras</b><br>Paradero 7.5 Callejon  Verdejo Los Maitenes<br>332414132-983146599');

// Rolando Carvajal Campos
L.marker([-32.9164339486, -71.4067831706], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Rolando Carvajal Campos</b><br>Parcela Las Araucarias<br>983454514-983820529');

// Agr. Araya Hnos Ltda
L.marker([-32.8409601, -71.2270975], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Agr. Araya Hnos Ltda</b><br>Pasaje Ricardo Cordova 150<br>942799541-984326577');

// Luis Enrique Gonzalez Mazuela
L.marker([-32.8813259, -71.2285734], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Luis Enrique Gonzalez Mazuela</b><br>Asentamiento El Condor Parcela 14 La Palma<br>933265417-988193400');

// Moises Rojas Baeza
L.marker([-32.6973324676, -71.1871271576], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Moises Rojas Baeza</b><br>Unnamed Road<br>992280604-992819558');

// Jose Meneses Meneses
L.marker([-32.9266753, -71.4082286], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Jose Meneses Meneses</b><br>Parcela Nº6 Carolmo, Quillota<br>993256324-993352224');

// Antonia Catalan Escobar
L.marker([-29.9933897834, -71.2427103226], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Antonia Catalan Escobar</b><br>Parcel Nº8 Pan De Azucar, Coquimbo<br>989228743-997413892');

// Fernando Antonio Castro Muñoz
L.marker([-33.5165197, -71.1236185], {icon: lechugaIcon}).addTo(map).bindPopup('<b>Fernando Antonio Castro Muñoz</b><br>Parcela N°28 Ranchillo<br>994647892-998338516');


//////////////////////////////////////////////////
// Ganaderos //


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



///////////////////////////////////////
// Farmacias



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


