<template>
    <div>
        <h1>{{ this.name }}</h1>
        <h2>{{ this.user }}</h2>
        <div>
            <form @submit.prevent="register()">
                <div>
                    <input type="text" v-model="user.name">
                </div>
                <div>
                    <input type="submit" value="submit">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default{
    name:"Forms",
    props:{
        name:{type:String, required:true}
    },
    data:function(){
        return{
           user:{
            name:""
           }
        }
    },
    methods:{
        register:function(){
            alert(this.user.name)
        }
    }
}
</script>