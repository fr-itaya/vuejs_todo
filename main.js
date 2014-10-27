new Vue({
  el: "#todo-list",
  data: {
    title: "今日のTODOs",
    //model
    todos: []
  },
  methods: {
    add:function() {
      this.todos.push({
        content: new Date() + " " + this.todoText
      });
      this.todoText = "";
    },

    delete:function(event) {
      this.todos.$remove(event.targetVM.$data);
    },

    deleteAll:function() {
      this.todos = [];
    }
  }
});
