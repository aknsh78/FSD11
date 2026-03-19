let user{
    name:"Akansha",
    age:25;
    address:{
        city:"dehradun";
        pincode:201014

    }
    };
    
    let usercopy= JASON.parse(JASON.stringify(user));
    usercopy.address.city="mumbai";
    console.log(user);
    console.log(usercopy);

}