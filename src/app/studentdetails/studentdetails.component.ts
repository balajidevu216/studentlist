import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  userForm: FormGroup;

  listData : any;

  constructor(private fb: FormBuilder) { 
    
    this.listData = [];

    this.userForm = this.fb.group({
      name: ['', Validators.required,Validators.pattern("^[a-zA-Z-a,]+(\s{0,1}[a-zA-Z-, ])*$")],
      age:['',Validators.required,Validators.pattern("[0-2]")],
      gender: ['', Validators.required],
      email: ['', Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")],
      number: ['',Validators.required,Validators.pattern("[0-9]{10}")],
      date:['', Validators.required,Validators.pattern("[dd/MM/YYYY]")],
    })
  }

  public addItem(): void {
      this.listData.push(this.userForm.value)
  }

  get f(){
    return this.userForm.controls;
  }

  OnSubmit(){
    console.log(this.userForm.value)
    if (this.userForm.value){
      this.userForm.value
    }
  }



  ngOnInit(): void {
  }

}
