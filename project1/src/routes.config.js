import home from './components/home.vue';
import follow from './components/follow.vue';
import column from './components/column.vue';
import user from './components/user.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
import article from './components/article.vue';

const routes = [
    {path:'/home',component:home},
    {path:'/follow',component:follow},
    {path:'/column',component:column},
    {path:'/user',component:user},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/article/:aid',component:article},
    {path:'/',redirect:'/home'}
];

export default routes;