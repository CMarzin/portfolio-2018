<template>
  <div class="container__main">
    <div class="transition-page" style="transform: scaleX(0)"></div>
    <left></left>
    <Middle></Middle>
    <Right></Right>
  </div>
</template>

<script>
import Left from '~/components/Left/left'
import Middle from '~/components/Middle/middle'
import Right from '~/components/Right/right'

import beforeEnterTransition from '~/assets/transition/beforeEnterTransition'
import beforeLeaveTransition from '~/assets/transition/beforeLeaveTransition'
import enterTransition from '~/assets/transition/enterTransition'
import leaveTransition from '~/assets/transition/leaveTransition'
import beforeRouteLeaveTransition from '~/assets/transition/beforeRouteLeaveTransition'

export default {
  layout: 'default',
  beforeRouteLeave (to, from, next) {
    const regex = /(\/.*\/)/g
    const str = to.path
    let newPath = str.replace(regex, '/')
    if (to.path !== newPath) {
      next({ path: newPath })
    } else {
      beforeRouteLeaveTransition(this.$el, this.$store, next)
    }
  },
  transition: {
    css: false,
    mode: 'out-in',
    duration: 10000,
    type: 'transition',
    beforeEnter (el) {
      beforeEnterTransition(el, this.$store)
    },
    enter (el, done) {
      enterTransition(el, this.$store)
      done()
    },
    beforeLeave (el) {
      beforeLeaveTransition(el, this.$store)
    },
    leave (el, done) {
      leaveTransition(el, this.$store)
      done()
    }
  },
  components: {
    'Left': Left,
    'Middle': Middle,
    'Right': Right
  }
}
</script>
