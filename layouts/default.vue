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
    <!-- <div class="container__alert">
      <div class="container__alert-swipe">

        <p class="container__alert-swipe-text">
          Swipe to navigate
        </p>

        <svg id="container__alert-swipe-hand" fill="#ffffff" enable-background="new 0 0 400 400" height="256" viewBox="0 0 400 400" width="256" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(45deg)"><path d="m232.162 96.001c-2.852 0-5.524.769-7.838 2.094v-5.931c0-8.912-7.25-16.162-16.162-16.162-2.979 0-5.763.824-8.162 2.236v-10.237c0-8.822-7.178-16-16-16s-16 7.178-16 16v6.165c-2.357-1.368-5.084-2.165-8-2.165-8.822 0-16 7.178-16 16v78.993l-15.754-19.701c-2.897-3.624-7.036-5.883-11.651-6.359-4.62-.481-9.128.89-12.705 3.845-6.88 5.684-8.279 15.533-3.256 22.911l51.779 76.033c5.236 7.688 13.916 12.278 23.219 12.278h44.277c15.489 0 28.091-12.602 28.091-28.091v-116.071c0-8.734-7.104-15.838-15.838-15.838zm7.838 131.909c0 11.078-9.013 20.091-20.091 20.091h-44.277c-6.653 0-12.861-3.283-16.606-8.782l-51.779-76.032c-2.685-3.942-1.937-9.204 1.739-12.241 1.912-1.579 4.321-2.307 6.788-2.054 2.466.255 4.676 1.461 6.225 3.397l22.878 28.61c1.062 1.326 2.844 1.84 4.447 1.276 1.604-.562 2.677-2.075 2.677-3.774v-90.4c0-4.411 3.589-8 8-8s8 3.589 8 8v72.4c0 2.209 1.791 4 4 4s4-1.791 4-4v-92.4c0-4.411 3.589-8 8-8s8 3.589 8 8v92.4c0 2.209 1.791 4 4 4s4-1.791 4-4v-68.238c0-4.501 3.661-8.162 8.162-8.162s8.162 3.661 8.162 8.162v72.238c0 2.209 1.791 4 4 4s4-1.791 4-4v-52.562c0-4.322 3.516-7.838 7.838-7.838s7.838 3.516 7.838 7.838v116.071z"/><path d="m71.184 60.588-.96-.586h51.553l-.959.586c-1.886 1.152-2.48 3.614-1.329 5.499.755 1.234 2.07 1.916 3.418 1.916.711 0 1.431-.189 2.081-.587l13.098-8c1.189-.727 1.915-2.021 1.915-3.414s-.726-2.687-1.915-3.413l-13.098-8.001c-1.883-1.154-4.347-.558-5.498 1.328-1.152 1.885-.558 4.347 1.328 5.498l.962.588h-51.559l.962-.588c1.886-1.151 2.48-3.613 1.328-5.498-1.151-1.886-3.615-2.482-5.498-1.328l-13.099 8.001c-1.188.725-1.914 2.019-1.914 3.413s.726 2.688 1.915 3.414l13.099 8c.651.397 1.37.587 2.081.587 1.348 0 2.664-.682 3.418-1.916 1.151-1.886.556-4.348-1.329-5.499z"/></svg>

      </div>
      <div class="container__alert-keyboard"></div>
    </div> -->
  </div>
</template>

<script>

import anime from 'animejs'
import { think } from 'cowsay'

export default {
  mounted () {
    this.logger()

    this.loader()

    if (matchMedia) {
      const mq = window.matchMedia('(max-width: 426px)')
      if (mq.matches) {
        const mySwipeIt = new SwipeIt('.container__alert', { // eslint-disable-line
          minDistance: 50
        })

        this.swipeListener(mySwipeIt)
      }
    }
  },
  methods: {
    loader () {
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
            anime({
              targets: '#container__alert-swipe-hand',
              duration: 3000,
              loop: true,
              easing: [0.25, 0.1, 0.24, 1.01],
              rotate: [
                {value: 0},
                {value: 45},
                {value: 0},
                {value: 45}
              ]
            })
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
    },
    logger () {
      console.log(think({
        text: 'Hello there fellow developer ;)',
        eyes: 'oo',
        wrapLength: 40,
        wrap: false
      }))

      console.log('%c Cli card /' + '%c npx cmarzin', 'color:red', 'color:#f5c316')
    },
    swipeListener (mySwipeIt) {
      mySwipeIt.on('swipeLeft', () => {
        const swipe = document.querySelector('.container__alert')
        anime({
          targets: '.container__alert',
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          transformOrigin: ['0% 50% 0', '0% 50% 0'],
          scaleX: 0
        }).finished.then(() => {
          swipe.setAttribute('style', 'display: none')
        })
      })
    }
  }
}
</script>
