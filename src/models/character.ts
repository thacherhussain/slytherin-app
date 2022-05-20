export type Character = {
  id: number
  name: string
  house: string
  patronus: string
  ancestry: string
  wizard: string
  wand: {
    wood: string
    core: string
    length: number
  }
  image: string
}
