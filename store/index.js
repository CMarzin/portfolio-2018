import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    stateMenu: false,
    pathToPreviousProject: '',
    pathToCurrentProject: '',
    pathToNextProject: '',
    pathToSecondNextProject: '',
    counterProject: 0,
    currentProjectTitle: '',
    projectTitle: [
      'influenceurs',
      'jochen gerz',
      'mywings',
      'portfolio',
      'fidget cube',
      'maitre renard',
      'star wars',
      'heaven',
      'be the drop',
      'cher ami'
    ],
    projects: {
      influenceurs: {
        color: 'blue',
        description: 'I worked on this project during my internship at Leeroy Creative Agency. It\'s an agency based in Montréal, I spent 4 months on this project, my mission was to rebuild the website from scratch with Nuxt. Also to make the project easily maintainable I wrote a lot of documentation using Vuepress.',
        img: 'influ.jpg',
        titleLink: 'Page description Influenceurs project',
        links: {
          seeWebsite: 'https://www.influenceurs.quebec'
        }
      },
      jochengerz: {
        color: 'red',
        description: 'I worked on this artistic project at Edenspiekermann. It was challenging because I had no connection with the previous team. I had to manage alone to understand how the website worked. Finally, I could add new functionalities, fix bugs, update the pages and allow the website launch.',
        img: 'gerz.jpg',
        titleLink: 'Page description Jochen Gerz project',
        links: {
          seeWebsite: 'https://www.jochengerz.eu/works'
        }
      },
      mywings: {
        color: 'yellow',
        description: 'I worked on this platform during my time at Edenspiekermann. I mostly did maintenance and sometime I developed new functionalities. It was a huge experience in the management of a big project within a seven people team.',
        img: 'mywings.jpg',
        titleLink: 'Page description Mywings project',
        links: {
          seeWebsite: 'http://mywings.redbull.com/fr-fr/'
        }
      },
      portfolio: {
        color: 'blue',
        description: 'You can see my previous portfolio. The hardest part was the compatibility of the SVG mask with all browsers. I precise that I made the entire  design and coding part.',
        img: 'portfolio.jpg',
        titleLink: 'Page description previous portfolio',
        links: {
          seeWebsite: 'http://corentinmarzin.fr/lab/portfolio-2017/'
        }
      },
      fidgetcube: {
        color: 'red',
        description: 'For this project I created the cube on Cinema 4D, made the slider and integrated several pages and the menu. To enjoy the best experience, it is better to open the website on an android phone with Chrome or Firefox because the API vibrations unfortunaly didn\'t work on IOS by now',
        img: 'fidget1.jpg',
        titleLink: 'Page description Fidget Cube project',
        links: {
          seeWebsite: 'https://suongkevintan.github.io/hetic-p2019-11/'
        }
      },
      maitrerenard: {
        color: 'yellow',
        description: 'It was a fun school project made in a week with some friends at school. The goal was to write a poem and the editor validated if your poem respected some guidelines (Alexandrine, …). I particularly worked on the animations.',
        img: 'maitrerenard.jpg',
        titleLink: 'Page description Maitre renard project',
        links: {
          seeWebsite: 'http://corentinmarzin.fr/lab/maitre-renard/public/'
        }
      },
      starwars: {
        color: 'blue',
        description: 'This project has been made during an intensive week. The theme was Star Wars. I developped the blue visualizer, entirely in DOM which had to react to frequency of the sound.',
        img: 'starwars.jpg',
        titleLink: 'Page description Star Wars project',
        links: {
          seeWebsite: 'http://corentinmarzin.fr/lab/star-wars/'
        }
      },
      heaven: {
        color: 'red',
        description: 'I worked on this during my internship at Cher Ami (Lyon during 3 months). I realized the menu animation and participated to the integration of the site.',
        img: 'heaven.jpg',
        titleLink: 'Page description Heaven project',
        links: {
          seeWebsite: 'https://heaven.fr/'
        }
      },
      bethedrop: {
        color: 'yellow',
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.',
        img: 'bethedrop.jpg',
        titleLink: 'Page description Be the drop project',
        links: {
          seeWebsite: 'https://www.jeanpaulgaultier.com/fr-fr/bethedrop/?fallback=true'
        }
      },
      cherami: {
        color: 'blue',
        description: 'During 3 months, I had my internship at Cher Ami in Lyon. My first project consisted of making some changes on several pages of their website (about/contact). I was in charge to integrate new animations like the loader and the opening animation for the videos.',
        img: 'cherami.jpg',
        titleLink: 'Page description Cher Ami project',
        links: {
          seeWebsite: 'http://cher-ami.tv'
        }
      }
    }
  }
})

export default store
