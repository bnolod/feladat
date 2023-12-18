const numlist = [];

document.getElementById("add_num").addEventListener("click", function() {
  let num = document.getElementById("inp_num").value;
  numlist.push(num);
  document.getElementById("inp_num").value = "";
  document.getElementById("list_num").innerHTML = numlist.join(", ");
});


document.getElementById("show_max").addEventListener("click", function() {
    let max = Math.max( ...numlist);
    document.getElementById("max_num").innerHTML = max;
    });

