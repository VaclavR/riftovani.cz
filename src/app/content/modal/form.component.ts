import { WorkItem }                                        from './../../shared/models/work-item.model';
import { Observable }                                      from 'rxjs/Observable';
import { Store }                                           from '@ngrx/store';
import { Component, OnInit, OnDestroy }                    from '@angular/core';
import { BsModalRef }                                      from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as firebase                                       from 'firebase';
import * as fromApp                                        from '../../store/app.reducers';
import * as fromNav                                        from '../../store/nav/nav.reducers';
import { Subscription }                                    from 'rxjs/Subscription';


@Component({
  templateUrl: 'form.component.html',
})
export class FormComponent implements OnInit, OnDestroy {
  progressBar = false;
  workItemsForm: FormGroup;
  file = undefined;
  percentage = 0;
  workItems: WorkItem[];
  editedItem: WorkItem;
  navSubscription: Subscription;
  navState: Observable<fromNav.State>;
  forbiddenNames = [];

  constructor(public bsModalRef: BsModalRef,
              private fb: FormBuilder,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.navState = this.store.select('nav');
    this.navSubscription = this.navState.subscribe((state: fromNav.State) => {
      this.workItems = state.workItems;
      this.editedItem = state.editedItem;
      for (let i = 0; i < this.workItems.length; i++) {
        this.forbiddenNames.push(this.workItems[i].name);
      }
      if (this.editedItem.name.length !== 0) {
        this.forbiddenNames.splice(this.forbiddenNames.indexOf(this.editedItem.name), 1);
      }
      this.createForm();
    });
  }

  createForm() {
      this.workItemsForm = this.fb.group({
          name: [this.editedItem.name, [Validators.required, this.forbiddenEntries.bind(this)]],
          img: '',
          desc: [this.editedItem.desc, Validators.required]
      });
  }

  onFileLoaded(event) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    const name = this.workItemsForm.value.name;
    const desc = this.workItemsForm.value.desc;
    const oldImg = this.editedItem.img;
    const url = 'http://riftovani.cz/' + (this.workItemsForm.value.name.replace(/\s/g, '')).toLowerCase();

    // Delete old entry from firebase if the name is different
    if (this.editedItem.name !== name && this.editedItem.name.length !== 0) {
      const deleteDatabaseRef = firebase.database().ref('workItems/' + this.editedItem.name);
      deleteDatabaseRef.remove()
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // check if the file was uploaded
    if (this.file !== undefined) {
      this.progressBar = true;
      const storageRef = firebase.storage().ref('thumbnails/' + name);
      const task = storageRef.put(this.file);
      task.on('state_changed',
        (snapshot) => {
          const percentage = (snapshot['bytesTransferred'] / snapshot['totalBytes']) * 100;
          this.percentage = percentage;
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.progressBar = false;
          const img =  task.snapshot.downloadURL;
          firebase.database().ref('workItems/' + name).set({
            name: name,
            img: img,
            desc: desc,
            url: url
          });
          this.bsModalRef.hide();
        }
      );
    } else {
      firebase.database().ref('workItems/' + name).set({
        name: name,
        desc: desc,
        img: oldImg,
        url: url
      });
      this.bsModalRef.hide();
    }
  }

  forbiddenEntries(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return {'nameIsAlreadyUsed': true};
    }
    return null;
  }

  ngOnDestroy() {
    this.navSubscription.unsubscribe();
  }

}
