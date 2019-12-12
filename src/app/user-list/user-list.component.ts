import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserServiceService} from '../user-service.service';
import {TranferDataService} from '../tranfer-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];


  constructor(private userService: UserServiceService,
              private tranferDataService: TranferDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(user: User): void {
    this.userService.delete(user)
      .subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

  goToEdit(user: User): void {
    this.tranferDataService.setData(user);
    this.router.navigateByUrl('/editUser');
  }
}
