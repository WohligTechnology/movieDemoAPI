const router = Router()
router.get("/", (req, res) => {
    GenreModel.search(res.callback)
})
router.get(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        GenreModel.getOne(req.params.id, res.callback)
    }
)
router.post(
    "/",
    ValidateRequest({
        body: {
            type: "object",
            properties: {
                name: {
                    type: "string"
                },
                email: {
                    type: "string"
                },
                password: {
                    type: "string"
                }
            }
        }
    }),
    (req, res) => {
        UserModel.create(req.body, res.callback)
    }
)
router.put(
    "/:id",
    ValidateRequest({
        body: {
            type: "object",
            properties: {
                name: {
                    type: "string"
                },
                email: {
                    type: "string"
                },
                password: {
                    type: "string"
                },
                reasetToken: {
                    type: "string"
                },
                // accessToken: {
                //     type: "String"
                // },
                favourites: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Movie"
                    }
                ]
            }
        },
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        GenreModel.edit(req.params.id, req.body, res.callback)
    }
)
router.delete(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        GenreModel.delete(req.params.id, res.callback)
    }
)
export default router
