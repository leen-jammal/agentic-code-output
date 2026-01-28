const Order = require('../models/Order');

// Controller functions for order management
const createOrder = async (req, res) => {
    try {
        const { customerName, customerEmail, customerPhone, deliveryAddress, orderItems, totalPrice } = req.body;

        // Validation
        if (!customerName || !customerEmail || !customerPhone || !deliveryAddress || !orderItems || !Array.isArray(orderItems) || orderItems.length === 0 || !totalPrice) {
            return res.status(400).json({ message: 'All order details are required' });
        }

        if (typeof customerName !== 'string' || typeof customerEmail !== 'string' || typeof customerPhone !== 'string' || typeof deliveryAddress !== 'string') {
            return res.status(400).json({ message: 'Customer details and delivery address must be strings' });
        }

         if (!/^[a-zA-Z\s]+$/.test(customerName)) {
            return res.status(400).json({ message: 'Customer name must contain only letters and spaces' });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        if (!/^\d{10}$/.test(customerPhone)) {
            return res.status(400).json({ message: 'Invalid phone number format. Must be 10 digits.' });
        }

        if (typeof totalPrice !== 'number' || totalPrice <= 0) {
            return res.status(400).json({ message: 'Total price must be a positive number' });
        }

        for (const item of orderItems) {
            if (!item.name || typeof item.name !== 'string' || item.name.trim() === '') {
                return res.status(400).json({ message: 'Each order item must have a valid name' });
            }
            if (!item.quantity || typeof item.quantity !== 'number' || item.quantity <= 0) {
                return res.status(400).json({ message: 'Each order item must have a valid quantity (positive number)' });
            }
            if (!item.price || typeof item.price !== 'number' || item.price <= 0) {
                return res.status(400).json({ message: 'Each order item must have a valid price (positive number)' });
            }
        }

        const newOrder = new Order({
            customerName,
            customerEmail,
            customerPhone,
            deliveryAddress,
            orderItems,
            totalPrice,
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order', error: error.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error: error.message });
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder,
};