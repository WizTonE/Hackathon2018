
/**
 * ===============================================
 *
 * VUE COMPONENTS
 *
 * ===============================================
 *
 */

/**
 *
 * 地圖元件下方的交通工具路徑顯示
 *
 */
Vue.component('way-nav-view', {

    props: ["current"],

    data: function () {
        return {

            iconNames: [
                "airport",
                "metro",
                "taxi",
                "hotel",
                "hotel"],
            positionNames: [
                "Taiwan Taoyuan International Airport",
                "Taipei Metro System",
                "Accessible Taxi Driver",
                "Your Hotel",
                "Your Restaurant"],
            positionAddress: [
                "No. 9, Hangzhan S. Rd., Dayuan Dist., Taoyuan City",
                "On The Right Track",
                "By Your Side",
                "Your Hotel Address",
                "Your Restaurant Address"]

        } 
    },

    computed: {
        currentIconName: function () {
            let index = parseInt(this.current);
            return this.iconNames[index];
            
        },

        currentPositionName: function () {
            let index = parseInt(this.current);
            return this.positionNames[index];
        },

        currentPositionAddress: function() {
            return this.positionAddress[parseInt(this.current)];
        }

    },

    methods: {

        onClickIcon: function (index) {
            const viewNames = ["airport", "metro", "taxi", "hotel", "restaurant"];
            this.$router.push(viewNames[index]);
        }

    },

    template: '<div class="way-nav-box">\
    <div class="current-position">\
        <div :class="currentIconName"></div>\
        <div>\
            <div class="position-name">{{ currentPositionName }}</div>\
            <div class="position-address">{{ currentPositionAddress }}</div>\
        </div>\
    </div>\
    <div class="position-selection">\
        <div class="item airport" :class="{active : current == 0}" v-on:click="onClickIcon(0)"><div class="pos0"></div><div class="icon-airport"></div></div>\
        <div class="item metro" :class="{active : current == 1}" v-on:click="onClickIcon(1)"><div class="pos1"></div><div class="icon-metro"></div></div>\
        <div class="item taxi" :class="{active : current == 2}" v-on:click="onClickIcon(2)"><div class="pos2"></div><div class="icon-taxi"></div></div>\
        <div class="item hotel" :class="{active : current == 3}" v-on:click="onClickIcon(3)"><div class="pos3"></div><div class="icon-hotel"></div></div>\
        <div class="item restaurant" :class="{active : current == 4}" v-on:click="onClickIcon(4)"><div class="pos4"></div><div class="icon-restaurant"></div></div>\
    </div>\
    <div class="location-details">\
        <div>Location Detail</div>\
        <div>\
            <div class="icon-elevator"/>\
        </div>\
    </div>\
    </div>\
</div>'


});

