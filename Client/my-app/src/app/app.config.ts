import {
    ApplicationConfig,
    importProvidersFrom,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { LucideAngularModule, AlignJustify, X } from "lucide-angular";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideRouter(routes),
        importProvidersFrom(LucideAngularModule.pick({ AlignJustify, X })),
    ],
};
