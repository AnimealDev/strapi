'use strict';

/**
 * autosuggest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::autosuggest.autosuggest');
