!function(){"use strict";angular.module("public",["ngAnimate","ngCookies","ngSanitize","ui.router","ui.bootstrap","toastr","ngFileUpload"])}(),function(){"use strict";function e(e){var n={restrict:"E",templateUrl:"app/components/senseItem/senseItem.html",scope:{senseId:"@",imgId:"@"},link:function(n,t,i){n.sense={},i.$observe("senseId",function(e){n.sense.senseId=e}),i.$observe("imgId",function(e){n.sense.imgId=e}),n.delDevice=e.delDevice}};return n}e.$inject=["deviceList"],angular.module("public").directive("ngSenseItem",e)}(),function(){"use strict";function e(){function e(e,t,i,s){var o=this;o.getDevices=e.getDevices,o.delDevice=e.delDevice,t.$watch(function(){return e.getDevices},function(e,n){s.info("data change"+e+" "+n)},!0),o.open=function(){var t=i.open({animation:1,templateUrl:"addModalContent.html",controller:n,controllerAs:"vm"});t.result.then(function(n){e.setDevice(n.id,n.imgId),s.info("Generating sense id: "+n.id+", imageId:"+n.imgId)},function(){s.info("Modal dismissed at: "+new Date)})}}function n(e){var n=this;n.imgId=10+Math.floor(54*Math.random()),n.senseId="",n.ok=function(){e.close({id:n.senseId,imgId:n.imgId})},n.cancel=function(){e.dismiss("cancel")}}e.$inject=["deviceList","$scope","$modal","$log"],n.$inject=["$modalInstance"];var t={restrict:"E",templateUrl:"app/components/senseContent/senseContent.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("public").directive("ngSenseContent",e)}(),function(){"use strict";function e(){function e(){}var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return n}angular.module("public").directive("ngNavbar",e)}(),function(){"use strict";function e(e,n){function t(){return o}function i(t,i){e({method:"POST",url:"api/registerDevice",data:{senseId:t,senseIcon:i}}).then(function(e){n.info(e)},function(e){n.info(e)}),o[t]=i}function s(n){e({method:"DELETE",url:"api/devices/"+n}),delete o[n]}var o={};e({method:"GET",url:"api/devices"}).then(function(e){var n=angular.fromJson(e.data.result);n.forEach(function(e){o[e.senseId]=e.senseIcon})},function(e){n.info(e)}),this.getDevices=t,this.setDevice=i,this.delDevice=s}e.$inject=["$http","$log"],angular.module("public").service("deviceList",e)}(),function(){"use strict";function e(e,n){function t(){e(function(){s.classAnimation="rubberBand"},4e3)}function i(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),s.classAnimation=""}var s=this;s.awesomeThings=[],s.classAnimation="",s.creationDate=1445587798203,s.showToastr=i,t()}e.$inject=["$timeout","toastr"],angular.module("public").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("public").run(e)}(),function(){"use strict";function e(e,n){e.state("think",{url:"/think",templateUrl:"app/node-red/node-red.html"}).state("sense",{url:"/sense",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("404",{url:"/404",templateUrl:"app/exception/404.html"}),n.when("","/sense"),n.otherwise("404")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("public").config(e)}(),function(){"use strict"}(),function(){"use strict";function e(e,n){e.debugEnabled(!0),n.allowHtml=!0,n.timeOut=3e3,n.positionClass="toast-top-right",n.preventDuplicates=!0,n.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("public").config(e)}(),angular.module("public").run(["$templateCache",function(e){e.put("app/exception/404.html",'<div class="container"><h1 style="text-align: center">404 NOT FOUND</h1></div>'),e.put("app/main/main.html",'<div class="container-fluid"><div class="container"><ng-sense-content></ng-sense-content></div></div>'),e.put("app/node-red/node-red.html",'<div class="node-red-box"><iframe src="http://localhost:3000/node-red" width="100%" height="100%" scrolling="no" frameborder="0"></iframe></div>'),e.put("app/components/navbar/navbar.html",'<div class="row" id="header"><div class="col-md-2"><div class="logo-img pull-left"><img src="assets/images/IBM_IoT_cloud2.png" width="117px"></div></div><div class="col-md-4"><div class="logo-text"><h1>HUMIX NG</h1><h4>Homemade Robot</h4></div></div><div class="col-md-6 header-options"><ul class="list-inline breadcrumbs"><li><a ui-sref="sense">Sense</a></li><li><a ui-sref="think">Think</a></li><li class="active"><a href="#">Family</a></li><li><a href="#">Login</a></li></ul></div></div>'),e.put("app/components/senseContent/senseContent.html",'<div class="sense-container"><div class="title"><button class="btn btn-default" ng-click="vm.open()">Add Sense</button><hr></div><div class="row"><ng-sense-item class="col-md-4" ng-repeat="(key, val) in vm.getDevices()" sense-id="{{ key }}" img-id="{{ val }}"></ng-sense-item></div></div><script type="text/ng-template" id="addModalContent.html"><div class="modal-header"> <h3 class="modal-title">Add Sencse</h3> </div> <div class="modal-body"> <form class="form-horizontal"> <div class="form-group"> <div class="col-sm-3 modal-thumbnail-block"> <img ng-src="assets/images/bluemix-icon-list/i-appicon-{{ vm.imgId }}-50.png" class="img-thumbnail" alt="thumbnail" /> </div> <label class="col-sm-1 control-label" for="sense-id">ID: </label> <div class="col-sm-8"> <input type="text" id="sense-id" class="form-control" placeholder="Humix-Godzilla" ng-model="vm.senseId"/> </div> </div> </form> </div> <div class="modal-footer"> <button class="btn btn-primary" type="button" ng-click="vm.ok()">OK</button> <button class="btn btn-warning" type="button" ng-click="vm.cancel()">Cancel</button> </div></script>'),e.put("app/components/senseItem/senseItem.html",'<div class="panel panel-default"><div class="row panel-heading"><div class="col-md-10">Sense</div><div class="col-md-2"><input type="image" src="assets/images/trash.png" ng-click="delDevice(sense.senseId)"></div></div><div class="panel-body"><div class="row"><div class="col-md-4"><img ng-src="assets/images/bluemix-icon-list/i-appicon-{{ sense.imgId }}-50.png" class="img-thumbnail" alt="thumbnail"></div><div class="col-md-8"><div class="input-group"><span class="input-group-addon" id="sizing-addon2">ID</span> <input type="text" class="form-control" ng-model="sense.senseId"></div></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-9b6f1fc715.js.map
