// 过滤路由，用于在侧边栏显示
export function filterRoutes(routes) {
  let result = [];
  for (let item of routes) {
    if (!item.hidden) {
      // 如果一级路由没有配置meta信息，或者meta里面没有title，并且只有一个二级路由，说明一级路由不需要显示在侧边栏，直接显示二级路由
      if (
        (!item.meta || !item.meta.title) &&
        item.children &&
        item.children.length === 1
      ) {
        item = { ...item.children[0] };
      }
      if (item.children && item.children.length) {
        item.children = filterRoutes(item.children);
      }
      result.push(item);
    }
  }
  return result;
}

// 获取当前角色有权限的路由列表
export function filterRoutesByRole(routes, role) {
  const result = [];
  for (let item of routes) {
    if (hasPermission(item, role)) {
      if (item.children) {
        item.children = filterRoutesByRole(item.children, role);
      }
      result.push(item);
    }
  }
  return result;
}

// 根据路由 mete: {roles: [] } 配置的信息，判断当前角色是否有权限
function hasPermission(route, role) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(role);
  }
  return true;
}
