"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),http_1=require("@angular/http");require("rxjs/add/operator/toPromise");var AuthService=function(){function e(e){this.http=e}return e.prototype.logUserIn=function(e){return this.http.post("/api/auth/logUserIn",e).toPromise().then(this.handelResponse)["catch"](function(e){return console.log("err when logUserIn @auth.service.ts")})},e.prototype.handelResponse=function(e){var t=e.json();return t||{}},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],e)}();exports.AuthService=AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwiYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsInRoaXMiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImQiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiY29yZV8xIiwicmVxdWlyZSIsImh0dHBfMSIsIkF1dGhTZXJ2aWNlIiwiaHR0cCIsInByb3RvdHlwZSIsImxvZ1VzZXJJbiIsImRhdGEiLCJwb3N0IiwidG9Qcm9taXNlIiwidGhlbiIsImhhbmRlbFJlc3BvbnNlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlcyIsInRva2VuIiwianNvbiIsIkluamVjdGFibGUiLCJIdHRwIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFDQSxJQUFJQSxZQUFjQyxNQUFRQSxLQUFLRCxZQUFlLFNBQVVFLEVBQVlDLEVBQVFDLEVBQUtDLEdBQzdFLEdBQTJIQyxHQUF2SEMsRUFBSUMsVUFBVUMsT0FBUUMsRUFBSUgsRUFBSSxFQUFJSixFQUFrQixPQUFURSxFQUFnQkEsRUFBT00sT0FBT0MseUJBQXlCVCxFQUFRQyxHQUFPQyxDQUNySCxJQUF1QixnQkFBWlEsVUFBb0Qsa0JBQXJCQSxTQUFRQyxTQUF5QkosRUFBSUcsUUFBUUMsU0FBU1osRUFBWUMsRUFBUUMsRUFBS0MsT0FDcEgsS0FBSyxHQUFJVSxHQUFJYixFQUFXTyxPQUFTLEVBQUdNLEdBQUssRUFBR0EsS0FBU1QsRUFBSUosRUFBV2EsTUFBSUwsR0FBS0gsRUFBSSxFQUFJRCxFQUFFSSxHQUFLSCxFQUFJLEVBQUlELEVBQUVILEVBQVFDLEVBQUtNLEdBQUtKLEVBQUVILEVBQVFDLEtBQVNNLEVBQ2hKLE9BQU9ILEdBQUksR0FBS0csR0FBS0MsT0FBT0ssZUFBZWIsRUFBUUMsRUFBS00sR0FBSUEsR0FFNURPLFdBQWNoQixNQUFRQSxLQUFLZ0IsWUFBZSxTQUFVQyxFQUFHQyxHQUN2RCxHQUF1QixnQkFBWk4sVUFBb0Qsa0JBQXJCQSxTQUFRTyxTQUF5QixNQUFPUCxTQUFRTyxTQUFTRixFQUFHQyxJQ1IxR0UsT0FBQUMsUUFBMkIsaUJBQzNCQyxPQUFBRCxRQUErQixnQkFDL0JBLFNBQU8sOEJBS1AsSUFBQUUsYUFBQSxXQUVJLFFBQUFBLEdBQW1CQyxHQUFBeEIsS0FBQXdCLEtBQUFBLEVBY3ZCLE1BWklELEdBQUFFLFVBQUFDLFVBQUEsU0FBVUMsR0FDTixNQUFPM0IsTUFBS3dCLEtBQUtJLEtBQUssc0JBQXVCRCxHQUN4Q0UsWUFDQUMsS0FBSzlCLEtBQUsrQixnQkFGUi9CLFNBR0ksU0FBQ2dDLEdBQWEsTUFBQUMsU0FBUUMsSUFBSSwwQ0FHakNYLEVBQUFFLFVBQUFNLGVBQVIsU0FBdUJJLEdBQ25CLEdBQUlDLEdBQVFELEVBQUlFLE1BQ2hCLE9BQU9ELFFBZGZiLEVBQUF4QixZQUFDcUIsT0FBQWtCLGFEdUJPdEIsV0FBVyxxQkFBc0JNLE9BQU9pQixRQUN6Q2hCLEtDdkJNaUIsU0FBQWpCLFlBQVdBIiwiZmlsZSI6ImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBodHRwXzEgPSByZXF1aXJlKCdAYW5ndWxhci9odHRwJyk7XG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnKTtcbnZhciBBdXRoU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXV0aFNlcnZpY2UoaHR0cCkge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgIH1cbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUubG9nVXNlckluID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL2F1dGgvbG9nVXNlckluJywgZGF0YSlcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBjb25zb2xlLmxvZygnZXJyIHdoZW4gbG9nVXNlckluIEBhdXRoLnNlcnZpY2UudHMnKTsgfSk7XG4gICAgfTtcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUuaGFuZGVsUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHJlcy5qc29uKCk7XG4gICAgICAgIHJldHVybiB0b2tlbiB8fCB7fTtcbiAgICB9O1xuICAgIEF1dGhTZXJ2aWNlID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5JbmplY3RhYmxlKCksIFxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtodHRwXzEuSHR0cF0pXG4gICAgXSwgQXV0aFNlcnZpY2UpO1xuICAgIHJldHVybiBBdXRoU2VydmljZTtcbn0oKSk7XG5leHBvcnRzLkF1dGhTZXJ2aWNlID0gQXV0aFNlcnZpY2U7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnLi9hdXRoJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7IH1cblxuICAgIGxvZ1VzZXJJbihkYXRhOiBBdXRoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL2F1dGgvbG9nVXNlckluJywgZGF0YSlcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4odGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdlcnIgd2hlbiBsb2dVc2VySW4gQGF1dGguc2VydmljZS50cycpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRlbFJlc3BvbnNlKHJlczogYW55KSB7XG4gICAgICAgIGxldCB0b2tlbiA9IHJlcy5qc29uKClcbiAgICAgICAgcmV0dXJuIHRva2VuIHx8IHt9O1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
