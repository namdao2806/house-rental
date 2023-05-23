import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../../service/authentication.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] | any
  userId = localStorage.getItem("ID")
  nameSearch: FormGroup = new FormGroup({
    name: new FormControl('')
  })
  p: number = 1;
  total: number = 0;

  constructor(private authentication: AuthenticationService) {
  }

  ngOnInit(): void {
    this.getAllCustomersExpectUser()
  }

  getAllCustomersExpectUser() {
    this.authentication.findAllUserByAdmin().subscribe((data) => {
      this.users = data
      console.log(this.users)
    })
  }


  searchName() {
    this.authentication.findCustomerByName(this.nameSearch.value.name).subscribe((data) => {
      this.users = data
      console.log(this.users)
    })
  }

  sortByAll(event: any) {
    if (event == 0) {
      return this.users = this.users.sort((obj1: any, obj2: any) => {
        if (obj1.name > obj2.name) {
          return 1;
        }

        if (obj1.name < obj2.name) {
          return -1;
        }

        return 0;
      });
    }
    if (event == 1) {
      return this.users = this.users.sort((obj1: any, obj2: any) => {
        if (obj1.phone > obj2.phone) {
          return 1;
        }

        if (obj1.phone < obj2.phone) {
          return -1;
        }

        return 0;
      });
    }
  }

  pageChangeEvent(event: number) {
    this.p = event;
  }
}

