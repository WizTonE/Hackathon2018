
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
            name: "WELCOME"
        }

    },
    template: '<div>{{ name }}</div>'


});


const LanguageView = Vue.component('language-view',
    {
        data: function() {
            return {

                options: [ "ENGLISH", "JAPANESE", "KOREA"]

            }
        },
        template: '<div><div v-for="option in options"> {{ option }}</div></div>'
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
    { path: '/language', component: LanguageView }
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

