
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-button-renderer',
  template: `
    <a class="btn btn-sm btn-info text-white" (click)="onEditClick($event)" ><i class="fa fa-pencil"></i></a>
    <a class="btn btn-sm btn-info text-white" style="margin-left:5px;" (click)="onDeleteClick($event)" ><i class="fa fa-trash"></i></a>
    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onEditClick($event) {
    if (this.params.onEditClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      console.log(params.rowData.name, params.event.rowIndex)
      this.params.onEditClick(params);
    }
  }

  onDeleteClick($event) {
    if (this.params.onDeleteClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      console.log(params.rowData.name, params.event.rowIndex)
      this.params.onDeleteClick(params);
    }
  }
}