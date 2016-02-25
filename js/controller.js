app.controller("controlador", ["$scope", "chatMessages","UsersAdd", "Users","chatMessagesPersonal",
    // we pass our new chatMessages factory into the controller
    function($scope, chatMessages, UsersAdd, Users,chatMessagesPersonal) {
        $scope.disabled= true;

        $scope.messages = chatMessages;
        $scope.messagesPersonal = chatMessagesPersonal('djl');
        $scope.usuaris = Users;

        $scope.addMessage = function() {
            for(var i = 0; i < $scope.usuaris.length; i++){
                var aux = $scope.usuaris[i];
                if( aux.$id == $scope.user){
                    $scope.messages.$add({
                        user: aux.name,
                        text: $scope.message
                    });
                    $scope.messagesPersonal.$add({
                        text: $scope.message
                    });
                    $scope.message = "";
                    $scope.disabled = true;
                }
            }
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

        $scope.usernameID = function(username){
            $scope.messagesPersonal = chatMessagesPersonal(username);
        }

        $scope.disableButton = function () {
            if($scope.message == ''){
                $scope.disabled = true;
            } else {
                $scope.disabled = false;
            }
        }
    }
]);