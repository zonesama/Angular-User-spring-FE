import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceService} from '../user-service.service';
import {TranferDataService} from '../tranfer-data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserServiceService,
              private tranferDataService: TranferDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.user = this.tranferDataService.getData();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/userList']);
  }
}
