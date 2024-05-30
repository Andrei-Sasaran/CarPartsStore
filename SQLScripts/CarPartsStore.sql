CREATE TABLE [Cars] (
  [Vin] nvarchar(17) PRIMARY KEY,
  [location] nvarchar(100),
  [manufacturer] nvarchar(100),
  [fuelType] nvarchar(100),
  [model] nvarchar(100),
  [engineSize] int,
  [engineType] nvarchar(100),
  [securityCode] int,
  [modelYear] int,
  [assemblyPlant] nvarchar(100),
  [serialNumber] int
)
GO

CREATE TABLE [CarParts] (
  [portrait] nvarchar(5) PRIMARY KEY,
  [radiator] int,
  [suspension] int,
  [brakes] int,
  [motorOil] int,
  [transmision] int,
  [wheels] int,
  [chasis] int,
  [engine] int
)
GO

CREATE TABLE [Radiator] (
  [id] int PRIMARY KEY,
  [name] nvarchar(100),
  [manufacturer] nvarchar(100),
  [model] nvarchar(100),
  [year] int,
  [type] nvarchar(100),
  [description] nvarchar(2000),
  [stock] int,
  [price] decimal(10,2)
)
GO

CREATE TABLE [Suspension] (
  [id] int PRIMARY KEY,
  [name] nvarchar(100),
  [manufacturer] nvarchar(100),
  [model] nvarchar(100),
  [year] int,
  [type] nvarchar(100),
  [description] nvarchar(2000),
  [stock] int,
  [price] decimal(10,2)
)
GO

CREATE TABLE [Brakes] (
  [id] int PRIMARY KEY,
  [name] nvarchar(100),
  [manufacturer] nvarchar(100),
  [model] nvarchar(100),
  [year] int,
  [type] nvarchar(100),
  [description] nvarchar(2000),
  [stock] int,
  [price] decimal(10,2)
)
GO

CREATE TABLE [MotorOil] (
  [id] int PRIMARY KEY,
  [name] nvarchar(100),
  [manufacturer] nvarchar(100),
  [model] nvarchar(100),
  [year] int,
  [type] nvarchar(100),
  [description] nvarchar(2000),
  [stock] int,
  [price] decimal(10,2)
)
GO

CREATE TABLE [Transmision] (
  [id] int PRIMARY KEY,
  [name] nvarchar(100),
  [manufacturer] nvarchar(100),
  [model] nvarchar(100),
  [year] int,
  [type] nvarchar(100),
  [description] nvarchar(2000),
  [stock] int,
  [price] decimal(10,2)
)
GO

CREATE TABLE [Wheels] (
  [id] int PRIMARY KEY,
  [name] nvarchar(100),
  [manufacturer] nvarchar(100),
  [model] nvarchar(100),
  [year] int,
  [type] nvarchar(100),
  [description] nvarchar(2000),
  [stock] int,
  [price] decimal(10,2)
)
GO

CREATE TABLE [Chasis] (
  [id] int PRIMARY KEY,
  [name] nvarchar(100),
  [manufacturer] nvarchar(100),
  [model] nvarchar(100),
  [year] int,
  [type] nvarchar(100),
  [description] nvarchar(2000),
  [stock] int,
  [price] decimal(10,2)
)
GO

CREATE TABLE [Engine] (
  [id] int PRIMARY KEY,
  [name] nvarchar(100),
  [manufacturer] nvarchar(100),
  [model] nvarchar(100),
  [year] int,
  [type] nvarchar(100),
  [capacity] int,
  [cylinderNumber] int,
  [cylinderPlacement] nvarchar(100),
  [description] nvarchar(2000),
  [stock] int,
  [price] decimal(10,2)
)
GO

CREATE TABLE [Users] (
  [email] nvarchar(100) PRIMARY KEY,
  [password] nvarchar(100),
  [userName] nvarchar(100),
  [role] int,
  [shoppingCart] nvarchar(500),
  [totalPrice] decimal(10,2)
)
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'id length:17',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Cars',
@level2type = N'Column', @level2name = 'Vin';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'country <1>',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Cars',
@level2type = N'Column', @level2name = 'location';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = '<2,3>',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Cars',
@level2type = N'Column', @level2name = 'manufacturer';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'gas,diesel,Ev,hybrid <2,3,8>',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Cars',
@level2type = N'Column', @level2name = 'fuelType';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'model <4-8>',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Cars',
@level2type = N'Column', @level2name = 'model';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = '(in cc) <4-8>',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Cars',
@level2type = N'Column', @level2name = 'engineSize';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'v6,i6,v8,w12 <4-8>',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Cars',
@level2type = N'Column', @level2name = 'engineType';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = '1-verified/0-unknown <9>',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Cars',
@level2type = N'Column', @level2name = 'securityCode';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'length:4 <10>',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Cars',
@level2type = N'Column', @level2name = 'modelYear';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'the plant where was made, <11>',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Cars',
@level2type = N'Column', @level2name = 'assemblyPlant';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'the last 6 ,unique per vehicle',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Cars',
@level2type = N'Column', @level2name = 'serialNumber';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'from VIN <4-8>',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'CarParts',
@level2type = N'Column', @level2name = 'portrait';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'in cc',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Engine',
@level2type = N'Column', @level2name = 'capacity';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'i6,v6,v8',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Engine',
@level2type = N'Column', @level2name = 'cylinderPlacement';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'component id + , concatenated string',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Users',
@level2type = N'Column', @level2name = 'shoppingCart';
GO

ALTER TABLE [CarParts] ADD FOREIGN KEY ([radiator]) REFERENCES [Radiator] ([id])
GO

ALTER TABLE [CarParts] ADD FOREIGN KEY ([suspension]) REFERENCES [Suspension] ([id])
GO

ALTER TABLE [CarParts] ADD FOREIGN KEY ([brakes]) REFERENCES [Brakes] ([id])
GO

ALTER TABLE [CarParts] ADD FOREIGN KEY ([motorOil]) REFERENCES [MotorOil] ([id])
GO

ALTER TABLE [CarParts] ADD FOREIGN KEY ([transmision]) REFERENCES [Transmision] ([id])
GO

ALTER TABLE [CarParts] ADD FOREIGN KEY ([wheels]) REFERENCES [Wheels] ([id])
GO

ALTER TABLE [CarParts] ADD FOREIGN KEY ([chasis]) REFERENCES [Chasis] ([id])
GO

ALTER TABLE [CarParts] ADD FOREIGN KEY ([engine]) REFERENCES [Engine] ([id])
GO
