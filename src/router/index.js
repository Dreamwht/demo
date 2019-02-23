import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Data from '@/components/Data'
import History from '@/components/History'
import Chart from '@/components/Chart'
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/chart',
          name: 'chart',
          component: Chart
        },
        {
          path: '/data',
          name: 'data',
          component: Data
        },
        {
          path: '/history',
          name: 'history',
          component: History
        }
      ]
    }
  ]
})
