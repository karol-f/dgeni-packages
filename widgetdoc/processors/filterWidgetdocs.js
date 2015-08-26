var _ = require('lodash');

/**
 * dgProcessor filterWidgetDocsProcessor
 * @description
 * Remove docs that do not contain the widgetdoc tag
 */
module.exports = function filterWidgetDocsProcessor(log) {
  return {
    $runAfter: ['tags-parsed'],
    $runBefore: ['extracting-tags'],
    $process: function(docs) {
      var docCount = docs.length;
      docs = _.filter(docs, function(doc) {
        return doc.tags.getTag('widgetdoc');
      });
      log.debug('filtered ' + (docCount - docs.length) + ' docs');
      return docs;
    }
  };
};
