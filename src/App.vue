<script>
import Conditions from './components/Conditions.vue';
import Forms from './components/Forms.vue';
export default{
  components:{Forms,Conditions}
}
</script>

<template>
  <div>
    <Forms name="Form Data"/>
    <Conditions />
  </div>
</template>
