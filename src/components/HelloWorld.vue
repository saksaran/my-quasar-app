<template>
  <q-card class="q-pa-sm col-12">
    <q-card-section class="text-center">
      <div class="text-bold text-h3">Hello, Quasar!</div>
    </q-card-section>
    <q-card-section>
      <div class="col-6 col-md-4">
        <table class="text-bold" cellspacing="0" cellpadding="0" style="width: 100%">
          <thead style="background: slateblue">
            <th class="text-center q-pa-sm">ID</th>
            <th class="text-center q-pa-sm">NAME</th>
            <th class="text-center q-pa-sm">DESCRIPTION</th>
            <th class="text-center q-pa-sm">DATE</th>
          </thead>
          <tbody class="text">
            <template v-if="dataList.length > 0">
              <template v-for="(item, index) in dataList" :key="index">
                <tr :class="{ 'bg-light': (index + 1) % 2 === 0 }">
                  <td class="text-center q-pa-sm">{{ item.id }}</td>
                  <td class="text-center q-pa-sm">{{ item.name }}</td>
                  <td class="text-center q-pa-sm">{{ item.description }}</td>
                  <td class="text-center q-pa-sm">{{ item.date }}</td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
      </div>
    </q-card-section>
    <q-btn class="q-pr-4" label="Click Me" color="primary" />
  </q-card>
</template>

<script setup>
const dataList = [
  {
    id: 1,
    name: 'John Doe',
    description: 'Don’t want your columns to simply stack in some grid tiers?',
    date: '12/31/2022, 07:59:59',
  },
  {
    id: 2,
    name: 'Alex Davie',
    description: 'Don’t want your columns to simply stack in some grid tiers?',
    date: '01/31/2022, 07:59:58',
  },
  {
    id: 3,
    name: 'Javis',
    description: 'Don’t want your columns to simply stack in some grid tiers?',
    date: '02/17/2022, 07:59:57',
  },
  {
    id: 4,
    name: 'Nevermore',
    description: 'Don’t want your columns to simply stack in some grid tiers?',
    date: '01/01/2022, 07:59:56',
  },
]
</script>

<style scoped>
.bg-light {
  background-color: #f86eb7;
}
</style>
