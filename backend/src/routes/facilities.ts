// facilities.ts
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http';
import { Hono } from 'hono'
import { facilities } from '../db/schema';
import { facilitySchema } from '../db/validation';
import { desc, eq } from 'drizzle-orm';

const app = new Hono()


// get all facility
app.get("/", async (c: any) => {
  const page = c.req.query("page") || 1
  const page_size = c.req.query("pageSize") || 10
  const sql = neon(c.env.DATABASE_URL);
  const db = drizzle({ client: sql });

  try {
    const getFacilities = await db.select()
    .from(facilities)
    .limit(page_size)
    .orderBy(desc(facilities.created_at))
    .offset((page - 1) * page_size);

    return c.json({
      status: 'success',
      message: 'facilities fetched',
      data: getFacilities
    },200)
  } catch (error) {
    return c.json({
      status: 'error',
      message: 'error fetching facilities',
    },400)
  }
  
})

// create new facility
app.post('/', async(c:any) => {
  const body = await c.req.json()
  try {
    const validate = facilitySchema.parse(body)
  } catch (error:any) {
    return c.json({
      status: "error",
      message: error.errors[0].message
    }, 400)
  }

    const {
    name,
    street_address,
    city,
    state,
    zip_code, 
    phone_number,
    images_url
  } = body

  try {
    const sql = neon(c.env.DATABASE_URL);
    const db = drizzle({ client: sql });
    const saveFacility = await db.insert(facilities).values({
      name,
      street_address,
      city,
      state,
      zip_code,
      phone_number,
      images_url
    }).returning();

    return c.json({
      status: 'success',
      message: 'facility created',
      data: saveFacility
    }, 201)
  } catch (error) {
    console.log(error)
    return c.json({
      status: 'error',
      message: 'error creating facility',
    }, 400)
  }
})

// get single facility
app.get('/:id', async (c: any) => {
  const id: number = Number(c.req.param('id'))
  if (!id) {
    return c.json({ status: 'error', message: 'id is invalid' }, 400)
  }
  try {
    const sql = neon(c.env.DATABASE_URL);
    const db = drizzle({ client: sql });
    const findFacility = await db.select()
      .from(facilities)
      .where(eq(facilities.id, id))
    return c.json({
      status: 'success',
      message: 'facility fetched',
      data: findFacility
    }, 200)
  } catch (error) {
    return c.json({
      status: 'error',
      message: 'error getting facility',
    }, 400)
  }
  
})

// update facility
app.put('/:id', async(c:any) => {
  const body = await c.req.json()
  const id: number = Number(c.req.param('id'))
  if (!id) {
    return c.json({ status: 'error', message: 'id is invalid' }, 400)
  }

  try {
    const validate = facilitySchema.parse(body)
  } catch (error:any) {
    return c.json({
      status: "error",
      message: error.errors[0].message
    }, 400)
  }

  const {
    name,
    street_address,
    city,
    state,
    zip_code, 
    phone_number,
    images_url
  } = body

  try {
    const sql = neon(c.env.DATABASE_URL);
    const db = drizzle({ client: sql });
    const updateFacility = await db.update(facilities)
    .set({
      name,
      street_address,
      city,
      state,
      zip_code,
      phone_number,
      images_url
    })
    .where(eq(facilities.id, id))
    .returning()

    return c.json({
      status: 'success',
      message: 'facility fetched',
      data: updateFacility
    },201)
  } catch (error) {
    return c.json({
      status: 'error',
      message: 'error updating facility'
    },400)
  }
  


  return c.json(`update ${c.req.param('id')}`)
})
// delete facility
app.delete('/:id', async(c:any) => {
  const id: number = Number(c.req.param('id'))
  if (!id) {
    return c.json({ status: 'error', message: 'id is invalid' }, 400)
  }

  try {
    const sql = neon(c.env.DATABASE_URL);
    const db = drizzle({ client: sql });
    const deleteFacility = await db.delete(facilities)
    .where(eq(facilities.id, id))
    let message = 'facility deleted'
    if (deleteFacility.rowCount === 0) {
      message = 'facility not found'
    }
    return c.json({
      status: 'success',
      message: message,
    },200)
  } catch (error) {
    return c.json({
      status: 'error',
      message: 'error deleting facility',
    },200)
  }
})

export default app