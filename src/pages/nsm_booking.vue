<template>
  <q-layout view="hHh Lpr lff">
    <q-page-container>
      <q-page>
        <!-- Header -->
        <div class="row items-center justify-center q-py-xl" style="padding-top: 350px">
          <q-img
            src="https://cdn-icons-png.flaticon.com/512/8569/8569994.png"
            style="height: 250px; width: 250px"
            class="q-mx-lg"
          />
          <div class="column text-center q-ma-xl">
            <span class="text-bold text-h2 q-mb-md">จำหน่ายบัตร</span>
            <span class="text-h2">Booking Ticket</span>
          </div>
        </div>

        <!-- Center Image -->
        <div class="items-center justify-center">
          <q-img
            src=""
            style="
              max-width: 100%;
              height: 992px;
              border-top-left-radius: 50px;
              border-top-right-radius: 50px;
              background-color: skyblue;
            "
          >
          </q-img>
        </div>

        <!-- Footer -->
        <div
          class="row bg-primary text-white items-center justify-center q-pa-md"
          style="height: 280px"
        >
          <q-icon name="touch_app" size="156px" class="q-ma-md" />
          <div class="column items-center text-center q-ma-md">
            <span class="text-h3 q-my-md">กดหน้าจอเพื่อเริ่มจอง</span>
            <span class="text-h2 text-bold">TOUCH TO START</span>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style scoped>
.bg-primary {
  background-color: #003366 !important;
}
</style>
