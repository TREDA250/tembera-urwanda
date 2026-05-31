import{createRouter, createWebHistory} from'vue-router'
import About from '../views/About.vue';
import home from '../views/Home.vue';
import Services from '../views/Services.vue';
import contact from '../views/contact.vue';
import photos from '../views/photos.vue';
import videos from '../views/videos.vue';
import Gallery from '../views/Gallery.vue';
import Destination from '../views/Destination.vue';
import NorthernProvince from '../views/NorthernProvince.vue';
import SouthernProvince from '../views/southernprovince.vue';
import EasternProvince from '../views/easternprovince.vue';
import WesternProvince from '../views/westernprovince.vue';
import KigaliCity from '../views/kigalicity.vue';

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
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    },
    {
        path: '/destination',
        name: 'Destination',
        component: Destination
    },
     { 
       path: '/northern',
       name: 'NorthernProvince',
       component:NorthernProvince
     },
     { 
       path: '/southernprovince',
       name: 'SouthernProvince',
       component:SouthernProvince
     },
     { 
       path: '/easternprovince',
       name: 'EasternProvince',
       component:EasternProvince
     },
     { 
       path: '/westernprovince',
       name: 'WesternProvince',
       component:WesternProvince,
     },
     { 
       path: '/kigalicity',
       name: 'KigaliCity',
       component:KigaliCity,
     },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router; 