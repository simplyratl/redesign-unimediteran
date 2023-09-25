<script setup lang="ts">
import NotificationItem from './NotificationItem.vue'
</script>

<template>
  <div class="">
    <h2 class="text-2xl font-semibold">Obavještenja</h2>

    <ul class="flex flex-col gap-3 mt-4">
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
    </ul>
  </div>
</template>
