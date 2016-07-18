"use strict";var platform_browser_dynamic_1=require("@angular/platform-browser-dynamic"),app_routes_1=require("./app.routes"),forms_1=require("@angular/forms"),app_component_1=require("./app.component"),common_1=require("@angular/common");platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent,[app_routes_1.appRouterProviders,{provide:common_1.LocationStrategy,useClass:common_1.HashLocationStrategy},forms_1.disableDeprecatedForms(),forms_1.provideForms()])["catch"](function(r){return console.error(r)});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtYWluLnRzIl0sIm5hbWVzIjpbInBsYXRmb3JtX2Jyb3dzZXJfZHluYW1pY18xIiwicmVxdWlyZSIsImFwcF9yb3V0ZXNfMSIsImZvcm1zXzEiLCJhcHBfY29tcG9uZW50XzEiLCJjb21tb25fMSIsImJvb3RzdHJhcCIsIkFwcENvbXBvbmVudCIsImFwcFJvdXRlclByb3ZpZGVycyIsInByb3ZpZGUiLCJMb2NhdGlvblN0cmF0ZWd5IiwidXNlQ2xhc3MiLCJIYXNoTG9jYXRpb25TdHJhdGVneSIsImRpc2FibGVEZXByZWNhdGVkRm9ybXMiLCJwcm92aWRlRm9ybXMiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLFlDQ0EsSUFBQUEsNEJBQUFDLFFBQTBCLHFDQUMxQkMsYUFBQUQsUUFBbUMsZ0JBQ25DRSxRQUFBRixRQUFxRCxrQkFFckRHLGdCQUFBSCxRQUE2QixtQkFDN0JJLFNBQUFKLFFBQWdFLGtCQUVoRUQsNEJBQUFNLFVBQVVGLGdCQUFBRyxjQUNOTCxhQUFBTSxvQkFDRUMsUUFBU0osU0FBQUssaUJBQWtCQyxTQUFVTixTQUFBTyxzQkFDdkNULFFBQUFVLHlCQUNBVixRQUFBVyxpQkFKSmQsU0FLUyxTQUFDZSxHQUFhLE1BQUFDLFNBQVFDLE1BQU1GIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MuZC50c1wiLz5cbnZhciBwbGF0Zm9ybV9icm93c2VyX2R5bmFtaWNfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYycpO1xudmFyIGFwcF9yb3V0ZXNfMSA9IHJlcXVpcmUoJy4vYXBwLnJvdXRlcycpO1xudmFyIGZvcm1zXzEgPSByZXF1aXJlKCdAYW5ndWxhci9mb3JtcycpO1xudmFyIGFwcF9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2FwcC5jb21wb25lbnRcIik7XG52YXIgY29tbW9uXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb21tb24nKTtcbnBsYXRmb3JtX2Jyb3dzZXJfZHluYW1pY18xLmJvb3RzdHJhcChhcHBfY29tcG9uZW50XzEuQXBwQ29tcG9uZW50LCBbXG4gICAgYXBwX3JvdXRlc18xLmFwcFJvdXRlclByb3ZpZGVycyxcbiAgICB7IHByb3ZpZGU6IGNvbW1vbl8xLkxvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBjb21tb25fMS5IYXNoTG9jYXRpb25TdHJhdGVneSB9LFxuICAgIGZvcm1zXzEuZGlzYWJsZURlcHJlY2F0ZWRGb3JtcygpLFxuICAgIGZvcm1zXzEucHJvdmlkZUZvcm1zKClcbl0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTsgfSk7XG4iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzLmQudHNcIi8+XG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgYXBwUm91dGVyUHJvdmlkZXJzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcbmltcG9ydCB7IGRpc2FibGVEZXByZWNhdGVkRm9ybXMsIHByb3ZpZGVGb3JtcyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9jYXRpb24sIExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4gICAgYXBwUm91dGVyUHJvdmlkZXJzLFxuICAgIHsgcHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0sXG4gICAgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcygpLFxuICAgIHByb3ZpZGVGb3JtcygpXG5dKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
