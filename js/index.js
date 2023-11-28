const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(function () {
      document.getElementById("loader-wrapper").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 3000);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var btntop = document.getElementById("btn-top");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btntop.style.display = "block";
    } else {
      btntop.style.display = "none";
    }
  };

  btntop.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