Vue.component('here-map1',
    {
        props:['mapDivId'],

        data: function() {
            return {
                map: {}
            }
        },

        mounted: function () {
            // call map init on layout 
            this.$data.map = window.setupHereMap(this.mapDivId);
        },

        template: '<div :id="mapDivId" class="here-map-box global-map-box"></div>',

        methods: {
            createPoints: function(...p) {
                map.instance.removeObjects(map.instance.getObjects());
                for(var i=0; i<p.length; i++) {
                    position = {
                        lat: p[i].location.lat,
                        lng: p[i].location.lng
                    };
                    marker = new H.map.Marker(position);
                    this.$data.map.instance.addObject(marker);
                }
            },
            centerMaps: function(){
                window._app.getGeoLocation();
                var latitude = window._app.$data.latitude;
                var longitude = window._app.$data.longitude;
                var cord = {lat: latitude, lng: longitude}
                map.instance.setCenter(cord);
                map.instance.setZoom(17);
                var animatedSvg =
  '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" ' + 
  'y="0px" style="margin:-112px 0 0 -32px" width="136px"' + 
  'height="150px" viewBox="0 0 136 150"><ellipse fill="#000" ' +
  'cx="32" cy="128" rx="36" ry="4"><animate attributeName="cx" ' + 
  'from="32" to="32" begin="0s" dur="1.5s" values="96;32;96" ' + 
  'keySplines=".6 .1 .8 .1; .1 .8 .1 1" keyTimes="0;0.4;1"' + 
  'calcMode="spline" repeatCount="indefinite"/>' +  
  '<animate attributeName="rx" from="36" to="36" begin="0s"' +
  'dur="1.5s" values="36;10;36" keySplines=".6 .0 .8 .0; .0 .8 .0 1"' + 
  'keyTimes="0;0.4;1" calcMode="spline" repeatCount="indefinite"/>' +
  '<animate attributeName="opacity" from=".2" to=".2"  begin="0s" ' +
  ' dur="1.5s" values=".1;.7;.1" keySplines=" .6.0 .8 .0; .0 .8 .0 1" ' +
  'keyTimes=" 0;0.4;1" calcMode="spline" ' +
  'repeatCount="indefinite"/></ellipse><ellipse fill="#1b468d" ' +
  'cx="26" cy="20" rx="16" ry="12"><animate attributeName="cy" ' +
  'from="20" to="20" begin="0s" dur="1.5s" values="20;112;20" ' +
  'keySplines=".6 .1 .8 .1; .1 .8 .1 1" keyTimes=" 0;0.4;1" ' +
  'calcMode="spline" repeatCount="indefinite"/> ' +
  '<animate attributeName="ry" from="16" to="16" begin="0s" ' + 
  'dur="1.5s" values="16;12;16" keySplines=".6 .0 .8 .0; .0 .8 .0 1" ' +
  'keyTimes="0;0.4;1" calcMode="spline" ' +
  'repeatCount="indefinite"/></ellipse></svg>';
                var icon = new H.map.DomIcon(animatedSvg);
                marker = new H.map.DomMarker(cord, {icon: icon});
                map.instance.addObject(marker);
            }
        }
    });

/**
 *
 * 關鍵地點的小圖
 *
 */
Vue.component('key-thumbnail',
    {
        props: ["original", "thumbnail"],

        data: function() {
            return {
                isEnlarged: false
            };
        },

        methods: {
            onClickThumb: function() {
                this.isEnlarged = true;
            },

            onClickOriginal: function() {
                this.isEnlarged = false;
            }
        },

        template: '<div class="key-thumb-box">\
            <div class="thumb-view" v-show="!isEnlarged"><div :class="thumbnail" v-on:click="onClickThumb"></div></div>\
            <div class="enlarged-view" v-show="isEnlarged"><h3>You Should See</h3><div :class="original" v-on:click="onClickOriginal"></div></div>\
        </div>'


    });

/**
 *
 * 首頁
 *
 */
const HomeView = Vue.component('home-view', {
    data: function () {
        return {
            name: "2018 Way Finding"
        }

    },

    methods: {
        onClickGo: function() {
            this.$router.push("language");
        }

    },

    template: '<div class="home-container">\
                <div class="button-box"><div class="go-button" v-on:click="onClickGo">GO</div></div>\
               </div>'


});

/**
 *
 *
 * 選擇語系的畫面
 *
 */
const LanguageView = Vue.component('language-view',
    {
        data: function() {
            return {
                options: ["ENGLISH", "日本", "대한민국"]

            }
        },

        methods: {
            onClickLang: function() {
                this.$router.push("setup");
            }

        },

        template:
            '<div class="language-container"><div class="language-item" v-for="option in options" v-on:click=onClickLang> {{ option }}</div></div>'
    });

/**
 *
 *
 * 設定目的地的畫面
 * 輸入地址
 * 顯示地圖
 *
 *
 */
