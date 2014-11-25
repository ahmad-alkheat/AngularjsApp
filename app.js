var app = angular.module("store",[]);
var gem = [
	{
	name: "Dodec",
	price: 2.95,
	canPurchase: true,
	soldOut: true
	},
	{
	name: "Panta",
	price: 20.4,
	canPurchase: true,
	soldOut: false
	}
];
app.controller("storeController",function(){
	this.product = gem;
})