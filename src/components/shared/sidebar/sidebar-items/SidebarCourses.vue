<script setup lang="ts">
import SidebarCard from '../SidebarCard.vue'

const courses = [
  'Sigurnost i zaštita IS',
  'Digitalni marketing',
  'Operativni sistemi (Serverski operativni sistemi)'
]
</script>

<template>
  <SidebarCard title="Kursevi">
    <ul class="text-sm">
      <li v-for="(course, index) in courses" :key="course">
        <RouterLink :to="`/course/${course}`"> {{ index + 1 }}. {{ course }} </RouterLink>
      </li>
    </ul>
  </SidebarCard>
</template>
