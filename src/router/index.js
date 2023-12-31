//导入router的路由模式
import { createRouter, createWebHistory } from "vue-router";
//直接导入布局页面
import Layout from "@/layout/layout.vue";

//路由规则
const routes = [
  {
    path: "/",
    redirect: "/home", // 设置默认重定向到login页面
  },
  {
    path: "/home",
    component: Layout,
    icon: "odometer",
    children: [
      //配置子页面
      {
        path: "/home", //视图,访问子页面的时候会带上layout布局页面
        name: "概要",
        icon: "odometer", //图标
        meta: { title: "概要", requireAuth: true },
        component: () => import("@/views/home/Home.vue"), //视图组件
      },
    ],
  },
  {
    path: "/utils",
    name: "工具组",
    component: Layout,
    icon: "odometer",
    children: [
      //配置子页面
      {
        path: "/pod", //视图,访问子页面的时候会带上layout布局页面
        name: "pod",
        icon: "odometer", //图标
        meta: { title: "pod", requireAuth: true },
        component: () => import("@/views/pod/Pod.vue"), //视图组件
      },
      {
        path: "/test", //视图,访问子页面的时候会带上layout布局页面
        name: "test",
        icon: "odometer", //图标
        meta: { title: "test", requireAuth: true },
        component: () => import("@/views/pod/test.vue"), //视图组件
      },
    ],
  },
];

//创建路由实例
const router = createRouter({
  //hash模式：createWebHashHistory
  //history模式：createWebHistory
  history: createWebHistory(),
  routes,
});

//抛出路由实例，在main.js中引用
export default router;
