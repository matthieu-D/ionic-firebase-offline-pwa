import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {
  AfoListObservable,
  AngularFireOfflineDatabase
} from 'angularfire2-offline/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks: AfoListObservable<any[]>;
  newTask = {name: ''};

  constructor(afoDatabase: AngularFireOfflineDatabase) {
    this.tasks= afoDatabase.list('/tasks');
  }

  addTask(newTask) {
    this.tasks.push(newTask);
    this.newTask = {name: ''};
  }

  removeTask(task) {
    this.tasks.remove(task);
  }

  updateTask(key, name) {
    this.tasks.update(key, {name: name});
  }
}
