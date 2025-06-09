<template>
  <div
    class="q-pa-md flex justify-center"
    style="min-height: 100vh; background-color: #f5f5f5; align-items: start"
  >
    <div
      class="row q-col-gutter-md justify-between text-body1"
      style="max-width: 1000px; width: 100%; align-items: flex-start"
    >
      <div class="col-12 col-md-12">
        <q-card class="q-pa-sm custom-card">
          <q-card-section class="q-pa-sm">
            <div class="row items-center">
              <div class="col-12 col-md-6 q-px-lg q-py-sm">
                <div class="row items-center q-mb-sm">
                  <span class="col-5 text-left">หมายเลขการจอง</span>
                  <span class="col-5 text-bold text-purple-9 text-right">: 333</span>
                </div>
                <div class="row items-center">
                  <span class="col-5 text-left">วันที่เข้าใช้บริการ</span>
                  <span class="col-5 text-bold text-purple-9 text-right">
                    <q-icon name="date_range" size="24px" color="primary" /> 31/01/2568
                  </span>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <span class="text-bold"><span class="border-box" />ข้อมูลลูกค้า</span>
                <q-separator class="q-my-sm" />
                <div class="row q-col-gutter-sm">
                  <div class="col-12 col-md-6">
                    <div class="row items-center">
                      <span class="col-5">ชื่อ</span>
                      <span class="col-6 text-purple-9">Sawadee</span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="row items-center">
                      <span class="col-5">นามสกุล</span>
                      <span class="col-6 text-purple-9">Peemai</span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="row items-center">
                      <span class="col-5">เบอร์โทร</span>
                      <span class="col-6 text-purple-9">092-222-2222</span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="row items-center">
                      <span class="col-5">อีเมล</span>
                      <span class="col-6 text-purple-9">name@mail</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card class="q-pa-sm custom-card">
          <q-card-section class="q-pa-sm">
            <div class="text-bold"><span class="border-box" />รายละเอียดคำสั่งซื้อ</div>
            <q-separator class="q-my-sm" />
            <!-- Ticket List -->
            <div v-for="(item, index) in items" :key="index" class="q-mb-sm">
              <div class="row items-center text-purple-9 q-mb-sm">
                <div class="col-8">
                  <span class="ellipsis">{{ item.name }}</span>
                </div>
                <div class="col-4 row items-center justify-end">
                  <q-icon name="schedule" size="sm" class="q-mr-xs" />
                  <span>10.00 น.</span>
                </div>
              </div>

              <div class="row text-grey-7 q-mb-xs">
                <span class="col-4">ประเภท</span>
                <span class="col-4 text-center">จำนวน</span>
                <span class="col-4 text-right">ราคา</span>
              </div>

              <!-- Ticket Details -->
              <div
                v-for="(ticket, ticketIndex) in item.tickets"
                :key="ticketIndex"
                class="row items-center q-mb-xs"
              >
                <span class="col-4">{{ ticket.type }}</span>
                <span class="col-4 text-center">{{ ticket.quantity }} x {{ ticket.price }}</span>
                <span class="col-4 text-right">0</span>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card class="q-pa-sm custom-card">
          <q-card-section class="q-pa-sm">
            <div>
              <div class="q-mb-sm text-bold"><span class="border-box" />รายละเอียดการชำระเงิน</div>

              <!-- Summary -->
              <q-separator class="q-my-sm" />
              <div class="q-mt-sm">
                <div class="row justify-between items-center q-mb-sm">
                  <span class="text-grey-8">รวม</span>
                  <span class="text-weight-bold">0.00</span>
                </div>
                <div class="row justify-between items-center text-red q-mb-sm">
                  <span>ส่วนลด</span>
                  <span>0.00</span>
                </div>
                <div class="q-pa-sm bg-blue-1 rounded-borders">
                  <div
                    class="row q-py-xs justify-between items-center text-purple-9 text-weight-bold text-subtitle1"
                  >
                    <span>รวมทั้งสิ้น</span>
                    <span>0.00 บาท</span>
                  </div>
                </div>
              </div>

              <div class="q-mt-lg q-mb-sm text-bold">
                <span class="border-box" />ช่องทางการชำระเงิน
              </div>
              <q-separator class="q-my-sm" />
              <div class="row q-col-gutter-md q-my-sm items-center">
                <!-- QR Payment / Quick Pay -->
                <div class="col-12 col-md-6">
                  <q-btn
                    :class="{
                      'active-btn': paymentMethod === 'qr',
                      'inactive-btn': paymentMethod !== 'qr',
                    }"
                    @click="togglePayment('qr')"
                    unelevated
                    no-caps
                    rounded
                    class="full-width"
                  >
                    <div class="row items-center justify-center">
                      <span class="text-left">QR Payment<br />Quick Pay</span>
                      <q-img src="" width="80px" height="70px" class="q-mr-md" />
                    </div>
                  </q-btn>
                </div>

                <!-- Credit/Debit -->
                <div class="col-12 col-md-6">
                  <q-btn
                    :class="{
                      'active-btn': paymentMethod === 'card',
                      'inactive-btn': paymentMethod !== 'card',
                    }"
                    @click="togglePayment('card')"
                    unelevated
                    no-caps
                    rounded
                    class="full-width"
                  >
                    <div class="row items-center justify-center">
                      <span class="text-left">Credit/Debit</span>
                      <q-img src="" width="80px" height="70px" class="q-mr-md" />
                    </div>
                  </q-btn>
                </div>
              </div>

              <div class="q-mt-md">
                <q-btn
                  rounded
                  color="purple-9"
                  label="ชำระเงิน"
                  size="lg"
                  class="full-width q-mb-sm"
                  :disable="paymentMethod === ''"
                  :class="{ 'bg-grey-5 text-white': !paymentMethod }"
                  @click="showPaymentDetails"
                />
                <q-btn outline rounded label="ยกเลิก" size="lg" class="full-width" />
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- Pop-up -->
        <q-dialog v-model="dialogVisible">
          <q-card
            class="custom-card"
            style="width: 400px; max-height: 80vh; display: flex; flex-direction: column"
          >
            <q-card-actions align="right">
              <q-btn
                icon="close"
                flat
                dense
                round
                color="grey-8"
                class="absolute-top-right q-ma-sm"
                v-close-popup
              />
            </q-card-actions>
            <div class="q-ma-md column items-center text-center">
              <div v-if="paymentMethod === 'qr'" class="column items-center">
                <span class="col-12 text-h6 text-bold q-mb-xs">บันทึกหรือสแกน QR Code</span>
                <span class="q-mb-xs"> เปิดแอปพลิเคชั่นธนาคารในมือถือ แล้วเลือกสแกน QR Code </span>
                <q-img src="" width="250px" height="250px" class="q-mb-xs custom-btn" />
                <span class="text-bold text-red q-mb-md">ยอดชำระ : 0.00 บาท</span>
                <span class="q-mb-xs"
                  >ท่านจะต้องชำระผ่าน QR Code นี้ภายใน 10 นาที
                  หากเกินระยะเวลาที่กำหนดท่านต้องเลือกการชำระเงินใหม่อีกครั้ง
                </span>
                <span class="q-mb-xs"
                  >การชำระเงินง่ายๆ เพียงจ่ายผ่านการ Scan QR Code
                  นี้โดยจ่ายผ่านพร้อมเพย์ได้ทุกธนาคาร
                </span>
                <div class="row justify-center q-mb-xs">
                  <q-btn
                    v-for="(icon, index) in bankIcons"
                    :key="index"
                    flat
                    dense
                    unelevated
                    class="q-ma-xs custom-btn"
                  >
                    <q-img :src="icon" />
                  </q-btn>
                </div>
                <span class="text-bold text-red">{{ formattedTime }}</span>
              </div>

              <div v-else-if="paymentMethod === 'card'" class="column items-center">
                <div class="text-h6 q-mb-sm">Card Payment</div>
                <span class="">details</span>
              </div>
            </div>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, computed } from 'vue'

