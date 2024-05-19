import Quiz from './views/quiz'
import Gallery from './views/gallery'
import Learn from './views/learn'
import Home from './views/home'
import NotFound from './views/not-found'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Quiz',
      path: '/quiz',
      component: Quiz,
    },

    {
      name: 'Gallery',
      path: '/gallery',
      component: Gallery,
    },
    {
      name: 'Learn',
      path: '/learn',
      component: Learn,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: '404 - Not Found',
      path: '/:pathMatch(.*)*',
      component: NotFound,
      fallback: true,
    },
  ],
})

router.beforeEach((to, from, next) => {
  console.log(from.name)
  // Check if the user is navigating to the home page
  if (!from.name) {
    // Redirect to the home page
    from.name = 'Refresh'
    next('/')
  } else {
    // Continue with the navigation
    next()
  }
})

export default router
