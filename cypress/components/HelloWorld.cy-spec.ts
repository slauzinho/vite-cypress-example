import HelloWorldVue from '../../src/components/HelloWorld.vue';
import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@cypress/vue';

const createApp = () => {
  return mount(HelloWorldVue, {
    global: {
      provide: {
        store: setActivePinia(createPinia()),
      },
    },
  });
};

it('allows me to increment counter', () => {
  createApp();
  cy.get('h1')
    .contains('0')
    .should('exist');
  cy.get('h2')
    .contains('0')
    .should('exist');
  cy.get('button')
    .contains(/increment/i)
    .click();
  cy.get('h1')
    .contains('2')
    .should('exist');
  cy.get('h2')
    .contains('1')
    .should('exist');
});
