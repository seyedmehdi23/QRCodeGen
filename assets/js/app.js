var app = angular.module('uApp', []);
var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 500,
    height: 500
});
app.controller('qrController', function ($scope) {
    $scope.qrString = "";
    $scope.makeCode = function () {
        qrcode.makeCode($scope.qrString);
    }
});