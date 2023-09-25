<script setup lang="ts">
const { title } = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-md p-3 shadow">
    <div class="border-b mb-2">
      <h2 class="text-lg pb-1 font-semibold">{{ title }}</h2>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>
