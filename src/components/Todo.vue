<template>
    <div>
        <h1>Todo list</h1>
        <div class="todos">
            <div v-for="todo in allTodos" :key="todo.id" class="todo"  >
                {{todo.title}}
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters,mapActions } from 'vuex';
    export default {
        name:'Todo',
        methods:{
            ...mapActions(['fetchTodos'])
        },
        computed:mapGetters(['allTodos']),
        created(){
            this.fetchTodos();
        }


    }
</script>

<style scoped >

    .todos{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap:1rem;
    }

    .todo{
      
      background: #41b883;
      padding: 1rem;
      border-radius:5px;
      text-align:center;
      position: relative;
      cursor: pointer;
      border: 1px solid #ccc          
    }
    

</style>