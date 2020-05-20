<template>
  <div class="container__middle">
    <div class="container__middle-photo">
      <span class="container__middle-photo-volet"></span>
      <img :src="this.$store.state.projects[this.$store.state.pathToCurrentProject].img" alt="">
    </div>
    <a class="container__middle-website" :href="this.$store.state.projects[this.$store.state.pathToCurrentProject].website_link" rel="noopener" target="_blank">
      <p class="container__middle-website-text">SEE WEBSITE</p>
      <span :class="['container__middle-website-volet', customClassBg]"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Middle',
  methods: {
    keyListener: function (event) {
      switch (event.key) {
        case 'ArrowRight':
          this.$router.push(this.$store.state.pathToNextProject)
          break
        case 'ArrowLeft':
          this.$router.push(this.$store.state.pathToPreviousProject)
          break
      }
    }
  },
  mounted: function () {
    document.addEventListener('keyup', this.keyListener, {passive: true})
  },
  destroyed: function () {
    document.removeEventListener('keyup', this.keyListener)
  },
  computed: {
    customClassBg: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBgNext: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToNextProject].color
      return customClass
    }
  }
}
</script>
