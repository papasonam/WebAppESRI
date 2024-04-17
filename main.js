// Load the Map and MapView modules
require(["esri/WebMap",
    "esri/views/MapView",
    "esri/config",
    "esri/widgets/Legend",
    "esri/widgets/ScaleBar",
    "esri/widgets/Home",
    "esri/widgets/Locate",
    "esri/widgets/LayerList",
    "esri/widgets/Expand",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Fullscreen",
    "esri/widgets/Print",
],
    function (WebMap,
        MapView,
        esriConfig,
        Legend,
        ScaleBar,
        Home,
        Locate,
        LayerList,
        Expand,
        BasemapGallery,
        Fullscreen,
        Print,) {

        // Set the hostname to the on-premise portal
        esriConfig.portalUrl = "https://cgi.nlcs.gov.bt/portal"

        // Create a WebMap instance
        const myMap = new WebMap({
            portalItem: { // autocasts as new PortalItem()
                id: "e56d46f6b3a3499991bbb56fd00e2768"
            }
        });

        // Create a MapView instance (for 2D viewing) and reference the map instance
        const view = new MapView({
            map: myMap,
            container: "viewDiv",  // References the ID of a DOM element
        });
        // legend commented out as it is added in the expanded bottom left
        // const legend = new Legend({
        //           view: view,            
        //         });
        //         // Add widget to the bottom left corner of the view
        //         view.ui.add(legend, "bottom-left");

        const scaleBar = new ScaleBar({
            view: view,
            unit: "metric"
        });
        // Add widget to the bottom right corner of the view
        view.ui.add(scaleBar, {
            position: "bottom-right"
        });
        const homeWidget = new Home({
            view: view
        });

        // adds the home widget to the top left corner of the MapView
        view.ui.add(homeWidget, "top-left");

        const locate = new Locate({
            view: view
        });
        view.ui.add(locate, "top-left");


        // base map or base map in expandable icon
        const basemapGallery = new BasemapGallery({
            view: view,
            container: "base-layers",

        });
        //const bgExpand = new Expand({
        //    view: view,
        //    content: basemapGallery,
        //    container: "base-layers"
        //});
        //view.ui.add(bgExpand, "top-right");

        // LEGEND INSIDE EXPAND WIDGET //
        const legend = new Legend({
            view: view,
            container: "legend-container"
        });
        //const legendExpand = new Expand({
        //    view: view,
        //   content: legend
        //});
        //view.ui.add(legendExpand, "bottom-left");

        // LayerList
        const layerList = new LayerList({
            view: view,
            container: "layer-list"
        });

        // Fulscreen button
        fullscreen = new Fullscreen({
            view: view
        });
        view.ui.add(fullscreen, "top-right");

        //const layerListExpand = new Expand({
        //    expandIcon: "layers", // see https://developers.arcgis.com/calcite-design-system/icons/
        // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
        //    view: view,
        //   content: layerList, legend,

        //});

        const print = new Print({
            view: view,
            // specify your own print service
            printServiceUrl:
                "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
        });
        //view.ui.add(print, "top-left");
        // Adds widget below other elements in the top left corner of the view

        const layerListExpand = new Expand({
            expandIcon: "print",  // see https://developers.arcgis.com/calcite-design-system/icons/
            // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
            view: view,
            content: print
          });
          view.ui.add(layerListExpand, "top-right");
        


        //view.ui.add(layerListExpand, "top-right");
        // MODALS //
        const appDetailModalBtn = document.getElementById("app-details-action");
        const appDetailModalEl = document.getElementById("app-details-modal");
        appDetailModalBtn.addEventListener("click", () => { appDetailModalEl.open = !appDetailModalEl.open });

    });