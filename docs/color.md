#Colors 顏色
>借助一些共通類別讓顏色的表達具有意義。

`#00a19b`	

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```
程式碼類型分組:white_check_mark:

输入


::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

<a class="vp-button" href="/files/guide.zip" download>
  <span style="margin-right:6px;">⬇️</span> 下載 ZIP
</a>

<a class="btn" href="#!" target="_blank">確認</a>

<a class="btnLine" href="#">範例按鈕</a>
<a class="btnLine" href="#">範例按鈕<br>雙排文字</a>
                                        