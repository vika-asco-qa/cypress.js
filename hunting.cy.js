describe('HuntingPony', function () {
    it('Длинный автотест', function () {
       cy.visit('https://huntingpony.com/');
       cy.get('#splide02-slide01 > .product-preview > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click();
       cy.get('.add-cart-counter__btn').click();
       cy.get('.add-cart-counter__detail').click();
       cy.get('.is-count-up > .icon').click();
       cy.contains('Оформить заказ')
       })
})