<template>
  <q-layout view="hHh Lpr lff">
    <q-page-container>
      <q-page>
        <div class="row items-center justify-between q-mx-xl q-my-md">
          <div class="row items-center">
            <span class="step-number text-h1">2</span>
            <div class="text-primary-color">
              <span class="text-h3 text-bold">เลือกกิจกรรม</span><br />
              <span class="text-h4">Select Event</span>
            </div>
          </div>
          <q-btn
            label="เข้าสู่ระบบ/สมัครสมาชิก"
            color="primary"
            class="text-white text-h4 login-btn"
          />
        </div>

        <div class="event-section q-mx-xl q-pa-sm">
          <q-scroll-area style="height: 100%">
            <div class="row justify-center q-gutter-md q-mb-lg q-mt-sm">
              <q-card
                v-for="(event, index) in events"
                :key="event.id"
                bordered
                class="event-card"
                :class="{
                  'booked-event-card': event.isBooked,
                  'selected-event-card': !event.isBooked && selectedEventIndex === index,
                }"
                @click="toggleEventSelect(index)"
                clickable
              >
                <q-img :src="event.image" class="event-img" />
                <q-icon
                  v-if="event.isBooked"
                  name="done"
                  size="28px"
                  class="booked-checkmark-icon"
                />
                <div class="event-card-title text-center text-bold q-mt-md">
                  {{ event.name }}
                </div>
                <div class="event-card-subtitle text-center">({{ event.english }})</div>
              </q-card>
            </div>
          </q-scroll-area>
        </div>

        <div class="row items-center justify-start q-mx-xl q-my-md q-mt-lg">
          <div class="row items-center">
            <span class="step-number text-h1">3</span>
            <div class="text-primary-color">
              <span class="text-h3 text-bold">เลือกรอบกิจกรรม</span><br />
              <span class="text-h4">Select Showtime</span>
            </div>
          </div>
        </div>

        <div class="showtime-section q-mx-xl q-pa-sm">
          <q-scroll-area style="height: 100%">
            <div class="row justify-center q-mb-lg q-mt-sm">
              <q-card
                v-for="(showtime, index) in showtimes"
                :key="showtime.id"
                class="showtime-card q-ma-md q-pa-sm"
                :class="{ 'selected-showtime-card': selectedShowtimeIndex === index }"
                @click="toggleShowtimeSelect(index)"
                clickable
              >
                <div class="showtime-card-title text-center text-bold">
                  {{ showtime.name }}
                </div>
                <div class="showtime-card-subtitle text-center">({{ showtime.english }})</div>
                <div class="showtime-card-subtitle text-bold text-center">{{ showtime.date }}</div>
                <div class="showtime-card-time text-bold text-center">
                  เวลา {{ showtime.time }} น.
                </div>
              </q-card>
            </div>
          </q-scroll-area>
        </div>

        <div class="row justify-end q-ma-xl">
          <div class="shopping-cart-cluster">
            <q-btn round icon="shopping_basket" size="40px" class="text-white shopping-cart-btn" />
            <q-badge color="red" text-color="white" floating rounded class="shopping-cart-badge">
              {{ totalBookedTickets }}
            </q-badge>
          </div>
        </div>

        <q-dialog v-model="showtimeDialog" @hide="resetSelectionOnDialogHide">
          <q-card class="showtime-dialog q-px-xl q-py-lg">
            <q-card-section>
              <div class="row items-center justify-between">
                <div class="text-primary-color">
                  <span class="text-h4 text-bold">เลือกประเภทตั๋ว</span><br />
                  <span class="text-h4">Select Ticket Type</span>
                </div>
                <q-btn
                  size="20px"
                  round
                  icon="close"
                  @click="handleDialogCancel"
                  v-close-popup
                  class="cancel-btn"
                />
              </div>
            </q-card-section>

            <q-scroll-area style="flex: 1 1 auto">
              <div class="row justify-start q-gutter-md q-py-md">
                <template v-for="(ticket, index) in tickets" :key="ticket.name">
                  <q-card class="ticket-card">
                    <div class="row items-start justify-between no-wrap">
                      <q-icon name="confirmation_number" class="ticket-icon" size="54px" />
                      <div class="text-right ticket-info-box">
                        <div>
                          <div>
                            <span class="text-h6 text-bold text-primary-color">
                              {{ ticket.name }}
                            </span>
                          </div>
                          <div class="text-h5 text-bold text-secondary-color">
                            ฿ {{ ticket.price }}
                          </div>
                          <span class="text-grey-7">เหลือ {{ ticket.remaining }} ใบ</span>
                        </div>
                      </div>
                    </div>

                    <div class="row justify-end">
                      <q-btn-dropdown rounded flat label="เลือกช่วงอายุ" class="dropdown-item">
                        <q-list>
                          <q-item clickable v-close-popup>
                            <q-item-section>
                              <q-item-label>12-15</q-item-label>
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </q-btn-dropdown>
                    </div>

                    <div class="row items-center justify-center q-mt-md q-gutter-sm">
                      <q-btn round icon="remove" class="quantity-btn" @click="decrement(index)" />
                      <span class="quantity-display text-h5 text-weight-bold q-pa-sm">
                        {{ ticket.quantity }}
                      </span>
                      <q-btn round icon="add" class="quantity-btn" @click="increment(index)" />
                    </div>
                  </q-card>
                </template>
              </div>
            </q-scroll-area>
            <div class="row justify-center q-my-xl">
              <q-btn
                label="ยืนยัน"
                class="text-white text-bold accepted-btn"
                @click="handleConfirmBooking"
              />
            </div>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const events = ref([
  {
    id: 1,
    name: 'บัตรผ่านประตู',
    english: 'Entrance Science Ticket',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    isBooked: false,
    confirmedQuantity: 0,
  },
  {
    id: 2,
    name: 'Science Lab',
    english: 'Science Lab',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    isBooked: false,
    confirmedQuantity: 0,
  },
  {
    id: 3,
    name: 'คอนเสิร์ตมันส์สุดเหวี่ยง',
    english: 'Rock Fest',
    image: 'https://cdn.quasar.dev/img/mountains.jpg',
    isBooked: false,
    confirmedQuantity: 0,
  },
  {
    id: 4,
    name: 'เทศกาลอาหารนานาชาติ',
    english: 'Food Festival',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    isBooked: false,
    confirmedQuantity: 0,
  },
  {
    id: 5,
    name: 'งานแสดงศิลปะร่วมสมัย A',
    english: 'Art Expo A',
    image: 'https://cdn.quasar.dev/img/parallax2.jpg',
    isBooked: false,
    confirmedQuantity: 0,
  },
  {
    id: 6,
    name: 'งานแสดงศิลปะร่วมสมัย B',
    english: 'Art Expo B',
    image: 'https://cdn.quasar.dev/img/parallax1.jpg',
    isBooked: false,
    confirmedQuantity: 0,
  },
])

