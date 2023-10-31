https://vibhajanandhrudu.com/public/asds/public/api/owner/register  register api

post input of data

{
    "name":"asda",
    "email":"cha12223@gmail.com",
    "phone_number":"1234567890",
    "password":"cha123",
    "password_confirmation":"cha123",
    "sap_code":"cha12223"
 }




this will be the output
{
    "user": {
        "name": "asda",
        "email": "cha12223@gmail.com",
        "phone_number": "1234567890",
        "sap_code": "cha12223",
        "updated_at": "2023-10-31T15:00:36.000000Z",
        "created_at": "2023-10-31T15:00:36.000000Z",
        "id": 82
    },
    "product": true,
    "tank": true,
    "token": "76|K3yuwCRon3sNqMlZFUGckiLePds0EWYOI08bXHRU201081fb"
}




LOGIN

https://vibhajanandhrudu.com/public/asds/public/api/owner/login

post 
{
     "email":"cha123@gmail.com",
    "password":"cha123",
    "password_confirmation":"cha123",
    "sap_code":"cha12223"
 }



output
{
    "user": {
        "id": 80,
        "name": "asda",
        "email": "cha123@gmail.com",
        "sap_code": "cha123",
        "phone_number": "1234567890",
        "compelete_address": null,
        "pincode": null,
        "role": null,
        "outlet_name": null,
        "owner_name": null,
        "email_verified_at": null,
        "created_at": "2023-10-30T17:18:06.000000Z",
        "updated_at": "2023-10-30T17:18:06.000000Z"
    },
    "token": "77|N5EmlSvSCiKJvgYUqaZlWAA2NjfKDyNxz7NCyQJPe960875c"
}










