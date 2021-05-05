<template>
  <div class="row" >
    <div class="column_left">
      <div class="left-top">
        <!-- <h3>1-1</h3> -->
        <Messages :messages="messages" />
      </div>
      <div class="left-bottom">
        <h3>1-2</h3>
      </div>
    </div>
    <div class="column_mid">
      <h2>col2</h2>
    </div>
    <div class="column_right">
      <Devices :devices = "devices" />
    </div>
  </div>
</template>




<script>
// @ is an alias to /src
import Messages from '../components/Messages'
import Devices from '../components/Devices'
export default {
  name: "Home",
  components: {
    Messages,
    Devices,
  },
  data() {
    return {
      messages:[],
      devices:[],
    }
  },
  methods:{
    async fetchMessages() {
      const res = await fetch(`http://127.0.0.1:8000/fire/message/`)
      const data = await res.json()
      return data
    },
    async fetchDevices() {
      const res = await fetch(`http://127.0.0.1:8000/fire/device/`)
      const data = await res.json()
      return data
    }
  },
  async created(){
    this.messages = await this.fetchMessages()
    this.devices = await this.fetchDevices()
  },
};
</script>

<style scoped>
    .row {
      content: "";
      display: flex;
      clear: both;
      overflow:hidden;
    }

    .column_mid{
      Flex:2;
      border: 1px solid steelblue;
      height: 90vh;
      overflow:auto;
    }

    .column_left{
      Flex:1;
      border: 1px solid steelblue;
      height: 90vh;
      display: flex;
      flex-direction:column;
      align-items: stretch;
      padding: 4px;
      overflow:auto;
    }

    .column_right{
      Flex:1;
      border: 1px solid steelblue;
      height: 90vh;
      overflow:auto;
    }

    .left-top{
      Flex:1;
      border: 1px solid pink;
      overflow:auto;
    }
    .left-bottom{
      Flex:1;
      border: 1px solid pink;
      overflow:auto;
    }
    
</style>