<template>
  <q-layout view="hHh Lpr lff">
    <q-page-container>
      <q-page class="q-pa-md">
        <div class="q-mx-lg text-primary-color q-ml-md">
          <span class="text-h3 text-bold">เลือกช่องทางชำระเงิน</span><br />
          <span class="text-h4">Select Payment Type</span>
        </div>

        <div class="row justify-center items-center q-gutter-xl">
          <div
            class="payment-card column items-center justify-center q-pa-md"
            :class="{ selected: selectedPayment === 'qr' }"
            @click="selectPayment('qr')"
          >
            <q-img src="https://i.imgur.com/2s4yNC2.png" class="payment-image" />
            <div class="text-h4 text-bold q-mt-lg card-text">Thai QR Payment</div>
          </div>

          <div
            class="payment-card column items-center justify-center q-pa-md"
            :class="{ selected: selectedPayment === 'card' }"
            @click="selectPayment('card')"
          >
            <q-img src="https://i.imgur.com/uVBrkQB.png" class="payment-image" />
            <div class="text-h4 text-bold q-mt-lg card-text">Credit/Debit Card</div>
          </div>
        </div>

        <q-dialog v-model="showQrDialog">
          <q-card class="qr-dialog">
            <div class="text-center q-pt-xl">
              <q-btn
                icon="close"
                round
                @click="showQrDialog = false"
                size="20px"
                class="close-button"
              />

              <q-img src="https://cdn.quasar.dev/img/mountains.jpg" class="custom-logo" />
              <div class="text-h4 text-primary-color text-bold q-my-lg">
                องค์การพิพิธภัณฑ์วิทยาศาสตร์แห่งชาติ
              </div>
            </div>

            <div class="qr-banner row items-center justify-center q-pa-md">
              <q-img
                src="https://cdn.quasar.dev/img/mountains.jpg"
                class="q-mr-sm custom-qr-code"
              />
            </div>

            <div class="text-center">
              <div class="countdown-timer text-h4 text-bold q-mb-xl">10:00</div>

              <div class="footer-section text-center">
                <span class="text-primary-color text-h4 text-bold">ยอดชำระ 400 บาท</span>
              </div>
            </div>
          </q-card>
        </q-dialog>

        <q-dialog v-model="showCardDialog">
          <q-card class="qr-dialog">
            <div class="text-center q-pt-xl">
              <q-btn
                icon="close"
                round
                @click="showCardDialog = false"
                size="20px"
                class="close-button"
              />

              <q-img src="https://cdn.quasar.dev/img/mountains.jpg" class="custom-logo" />
              <div class="text-h4 text-primary-color text-bold q-my-lg">
                องค์การพิพิธภัณฑ์วิทยาศาสตร์แห่งชาติ
              </div>
            </div>

            <div class="text-center">
              <div class="text-center">
                <span class="text-primary-color text-h4">Credit/Debit Card</span>
              </div>
            </div>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const selectedPayment = ref(null)
const showQrDialog = ref(false)
const showCardDialog = ref(false)
const isAnyDialogOpen = computed(() => showQrDialog.value || showCardDialog.value)

function selectPayment(type) {
  selectedPayment.value = type

  if (type === 'qr') {
    showQrDialog.value = true
  } else if (type === 'card') {
    showCardDialog.value = true
  }
}

watch(isAnyDialogOpen, (isShowing) => {
  if (!isShowing) {
    selectedPayment.value = null
  }
})
</script>

<style scoped>
.payment-image {
  width: 250px;
  height: 250px;
  border-radius: 25px;
}

.countdown-timer {
  color: red;
}

.close-button {
  position: absolute;
  top: 3rem;
  right: 3.3rem;
  color: white;
  background-color: #051d72;
}

.footer-section {
  margin-top: 65px;
  margin-bottom: 120px;
  padding-top: 35px;
  padding-bottom: 35px;
  background-color: #ddeffb;
  color: #051d72;
}

.custom-logo {
  width: 175px;
  height: 175px;
}

.custom-qr-code {
  width: 700px;
  height: 700px;
}

.qr-dialog {
  min-width: 80%;
  min-height: 70%;
  border-radius: 80px;
  background-color: white;
}

.text-primary-color {
  color: #051d72;
}

.payment-card {
  margin-top: 200px;
  width: 400px;
  height: 400px;
  border-radius: 15%;
  border: 4px solid #051d72;
  cursor: pointer;
  background-color: white;
}

.card-text {
  color: #051d72;
  transition: color 0.3s ease-in-out;
}

.payment-card.selected {
  background-color: #051d72;
  border-color: #051d72;
  box-shadow: 0 4px 16px rgba(25, 118, 210, 0.5);
}

.payment-card.selected .card-text {
  color: white;
}
</style>
