const validate = (schema) => async (req, res, next) => {
    try {
        const pasrseBody = await schema.parseAsync(req.body);
        req.body = pasrseBody;
        next();
    } catch (error) {
        console.log(error)
        console.log(error.message)
        res.status(400).json({message: "Validation failed"})
    }
}
export default validate;