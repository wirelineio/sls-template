//
// Copyright 2017 Wireline, Inc.
//

import Wireline from '@wirelineio/sdk';

module.exports = {

  test: Wireline.exec(async (event, context) => {
    return {
      message: 'Hello'
    };
  })
};
