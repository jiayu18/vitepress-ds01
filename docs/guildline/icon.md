---
layout: doc
sidebar: true
---
# Icon 圖示
>廣義上指所有有指示作用的標誌。
## 設計規範
根據Material Design Icon的設計規範，Grid and keyline shapes。
<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1">Grid</p>
        <img src="./img/icon/guildline-icon01.png" alt="">
    </div>
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1">Keyline</p>
        <img src="./img/icon/guildline-icon02.png" alt="">
    </div>
  </div>
</div>

透過Keyline的框線，讓元素一致，且能靈活的定位，保持 icon 一致的視覺比例。

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1">Square</p>
        <img src="./img/icon/guildline-icon03.png" alt="">
    </div>
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1">Circle</p>
        <img src="./img/icon/guildline-icon04.png" alt="">
    </div>
     <div class="col-sm-6 col-lg-3">
        <p class="mb-1">Vertical rectangle</p>
        <img src="./img/icon/guildline-icon05.png" alt="">
    </div>
     <div class="col-sm-6 col-lg-3">
        <p class="mb-1">Horizontal rectangle</p>
        <img src="./img/icon/guildline-icon06.png" alt="">
    </div>
  </div>
</div>

Grid則是讓元素線條皆能在像素範圍內。

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1" style="color: #009973;">正確</p>
        <img src="./img/icon/guildline-icon07.png" alt="">
    </div>
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1" style="color: #C92E34;">錯誤</p>
        <img src="./img/icon/guildline-icon08.png" alt="">
    </div>
  </div>
</div>

## 線條ICON設計方法
<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-3">
        <img src="./img/icon/guildline-icon09.png" alt="">
    </div>
    <div class="col-sm-12 col-lg-9">
       尺寸：192px x 192px<br>
        線條：8px<br>
        圓角：8px/4px<br>
        線條顏色：#00a19b
    </div>
  </div>
</div>

1.使用AI繪製。其重點圖層說明如下

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1">trim area<br>icon邊界，4px</p>
        <img src="./img/icon/guildline-icon10.png" alt="">
    </div>
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1">keylines<br>&nbsp;</p>
        <img src="./img/icon/guildline-icon11.png" alt="">
    </div>
     <div class="col-sm-6 col-lg-3">
        <p class="mb-1">grid<br>&nbsp;</p>
        <img src="./img/icon/guildline-icon12.png" alt="">
    </div>
     <div class="col-sm-6 col-lg-3">
        <p class="mb-1">keyline範圍<br>放在底層，對齊設計</p>
        <img src="./img/icon/guildline-icon13.png" alt="">
    </div>
  </div>
</div>

2.線條粗細為8px帶圓角，在Grid中佔兩格

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <img src="./img/icon/guildline-icon14.png" alt="">
    </div>
  </div>
</div>

3.設計完稿

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1">複製到轉外框圖層，將圖轉外框</p>
        <img src="./img/icon/guildline-icon15.png" alt="">
    </div>
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1">使用192x192色塊當遮罩</p>
        <img src="./img/icon/guildline-icon16.png" alt="">
    </div>
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1">轉存為SVG檔</p>
        <img src="./img/icon/guildline-icon17.png" alt="">
    </div>
  </div>
</div>

4.樣式皆使用最少線條表示，越單純越好

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1" style="color: #009973;">正確</p>
        <img src="./img/icon/guildline-icon18.png" alt="">
    </div>
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1" style="color: #C92E34;">錯誤</p>
        <img src="./img/icon/guildline-icon19.png" alt="">
    </div>
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1" style="color: #C92E34;">錯誤</p>
        <img src="./img/icon/guildline-icon20.png" alt="">
    </div>
  </div>
</div>

5.若有共同元素，需沿用之前的設計，如手機、錢幣等

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1">複製到轉外框圖層，將圖轉外框</p>
        <img src="./img/icon/guildline-icon21.png" alt="">
    </div>
  </div>
</div>

6.可以使用反白的設計，依照各產品使用不同色，線框跟底的面積為7:10，192px的icon，放在274px的底色中

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-6 col-lg-3">
        <img src="./img/icon/guildline-icon22.png" alt="">
    </div>
    <div class="col-sm-12 col-lg-6">
        <img src="./img/icon/guildline-icon23.png" alt="">
    </div>
  </div>
</div>

## 色塊ICON設計方法
<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-3">
        <img src="./img/icon/guildline-icon24.png" alt="">
    </div>
    <div class="col-sm-12 col-lg-9">
       尺寸：192px x 192px<br>
        線條：8px<br>
        圓角：8px/4px<br>
        主要顏色(需佔ICON區域 80%)：<br>
      #00a19b
      #FFE7A3<br>
        次要顏色(不超過ICON區域 20%)：<br>
      #FFC517
      #FFFFFF(60%)<br>
    </div>
  </div>
</div>

1.使用AI繪製。其重點圖層說明如下

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1">trim area<br>icon邊界，4px</p>
        <img src="./img/icon/guildline-icon25.png" alt="">
    </div>
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1">keylines<br>&nbsp;</p>
        <img src="./img/icon/guildline-icon26.png" alt="">
    </div>
     <div class="col-sm-6 col-lg-3">
        <p class="mb-1">grid<br>&nbsp;</p>
        <img src="./img/icon/guildline-icon27.png" alt="">
    </div>
     <div class="col-sm-6 col-lg-3">
        <p class="mb-1">keyline範圍<br>放在底層，對齊設計</p>
        <img src="./img/icon/guildline-icon28.png" alt="">
    </div>
  </div>
</div>

2.線條粗細為8px帶圓角，在Grid中佔兩格

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <img src="./img/icon/guildline-icon29.png" alt="">
    </div>
  </div>
</div>

3.設計完稿

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <p class="mb-1">複製到轉外框圖層，將圖轉外框</p>
        <img src="./img/icon/guildline-icon30.png" alt="">
    </div>
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1">使用192x192色塊當遮罩</p>
        <img src="./img/icon/guildline-icon31.png" alt="">
    </div>
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1">轉存為SVG檔</p>
        <img src="./img/icon/guildline-icon32.png" alt="">
    </div>
  </div>
</div>
4.樣式皆使用最少線條表示，越單純越好

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1" style="color: #009973;">正確</p>
        <img src="./img/icon/guildline-icon33.png" alt="">
    </div>
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1" style="color: #C92E34;">錯誤</p>
        <img src="./img/icon/guildline-icon34.png" alt="">
    </div>
  </div>
</div>

5.ICON內元素2x為主，過細的元素不易辨識

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1" style="color: #009973;">正確</p>
        <img src="./img/icon/guildline-icon35.png" alt="">
    </div>
    <div class="col-sm-6 col-lg-3">
        <p class="mb-1" style="color: #C92E34;">錯誤</p>
        <img src="./img/icon/guildline-icon36.png" alt="">
    </div>
  </div>
</div>

6.示意ICON

<div class="container mx-auto">
  <div class="row">
    <div class="col-sm-12 col-lg-6">
        <img src="./img/icon/guildline-icon37.png" alt="">
    </div>
  </div>
</div>