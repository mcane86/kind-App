angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SplashController', function($scope, $state) {
  $scope.init = function() {
    setTimeout(function(){
      $state.go('greetings');
    }, 2000);
  }
})

.controller('MilestoneController', function($scope) {
  $scope.milestones = [];
  $scope.milestoneModel = {};
  $scope.milestoneModel.milestone = '';
  $scope.addMilestone = function() {
    $scope.milestones.push($scope.milestoneModel.milestone);
    $scope.milestoneModel = {
      milestone: ''
    };
  };
  $scope.deleteMilestoneItem = function(index) {
    $scope.milestones.splice(index, 1);
  };
})

.controller('PlaylistsCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/preferences.html', {
    scope:$scope
  }).then(function(modal) {
    $scope.prefmodal = modal;
  });

  $scope.openModal = function() {
    $scope.prefmodal.show();
  };
  $scope.closeModal = function() {
    $scope.prefmodal.hide();
  };

  $ionicModal.fromTemplateUrl('templates/about.html', {
    scope:$scope
  }).then(function(modal) {
    $scope.aboutmodal = modal;
  });

  $scope.openAbout = function() {
    $scope.aboutmodal.show();
  };
  $scope.closeAbout = function() {
    $scope.aboutmodal.hide();
  };


});