const SetupView = Vue.component('setup-view',
    {
        data: function() {
            return {
                address: "",
                message: ""
            }
        },
        template:
            '<div class="setup-container">\
                <div><input v-model="address" /><button v-on:click="onClick">Locate!</button>{{ message }}</div>\
                <here-map1 map-div-id="hereMap" ref="hereMap"></here-map1>\
            </div>',
        methods: {
            onClick: function() {
                // Search map
                var hereMap = this.$refs.hereMap; 
                var map = hereMap.$data.map;
                var geoParameters = {
                    searchText: this.$data.address
                };
                var onResult = function(result) {
                    var locations = result.Response.View[0].Result,
                        position,
                        marker;

                    if(locations.length == 0) {
                        showMessage("No location found.");
                    }
                    else if(locations.length > 1) {
                        showMessage("More than one result found, please select the location."); 
                        hereMap.createPoints({lng: 100.000, lat: 25.000});                 
                    } 
                    else {
                        hereMap.createPoints({lng: 100.000, lat: 25.000});
                    }
                    

/*
                    for (i = 0;  i < locations.length; i++) {
                        position = {
                            lat: locations[i].Location.DisplayPosition.Latitude,
                            lng: locations[i].Location.DisplayPosition.Longitude
                        };
                        marker = new H.map.Marker(position);
                        map.instance.addObject(marker);
                    }
*/                };
                var geocoder = map.platform.getGeocodingService();
                geocoder.geocode(geoParameters, onResult, function(e) {
                    alert(e);
                });
            }, 
            showMesage: function(m) {
                message = m;
            }

            

            
        }
    });

/**
 *
 *
 * 機場導航
 *
 *
 */
const AirportNavView = Vue.component('airport-nav-view',
    {
        data: function () {
            return {
            }
        },


        computed: {
            geo: function() {
                return window._app ? window._app.$data.latitude : "";

            }

        },


        template:
            '<div class="setup-container">\
                <div class="map-view">airport nav view</div><span>{{ geo }}</span>\
                <way-nav-view current="0"></way-nav-view>\
                <key-thumbnail original="key-pic-airport" thumbnail="thumb-key-pic-airport"></key-thumbnail>\
            </div>'
    });

/**
 *
 *
 * metro導航
 *
 *
 */
const MetroNavView = Vue.component('metro-nav-view',
    {
        data: function () {
            return {
            }
        },
        template:
            '<div class="setup-container">\
                <div class="map-view metro-pic-box">\
                  <img src="../Scripts/assets/mrt-Zhongshan.png" width="100%" height="100%"> \
                  1.出口電梯：<br>出口4（南京西路北側之淡水線線形公園內）<br>出口5（南京西路與赤峰街交叉東北隅）<br>出口6（南京西路與赤峰街交叉東南隅）<br>2.月臺電梯：<br>淡水信義線：大廳層中央<br>松山新店線：大廳層東側<br>\
                </div>\
                <way-nav-view current="1"></way-nav-view>\
                <key-thumbnail original="key-pic-metro" thumbnail="thumb-key-pic-metro"></key-thumbnail>\
            </div>'
    });

/**
 *
 *
 * Uber導航
 *
 *
 */
const UberNavView = Vue.component('uber-nav-view',
    {
        data: function () {
            return {
            }
        },
        template:
            '<div class="setup-container">\
                <div class="map-view">\
                    <div><div><iframe width="100%" height="1500" src="https://m.uber.com/?client_id=2dv2-1SM7rwg9_ogbq3Sxe4BYuNQrDxi&action=setPickup&pickup[latitude]=25.077883&pickup[longitude]=121.5727394&pickup[nickname]=CurrentPlace&dropoff[latitude]=25.0596028&dropoff[longitude]=121.5602683&dropoff[nickname]=Home" frameborder="0" allowfullscreen></iframe></div></div>\
                </div>\
                <way-nav-view current="2"></way-nav-view>\
            </div>'
    });


/**
 *
 *
 * Hotel
 *
 *
 */
const DestinationView = Vue.component('destination-view',
    {
        data: function () {
            return {
            }
        },
        template:
            '<div class="setup-container">\
                <div class="map-view">destination view</div>\
                <way-nav-view current="3"></way-nav-view>\
            </div>'
    });


/**
 *
 *
 * Feedback
 *
 *
 */
const FeedbackView = Vue.component('feedback-view',
    {
        data: function () {
            return {
            }
        },
        template:
            '<div class="setup-container"><div class="map-view">feedback view</div></div>'
    });

/**
 *
 *
 * 餐廳地圖
 *
 */
