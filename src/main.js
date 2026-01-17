import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as htmlToImage from 'html-to-image';

createApp(App).mount('#app')
htmlToImage()
