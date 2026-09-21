import { Component, signal } from "@angular/core";
import * as i0 from "@angular/core";
export class Contador {
    contador = signal(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "contador" }] : /* istanbul ignore next */ []));
    static ɵfac = function Contador_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Contador)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Contador, selectors: [["app-contador"]], decls: 2, vars: 1, template: function Contador_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.contador);
        } }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Contador, [{
        type: Component,
        args: [{ selector: 'app-contador', template: "<span>{{contador}}</span>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Contador, { className: "Contador", filePath: "src/app/componentes/contador/contador.ts", lineNumber: 8 }); })();
