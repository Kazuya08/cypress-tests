import { mount } from '@cypress/react';
import AboutPage from '@/components/about/about'; // Ajuste o caminho conforme a estrutura do seu projeto

describe('<AboutPage />', () => {
  it('should render and display expected content', () => {
    mount(<AboutPage />);

    cy.get('h1').contains('About page');
    cy.get('a[href="/"]').should('be.visible');
  });
});
