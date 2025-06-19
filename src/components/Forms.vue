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
        <div v-if="show">
            <UnmountBeforeUnmount />
        </div>
        <button v-on:click="show=!show">click</button>
    </div>
</template>
<script>
import UnmountBeforeUnmount from './UnmountBeforeUnmount.vue';

export default{
    name:"Forms",
    components:{UnmountBeforeUnmount},
    props:{
        name:{type:String, required:true}
    },
    data:function(){
        return{
           user:{
            name:""
           },
           show:false
        }
    },
    methods:{
        register:function(){
            alert(this.user.name)
        }
    }
}
</script>