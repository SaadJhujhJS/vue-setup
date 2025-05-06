<template>
    <div>
        <h2>
            Before Created and Created{{ name }}
        </h2>
    </div>
</template>
<script>
export default{
    name:"CreatedBeforeCreated",
    data(){
        return{
            name:" Saad Ali"
        }
    },
    beforeCreate(){
        alert("BeforeCreated")
    },
    created(){
        this.name=" Saad Jhujh"
        console.log("AfterCreated")
    }
}
</script>