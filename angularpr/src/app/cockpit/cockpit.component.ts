import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Output,EventEmitter, ViewChild  } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrintCreated = new EventEmitter<{blueprintName:string,blueprintContent:string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput;

  constructor() { }

  ngOnInit(): void {
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
