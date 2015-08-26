var _ = require('lodash');

/**
 * @dgService getDocFromAlias
 * @description Get an array of docs that match this alias, relative to the originating doc.
 */
module.exports = function getDocFromAlias(aliasMap, log) {

  return function getDocFromAlias(alias, originatiwidgetDoc) {
    var docs = aliasMap.getDocs(alias);

    // If there is more than one item with this name then try to filter them by the originatiwidgetDoc's area
    if ( docs.length > 1 && originatiwidgetDoc && originatiwidgetDoc.area) {
      docs = _.filter(docs, function(doc) {
        return doc.area === originatiwidgetDoc.area;
      });
    }

    // If filtering by area left us with none then let's start again
    if ( docs.length === 0 ) {
      docs = aliasMap.getDocs(alias);
    }

    // If there is more than one item with this name then try to filter them by the originatiwidgetDoc's module
    if ( docs.length > 1 && originatiwidgetDoc && originatiwidgetDoc.module ) {
      docs = _.filter(docs, function(doc) {
        return doc.module === originatiwidgetDoc.module;
      });
    }

    return docs;
  };
};
