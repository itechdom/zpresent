class HomeController {
	constructor($scope,$timeout,homeService){
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