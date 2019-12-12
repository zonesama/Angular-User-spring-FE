import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserServiceService} from '../user-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {
  user: User;

  constructor(private userService: UserServiceService,
              private router: Router,
              private route: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
      this.router.navigate(['/userList']);
  }
}
