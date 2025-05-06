<template>
  <div>
    <div v-if="!loading">
        <Spinner />
    </div>
    <h1 style="margin-top: 10px; font-size: 30px; font-weight: 600">
      Table Data
    </h1>
    <div v-if="errorMessage">
        {{ errorMessage }}
    </div>
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody v-if="loading && users.length>0" v-for="user in users" :key="user.id">
        <tr>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address.city }}</td>
          <td>{{ user.website }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { UserServce } from '@/UsersData/UserData1';
import Spinner from './Spinner.vue';

export default {
  name: "Looping",
  components:{Spinner},
  data: function () {
    return {
      loading: false,
      users: [],
      errorMessage: null,
    };
  },
  created: async function(){
    try {
        this.loading=true;
        let response=await UserServce.getAllUsers();
        this.users=response.data
    }
    catch(error){
        this.loading=false;
        this.errorMessage=error
    }
  }
};
</script>
<style scoped>
table th {
  font-weight: 700;
}
</style>
