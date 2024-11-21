// Author: T4professor

import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';


@Component({
  selector: 'app-button-renderer',
  styleUrls: ['./book-list.component.scss'],
  template: 
    ` <button class="btn btn-primary" (click)="onEditClick()">Edit</button> 
    <button class="btn btn-warning" (click)="onDeleteClick()">Delete</button> `
})

export class ButtonRendererComponent {
    params!: ICellRendererParams;

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  onEditClick(): void {
    // Pass the row data to the parent component
    this.params.context.componentParent.onEdit(this.params.node.data);
  }
  onDeleteClick(): void {
    // Pass the row data to the parent component
    this.params.context.componentParent.onDelete(this.params.node.data);
  }
}