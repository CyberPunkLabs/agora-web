var lechugaIcon = L.icon({
    iconUrl: 'lechuga.png',
    iconSize:     [30, 40], // size of the icon
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


