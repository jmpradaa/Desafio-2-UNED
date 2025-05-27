var config = {
    style: 'mapbox://styles/jmprada/cmb1cs6g7008u01qvholp2ocj',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoiam1wcmFkYSIsImEiOiJjbWFwZmh6bnYwaHJqMmtxMHlxMHo1NnF4In0.eRiQKvx_-TbHtxHsgFVw-g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Aeropuertos Pais Vasco',
    subtitle: 'Storymaps de los aeropuertos del Pais Vasco.',
    byline: 'Javier Martinez',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Aeropuerto de Bilbao (BIO)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Aeropuerto_Bilbao_Loiu_01.jpg',
            description: 'El Aeropuerto Internacional de Bilbao (IATA: BIO, OACI: LEBB) es un aeropuerto público español, propiedad de Aena, ubicado a 12 km de la ciudad de Bilbao. Es el aeropuerto más importante y con más tráfico de pasajeros de todo el norte de España.',
            location: {
                center: [-2.905856, 43.306519],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Aeropuerto de San Sebastian (EAS)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Txingudi_badia.jpg',
            description: 'El aeropuerto de San Sebastián (en euskera: Donostiako aireportua) es un aeropuerto español de Aena situado en el municipio de Fuenterrabía (Guipúzcoa), a 20 kilómetros de la ciudad de San Sebastián, junto a la frontera entre España y Francia.',
            location: {
                center: [-1.791932779672834, 43.3558783080923],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Aeropuerto de Vitoria (VIT)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Foronda_aireportua_antonov.jpg',
            description: 'El Aeropuerto de Vitoria[2]​ (IATA: VIT, OACI: LEVT), es un aeropuerto español gestionado por Aena que fue inaugurado en 1980. Se sitúa a 8 km del centro de la ciudad en terrenos del antiguo municipio de Foronda y muy cerca de los pueblos de Foronda y Antezana de Foronda, por lo que también es conocido como Aeropuerto de Foronda.',
            location: {
                center: [-2.7306175231933594, 42.88348009496851],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },   
    ]
};
