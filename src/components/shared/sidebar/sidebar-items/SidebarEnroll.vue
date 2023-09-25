<script setup lang="ts">
import { ref } from 'vue'
import SidebarCard from '../SidebarCard.vue'

const enrolled = ref(false)
</script>

<template>
  <SidebarCard title="Kurs">
    <button @click="enrolled = !enrolled" class="text-primary hover:underline cursor-pointer">
      {{ !enrolled ? 'Upisi se na kurs' : 'Ispisi se sa kursa' }}
    </button>
  </SidebarCard>
</template>
