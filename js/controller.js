app.controller("controlador", ["$scope", "chatMessages",
    // we pass our new chatMessages factory into the controller
    function($scope, chatMessages) {
        $scope.user = "David Juez";

        // we add chatMessages array to the scope to be used in our ng-repeat
        $scope.messages = chatMessages;

        // a method to create new messages; called by ng-submit
        $scope.addMessage = function() {
            // calling $add on a synchronized array is like Array.push(),
            // except that it saves the changes to our database!
            $scope.messages.$add({
                user: $scope.user,
                text: $scope.message
            });

            // reset the message input
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
    }
]);