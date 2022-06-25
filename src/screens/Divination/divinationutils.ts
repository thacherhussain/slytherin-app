export const getNumber = (items: number): number =>
  Math.floor(Math.random() * items)

export const generateRandomItem = (optionsArray: string[]): string => {
  const randomNumber = getNumber(optionsArray.length)
  return optionsArray[randomNumber]
}

export const getOwl = (): string =>
  generateRandomItem(['potions', 'quidditch', 'transfiguration'])

export const getPartner = (): string =>
  generateRandomItem(['Severus Snape', 'Ginny Weasley', 'Newt Scamander'])

export const getJob = (): string =>
  generateRandomItem([
    'an Auror',
    'a Professor',
    'a Broom Salesman',
    'a Ministry Middle Manager',
    'a Quidditch Referee',
  ])

export const getLocation = (): string =>
  generateRandomItem([
    'London',
    'Sydney',
    'Scotland',
    'Los Angeles',
    'San Francisco',
  ])

export const getHousing = (): string =>
  generateRandomItem([
    'in the Shrieking Shack',
    'at Malfoy Manor',
    'at 12 Grimmauld Place',
    'at 4 Privet Drive',
    'on a Farm',
    'in a Skyscraper',
    'in the Burrow',
  ])

export const getPet = (): string => {
  const animal = generateRandomItem([
    'owl',
    'cat',
    'toad',
    'rat',
    'dog',
    'dragon',
    'niffler',
  ])
  const name = generateRandomItem([
    'fuzzy butt',
    'Jake',
    'Buttons',
    'Bob',
    'Samantha',
    'Oliver',
  ])
  return `${animal} named ${name}`
}

export const getPostDarkLordFeeling = () =>
  generateRandomItem([
    'feel your dark mark burn on a cold day',
    'want some fever fudge',
    'think Snape was evil',
  ])

export const getKids = (): string => {
  const house = generateRandomItem([
    'Slytherin',
    'Hufflepuff',
    'Gryfindor',
    'Ravenclaw',
  ])

  const kids = getNumber(5)

  let statement
  switch (kids) {
    case 0:
      statement = `You won't have any kids -- child free vacations for you!`
      break
    case 1:
      statement = `You will have 1 kid in ${house}`
      break
    default:
      statement = `You will have ${kids} kids, all of them will be in ${house}`
  }
  return statement
}

export const emmaFortune = `You will graduate from Hogwarts without having to take any exams or go to any classes you didn't want to go to. You will work as an independently wealthy woman who does what she wants in London and live at 12 Grimmauld Place. You will marry Sirius Black and have 3 kids, all three in Slytherin. You will have two big dogs named Fenris and Draco. Even though the dark lord has fallen you still feel your dark mark burn on a cold day.`
