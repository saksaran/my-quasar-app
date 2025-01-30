import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDataStore = defineStore('dataStore', () => {
  const dataList = ref([
    { id: 1, name: 'John Doe', description: 'Example 1', date: '12/31/2022' },
    { id: 2, name: 'Alex Davie', description: 'Example 2', date: '01/31/2022' },
    { id: 3, name: 'Javis', description: 'Example 3', date: '02/17/2022' },
    { id: 4, name: 'Nevermore', description: 'Example 4', date: '01/01/2022' },
  ])

  return { dataList }
})
