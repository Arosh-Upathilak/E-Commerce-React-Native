import mongoose from 'mongoose'

const orderSchme = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    products: [
        {
            name: {
                type: String,
                require: true
            },
            quantity: {
                type: String,
                require: true
            },
            price: {
                type: String,
                require: true
            },
            image: {
                type: String,
                require: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        require: true
    },

    shippingAdderss: {
        name: {
            type: String,
            require: true
        },
        mobileNo: {
            type: String,
            require: true
        },
        houseNo: {
            type: String,
            require: true
        },
        street: {
            type: String,
            require: true
        },
        landmark: {
            type: String,
            require: true
        },/*
        city: {
            type:String,
            require: true
        },
        country: {
            type:String,
            require: true
        },*/
        postalCode: {
            type: String,
            require: true
        }
    },
    paymentMethod: {
        type: String,
        require: True
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ordersModels =  mongoose.model("User",orderSchme);

export default ordersModels;