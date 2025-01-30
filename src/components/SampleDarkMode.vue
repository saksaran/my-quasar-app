<template>
  <q-item class="q-pa-none">
    <q-item-section side>
      <q-toggle
        v-model="isDark"
        label="Dark Mode"
        color="primary"
        @update:model-value="toggleDarkMode"
      />
    </q-item-section>
  </q-item>
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
