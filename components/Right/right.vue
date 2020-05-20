<template>
  <div class="container__right">
    <div class="container__right-about">
      <div @click="openAbout()" class="container__right-title">
        <h3 v-if="this.toggleAbout">CLOSE</h3>
        <h3 v-else>ABOUT</h3>
      </div>
      <div class="container__right-about-content" style="transform: scale(0); background-color: #F5C316">
        <About></About>
      </div>
    </div>
    <div class="container__right-menu">
      <div @click="openMenu()" class="container__right-nav">
        <div class="container__right-nav-title">
          <h3 v-if="this.toggleMenu">CLOSE</h3>
          <h3 v-else>MENU</h3>
        </div>
      </div>
      <div :class="['container__right-menu-content', customClassBg]" style="transform: scaleX(0);">
        <nuxt-link alt="Link to Menu" v-for="title in this.$store.state.projectTitle" :key="title.id" :to="title.replace(/\s+/g, '') === $store.state.projectTitle[0] ? '/' : title.replace(/\s+/g, '')">
          <h3 :class="['container__main-nav_horizontal--title', highlightCurrentRoute]" >{{ title.toUpperCase() }}</h3>
          <span v-if="highlightCurrentRoute(title)" class="container__right-menu-current-path"></span>
        </nuxt-link>
      </div>
      <nuxt-link :title="this.$store.state.projects[this.$store.state.pathToNextProject].title_link" class="container__right-next-project" :to="this.$store.state.pathToNextProject">
        <div :class="['container__right-next-volet', customClassBgNext]"></div>
        <div class="container__right-next-icon">
          <span class="container__right-next-text">NEXT</span>
          <span class="container__right-next-arrow"></span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import About from '~/components/About/about'

export default {
  name: 'Right',
  components: {
    'About': About
  },
  data () {
    return {
      toggleAbout: false,
      toggleMenu: false
    }
  },
  mounted () {
    if (matchMedia) {
      const mq = window.matchMedia('(max-width: 426px)')
      if (mq.matches) {
        const mySwipeItLeft = new SwipeIt('.container__left', { // eslint-disable-line
          minDistance: 100
        })
      const mySwipeItMiddle = new SwipeIt('.container__right', { // eslint-disable-line
          minDistance: 100
        })
        this.swipeListener(mySwipeItLeft)
        this.swipeListener(mySwipeItMiddle)
      }
    }
  },
  computed: {
    customClassText: function () {
      let customClass = 'txt-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBg: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBgNext: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToNextProject].color
      return customClass
    }
  },
  methods: {
    swipeListener: function (mySwipeIt) {
      mySwipeIt.on('swipeLeft', () => {
        this.$router.push(this.$store.state.pathToNextProject)
      })
      mySwipeIt.on('swipeRight', () => {
        this.$router.push(this.$store.state.pathToPreviousProject)
      })
    },
    highlightCurrentRoute: function (title) {
      if (this.$route.path === '/' + title.replace(/\s+/g, '')) {
        return true
      } else if (this.$route.path === '/' && title.replace(/\s+/g, '') === this.$store.state.projectTitle[0]) {
        return true
      } else {
        return false
      }
    },
    openMenu: function () {
      if (this.toggleMenu) {
        this.toggleMenu = false
        this.$store.commit('updateStateMenu', this.toggleMenu)
        anime({
          targets: '.container__right-menu-content',
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          transformOrigin: ['100% 100% 0', '100% 100% 0'],
          scaleX: 0
        })
      } else {
        anime({
          targets: '.container__right-menu-content',
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          transformOrigin: ['100% 100% 0', '100% 100% 0'],
          scaleX: 1
        })
        this.toggleMenu = true
        this.$store.commit('updateStateMenu', this.toggleMenu)
      }
    },
    openAbout: function () {
      if (this.toggleAbout) {
        this.toggleAbout = false
        anime({
          targets: '.container__right-about-content',
          delay: 250,
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          transformOrigin: ['100% 0% 0', '100% 0% 0'],
          scale: 0
        })
        anime({
          targets: '.container__right-about-description',
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          opacity: 0
        })
      } else {
        anime({
          targets: '.container__right-about-content',
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          transformOrigin: ['100% 0% 0', '100% 0% 0'],
          scale: 1
        })
        anime({
          targets: '.container__right-about-description',
          delay: 250,
          duration: 500,
          easing: [0.25, 0.1, 0.24, 1.01],
          opacity: 1
        })
        this.toggleAbout = true
      }
    }
  }
}
</script>
