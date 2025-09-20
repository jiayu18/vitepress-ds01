import { Directive } from 'vue'

const TooltipDirective: Directive = {
  mounted(el) {
    if (typeof (window as any).$ === 'undefined') return
    ;(window as any).$(el).tooltip() // 初始化
  },
  unmounted(el) {
    if (typeof (window as any).$ === 'undefined') return
    ;(window as any).$(el).tooltip('dispose') // 銷毀，避免記憶體洩漏
  }
}

export default TooltipDirective