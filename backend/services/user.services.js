const {usermodel} = require('../schemas/users.schema');

exports.add_user = async (req, res, next) => {
    try {
        const user = usermodel.find({
            $or: [{ username: req.body.username, email: req.body.email }]
        });
        // console.log(user);
        if (user) {
            const newUser = new usermodel({ ...req.body });
            await newUser.save();
            res.status(200).json({ msg: "ok" });
        }
        else {
            res.status(400).json({ msg: "User aleady exists" });
        }
    }
    catch (e) {
        console.log("error: while creating user", e);
    }
    finally{
        next();
    }
}