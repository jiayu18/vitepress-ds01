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

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-6 col-lg-3 bg-primary-3 d-flex justify-content-between align-items-center rounded mb-2">
        <div class="h6 my-3 font-weight-light pl-3">$primary-3
        <span class="h6 pl-3 font-weight-light" id="primary-3">#BDE3E2</span>
        </div>
        <p class="h6 my-2 pr-3 btn-copy" data-clipboard-target="#primary-3">複製
        </p>
    </div>
    <div class="col-sm-6 col-lg-3 bg-primary-3 d-flex justify-content-between align-items-center rounded mb-2">
        <div class="h6 my-3 font-weight-light pl-3">$primary-3
        <span class="h6 pl-3 font-weight-light" id="primary-3">#BDE3E2</span>
        </div>
        <p class="h6 my-2 pr-3 btn-copy" data-clipboard-target="#primary-3">複製
        </p>
    </div>

  </div>
</div>


<p>合理的人物比例：<br>
人類的成人頭身比例大致在六至八頭身之間，運用合理的人體比例，避免誇張的比例，以展現安定、信賴感。</p>







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