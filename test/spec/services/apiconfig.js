'use strict';

describe('Service: apiConfig', function () {

  // load the service's module
  beforeEach(module('dropblogsApp'));

  // instantiate service
  var apiConfig;
  beforeEach(inject(function (_apiConfig_) {
    apiConfig = _apiConfig_;
  }));

  it('should do something', function () {
    expect(!!apiConfig).toBe(true);
  });

});
