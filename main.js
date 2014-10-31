(function() {
  // TODO: Access-Control-Allow-origin対策してからコメント外す
  var milkcocoa = new MilkCocoa("https://io-wi1roseru.mlkcca.com");

  var app = new Vue({
    el: "#content",
    data: {
      currentView: null
    }
  });

  app.currentView = 'register';

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

  Vue.component('register', {
    template: "#register-template",
    data: {
      email: "",
      password: "",
      confirm: ""
    },
    methods: {
      register: function() {
        var self = this;
        if(this.password != this.confirm) return;
        milkcocoa.addAccount(this.email,
                             this.password,
                             {},
                             function(err, usr) {
          if (err == MilkCocoa.Error.AddAccount.FormatError) {
            self.message = "Format error!";
          } else if(err == MilkCocoa.Error.AddAccount.AlreadyExist) {
            self.message = "The e-mail address is already exists!";
          } else {
            app.currentView = "login";
          }
        });
      },
      goto_login_view: function() {
        app.currentView = "login";
      }
    }
  });
})();
