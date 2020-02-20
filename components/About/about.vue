<template>
  <div class="container__right-about-description" style="opacity: 0">
    <div class="container__right-about-text">
      <p>{{this.firstLine}}</p>
      <p>{{this.status}}</p>
      <p>{{this.secondLine}}</p>
      <p>{{this.stackOne}}</p>
      <p>{{this.stackTwo}}</p>
      <p>{{this.stackThree}}</p>
      <p>{{this.thirdLine}}</p>
      <p>{{this.fourthLine}}</p>
      <p><a :href="`mailto:${this.email}`">{{this.email}}</a></p>
    </div>
    <div class="container__right-about-social">
      <a title="Github link to Corentin Marzin" href="https://github.com/CMarzin" rel="noopener" target="_blank">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
          <path :d="this.pathGithubMark"/>
        </svg>
      </a>
      <a title="Twitter link Corentin Marzin" href="https://twitter.com/marz_coco" rel="noopener" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 203.1">
          <path :d="this.pathTwitterMark" />
        </svg>
      </a>
      <a title="Codepen link Corentin Marzin" href="https://codepen.io/marz_coco/" rel="noopener" target="_blank">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.09 469.09">
          <path :d="this.pathCodepenRound" transform="translate(-15 -15)"/>
          <path :d="this.pathCodepenSquare" transform="translate(-15 -15)"/>
        </svg>
      </a>
      <a title="Unsplash link to user Corentin Marzin" href="https://unsplash.com/marz_coco" rel="noopener" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path :d="this.pathUnsplash"/>
        </svg>
      </a>
      <a title="Linkedin link to user Corentin Marzin" href="https://www.linkedin.com/in/corentin-marzin-4a4371107/" rel="noopener" target="_blank">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.46 18">
          <path :d="this.pathLinkedin"/>
          <path :d="this.pathLinkedinR"/>
        </svg>
      </a>
    </div>
    <div class="container__right-about-made">
      <p>Coded with 🍺 & ☕️</p>
      <p>Copyright Corentin Marzin</p>
      <p>Code available <a alt="Github link porftolio 2018 Corentin Marzin" href="https://github.com/CMarzin/portfolio-2018" rel="noopener" target="_blank">here</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      firstLine: 'Hi, my name is Corentin Marzin.',
      status: 'I am a Creative Developer, young jury awwwards and graduated from HETIC in France.',
      secondLine: 'I like to experiment innovative technologies and love to discover new ways of coding.',
      stackOne: 'I currently mostly use Vue, Nuxt.',
      stackTwo: 'I had the opportunity to work as a project manager on several occasions.',
      stackThree: 'From time to time I could express myself by creating the design of websites or making some svg animation.',
      thirdLine: 'I worked at Edenspiekermann in Berlin, Leeroy in Montreal and Allegro Musique at Clichy near Paris. Today, I am currently working at Colorz in Paris.',
      fourthLine: 'If you need more information or just to say hi, here is my email :',
      email: 'corentinmarzin@free.fr',
      pathGithubMark: `M16.3,0.1C7.3,0.1,0,7.3,0,16.3c0,7,4.5,13.3,11.2,15.5c0.8,0.1,1.1-0.4,1.1-0.8s0-1.4,0-2.8
          c-4.5,1-5.5-2.2-5.5-2.2c-0.3-1-0.9-1.8-1.8-2.4c-1.5-1,0.1-1,0.1-1c1,0.1,2,0.8,2.5,1.7c0.9,1.7,3,2.3,4.7,1.4c0,0,0,0,0,0
          c0.1-0.8,0.4-1.6,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.6,0.6-3.2,1.7-4.4C7.1,9.7,7.1,8.2,7.7,6.8c0,0,1.4-0.4,4.5,1.7
          c2.7-0.7,5.5-0.7,8.2,0c3.1-2.1,4.5-1.7,4.5-1.7c0.6,1.4,0.7,2.9,0.2,4.3c1.1,1.2,1.7,2.8,1.7,4.4c0,6.3-3.8,7.6-7.4,8
          c0.8,0.8,1.2,1.9,1.1,3c0,2.2,0,3.9,0,4.5s0.3,0.9,1.1,0.8c8.5-2.9,13.1-12.1,10.3-20.6C29.5,4.5,23.3,0,16.3,0.1L16.3,0.1z`,
      pathTwitterMark: `M78.6 203.1c94.3 0 145.9-78.2 145.9-145.9 0-2.2 0-4.4-.1-6.6 10-7.3 18.7-16.3 25.6-26.5-9.4 4.1-19.3 6.9-29.5 8.1 10.7-6.4 18.7-16.5 22.5-28.4-10.1 6-21.1 10.2-32.6 12.4C191-4.5 158.5-5.5 137.8 14c-13.3 12.5-19 31.2-14.8 49C81.9 60.9 43.4 41.4 17.4 9.4 3.8 32.8 10.7 62.8 33.3 77.8c-8.2-.2-16.1-2.4-23.3-6.4v.6c0 24.4 17.2 45.4 41.2 50.3-7.6 2.1-15.5 2.4-23.2.9 6.7 20.9 26 35.2 47.9 35.6-18.2 14.3-40.6 22-63.7 22-4.1 0-8.2-.3-12.2-.7 23.5 15.1 50.7 23 78.6 23`,
      pathCodepenRound: 'M249.55 15C120 15 15 120 15 249.55s105 234.54 234.55 234.54 234.55-105 234.55-234.55S379.09 15 249.55 15zm0 430.58c-108.09 0-196-87.94-196-196s87.94-196 196-196 196 87.94 196 196-87.91 196-196 196z',
      pathCodepenSquare: 'M394.46 203.74c0-.18-.07-.36-.1-.54-.06-.35-.13-.7-.22-1s-.13-.4-.19-.6-.2-.61-.32-.91-.18-.41-.28-.61-.27-.56-.42-.82-.24-.39-.35-.58-.34-.51-.53-.76l-.43-.54c-.2-.23-.4-.46-.62-.67s-.32-.34-.5-.49-.46-.4-.7-.59l-.56-.43-.24-.2-132.54-88.38a12.46 12.46 0 0 0-13.83 0L110.07 195l-.21.15c-.19.14-.38.28-.56.43s-.48.39-.71.59-.34.32-.5.49-.42.44-.62.67-.29.36-.43.54-.36.5-.52.76-.24.38-.36.58-.29.54-.42.82-.19.4-.28.61-.22.6-.32.91-.14.4-.19.6-.15.69-.22 1c0 .18-.08.36-.1.54a12 12 0 0 0-.11 1.63v88.37a12.25 12.25 0 0 0 .11 1.63c0 .18.07.36.1.53.06.35.13.7.22 1s.13.4.19.6.2.61.32.92.18.41.28.6.27.56.42.83l.36.57c.16.26.34.51.52.76s.28.37.43.54.4.46.62.67.32.34.5.49.46.41.71.6.37.29.56.43l.21.15 132.56 88.38a12.44 12.44 0 0 0 13.83 0L389 304.1l.21-.15c.19-.14.38-.28.56-.43s.48-.39.7-.6.33-.32.5-.49.42-.44.62-.67.29-.35.43-.54.36-.5.53-.76l.35-.57c.16-.28.29-.55.42-.83s.19-.4.28-.6.22-.61.32-.92.14-.4.19-.6.16-.69.22-1c0-.17.08-.36.1-.53a13 13 0 0 0 .11-1.63v-88.42a12.77 12.77 0 0 0-.08-1.62zM262 140.28l97.65 65.1L316 234.56l-54-36.15zm-24.93 0v58.13l-54 36.15-43.62-29.18zm-107.62 88.41l31.18 20.86-31.18 20.86zm107.63 130.13l-97.65-65.1 43.62-29.17 54 36.14zM249.55 279l-44.08-29.49 44.08-29.49 44.08 29.49zM262 358.82v-58.13l54-36.14 43.62 29.17zm107.63-88.41l-31.18-20.86 31.18-20.86z',
      pathUnsplash: 'M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zM32 10.7v14.9c0 2.3-1.9 4.3-4.3 4.3H4.3C1.9 29.9 0 28 0 25.6v-15c0-2.3 1.9-4.3 4.3-4.3H8L8.8 4c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z',
      pathLinkedin: 'M16.67 0H1.33A1.31 1.31 0 0 0 0 1.3v15.4A1.31 1.31 0 0 0 1.33 18h15.34A1.32 1.32 0 0 0 18 16.7V1.3A1.32 1.32 0 0 0 16.67 0zM5.34 15.34H2.67V6.75h2.67zM4 5.57A1.55 1.55 0 1 1 5.55 4 1.55 1.55 0 0 1 4 5.57zm11.33 9.76h-2.66v-4.17c0-1 0-2.28-1.39-2.28s-1.6 1.12-1.6 2.21v4.25H7V6.75h2.57v1.17a2.8 2.8 0 0 1 2.53-1.39c2.7 0 3.2 1.78 3.2 4.09zM21.66 13.88a.57.57 0 0 0 .58-.61c0-.43-.26-.64-.79-.64h-.86v2.25h.32v-1h.41l.62 1h.34l-.66-1zm-.37-.22h-.37v-.76h.47c.25 0 .53 0 .53.36s-.29.4-.63.4z',
      pathLinkedinR: 'M21.33 11.64a2.13 2.13 0 1 0 2.13 2.13 2.11 2.11 0 0 0-2.13-2.13zm0 4a1.85 1.85 0 1 1 1.82-1.85 1.81 1.81 0 0 1-1.82 1.83z'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>