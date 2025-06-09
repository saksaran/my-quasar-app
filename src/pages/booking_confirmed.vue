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
        <q-card class="q-pa-sm custom-confirmed-card">
          <q-card-section class="q-pa-sm">
            <div class="row items-center">
              <span class="col-1 q-px-sm text-center">
                <q-icon name="check_circle" color="green" size="72px" class="q-icon-small-size" />
              </span>
              <span class="col-11 q-px-lg"> จองและชำระเงิน สำเร็จ </span>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12">
        <q-card class="q-pa-sm custom-card" style="background-color: rgba(180, 180, 210, 0.5)">
          <q-card-section class="q-pa-sm">
            <div class="row items-center q-col-gutter-md">
              <div class="col-12 col-md-2 text-center">
                <q-img
                  style="width: 120px; height: 120px; background-color: white; border-radius: 8px"
                />
              </div>
              <div class="col-12 col-md-4 q-px-md">
                <div class="row items-center q-mb-sm">
                  <span class="col-6 text-left">หมายเลขการจอง</span>
                  <span class="col-5 text-bold text-purple-9 text-right">: 33333</span>
                </div>
                <div class="row items-center">
                  <span class="col-6 text-left">วันที่เข้าใช้บริการ</span>
                  <span class="col-5 text-bold text-purple-9 text-right">
                    <q-icon name="date_range" size="24px" color="primary" /> 31/01/2568
                  </span>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <span class="text-bold"><span class="border-box" />ข้อมูลลูกค้า</span>
                <div class="row q-col-gutter-sm q-pt-md">
                  <div class="col-12 col-md-6">
                    <div class="row items-center">
                      <span class="col-5">ชื่อ</span>
                      <span class="col-7 text-purple-9 text-bold">Sawadee</span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="row items-center">
                      <span class="col-5">นามสกุล</span>
                      <span class="col-7 text-purple-9 text-bold">Peemai</span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="row items-center">
                      <span class="col-5">เบอร์โทร</span>
                      <span class="col-7 text-purple-9 text-bold">092-222-2222</span>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="row items-center">
                      <span class="col-5">อีเมล</span>
                      <span class="col-7 text-purple-9 text-bold">name@mail</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <div class="text-bold q-my-sm"><span class="border-box" />รายละเอียดคำสั่งซื้อ</div>
        <q-card class="q-pa-sm custom-card">
          <q-card-section class="q-pa-sm">
            <!-- Ticket List -->
            <div v-for="(item, index) in items" :key="index" class="q-mb-md">
              <div class="row items-center text-purple-9 text-bold q-mb-md">
                <div class="col-8">
                  <span
                    ><q-icon
                      name="confirmation_number"
                      size="20px"
                      style="transform: rotate(325deg)"
                    />
                    {{ item.name }}</span
                  >
                </div>
                <div class="col-4 row items-center justify-end">
                  <q-icon name="schedule" size="sm" class="q-mr-xs" />
                  <span>10.00 น.</span>
                </div>
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
        <div class="q-mb-sm q-my-sm text-bold">
          <span class="border-box" />รายละเอียดการชำระเงิน
        </div>
        <q-card class="q-pa-sm custom-card">
          <q-card-section class="q-pa-sm">
            <div>
              <!-- Summary -->
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
}

.custom-confirmed-card {
  box-shadow: none;
  border-radius: 12px;
  background-color: rgba(125, 235, 127, 0.2);
  color: green;
  border: 1px solid green;
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
    padding: 8px !important;
  }
  .q-mb-sm {
    margin-bottom: 8px !important;
  }
  .text-body1 {
    font-size: 14px !important;
  }
  .q-btn {
    font-size: 14px !important;
  }
  .q-icon {
    font-size: 18px !important;
  }
  .custom-btn {
    width: 40px !important;
    height: 40px !important;
  }
  .q-icon-small-size {
    font-size: 30px !important;
  }
}
</style>
