// plugins/vue-matomo.js

import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default ({ app }) => {
  Vue.use(VueMatomo, {
    // Enables automatically registering pageviews on the router
    router: app.router,

    // Configure your matomo server and site
    host: 'https://arturoai.matomo.cloud',
    siteId: 3,

    // Enables link tracking on regular links. Note that this won't
    // work for routing links (ie. internal Vue router links)
    // Default: true
    enableLinkTracking: true,

    // Require consent before sending tracking information to matomo
    // Default: false
    requireConsent: false,

    // Whether to track the initial page view
    // Default: true
    trackInitialView: true,

    // Changes the default .js and .php endpoint's filename
    // Default: 'piwik'
    trackerFileName: 'matomo',

    // Whether or not to log debug information
    // Default: false
    debug: true
  })
}