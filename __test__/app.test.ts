
import app from '../src/app'
import request from "supertest";

describe("Testing app", () => {
    test("testing endpoint", async () => {
        const res = await request(app).get("/")


        expect(res.status).toEqual(200)
        expect(res.body).toEqual({message: "Hi"})
    })
})
