app.controller("controlador", ["$scope", "chatMessages","UsersAdd", "Users",
    // we pass our new chatMessages factory into the controller
    function($scope, chatMessages, UsersAdd, Users) {
        $scope.user = "David Juez";

        $scope.messages = chatMessages;
        $scope.users = Users;

        $scope.addMessage = function() {
            $scope.messages.$add({
                user: $scope.user,
                text: $scope.message
            });
            $scope.message = "";
        };

        // if the messages are empty, add something for fun!
        $scope.messages.$loaded(function() {
            if ($scope.messages.length === 0) {
                $scope.messages.$add({
                    user: "David Juez",
                    text: "Hola mundo!"
                });
            }
        });

        $scope.addUser = function() {
            $scope.users.$save();
        }

        $scope.userid = function(username){
            $scope.users = UsersAdd(username);
        }
    }
]);