import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
/* 路由模块 */
import DemoPage from '../views/demo'
import redirectPage from '../views/redirect'
import dashboardPage from '../views/dashboard'
import loginPage from '../views/login'
import err404Page from '../views/errorPage/404'
import err401Page from '../views/errorPage/401'
import errorLogPage from '../views/errorLog'
import demoFormPage from '../views/demoForm'
/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
 **/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: redirectPage
      }
    ]
  },
  // 默认页面
  {
    path: '',
    component: Layout,
    redirect: '/demoFormPage/demoFormPage'
  },
  // 带左侧导航面板
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home',
        component: dashboardPage,
        name: 'home',
        meta: { title: '首页', icon: 'dashboard', noCache: true }
      }
    ]
  },
  // 不带侧边导航配置
  {
    path:'/demo',
    component:DemoPage,
    hidden: true
  },
  // 常用表单页面演示
  {
    path: '/demoFormPage',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'demoFormPage',
        component: demoFormPage,
        name: 'demoFormPage',
        meta: { title: '表单演示', icon: 'bug',affix: true }
      }
    ]
  },

  {
    path: '/login',
    component: loginPage,
    hidden: true
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'ErrorPages',
    meta: {
      title: '错误页面',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: err401Page,
        name: '401',
        meta: { title: '401页面', noCache: true }
      },
      {
        path: '404',
        component: err404Page,
        name: '404',
        meta: { title: '404页面', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'log',
        component: errorLogPage,
        name: 'ErrorLog',
        meta: { title: '错误日志', icon: 'bug' }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/zh/',
        meta: { title: '外链', icon: 'link' }
      }
    ]
  },
  {
    path: '/404',
    component: err404Page,
    hidden: true
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
