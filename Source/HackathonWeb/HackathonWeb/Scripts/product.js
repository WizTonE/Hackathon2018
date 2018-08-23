
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

            iconNames: ["airport", "metro", "taxi", "hotel"],
            positionNames: ["Taiwan Taoyuan International Airport", "Taipei Metro System", "Accessible Taxi Driver", "Your Hotel"],
            positionAddress: ["No. 9, Hangzhan S. Rd., Dayuan Dist., Taoyuan City", "On The Right Track", "By Your Side", "Your Hotel Address"]

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

    methods: {},

    template: '<div class="way-nav-box">\
    <div class="current-position">\
        <div :class="currentIconName"></div>\
        <div>\
            <div class="position-name">{{ currentPositionName }}</div>\
            <div class="position-address">{{ currentPositionAddress }}</div>\
        </div>\
    </div>\
    <div class="position-selection">\
        <div class="item airport" :class="{active : current == 0}"><div class="pos0"></div><div class="icon-plane">P</div></div>\
        <div class="item metro" :class="{active : current == 1}"><div class="pos1"></div><div class="icon-metro">M</div></div>\
        <div class="item taxi" :class="{active : current == 2}"><div class="pos2"></div><div class="icon-taxi">T</div></div>\
        <div class="item hotel" :class="{active : current == 3}"><div class="pos3"></div><div class="icon-hotel">H</div></div>\
    </div>\
    <div class="location-details">\
        <span class="icon-toilet"/>\
        <span class="icon-elevator"/>\
    </div>\
    </div>\
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
                options: ["ENGLISH", "JAPANESE", "KOREA"]

            }
        },
        template:
            '<div class="language-container"><div class="language-item" v-for="option in options"> {{ option }}</div></div>'
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
            '<div class="setup-container"><div>Setup your address here. Show HERE(tm) map here. Show the route here.</div></div>'
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
            '<div class="setup-container"><div>metro nav view</div></div>'
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
            '<div class="setup-container"><div>uber nav view</div></div>'
    });


/**
 *
 *
 * Uber導航
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
            '<div class="setup-container"><div>destination view</div></div>'
    });


/**
 *
 *
 * Uber導航
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
            '<div class="setup-container"><div>restaurant view</div></div>'
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
    { path: '/home', component: HomeView },
    { path: '/language', component: LanguageView },
    { path: '/setup', component: SetupView },
    { path: '/airport', component: AirportNavView },
    { path: '/metro', component: MetroNavView },
    { path: '/uber', component: UberNavView },
    { path: '/destination', component: DestinationView },
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

