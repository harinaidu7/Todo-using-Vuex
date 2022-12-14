import axios from 'axios'

const state = {
  todos:[]
};

const getters ={
  allTodos:(state) => state.todos 
};

const actions={
  async fetchTodos({commit}){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('setTodos',response.data) 
  },
  async addTodos({commit},title){
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed : false});
    commit('newTodos',response.data) 
  },
  async deleteTodos({commit},id){
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodos',id)
  },
  async updateTodo({commit},updTodo)
 {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,updTodo);
    
    commit('updateTodo',response.data);
 }
 }

const mutations ={
  setTodos:(state,todos) => (state.todos=todos),
  newTodos:(state,todos) => (state.todos.unshift(todos)),
  removeTodos:(state,id) => (state.todos = state.todos.filter(todos => todos.id !== id)),
  updateTodo:(state,updTodo)=>{
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if(index != -1){
      state.todos.splice(index,1,updTodo);
    }
  }
}

export default{
    state,
    getters,
    actions,
    mutations
};