import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Output,EventEmitter, ViewChild, OnChanges, SimpleChanges  } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit,OnChanges {

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrintCreated = new EventEmitter<{blueprintName:string,blueprintContent:string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput;
  constructor() { 
    console.log("constructoor called")
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ng onChanges called");
    
    console.log(changes);    
  }

 
  ngOnInit(): void {
    console.log("ngOnit called")
  }


  onAddServer(serverNameInput,serverContentInput) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: serverContentInput.value
   });
  }

  onAddBluePrint(serverNameInput,serverContentInput){
    this.bluePrintCreated.emit({
      blueprintName: serverNameInput.value,
      blueprintContent: serverContentInput.value
    });
  }

  onRemoveServer(id: number) {
    // const position = id;
    // this.servers.splice(position, 1);
  }

}
