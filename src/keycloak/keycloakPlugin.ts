import type { App } from 'vue'
import keycloak from './keycloak'
import { useAuthStore } from '@/store/auth'
import axios from 'axios'

export default {
  install: (app: App) => {
    const authStore = useAuthStore()

    keycloak
      .init({
        onLoad: 'login-required',
        checkLoginIframe: false
      })
      .then(async (auth) => {
        if (auth) {
          try {
            const res = await keycloak.loadUserProfile()

            authStore.setUser(res)
          } catch (error) {
            console.error(error)
          }
          console.log('Authenticated')
        } else {
          console.log('Not Authenticated')
        }
      })
  }
}
