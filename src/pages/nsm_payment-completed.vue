<template>
  <q-layout view="hHh Lpr lff">
    <q-page-container>
      <q-page class="q-pa-lg q-mx-md">
        <div class="payment-container text-center">
          <div class="text-secondary-color">
            <p class="heading-text">ชำระเงินสำเร็จ</p>
            <p class="subheading-text">Payment Completed</p>
          </div>

          <q-img
            src="https://cdn-icons-png.flaticon.com/512/8569/8569994.png"
            class="q-my-lg"
            style="width: 600px; height: 800px"
            fit="contain"
          />

          <div class="bottom-text text-primary-color">
            <p class="text-bold">กรุณารอรับบัตรเข้าชมพิพิธภัณฑ์ ด้วยค่ะ</p>
            <p>Please wait to receive your museum ticket.</p>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style scoped>
.payment-container {
  background-color: #d4edeb;
  min-height: 72vh;
  border-radius: 50px;
  padding: 8rem 2rem 2rem 2rem;
}

.heading-text {
  font-weight: bold;
  font-size: 60px;
  line-height: 0.7;
}

.subheading-text {
  font-size: 50px;
}

.bottom-text {
  font-size: 45px;
}

.text-primary-color {
  color: #051d72;
}

.text-secondary-color {
  color: #24968b;
}
</style>
