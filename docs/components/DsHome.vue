<script setup>
import { ref, onMounted } from 'vue'

const wrapperRef = ref(null)
const controlRef = ref(null)

onMounted(() => {
  if (wrapperRef.value && controlRef.value) {
    const marquees = wrapperRef.value.querySelectorAll(".marquee")
    const wrapper = wrapperRef.value
    const control = controlRef.value

    control.addEventListener("click", () => {
      control.classList.toggle("toggle--vertical")
      wrapper.classList.toggle("wrapper--vertical")
      marquees.forEach(marquee =>
        marquee.classList.toggle("marquee--vertical")
      )
    })
  }
})
</script>

<template>
    <section class="container pt-5 mb-5">

        <div class="row align-items-center">
            <div class="col-lg-6 order-2 order-lg-1 pt-3">
                <h1>E.SUN Bank Design System</h1>
                <p class="mb-4">讓需求與設計產生共鳴，打造直覺體驗</p>
                    <div>
                        <button type="button" class="btn">品牌介紹</button>
                    </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2">
                <img src="../../img/overview.png" class="img-fluid">
            </div>
        </div>
    </section>
    <hr>
    <section>
        <div class="container">
            <div class="row pt-5">
                <div class="col-lg-9">
                    <h2>Guidelines & Style</h2>
                    <p>設計規範與視覺風格說明</p>
                </div>
                <div class="col-lg-3"><button type="button" class="btn">more</button></div>
            </div>
        </div>
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-4 col-sm-6">
                    <div class="card" style="text-align: center;padding: 3rem;">
                        <img src="../../img/ow.png">
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card"  style="text-align: center;padding: 3rem;">
                        <img src="../../img/ep.png">
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card"  style="text-align: center;padding: 3rem;">
                        <img src="../../img/pp.png">
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-5 mb-5">
            <div class="row justify-content-between">
                <div class="col-md-2 col-sm-6">
                    <div class="card">
                        <img src="../../img/color.png">
                    </div>
                </div>
                <div class="col-md-2 col-sm-6">
                    <div class="card">
                        <img src="../../img/typo.png">
                    </div>
                </div>
                <div class="col-md-2 col-sm-6">
                    <div class="card">
                        <img src="../../img/icon.png">
                    </div>
                </div>
                <div class="col-md-2 col-sm-6">
                    <div class="card">
                        <img src="../../img/photo.png">
                    </div>
                </div>
                <div class="col-md-2 col-sm-6">
                    <div class="card">
                        <img src="../../img/illustration.png">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <hr>
    <section class="mb-4">
        <div class="container">
            <div class="row pt-5">
                <div class="col-lg-9">
                    <h2>Component & UIKit</h2>
                    <p>元件庫與介面工具套件</p>
                </div>
                <div class="col-lg-3"><button type="button" class="btn">more</button></div>
            </div>
        </div>
        <div class="container">
            <article class="wrapper pt-5">
                <div class="marquee">
                    <div class="marquee__group">
                    <img src="../../img/g01.png" href="#" alt="">
                    <img src="../../img/g02.png" href="#" alt="">
                    <img src="../../img/g03.png" href="#" alt="">
                    <img src="../../img/g05.png" href="#" alt="">
                    <img src="../../img/g06.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    </div>
                
                    <div aria-hidden="true" class="marquee__group">
                    <img src="../../img/g01.png" href="#" alt="">
                    <img src="../../img/g02.png" href="#" alt="">
                    <img src="../../img/g03.png" href="#" alt="">
                    <img src="../../img/g05.png" href="#" alt="">
                    <img src="../../img/g06.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    </div>
                </div>
                <div class="marquee marquee--reverse">
                    <div class="marquee__group">
                    <img src="../../img/g01.png" href="#" alt="">
                    <img src="../../img/g02.png" href="#" alt="">
                    <img src="../../img/g03.png" href="#" alt="">
                    <img src="../../img/g05.png" href="#" alt="">
                    <img src="../../img/g06.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    </div>
                
                    <div aria-hidden="true" class="marquee__group">
                    <img src="../../img/g01.png" href="#" alt="">
                    <img src="../../img/g02.png" href="#" alt="">
                    <img src="../../img/g03.png" href="#" alt="">
                    <img src="../../img/g05.png" href="#" alt="">
                    <img src="../../img/g06.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    <img src="../../img/g07.png" href="#" alt="">
                    </div>
                </div>
            </article>
        </div>
    </section> 
