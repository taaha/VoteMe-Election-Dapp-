const routes = require('next-routes')();

routes
    .add('/elections/new','/elections/new')    
    .add('/elections/:address/registration', '/elections/show')
    .add('/elections/:address/voting', '/elections/voting')
    .add('/elections/:address/results', '/elections/voting')
    .add('/campaigns/:address/requests', '/campaigns/requests/index')
    .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;