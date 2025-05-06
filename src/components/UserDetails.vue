<template>
    <div>
        {{ this.user }}
    </div>
</template>
<script>
import { UserServce } from '@/UsersData/UserData1';

export default{
    name:"UserDetails",
    data:function(){
        return{
            user:{},
        }
    },
    created:async function(){
        let userId=this.$route.params.id;
        try{
            let response=await UserServce.getuser(userId)
            this.user=response.data
        }
        catch(error){
            console.log(error)
        }
    }
}
</script>