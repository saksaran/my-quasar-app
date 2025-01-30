<template>
  <q-card class="q-pa-sm col-12">
    <q-card-section class="text-center">
      <div class="text-bold text-h3">Hello, Quasar!</div>
    </q-card-section>
    <q-card-section>
      <q-btn label="Create" color="green" class="q-mb-md" @click="openCreatePopup" />
      <div class="col-12">
        <table class="text-bold" cellspacing="0" cellpadding="0" style="width: 100%">
          <thead style="background: slateblue; color: white">
            <tr>
              <th class="text-center q-pa-sm">ID</th>
              <th class="text-center q-pa-sm">NAME</th>
              <th class="text-center q-pa-sm">DESCRIPTION</th>
              <th class="text-center q-pa-sm">DATE</th>
              <th class="text-center q-pa-sm" style="width: 200px">ACTIONS</th>
            </tr>
          </thead>
          <tbody class="text">
            <template v-if="dataList.length > 0">
              <tr
                v-for="(item, index) in dataList"
                :key="index"
                :class="{ 'bg-light': (index + 1) % 2 === 0 }"
              >
                <td class="text-center q-pa-sm">{{ item.id }}</td>
                <td class="text-center q-pa-sm">{{ item.name }}</td>
                <td class="text-center q-pa-sm">{{ item.description }}</td>
                <td class="text-center q-pa-sm">{{ item.date }}</td>
                <td class="text-center q-pa-sm">
                  <q-btn
                    color="blue"
                    label="Update"
                    class="q-mx-sm"
                    @click="openUpdatePopup(item)"
                  />
                  <q-btn color="red" label="Delete" @click="deleteItem(item.id)" />
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </q-card-section>

    <q-dialog v-model="popupVisible">
      <q-card class="q-pa-md">
        <q-card-section>
          <div class="text-h5">{{ isEditing ? 'Update Data' : 'Create Data' }}</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="formData.name" label="Name" outlined class="q-mb-md" />
          <q-input v-model="formData.description" label="Description" outlined class="q-mb-md" />
          <q-input v-model="formData.date" label="Date" outlined class="q-mb-md" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="negative" @click="popupVisible = false" />
          <q-btn flat label="Save" color="positive" @click="saveData" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const dataList = ref([
  { id: 1, name: 'John Doe', description: 'Description 1', date: '12/31/2022' },
  { id: 2, name: 'Alex Davie', description: 'Description 2', date: '01/31/2022' },
  { id: 3, name: 'Javis', description: 'Description 3', date: '02/17/2022' },
  { id: 4, name: 'Nevermore', description: 'Description 4', date: '01/01/2022' },
])

const popupVisible = ref(false)
const isEditing = ref(false)
const formData = ref({ id: null, name: '', description: '', date: '' })

const openCreatePopup = () => {
  formData.value = { id: null, name: '', description: '', date: '' }
  isEditing.value = false
  popupVisible.value = true
}

const openUpdatePopup = (item) => {
  formData.value = { ...item }
  isEditing.value = true
  popupVisible.value = true
}

const saveData = () => {
  if (isEditing.value) {
    const index = dataList.value.findIndex((item) => item.id === formData.value.id)
    if (index !== -1) {
      dataList.value[index] = { ...formData.value }
    }
    $q.notify({ type: 'positive', message: 'Updated successfully!' })
  } else {
    formData.value.id = dataList.value.length
      ? Math.max(...dataList.value.map((item) => item.id)) + 1
      : 1
    dataList.value.push({ ...formData.value })
    $q.notify({ type: 'positive', message: 'Created successfully!' })
  }

  popupVisible.value = false
}

const deleteItem = (id) => {
  dataList.value = dataList.value.filter((item) => item.id !== id)
  $q.notify({ type: 'negative', message: 'Deleted successfully!' })
}
</script>

<style scoped>
.bg-light {
  background-color: #f86eb7;
}
</style>
