describe('Форма логина', function () {
    it('Верный логин, верный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#loginButton').should('be.disabled')
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#loginButton').should('be.disabled')
       cy.get('#pass').type('iLoveqastudio1')
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно')
       })

       it('Верный логин, не верный пароль', function () {
       cy.reload();
       cy.visit('https://login.qa.studio/');
       cy.get('#loginButton').should('be.disabled')
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#loginButton').should('be.disabled')
       cy.get('#pass').type('iLoveqastudio2')
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет')
       })

       it('Не верный логин, верный пароль', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled')
        cy.get('#mail').type('Herman@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет')
        })

        it('Логин без @, верный пароль', function () {
            cy.reload();
            cy.visit('https://login.qa.studio/');
            cy.get('#loginButton').should('be.disabled')
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#loginButton').should('be.disabled')
            cy.get('#pass').type('iLoveqastudio1')
            cy.get('#loginButton').click();
            cy.contains('Нужно исправить проблему валидации')
            })

            it('Привидение к строчным буквам в логине', function () {
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#loginButton').should('be.disabled')
                cy.get('#mail').type('GerMan@Dolnikov.ru');
                cy.get('#loginButton').should('be.disabled')
                cy.get('#pass').type('iLoveqastudio1')
                cy.get('#loginButton').click();
                cy.contains('Авторизация прошла успешно')
                })

            it('Восстановление пароля', function () {
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#forgotEmailButton').click();
                cy.get('#mailForgot').type('QALoveStudio@mail.ru');
                cy.get('#restoreEmailButton').click();
                cy.contains('Успешно отправили пароль на e-mail')
                })
})