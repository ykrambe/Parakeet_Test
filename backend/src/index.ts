
import {Hono} from 'hono'
import facilities from './routes/facilities'
import { db } from './db';
import { cors } from 'hono/cors'

const app = new Hono()

app.use(cors())
app.route("/facilities", facilities)
//main endpoint
app.get("/", async (c:any) => {
	console.log("env",c.env.DATABASE_URL )
	return c.text("Welcome to Parakeet Test Backend");
})

app.get("/info", async (c:any) => {
	return c.json(c);
})

export default app
