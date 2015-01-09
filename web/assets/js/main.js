// Soluntech Dev



function knack(app){



app.config(['$httpProvider', function($httpProvider) {
    
    $httpProvider.defaults.headers.common['X-Knack-Application-Id'] = "5467c245c96d9e59771409ad";
    $httpProvider.defaults.headers.common['X-Knack-REST-API-Key'] = "5b6eb130-6d5b-11e4-91c8-079fd4e7c8c4";

}]);

return app;

}


   function objCtrl($scope,  $stateParams, knack){


    $scope.objects = [];
    var $knack = knack;


    $scope.get = function(){

		  	$knack.objs()
		    .get()
		    .success(function(rs){
		        console.log(rs);
		        $scope.objects = rs.objects;
		    })
		    .error(function(err){
		         console.log(err);
		    });

    }


    $scope.getFields = function(obj_key){


    	 var obj_key = !obj_key ? $stateParams.object_key : obj_key;

          
    	 $knack.
    	 obj(obj_key).
    	 fields()
    	 .get()
    	 .success(function(rs){
    	 	console.log(rs.object.fields);
    	 	$scope.fields = rs.object.fields;
    	 })
    	 .error(function(err){
    	 	console.log(err);
    	 });

    }

    $scope.getRecords = function(obj_key){

    	var obj_key = (!obj_key) ? $stateParams.object_key : obj_key;

    	console.log(obj_key)
          
    	 $knack.
    	 obj(obj_key)
    	 .records()
    	 .get()
    	 .success(function(rs){
    	 	console.log(rs);
    	 	$scope.records = rs;
    	 	$scope.recordJson = JSON.stringify(rs);
    	 })
    	 .error(function(err){
    	 	console.log(err);
    	 });

    }


    $scope.getRecord = function(record_key, obj_key){

    	var obj_key = (!obj_key) ? $stateParams.object_key : obj_key;
    	var obj_key = (!record_key) ? $stateParams.record_key : record_key;

    	console.log(obj_key)
          
    	 $knack.
    	 obj(obj_key)
    	 .record(record_key)
    	 .get()
    	 .success(function(rs){
    	 	console.log(rs);
    	 	$scope.record = rs;
    	 	$scope.recordJson = JSON.stringify(rs);
    	 })
    	 .error(function(err){
    	 	console.log(err);
    	 });

    }

    $scope.details= function(){
    	
    	 alert(JSON.stringify(this.field));

    }

    $scope.createObject = function(){

    

    }


    $scope.main = function(){ $scope.get(); }


  }


  function knackFactory($http){


        this.uri = undefined;
        this.obj_key = undefined;
        this.field_key = undefined;  
        this.base_url = 'https://api.knackhq.com';

        this.objs = function(){ this.uri = '/v1/objects/'; return this;}
        this.obj = function(_obj_key){ console.log(_obj_key); this.obj_key = _obj_key; this.uri = '/v1/objects/'+this.obj_key+'/'; return this;}
        this.fields = function(){ this.uri = '/v1/objects/'+this.obj_key+'/'; return this;}
        this.field = function(_field_key){ this.field_key = _field_key; this.uri = '/v1/objects/'+this.obj_key+'/fields/'; return this; }
        this.records = function(){  this.uri = '/v1/objects/'+this.obj_key+'/records/'; return this; }
        this.record = function(_record_key){ this.record_key = _record_key; this.uri = '/v1/objects/'+this.obj_key+'/records/' + this.record_key; return this; }
        this.get = function(){ return (this.uri) ? $http.get(this.base_url + this.uri) : false; }   
        this.create = function(data){ return (this.uri) ? $http.post(this.base_url + this.uri, data) : false; }
        this.del = function(){ return (this.uri) ? $http.delete(this.base_url + this.uri) : false; }
        this.update = function(data){ return (this.uri) ? $http.put(this.base_url + this.uri, data) : false; }

        return this;           

    

  }

