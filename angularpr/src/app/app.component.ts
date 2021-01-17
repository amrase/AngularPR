import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.servers.push({
        type: 'server',
        name : this.newServerName,
        content : this.newServerContent
      });
  }

  onAddBluePrint(){
    this.servers.push({
      type: 'blueprint',
      name : this.newServerName,
      content : this.newServerContent
    })
  }

  onRemoveServer(id: number) {
    const position = id;
    this.servers.splice(position, 1);
  }
}
