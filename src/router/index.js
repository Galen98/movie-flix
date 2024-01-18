import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviePage from '../views/MoviePage.vue'
import TvPage from '../views/TvPage.vue'
import MovieList from '../views/MovieList.vue'
import TvList from '../views/TvList.vue'
import WatchList from '../views/WatchList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: WatchList
    },
    {
      path: '/movie/:id',
      name: 'movies',
      component: MoviePage
    },
    {
      path: '/movie',
      name: 'movie',
      component: MovieList
    },
    {
      path: '/tv/:id',
      name: 'tv',
      component: TvPage
    },
    {
      path: '/tv',
      name: 'tvlist',
      component: TvList
    },
  ]
})

export default router
