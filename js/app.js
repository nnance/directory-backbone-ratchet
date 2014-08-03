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
