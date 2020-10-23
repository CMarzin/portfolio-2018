export const state = () => ({
  stateMenu: false,
  pathToPreviousProject: '',
  pathToCurrentProject: '',
  pathToNextProject: '',
  pathToSecondNextProject: '',
  counterProject: 0,
  currentProjectTitle: '',
  projectTitle: [],
  projects: {}
})

export const mutations = {
  updateProjects: (state, projects) => {
    state.projects = projects
  },
  updateProjectTitle: (state, projectTitle) => {
    state.projectTitle = projectTitle
  },
  updatePathToPreviousProject: (state, pathToPreviousProject) => {
    state.pathToPreviousProject = pathToPreviousProject
  },
  updatePathToCurrentProject: (state, pathToCurrentProject) => {
    state.pathToCurrentProject = pathToCurrentProject
  },
  updatePathToNextProject: (state, pathToNextProject) => {
    state.pathToNextProject = pathToNextProject
  },
  updatePathToSecondNextProject: (state, pathToSecondNextProject) => {
    state.pathToSecondNextProject = pathToSecondNextProject
  },
  updateCounterProject: (state, counterProject) => {
    state.counterProject = counterProject
  },
  updateCurrentProjectTitle: (state, currentProjectTitle) => {
    state.currentProjectTitle = currentProjectTitle
  },
  updateStateMenu: (state, stateMenu) => {
    state.stateMenu = stateMenu
  }
}

export const actions = {

  async nuxtServerInit ({ state, commit }) {
    if (state.projects.length) { return }
    try {
      let posts = await fetch('http://localhost:8000/wp-json/wp/v2/posts').then(res => res.json())
      posts = posts
        .filter(el => el.status === 'publish')
        .map(({ id, slug, title, excerpt, date, tags, content, categories, acf }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content,
          categories,
          acf
        }))

      console.log('posts', posts)

      // order the project
      posts = posts.sort((a, b) => a.acf.order - b.acf.order)

      let projectsTitle = []

      for (let i = 0; i < posts.length; i++) {
        projectsTitle.push({
          link: posts[i].slug.replace(/-/g, ''),
          label: posts[i].title.rendered.toUpperCase()
        })
      }

      commit('updateProjectTitle', projectsTitle)

      let formatData = {}

      for (let i = 0; i < posts.length; i++) {
        let newObject = {
          [posts[i].slug.replace(/-/g, '')]: {
            color: posts[i].acf.color,
            description: posts[i].acf.description,
            img: posts[i].acf.img,
            title_link: posts[i].acf.title_link,
            website_link: posts[i].acf.website_link
          }
        }

        formatData = { ...formatData, ...newObject }
      }

      commit('updateProjects', formatData)
    } catch (err) {
      console.log(err)
    }
  }
}
