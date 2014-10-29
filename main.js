(function() {
// TODO: Access-Control-Allow-origin対策してからコメント外す
//var milkcocoa = new MilkCocoa("http://io-wi1roseru.mlkcca.com");

var app = new Vue({
  el: "#content",
  data: {
    currentView: null
  }
});

app.currentView = "todo";

Vue.component('todo', {
  template: "#todo-list-template",
  data: {
    title: "今日のTODOs",
    //model
    todos: []
  },
  methods: {
    add:function() {
      this.todos.push({
        content: this.todoText
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

})();
