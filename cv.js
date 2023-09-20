window.addEventListener("load", (event) => {

  let dropdown_icon = document.getElementById("nav-dropdown-icon");

  dropdown_icon.addEventListener("click", function (e) {
    // show a div with the list
      let ul_navbar = document.getElementById("ul-navbar");
      let dropdown_icon = document.getElementById("nav-dropdown-icon");

      dropdown_icon.className = (!dropdown_icon.className) ?
	  "nav-expanded" : "" ;
      ul_navbar.className = (ul_navbar.className === "ul-navbar") ?
	  "ul-navbar nav-expanded" : "ul-navbar" ;
  });

  document.querySelector("#ul-navbar").addEventListener('click', (e) => {
  // e is an event object
  // e.target; is whomever was actually clicked
      let ul_navbar = document.getElementById("ul-navbar");
      ul_navbar.className = (ul_navbar.className === "ul-navbar") ?
	  "ul-navbar nav-expanded" : "ul-navbar" ;
      let dropdown_icon = document.getElementById("nav-dropdown-icon");

      dropdown_icon.className = (!dropdown_icon.className) ?
	  "nav-expanded" : "" ;
  });
    
});


