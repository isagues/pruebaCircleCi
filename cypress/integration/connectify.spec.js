var Chance = require('chance');
var chance = new Chance();

const baseURL = 'http://localhost:8080'

describe("LogIn", () => {

  beforeEach(() =>{
    // cy.visit(baseURL + '/authentication/login')
    cy.visit('https://pipo-connectify.herokuapp.com/authentication/login')
  })

  it('Consumer', () => {

    var values = {
      username: 'cons2',
      password: 'papanata',
    }

    cy.get('input').each(($el) =>{
      let key = $el.attr('name')
      let type = $el.attr('type')
      if(values[key] && type != 'hidden'){
        cy.wrap($el).click({force:true})
        cy.wrap($el).type(values[key]).should('have.value', values[key])
      }
    })

    cy.get('[type=submit]').click()
    cy.url().should('match',  new RegExp('https://pipo-connectify.herokuapp.com/'))
    cy.contains('Elisenda').click()
    cy.contains(/log out/i).click()
    cy.contains(/log in/i)

  })

  it('Conectioner', () => {

    var values = {
      username: 'cone2',
      password: 'papanata',
    }

    cy.get('input').each(($el) =>{
      let key = $el.attr('name')
      let type = $el.attr('type')
      if(values[key] && type != 'hidden'){
        cy.wrap($el).click({force:true})
        cy.wrap($el).type(values[key]).should('have.value', values[key])
      }
    })

    cy.get('[type=submit]').click()
    cy.url().should('match',  new RegExp('https://pipo-connectify.herokuapp.com/'))
    cy.contains('Juan').click()
    cy.contains(/log out/i).click()
    cy.contains(/log in/i)

  })

  it('Admin', () => {

    var values = {
      username: 'admin',
      password: 'admin123',
    }

    cy.get('input').each(($el) =>{
      let key = $el.attr('name')
      let type = $el.attr('type')
      if(values[key] && type != 'hidden'){
        cy.wrap($el).click({force:true})
        cy.wrap($el).type(values[key]).should('have.value', values[key])
      }
    })

    cy.get('[type=submit]').click()
    cy.url().should('match',  new RegExp('https://pipo-connectify.herokuapp.com/' + 'user/adminPanel'))
    cy.contains(/log out/i).click()
    cy.contains(/log in/i)

  })
})

// describe("Registro", () => {
    
//   it('Consumer', () => {
//     cy.visit(baseURL + '/consumer/create')

//     var values = {
//       name: chance.word({ length: 10 }),
//       username: chance.word({ length: 10 }),
//       email: chance.email({domain: "example.com"}),
//       password: chance.word({ length: 10 }),
//       'last.name': chance.word({ length: 10 }),
//       'DNI': chance.natural({ min: 10000000, max: 99999999 }).toString(),
//       district: chance.word({ length: 10 }),
//       street: chance.word({ length: 10 }),
//       'house.number': chance.natural({ min: 1, max: 9999 }).toString(),
//       cell: chance.natural({ min: 10000000, max: 99999999 }).toString(),
//       cp: chance.natural({ min: 1000, max: 9999 }).toString(),
//       country: 'Argentina',
//       province: 'Neuquen',
//     }
//     values['address']     =   values['street'] + " " + values['house.number'];
//     values['houseNumber'] =   values['house.number'];
//     values['lastName']    =   values['last.name'];
//     values['phoneNumber'] =   values['cell'];
//     values['document']    =   values['DNI'];

//     cy.get('input').each(($el) =>{
//       let key = $el.attr('name')
//       let type = $el.attr('type')
//       if(values[key] && type != 'hidden'){
//         cy.wrap($el).click({force:true})
//         cy.wrap($el).type(values[key]).should('have.value', values[key])
//       }
//     })

//     cy.get('.v-input').contains('Document Type').click({force: true})
//     cy.contains('DNI').click()

//     cy.get('.v-input').contains('Country').click({force: true})
//     cy.contains('Argentina').click()

//     cy.get('.v-input').contains('Province').wait(1000).click({force: true})
//     cy.contains('Provincia de Catamarca').click()

//     cy.get('.v-input').contains('Phone type').click({force: true})
//     cy.contains('cell').click()

//     cy.get('[type=submit]').click()
//     cy.url().should('match',  new RegExp(baseURL + '/'))

//   })

//   it('Conectioner', () => {
//     cy.visit('http://localhost:8080/conectioner/create')

//     var values = {
//       name: chance.word({ length: 10 }),
//       username: chance.word({ length: 10 }),
//       email: chance.email({domain: "example.com"}),
//       password: chance.word({ length: 10 }),
//       'last.name': chance.word({ length: 10 }),
//       'DNI': chance.natural({ min: 10000000, max: 99999999 }).toString(),
//       cbu: '1234567891234567891234',
//       district: chance.word({ length: 10 }),
//       street: chance.word({ length: 10 }),
//       'house.number': chance.natural({ min: 1, max: 9999 }).toString(),
//       cell: chance.natural({ min: 10000000, max: 99999999 }).toString(),
//       cp: chance.natural({ min: 1000, max: 9999 }).toString(),
//       country: 'Argentina',
//       province: 'Neuquen',
//     }
//     values['address']     =   values['street'] + " " + values['house.number'];
//     values['houseNumber'] =   values['house.number'];
//     values['lastName']    =   values['last.name'];
//     values['phoneNumber'] =   values['cell'];
//     values['document']    =   values['DNI'];

//     cy.get('input').each(($el) =>{
//       let key = $el.attr('name')
//       let type = $el.attr('type')
//       if(values[key] && type != 'hidden'){
//         cy.wrap($el).click({force:true})
//         cy.wrap($el).type(values[key]).should('have.value', values[key])
//       }
//     })

//     cy.get('.v-input').contains('Country').click({force: true})
//     cy.contains('Argentina').click()

//     cy.get('.v-input').contains('Province').wait(1000).click({force: true})
//     cy.contains('Provincia de Catamarca').click()

//     cy.get('.v-input').contains('Phone type').click({force: true})
//     cy.contains('cell').click()

//     cy.get('[type=submit]').click()
//     cy.url().should('match', new RegExp(baseURL + '/'))

//   })
// })

// cy.get('[id=signIn]').click()
// cy.url().should('include', 'authentication/login')

// cy.get('[name=username]').click({force:true})
// cy.get('[name=username]').type(values['username'])

// cy.get('[name=password]').click({force:true})
// cy.get('[name=password]').type(values['password'])

// cy.get('[name=login]').click()