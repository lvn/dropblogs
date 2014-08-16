'use strict';

describe('Service: dbApi', function () {

  // load the service's module
  beforeEach(module('dropblogsApp'));

  // instantiate service
  var dbApi;
  beforeEach(inject(function (_dbApi_) {
    dbApi = _dbApi_;
  }));

  it('should do something', function () {
    expect(!!dbApi).toBe(true);
  });

});
