export class ToList {
    id: number;
    title: string = '';
    complete: boolean = false;
    selected: string = '';
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }