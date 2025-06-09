<template>
  <q-layout view="lHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Quasar App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-md">
        <q-card>
          <q-card-section class="text-center">
            <div class="text-bold text-h3">User List</div>
          </q-card-section>

          <q-card-section>
            <q-list bordered separator>
              <q-item v-for="(user, index) in dataList" :key="index">
                <q-item-section>
                  <q-item-label>{{ user.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>

        <q-space />

        <div class="q-ma-auto text-center">
          <q-btn label="Back" class="q-ma-sm" color="secondary" @click="goBack" />
        </div>
      </q-page>
    </q-page-container>

    <q-footer>
      <div class="text-center">Footer Content</div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useDataStore } from 'stores/dataStore'

const store = useDataStore()
const dataList = store.dataList
const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>
