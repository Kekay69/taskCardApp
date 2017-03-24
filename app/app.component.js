"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_1 = require('./model/task');
var AppComponent = (function () {
    function AppComponent() {
        //task1: Task = {
        //    content: "Learn to Code",
        //    completed: false        
        // }
        this.tasksme = [];
        //   private tasksme = [      //--- removed at the end to polish the "app" ---
        //        new Task(         
        //            "Buy a monkey",
        //            false
        //        ),
        //        new Task(
        //            "Walk the turtle",
        //            false
        //        )
        //   ]
        this.currentTask = new task_1.Task(null, false); //new component property. Initialization of the object
    }
    // creating a new function or method
    AppComponent.prototype.addTask = function () {
        var task = new task_1.Task(this.currentTask.content, this.currentTask.completed); // creating a new task values
        this.tasksme.push(task); // adding to the task array
        this.currentTask.content = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map