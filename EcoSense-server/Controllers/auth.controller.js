const login = (req,res)=>{

}
const createUser = async(req,res)=>{
    const { email, password, userType } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
}
module.exports = {login};