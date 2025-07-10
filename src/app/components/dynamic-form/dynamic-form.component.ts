import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray,Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{
  skillForm!:FormGroup;
  submitted = false;
  proficiencyOptions = [
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Expert', value: 'Expert' }
  ].map(option => ({
    label: String(option.label),
    value: String(option.value)
  }));

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.skillForm=this.fb.group({
      skills:this.fb.array([this.createSkillGroup()])
    })
  }

  get skills():FormArray{
    return this.skillForm.get('skills') as FormArray;
  }

  createSkillGroup():FormGroup{
    return this.fb.group({
      skillName:['',[Validators.required,Validators.minLength(2)]],
      expirience:[null,[Validators.required,Validators.min(0),Validators.max(50)]],
      proficiencyLevel:[null,Validators.required]
    });

  }

  addSkill(){
    this.skills.push(this.createSkillGroup());
  }

  removeskills(index:number){
    if(this.skills.length>1){
      this.skills.removeAt(index);
    }

  }

  onSubmit(){

    this.submitted=true;
    if(this.skillForm.invalid){
      this.skillForm.markAllAsTouched();
      return;
    }
    alert("skills are saved sucessfully")
  }

  getControl(index:number,controlName:string){
    return this.skills.at(index).get(controlName)
  }
}