const RestaurantView = Vue.component('restaurant-view',
    {
        data: function () {
            return {
            }
        },
        template:
            '<div class="setup-container">\
                <div>restaurant view</div>\
<here-map1 map-div-id="hereMap" ref="hereMap"></here-map1>\
                <div>{{ Refresh }}</div>\
                <way-nav-view current="4"></way-nav-view>\
            </div>',
        computed:{
            Refresh: function(){
                var center = {
        lat: 25.04885,
        lng: 121.521
    };

    
    var magicDiff = 0.0017;
    var magicNumber = magicDiff;
    var oldMapZoom = 18;
    var maxMarker = 200;
    var markerLocations = [];
    var markerContainer = [];
    var bubbleContainer = [];

    // Initialize the platform object:
    var platform = new H.service.Platform({
        'app_id': '9shB49HQGahETgr6LWDZ',
        'app_code': '3CPwa96KM9xO-Z90EOBNig'
    });

// Search map
                var restaurantMap = window._app.$refs.globalMapInstance;
                var ui = window._app.$refs.globalMapInstance.mapUI;
                var mapEvents = window._app.$refs.globalMapInstance.mapEvents;
    // Add event listener:
    restaurantMap.addEventListener('dragend', function(evt) {
        // Log 'dragend' and 'mouse' events:
        console.log(evt.type, evt.currentPointer.type);
        var nowMapCenter = restaurantMap.getCenter();
        center.lng = nowMapCenter.lng;
        center.lat = nowMapCenter.lat;
    });

    function ClearBubble(address) {
        for(i = 0; i < bubbleContainer.length; ++i)
        {
            bubbleContainer[i].close();
            bubbleContainer.shift();
            --i;
        }
    }

    // Add event listener:
    restaurantMap.addEventListener('pointerup', function(evt) {
        // Log 'dragend' and 'mouse' events:
        ClearBubble();
    
        if (evt.target.type == 3) {
            console.log(evt.type, evt.target.getPosition());
            console.log(markerContainer.length);
            var index;
            for (i = 0; i < dataPosition.length; ++i) {
                if (dataPosition[i].lat == evt.target.getPosition().lat && dataPosition[i].lng == evt.target.getPosition().lng) {
                    console.log('found');
                    index = i;
                    break;
                }
            }

            console.log(dataAddress[index]);
            console.log(dataStoreName[index]);
            console.log(dataStoreTel[index]);

            // Create an info bubble object at a specific geographic location:
            var bubble = new H.ui.InfoBubble({ lng: dataPosition[index].lng, lat: dataPosition[index].lat }, {
                content: '店名：<div>' + dataStoreName[index] + '</div>' + '電話：<div>' + dataStoreTel[index] + '</div>' + '住址：<div>' + dataAddress[index] + '</div>'
            });

            // Add info bubble to the UI:
            ui.addBubble(bubble);
            bubbleContainer.push(bubble);
        }
        
    });


    restaurantMap.addEventListener('mapviewchangeend', function() {
        oldMapZoom = restaurantMap.getZoom(); 

        magicNumber = magicDiff + (18 - oldMapZoom) * (18 - oldMapZoom) * magicDiff;

        console.log(oldMapZoom);
        console.log(magicNumber);

        if(oldMapZoom > 10)
        {
            RefreshMarker();
        }
    });

    // Define a variable holding SVG mark-up that defines an icon image:
    var svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white">R</text></svg>';

    // Create an icon, an object holding the latitude and longitude, and a marker:
    var icon = new H.map.Icon(svgMarkup),
        coords = {lng: 121.521, lat: 25.04885},
        marker = new H.map.Marker(coords, {icon: icon});

    // restaurantMap.addObject(marker);
    // restaurantMap.setCenter(coords);

    // Define a callback function to process the geocoding response:
    var onRestaurantResult = function(result) {
        var markerLocations = result.Response.View[0].Result,
            position,
            marker;
        // Add a marker for each location found
        for (i = 0;  i < markerLocations.length; i++) {
            position = {
                lat: markerLocations[i].Location.DisplayPosition.Latitude,
                lng: markerLocations[i].Location.DisplayPosition.Longitude
            };

            // marker = new H.map.Marker(position);
            var icon = new H.map.Icon(svgMarkup),
                marker = new H.map.Marker(position, {icon: icon});

            restaurantMap.addObject(marker);
            restaurantMap.setCenter(position);
        }
    };
    /*
    // Create the parameters for the geocoding request:
    var geocodingParams = {
        searchText: '臺北市南港區三重路23號'
    };

    // Get an instance of the geocoding service:
    var geocoder = platform.getGeocodingService();

    // Call the geocode method with the geocoding parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    geocoder.geocode(geocodingParams, onRestaurantResult, function(e) {
        alert(e);
    });
    */

    function SearchRestaurant(address) {
        // Create the parameters for the geocoding request:
        var geocodingParams = {
            searchText: address
        };

        // Get an instance of the geocoding service:
        var geocoder = platform.getGeocodingService();

        // Call the geocode method with the geocoding parameters,
        // the callback and an error callback function (called if a
        // communication error occurs):
        geocoder.geocode(geocodingParams, onRestaurantResult, function(e) {
            alert(e);
        });

    };

    // alert('@Model[1].Address');

    function RefreshMarker() {
        markerLocations = [];
        dataPosition.sort(function(a, b){return 0.5 - Math.random()});
        for (i = 0; i < dataPosition.length; ++i) {

            //alert(dataPosition[i].lat);
            //alert(dataPosition[i].lng);

            //alert(center.lat);
            //alert(center.lng);

            // alert(parseFloat(dataPosition[i].lng) + magicNumber);
            if (parseFloat(dataPosition[i].lng) + magicNumber > center.lng &&
                parseFloat(dataPosition[i].lng) - magicNumber < center.lng &&
                parseFloat(dataPosition[i].lat) + magicNumber > center.lat &&
                parseFloat(dataPosition[i].lat) - magicNumber < center.lat) {

                markerLocations.push(dataPosition[i]);
            }

            if(markerLocations.length > maxMarker)
            {
                break;
            }
        }

        console.log(dataPosition.length);
        console.log(markerLocations.length);

        for(i = 0; i < markerContainer.length; ++i)
        {
            restaurantMap.removeObject(markerContainer[i]);
            markerContainer.shift();
            --i;
        }

        // Add a marker for each location found
        for (i = 0; i < markerLocations.length; i++) {
            // marker = new H.map.Marker(position);
            var icon = new H.map.Icon(svgMarkup),
                marker = new H.map.Marker(markerLocations[i], { icon: icon });

            markerContainer.push(marker);
            restaurantMap.addObject(marker);
            // restaurantMap.setCenter(center);
        }

    };

    RefreshMarker();
            }
        }
}
);




