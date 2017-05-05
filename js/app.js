
(function(){
  var user = {
    id: 0,
    name: "",
    address:"",
    email: "",
    mobile: "",
    gender: "",
  }
  var handler = {
    //saves info to local storage
    saveEntry: function (){
      var inputs = document.querySelectorAll(".tcell");
        user.id = inputs[0].value;
        user.name = inputs[1].value;
        user.address = inputs[2].value;
        user.email = inputs[3].value;
        localStorage.setItem("user_" + localStorage.length, JSON.stringify(user));
        location.reload();
    },

    //clears textboxes
    clearEntry: function(){
      var inputs = document.querySelectorAll(".tcell");
      for(i = 0; i< inputs.length; i++){
        inputs[i].value = "";
      };
    },
    clearAll: function(){
      localStorage.clear(); 
      location.reload();
    },
    //displays entries
    displayEntry: function(){
      if (localStorage.length > 0){
        var render = "<div>";
        render += "<div id='entry_containter'>Entries:</div>";
        for(i = 0; i < localStorage.length; i++){
          var key = localStorage.key(i);
          var entry = localStorage.getItem(key);
          var data = JSON.parse(entry);
          render += "<ul>";
          render += "<li>" + data.id + "</li>";
          render += "<li>" + data.name + "</li>";
          render += "<li>" + data.address + "</li>";
          render += "<li>" + data.email + "</li>";
          render += "</ul>"
        }
      render += "</div>"
      display_container.innerHTML = render;
      }
    }
  };

  var save = document.getElementById('save');
    save.addEventListener('click', handler.saveEntry);
  var clear = document.getElementById('clear');
    clear.addEventListener('click', handler.clearEntry);
  var clearAll = document.getElementById('clear_storage');
    clearAll.addEventListener('click', handler.clearAll);
  window.onload = function () {
    handler.displayEntry();
  };
})();