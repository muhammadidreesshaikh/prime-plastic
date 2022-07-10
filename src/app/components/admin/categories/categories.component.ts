import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  collection: string = "categories";
  programForm: any = UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      iconImg: ['', Validators.required],
      category: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      sliderImg: ['', Validators.required],
      contentImg1: ['', Validators.required],
      halfTypoLeft: ['', Validators.required],
      halfTypoRight: ['', Validators.required],
      descriptiveImg: ['', Validators.required],
    });
  }

  saveCategory() {
    console.log(this.programForm.value);
    
    this.firestore.collection(this.collection).add(this.programForm.value)
    .then(res => {
      this.router.navigateByUrl("/home");
      // this.programForm.reset();
    })
    .catch(e => {
      alert(e);
    })
  }

  onSubmit() {
    this.saveCategory();
  }

}
