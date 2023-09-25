<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/shared/AppHeader.vue'
</script>

<template>
  <main class="max-w-6xl mx-auto lg:p-0 px-8">
    <AppHeader />
    <div class="mt-3">
      <component :is="$route.meta.layout">
        <RouterView />
      </component>
    </div>
  </main>
</template>
