export interface Customer {
    customer_id?: number;
    name: string;
    email: string;
    state: string;
    created_at?: Date;
  }
  
  export class CustomerData {
    success: number;
    data: Customer[];
    constructor(){
        this.success = null;
        this.data = null;
    }
  }
  
  export class CustomerDataResponse {
    success: number;
    message: string;
    data: Customer;
    constructor(){
      this.success = null;
      this.message = null;
      this.data = null;
    }
  }