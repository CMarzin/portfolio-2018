<template>
  <div class="container__left">
    <nuxt-link :title="this.$store.state.projects[this.$store.state.pathToPreviousProject].titleLink" class="container__left-prev-project" :to="this.$store.state.pathToPreviousProject">
      <div :class="['container__left-prev-volet', customClassBgPrevious]"></div>
      <div class="container__left-prev-icon">
        <span class="container__left-prev-arrow"></span>
        <span class="container__left-prev-text">PREVIOUS</span>
      </div>
    </nuxt-link>
    <div class="container__left-elements">
      <div class="container__left-elements-content">
        <div class="container__left-counter">
          <p>{{ this.$store.state.counterProject + 1 }}</p>
          <p> - </p>
          <p>{{ this.$store.state.projectTitle.length }}</p>
        </div>
        <div :class="['title', 'container__left-title', customClassText]">
         <div class="container__left-title-content">
            <span :class="['container__left-title-volet']"></span>
            <h1 :class="['container__left-title-scale', classTitle]" >{{ this.$store.state.currentProjectTitle }}</h1>
         </div>
        </div>
      </div>
        <div class="container__left-desc">
          <p>{{ this.$store.state.projects[this.$store.state.pathToCurrentProject].description }}</p>
          <a v-if="this.$store.state.projects[this.$store.state.pathToCurrentProject].links.moreInformation" rel="noopener" :href="this.$store.state.projects[this.$store.state.pathToCurrentProject].links.moreInformation">{{this.$store.state.projects[this.$store.state.pathToCurrentProject].links.moreInformation}}</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Left',
  props: {
    classTitle: {
      default: '',
      type: String
    }
  },
  data () {
    return {}
  },
  computed: {
    customClassText: function () {
      let customClass = 'txt-' + this.$store.state.projects[this.$store.state.pathToCurrentProject].color
      return customClass
    },
    customClassBgPrevious: function () {
      let customClass = 'bonjour-' + this.$store.state.projects[this.$store.state.pathToPreviousProject].color
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
  }
}
</script>
