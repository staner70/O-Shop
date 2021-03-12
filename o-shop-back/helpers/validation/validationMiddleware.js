module.exports = {
// MIddleware pour customiser les messages d'erreur en fonction de chaque schema
    validateBody(schema) {
        return async (request, response, next) => {
            try {
                const validation = await schema.validateAsync(request.body);

                // validation contient un propriété error si qqc c'est mal passé
                if (validation.error) {
                    // Réponse d'erreur
                    response.status(400).json({error: validation.error});
                    return;
                }
                next();

            } catch (error) {
                if (error.message == 'category.invalid (category)') {
                    response.status(400).json({error: {
                        details: error.message,
                        message: "Le category name n'existe pas"
                    }});
                    return;
                }
                if (error.message == 'shop.invalid (shop)') {
                    response.status(400).json({error: {
                        details: error.message,
                        message: "Le shop name n'existe pas"
                    }});
                    return;
                }
                if (error.message == 'role.invalid (role)') {
                    response.status(400).json({error: {
                        details: error.message,
                        message: "Le role name n'existe pas"
                    }});
                    return;
                }
                next(error);
            }
        };
    },
};