// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Shop from './components/Shop.vue'




const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', component: Home },
        { path:'/about', component: About },
        { path:'/shop', component: Shop },
        
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')
