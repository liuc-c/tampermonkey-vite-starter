<script setup lang=ts>
const router = useRouter()

function go() {
  router.push('/')
}
</script>

<template>
  <h1 color-white>
    Demo {{ counter.count }}
  </h1>
  <n-button mr-2 type="primary" size="small" @click="counter.inc()">
    increment
  </n-button>
  <n-button type="primary" size="small" @click="go">
    back
  </n-button>
</template>

<style scoped>

</style>
