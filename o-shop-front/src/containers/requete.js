var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('product_image', fs.createReadStream('/home/etudiant/Téléchargements/Sony_Console_ps5.jpg'));
data.append('name', 'Sony PS5');
data.append('price', '500');
data.append('description', 'Console Sony ps5');
data.append('quantity', '20');
data.append('category', 'SMARTPHONE');
data.append('shop', 'OSHOP');
var config = {
  method: 'post',
  url: 'localhost:3500/product',
  headers: { 
    'Authorization': 'Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtX21pY2hlbCIsImlhdCI6MTYxMTgyMTc2MiwiZXhwIjoxNjExODc1NzYyfQ.2HXyLETBhH89eb6kdi90RuNdhPHGEHmsascoXm6Cl20', 
    'Cookie': 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtX21pY2hlbCIsImlhdCI6MTYxMTgyMTc2MiwiZXhwIjoxNjExODc1NzYyfQ.2HXyLETBhH89eb6kdi90RuNdhPHGEHmsascoXm6Cl20', 
    ...data.getHeaders()
  },
  data : data
};