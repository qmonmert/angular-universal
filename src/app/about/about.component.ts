import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  data = {
    name: "Quentin Monmert",
    bio: "Tech Lead"
  };

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: "twitter:card", content: "summary" },
      { name: "og:url", content: "/about" },
      { name: "og:description", content: this.data.bio }
    ]);
  }
}
