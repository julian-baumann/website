import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        loadChildren: (): Promise<any> => import("./pages/home/home.module").then((m: typeof import("./pages/home/home.module")) => m.HomePageModule)
    },
    {
        path: "**",
        redirectTo: ""
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule
{ }
