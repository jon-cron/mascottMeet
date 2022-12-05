import { Pop } from "../Utils/Pop.js"
import { likersService } from "../Services/likersService.js"


export class LikersController {
    constructor() {
        console.log('LIkers controller connected')
    }
    async likePost(id) {
        try {
            await likersService.likePost(id)

        } catch (error) {
            Pop.error(error.message)
        }
    }
}