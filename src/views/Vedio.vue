<template>
  <div class="player-container">
    <video-player class="vjs-custom-skin" :options="playerOptions"></video-player>
  </div>
</template>

<script>
//引入video样式
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

//引入hls.js
import 'videojs-contrib-hls.js/src/videojs.hlsjs'

export default {
  name: 'Vedio',
  data() {
    return {
      playerOptions: {
        playbackRates: [1.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        controls: false, //控制条
        preload: 'auto', //视频预加载
        muted: false, //默认情况下将会消除任何音频。
        loop: false, //导致视频一结束就重新开始。
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        techOrder: ['html5'],
        sources: [{
          type: 'application/x-mpegURL',
          src: 'http://127.0.0.1:8085/live/stream.m3u8',
          // src: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8'
        }],
        poster: "", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>