'use strict';

/**
 * Created by Mathias on 18-Jul-14.
 */

simpleApp.directive('autoComplete', function($timeout) {

    return function(scope, iElement, iAttrs) {
        iElement.autocomplete({
            source: scope[iAttrs.uiItems],
            select: function() {
                $timeout(function() {
                    iElement.trigger('textarea');
                }, 0);
            }
        });
    };
});