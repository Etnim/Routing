import { Component } from '@angular/core';
import * as url from "url";
import {RouterLink} from "@angular/router";


interface Account {
  id: number;
  name: string;
  balance: number;
  imageUrl: string;
}

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss'
})
export class AccountListComponent {

  accounts: Account[] = [{
    id: 1,
    name: 'Savings account',
    balance: 100,
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/021/314/124/original/bank-account-icon-design-free-vector.jpg'
  },
    {
      id:2,
      name: 'Checking account',
      balance: 200,
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/024/599/407/original/cute-coin-illustration-over-white-png.png'
    }
    ]
}
