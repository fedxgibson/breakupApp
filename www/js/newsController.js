angular.module('starter.controllers')
  .controller('NewsController', function ($scope) {

    $scope.newsList = [
      {
        userAvatar: 'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png',
        userName: 'Jhon Doe',
        publishDate: 'November 05, 1995',
        newsTitle: 'Jay Alvarez baby',
        newsImage: 'https://pbs.twimg.com/profile_images/452295063952195584/MlCsIZhV.jpeg'
      },
      {
        userAvatar: 'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46b18e2a80.png',
        userName: 'Foo Fighter',
        publishDate: 'December 09, 1890',
        newsTitle: 'Jenny new dog',
        newsImage: 'https://pbs.twimg.com/profile_images/452295063952195584/MlCsIZhV.jpeg'
      }
    ];
  });
