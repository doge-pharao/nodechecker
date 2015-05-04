var nodeCheckerApp = angular.module('nodeChecker', ['ui.bootstrap','ngResource', 'ngRoute']);


nodeCheckerApp.factory('TemplateService', function ($http) {
    var getTemplate = function (content) {
        return $http.get('partials/' + content);
    };

    return {
        getTemplate: getTemplate
    };
});

nodeCheckerApp.factory('groupDetailGetter', ['$resource', function($resource) {
	return $resource('/api/groups/:id', { id:'@id' });
}]);
