USE [CarPartsStore]
GO

INSERT INTO [dbo].[Users]([email],[password],[username],[role],[shoppingCart],[totalPrice])
VALUES('cindea_dictatoru@gmail.com','cindea112', 'Cindea Ionut', 0, '', 0.00)
GO

INSERT INTO [dbo].[Users]([email],[password],[username],[role],[shoppingCart],[totalPrice])
VALUES('bossu_112@gmail.com','bossu112', 'Badarau Andrei', 1, '', 0.00)
GO

INSERT INTO [dbo].[Users]([email],[password],[username],[role],[shoppingCart],[totalPrice])
VALUES('ssr_bmw112@gmail.com','ssr112', 'Sasaran Andrei', 1, '', 0.00)
GO

INSERT INTO [dbo].[Users]([email],[password],[username],[role],[shoppingCart],[totalPrice])
VALUES('fara_caterinca@gmail.com','horatiu112', 'Juncan Horatiu', 1, '', 0.00)
GO

INSERT INTO [dbo].[Users]([email],[password],[username],[role],[shoppingCart],[totalPrice])
VALUES('pburzo_capcaun@gmail.com','paul112', 'Burzo Paul', 1, '', 0.00)
GO

select * from Users