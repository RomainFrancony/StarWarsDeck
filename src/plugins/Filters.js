import Vue from 'vue';

Vue.filter('humanReadableNumber', function (value) {
    return String(value) ? String(value).replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ') : 0;
});

Vue.filter('capitalize', function (value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1)
});
