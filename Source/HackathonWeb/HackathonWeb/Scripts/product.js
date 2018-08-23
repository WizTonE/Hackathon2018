
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
        template:
            '<div class="setup-container"><div>airport nav view</div></div>'
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
            '<div class="setup-container"><div><iframe width="100%" height="1500" src="https://m.uber.com/?client_id=2dv2-1SM7rwg9_ogbq3Sxe4BYuNQrDxi&action=setPickup&pickup[latitude]=25.077883&pickup[longitude]=121.5727394&pickup[nickname]=CurrentPlace&dropoff[latitude]=25.0596028&dropoff[longitude]=121.5602683&dropoff[nickname]=Home" frameborder="0" allowfullscreen></iframe></div></div>'
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
const app = new Vue({
    el: "#app",
    router,

    data: {
        tagLine: "Always on the right track"

    },

    computed: {
        location: function() {
            return "Taiwan";
        }
    }
});

