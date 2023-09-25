import type { KeycloakProfile } from 'keycloak-js'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user: Ref<null | KeycloakProfile> = ref(null)

  const setUser = (newUser: KeycloakProfile) => {
    user.value = newUser
  }

  return { user, setUser }
})