let interval = null
const items = [
  {
    name: 'ท้องฟ้าจำลอง รอบบรรยายภาษาไทย TH',
    tickets: [
      { type: 'เด็ก', price: 30, quantity: 1 },
      { type: 'ผู้ใหญ่', price: 50, quantity: 1 },
    ],
  },
  {
    name: 'นิทรรศการ กาล-อวกาศ (Space and Time)',
    tickets: [
      { type: 'เด็ก', price: 30, quantity: 1 },
      { type: 'ผู้ใหญ่', price: 50, quantity: 1 },
    ],
  },
]
const bankIcons = ref(['', '', '', '', '', ''])
const paymentMethod = ref('')
const dialogVisible = ref(false)
const countdown = ref(600)
const togglePayment = (method) => {
  paymentMethod.value = method
}
const showPaymentDetails = () => {
  dialogVisible.value = true
  startCountdown()
}
const formattedTime = computed(() => {
  const minutes = Math.floor(countdown.value / 60)
  const seconds = countdown.value % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

const startCountdown = () => {
  countdown.value = 600
  clearInterval(interval)

  interval = setInterval(() => {
    if (countdown.value > 1) {
      countdown.value--
    } else {
      clearInterval(interval)
      dialogVisible.value = false
    }
  }, 1000)
}

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.border-box {
  display: inline-block;
  width: 2px;
  height: 12px;
  margin-right: 8px;
  border: 2px solid #660099;
  border-radius: 2px;
}

.custom-card {
  box-shadow: none;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.active-btn {
  background-color: rgb(230, 213, 243);
  color: black;
  border: 2px solid rgb(88 28 135);
}

.inactive-btn {
  background-color: white;
  color: black;
  border: 2px solid #ccc;
}

.custom-btn {
  width: 45px;
  height: 45px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

/* Mobile responsive */
@media (max-width: 599px) {
  .q-pa-md {
    padding: 8px;
  }
  .q-mb-sm {
    margin-bottom: 8px;
  }
  .text-body1 {
    font-size: 14px;
  }
  .q-btn {
    font-size: 14px;
  }
  .q-icon {
    font-size: 18px;
  }
  .custom-btn {
    width: 40px;
    height: 40px;
  }
}
</style>
