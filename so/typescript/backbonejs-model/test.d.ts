/// <reference path="jquery.d.ts" />
/// <reference path="underscore.d.ts" />
/// <reference path="Backbone.d.ts" />
declare module Test {
    class MyModel extends Backbone.Model {
        constructor(options?: any);
        public myMethod(): any;
    }
    class MyCollection extends Backbone.Collection {
        public model: typeof MyModel;
        public url: string;
    }
    function test(): void;
}
