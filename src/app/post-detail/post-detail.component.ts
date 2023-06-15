import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{
  public res:any;
  constructor(private route: ActivatedRoute, private RestService:RestService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe ( (paramMap:any) => {
      const { params } = paramMap;
      this.cargarData(params.variable) 
    })
  }

  public cargarData(id:string){
    this.RestService.get(`http://localhost:3000/players/${id}`)
    .subscribe(res => 
      this.res = res
    )
  }
}
