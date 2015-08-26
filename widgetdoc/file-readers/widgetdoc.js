/**
 * @dgService widgetdocFileReader
 * @description
 * This file reader will pull the contents from a text file (by default .widgetdoc)
 *
 * The doc will initially have the form:
 * ```
 * {
 *   content: 'the content of the file',
 *   startingLine: 1
 * }
 * ```
 */
module.exports = function widgetdocFileReader() {
  return {
    name: 'widgetdocFileReader',
    defaultPattern: /\.widgetdoc$/,
    getDocs: function(fileInfo) {
      // We return a single element array because widgetdoc files only contain one document
      return [{
        content: fileInfo.content,
        startingLine: 1
      }];
    }
  };
};
