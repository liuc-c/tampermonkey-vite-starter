import { createApp } from 'vue'
import './styles/style.css'
import 'uno.css'
import App from './App.vue'
import router from './router/index'

createApp(App).use(router).mount(
  (() => {
    const app = document.createElement('div')
    app.id = 'tampermonkey-container'
    document.body.append(app)
    return app
  })(),
)
