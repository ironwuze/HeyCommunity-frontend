var devtool = {};

devtool.clearLocalStorage = function() {
    localStorage.removeItem('timelines');
    localStorage.removeItem('timelineLikes');
    localStorage.removeItem('topics');
    localStorage.removeItem('user');
    localStorage.removeItem('tenantInfo');
    localStorage.removeItem('appLanguage');
}
