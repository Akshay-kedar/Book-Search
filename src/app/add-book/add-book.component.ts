import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{

  bookForm!:FormGroup;
genres = ['Fiction', 'Non-fiction', 'Fantasy', 'Biography', 'Science'];


   constructor(private fb: FormBuilder) {
   }


  ngOnInit(): void {
   
        this.bookForm=this.fb.group({
          Title:['',Validators.required,Validators.minLength(3)],

          Author:['',Validators.required],

          Genres:['',Validators.required],

          PublishedDate:['',Validators.required],

          inStock:[false]
        })


  }

  
onSubmit(): void {
   if (this.bookForm.valid) {
 console.log('Book Data:', this.bookForm.value);
 this.bookForm.reset();

 } else {
this.bookForm.markAllAsTouched();
 }

}



}
