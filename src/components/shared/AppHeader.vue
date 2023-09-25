<script setup lang="ts">
import keycloak from '@/keycloak/keycloak'
import { useAuthStore } from '@/store/auth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>

<template>
  <header class="mt-4 rounded-lg overflow-hidden">
    <div class="bg-primary w-full h-12 px-6 flex items-center">
      <div class="text-white flex gap-3 justify-end w-full text-sm">
        <p>{{ user?.firstName }} {{ user?.lastName }}</p>
        <button @click="keycloak.logout()" class="text-gray-300">Odjavi se</button>
      </div>
    </div>
    <div>
      <img
        src="http://e-fit.unimediteran.net/theme/unimediteran/pix/banner.jpg"
        alt="banner"
        class="w-full h-full object-cover"
      />
    </div>
  </header>
</template>
