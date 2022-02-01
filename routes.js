const routes = module.exports = require('next-routes')();

routes
.add('/library', '/library/index')

module.exports = routes;

/*
.add('name of the link displayed in browser', 'page file which loads')
*/
