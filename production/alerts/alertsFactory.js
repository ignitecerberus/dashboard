angular
    .module('alerts')
    .factory('alertsFactory', function ($http) {


        function getAlertsStatisticsData() {
            return $http.get('data/7010.US_lastweek_statistics.json');
        }

        function getDatafromw3schools() {
            return $http.get('http://www.w3schools.com/angular/customers_mysql.php');
        }

        function getAllAlerts() {
            // return $http.get('http://127.0.0.1:8080/ignitealertsweb/webapi/alerts');
            return $http({
                method: 'GET',
                // url:'http://localhost:8080/ignitealertsweb/webapi/alerts',
                url: 'data/completeConten.json',
                headers: { 'Authorization': 'Access-Control-Allow-Origin', 'Content-Type': 'application/json' }
            });

        }

        function getAlertStatusStat() {
            return $http({
                method: 'GET',
                //url:'http://localhost:8080/ignitealertsweb/webapi/alerts/getstatustats',
                url: 'data/statusStat.json',
                headers: { 'Authorization': 'Access-Control-Allow-Origin', 'Content-Type': 'application/json' }
            });
        }

        function getAlertsModuleStat() {
            return $http({
                method: 'GET',
                //url:'http://localhost:8080/ignitealertsweb/webapi/alerts/getmodulestats',
                url: 'data/moduleStat.json',
                headers: { 'Authorization': 'Access-Control-Allow-Origin', 'Content-Type': 'application/json' }
            });
        }

        function getCriticalityStat() {
            return $http({
                method: 'GET',
                //url:'http://localhost:8080/ignitealertsweb/webapi/alerts/getcriticalstats',
                url: 'data/criticalityStat.json',
                headers: { 'Authorization': 'Access-Control-Allow-Origin', 'Content-Type': 'application/json' }
            });
        }


        function getDiskSapceData() {
            return $http({
                method: 'GET',
                url: 'data/diskSapce.json',
                headers: { 'Authorization': 'Access-Control-Allow-Origin', 'Content-Type': 'application/json' }
            });
        }

        function getNodeUtilData() {
            return $http({
                method: 'GET',
                url: 'data/nodeUtilization.json',
                headers: { 'Authorization': 'Access-Control-Allow-Origin', 'Content-Type': 'application/json' }
            });
        }


        return {
            getAlertsStatisticsDataRef: getAlertsStatisticsData,
            getDatafromw3schoolsRef: getDatafromw3schools,
            getAllAlertsRef: getAllAlerts,
            getAlertStatusStatRef: getAlertStatusStat,
            getAlertsModuleStatRef: getAlertsModuleStat,
            getCriticalityStatRef: getCriticalityStat,
            getDiskSapceDataRef: getDiskSapceData,
            getNodeUtilDataRef: getNodeUtilData
        }
    });