/**
 * ===============================================
 *
 * APPLICATION ROUTES
 *
 * ===============================================
 *
 */
const productDefaultRoutes = [
    { path: '/', component: HomeView },
    { path: '/home', component: HomeView },
    { path: '/language', component: LanguageView },
    { path: '/setup', component: SetupView },
    { path: '/airport', component: AirportNavView },
    { path: '/metro', component: MetroNavView },
    { path: '/taxi', component: UberNavView },
    { path: '/hotel', component: DestinationView },
    { path: '/feedback', component: FeedbackView },
    { path: '/restaurant', component: RestaurantView },
];

const router = new VueRouter({
    routes: productDefaultRoutes
});


/**
 * ===============================================
 *
 * MAIN APPLICATION 
 *
 * ===============================================
 *
 */
const app = window._app =  new Vue({
    el: "#app",
    router,

    data: {
        tagLine: "Always on the right track",
        latitude: 0,
        longitude: 0,
        isMapVisible: true
    },

    computed: {
        location: function() {
            return "Taiwan";
        }
    },

    methods: {
        getGeoLocation: function () {
            var that = this;
            navigator.geolocation.getCurrentPosition(function (position) {
                that.longitude = position.coords.longitude;
                that.latitude = position.coords.latitude;
            });
        },
        raiseEvent: function() {
            var event = new CustomEvent('location', {detail: {lat: this.$data.latitude, lng: this.$data.longitude}});
            document.dispatchEvent(event);
        }
        
    },

    mounted: function() {
        this.getGeoLocation();
    },

    watch: {
        latitude: function(v) { this.raiseEvent(); }, 
        longitude: function(v) { this.raiseEvent(); }
    }

    


});

