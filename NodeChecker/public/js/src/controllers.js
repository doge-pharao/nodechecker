nodeCheckerApp.controller('probeCtrl', function($scope, $http) {
	$scope.addNewHeader = function() {
		$scope.message = $scope.message + 'Fetched after 3 seconds';
	}
});

nodeCheckerApp
	.controller('displayGroupList', function($scope, $http) {
		$http.get('/api/groups').success(function(data, status, headers, config) {
			$scope.groups = data;
		});
	})
	.directive('contentGroup', function() {
		return {
			templateUrl: '/partials/group'
		};
	});

nodeCheckerApp
.controller('displayGroupDetail', ['$scope', '$routeParams', 'groupDetailGetter', function($scope, $routeParams, groupDetailGetter) {
	console.log($routeParams.id);
	groupDetailGetter.get({"id":$routeParams.id}, function(data) {
		$scope.detail = data;
		console.log(data);
	});
}])
.directive('contentGroupDetail', function() {
    var linker = function (scope, element, attrs) {
        scope.rootDirectory = 'images/';

        TemplateService.getTemplate(scope.content.content_type).then(function (response) {
            element.html(response.data);
            $compile(element.contents())(scope);
        });
    };
});

nodeCheckerApp.config(function($routeProvider) {
    $routeProvider

        .when('/group/:id', {
            templateUrl : '/groupDetail',
            controller  : 'displayGroupDetail'
        })

        .when('/', {
            templateUrl : '/groupList',
            controller  : 'displayGroupList'
        })
});


nodeCheckerApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

	  $scope.ok = function () {
			console.log($scope.probeData);
	    $modalInstance.close();
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	});


nodeCheckerApp.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

	$scope.open = function (size) {

	    var modalInstance = $modal.open({
	      templateUrl: '/partials/modals/newProbeModal',
	      controller: 'ModalInstanceCtrl',
	      size: size
	    });

	    modalInstance.result.then(function () {

	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };
	});


nodeCheckerApp.controller('probeTypeSelectionCtrl', function ($scope) {
  	$scope.probeTypes = [
	    {"value":"HTTP", "caption":"HTTP Probe"},
			{"value":"PING", "caption":"PING Probe"},
			{"value":"SOAP", "caption":"SOAP Probe"}
	  ];

		$scope.update = function() {
	    alert($scope.aTypeSelected);
			$scope.$parent.probeData = $scope.aTypeSelected;
	  };

	});
