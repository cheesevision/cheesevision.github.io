require(["game", "vue", "modal"], (Game, Vue) => {
  PIXI.loader.load(() => {
    setInterval(() => {
      Game.updateData();
      document.querySelector('#playerScore').innerHTML = "Очков " + (Game.score ? Game.score : 0);
      document.querySelector('#levelNumber').innerHTML = "Уровень " + (Game.levelNumber ? Game.levelNumber : 1);
    }, 25);

    let app = new Vue({
      el: "#app",
      data: {
        isPauseMenuVisible: false,
        isMainMenuVisible: true,
        isAboutGameVisible: false,
        isGameSetup: false
      },
      methods: {
        reload: function() {
          document.location.reload();
        },

        routeMainMenu: function() {
          this.isPauseMenuVisible = false;
          Game.exit();
          setTimeout(function() {
            app.isMainMenuVisible = true;
          }, 250);
        },

        routeAboutGame: function() {
          this.isMainMenuVisible = false;
          setTimeout(() => {
            app.isAboutGameVisible = true;
          }, 250);
        },

        closeAboutGame: function() {
          this.isAboutGameVisible = false; 
          setTimeout(() => {
            app.isMainMenuVisible = true;
          }, 250);
        },

        play: function() {
          this.isMainMenuVisible = false;
          Game.setup();

          if (!this.isGameSetup) 
            Game.addAnimation();

          Game.start();
        },

        resume: function() {
          this.isPauseMenuVisible = false;
          Game.start();
        },

        pause: function() {
          Game.stop();
        }
      }
    })
  });
});