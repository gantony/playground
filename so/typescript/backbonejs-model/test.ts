/// <reference path="jquery.d.ts" />
/// <reference path="underscore.d.ts" />
/// <reference path="Backbone.d.ts" />

module Test {

    export class MyModel extends Backbone.Model {
        constructor(options?) {
            this.urlRoot = 'apiURL/getmymodel';
            this.idAttribute = 'ID';
            super(options);
        }

        myMethod(): any {
            console.log("myMethod() have been called. Model ID is", this.get("ID"));
        }
    }

    export class MyCollection extends Backbone.Collection {
        model = MyModel;    
        url = 'apiURL/getmycollection';
    }

    export function test() {
        
        var myCollection = new MyCollection();
        myCollection.add([{ID: "model1"}, {ID: "model2"}, {ID: "model3"}]);

        console.log("Check that the type of models within myCollection is what you expect ;)", myCollection.models);

        // In UnderscoreJS template I want to call MyModel method myMethod() like this
        myCollection.each(function(myModel: MyModel) {
            myModel.myMethod();
        });
    }

}

