import { defineAppSetup } from '@slidev/types'

const initialState = '/9'
const advanceSubpage = '/10'
const branchSubpage = '/11'
const mainFlowNext = '/12'

export default defineAppSetup(({ router }) => {
  router.beforeEach((to, from) => {
    if (to.name !== 'play' || from.name !== 'play')
      return true

    if (from.path === initialState && to.path === advanceSubpage)
      return to.hash === '#advance' ? true : { path: mainFlowNext }

    if (from.path === initialState && to.path === branchSubpage)
      return { path: mainFlowNext }

    if (from.path === advanceSubpage && to.path === branchSubpage)
      return to.hash === '#branch' ? true : { path: mainFlowNext }

    if (from.path === branchSubpage && to.path === advanceSubpage)
      return { path: initialState }

    if (from.path === mainFlowNext && to.path === branchSubpage)
      return { path: initialState }

    return true
  })
})
