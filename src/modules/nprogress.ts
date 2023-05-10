import NProgress from 'nprogress'
import { type UserModule } from '@/types'
import 'nprogress/nprogress.css'

export const install: UserModule = ({ router }) => {
  NProgress.inc(0.2)
  NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
  router.beforeEach((to, from) => {
    if (to.path !== from.path)
      NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
