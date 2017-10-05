import { Component, OnInit } from '@angular/core';
import { GitHubService } from "../gitHub.service";

import { IUser } from "../shared/interfaces";

@Component({
  selector: 'app-twitter-profile',
  templateUrl: './twitter-profile.component.html',
  styleUrls: ['./twitter-profile.component.css']
})
export class TwitterProfileComponent implements OnInit {
  gitHubName : string = "";
  user : IUser;
  gitAvatar: string = "";
  name: string="";
  company: string="";
  gitHubUrl: string="";
  location: string ="";

  constructor(private gitHubService : GitHubService) { }

  searchUser() {
    this.gitHubService.getUserDetails(this.gitHubName)
    .subscribe((data: IUser) => {
      this.user = data;
      console.log(this.user);
      console.log("clicked search!!");
      this.gitAvatar=this.user.avatar_url;
      this.name = this.user.name;
      this.company = this.user.company;
      this.location=this.user.location;
      this.gitHubUrl = this.user.url;
      this.gitHubName="";
    },
    (error:any)=>{
      this.gitAvatar="";
      this.name = "";
      this.company ="";
      this.location="";
      this.gitHubUrl = "";
    });
  }  
  
  ngOnInit() {
  }

}
