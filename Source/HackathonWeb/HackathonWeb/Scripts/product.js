
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
            return {}
        },

        mounted: function () {
            // call map init on layout 
            window.setupHereMap(this.mapDivId);

        },

        template: '<div :id="mapDivId" class="here-map-box"></div>'

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
            }
        },
        template:
            '<div class="setup-container">\
                <div>Setup your address here. Show HERE(tm) map here. Show the route here.</div>\
                <here-map1 map-div-id="setupViewMap"></here-map1>\
            </div>'
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
                <div >\
                  <img src="../Scripts/assets/mrt-Zhongshan.png" width="100%" height="100%"> \
                  1.出口電梯：<br>出口4（南京西路北側之淡水線線形公園內）<br>出口5（南京西路與赤峰街交叉東北隅）<br>出口6（南京西路與赤峰街交叉東南隅）<br>2.月臺電梯：<br>淡水信義線：大廳層中央<br>松山新店線：大廳層東側<br>\
                </div>\
                <way-nav-view current="0"></way-nav-view>\
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
                <div>\
                    <div class="setup-container"><div><iframe width="100%" height="1500" src="https://m.uber.com/?client_id=2dv2-1SM7rwg9_ogbq3Sxe4BYuNQrDxi&action=setPickup&pickup[latitude]=25.077883&pickup[longitude]=121.5727394&pickup[nickname]=CurrentPlace&dropoff[latitude]=25.0596028&dropoff[longitude]=121.5602683&dropoff[nickname]=Home" frameborder="0" allowfullscreen></iframe></div></div>\
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
                <div>destination view</div>\
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
            '<div class="setup-container"><div>feedback view</div></div>'
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
                <way-nav-view current="4"></way-nav-view>\
            </div>'
    });




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
        longitude: 0

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
        }
    },

    mounted: function() {
        this.getGeoLocation();
    }


});

