import indexCategory from './components/pages/categories/index.vue';
import createCategory from './components/pages/categories/create.vue';
import editCategory from './components/pages/categories/edit.vue';
import Home from './components/Home.vue';


export const routes = [
  {
    path: '',
    component: Home,
    name: 'Home'
  },
  {
    path: '/index',
    component: Home
  },
  {
    path: '/category/create',
    component: createCategory
  },
  {
    path: '/category/index',
    component: indexCategory
  },
  {
    path: '/category/:id/edit',
    component: editCategory
  },

];

