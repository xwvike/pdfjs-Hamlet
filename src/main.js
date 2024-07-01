import './app.css'
import App from './App.svelte'

window.HOSTED_VIEWER_ORIGINS_EXTENSION = [
  "http://localhost:5173"
]
const app = new App({
  target: document.getElementById('app'),
})

export default app