</template>

<style scoped>
.marquee {
  display: flex;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
    --duration: 70s;
    --scroll-start: 0;
    --scroll-end: calc(-100% - calc(clamp(10rem, 1rem + 40vmin, 30rem) / 14));
  gap: calc(clamp(10rem, 1rem + 40vmin, 30rem) / 14);
  -webkit-mask-image: linear-gradient(
    var(--mask-direction, to right),
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 20%,
    hsl(0 0% 0% / 1) 80%,
    hsl(0 0% 0% / 0)
  );
          mask-image: linear-gradient(
    var(--mask-direction, to right),
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 20%,
    hsl(0 0% 0% / 1) 80%,
    hsl(0 0% 0% / 0)
  );
}

.marquee__group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: calc(clamp(10rem, 1rem + 40vmin, 30rem) / 14)
;
  min-width: 100%;
  -webkit-animation: scroll-x var(--duration) linear infinite;
          animation: scroll-x var(--duration) linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .marquee__group {
    -webkit-animation-play-state: paused;
            animation-play-state: paused;
  }
}

.marquee--vertical {
  --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
  flex-direction: column;
}

.marquee--vertical .marquee__group {
  -webkit-animation-name: scroll-y;
          animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
  animation-direction: reverse;
  -webkit-animation-delay: -3s;
          animation-delay: -3s;
}

@-webkit-keyframes scroll-x {
  from {
    transform: translateX(var(--scroll-start));
  }
  to {
    transform: translateX(var(--scroll-end));
  }
}

@keyframes scroll-x {
  from {
    transform: translateX(var(--scroll-start));
  }
  to {
    transform: translateX(var(--scroll-end));
  }
}

@-webkit-keyframes scroll-y {
  from {
    transform: translateY(var(--scroll-start));
  }
  to {
    transform: translateY(var(--scroll-end));
  }
}

@keyframes scroll-y {
  from {
    transform: translateY(var(--scroll-start));
  }
  to {
    transform: translateY(var(--scroll-end));
  }
}

/* Element styles */
.marquee svg {
  display: grid;
  place-items: center;
  width: var(--size);
  fill: var(--color-text);
  background: var(--color-bg-accent);
  aspect-ratio: 16/9;
  padding: calc(var(--size) / 10);
  border-radius: 0.5rem;
}

.marquee--vertical svg {
  aspect-ratio: 1;
  width: calc(var(--size) / 1.5);
  padding: calc(var(--size) / 6);
}

/* Parent wrapper */
.wrapper {
  display: flex;
  flex-direction: column;
  gap: calc(clamp(10rem, 1rem + 40vmin, 30rem) / 14)
;
  margin: auto;
  max-width: 100vw;
}

.wrapper--vertical {
  flex-direction: row;
  height: 100vh;
}

/* Toggle direction button */
.toggle {
  --size: 3rem;
  position: relative;
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: var(--size);
  height: var(--size);
  font: inherit;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 50%;
  color: inherit;
  background-color: var(--color-bg-accent);
  z-index: 1;
}

.toggle:focus-visible {
  box-shadow: 0 0 0 2px var(--color-text);
}

.toggle span {
  position: absolute;
  display: inline-block;
  top: 50%;
  left: calc(100% + 0.4em);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  white-space: nowrap;
  transform: translateY(-50%);
  -webkit-animation: fade 400ms 4s ease-out forwards;
          animation: fade 400ms 4s ease-out forwards;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.toggle svg {
  --size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--size);
  height: var(--size);
  fill: currentcolor;
  transform: translate(-50%, -50%);
  transition: transform 300ms cubic-bezier(0.25, 1, 0.5, 1);
}

.toggle--vertical svg {
  transform: translate(-50%, -50%) rotate(-90deg);
}

@-webkit-keyframes fade {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes fade {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

/* marquee pause */
.marquee:hover .marquee__group {
  animation-play-state: paused;
}

</style>