const showtimes = ref([
  { id: 'st1', name: 'รอบเช้า', english: 'Morning Show', date: 'จันทร์', time: '09:00 - 10:30' },
  {
    id: 'st2',
    name: 'รอบสาย',
    english: 'Late Morning Show',
    date: 'จันทร์',
    time: '11:00 - 12:30',
  },
  { id: 'st3', name: 'รอบบ่าย', english: 'Afternoon Show', date: 'อังคาร', time: '13:00 - 14:30' },
  { id: 'st4', name: 'รอบเย็น', english: 'Evening Show', date: 'อังคาร', time: '15:00 - 16:30' },
  { id: 'st5', name: 'รอบค่ำ', english: 'Night Show', date: 'พุธ', time: '17:00 - 18:30' },
  { id: 'st6', name: 'รอบพิเศษ', english: 'Special Show', date: 'พุธ', time: '19:00 - 20:30' },
])

const tickets = ref([
  { name: 'เด็ก / Student', price: 100, remaining: 20, quantity: 0 },
  { name: 'เด็ก 18 ปีขึ้นไป / Kids', price: 200, remaining: 30, quantity: 0 },
  { name: "ปริญญาตรี / Bachelor's degree", price: 100, remaining: 20, quantity: 0 },
  { name: 'ผู้ใหญ่ / Adult', price: 200, remaining: 30, quantity: 0 },
  { name: 'ผู้สูงอายุ / Elderly', price: 200, remaining: 20, quantity: 0 },
])

const selectedEventIndex = ref(null)
const selectedShowtimeIndex = ref(null)
const showtimeDialog = ref(false)
const totalBookedTickets = ref(0)
let confirmedBookingFlag = false

function resetDialogTickets() {
  tickets.value.forEach((ticket) => {
    ticket.quantity = 0
  })
}

function calculateTotalBookedTickets() {
  totalBookedTickets.value = events.value.reduce((sum, event) => {
    return sum + (event.isBooked ? event.confirmedQuantity : 0)
  }, 0)
}

function toggleEventSelect(index) {
  if (selectedEventIndex.value === index) {
    selectedEventIndex.value = null
    if (showtimeDialog.value) {
      showtimeDialog.value = false
    }
    selectedShowtimeIndex.value = null
  } else {
    selectedEventIndex.value = index
  }
}

