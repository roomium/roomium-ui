// Import Semua Component disini
/**
 * Contoh: 
 * */

import Vue from 'vue'
import Header from './Header.vue'
[
    Header,
].forEach(c=>{
    Vue.component(c.name,c)
})