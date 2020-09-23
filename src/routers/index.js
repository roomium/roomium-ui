import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

function beforeEach(to,from,next){
    if(to.meta.title){
        document.title = "Roomium - "+to.meta.title;
    }else{
        document.title = "Roomium";
    }
    next();
}

var route = new VueRouter({
    mode: 'history',
    routes: require('./routes.js')
});

route.beforeEach(beforeEach)

export default route;