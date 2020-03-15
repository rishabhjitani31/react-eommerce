import { Router } from '../routes'

const log = console.log.bind(console, '[xpm]')

export function listenToParent (eventName, callback) {
  window.addEventListener('message', onMessage)
  return () => window.removeEventListener('message', onMessage)

  function onMessage (event) {
    try {
      const { type, payload } = JSON.parse(event.data) || {}
      if (type === eventName) {
        log('listenToParent', type, payload)
        callback(payload)
      }
    } catch (_) {}
  }
}

export function emitToParent (type, payload) {
  log('emitToParent', type, payload)
  ;(window.parent || window.opener).postMessage(
    JSON.stringify({ type, payload }),
    '*'
  )
}

// Used in embedded website mode. Preview mode (while editing) is /cms-preview.js file.
export default function loadXpmEmbed (appComponent) {
  log('loaded')
  emitToParent('embed:loaded')

  emitCurrentRoute()
  Router.events.on('routeChangeComplete', emitCurrentRoute)

  const unlisteners = [
    listenToParent('xpm:navigate', ({ url }) => {
      window.location.pathname = url
    }),
    listenToParent('xpm:renderLayoutId', ({ layoutId }) => {
      Router.push(`/cms-layout?id=${layoutId}`)
    })
  ]

  let _prevUrl = null
  function emitCurrentRoute () {
    if (
      _prevUrl !== Router.router.asPath &&
      !/^\/cms-layout/.test(Router.router.pathname)
    ) {
      emitToParent('embed:navigate', {
        url: Router.router.asPath.replace(/\?.*$/, '')
      })
    }
    _prevUrl = Router.router.asPath
  }

  return function unlisten () {
    unlisteners.forEach(fn => fn())
  }
}
