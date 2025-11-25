---
layout: doc
sidebar: true
---

# Illustration 插圖
>將文字內容、故事或思想以視覺化的方式呈現同時塑造情感背景，使用户更具沉浸感。

## 人物設計規範

<p>合理的人物比例：<br>
人類的成人頭身比例大致在六至八頭身之間，運用合理的人體比例，避免誇張的比例，以展現安定、信賴感。</p>

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1" style="color: #009973;">正確</p>
        <img src="./img/illustration/guildline-illustration01.png" alt="">
    </div>
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1" style="color: #C92E34;">錯誤</p>
        <img src="./img/illustration/guildline-illustration02.png" alt="">
    </div>
  </div>
</div>

<p>膚色建議</p>


 

<div class="container mx-auto my-8 ">
        <div class="row justify-content-between align-items-baseline">
            <div class="col-sm-12 col-lg-6">
                <div class="d-flex justify-content-between align-items-center rounded mb-2" style="background-color:#fbe0d6">
                    <div class="h6 my-3 font-weight-light pl-3">
                        <span class="h6 pl-3 font-weight-light" id="skin-1">#fbe0d6</span>
                    </div>
                    <p class="h6 my-2 pr-3 btn-copy" data-clipboard-target="#skin-1">複製</p>
                </div>
            </div>
            <div class="col-sm-12 col-lg-6">
            <!-- $primary-6 -->
            <div class=" d-flex justify-content-between align-items-center rounded mb-2" style="background-color:#f8c499">
                <div class="h6 my-3 font-weight-light pl-3">
                <span class="h6 pl-3 font-weight-light"
                        id="skin-2">#f8c499</span>
                </div>
                <p class="h6 my-2 pr-3 btn-copy" data-clipboard-target="#skin-2">複製
                </p>
            </div>
        </div>
    </div>
</div>


<p>配色：<br>
需使用企業綠搭配出自Design system的顏色，除膚色與中性色(黑灰白)以外，可以再選擇兩個色系做搭配。</p>

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1" style="color: #009973;">正確</p>
        <img src="./img/illustration/guildline-illustration03.png" alt="">
    </div>
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1" style="color: #C92E34;">錯誤</p>
        <img src="./img/illustration/guildline-illustration04.png" alt="">
    </div>
  </div>
</div>

<p>人物五官：<br>
藉由人物的五官傳達信賴感、親和力，無五官人像易產生冷漠、疏離感，需避免使用。</p>

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1" style="color: #009973;">正確</p>
        <img src="./img/illustration/guildline-illustration05.png" alt="">
    </div>
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1" style="color: #C92E34;">錯誤</p>
        <img src="./img/illustration/guildline-illustration06.png" alt="">
    </div>
  </div>
</div>

## 物品設計規範

<p>配色：<br>
需使用企業綠搭配出自Design system的顏色，除中性色(黑灰白)以外，可以再選擇1-2種色系搭配。<br>
＊除企業色外，顏色須控制在兩色內，可自由運用該色系之深淺色</p>

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1" style="color: #009973;">正確</p>
        <img src="./img/illustration/guildline-illustration07.png" alt="">
    </div>
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1" style="color: #C92E34;">錯誤</p>
        <img src="./img/illustration/guildline-illustration08.png" alt="">
    </div>
  </div>
</div>



<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import ClipboardJS from 'clipboard'

let clipboardInstance = null

onMounted(() => {
  clipboardInstance = new ClipboardJS('.btn-copy', {
    text: (trigger) => {
      const target = trigger.getAttribute('data-clipboard-target')
      const el = document.querySelector(target)
      return el ? el.textContent.trim() : ''
    }
  })

  clipboardInstance.on('success', (e) => {
    console.log('Copy successful:', e)
    alert('已複製：' + e.text)  // 顯示複製成功並帶出複製的文字
    e.clearSelection()
  })

  clipboardInstance.on('error', (e) => {
    console.warn('Copy failed:', e)
  })
})

onBeforeUnmount(() => {
  if (clipboardInstance) {
    clipboardInstance.destroy()
    clipboardInstance = null
  }
})
</script>