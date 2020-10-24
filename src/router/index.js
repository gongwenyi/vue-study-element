import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "./../layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        meta: { title: "home" },
        // meta: { title: "首页" },
        icon: "el-icon-document",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue")
      }
    ]
  },
  {
    path: "/test",
    component: Layout,
    name: "Test",
    meta: { title: "测试多级菜单" },
    icon: "el-icon-document",
    children: [
      {
        path: "/test/test1",
        name: "Test1",
        meta: { title: "测试1" },
        component: () =>
          import(
            /* webpackChunkName: "test1" */ "../views/test/test1/Test1.vue"
          ),
        children: [
          {
            path: "/test/test1/test1-1",
            name: "Test1-1",
            meta: { title: "测试1-1" },
            component: () =>
              import(
                /* webpackChunkName: "test1-1" */ "../views/test/test1/Test1-1.vue"
              )
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    hidden: true,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  }
];

const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/document",
    children: [
      {
        path: "/document",
        name: "Document",
        meta: { title: "文档" },
        icon: "el-icon-document",
        component: () =>
          import(/* webpackChunkName: "document" */ "../views/Document.vue")
      }
    ]
  },
  {
    path: "/order",
    component: Layout,
    meta: { title: "订单管理", roles: ["admin", "editer"] },
    icon: "el-icon-location",
    children: [
      {
        path: "/order/list",
        name: "OrderList",
        meta: { title: "订单列表" },
        component: () =>
          import(/* webpackChunkName: "orderList" */ "../views/order/List.vue")
      },
      {
        path: "/order/add",
        name: "OrderAdd",
        meta: { title: "新增订单", roles: ["admin"] },
        component: () =>
          import(/* webpackChunkName: "orderAdd" */ "../views/order/Add.vue")
      },
      {
        path: "/order/detail/:id",
        name: "OrderDetail",
        meta: { title: "订单详情" },
        hidden: true,
        component: () =>
          import(
            /* webpackChunkName: "orderDetail" */ "../views/order/Detail.vue"
          )
      }
    ]
  },
  {
    path: "/product",
    component: Layout,
    meta: { title: "商品管理", roles: ["admin", "editer"] },
    icon: "el-icon-location",
    children: [
      {
        path: "/product/list",
        name: "ProductList",
        meta: { title: "商品列表" },
        component: () =>
          import(
            /* webpackChunkName: "productList" */ "../views/product/List.vue"
          )
      },
      {
        path: "/product/add",
        name: "ProductAdd",
        meta: { title: "新增商品", roles: ["admin"] },
        component: () =>
          import(
            /* webpackChunkName: "productAdd" */ "../views/product/Add.vue"
          )
      },
      {
        path: "/product/detail/:id",
        name: "ProductDetail",
        meta: { title: "商品详情" },
        hidden: true,
        component: () =>
          import(
            /* webpackChunkName: "productDetail" */ "../views/product/Add.vue"
          )
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/i18n",
    children: [
      {
        path: "/i18n",
        name: "I18n",
        meta: { title: "i18n" },
        icon: "el-icon-document",
        component: () =>
          import(/* webpackChunkName: "i18n" */ "../views/I18n.vue")
      }
    ]
  },
  {
    path: "/components",
    component: Layout,
    meta: { title: "组件" },
    icon: "el-icon-location",
    children: [
      {
        path: "/components/sticky",
        name: "Sticky",
        meta: { title: "sticky" },
        icon: "el-icon-document",
        component: () =>
          import(
            /* webpackChunkName: "sticky" */ "../views/components/Sticky.vue"
          )
      },
      {
        path: "/components/backToTop",
        name: "BackToTop",
        meta: { title: "backToTop" },
        icon: "el-icon-document",
        component: () =>
          import(
            /* webpackChunkName: "backToTop" */ "../views/components/BackToTop.vue"
          )
      }
    ]
  },
  {
    path: "/404",
    name: "NotFound",
    hidden: true,
    component: () => import(/* webpackChunkName: "404" */ "../views/404.vue")
  },
  // 404页面必须放在最后面
  { path: "*", redirect: "/404", hidden: true }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export { routes, asyncRoutes };
export default router;
