angular.module('starter.controllers')
  .controller('BettingController', function ($scope) {

    $scope.options = {
      loop: false,
      speed: 500,
      pagination: false
    }

    $scope.stories = [
      {
        score: 8,
        losses: 2,
        wins: 8,
        image: 'http://cdn-img.people.com/emstag/i/2015/news/150817/aniston-dog-1-435.jpg?ppl_tok=8f44424d0d7fa4f45ec3e9a74e140c65'
      },
      {
        score: 6,
        losses: 4,
        wins: 6,
        image: 'http://www.instaglamodels.com/wp-content/uploads/2015/05/Alexis-Ren-1.jpg'

      },
      {
        score: 2,
        losses: 8,
        wins: 2,
        image: 'http://cdn2.estamosrodando.com/biografias/4/2/chloae-grace-moretz-159738.jpg'
      }
    ];

    $scope.loss = function (story) {
      story.losses++;
      updateScore(story);
    };

    $scope.win = function (story) {
      story.wins++;
      updateScore(story);
    };

    var updateScore = function (story) {
      story.score = story.wins*100/(story.losses + story.wins);
    };
  });
