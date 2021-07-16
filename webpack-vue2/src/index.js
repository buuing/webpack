import Vue from 'vue'
import App from './app.vue'

console.log('vue2', App)


new Vue({
  render: h => h(App)
}).$mount('#app')
