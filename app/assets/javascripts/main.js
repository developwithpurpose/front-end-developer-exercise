(function() {

  document.addEventListener("DOMContentLoaded", function(event) { 

    var ajaxf2 = function(the_page) {
      var request = new XMLHttpRequest();
      request.open('GET', the_page, true);

      var data = '';
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);
          for (var dt in data.friends) {
            console.log(data.friends[dt].firstName + ' ' + data.friends[dt].lastName);
          }

        } else {
          data =  '<p>error</p>';
        }
      };

      request.onerror = function() {
        alert('error');
      };
      request.send();
    } //ajaxf

    var ajaxf = function(the_page, func) {
      var request = new XMLHttpRequest();
      request.open('GET', the_page, true);

      var data = '';
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          //var data = JSON.parse(request.responseText);
          func(request.responseText); 
        } else {
          data =  '<p>error</p>';
        }
      };

      request.onerror = function() {
        alert('error');
      };
      request.send();
    } //ajaxf


    var inner_content = document.getElementById('inner_content');
    var loadData = function(dta) {
      inner_content.innerHTML = dta;
      inner_content.className = 'inner animate';
      ajaxf2('baby-steps.json');
    }

    var navigation = document.querySelectorAll('nav a');

    function clearClass(links) {
      for (var i = 0; i < links.length; i++) {
        links[i].className = '';
      }
    }

    for (var i = 0; i < navigation.length; i++) {
      navigation[i].href = '#0';
        navigation[i].onclick = function(e) {
        clearClass(navigation);
        this.className = 'active';
        var page = e.target.innerHTML.trim().slice(-1);
          var cur_page = 'step' + page + '.html';
          ajaxf(cur_page, loadData);
      }
    }
  });
})();