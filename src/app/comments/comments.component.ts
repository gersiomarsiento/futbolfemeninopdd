import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service'; 

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  public res:any = [];
  public form:FormGroup;
  public comments:any = [];
  // comentarioText:string;

  constructor( private RestService:RestService, private formBuilder:FormBuilder){
    this.form = new FormGroup({
      textAreaComentario: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      textAreaComentario: [' ', Validators.required]
    });
    this.cargarComentarios();
  }

  public cargarComentarios () {
    this.RestService.get(`http://localhost:3000/comments`)
    .subscribe(res => {
      this.comments = res;
       this.form.patchValue({
        textAreaComentario: this.comments
      });
      console.log(this.comments);
      this.form.reset()
    })
  }

  public enviarComentario () {
    this.RestService.post(
      `http://localhost:3000/comments`,
      {
        text: this.form.value.textAreaComentario,
        name: this.form.value.name
      }).subscribe(res => {
          console.log("¡Comentario enviado!");
          console.log(this.form.value);
          this.form.reset();
          this.cargarComentarios()
      })

}}
