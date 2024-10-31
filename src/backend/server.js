const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb+srv://mmoulana706:AgRULEbkxzaYHM5W@smd.azp6c.mongodb.net/users?retryWrites=true&w=majority&appName=smd", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// User model login data schame
const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: Number,
    password: String,
    address:String
});
const User = mongoose.model('login_datas', UserSchema);



// orders page schema
const OrderSchema = new mongoose.Schema({
    email:String,
    phone:Number,
    serviceDate:String,
    serviceTime:String,
    serviceDuration:String,
    addressArea:String,
    addressCity:String,
    addressState:String,
    addressPincode:Number
});
const Order = mongoose.model('orders_data', OrderSchema);





// API endpoint for signup
app.post('/api/signup', async (req, res) => {
    const { name, email, mobile, password } = req.body;
    try {
        const newUser = new User({ name, email, mobile, password });
        await newUser.save();
        res.status(201).json({ message: 'Account created successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error creating account', error });
    }
});
const current_user={
    name:"User",
    email:"email",
    phone:"0123456789",
    password:"password",
    address:"address",
}


// sigin in page request
app.post('/api/signin', async (req, res) => {
    const { email,action} = req.body;
    if(action=="changeUser"){
        try {
            const user = await User.find({ email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            current_user.name=user[0].name;
            current_user.email=user[0].email;
            current_user.phone=user[0].mobile;
            current_user.password=user[0].password;
            current_user.address=user[0].address;
            res.json({data:user});
        } catch (error) {
            res.status(400).json({ message: 'Error fetching user', error });
        }
    }
    else if(action=="getUser"){
        res.json({data:current_user});
    }
    else{
        res.json({data:current_user.email});
    }
});


//updating profile
app.post('/api/update_profile', async (req, res) => {
    const { email,new_name,new_address,action} = req.body;
    if(action=="change_details"){
        try {
            // const user = await User.find({ email });
            const update_data = await User.updateOne({email: email}, {
                $set:{name: new_name,
                    address: new_address
                }
            });
            if (!update_data) {
                return res.status(404).json({ message: 'Error in updating details' });
            }
            current_user.name=new_name;
            current_user.address=new_address;
            res.json({message:"Details Changed Successfully"});
        } catch (error) {
            res.status(400).json({ message: 'Error fetching user', error });
        }
    }
    else{
        try {
            const user = await User.find({ email });
            // const update_data = await User.updateOne({email: email}, {
            //         $set:{class: 3}
            // });
            res.json({data:user});
        } catch (error) {
            res.status(400).json({ message: 'Error fetching user', error });
        }
    }
});


// signout action
app.post('/api/signout', async (req, res) => {
    try {
        current_user.name="User";
        current_user.email="email";
        current_user.phone="0123456789";
        current_user.password="password";
        current_user.address="address";
        res.json({data:current_user});
    } catch (error) {
        res.status(400).json({ message: 'Unable to sign out', error });
    }

});



// schedule service page
app.post('/api/scheduleService', async (req, res) => {
    const {email,phone,serviceDate,serviceTime,serviceDuration,addressArea,addressCity,addressState,addressPincode,action} = req.body;
    if(action=="newOrder"){
        try {
            const newOrder = new Order({ email,phone,serviceDate,serviceTime,serviceDuration,addressArea,addressCity,addressState,addressPincode });
            await newOrder.save();
            res.status(201).json({ message: 'Order Placed successfully' });
        } catch (error) {
            res.status(400).json({ message: 'Error fetching user', error });
        }
    }
    else{
        res.json({data:current_user.email});
    }
});


// get orders
app.post('/api/getOrders', async (req, res) => {
    const {email} = req.body;
    try {
        const orders = await Order.find({ email });
        if (!orders) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({data:orders});
    } catch (error) {
        res.status(400).json({ message: 'Error fetching user', error });
    }

});

app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
});
