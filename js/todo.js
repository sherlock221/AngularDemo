function TodoCtrl($scope) {

    //默认商品
    $scope.todos = [
        {text:'learn angular', done:true},
        {text:'build an angular app', done:false}];



    //增加元素
    $scope.addTodo = function() {
        $scope.todos.push({text:$scope.todoText, done:false});
        $scope.todoText = '';
    };


    //剩余
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };


    //库存
    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };
}