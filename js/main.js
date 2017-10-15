require(["game", "vue", "modal"], (Game, Vue) => {
  PIXI.loader.load(() => {
    Game.setup();

    setInterval(() => {
      Game.updateData();
      document.querySelector('#playerScore').innerHTML = "Очков " + Game.score;
      document.querySelector('#levelNumber').innerHTML = "Уровень " + Game.levelNumber;
    }, 25);

    new Vue({
      el: "#app",
      data: {
        isPauseMenuVisible: false,
      },
      methods: {
        reload: function() {
          document.location.reload();
        },

        routeHome: function() {
          document.location.href = "../index.html";
        },

        resume: function() {
          Game.start();
        },

        pause: function() {
          Game.stop();
        }
      }
    })
  });
});
