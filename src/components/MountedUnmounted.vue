<template>
    <div>
        <h1>
            Mounted UnMounted
        </h1>
    </div>
</template>
<script>
export default{
    name:"MountedUnmounted",
    beforeMount(){
        console.log("Before Mount",this.$el)
    },
    mounted(){
        console.log("Mounted",this.$el)
    }
}
</script>