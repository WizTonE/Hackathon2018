
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
    { path: '/feedback', component: FeedbackView }
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

