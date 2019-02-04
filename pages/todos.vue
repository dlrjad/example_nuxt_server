<template>
  <div class="container">
    <header>
      <h1>{{ $t('stuffpage.listStuff') }} {{counter}}</h1>
      <nuxt-link
        :to="`/`"
        class="btn btn-primary">{{ $t('home') }}</nuxt-link>
    </header>
    <div class="center">
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
        </li>
        <li><input :placeholder="$t('stuffpage.addTask')" @keyup.enter="addTodo"></li>
      </ul>
      <input type="button" class="btn btn-success" :value="$t('stuffpage.remove')" @click="removeItem">
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'layout_01',
  data() {
    return {
      counter: 0
    }
  },
  created() {
    this.counter = this.$store.state.counter
  },
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      this.$store.commit('increment')
      this.counter = this.$store.state.counter
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    }),
    removeItem() {
      this.$store.commit('todos/remove', this.$store.state.todos.list)
      this.$store.commit('decrement')
      this.counter = this.$store.state.counter
    }
  }
}
</script>

<style scoped>
input {
  padding: 5px;
}
.done {
  text-decoration: line-through;
}
.center {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn.btn-success {
  padding: 7px;
}
</style>
