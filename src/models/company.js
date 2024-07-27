
import db from '../config/db.js';

class Company {
    constructor(id, name, address, phone, email) {
      this.id = id;
      this.name = name;
      this.address = address;
      this.phone = phone;
      this.email = email;
    }
  }
  
  export default Company;