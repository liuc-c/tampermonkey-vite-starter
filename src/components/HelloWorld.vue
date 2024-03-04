<script setup lang="ts">
import { ref } from 'vue'
import viteLogoUrl from '../assets/vite.svg'
import vueLogoUrl from '../assets/vue.svg'

const alert = ref(false)
</script>

<template>
  <q-btn class="fixed bottom-5 right-5" color="teal" round push size="sm" @click="alert = true">
    <q-icon class="i-pixelarticons-power" />
  </q-btn>
  <q-dialog v-model="alert">
    <q-card w-xs>
      <q-card-section>
        <div class="text-h6">
          Title
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Hello world
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img :src="viteLogoUrl" class="logo" alt="Vite logo">
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img :src="vueLogoUrl" class="logo vue" alt="Vue logo">
          </a>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup flat label="OK" color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
