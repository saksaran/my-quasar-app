<template>
  <div class="flex justify-center items-center" style="min-height: 80vh">
    <q-card class="q-ma-md responsive-card">
      <q-card-section class="text-center fluid-heading">
        <p class="text-bold">ชำระเงินสำเร็จ</p>
        <p class="text-custom-subtitle">Payment Completed</p>
      </q-card-section>

      <q-card-section class="flex justify-center q-pa-md">
        <q-img
          src="https://cdn-icons-png.flaticon.com/512/8569/8569994.png"
          class="responsive-img"
          fit="contain"
        />
      </q-card-section>

      <q-card-section class="text-center fluid-subheading">
        <p class="text-bold">กรุณารอรับบัตรเข้าชมพิพิธภัณฑ์ ด้วยค่ะ</p>
        <p>Please wait to receive your museum ticket.</p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup></script>

<style scoped>
.text-custom-subtitle {
  font-size: 50px;
}

.responsive-card {
  border-radius: 50px;
  background-color: #d4edeb;
  width: 90%;
  max-width: auto;
  min-height: 72vh;
  box-shadow: none;
}

.responsive-img {
  width: 100%;
  max-width: 600px;
  height: auto;
}

.fluid-heading {
  padding-top: 150px;
  padding-bottom: 100px;
  font-size: 60px;
  line-height: 0.9;
  color: #24968b;
}

.fluid-subheading {
  padding-top: 100px;
  font-size: 45px;
  line-height: 1.2;
  color: #051d72;
}
</style>
