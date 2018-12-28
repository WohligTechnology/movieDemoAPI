const router = Router()
router.get("/", (req, res) => {
    MovieModel.search(res.callback)
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
                // views: {
                //     type: "number",
                //     format:"undefined"
                // }
            }
        }
    }),
    (req, res) => {
        MovieModel.getOne(req.params.id, res.callback)
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
                }
            }
        }
    }),
    (req, res) => {
        MovieModel.create(req.body.name, res.callback)
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
                }
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
        MovieModel.edit(req.params.id, req.body.name, res.callback)
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
        MovieModel.delete(req.params.id, res.callback)
    }
)
export default router
