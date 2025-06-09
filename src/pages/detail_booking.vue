<template>
  <div
    class="q-pa-md flex justify-center"
    style="min-height: 100vh; background-color: #f5f5f5; align-items: start"
  >
    <div
      class="row q-col-gutter-md justify-center text-body1"
      style="max-width: 1000px; width: 100%; align-items: flex-start"
    >
      <!-- Left Section -->
      <div class="col-12 col-md-8">
        <q-card class="q-pa-sm custom-card">
          <q-card-section class="q-pa-sm">
            <div class="row justify-between items-center">
              <div class="text-bold"><span class="border-box" />รายการจอง</div>
              <!-- Date -->
              <span>31/01/2025</span>
            </div>
            <hr class="q-my-sm" />
            <!-- Ticket -->
            <q-item v-for="(item, index) in items" :key="index" class="q-pa-none">
              <q-item-section>
                <div class="q-pa-sm bg-blue-1 text-purple-9 text-bold rounded-borders">
                  {{ item.name }}
                </div>
                <div
                  v-for="(ticket, ticketIndex) in item.tickets"
                  :key="ticketIndex"
                  class="row justify-between items-center q-pa-sm mobile-view"
                  style="display: grid; grid-template-columns: 0.5fr auto 1fr; align-items: center"
                >
                  <span class="text-sm">{{ ticket.type }}</span>
                  <span class="text-sm">10.00 น.</span>
                  <div class="row items-center justify-end">
                    <span class="text-purple-9 text-sm">{{ ticket.price }}</span> &nbsp;THB
                    <q-btn
                      round
                      outline
                      color="black"
                      size="md"
                      dense
                      icon="remove"
                      class="q-mx-sm q-ml-md q-btn-small-size"
                    />
                    <q-badge
                      class="rounded-borders text-center"
                      color="grey-3"
                      text-color="black"
                      style="border: 1px solid rgba(0, 0, 0, 0.2); width: 24px"
                    >
                      {{ ticket.quantity }}
                    </q-badge>
                    <q-btn
                      round
                      icon="add"
                      size="md"
                      dense
                      color="black"
                      class="text-white q-mx-sm q-mr-md q-btn-small-size"
                      style="background-color: black"
                    />
                    <q-btn
                      outline
                      rounded
                      color="red"
                      size="sm"
                      dense
                      icon="delete"
                      class="q-pa-xs q-btn-small-size"
                    />
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>

        <q-card class="q-pa-sm q-mt-md custom-card">
          <q-card-section class="q-pa-sm">
            <div class="text-bold"><span class="border-box" />ข้อมูลลูกค้า</div>
            <hr class="q-my-sm" />
            <q-form>
              <div class="q-ma-sm">
                <div class="row justify-between">
                  <div class="col-12 col-md-6 q-pa-sm">
                    ชื่อ <span class="text-red">*</span>
                    <q-input outlined color="black" dense class="q-mt-sm" />
                  </div>
                  <div class="col-12 col-md-6 q-pa-sm">
                    นามสกุล <span class="text-red">*</span>
                    <q-input outlined color="black" dense class="q-mt-sm" />
                  </div>
                </div>
                <div class="row justify-between">
                  <div class="col-12 col-md-6 q-pa-sm">
                    เบอร์โทร <span class="text-red">*</span>
                    <q-input outlined color="black" dense class="q-mt-sm" />
                  </div>
                  <div class="col-12 col-md-6 q-pa-sm">
                    อีเมล <span class="text-red">*</span>
                    <q-input outlined color="black" dense class="q-mt-sm" />
                  </div>
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>

        <q-card class="q-pa-sm q-mt-md custom-card">
          <q-card-section class="q-pa-sm">
            <div class="text-bold"><span class="border-box" />กรอกโค้ดส่วนลด</div>
            <hr class="q-my-sm" />
            <div class="q-ma-sm">
              <div class="row justify-between items-center">
                <div class="col-8 q-pa-sm">
                  <q-input outlined rounded color="black" dense />
                </div>
                <div class="col-4 q-pa-sm">
                  <q-btn
                    outlined
                    rounded
                    color="purple-9"
                    label="ยืนยัน"
                    size="md"
                    class="q-px-lg"
                  />
                </div>
              </div>
              <div class="text-body1">
                <q-checkbox
                  v-model="termsAccepted"
                  class="text-bold custom-checkbox checkbox-round"
                  label="Accept Terms & Conditions"
                  color="primary"
                  size="lg"
                  checked-icon="check_circle"
                  unchecked-icon="radio_button_unchecked"
                />
                / ยอมรับเงื่อนไขและข้อกำหนด
                <a href="#" @click.prevent="showDetails('terms')">รายละเอียด</a>
              </div>
              <div class="text-body1">
                <q-checkbox
                  v-model="dataProtectionAccepted"
                  class="text-bold custom-checkbox"
                  label="Accept Personal Data Protection Act"
                  color="primary"
                  size="lg"
                  checked-icon="check_circle"
                  unchecked-icon="radio_button_unchecked"
                />
                / ยอมรับเงื่อนไขนโยบายคุ้มครองข้อมูลส่วนบุคคล
                <a href="#" @click.prevent="showDetails('dataProtection')">รายละเอียด</a>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- Pop-up -->
        <q-dialog v-model="dialogVisible" max-width="800px">
          <q-card
            class="custom-card"
            style="width: 100%; max-height: 80vh; display: flex; flex-direction: column"
          >
            <q-card-section style="overflow-y: auto; flex-grow: 1">
              <div v-if="currentDetails === 'terms'">
                <div class="text-h6">Accept Terms & Conditions</div>
                <span class="text-body1">details</span>
              </div>
              <div v-else-if="currentDetails === 'dataProtection'">
                <div class="text-h6">Accept Personal Data Protection Act</div>
                <span class="text-body1">details</span>
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat label="ปิด" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>

      <!-- Right Section -->
      <div class="col-12 col-md-4">
        <q-card class="q-pa-sm custom-card">
          <q-card-section class="q-pa-sm">
            <div>
              <div class="text-body1 q-mb-sm text-bold">
                <span class="border-box" />ข้อมูลการชำระเงิน
              </div>
              <hr class="q-my-sm" />
              <!-- Ticket List -->
              <div v-for="(item, index) in items" :key="index" class="q-mb-sm">
                <div class="row items-center text-purple-9">
                  <div class="col-8">
                    <span class="q-ellipsis text-body1">{{ item.name }}</span>
                  </div>
                  <div class="col-4 row items-center justify-end">
                    <q-icon name="schedule" size="sm" class="q-mr-xs" />
                    <span class="text-body1">10.00 น.</span>
                  </div>
                </div>

                <div class="row text-grey-7 text-body1">
                  <div class="col-4">ประเภท</div>
                  <div class="col-4 text-center">จำนวน</div>
                  <div class="col-4 text-right">ราคา</div>
                </div>

                <!-- Ticket Details -->
                <div
                  v-for="(ticket, ticketIndex) in item.tickets"
                  :key="ticketIndex"
                  class="row items-center text-body1"
                >
                  <div class="col-4">{{ ticket.type }}</div>
                  <div class="col-4 text-center">{{ ticket.quantity }} x {{ ticket.price }}</div>
                  <div class="col-4 text-right">0</div>
                </div>
              </div>

              <!-- Summary -->
              <hr class="q-my-sm" />
              <div class="q-mt-sm text-body1">
                <div class="row justify-between items-center">
                  <span class="text-grey-8">รวม</span>
                  <span class="text-weight-bold">0</span>
                </div>
                <div class="row justify-between items-center text-red">
                  <span>ส่วนลด</span>
                  <span>0.00</span>
                </div>
                <div class="row justify-between items-center text-purple-9">
                  <span class="text-weight-bold">รวมทั้งสิ้น</span>
                  <span class="text-weight-bold">0</span>
                </div>
              </div>

              <div class="col col-12 q-pa-sm q-mt-md">
                <q-btn
                  outlined
                  rounded
                  color="purple-9"
                  label="ยืนยันรายการ"
                  size="lg"
                  class="full-width"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
const termsAccepted = ref(false)
const dataProtectionAccepted = ref(false)
const dialogVisible = ref(false)
const currentDetails = ref('')
const showDetails = (type) => {
  currentDetails.value = type
  dialogVisible.value = true
}
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

a {
  color: #660099;
  text-decoration: underline;
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}

.custom-card {
  box-shadow: none !important;
  border-radius: 12px !important;
  border: 1px solid rgba(0, 0, 0, 0.12);
}

/* Moblie responsive */
@media (max-width: 768px) {
  .q-pa-sm {
    padding: 8px !important;
  }
  .q-mt-md {
    margin-top: 16px !important;
  }
  .q-mb-sm {
    margin-bottom: 8px !important;
  }
  .text-h6 {
    font-size: 2rem !important;
  }
  .text-body1 {
    font-size: 0.875rem !important;
  }
  .q-btn-small-size {
    font-size: 0.5rem !important;
  }
  .mobile-view {
    grid-template-columns: 0.2fr auto 0.8fr !important;
    font-size: 12px;
  }
}
</style>
