<template>
    <div class='task'> 
        <h3> Device {{ device.device_id }}
        </h3>
        <p> {{ device.status}} </p>
    </div>
</template>

<script>
export default {
    name:'Device',
    props:{
        device: Object,
    },
    methods:{
      
    }
}
</script>

<style scope>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>