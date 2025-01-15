import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const router = express.Router();

const SECRET = process.env.JWT_SECRET || 'secretkey';

// Register Route
router.post('/register', async (req, res) => {
    const { username, email,password} = req.body;
    try {
        const newUser = new User({ username, email,password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, role: user.role });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/all',async(req,res)=>{
    try{
        const users=await User.find();
        if(users.length === 0){
            res.status(400).json({error:'empty users'});
        }
        res.status(200).json({ count: users.length, users});
    }
    catch(error){
        res.status(500).json({ error: 'error while get all users' });
    }
})
router.put('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
  
    try {
      // Validate the data you want to update (you can also add validation checks here)
      if (!username || !email) {
        return res.status(400).json({ error: 'Username and role are required' });
      }
  
      // Find the user and update
      const updatedUser = await User.findByIdAndUpdate(id, { username, email}, { new: true });
      
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(updatedUser); // Respond with updated user data
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params; // Get the ID from the URL parameter
  
    try {
      // Find and delete the user by ID
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Send a success response
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      // Handle errors (e.g., invalid ID format or database issues)
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });  
  
export default router;