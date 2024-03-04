import { createApp } from 'vue'
import './styles/style.css'
import 'uno.css'
import { Quasar } from 'quasar'
import App from './App.vue'

// Import Quasar css
import 'quasar/dist/quasar.css'

createApp(App).use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
}).mount(
  (() => {
    const app = document.createElement('div')
    app.id = 'tampermonkey-container'
    document.body.append(app)
    return app
  })(),
)
