import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home/index",
    name: "Home",
    meta: {
      title: "首页",
      icon: "dashboard"
    },
    children: [
      {
        path: "/home/index",
        component: () => import("@/views/Home/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "首页", icon: "user" }
      }
    ]
  },
  {
    path: "/strategy",
    component: Layout,
    name: "Strategy",
    children: [
      {
        path: "/Strategy/index",
        component: () => import("@/views/Strategy/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "战略目标定义", icon: "user" }
      }
    ]
  },
  {
    path: "/ability",
    component: Layout,
    name: "Ability",
    children: [
      {
        path: "/Ability/index",
        component: () => import("@/views/Ability/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "能力目标定义", icon: "user" }
      }
    ]
  },
  {
    path: "/abilityAnalysis",
    component: Layout,
    name: "AbilityAnalysis",
    children: [
      {
        path: "/abilityAnalysis/index",
        component: () => import("@/views/AbilityAnalysis/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "能力目标分析", icon: "user" }
      }
    ]
  },
  {
    path: "/projectAnalysis",
    component: Layout,
    name: "ProjectAnalysis",
    children: [
      {
        path: "/projectAnalysis/index",
        component: () => import("@/views/ProjectAnalysis/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "项目匹配分析", icon: "user" }
      }
    ]
  },
  {
    path: "/combinationAnalysis",
    component: Layout,
    name: "CombinationAnalysis",
    children: [
      {
        path: "/combinationAnalysis/index",
        component: () => import("@/views/CombinationAnalysis/index"), // Parent router-view
        name: "Menu1",
        meta: { title: "项目投资组合分析", icon: "user" }
      }
    ]
  },
  // {
  //   path: "/",
  //   component: Layout,
  //   redirect: "/CaseManagement/CatalogManagement/id1",
  //   name: "CaseManagement",
  //   meta: {
  //     title: "数据接入",
  //     icon: "dashboard"
  //   },
  //   children: [
  //     {
  //       path: "CaseManagement",
  //       name: "CaseManagement",
  //       component: () => import("@/views/CaseManagement/index"),
  //       meta: {
  //         title: "基础数据"
  //       },
  //       children: [
  //         {
  //           path: "CatalogManagement/id1",
  //           name: "management1",
  //           component: () =>
  //             import("@/views/CaseManagement/CatalogManagement/id1"),
  //           meta: { title: "id1" }
  //         },
  //         {
  //           path: "CatalogManagement/id2",
  //           name: "management2",
  //           component: () =>
  //             import("@/views/CaseManagement/CatalogManagement/id2"),
  //           meta: { title: "id2", icon: "" }
  //         }
  //       ]
  //     },
  //     {
  //       path: "CaseManagement/CaseEntryMaintenance",
  //       name: "CaseEntryMaintenance",
  //       component: () =>
  //         import("@/views/CaseManagement/CaseEntryMaintenance/index"),
  //       meta: {
  //         title: "态势数据",
  //         icon: ""
  //       }
  //     },
  //     {
  //       path: "CaseManagement/SecurityManagement",
  //       name: "SecurityManagement",
  //       component: () =>
  //         import("@/views/CaseManagement/SecurityManagement/index"),
  //       meta: {
  //         title: "成果数据",
  //         icon: ""
  //       }
  //     },
  //     {
  //       path: "CaseManagement/UserPermission",
  //       name: "UserPermission",
  //       component: () => import("@/views/CaseManagement/UserPermission/index"),
  //       meta: {
  //         title: "数据监控",
  //         icon: ""
  //       }
  //     }
  //   ]
  // },

  // {
  //   path: "/nested",
  //   component: Layout,
  //   name: "Nested",
  //   children: [
  //     {
  //       path: "/nested/menu1",
  //       component: () => import("@/views/nested/menu1/index"), // Parent router-view
  //       name: "Menu1",
  //       meta: { title: "首页", icon: "user" }
  //     }
  //   ]
  // },

  // {
  //   path: "/tree",
  //   component: Layout,
  //   name: "tree",
  //   children: [
  //     {
  //       path: "/tree",
  //       component: () => import("@/views/tree"), // Parent router-view
  //       name: "Menu1",
  //       meta: { title: "指标管理", icon: "tree" }
  //     }
  //   ]
  // },

  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
