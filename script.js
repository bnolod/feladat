const numlist = [];

document.getElementById("add_num").addEventListener("click", function() {
  let num = document.getElementById("inp_num").value;
  numlist.push(num);
  document.getElementById("inp_num").value = "";
  document.getElementById("list_num").innerHTML = numlist.join(", ");
});


document.getElementById("show_min").addEventListener("click", function() {
    let min = Math.min( ...numlist);
    document.getElementById("min_num").innerHTML = min;
    });

