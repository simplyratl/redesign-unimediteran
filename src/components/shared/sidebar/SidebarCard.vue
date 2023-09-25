<script setup lang="ts">
const { title } = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="bg-white rounded-md shadow overflow-hidden border border-neutral-300">
    <div class="border-b px-3 py-1">
      <h2 class="text-lg font-semibold">{{ title }}</h2>
    </div>

    <div class="p-3">
      <slot />
    </div>
  </div>
</template>
