import { rest } from 'msw'
import type { CreatePetDto, PetDto } from '../services/api/pets/contracts'
import { PETS, PET_ID, PET_IMAGE_URL } from './data/pets'

const pets = PETS

export const handlers = [
  rest.get('http://localhost:5000/api/pets', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(pets))
  }),
  rest.post('http://localhost:5000/api/pets', (req, res, ctx) => {
    const createPetDto: CreatePetDto = JSON.parse(req.body as string)
    const newPet: PetDto = {
      id: PET_ID,
      name: createPetDto.name,
      description: createPetDto.description,
      dateOfBirthTimestamp: createPetDto.dateOfBirthTimestamp,
      gender: createPetDto.gender,
      imageURL: PET_IMAGE_URL,
    }
    pets.push(newPet)
    return res(ctx.status(204))
  }),
]
