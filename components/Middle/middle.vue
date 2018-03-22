<template>
  <div class="container__middle">
    <div class="container__middle-photo" :style="{'background-image': 'url(' + this.$store.state.projects[this.$store.state.pathToCurrentProject].img + ')', 'background-size': 'cover', 'background-position': 'center', 'background-repeat': 'no-repeat'}">
      <span class="container__middle-photo-volet"></span>
      <!-- <img :src="this.$store.state.projects[this.$store.state.pathToCurrentProject].img" alt=""> -->
    </div>
    <a class="container__middle-website" :href="this.$store.state.projects[this.$store.state.pathToCurrentProject].links.seeWebsite" target="_blank">
      <p class="container__middle-website-text">SEE WEBSITE</p>
      <span :class="['container__middle-website-volet', customClassBg]"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Middle',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>