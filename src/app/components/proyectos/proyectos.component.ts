import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public projects:Project[]=[];
  project=new Project("","","","");

  constructor(private ps:ProjectService) { }

  ngOnInit(): void {
    this.obtenerProjects();
  }

  obtenerProjects(){
    this.ps.getProjects().subscribe((p:Project[])=>{
      this.projects=p;
    })
  }

}
