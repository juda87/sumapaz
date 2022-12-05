var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Sumapaz_1 = new ol.format.GeoJSON();
var features_Sumapaz_1 = format_Sumapaz_1.readFeatures(json_Sumapaz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sumapaz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sumapaz_1.addFeatures(features_Sumapaz_1);
var lyr_Sumapaz_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sumapaz_1, 
                style: style_Sumapaz_1,
                interactive: true,
                title: '<img src="styles/legend/Sumapaz_1.png" /> Sumapaz'
            });
var format_Oficiales_2 = new ol.format.GeoJSON();
var features_Oficiales_2 = format_Oficiales_2.readFeatures(json_Oficiales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oficiales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oficiales_2.addFeatures(features_Oficiales_2);
var lyr_Oficiales_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Oficiales_2, 
                style: style_Oficiales_2,
                interactive: true,
                title: '<img src="styles/legend/Oficiales_2.png" /> Oficiales'
            });
var format_Faltantes_3 = new ol.format.GeoJSON();
var features_Faltantes_3 = format_Faltantes_3.readFeatures(json_Faltantes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Faltantes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Faltantes_3.addFeatures(features_Faltantes_3);
var lyr_Faltantes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Faltantes_3, 
                style: style_Faltantes_3,
                interactive: true,
                title: '<img src="styles/legend/Faltantes_3.png" /> Faltantes'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Sumapaz_1.setVisible(true);lyr_Oficiales_2.setVisible(true);lyr_Faltantes_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Sumapaz_1,lyr_Oficiales_2,lyr_Faltantes_3];
lyr_Sumapaz_1.set('fieldAliases', {'COD_CUENC': 'COD_CUENC', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', 'NOMBRE': 'NOMBRE', 'Hectareas': 'Hectareas', 'Hect_MAO': 'Hect_MAO', });
lyr_Oficiales_2.set('fieldAliases', {'PUNTO': 'PUNTO', 'ID': 'ID', 'X': 'X', 'Y': 'Y', 'NOMBRE_DEL': 'NOMBRE_DEL', 'CUENCA': 'CUENCA', });
lyr_Faltantes_3.set('fieldAliases', {'muestra': 'muestra', 'PT_id': 'PT_id', 'PT_program': 'PT_program', 'PT_municip': 'PT_municip', 'PT_punto': 'PT_punto', 'PT_fk_prog': 'PT_fk_prog', });
lyr_Sumapaz_1.set('fieldImages', {'COD_CUENC': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', 'NOMBRE': 'TextEdit', 'Hectareas': 'TextEdit', 'Hect_MAO': 'TextEdit', });
lyr_Oficiales_2.set('fieldImages', {'PUNTO': '', 'ID': '', 'X': '', 'Y': '', 'NOMBRE_DEL': '', 'CUENCA': '', });
lyr_Faltantes_3.set('fieldImages', {'muestra': '', 'PT_id': '', 'PT_program': '', 'PT_municip': '', 'PT_punto': '', 'PT_fk_prog': '', });
lyr_Sumapaz_1.set('fieldLabels', {'COD_CUENC': 'no label', 'AREA': 'no label', 'PERIMETRO': 'no label', 'NOMBRE': 'no label', 'Hectareas': 'no label', 'Hect_MAO': 'no label', });
lyr_Oficiales_2.set('fieldLabels', {'PUNTO': 'header label', 'ID': 'header label', 'X': 'header label', 'Y': 'header label', 'NOMBRE_DEL': 'header label', 'CUENCA': 'header label', });
lyr_Faltantes_3.set('fieldLabels', {'muestra': 'header label', 'PT_id': 'header label', 'PT_program': 'header label', 'PT_municip': 'header label', 'PT_punto': 'header label', 'PT_fk_prog': 'header label', });
lyr_Faltantes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});