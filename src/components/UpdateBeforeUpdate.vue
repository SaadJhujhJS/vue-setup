<template>
    <div>
        <h1 ref="count">{{ counter }}</h1>
        <button v-on:click="counter=counter+1">Update Now</button>
    </div>
</template>
<script>
export default{
    name:"UpdateBeforeUpdate",
    data(){
        return{
            counter:0
        }
    },
    beforeUpdate(){
        console.log("Before Update: ",this.$refs['count'].textContent)
    },
    updated(){
        console.log("Updated: ",this.$refs['count'].textContent)
    }
}
</script>