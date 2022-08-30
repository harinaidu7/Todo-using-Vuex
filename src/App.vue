<template>
 <div>
     <Todo/>
     <router-view/>
   </div>

</template>

<script>
import Todo from './components/Todo.vue';
  export default{
    name: "App",
    components: { Todo }
}

</script>

