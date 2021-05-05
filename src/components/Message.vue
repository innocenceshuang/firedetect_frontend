<template>
    <div class='task'> 
        <h3> {{ message.text }}
        </h3>
        <p> {{ message.timestamp}} </p>
    </div>
</template>

<script>
export default {
    name:'Message',
    props:{
        message: Object,
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