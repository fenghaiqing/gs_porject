import main from 'views/main.vue';

const routes = [
    { path: '/', component: main },
    { path: '/main', component: main }
];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

var vue=new Vue({
    router,
    data:{
        current:0
    },
    methods:{
        addClass:function (index) {
            this.current=index;
        }
    }
}).$mount('#sd_index')
