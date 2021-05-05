import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// // px2rem 自适应
// import 'lib-flexible';

import Vuebar from 'vuebar';
Vue.use(Vuebar);

// import VideoPlayer from 'vue-video-player'
// import 'videojs-flash'
// //import 'videojs-contrib-hls'//不确定是否需要了
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VideoPlayer)

// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
 
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VueVideoPlayer)


// import VueVideoPlayer from 'vue-video-player'

// // require videojs style
// import 'video.js/dist/video-js.css'


import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
const hls =require("videojs-contrib-hls")
Vue.use(hls)
Vue.use(VideoPlayer)



// // import 'vue-video-player/src/custom-theme.css'

// Vue.use(VueVideoPlayer, /* {
//   options: global default options,
//   events: global videojs events
// } */)


import Axios from "axios"					//axios接口引用
Vue.prototype.$axios=Axios	
import qs from "qs"							//qs引用
Vue.prototype.$qs=qs;	
import VueAxios from 'vue-axios'
Vue.use(VueAxios)



Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
