<template>
  <div
    class="flex justify-center items-center"
    style="min-height: 100vh; background-color: #faf0e6"
  >
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <q-card style="background-color: #ff6699; height: 200px">
            <q-card-section class="text-center item-center q-pt-xl">
              <p class="text-bold">รักเธอนะ คิดถึงแฟน</p>
              <p class="text-custom-subtitle">
                <q-icon name="favorite" />
              </p>
            </q-card-section>
          </q-card>
        </div>

        <!-- ด้านหลัง -->
        <div class="flip-card-back">
          <img :src="loverImg" alt="lover" class="image-back" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import loverImg from '../assets/lover.jpg'
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px;
  border-radius: 12px;
  border: 4px solid white;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

/* เมื่อ hover ที่ .flip-card ให้ inner หมุน */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* ด้านหน้าและหลัง */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
}

/* ด้านหน้า */
.flip-card-front {
  z-index: 2;
}

/* ด้านหลัง */
.flip-card-back {
  background-color: #fff;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* รูปภาพ */
.image-back {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* ฟอนต์ */
.text-custom-subtitle {
  font-family: 'Kanit', sans-serif;
  font-size: 32px;
}

.text-bold {
  font-size: 30px;
  font-family: 'Kanit', sans-serif;
}
</style>
