var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
    FastClick.attach(document.body);

    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView", "AddView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
});

document.addEventListener('deviceready', function() {
  alert('device ready');
  alert('device version: ' + window.device.version);
    if (parseFloat(window.device.version) === 7.0) {
          document.body.style.marginTop = "20px";
    }
}, false);
