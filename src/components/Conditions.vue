<template>
    <div>
        <div v-if="islogin" class="Card">
            {{ this.islogin }}
            <h1>
                Welcome User
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam officia possimus doloribus voluptates illo!
            </p>
        </div>
        <div v-if="!islogin" class="Card">
            {{ this.islogin }}
            <h1>
                Good Bye
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quibusdam officia possimus doloribus voluptates illo!
            </p>
        </div>
        <div>
            <button v-if="!islogin" @click="login()" style="padding: 10px 20px; background-color: green; color:white;margin: 5px; cursor: pointer;">Login</button>
            <button v-if="islogin" @click="logout" style="padding: 10px 20px; background-color: red; color: white;margin: 5px; cursor: pointer;">Logout</button>
        </div>
    </div>
</template>
<script>
export default{
    name:"Conditions",
    data:function(){
        return{
            islogin:false
        }
    },
    methods:{
        login:function(){
            this.islogin=true
        },
        logout:function(){
            this.islogin=false
        }
    }
}
</script>
<style scoped>
.Card{
    padding: 20px;
    border:1px solid green;
    max-width: 350px;
    margin-top: 10px;
}
.Card h1{
    font-size: 30px;
    font-weight: bold;
}

.Card p{
    font-size: 15px;
}
</style>