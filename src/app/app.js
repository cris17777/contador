import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './componentes/contador/contador';
import * as i0 from "@angular/core";
export class App {
    title = signal('contador', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    static ɵfac = function App_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || App)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: App, selectors: [["app-root"]], decls: 2, vars: 0, template: function App_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-contador")(1, "router-outlet");
        } }, dependencies: [RouterOutlet, Contador], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(App, [{
        type: Component,
        args: [{ imports: [RouterOutlet, Contador], selector: 'app-root', template: "<app-contador></app-contador>\r\n\r\n\r\n\r\n<router-outlet />\r\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 11 }); })();
