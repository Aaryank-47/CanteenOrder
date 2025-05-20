import  mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    // collegeId:{
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'College'
    // },
    orderNumber:{
        type: Number
    },
    foodItems:[
        {
            foodId:{
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Food'
            },
            foodQunatity:{
                type: Number,
                default: 1
            }
        }
    ],
    status:{
        type: String,
        enum: ["pending", "preparing", "ready", "delivered", "cancelled"],
        default: "Pending"
    },
    totalPrice:{
        type: Number
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);
export default Order;