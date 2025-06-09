<template>
  <!-- <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page> -->
  <HelloWorld />
  <DarkMode />
  <Calculator />
</template>

<script setup>
import HelloWorld from 'src/components/SampleTable.vue'
import DarkMode from 'src/components/SampleDarkMode.vue'
import Calculator from 'src/components/SampleCalculator.vue'
</script>
