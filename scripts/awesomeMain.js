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

var someList = [
    'Mathias', 'Is', 'Super', 'Duper', 'Handsome'
];

var injuryObjects = [
    {
        code: 'A.1.1.1.2',
        injury: 'Han har det ikke så godt'
    },
    {
        code: 'A.1.1.1.3',
        injurty: 'Han har det fint'
    }
];

var words = ['ASH - Årsagssammenhæng','nvm - nevermind','lol - laughing out loud','brb - be right back','rofl - rolling on the floor laughing'];

var injuryCodes = ['D.1.1.1.4 - Tab af tommelfingers yderstyrke - 12%', 'D.1.1.1.5 - Tab af tommelfingers 1/2 yderstykre - 8%',
    'D.1.1.1.6 - Tommfinger med stift yderled i god stilling - 5%', 'D.1.2.1.7 - Tommelfinger med stift grundled i god stilling - <5%',
    'ASH - Årsagssammenhæng'];

$('#textarea4').textcomplete([
    { // injury code strategy
        match: /\B:\b([\-+.\w{2,}]*)$/,

        search: function (term, callback) {
            callback($.map(injuryCodes, function(injuryCode) {
                return injuryCode.indexOf(term) === 0 ? injuryCode : null;
            }));
        },
        replace: function(injuryCode) {
            return injuryCode + ' ';
        },
        index: 1,
        maxCount: 5,
        placement: top
    }
]);


$('#textarea4').textcomplete([
    { // word shortcut
        match: /\b(\w{2,})$/,
        search: function (term, callback) {
            callback($.map(words, function (word) {
                return word.indexOf(term) === 0 ? word : null;
            }));
        },
        replace: function(word) {

            var splitList = word.split('-');

            return splitList[1].replace(/\s?/, '') + ' ';
            //console.log(splitList);
            //return splitList[1].splitText(1);

            //return splitList[splitList.length-1] + ' ';
        },
        index: 1,
        maxCount: 5,
        placement: top
    }
]);

$('#textarea2').textcomplete([
    { // emoji Strategy
        match: /\B:([\-+\w]*)$/,
        search: function(term, callback) {
            callback($.map(emojies, function(emoji) {
                return emoji.indexOf(term) === 0 ? emoji : nullM
            }));

        },
        template: function(value) {
            return '<img src="styles/images/emoji/' + value + '.png"></img>' + value;
        },
        replace: function (value) {
            return someList[emojies.indexOf(value)] + ' ';
        },
        index: 1,
        maxCount: 7
    }
])



