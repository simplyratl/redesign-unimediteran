<script setup lang="ts">
import Sidebar from '@/components/shared/sidebar/Sidebar.vue'
import SidebarCourses from '@/components/shared/sidebar/sidebar-items/SidebarCourses.vue'
import SidebarSupport from '@/components/shared/sidebar/sidebar-items/SidebarSupport.vue'
import SidebarCalendar from '@/components/shared/sidebar/sidebar-items/SidebarCalendar.vue'
import SidebarApplications from '@/components/shared/sidebar/sidebar-items/SidebarApplications.vue'
import SidebarEnroll from '@/components/shared/sidebar/sidebar-items/SidebarEnroll.vue'
</script>

<template>
  <div class="lg:p-0 lg:grid grid-cols-12 gap-4">
    <div class="col-span-3">
      <Sidebar>
        <SidebarEnroll />
        <SidebarCourses />
        <SidebarSupport />
      </Sidebar>
    </div>
    <div class="col-span-6 lg:mt-0 mt-8">
      <slot />
    </div>
    <div class="col-span-3 lg:mt-0 mt-8">
      <Sidebar>
        <SidebarCalendar />
        <SidebarApplications />
      </Sidebar>
    </div>
  </div>
</template>
