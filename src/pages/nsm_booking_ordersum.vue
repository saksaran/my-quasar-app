<template>
  <q-layout view="hHh Lpr lff">
    <q-page-container>
      <q-page>
        <div class="q-pa-md q-mx-lg text-primary-color q-ml-md">
          <span class="text-h3 text-bold">สรุปรายการสั่งซื้อ</span><br />
          <span class="text-h4">Order Summary</span>
        </div>

        <div class="ticket-section q-mt-xl q-mb-lg">
          <q-scroll-area style="height: 100%">
            <div class="row justify-center text-primary-color">
              <q-card v-for="(ticket, index) in tickets" :key="index" class="ticket-card">
                <div
                  class="row items-center justify-between text-h4 text-bold custom-padding"
                  style="background-color: #e6e6e6"
                >
                  <span>{{ ticket.type }}</span>
                  <div>
                    <q-icon name="confirmation_number" size="42px" class="q-ml-sm ticket-icon" />
                    <span class="q-ml-sm"> x2</span>
                  </div>
                </div>
                <div class="row items-center justify-between text-size-md q-ma-md">
                  <div>
                    <span class="border-box" />
                    <span class="text-weight-bold">{{ ticket.event }}</span>
                  </div>

                  <div class="row items-center">
                    <q-icon name="schedule" size="36px" class="q-ml-sm text-secondary-color" />
                    <span class="text-weight-regular q-ml-sm">รอบ (Round)</span>
                    <span class="text-h4 text-weight-bold q-ml-sm">{{ ticket.round }} </span>
                  </div>
                </div>
                <span
                  class="text-weight-bold text-size-sm q-mx-md q-pl-md"
                  style="line-height: 0.8"
                  >{{ ticket.name }}</span
                >

                <div class="row items-center justify-between text-size-lg q-ma-md q-px-md">
                  <div class="q-my-sm">
                    <span class="text-weight-bold">x1</span>
                    <span class="q-ml-md">เด็ก / Student</span>
                  </div>
                  <span class="text-h4 text-bold text-secondary-color">0 ฿</span>
                </div>
              </q-card>
            </div>
          </q-scroll-area>
        </div>

        <div class="q-pa-md q-mx-xl text-primary-color">
          <div class="row items-center justify-between">
            <span class="text-size-xl text-bold"
              >รายละเอียดการชำระเงิน
              <span class="text-weight-regular text-h4">(Payment details)</span></span
            >
          </div>

          <hr class="q-mt-sm q-mb-lg custom-line" />

          <div class="text-h4 text-bold">
            <div class="row justify-between q-pa-md q-mx-lg">
              <span>ยอดรวม (Grand Total)</span>
              <span>400 ฿</span>
            </div>
            <div class="row justify-between text-red q-pa-md q-mx-lg">
              <span>ส่วนลด (Discount)</span>
              <span>-0</span>
            </div>
            <div class="row justify-between q-px-lg q-py-lg q-mx-sm q-my-md net-price">
              <span>ราคาสุทธิ (Net Price)</span>
              <span>400 ฿</span>
            </div>
          </div>
        </div>

        <div class="row items-center justify-between q-ma-xl">
          <q-btn class="text-blue-8 text-bold items-start back-btn" rounded>
            <q-icon name="chevron_left" size="64px" />
            <span class="q-ml-md">กลับ</span>
          </q-btn>

          <q-btn class="text-white text-bold items-end next-btn" rounded
            ><span class="q-mx-md">ยืนยันชำระเงิน</span
            ><q-icon name="confirmation_number" size="56px" class="ticket-icon-next"
          /></q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
const tickets = [
  {
    type: 'บัตรเข้าชมพิพิธภัณฑ์',
    event: 'บัตรผ่านประตู (Entrance Science Ticket)',
    name: 'พิพิธภัณฑ์วิทยาศาสตร์ (Science Museum)',
    round: '10:00 - 18:00',
  },
  {
    type: 'บัตรเข้ากิจกรรม',
    event: 'Science Walk Rally',
    name: 'ท่องโลกดาราศาสตร์ (สำหรับประถมตอนปลายขึ้นไป)',
    round: '10:00 - 16:00',
  },
  {
    type: 'บัตรเข้าชมพิพิธภัณฑ์',
    event: 'บัตรผ่านประตู (Entrance Science Ticket)',
    name: 'พิพิธภัณฑ์วิทยาศาสตร์ (Science Museum)',
    round: '13:00 - 15:00',
  },
]
</script>

s
<style scoped>
.back-btn {
  font-size: 40px;
  margin-top: 20px;
  width: 280px;
  height: 100px;
  border: 5px solid #0040d6;
}

.border-box {
  display: inline-block;
  width: 5px;
  height: 35px;
  margin-right: 11px;
  border: 3px solid #0099ff;
  border-radius: 2px;
  vertical-align: middle;
}

.cancel-btn {
  width: 24px;
  height: 24px;
  background-color: #ff0404;
  color: white;
}

.custom-line {
  height: 2px;
  background-color: #0099ff;
}

.custom-padding {
  padding: 18px;
}

.net-price {
  background-color: #ddeffb;
  border-radius: 20px;
  padding-left: 32px;
  padding-right: 32px;
}

.next-btn {
  font-size: 40px;
  margin-top: 20px;
  width: 400px;
  height: 100px;
  background-color: #0040d6;
  box-shadow: 0 4px 16px rgba(25, 118, 210, 1);
}

.text-primary-color {
  color: #051d72;
}

.text-secondary-color {
  color: #0099ff;
}

.text-size-md {
  font-size: 28px;
}

.text-size-sm {
  font-size: 26px;
}

.text-size-lg {
  font-size: 30px;
}

.text-size-xl {
  font-size: 36px;
}

.ticket-card {
  width: 100%;
  min-height: 380px;
}

.ticket-icon {
  color: #051d72;
  transform: rotate(135deg);
}

.ticket-icon-next {
  color: white;
  transform: rotate(135deg);
}

.ticket-section {
  margin-left: 50px;
  margin-right: 50px;
  height: 760px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
</style>
