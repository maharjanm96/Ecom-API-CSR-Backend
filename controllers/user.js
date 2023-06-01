const userModel = require("../models/userdb");


const getAllUsersDetails = async (req,res) =>{
    try{
        const users = await userModel.find({} ,{password:0});
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message: "Something Went Wrong!", error: err});

    }
    //console.log(req.body)
}

const getSingleUserDetails = async (req,res) =>{
    
    const { userID } = req.params; 
    try {
        
        const user = await userModel.findOne({_id: userID} ,{password: 0})
        res.json(user ? user : "Data Not Found")

    } catch (err) {
        console.log('Something Went Wrong....')
        res.status(500).json({ message: "Something Went Wrong ", error: err });
    }

}

const updateUserDetails = async (req, res) => {
    const { userID } = req.params;
    const { password, ...userRest } = req.body;
    try {
        const user = await userModel.findByIdAndUpdate(userID, userRest, {
            new: true,
        });
        res.status(200).json(user);
    } catch (err) {
        console.log("Something went wrong");
        //console.log(err)
        res.status(500).json({ message: "Something went wrong", error: err });
    }
};

const deleteuserDetails= async (req,res) =>{

    const { userID } = req.params;
    try {
        const user = await userModel.findByIdAndDelete(userID, req.body, { new: true })
        //res.send(200).json("user Deleted Successfully")
        res.status(200).json(user) 
    } catch (err) {
        console.log('Something Went Wrong....')
        res.status(500).json({ message: "Something Went Wrong ", error: err });
    }

}

module.exports = {
    //createUserDetails
    getAllUsersDetails,
    getSingleUserDetails,
    updateUserDetails,
    deleteuserDetails
}