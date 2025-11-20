<template>
  <div class="l-tooltips">
    <svg class="l-tooltips--img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.4C6.25625 22.4 1.60001 17.7437 1.60001 12C1.60001 6.25622 6.25625 1.59998 12 1.59998C17.7438 1.59998 22.4 6.25622 22.4 12C22.4 17.7437 17.7438 22.4 12 22.4ZM12 21.2654C17.1172 21.2654 21.2654 17.1172 21.2654 12C21.2654 6.88281 17.1172 2.73452 12 2.73452C6.88284 2.73452 2.73455 6.88281 2.73455 12C2.73455 17.1172 6.88284 21.2654 12 21.2654ZM12.843 5.94283C12.605 5.70082 12.3273 5.59998 11.9901 5.59998C11.6529 5.59998 11.3752 5.70082 11.1372 5.94283C10.8992 6.14451 10.8 6.42686 10.8 6.78989C10.8 7.13275 10.8992 7.4151 11.1372 7.65712C11.3752 7.87897 11.6529 7.99998 11.9901 7.99998C12.3273 7.99998 12.605 7.87897 12.843 7.65712C13.081 7.4151 13.2 7.13275 13.2 6.78989C13.2 6.42686 13.081 6.14451 12.843 5.94283ZM12.8 18.4V9.59998H11.2V18.4H12.8Z" fill="#ACACAC"/>
      <mask id="mask0_2328_1773" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.4C6.25625 22.4 1.60001 17.7437 1.60001 12C1.60001 6.25622 6.25625 1.59998 12 1.59998C17.7438 1.59998 22.4 6.25622 22.4 12C22.4 17.7437 17.7438 22.4 12 22.4ZM12 21.2654C17.1172 21.2654 21.2654 17.1172 21.2654 12C21.2654 6.88281 17.1172 2.73452 12 2.73452C6.88284 2.73452 2.73455 6.88281 2.73455 12C2.73455 17.1172 6.88284 21.2654 12 21.2654ZM12.843 5.94283C12.605 5.70082 12.3273 5.59998 11.9901 5.59998C11.6529 5.59998 11.3752 5.70082 11.1372 5.94283C10.8992 6.14451 10.8 6.42686 10.8 6.78989C10.8 7.13275 10.8992 7.4151 11.1372 7.65712C11.3752 7.87897 11.6529 7.99998 11.9901 7.99998C12.3273 7.99998 12.605 7.87897 12.843 7.65712C13.081 7.4151 13.2 7.13275 13.2 6.78989C13.2 6.42686 13.081 6.14451 12.843 5.94283ZM12.8 18.4V9.59998H11.2V18.4H12.8Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_2328_1773)">
      <path d="M24 0H0V24H24V0Z" fill="#ACACAC"/>
      </g>
    </svg>
    <div class="l-tooltips--content vertical">
      <ul>
        <li>網路/行動銀行(不含理財快易通)申購主題方案基金，享申購手續費5折優惠</li>
        <li>適用期間：2025/6/25~2025/7/25 15:30</li>
        <li>主題方案基金亦適用其他優惠活動，手續費優惠將擇優適用</li>
        <li>優惠產品類別不含ETF、貨幣市場型基金及後收型基金</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.l-tooltips{
  position: relative;
  display: inline-block;
}
.l-tooltips:hover .l-tooltips--content{
  display: block;
}
.l-tooltips--img {
  width: 24px;
  height: 24px;
}
.l-tooltips--content {
  display: none;
  position: absolute;
  max-width: 300px;
  border-radius:4px;
  background-color: rgb(28 28 28 / 80%);
  padding: 8px;
  font-size: 14px;
  color: #fff;
  z-index: 2;
}
.l-tooltips--content.vertical{
  left: 28px;
  top: 0px;
}
.l-tooltips--content.horizontal{
  left: 50%;
  transform: translate(-50%);
  top: 28px;
}
.l-tooltips--content ul{
  margin: 0px;
}
.l-tooltips--content ul li{
  font-size: 14px;
  color: #fff;
}
</style>