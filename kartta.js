import ol from "https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/build/ol.js";

var Kartta = new ol.Map({
	target: 'map',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM(),
			opacity: 0.4
		}),
		new ol.layer.Vector({
			source: new ol.source.Vector({
				format: new ol.format.GeoJSON(),
				url: 'https://rata.digitraffic.fi/infra-api/latest/rautatieliikennepaikat.geojson?srsName=crs:84'
			})
		})
	],
	view: new ol.View({
		zoom: 6,
		center: [3000000, 9000000]
	})
});