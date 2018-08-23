
/**
 * ===============================================
 *
 * VUE COMPONENTS
 *
 * ===============================================
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


const SetupView = Vue.component('setup-view',
    {
        data: function () {
            return {

                

            }
        },
        template: '<div class="setup-container"><div>Setup your address here. Show HERE(tm) map here. Show the route here.</div></div>'
    })

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
    { path: '/setup', component: SetupView }
];

const router = new VueRouter({
    routes: productDefaultRoutes,
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

