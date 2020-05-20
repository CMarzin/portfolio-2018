export default function ({ route, store }) {
  const ProjectTitle = store.state.projectTitle

  let formatTitle = []

  for (let i = 0; i < ProjectTitle.length; i++) {
    formatTitle.push(ProjectTitle[i].replace(/\s+/g, ''))
  }

  let currentPathName = route.name && route.name !== 'index' ? route.name : formatTitle[0]

  if (route.name === 'slug') {
    currentPathName = route.params.slug
  }

  let indexOfCurrentProject = formatTitle.indexOf(currentPathName)

  let pathToSecondNextProject
  let pathToNextProject
  let pathToCurrentProject
  let pathToPreviousProject

  let currentProjectTitle

  pathToPreviousProject = formatTitle[indexOfCurrentProject - 1] || formatTitle[formatTitle.length - 1]
  pathToCurrentProject = formatTitle[indexOfCurrentProject]
  pathToNextProject = formatTitle[indexOfCurrentProject + 1] || formatTitle[0]
  pathToSecondNextProject = formatTitle[indexOfCurrentProject + 2] || formatTitle[0]

  currentProjectTitle = ProjectTitle[indexOfCurrentProject]

  /*
  **********
  * Update state
  **********
  */

  store.commit('updatePathToPreviousProject', pathToPreviousProject)
  store.commit('updatePathToCurrentProject', pathToCurrentProject)
  store.commit('updatePathToNextProject', pathToNextProject)
  store.commit('updatePathToSecondNextProject', pathToSecondNextProject)

  store.commit('updateCounterProject', indexOfCurrentProject)

  currentProjectTitle = currentProjectTitle.toUpperCase()

  store.commit('updateCurrentProjectTitle', currentProjectTitle)
}
