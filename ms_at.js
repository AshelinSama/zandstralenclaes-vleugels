var url = window.location.href.split("/");
var page = url[url.length-1].split("?");
if(page[0] == "game_supply_item" && page.length > 1){
  var params = page[1].split("&");
  params.forEach(function(param) {
    var values = param.split('=');
    if(values[0] == "item_count"){
      $('#item_count').val(values[1]);
    }
  });
}

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //console.log(this.responseText);
     var selectedCharID = this.responseURL.split("/");
     selectedCharID = selectedCharID[selectedCharID.length - 1];
     console.log(selectedCharID);
     $(".sidenav > ul:first-of-type").append("<li>Selected Character ID: " + selectedCharID);
     
     var prereg_fill = 'recv_id=GM Team&send_id=' + selectedCharID + '&subject=Pre-registration rewards&body=Greetings Adventurer! Hereby your pre-registration rewards.'
     
     $(".console").append(`<div class='sara_menu'>
      <div class="menu_header">
        <span class="btn_menu">
          <span class="wrap_icon">
            <span class="ico_line1"></span>
            <span class="ico_line2"></span>
            <span class="ico_line3"></span>
          </span>
        </span>
      <h4>Script</h4>
      </div>
      <span class="full_menu">
       <h5>Mail pre-registration rewards</h5>
       <ul>
        <li><a href='/game_user'>50000 Gold - Adjust manually in Account Info</a></li>
        <li><a href='/game_supply_item?` + prereg_fill + `&item_type=43003'>Weapon Enchant Scroll</a></li>
        <li><a href='/game_supply_item?` + prereg_fill + `&item_type=42015&item_count=3'>Intermediate Swiftness Elixir</a></li>
        <li><a href='/game_supply_item?` + prereg_fill + `&item_type=42004&item_count=3'>Intermediate Haste Elixir</a></li>
        <li><a href='/game_supply_item?` + prereg_fill + `&item_type=42045&item_count=3'>Versa's Grace</a></li>
       </ul>
      </span>
     </div>`);
     
     $(".menu_header").click(function(){
       $(".sara_menu").toggleClass("on");
     });
    }
  };
  xhttp.open("GET", "/game_user", true);
  xhttp.send();
  
  
var style = document.createElement('style');
style.innerHTML = `.sara_menu {
  position: absolute;
  left: 20px;
  top: 20px;
  background: black;
  color: white;
  text-align: left;
}

.sara_menu a {
  color: white;
}

.sara_menu .full_menu {
  display: none;
  padding: 10px 20px;
}
.on.sara_menu .full_menu {
  display: block;
}

.menu_header h4 {
  display: inline-block;
  vertical-align: top;
  padding-top: 7px;
  font-size: 20px;
}

.menu_header{cursor:pointer;padding: 0 10px 0 5px}
.btn_menu{display:inline-block;overflow:hidden;position:relative;height:40px;width:40px;margin:0}
.btn_menu .wrap_icon{position:absolute;width:18px;height:14px;top:50%;left:50%;
  -webkit-transform:translate(-50%, -50%);
  transform:translate(-50%, -50%)}
.btn_menu [class^="ico_line"]{position:absolute;left:-2px;width:18px;height:2px;background-color:#fff;border-radius:1px}
.btn_menu .ico_line1{top:0;
  -webkit-transition:top 0.2s ease-in-out 0.3s, -webkit-transform 0.3s ease-in-out;
  transition:top 0.2s ease-in-out 0.3s, transform 0.3s ease-in-out;
  transition:transform 0.3s ease-in-out, top 0.2s ease-in-out 0.3s;
  transition:transform 0.3s ease-in-out, top 0.2s ease-in-out 0.3s, -webkit-transform 0.3s ease-in-out;
}
.btn_menu .ico_line2{top:0;bottom:0;margin:auto;
  -webkit-transition:opacity 0s ease-in-out 0.3s;
  transition:opacity 0s ease-in-out 0.3s}
.btn_menu .ico_line3{bottom:0;
  -webkit-transition:opacity 0s ease-in-out 0.3s, bottom 0.2s ease-in-out 0.3s;
  transition:opacity 0s ease-in-out 0.3s, bottom 0.2s ease-in-out 0.3s}
.on .btn_menu .ico_line1{top:6px;
  -webkit-transform:rotate(135deg);
  transform:rotate(135deg);
  -webkit-transition:top 0.3s ease-in-out, -webkit-transform 0.3s linear 0.3s;
  transition:top 0.3s ease-in-out, -webkit-transform 0.3s linear 0.3s;
  transition:top 0.3s ease-in-out, transform 0.3s linear 0.3s;
  transition:top 0.3s ease-in-out, transform 0.3s linear 0.3s, -webkit-transform 0.3s linear 0.3s}
.on .btn_menu .ico_line2{opacity:0;
  -webkit-transition:opacity 0s ease-in-out 0.3s;
  transition:opacity 0s ease-in-out 0.3s}
.on .btn_menu .ico_line3{bottom:7px;opacity:0;
  -webkit-transition:bottom 0.3s ease-in-out, opacity 0s ease-in-out 0.3s;
  transition:bottom 0.3s ease-in-out, opacity 0s ease-in-out 0.3s}
.btn_menu .ico_line1:before{position:absolute;left:0;width:100%;height:2px;border-radius:1px;background-color:#fff;content:'';
  -webkit-transition:-webkit-transform 0.1s ease-in-out 0.2s;
  transition:-webkit-transform 0.1s ease-in-out 0.2s;
  transition:transform 0.1s ease-in-out 0.2s;
  transition:transform 0.1s ease-in-out 0.2s, -webkit-transform 0.1s ease-in-out 0.2s}
.on .btn_menu .ico_line1:before{
  -webkit-transform:rotate(90deg);
  transform:rotate(90deg);
  -webkit-transition:-webkit-transform 0.1s ease-in-out 0.3s;
  transition:-webkit-transform 0.1s ease-in-out 0.3s;
  transition:transform 0.1s ease-in-out 0.3s;
  transition:transform 0.1s ease-in-out 0.3s, -webkit-transform 0.1s ease-in-out 0.3s}`
document.head.appendChild(style);