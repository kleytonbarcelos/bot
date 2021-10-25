const Token = import("../models/Token");

export async function Index(req, res) {
    let data;
    if (req.query) {
        let query = req.query;
        data = await Token.find(query);
    } else {
        data = await Token.find();
    }
    return res.json(data);
}
export async function Get(req, res) {
    try {
        let query = req.query;
        let data = await Token.findOne(query);
        return res.json(data);
    } catch (error) {
        return res.status(400).json(error);
    }
}
export async function Search(req, res) {
    try {
        let query = req.query;
        let data = await Token.find(query);
        return res.json(data);
    } catch (error) {
        return res.status(400).json(error);
    }
}
export async function Store(req, res) {
    const { token } = req.body;
    if (await Token.findOne({ token }))
        return res.status(400).json({ error: "Token is alread registered" });

    const data = await Token.create(req.body);
    return res.json(data);
}
export async function Put(req, res) {
    let { id } = req.body;
    let token = await Token.updateOne({ id }, { $set: req.body });
    return res.json(token);
}
export async function Delete(req, res) {
    let { id } = req.params;
    let token = await Token.deleteOne({ _id: id });
    return res.json(token);
}