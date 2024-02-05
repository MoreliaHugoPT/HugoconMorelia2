var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_DISTRITO_17_1 = new ol.format.GeoJSON();
var features_DISTRITO_17_1 = format_DISTRITO_17_1.readFeatures(json_DISTRITO_17_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITO_17_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITO_17_1.addFeatures(features_DISTRITO_17_1);
var lyr_DISTRITO_17_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITO_17_1, 
                style: style_DISTRITO_17_1,
                interactive: true,
                title: 'DISTRITO LOCAL 17'
            });
var format_DISTRITO_16_2 = new ol.format.GeoJSON();
var features_DISTRITO_16_2 = format_DISTRITO_16_2.readFeatures(json_DISTRITO_16_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITO_16_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITO_16_2.addFeatures(features_DISTRITO_16_2);
var lyr_DISTRITO_16_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITO_16_2, 
                style: style_DISTRITO_16_2,
                interactive: true,
                title: 'DISTRITO LOCAL 16'
            });
var format_DISTRITO_11_3 = new ol.format.GeoJSON();
var features_DISTRITO_11_3 = format_DISTRITO_11_3.readFeatures(json_DISTRITO_11_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITO_11_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITO_11_3.addFeatures(features_DISTRITO_11_3);
var lyr_DISTRITO_11_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITO_11_3, 
                style: style_DISTRITO_11_3,
                interactive: true,
                title: 'DISTRITO LOCAL 11'
            });
var format_DISTRITO_10_4 = new ol.format.GeoJSON();
var features_DISTRITO_10_4 = format_DISTRITO_10_4.readFeatures(json_DISTRITO_10_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITO_10_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITO_10_4.addFeatures(features_DISTRITO_10_4);
var lyr_DISTRITO_10_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITO_10_4, 
                style: style_DISTRITO_10_4,
                interactive: true,
                title: 'DISTRITO LOCAL 10'
            });
var format_VISTAGENERAL_5 = new ol.format.GeoJSON();
var features_VISTAGENERAL_5 = format_VISTAGENERAL_5.readFeatures(json_VISTAGENERAL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VISTAGENERAL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VISTAGENERAL_5.addFeatures(features_VISTAGENERAL_5);
var lyr_VISTAGENERAL_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VISTAGENERAL_5, 
                style: style_VISTAGENERAL_5,
                interactive: true,
                title: 'VISTA GENERAL'
            });
var format_AFILIADOS_6 = new ol.format.GeoJSON();
var features_AFILIADOS_6 = format_AFILIADOS_6.readFeatures(json_AFILIADOS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFILIADOS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFILIADOS_6.addFeatures(features_AFILIADOS_6);
var lyr_AFILIADOS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AFILIADOS_6, 
                style: style_AFILIADOS_6,
                interactive: true,
                title: '<img src="styles/legend/AFILIADOS_6.png" /> AFILIADOS'
            });
var format_LIDERDECOMITE_7 = new ol.format.GeoJSON();
var features_LIDERDECOMITE_7 = format_LIDERDECOMITE_7.readFeatures(json_LIDERDECOMITE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIDERDECOMITE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIDERDECOMITE_7.addFeatures(features_LIDERDECOMITE_7);
var lyr_LIDERDECOMITE_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIDERDECOMITE_7, 
                style: style_LIDERDECOMITE_7,
                interactive: true,
                title: '<img src="styles/legend/LIDERDECOMITE_7.png" /> LIDER DE COMITE'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_DISTRITO_17_1.setVisible(true);lyr_DISTRITO_16_2.setVisible(true);lyr_DISTRITO_11_3.setVisible(true);lyr_DISTRITO_10_4.setVisible(true);lyr_VISTAGENERAL_5.setVisible(false);lyr_AFILIADOS_6.setVisible(true);lyr_LIDERDECOMITE_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_DISTRITO_17_1,lyr_DISTRITO_16_2,lyr_DISTRITO_11_3,lyr_DISTRITO_10_4,lyr_VISTAGENERAL_5,lyr_AFILIADOS_6,lyr_LIDERDECOMITE_7];
lyr_DISTRITO_17_1.set('fieldAliases', {'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_DISTRITO_16_2.set('fieldAliases', {'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_DISTRITO_11_3.set('fieldAliases', {'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_DISTRITO_10_4.set('fieldAliases', {'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_VISTAGENERAL_5.set('fieldAliases', {'SECCION': 'SECCION', 'DISTRITO': 'DISTRITO', 'AFILIACION': 'AFILIACION', 'COMITE': 'COMITE', });
lyr_AFILIADOS_6.set('fieldAliases', {'AFILIADO': 'AFILIADO', 'SECCION': 'SECCION', });
lyr_LIDERDECOMITE_7.set('fieldAliases', {'LIDER': 'LIDER', 'SECCION': 'SECCION', });
lyr_DISTRITO_17_1.set('fieldImages', {'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'Range', 'COMITE': 'Range', });
lyr_DISTRITO_16_2.set('fieldImages', {'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'Range', 'COMITE': 'Range', });
lyr_DISTRITO_11_3.set('fieldImages', {'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'Range', 'COMITE': 'Range', });
lyr_DISTRITO_10_4.set('fieldImages', {'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'Range', 'COMITE': 'Range', });
lyr_VISTAGENERAL_5.set('fieldImages', {'SECCION': 'TextEdit', 'DISTRITO': 'TextEdit', 'AFILIACION': 'Range', 'COMITE': 'Range', });
lyr_AFILIADOS_6.set('fieldImages', {'AFILIADO': 'TextEdit', 'SECCION': 'TextEdit', });
lyr_LIDERDECOMITE_7.set('fieldImages', {'LIDER': 'TextEdit', 'SECCION': 'TextEdit', });
lyr_DISTRITO_17_1.set('fieldLabels', {'SECCION': 'header label - always visible', 'DISTRITO': 'header label - always visible', 'AFILIACION': 'inline label - visible with data', 'COMITE': 'inline label - visible with data', });
lyr_DISTRITO_16_2.set('fieldLabels', {'SECCION': 'header label - always visible', 'DISTRITO': 'header label - always visible', 'AFILIACION': 'inline label - visible with data', 'COMITE': 'inline label - visible with data', });
lyr_DISTRITO_11_3.set('fieldLabels', {'SECCION': 'header label - always visible', 'DISTRITO': 'header label - always visible', 'AFILIACION': 'inline label - visible with data', 'COMITE': 'inline label - visible with data', });
lyr_DISTRITO_10_4.set('fieldLabels', {'SECCION': 'header label - always visible', 'DISTRITO': 'header label - always visible', 'AFILIACION': 'inline label - visible with data', 'COMITE': 'inline label - visible with data', });
lyr_VISTAGENERAL_5.set('fieldLabels', {'SECCION': 'header label - always visible', 'DISTRITO': 'header label - always visible', 'AFILIACION': 'inline label - visible with data', 'COMITE': 'inline label - visible with data', });
lyr_AFILIADOS_6.set('fieldLabels', {'AFILIADO': 'inline label - always visible', 'SECCION': 'inline label - always visible', });
lyr_LIDERDECOMITE_7.set('fieldLabels', {'LIDER': 'inline label - always visible', 'SECCION': 'inline label - always visible', });
lyr_LIDERDECOMITE_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});