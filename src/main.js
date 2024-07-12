import './app.css'
import App from './App.svelte'

window.HOSTED_VIEWER_ORIGINS_EXTENSION = [
  "http://localhost:5173"
]
window.allowAllOrigins = true
const app = new App({
  target: document.getElementsByTagName('body')[0],
})

export default app
