/* ==========================================================================
   airZoon Campaign Pages — dev-only preview bar behavior
   Same scaffolding pattern as the Offer Page project's shared/preview-bar.js.
   Generic: any preview-bar button group keyed on a shared data-* attribute
   (data-state, data-incentive-style, ...) toggles that attribute on
   .splash-page-container and updates aria-pressed within its own group —
   a variant can add new toggle groups without touching this file.
   ========================================================================== */

(function(){
  var TOGGLE_ATTRS = ["state", "incentive-style"];

  function wireToggleGroup(container, attr){
    var selector = ".preview-bar [data-" + attr + "]";
    var buttons = document.querySelectorAll(selector);
    buttons.forEach(function(btn){
      btn.addEventListener("click", function(){
        buttons.forEach(function(b){ b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
        if (container) {
          container.setAttribute("data-" + attr, btn.getAttribute("data-" + attr));
        }
      });
    });
  }

  function init(){
    var container = document.querySelector(".splash-page-container");

    TOGGLE_ATTRS.forEach(function(attr){
      wireToggleGroup(container, attr);
    });

    var nav = document.getElementById("variant-nav");
    if (nav) {
      nav.addEventListener("change", function(e){
        window.location.href = e.target.value;
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
