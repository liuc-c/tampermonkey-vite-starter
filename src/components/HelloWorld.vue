<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/demo">
      to demo
    </router-link>
  </div>
</template>

<style scoped>
</style>
