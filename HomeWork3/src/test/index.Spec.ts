import supertest from "supertest";
import * as controllers from '../controllers/User.controllers'
import app from '../index';
const request = supertest(app);
describe('tset my api' , () => {
    it('test / endpoint' ,async () =>{
        const res = await request.get('/');
        expect(res.status).toBe(200);
    })   
})
describe('test controllers' ,() => {
    it('test get user function is defined' ,async () => {
        expect(controllers.getuser).toBeDefined
    })
})
describe('tset all endpoints' ,() => {
    it('should get list of users' ,async () => {
        const res = await request.get('/v1/user');
        expect(res.status).toBe(200);
    })
})