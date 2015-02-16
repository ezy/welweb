'use strict';

/**
 * @ngdoc function
 * @name wwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwApp
 */

var wwApp = angular.module('wwApp', ['ng', 'ngResource', 'angular-loading-bar']);

wwApp.factory('flickrPhotos', function($resource) {
  return $resource('http://api.flickr.com/services/feeds/photos_public.gne', {
    format: 'json',
    jsoncallback: 'JSON_CALLBACK'
  }, {
    'load': {
      'method': 'JSONP'
    }
  });
});

wwApp.controller('MasonryCtrl', function($scope, flickrPhotos) {
  $scope.photos = flickrPhotos.load({
    tags: 'wellington nz'
  });
});