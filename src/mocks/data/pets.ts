import {
  Gender,
  PetDto,
  PetType,
} from '../../se../../services/api/pets/contracts'

export const PETS: PetDto[] = [
  {
    id: '13ef10a9-3279-4096-a48e-13acf44724a4',
    name: 'Grumpy',
    breed: 'None',
    type: PetType.Dog,
    description:
      'Tardar Sauce , nicknamed Grumpy Cat, was an American Internet celebrity cat. She was known for her permanently "grumpy" facial appearance, which was caused by an underbite and feline dwarfism.',
    gender: Gender.Male,
    dateOfBirthTimestamp: 1560204000000,
    imageURL:
      'https://ocdn.eu/pulscms-transforms/1/rkQk9kuTURBXy85OTdlNzg5MS1jNmQ1LTRjOWEtODgwZi1iNzcxYmU4ZjY0NWYuanBlZ5OVAwxWzQRjzQJ4kwXNAxTNAbyTCaZmOGNiOWUGgaEwBQ/grumpy-cat.webp',
  },
  {
    id: 'ca526b97-5e43-4b4b-b751-38839d5fc2b2',
    name: 'Doge',
    breed: 'None',
    type: PetType.Dog,
    description:
      'An Internet meme that became popular in 2013. The meme typically consists of a picture of a Shiba Inu dog accompanied by multicolored text in Comic Sans font in the foreground.',
    gender: Gender.Undefined,
    dateOfBirthTimestamp: 1580204000000,
    imageURL:
      'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  },
]

export const PET_TO_CREATE: PetDto = {
  id: 'b6c8872b-2f63-4511-966e-a691c30018d4',
  name: 'Tuna',
  breed: 'None',
  type: PetType.Dog,
  description:
    'Tuna is a rescue dog who was adopted by Courtney Dasher. He has an overbite meaning his top teeth protrude over his bottom lip. Dasher created an Instagram account for him when he was a pup to record the growth of his teeth. His unusual appearance gained him attention initially but over time people started to love Tuna and his interesting photos. He is often seen dressed up in costumes and making funny remarks.',
  gender: Gender.Female,
  dateOfBirthTimestamp: 1353407835,
  imageURL:
    'https://www.contentqueens.co.uk/media/1118/tuna.jpg?width=500&height=281.05263157894734',
}
