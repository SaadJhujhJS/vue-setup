<script>
import Conditions from './components/Conditions.vue';
import Forms from './components/Forms.vue';
import Looping from './components/Looping.vue';
export default{
  components:{Forms,Conditions,Looping}
}
</script>

<template>
  <div>
    <Forms name="Form Data"/>
    <Conditions />
    <Looping />
  </div>
</template>
