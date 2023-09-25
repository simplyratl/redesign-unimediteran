<script setup lang="ts">
import SidebarCard from '../SidebarCard.vue'

const applications = [
  'Prijava za avgustovski rok',
  'Prijava za septembarski ispitni rok',
  'Pisanje mejlova'
]
</script>

<template>
  <SidebarCard title="Prijave">
    <ul class="text-sm">
      <li v-for="(application, index) in applications" :key="application">
        <RouterLink :to="`/course/${application}`"> {{ index + 1 }}. {{ application }} </RouterLink>
      </li>
    </ul>
  </SidebarCard>
</template>
