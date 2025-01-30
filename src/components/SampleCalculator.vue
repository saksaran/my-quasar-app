<template>
  <q-card class="q-pa-md">
    <q-card-section class="text-center">
      <div class="text-bold text-h4">Calculator</div>
    </q-card-section>

    <q-card-section>
      <q-input
        v-model="num1"
        type="number"
        label="Number"
        filled
        @update:model-value="validateInput('num1')"
      />
      <q-input
        v-model="num2"
        type="number"
        label="Number"
        filled
        @update:model-value="validateInput('num2')"
      />
    </q-card-section>

    <q-card-section class="text-center">
      <q-btn label="+" @click="calculate('add')" class="q-mx-sm" />
      <q-btn label="-" @click="calculate('subtract')" class="q-mx-sm" />
      <q-btn label="×" @click="calculate('multiply')" class="q-mx-sm" />
      <q-btn label="÷" @click="calculate('divide')" class="q-mx-sm" />
    </q-card-section>

    <q-card-section class="text-center">
      <div class="text-bold text-h5">Result: {{ result }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'

const num1 = ref('')
const num2 = ref('')
const result = ref(0)

const validateInput = (field) => {
  if (field === 'num1') num1.value = Math.floor(Number(num1.value)) || 0
  if (field === 'num2') num2.value = Math.floor(Number(num2.value)) || 0
}

const calculate = (operation) => {
  const n1 = parseInt(num1.value) || 0
  const n2 = parseInt(num2.value) || 0

  switch (operation) {
    case 'add':
      result.value = n1 + n2
      break
    case 'subtract':
      result.value = n1 - n2
      break
    case 'multiply':
      result.value = n1 * n2
      break
    case 'divide':
      result.value = n2 !== 0 ? Math.floor(n1 / n2) : 'Cannot divide by zero.'
      break
  }
}
</script>

<style scoped>
.q-card {
  max-width: 400px;
  margin: auto;
}
</style>
