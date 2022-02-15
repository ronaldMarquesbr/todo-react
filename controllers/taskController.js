const User = require('../models/User');

const taskController = {

    newTask: async function(req, res) {

        const title = req.body.title
        const desc = req.body.desc
    
        const task = await User.updateOne({name: "Ronald Pinto Marques"}, { $addToSet: { tasks: {title, desc} } });
    
    }

}

module.exports = taskController;
