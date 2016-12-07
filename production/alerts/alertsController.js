angular
    .module('alerts')
    .controller('alertsController', function ($scope, alertsFactory) {

        $scope.dataInChart = 0;

        $scope.weeklyAlertStatistics;
        $scope.w3schoolData;
        $scope.completeAlerts;
        $scope.statusStats;
        $scope.moduleStats;
        $scope.criticalityStats;
        $scope.TotalAlertCount;

        $scope.statusChartData;
        $scope.moduleChartData;
        $scope.criticalityChartData;

        $scope.statusChartjsData;


        $scope.diskspaceData;
        $scope.diskspaceGraphData = new Array();

        $scope.nodeUtilData;
        $scope.nodeUtilGraphData = new Array();


        var colorArray = ['#000000', '#660000', '#CC0000', '#FF6666', '#FF3333', '#FF6666', '#FFE6E6'];
        $scope.colorFunction = function () {
            return function (d, i) {
                return colorArray[i];
            };
        };


        $scope.getTotalAlertCount = function () {
            var total = 0;
            var dataArray = new Array();
            var ChartObjectStatus = new Object();
            for (var i = 0; i < $scope.statusStats.length; i++) {
                var oneStatus = $scope.statusStats[i];
                total += oneStatus.count;
                dataArray.push(oneStatus.count);
                //  console.log("HAYYYYYYYYYYYYYYYYYYYYYYYYYYYYoooo " + total);
            }
            $scope.TotalAlertCount = total;
            ChartObjectStatus.data = dataArray;
            $scope.statusChartjsData = ChartObjectStatus;
            //console.log($scope.TotalAlertCount)
        };

        $scope.populateStatusChartDataDynamic = function () {
            $scope.statusChartData = new Array();
            for (var i = 0; i < $scope.statusStats.length; i++) {
                console.log("Inside for loop " + $scope.statusStats.length + " - " + $scope.statusStats[i].count);
                console.log("Inside for loop_ " + $scope.statusStats.length + " - " + Object.values($scope.statusStats[i])[1]);

                oneObject = new Object();
                oneObject.key = Object.values($scope.statusStats[i])[1];
                //console.log("AFTER THE VALUE IS " + oneObject.key);
                oneObject.y = $scope.statusStats[i].count;
                //console.log("AFTER THE VALUE IS " + oneObject.y);
                $scope.statusChartData.push(oneObject);
            }

            console.log("Dynamic My log is below");
            console.log($scope.statusChartData);
            console.log("Dynamic log is above");
            $scope.fetching = false;
        };

        $scope.populateModuleStatsDynamic = function () {
            $scope.moduleChartData = new Array();
            for (var i = 0; i < $scope.moduleStats.length; i++) {
                console.log("Inside for loop " + $scope.moduleStats.length + " - " + $scope.moduleStats[i].count);
                console.log("Inside for loop_ " + $scope.moduleStats.length + " - " + Object.values($scope.moduleStats[i])[1]);

                oneObject = new Object();
                oneObject.key = Object.values($scope.moduleStats[i])[1];
                // console.log("AFTER THE VALUE IS " + oneObject.key);
                oneObject.y = $scope.moduleStats[i].count;
                //console.log("AFTER THE VALUE IS " + oneObject.y);
                $scope.moduleChartData.push(oneObject);
            }

            console.log("Dynamic My log is below");
            console.log($scope.moduleChartData);
            console.log("Dynamic log is above");
        };
        // ----criticalityStats ---
        $scope.populateCriticalityStatsDynamic = function () {
            $scope.criticalityChartData = new Array();
            for (var i = 0; i < $scope.criticalityStats.length; i++) {
                console.log("Inside for loop " + $scope.criticalityStats.length + " - " + $scope.criticalityStats[i].count);
                console.log("Inside for loop_ " + $scope.criticalityStats.length + " - " + Object.values($scope.criticalityStats[i])[1]);

                oneObject = new Object();
                oneObject.key = Object.values($scope.criticalityStats[i])[1];
                //console.log("criticalityStats THE VALUE IS " + oneObject.key);
                oneObject.y = $scope.criticalityStats[i].count;
                //console.log("criticalityStats THE VALUE IS " + oneObject.y);
                $scope.criticalityChartData.push(oneObject);
            }

            console.log("Dynamic My log is below");
            console.log($scope.criticalityChartData);
            console.log("Dynamic log is above criticalityStats");
        };

        $scope.xFunction = function () {
            return function (d) {
                return d.key;
            };
        };
        $scope.yFunction = function () {
            return function (d) {
                return d.y;
            };
        };


        $scope.yGraphFunction = function () {
            console.log("Inside yGraphFunction function");
            return function (d) {
                return d[1];
            };
        };

        $scope.toolTipContentFunction = function () {
            console.log("Inside Something function");
            return function (key, x, y, e, graph) {
                return 'Super New Tooltip' +
                    '<h1>' + key + '</h1>' +
                    '<p>' + y + ' at ' + x + '</p>'

            }
        };

        // Graph population for diskspace
        $scope.populateDiskSpaceGraphData = function () {

            var graphData = new Array();
            var singleGraphData = new Object();
            var completArray = new Array();
            var siteName = "";
            for (var i = 0; i < $scope.diskspaceData.length; i++) {
                var oneObject = Object.values($scope.diskspaceData[i]);

                if (siteName.length == 0)
                    siteName = oneObject[4] + "." + oneObject[3];

                var date_ = new Date(oneObject[2]);
                console.log("DATE IS");
                console.log(date_);
                var oneArray = new Array();
                oneArray.push(i);
                oneArray.push(oneObject[0]);
                completArray.push(oneArray);
            }
            console.log(completArray);
            singleGraphData.key = siteName;
            singleGraphData.values = completArray;
            graphData.push(singleGraphData);

            $scope.diskspaceGraphData = graphData;
            console.log(graphData);

        };

        // Graph population for Node Util
        $scope.populateNodeUtilGraphData = function () {

            var graphData = new Array();
            var singleGraphData = new Object();
            var completArray = new Array();
            var siteName = "";
            for (var i = 0; i < $scope.nodeUtilData.length; i++) {
                var oneObject = Object.values($scope.nodeUtilData[i]);

                if (siteName.length == 0)
                    siteName = oneObject[4] + "." + oneObject[3];

                var date_ = new Date(oneObject[2]);
                console.log("DATE IS");
                console.log(date_);
                var oneArray = new Array();
                oneArray.push(i);
                oneArray.push(oneObject[0]);
                completArray.push(oneArray);
            }
            console.log(completArray);
            singleGraphData.key = siteName;
            singleGraphData.values = completArray;
            graphData.push(singleGraphData);

            $scope.nodeUtilGraphData = graphData;
            console.log(graphData);

        };




        alertsFactory.getCriticalityStatRef().success(function (data) {
            $scope.criticalityStats = data;
            console.log("Inside Criticality");
            $scope.populateCriticalityStatsDynamic();
            console.log(data);
        }).error(function (error) {
            console.log(error);
        });


        alertsFactory.getAlertsModuleStatRef().success(function (data) {
            $scope.moduleStats = data;
            console.log("Inside Module");
            $scope.populateModuleStatsDynamic();
            console.log(data);
        }).error(function (error) {
            console.log(error);
        });

        alertsFactory.getAlertStatusStatRef().success(function (data) {
            $scope.statusStats = data;
            console.log(data);
            console.log("Inside Status");
            //$scope.populateStatusChartData();
            $scope.getTotalAlertCount();
            $scope.populateStatusChartDataDynamic();

        }).error(function (error) {
            console.log(error);
        });


        alertsFactory.getDiskSapceDataRef().success(function (data) {
            console.log("COMPLETE DATA");
            $scope.diskspaceData = data;
            $scope.populateDiskSpaceGraphData();
            console.log($scope.diskspaceData);
        }).error(function (error) {
            console.log(error);
        });

        alertsFactory.getNodeUtilDataRef().success(function (data) {
            console.log("COMPLETE NODE UTIL DATA");
            $scope.nodeUtilData = data;
            $scope.populateNodeUtilGraphData();
            //console.log($scope.diskspaceData);
        }).error(function (error) {
            console.log(error);
        });

    });
