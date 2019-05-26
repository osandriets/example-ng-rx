import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../../models/user.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: IUser;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }
}
