'use strict';

/**
 * @ngdoc service
 * @name dropblogsApp.dbApi
 * @description
 * # dbApiFactory
 * Factory in the dropblogsApp.
 */
angular.module('dropblogsApp')
  .factory('dbApiFactory', ['$http', '$q', function ($http, $q) {
    // Service logic
    // ...

    // https://api-content.dropbox.com/1/files/auto/dropblogs/posts/test.md?grant_type=authorization_code&code=APdqGcfl5OEAAAAAAAAAsuwIWlaR4K9CXF9IusfT0aw&client_id=jo9z6w26kwj4ui1&client_secret=uweeysghqjztij3&access_token=APdqGcfl5OEAAAAAAAAAtc_xRxt_-diQ-lt5AYutd26h5jMY08pErUR-7fdPTFea&token_type=bearer&uid=32372778
    
    /* get contents from folder metadata, then get each file and sort by creation date (client_mtime) */

    /*
    var client_id = 'jo9z6w26kwj4ui1';
    var client_secret = 'uweeysghqjztij3';
    var code = 'APdqGcfl5OEAAAAAAAAAvMAlpAlWRNZBTGdkb6Us7gk';
    var access_token = '';

    $http.post('https://api.dropbox.com/1/oauth2/token', {}, 
    {
      client_id: client_id,
      client_secret: client_secret,
      code: code
    })
    .success(function(response){
      access_token = response.access_token;
    });
    */

    var access_token = 'APdqGcfl5OEAAAAAAAAAv4DMublsAvwHBp-xP3Zpyy9Om41t9Xoop2jKVdkmExPA';


    // Public API here
    return {
      getBlogPostList: function () {
        var deferred = $q.defer();
        $http.get('https://api.dropbox.com/1/metadata/auto/dropblogs/posts?access_token=APdqGcfl5OEAAAAAAAAAv4DMublsAvwHBp-xP3Zpyy9Om41t9Xoop2jKVdkmExPA')
        .success(function (response) {
          deferred.resolve(response);
        });
        return deferred.promise;
      },
      getBlogPost: function(filename) {
        var deferred = $q.defer();
        $http.get('https://api-content.dropbox.com/1/files/auto/dropblogs/posts/' + filename,
          {access_token: access_token})
        .success(function (response) {
          deferred.resolve(response);
        });
        return deferred.promise;
      }
    };
  }]);
