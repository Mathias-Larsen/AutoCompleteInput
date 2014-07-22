/**
 * Created by Mathias on 21-Jul-14.
 */

$(function () {

    $('.script').each(function () {
        eval($(this).text());
    });

    var setText = function ($textarea, text) {
        var range, textarea = $textarea.get(0);
        textarea.focus();
        if (typeof textarea.selectionStart === 'number') {
            textarea.value = text;
            textarea.selectionStart = textarea.selectionEnd = text.length;
            return;
        }
        range = textarea.createTextRange();
        range.text = text
        range.select();
    }

    var $textarea = $('#textarea1');
    var textarea = $textarea.get(0);
    $textarea.focus();
    if (typeof textarea.selectionStart === 'number') {
        textarea.selectionStart = textarea.selectionEnd = $textarea.val().length;
    } else {
        var range = textarea.createTextRange();
        range.select();
    }
    $textarea.keyup();

    SyntaxHighlighter.all();
});

var injuryCodes = ['D.1.1.1.4 - Tab af tommelfingers yderstyrke - 12%', 'D.1.1.1.5 - Tab af tommelfingers 1/2 yderstykre - 8%',
    'D.1.1.1.6 - Tommfinger med stift yderled i god stilling - 5%', 'D.1.2.1.7 - Tommelfinger med stift grundled i god stilling - <5%'];
var techCompanies = ['Apple', 'Microsoft'];

$('#textarea4').textcomplete([
    { // injury code strategy
        match: /\B:([\-+.\w]*)$/,
        search: function (term, callback) {
            callback($.map(injuryCodes, function(injuryCode) {
                return injuryCode.indexOf(term) === 0 ? injuryCode : null;
            }));
        },
        replace: function(injuryCode) {
            return injuryCode + ' ';
        },
        index: 1,
        placement: top

    }
]);



