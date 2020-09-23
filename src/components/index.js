// Import Semua Component disini
/**
 * Contoh: 
 * */

import Vue from 'vue'
import NavBar from './NavBar.vue'
[
    NavBar,
].forEach(c=>{
    Vue.component(c.name,c)
})