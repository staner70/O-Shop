// Midddleware pour capter les erreurs, ca nous dispnse d'utiliser try catch dans le controller 

module.exports = {
    catchErrors: fn => (req,res,next) => {
        return fn(req,res,next).catch(next)
    }
};