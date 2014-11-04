var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Test;
(function (Test) {
    var MyModel = (function (_super) {
        __extends(MyModel, _super);
        function MyModel(options) {
            this.urlRoot = 'apiURL/getmymodel';
            this.idAttribute = 'ID';
            _super.call(this, options);
        }
        MyModel.prototype.myMethod = function () {
            console.log("myMethod() have been called. Model ID is", this.get("ID"));
        };
        return MyModel;
    })(Backbone.Model);
    Test.MyModel = MyModel;

    var MyCollection = (function (_super) {
        __extends(MyCollection, _super);
        function MyCollection() {
            _super.apply(this, arguments);
            this.model = MyModel;
            this.url = 'apiURL/getmycollection';
        }
        return MyCollection;
    })(Backbone.Collection);
    Test.MyCollection = MyCollection;

    function test() {
        var myCollection = new MyCollection();
        myCollection.add([{ ID: "model1" }, { ID: "model2" }, { ID: "model3" }]);

        console.log("Check that the type of models within myCollection is what you expect ;)", myCollection.models);

        myCollection.each(function (myModel) {
            myModel.myMethod();
        });
    }
    Test.test = test;
})(Test || (Test = {}));
//# sourceMappingURL=test.js.map
