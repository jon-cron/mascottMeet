import { dev } from './env.js'
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'

class AppState extends EventEmitter {
  user = {}
  /** @type {import('./Models/Account.js').Account} */
  // @ts-ignore
  account = {}
 
  // values = []
   /** @type {import('./Models/Post').Post[]} */
   posts = []
   /** @type {import('./Models/Post').Post|null} */
   activePost = null
  socketData = []
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

if (dev) {
  // @ts-ignore
  window.appState = appState
}
