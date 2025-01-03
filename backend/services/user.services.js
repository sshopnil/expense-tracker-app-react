
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

exports.login = async (req, res, next)=>{
    const {email} = req.params;
    try{
        const user = await usermodel.findOne({
            email: email
        })
        if (user)
            return res.status(200).json({
                msg: 'User found',
                user: user,
                status: 'ok'
            });
        else
            {
                return res.status(404).json({ msg: 'User not found' })
            }
    }
    catch(e){
        console.log('error finding user');
    }
    finally{
        next();
    }
}