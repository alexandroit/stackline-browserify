t.same(require('./skip.js'), {});
t.same(require('./double-skip/index'), {foo: 'bar'});