'use strict';

/**
 * autosuggest router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::autosuggest.autosuggest');
