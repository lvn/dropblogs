'use strict';

/**
 * @ngdoc service
 * @name dropblogsApp.apiConfig
 * @description
 * # apiConfig
 * Factory in the dropblogsApp.
 */

 // object containing API configuration variabbles
angular.module('dropblogsApp')
  .factory('apiConfig', function () {
    
    // configs
    return {
        dropblogPath: 'dropblogs/',
        postsPath: 'dropblogs/posts/',
        leftSidebarFile: 'dropblogs/layout/left-sidebar.md',
        rightSidebarFile: 'dropblogs/layout/right-sidebar.md',

        accessToken: '__ACCESS_TOKEN_HERE', // change accessToken to be your access token
    };
  });
