import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];

  onServerAdded(serverData : {serverName:string,serverContent:string}){
    console.log(serverData);
    
    this.servers.push({
      type:'server',
      name: serverData.serverName,
      content : serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData : {blueprintName:string,blueprintContent:string}){
      this.servers.push({
        type:'blueprint',
        name: blueprintData.blueprintName,
        content : blueprintData.blueprintContent
    })
  }

  onChangeFirst(){
      this.servers[0].serverName="Changed";
  }
  onDestroyFirst(){
      this.servers.splice(0,1);
  }
 
}
