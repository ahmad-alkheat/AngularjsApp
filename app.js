(function(){
var app = angular.module("store",[]);
var gem = [
	{
	name: "Dodec",
	price: 2.95,
	canPurchase: true,
	soldOut: false,
	reviews: []
	},
	{
	name: "Panta",
	price: 20.4,
	canPurchase: true,
	soldOut: false,
	reviews: []
	}
];
app.controller("storeController",function(){
	this.product = gem;
});

app.controller("tabController",function($scope){
	$scope.tab = 1;
	$scope.SetTab = function(value){
		$scope.tab = value;
	};

	$scope.IsSet = function(value){
		return value === $scope.tab;
	}
});

app.controller("ReviewController", function($scope){
	$scope.review = "";

	$scope.addReview = function(product){
		product.reviews.push($scope.review);
		$scope.review = "";
	};

});

app.directive("productName",function(){
    return {
        restrict : "E",
        templateUrl : 'product-name.html'
    };
});




})();
