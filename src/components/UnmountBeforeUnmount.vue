<template>
    <div>
        <h1 ref="user">
            Unmount and Before Unmount Life Cycle
        </h1>
    </div>
</template>
<script>
export default{
    name:"UnmountBeforeUnmount",
    beforeUnmount(){
        console.log("Before Unmount: ",this.$refs['user'])
    },
    unmounted(){
        console.log("Unmounted: ",this.$refs['user'])
    }
}
</script>