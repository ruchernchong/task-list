import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    navs: any[]
    links: any[]
    tasks: any[]
    message: any
    filter:any
    query: String
  }

interface ComponentCustomProperties {
  $store: Store<State>
}
}
