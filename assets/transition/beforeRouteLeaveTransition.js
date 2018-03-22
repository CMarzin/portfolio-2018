import anime from 'animejs'

const beforeRouteLeaveTransition = (el, store, next) => {
  const customCurrentClass = 'bonjour-' + store.state.projects[store.state.pathToCurrentProject].color
  const customClassBgNext = 'bonjour-' + store.state.projects[store.state.pathToNextProject].color

  const titleVolet = el.querySelector('.container__left-title-volet')
  const photoVolet = el.querySelector('.container__middle-photo-volet')

  titleVolet.setAttribute('style', 'transform: scaleX(0)')
  titleVolet.classList.add(customCurrentClass)

  photoVolet.classList.add(customClassBgNext)
  photoVolet.setAttribute('style', 'transform: scaleY(0)')

  if (store.state.stateMenu) {
    anime({
      targets: '.container__right-menu-content',
      duration: 500,
      easing: [0.25, 0.1, 0.24, 1.01],
      transformOrigin: ['100% 100% 0', '100% 100% 0'],
      scaleX: 0
    }).finished.then(() => {
      anime({
        targets: '.container__left-prev-volet',
        duration: 500,
        easing: [0.25, 0.1, 0.24, 1.01],
        transformOrigin: ['100% 0% 0', '100% 0% 0'],
        scaleY: 0
      })

      anime({
        targets: '.container__right-next-volet',
        duration: 500,
        easing: [0.25, 0.1, 0.24, 1.01],
        transformOrigin: ['50% 100% 0', '50% 100% 0'],
        scaleY: 0
      })

      /*******************************
      * 250ms of delay
      ********************************/

      anime({
        targets: '.container__middle-photo-volet',
        delay: 250,
        duration: 500,
        easing: [0.25, 0.1, 0.24, 1.01],
        transformOrigin: ['100% 0% 0', '100% 0% 0'],
        scaleY: 1
      })

      anime({
        targets: '.container__left-desc',
        delay: 250,
        duration: 500,
        easing: [0.25, 0.1, 0.24, 1.01],
        opacity: 0
      })

      anime({
        targets: '.container__middle-website-volet',
        delay: 250,
        duration: 500,
        easing: [0.25, 0.1, 0.24, 1.01],
        transformOrigin: ['100% 100% 0', '100% 100% 0'],
        scaleX: 0
      })

      anime({
        targets: '.container__left-title-volet',
        delay: 250,
        duration: 500,
        easing: [0.25, 0.1, 0.24, 1.01],
        transformOrigin: ['100% 100% 0', '100% 100% 0'],
        scaleX: 1
      }).finished.then(() => {
        next()
      })
    })
  } else {
    anime({
      targets: '.container__left-prev-volet',
      duration: 500,
      easing: [0.25, 0.1, 0.24, 1.01],
      transformOrigin: ['100% 0% 0', '100% 0% 0'],
      scaleY: 0
    })

    anime({
      targets: '.container__right-next-volet',
      duration: 500,
      easing: [0.25, 0.1, 0.24, 1.01],
      transformOrigin: ['50% 100% 0', '50% 100% 0'],
      scaleY: 0
    })

    /*******************************
    * 250ms of delay
    ********************************/

    anime({
      targets: '.container__middle-photo-volet',
      delay: 250,
      duration: 500,
      easing: [0.25, 0.1, 0.24, 1.01],
      transformOrigin: ['100% 0% 0', '100% 0% 0'],
      scaleY: 1
    })

    anime({
      targets: '.container__left-desc',
      delay: 250,
      duration: 500,
      easing: [0.25, 0.1, 0.24, 1.01],
      opacity: 0
    })

    anime({
      targets: '.container__middle-website-volet',
      delay: 250,
      duration: 500,
      easing: [0.25, 0.1, 0.24, 1.01],
      transformOrigin: ['100% 100% 0', '100% 100% 0'],
      scaleX: 0
    })

    anime({
      targets: '.container__left-title-volet',
      delay: 250,
      duration: 500,
      easing: [0.25, 0.1, 0.24, 1.01],
      transformOrigin: ['100% 100% 0', '100% 100% 0'],
      scaleX: 1
    }).finished.then(() => {
      next()
    })
  }
}

export default beforeRouteLeaveTransition
