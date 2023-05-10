import type { App } from 'vue'
import type { Router } from 'vue-router'

interface IUserModuleParams {
  app: App<Element>
  router: Router
}

export type UserModule = (ctx: IUserModuleParams) => void
