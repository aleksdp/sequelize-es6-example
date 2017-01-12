import {Router} from 'express'

const router = Router()

router.get('/', (req, res)=>{
    res.send('index')
})

router.get('/test', (req, res)=>{
    res.send('test2')
})

export default router