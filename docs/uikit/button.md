---
layout: doc
sidebar: true
---

# Buttons 按鈕
> 按鈕是由文字及/或圖片所組成，目的是清楚地引導要觸發的動作。


## 按鈕規範
### 按鈕強調與使用頻率
![alt text](overview/img/btn-application.jpg){width=100%}

### 網頁按鈕類型
適用平台：官網、網銀
<div class="table-responsive">
    <table class="table table-bordered w1000">
        <thead class="bg-primary-8">
            <tr>
                <th scope="col">種類</th>
                <th scope="col">Enabled</th>
                <th scope="col">Hover</th>
                <th scope="col">Disabled</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="2" class="bg-primary-2" scope="row">
                    <p class="text-gray-11">主要按鈕</p>
                </td>
                <td>
                    <img src="./overview/img/btn-primary.svg" alt="" width=60%>
                    <img src="./overview/img/btn-primary-m.svg" alt="" width=60%>
                </td>
                <td>
                    <img src="./overview/img/btn-primary-hover.svg" alt="">
                </td>
                <td>
                    <img src="./overview/img/btn-primary-disable.svg" alt="">
                </td>
            </tr>
            <tr>
                <td>
                    <ul class="pl-3 my-1">
                        <li>背景色：#00A19B</li>
                        <li>字級：16px ; 字重：粗體</li>
                        <li>圓角：4px</li>
                        <li>文字一行至多６個字，超過折兩行</li>
                        <li>文字斷行處可依內文調整，不需強制６個字才可斷行</li>
                    </ul>
                </td>
                <td>
                    <ul class="pl-3 my-1">
                        <li>背景色：#00A19B<br>透明度80%</li>
                    </ul>
                </td>
                <td>
                    <ul class="pl-3 my-1">
                        <li>背景色：#ACACAC</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## 元件預覽 
### 主要按鈕 (btn)
<Button/>

## 程式碼
::: code-group

```html [html]
<a class="btn" href="#">範例按鈕</a>
<a class="btn" href="#">範例按鈕<br>雙排文字</a>
```

```css [css]
.btn {
  width: 200px;
  height: 65px;
  border-radius: 0.25rem;
  color: #ffffff;
  background-color: #00a19b;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-decoration: none !important;
  border: none;
  margin: 8px;
  text-align: center;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
}
```

:::


<script setup>
import Button from "../components/Button.vue";
</script>