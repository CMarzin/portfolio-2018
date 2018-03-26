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
    <div class="container__alert">
      <div class="container__alert-swipe">
        <div class="container__alert-swipe-text">
          <p>Swipe to navigate</p>
        </div>
        <svg viewBox="0 0 30 37.5" xmlns="http://www.w3.org/2000/svg">
          <g fill-rule="evenodd">
            <path d="M5.854 6.146a.5.5 0 1 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L4.707 4H11.5a.5.5 0 0 1 0 1H4.704zM23.146 6.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L24.293 4H17.5a.5.5 0 1 0 0 1h6.796zM24.997 17v-2.502a1.495 1.495 0 0 0-2-1.412v2.41a.507.507 0 0 1-.5.504.507.507 0 0 1-.5-.503v-2.999a1.495 1.495 0 0 0-2-1.412v3.41a.507.507 0 0 1-.5.504.507.507 0 0 1-.5-.503v-2.999a1.495 1.495 0 0 0-2-1.412v4.41a.507.507 0 0 1-.5.504.507.507 0 0 1-.5-.503V6.498c0-.827-.666-1.498-1.5-1.498-.828 0-1.5.675-1.5 1.498v9.24l-1.32-2.285a1.495 1.495 0 0 0-2.047-.548 1.502 1.502 0 0 0-.55 2.048l1.45 2.512c.458.987.576 2.279 1.38 4.314.883 2.24 2.087 3.82 2.087 4.221a.51.51 0 0 0-.5.5c0 .276.228.5.51.5h8.98a.51.51 0 0 0 .51-.5.504.504 0 0 0-.5-.5c0-1.47 2-4.989 2-9z"/>
          </g>
          <g font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif" font-size="5" font-weight="bold">
            <text y="45">
              Created by Pham Thi Dieu Linh
            </text>
            <text y="50">
              from the Noun Project
            </text>
          </g>
        </svg>
        <div style="opacity: 1" class="container__alert-swipe-close">
           <p>I get it</p>
        </div>
      </div>
      <div class="container__alert-keyboard"></div>
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
        transformOrigin: ['50% 100% 0', '50% 100% 0'],
        scaleY: 1
      }).finished.then(() => {
        anime({
          targets: '.container__loader',
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          transformOrigin: ['100% 0% 0', '100% 0% 0'],
          scaleY: 0
        }).finished.then(() => {
          loader.setAttribute('style', 'display: none')
        })
      })
    })

    anime({
      targets: '.container__alert-swipe-close',
      delay: 500,
      duration: 500,
      easing: [0.25, 0.1, 0.24, 1.01],
      opacity: 1
    })

    document.addEventListener('touchstart', this.hideSwipeMessage)
  },
  methods: {
    hideSwipeMessage: function () {
      console.log('event', event)
      const swipe = document.querySelector('.container__alert')
      anime({
        targets: '.container__alert',
        duration: 500,
        easing: [0.25, 0.1, 0.24, 1.01],
        opacity: 0
      }).finished.then(() => {
        swipe.setAttribute('style', 'display: none')
      })
    }
  }
}
</script>
