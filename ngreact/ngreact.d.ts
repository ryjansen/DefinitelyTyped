// Type definitions for ngreact 0.2.0
// Project: https://github.com/ngReact/ngReact
// Definitions by: Ryan Jansen <https://github.com/ryjansen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare namespace ngreact {
    export interface IReactDirectiveService {
        (component: string | Function): ng.IDirective;
        (component: string | Function, propNames: string[]): ng.IDirective;
        (component: string | Function, propNames: string[], conf: ng.IDirective): ng.IDirective;
    }
}