function toggleShowtimeSelect(index) {
  if (selectedEventIndex.value === null) {
    console.warn('select an event first')
    return
  }

  selectedShowtimeIndex.value = index
  resetDialogTickets()
  showtimeDialog.value = true
}

function handleConfirmBooking() {
  if (selectedEventIndex.value === null || selectedShowtimeIndex.value === null) return

  const currentEvent = events.value[selectedEventIndex.value]
  const sumOfCurrentTickets = tickets.value.reduce((sum, ticket) => sum + ticket.quantity, 0)

  if (sumOfCurrentTickets > 0) {
    currentEvent.isBooked = true
    currentEvent.confirmedQuantity = sumOfCurrentTickets
  } else {
    currentEvent.isBooked = false
    currentEvent.confirmedQuantity = 0
  }

  calculateTotalBookedTickets()
  confirmedBookingFlag = true
  showtimeDialog.value = false
  selectedShowtimeIndex.value = null
}

function resetSelectionOnDialogHide() {
  tickets.value.forEach((ticket) => {
    ticket.quantity = 0
  })

  if (!confirmedBookingFlag) {
    selectedShowtimeIndex.value = null
  }
  confirmedBookingFlag = false
}

function handleDialogCancel() {
  selectedShowtimeIndex.value = null
}

const increment = (index) => {
  tickets.value[index].quantity++
}

const decrement = (index) => {
  if (tickets.value[index].quantity > 0) {
    tickets.value[index].quantity--
  }
}
</script>

<style scoped>
.accepted-btn {
  font-size: 40px;
  width: 280px;
  height: 100px;
  background-color: #0040d6;
  border-radius: 35px;
  box-shadow: 0 4px 16px rgba(25, 118, 210, 1);
}
.cancel-btn {
  background-color: #051d72;
  color: white;
}
.dropdown-item {
  width: 150px;
  color: #051d72;
  border: 1px solid #9e9e9e;
}
.event-card {
  width: 300px;
  height: 265px;
  position: relative;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.event-card-subtitle,
.event-card-title {
  font-size: 20px;
}
.event-img {
  height: 150px;
}
.event-section {
  background-color: #ebeff9;
  height: 32vh;
  border-radius: 50px;
  color: #051d72;
}
.login-btn {
  border-radius: 75px;
}
.quantity-btn {
  width: 50px;
  height: 50px;
  background-color: #0040d6;
  color: white;
}
.quantity-display {
  width: 130px;
  text-align: center;
  border: 3px solid #0040d6;
  border-radius: 50px;
  color: #051d72;
}
.selected-event-card {
  outline: 10px solid #003fd3;
  outline-offset: -2px;
  box-shadow: 0 10px 32px rgba(25, 118, 210, 1);
}
.selected-showtime-card {
  color: white;
  background-color: #003fd3;
  border: 0 !important;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 1) !important;
}
.selected-showtime-card .showtime-card-time {
  color: white;
}
.booked-event-card {
  outline: 8px solid #1abd1b;
  outline-offset: -2px;
}
.booked-checkmark-icon {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #1abd1b;
  color: white;
  border-radius: 50%;
  border: 8px solid #1abd1b;
}
.shopping-cart-badge {
  position: absolute;
  font-size: 1.5rem;
  padding: 10px 14px;
  z-index: 2;
}
.shopping-cart-btn {
  background: #051d72;
  width: 110px;
  height: 110px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.shopping-cart-cluster {
  display: flex;
  align-items: center;
  position: relative;
}
.showtime-card {
  width: 420px;
  height: 130px;
  border: 3px solid #051d72;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  cursor: pointer;
}
.showtime-card-subtitle,
.showtime-card-title {
  line-height: 1.1;
  font-size: 24px;
}
.showtime-card-time {
  font-size: 24px;
  color: #003fd3;
}
.showtime-dialog {
  min-width: 95%;
  height: 70%;
  border-radius: 80px;
  background-color: #ebeff9;
  display: flex;
  flex-direction: column;
}
.showtime-section {
  background-color: #ebeff9;
  height: 28vh;
  border-radius: 50px;
  color: #051d72;
}
.step-number {
  font-weight: bold;
  color: #0099ff;
  margin-right: 0.5rem;
}
.text-primary-color {
  color: #051d72;
}
.text-secondary-color {
  color: #0040d6;
}
.ticket-card {
  width: 280px;
  height: 280px;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  padding: 12px;
  display: flex;
  flex-direction: column;
}
.ticket-icon {
  color: #051d72;
  transform: rotate(135deg);
}
.ticket-info-box {
  height: 120px;
}
</style>
