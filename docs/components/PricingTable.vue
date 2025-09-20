<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
     <div class="carousel-item active">
          <div class="pricing-table-test">
            <h3>PricingTable 測試</h3>
            <p class="color-orange-7">如果你看到這段文字，元件已正確載入（client-side 顯示）。</p>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col col-lg-2">
            1 of 3
            </div>
            <div class="col-md-auto">
            Variable width content
            </div>
            <div class="col col-lg-2">
            3 of 3
            </div>
        </div>
        <div class="row">
            <div class="col">
            1 of 3
            </div>
            <div class="col-md-auto">
            Variable width content
            </div>
            <div class="col col-lg-2">
            3 of 3
            </div>
        </div>
    </div>
</template>

<style scoped>
.pricing-table-test { padding: 1rem; border: 1px solid #4f8aff; border-radius: 6px; }
</style>