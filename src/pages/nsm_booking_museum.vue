<template>
  <q-layout view="hHh Lpr lff">
    <q-page-container>
      <q-page>
        <div class="row items-center justify-between q-mx-xl q-my-md">
          <div class="row items-center col">
            <span class="step-number text-h1">1</span>
            <div class="text-primary-color">
              <span class="text-h3 text-bold">เลือกพิพิธภัณฑ์</span><br />
              <span class="text-h4">Select Museum</span>
            </div>
          </div>
          <q-btn
            label="เข้าสู่ระบบ/สมัครสมาชิก"
            color="primary"
            class="text-white text-h4 rounded-btn"
          />
        </div>

        <div class="museum-section q-mx-xl q-pa-sm">
          <q-scroll-area style="height: 100%">
            <div class="row justify-center q-gutter-md q-mt-sm">
              <q-card
                v-for="(museum, index) in museums"
                :key="index"
                bordered
                class="museum-card"
                :class="{ 'selected-card': selectedMuseumIndex === index }"
                @click="toggleSelect(index)"
                clickable
              >
                <q-img :src="museum.image" class="museum-img" />
                <div class="museum-card-title text-center text-bold q-mt-md">
                  {{ museum.name }}
                </div>
                <div class="museum-card-subtitle text-center">({{ museum.english }})</div>
              </q-card>
            </div>
          </q-scroll-area>
        </div>

        <div class="footer-actions row items-center justify-between q-ma-xl">
          <q-btn class="text-blue-8 text-bold items-start back-btn" rounded>
            <q-icon name="chevron_left" size="64px" />
            <span class="q-ml-md">กลับ</span>
          </q-btn>

          <div class="shopping-cart-cluster">
            <q-btn round icon="shopping_basket" size="40px" class="text-white shopping-cart-btn" />
            <q-badge color="red" text-color="white" floating rounded class="shopping-cart-badge">
              0
            </q-badge>
            <q-btn
              class="text-white text-bold items-end next-btn"
              rounded
              :disable="selectedMuseumIndex === null"
              :class="{ 'next-btn-disabled': selectedMuseumIndex === null }"
            >
              <span class="q-mr-md">ถัดไป</span>
              <q-icon name="chevron_right" size="64px" />
            </q-btn>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import bg1 from '../assets/bg1.jpg'
const museums = [
  {
    name: 'พิพิธภัณฑ์วิทยาศาสตร์',
    english: 'Science Museum',
    image: bg1,
  },
  {
    name: 'พิพิธภัณฑ์พระรามเก้า',
    english: 'RAMA9 Museum',
    image: bg1,
  },
  {
    name: 'พิพิธภัณฑ์ธรรมชาติวิทยา',
    english: 'Natural History Museum',
    image: bg1,
  },
  {
    name: 'ฟิวเจอเรียม',
    english: 'Futurium',
    image: bg1,
  },
  {
    name: 'พิพิธภัณฑ์เทคโนโลยีสารสนเทศ',
    english: 'Information Technology Museum',
    image: bg1,
  },
  {
    name: 'อุทยานรัตนโกสินทร์',
    english: 'The Street Ratchada (Science Museum)',
    image: bg1,
  },
  {
    name: 'อุทยานรัตนโกสินทร์',
    english: 'The Street Ratchada (Science Museum)',
    image: bg1,
  },
  {
    name: 'อุทยานรัตนโกสินทร์',
    english: 'The Street Ratchada (Science Museum)',
    image: bg1,
  },
  {
    name: 'อุทยานรัตนโกสินทร์',
    english: 'The Street Ratchada (Science Museum)',
    image: bg1,
  },
  {
    name: 'อุทยานรัตนโกสินทร์',
    english: 'The Street Ratchada (Science Museum)',
    image: bg1,
  },
]
const selectedMuseumIndex = ref(null)

function toggleSelect(index) {
  if (selectedMuseumIndex.value === index) {
    selectedMuseumIndex.value = null
  } else {
    selectedMuseumIndex.value = index
  }
}
</script>

<style scoped>
.page-header {
  background-color: #051d72;
}

.custom-logo {
  width: 250px;
  height: 250px;
  border: 2px solid #ccc;
  border-radius: 54px;
}

.text-primary-color {
  color: #051d72;
}

.step-number {
  font-weight: bold;
  color: #0099ff;
  margin-right: 0.5rem;
}

.rounded-btn {
  border-radius: 75px;
}

.museum-section {
  background-color: #ebeff9;
  height: 66vh;
  border-radius: 50px;
  color: #051d72;
}

.museum-card {
  width: 300px;
  height: 265px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  cursor: pointer;
}

.museum-card:hover {
  transform: scale(1.01);
}

.museum-img {
  width: 100%;
  height: 150px;
}

.museum-card-title,
.museum-card-subtitle {
  font-size: 20px;
}

.footer-actions {
  position: relative;
}

.shopping-cart-cluster {
  display: flex;
  align-items: center;
  position: relative;
}

.shopping-cart-btn {
  background: #051d72;
  width: 110px;
  height: 110px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 35%;
  left: 82%;
  transform: translate(-50%, -150%);
  z-index: 1;
}

.shopping-cart-badge {
  position: absolute;
  top: -140px;
  font-size: 1.5rem;
  padding: 10px 14px;
  z-index: 2;
}

.next-btn {
  font-size: 40px;
  margin-top: 20px;
  width: 280px;
  height: 100px;
  background-color: #0040d6;
  box-shadow: 0 4px 16px rgba(25, 118, 210, 1);
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.next-btn-disabled {
  background-color: #c8c8c8;
  box-shadow: none;
  cursor: not-allowed;
}

.back-btn {
  font-size: 40px;
  margin-top: 20px;
  width: 280px;
  height: 100px;
  border: 5px solid #0040d6;
}

.selected-card {
  outline: 10px solid #003fd3;
  outline-offset: -1px;
  box-shadow: 0 10px 32px rgba(25, 118, 210, 1);
}
</style>
