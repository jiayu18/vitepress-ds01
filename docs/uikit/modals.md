---
layout: doc
sidebar: true
---
<a class="btn">測試</a>

::: code-group

```js [js]
<script setup>
import { onMounted } from 'vue'
import $ from 'jquery'
onMounted(() => {
  $('.btn').click(() => {
    alert('Button clicked')
  })
})


</script>
```

```css [css]

```

:::

<script setup>
import { onMounted } from 'vue'
import $ from 'jquery'
onMounted(() => {
  $('.btn').click(() => {
    alert('Button clicked')
  })
})


</script>