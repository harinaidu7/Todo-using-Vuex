<template>
 <div>
      <AddTodo/>
     <Todo/>
     <router-view/>
   </div>

</template>

<script>
import Todo from './components/Todo.vue';
import AddTodo from './components/AddTodo.vue';
  export default{
    name: "App",
    components: { Todo, AddTodo }
}

</script>

<style>
  body{
    background-color: #ADF0D1;
    color: #00203f;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
  }
  .container{
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem
  }
  
</style>

