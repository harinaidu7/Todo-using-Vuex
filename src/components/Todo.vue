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
    import { mapGetters } from 'vuex';
    export default {
        name:'Todo',
        computed:mapGetters(['allTodos'])
    }
</script>

<style scoped>

</style>