<template>
  <div class="l-filters">
    <div class="l-filters--btn btnAll">全部</div>
    <div class="l-filters--line"></div>
    <div class="l-filters--btnGroup">
      <div class="l-filters--btn">野村投信</div>
      <div class="l-filters--btn">第一金投信</div>
      <div class="l-filters--btn">摩根投信</div>
      <div class="l-filters--btn">玉山投信</div>
      <div class="l-filters--btn">瀚亞投信</div>
      <div class="l-filters--btn">野村投信</div>
      <div class="l-filters--btn">第一金投信</div>
      <div class="l-filters--btn">摩根投信</div>
      <div class="l-filters--btn">玉山投信</div>
      <div class="l-filters--btn">瀚亞投信</div>
      <div class="l-filters--btn">摩根投信</div>
      <div class="l-filters--btn">玉山投信</div>
      <div class="l-filters--btn">瀚亞投信</div>
    </div>
    <div class="l-filters--btn btnMore">更多</div>
  </div>
</template>

<script>
export default {
  mounted() {
    const buttons = document.querySelectorAll('.l-filters--btn');
    const btnAll = document.querySelector('.btnAll');

    buttons.forEach(button => {
      // 排除 btnMore，不做 active 切換或改變 btnAll 狀態
      if (button.classList.contains('btnMore')) {
        return; 
      }

      button.addEventListener('click', () => {
        button.classList.toggle('active');
        if (btnAll.classList.contains('active')) {
          btnAll.classList.remove('active');
        }
      });
    });

    if (btnAll) {
      btnAll.addEventListener('click', () => {
        buttons.forEach(button => {
          button.classList.remove('active');
        });
        btnAll.classList.add('active');
      });
    }

    const btnGroup = document.querySelector('.l-filters--btnGroup');
    const btnMore = document.querySelector('.btnMore');
    const btnGroupBtns = btnGroup.querySelectorAll('.l-filters--btn');
    const maxVisible = 10;

    if (btnGroupBtns.length > maxVisible) {
      for (let i = maxVisible; i < btnGroupBtns.length; i++) {
        btnGroupBtns[i].style.display = 'none';
      }
      btnMore.style.display = 'inline-block';
      btnMore.textContent = '更多';
    } else {
      btnMore.style.display = 'none';
    }

    if (btnMore) {
      btnMore.addEventListener('click', () => {
        // btnMore 點擊不會改變 btnAll 狀態或任何 active 狀態
        const isExpanded = btnMore.textContent === '收合';
        if (isExpanded) {
          for (let i = maxVisible; i < btnGroupBtns.length; i++) {
            btnGroupBtns[i].style.display = 'none';
          }
          btnMore.textContent = '更多';
        } else {
          for (let i = maxVisible; i < btnGroupBtns.length; i++) {
            btnGroupBtns[i].style.display = 'inline-block';
          }
          btnMore.textContent = '收合';
        }
      });
    }
  }
}

</script>

<style scoped>
.l-filters {
  max-width: 500px;
}
.l-filters--btnGroup {
  display: inline;
}
.l-filters--btn {
  min-width: 100px;
  padding: 4px 18px;
  font-size: 16px;
  border: solid 1px #ACACAC;
  border-radius: 4px;
  margin: 10px 5px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
}
.l-filters--btn.active{
  background-color: #00a19b;
  border:1px solid #00a19b;
  color: #fff;
}
.l-filters--btn:hover {
  opacity: 0.8;
}
.l-filters--btn.btnAll {
  margin-right: 5px;
  min-width: auto;
}
.l-filters--btn.btnMore {
  min-width: auto;
  border: solid 1px #00a19b;
  color: #00a19b;
  background-color: #fff;
}
.l-filters--btn.btnMore.active{
  border: solid 1px #00a19b;
  color: #00a19b;
  background-color: #fff;
}
.l-filters--line {
  display: inline-block;
  width: 1px;
  background-color: #D9D9D9;
  height: 32px;
  vertical-align: middle;
}
</style>