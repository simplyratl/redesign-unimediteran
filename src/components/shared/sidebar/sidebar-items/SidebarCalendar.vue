<script setup lang="ts">
import { computed, ref } from 'vue'
import SidebarCard from '../SidebarCard.vue'
import { Calendar } from 'v-calendar'

const plans = ref([
  {
    description: 'Pocetak akademske nove godine.',
    dates: new Date('2023-10-18'),
    color: 'red'
  },
  {
    description: 'Poslednji dan septembarskog roka.',
    dates: new Date('2023-10-18'),
    color: 'red'
  },
  {
    description: 'Poslednji dan upisa.',
    dates: new Date('2023-10-18'),
    color: 'red'
  }
])

const attributes = computed(() => [
  ...plans.value.map((plan) => ({
    dates: plan.dates,
    highlight: {
      color: 'orange',
      fillMode: 'light'
    },
    popover: true,
    customData: plan
  }))
])
</script>

<template>
  <SidebarCard title="Kalendar">
    <Calendar :attributes="attributes" borderless title-position="left" locale="sr-Latn"
      ><template #day-popover="{ dayTitle, attributes, day, format, masks }">
        <div class="text-gray-800">{{ dayTitle }}</div>

        <ul>
          <li v-for="{ key, customData } in attributes" :key="key" class="block text-sm px-2">
            {{ customData.description }}
            <div class="text-gray-400 text-xs">
              {{ format(day.date, masks.dayPopover) }}
            </div>
          </li>
        </ul>
      </template></Calendar
    >
  </SidebarCard>
</template>

<style>
.vc-title {
  font-size: 16px !important;
}

.vc-pane {
  min-width: 100%;
}
</style>
