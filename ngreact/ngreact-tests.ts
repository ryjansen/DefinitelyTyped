/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="ngreact.d.ts" />

class TestComponent {
}

var reactDirective: ngreact.IReactDirectiveService;
var directive: ng.IDirective;

directive = reactDirective("TestComponent");
directive = reactDirective(TestComponent);

directive = reactDirective("TestComponent", ["prop1", "prop2"]);
directive = reactDirective(TestComponent, ["prop1", "prop2"]);

directive = reactDirective("TestComponent", ["prop1", "prop2"], { restrict: 'C' });
directive = reactDirective(TestComponent, ["prop1", "prop2"], { restrict: 'C' });