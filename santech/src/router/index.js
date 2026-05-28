import{createRouter, createWebHistory} from'vue-router'
import About from '../views/About.vue'
import home from '../views/Home.vue';
import Services from '../views/Services.vue';
import contact from '../views/contact.vue';
import photos from '../views/photos.vue';
import videos from '../views/videos.vue';
const routes = [
    {
        path:'/',
        name: "home",
        component: home,
    },
    {
        path:"/about",
        name:"about",
        component:About,
    },
    {
        path:"/services",
        name:"services",
        component:Services,
    },
    {
        path:"/contact",
        name:"contact",
        component:contact,
    },
        {
        path:"/photos",
        name:"photos",
        component:photos,
    },
    {
        path:"/videos",
        name:"videos",
        component:videos,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router; 