import knex from '../database/connection'
import { Request, Response } from 'express'

class PointsController {
  async index(req: Request, res: Response){
    const { city, uf, items } = req.query

    const parsedItems = String(items).split(',').map(item => Number(item.trim()))

    const points = await knex('tb_points')
      .join('tb_points_items', 'tb_points.id', '=', 'tb_points_items.point_id')
      .whereIn('tb_points_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('tb_points.*')
    return res.json({ points })
  }

  async show(req: Request, res: Response){
    const { id } = req.params

    const point = await knex('tb_points').where('id', id).first()

    if(!point)
      return res.status(400).json({ message: 'Point not found' })
    
    /**
    * SELECT * FROM tb_items
    * JOIN tb_points_items ON tb_items.id = tb_points_items_id
    * WHERE tb_point_items.point_id = id 
    */

    const items = await knex('tb_items')
    .join('tb_points_items', 'tb_items.id', '=', 'tb_points_items.item_id')
    .where('tb_points_items.point_id', id)
    .select('tb_items.title')

    return res.json({point, items})
  }

  async create(req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      lontitude,
      city,
      uf,
      items
    } = req.body

    const trx = await knex.transaction()

    const point = {
      image: 'https://images.unsplash.com/photo-1573481078935-b9605167e06b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      name,
      email,
      whatsapp,
      latitude,
      lontitude,
      city,
      uf
    }

    const insertedIds = await trx('tb_points').insert(point)

    const point_id = insertedIds[0]

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id
      }
    })

    await trx('tb_points_items').insert(pointItems)

    await trx.commit()

    return res.json({
      id: point_id,
      ...point
    })
  }
}

export default PointsController