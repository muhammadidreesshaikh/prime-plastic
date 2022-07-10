import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  collection: string = "product-catalog";
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
      image: ['', Validators.required],
      name: ['', Validators.required],
      catalog: ['', Validators.required],
    });
  }

  saveProduct() {
    console.log(this.programForm.value);
    
    this.firestore.collection(this.collection).add(this.programForm.value)
    .then(res => {
      this.router.navigateByUrl("/product-catalog");
      // this.programForm.reset();
    })
    .catch(e => {
      alert(e);
    })
  }

  onSubmit() {
    this.saveProduct();
  }

}
