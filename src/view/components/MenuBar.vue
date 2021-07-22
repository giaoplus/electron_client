<template>
  <section class="menu-bar">
    <div class="menu-item">
      <n-icon size="48">
        <Book24Filled />
      </n-icon>
      <span>图书信息</span>
    </div>
    <div class="menu-item">
      <n-icon size="48">
        <BookAdd24Filled />
      </n-icon>
      <span>图书信息</span>
    </div>
    <div class="menu-item">
      <n-icon size="48">
        <BookClock24Filled />
      </n-icon>
      <span>图书信息</span>
    </div>
    <div class="menu-item">
      <n-icon size="48">
        <BookCoins24Filled />
      </n-icon>
      <span>图书信息</span>
    </div>
    <div class="menu-item">
      <n-icon size="48">
        <BookCompass24Filled />
      </n-icon>
      <span>图书信息</span>
    </div>
    <div class="menu-item">
      <n-icon size="48">
        <BookContacts24Filled />
      </n-icon>
      <span>借阅者管理</span>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { Book24Filled, BookAdd24Filled, BookClock24Filled, BookCoins24Filled, BookCompass24Filled, BookContacts24Filled } from '@vicons/fluent'

export default defineComponent({
  components: {
    Book24Filled,
    BookAdd24Filled,
    BookClock24Filled,
    BookCoins24Filled,
    BookCompass24Filled,
    BookContacts24Filled
  },
  setup() {
    
  },
})
</script>

<style lang="scss">
.menu-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  .menu-item {
    width: 90px;
    color: #797979ab;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
