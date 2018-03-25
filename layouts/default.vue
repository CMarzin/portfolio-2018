<template>
  <div class="container__main">
    <nuxt/>
    <div class="logo">Corentin Marzin</div>
    <div class="container__loader">
      <p>Wait a sec...</p>
      <div class="container__loader-loading">
        <div class="fulfilling-square-spinner">
          <div class="spinner-inner" style="transform: scaleY(0)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  mounted () {
    const loader = document.querySelector('.container__loader')
    anime({
      targets: '.fulfilling-square-spinner',
      duration: 1000,
      easing: [0.25, 0.1, 0.24, 1.01],
      rotate: '1turn'
    }).finished.then(() => {
      anime({
        targets: '.spinner-inner',
        duration: 1000,
        easing: [0.25, 0.1, 0.24, 1.01],
        transformOrigin: ['100% 0% 0', '100% 0% 0'],
        scaleY: 1
      }).finished.then(() => {
        anime({
          targets: '.container__loader',
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          transformOrigin: ['0% 100% 0', '0% 100% 0'],
          scaleY: 0
        }).finished.then(() => {
          loader.setAttribute('style', 'display: none')
        })
      })
    })
  }
}
</script>
