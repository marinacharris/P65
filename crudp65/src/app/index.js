//alert("hola mundo con VUE");
import Vue from 'vue';
import App from './componentes/App.vue'
new Vue({
    render: h => h(App)
}).$mount('#app')