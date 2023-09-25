<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter, type RouteLocationNormalized } from 'vue-router'

const route = useRoute()
const router = useRouter()

const breadcrumb = ref<
  {
    name: string
    url: string
  }[]
>([])

const updateBreadcrumb = (currRoute: RouteLocationNormalized | undefined) => {
  const route = currRoute || router.currentRoute.value

  let breadcrumbTemp = [
    {
      name: 'Početna',
      url: '/'
    }
  ]

  if (route.params.title) {
    breadcrumbTemp.push({
      name: route.params.title as string,
      url: `/course/${route.params.title}`
    })
  }

  breadcrumb.value = breadcrumbTemp
}

onMounted(() => {
  updateBreadcrumb(undefined)
})

router.beforeEach((to, from) => {
  // Call your breadcrumb update function whenever navigation occurs.
  updateBreadcrumb(to)
})
</script>

<template>
  <div class="flex gap-2 items-center mb-4">
    <div v-for="item in breadcrumb" :key="item.name" class="flex gap-2">
      <RouterLink :to="`${item.url}`">{{ item.name }}</RouterLink>
      <span v-if="item !== breadcrumb[breadcrumb.length - 1]">/</span>
    </div>
  </div>
</template>
