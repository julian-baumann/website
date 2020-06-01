import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit
{
    public Year: number = 2002;

    public ngOnInit(): void
    {
        const currentDate: Date = new Date();
        this.Year = currentDate.getFullYear();
        console.info(`incredible, it's ${this.Year} and we still don't have flying cars :(`);
    }

    public OpenLink(link: string, target: string = "_blank"): void
    {
        window.open(link, target);
    }
}
