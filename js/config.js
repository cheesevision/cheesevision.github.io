requirejs.config({
  paths: {
    pixi: "../lib/pixi.min",
    soundjs: "../lib/soundjs.min",
    vue: "../lib/vue",
    modal: "../js/components/modal"
  }
});

requirejs(["main"]);
