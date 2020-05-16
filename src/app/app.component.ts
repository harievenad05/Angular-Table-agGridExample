import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CustomerService } from './customer-service.service';
import { Customer, CustomerData } from './customer.model';
import { ButtonRendererComponent } from './renderer/button-renderer.component';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ag-example';

  columnDefs = [
    {headerName: 'Name', field: 'name', sortable: true, filter: true, autoHeight: true},
    {headerName: 'Email', field: 'email', sortable: true, filter: true, autoHeight: true, width: 230,suppressSizeToFit: false},
    {headerName: 'State', field: 'state', sortable: true, filter: true, autoHeight: true},
    {
      headerName: 'Button Col 2',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.onBtnClick2.bind(this),
        label: 'Click 2'
      },
      autoHeight: true
    },
  ];
  dataReceived: CustomerData;
  rowData: Customer[];
  paginationPageSize: number;
  rowDataClicked2 = {};
  frameworkComponents: any;
  gridOptions: any;

  constructor(private customerService: CustomerService){
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
    
  }

  ngOnInit(): void{
    this.paginationPageSize = 10;
    this.customerService.getCustomers().subscribe((res: CustomerData) => {
      console.log(res)
      this.dataReceived = res;
      if(this.dataReceived.success == 0){
        console.log('Not found');
      }
      this.rowData = this.dataReceived.data;
    });

    this.gridOptions = <GridOptions>{
      onGridReady: (params) => {  
        params.api.sizeColumnsToFit(); 
      }
    }
    
  }

  onBtnClick2(e) {
    this.rowDataClicked2 = e.rowData;
    console.log(e.rowData);
    alert(e.rowData.name)
  }

  onG

}
