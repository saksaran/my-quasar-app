<template>
  <q-page class="q-pa-md">
    <div>
      <q-toggle
        v-model="isDark"
        label="Dark Mode"
        color="primary"
        @update:model-value="toggleDarkMode"
      />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { Dark } from 'quasar'

const isDark = ref(Dark.isActive)

const toggleDarkMode = () => {
  Dark.set(isDark.value)
}
</script>

<style></style>
