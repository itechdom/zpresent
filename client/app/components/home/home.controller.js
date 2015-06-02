class HomeController {
	constructor($scope,$timeout){
		this.name = 'home';
		$scope.slides = [
			"Hello",
			"Hi",
			"home"
		];
		$timeout(function(){

			$scope.slides = [
				"Horray",
				"Hi",
				"Howdy"
			];

		},1000);

	}
}

export default HomeController;