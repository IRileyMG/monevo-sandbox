import{createRouter, createWebHistory} from "vue-router";
import DefaultLayout from "@/js/layouts/DefaultLayout.vue";
import HomeView from "@/js/views/HomeView.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: "",
                name: "Home", 
                component: HomeView
            },
            {
                path: '/test',
                name: 'Test',
                component: function () {
                    return import(/* webpackChunkName: "test" */ '@/js/views/TestView.vue')
                }, 
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      // always scroll to top
      return { top: 0 }
    },
});

export default router;