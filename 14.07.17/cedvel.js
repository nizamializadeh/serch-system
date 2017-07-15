
function on(){
var serch  ,table ,input ,tr ,td ,i;

table = document.getElementById("table");
input = document.getElementById("myinput");
tr = document.getElementsByTagName("tr");
search = input.value.toUpperCase();
for(i=0;i<tr.length;i++){
td = tr[i].	getElementsByTagName("td")[0]
if (td) {
      if (td.innerHTML.toUpperCase().indexOf(search) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}



