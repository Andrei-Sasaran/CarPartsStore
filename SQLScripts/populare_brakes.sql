USE [CarPartsStore]
GO

INSERT INTO [dbo].[Brakes]([id],[name],[manufacturer],[model],[year],[type],[description],[stock],[price])
VALUES(1, 'Z36 TRUCK & TOW BRAKE UPGRADE KIT', 'PowerStop LLC', 'Z36', 2024, 'Ventilated',
      'Proprietary Carbon-Fiber Ceramic Z36 brake pads enhance the strength of a typical ceramic brake pad compound to handle heavier loads. 
	  This complete brake kit has been engineered to handle the added stress of towing, hauling, mountainous driving and lifted trucks.', 10, 750)
GO

INSERT INTO [dbo].[Brakes]([id],[name],[manufacturer],[model],[year],[type],[description],[stock],[price])
VALUES(2, 'Z23 EVOLUTION SPORT BRAKE UPGRADE KIT', 'PowerStop LLC', 'Z23', 2024, 'Ventilated', 
      'PowerStop engineered Carbon-Fiber Ceramic Z23 compound significantly enhances braking performance versus traditional ceramic brake pads. 
	  This complete upgrade kit is engineered to improve the braking performance of the vehicle you use everyday.', 10, 650)
GO

INSERT INTO [dbo].[Brakes]([id],[name],[manufacturer],[model],[year],[type],[description],[stock],[price])
VALUES(3, 'Z26 STREET WARRIOR BRAKE UPGRADE KIT', 'PowerStop LLC', 'Z26', 2024, 'Ventilated',
       'Proprietary Carbon-Fiber Ceramic Z26 brake pads enhance heat dissipation versus a typical ceramic brake pad for better stopping power at high speed. 
	   This complete brake kit has been engineered to handle the increased demand of street-driven muscle cars and performance vehicles.', 10, 800)
GO

INSERT INTO [dbo].[Brakes]([id],[name],[manufacturer],[model],[year],[type],[description],[stock],[price])
VALUES(4, 'JEEP BIG BRAKE CONVERSION KIT', 'PowerStop LLC', 'Z36 Carbon-Fiber Ceramic Brake Pads', 2024, 'Ventilated',
       'Made with our carbon-fiber ceramic formula to increase braking power without sacrificing everyday drivability. 
	   Our low-dust formulation is verified through 3rd party on-vehicle testing. No modifications needed to your vehicle', 10, 500)
GO

INSERT INTO [dbo].[Brakes]([id],[name],[manufacturer],[model],[year],[type],[description],[stock],[price])
VALUES(5, 'Z17 EVOLUTION GEOMET® FULLY COATED ROTOR BRAKE KIT', 'PowerStop LLC', 'Z17', 2024, 'Ventilated',
       'Thermal scorched for a faster break-in as well as chamfered and slotted to ensure noise-free braking. 
	   Positive mold technology delivers consistent wear and performance while the powder coated backing plate resists rust and corrosion.', 10, 1000)
GO

INSERT INTO [dbo].[Brakes]([id],[name],[manufacturer],[model],[year],[type],[description],[stock],[price])
VALUES(6, 'Z23 EVOLUTION SPORT GEOMET® FULLY COATED ROTOR BRAKE KIT FOR EUROPEAN VEHICLES', 'PowerStop LLC', 'Z23', 2024, 'Coated',
       'PowerStop engineered Z23 Carbon-Fiber Ceramic compound significantly enhances braking & Genuine GEOMET® Fully Coated rotors maintain that new car look for your European vehicle. 
	   This complete kit is engineered to improve the braking performance of the European vehicle you use everyday.', 10, 800)
GO

INSERT INTO [dbo].[Brakes]([id],[name],[manufacturer],[model],[year],[type],[description],[stock],[price])
VALUES(7, 'Z17 STOCK REPLACEMENT BRAKE KIT', 'PowerStop LLC', 'Z17', 2024, 'Non-Coated',
       'Perfectly matched rotors and pads along with upgraded stainless-steel hardware, and high temperature ceramic brake lubricant. Pads are thermal scorched for fast break-in. 
	   No modifications needed to your vehicle. Z17 ceramic brake pads low dust formula validated through on-vehicle 3rd party tests in Los Angeles City Traffic.', 10, 400)
GO

INSERT INTO [dbo].[Brakes]([id],[name],[manufacturer],[model],[year],[type],[description],[stock],[price])
VALUES(8, 'TRACK DAY BRAKE KIT', 'PowerStop LLC', 'TRACK DAY BRAKE KIT', 2024, 'Carbon-Fiber/Metallic formulation.',
       'Track Day brake pads are made to have the highest coefficient of friction. When paired with OE style non-coated replacement rotors included in this kit, a smooth ride is guaranteed. 
	   Enjoy a superior pedal feel with the perfect stage one brake pads for beginning track day enthusiasts.', 10, 1200)
GO

INSERT INTO [dbo].[Brakes]([id],[name],[manufacturer],[model],[year],[type],[description],[stock],[price])
VALUES(9, 'TRACK DAY SPEC BRAKE KIT', 'PowerStop LLC', 'TRACK DAY SPEC BRAKE KIT', 2024, 'Carbon-Fiber/Metallic formulation.',
       'Track Day Spec brake pads are made to have the highest coefficient of friction. When paired with OE style non-coated replacement rotors included in this kit, a smooth ride is guaranteed. 
	   Enjoy a superior pedal feel with the perfect stage two brake pads for advanced track day enthusiasts.', 10, 1000)
GO

INSERT INTO [dbo].[Brakes]([id],[name],[manufacturer],[model],[year],[type],[description],[stock],[price])
VALUES(10, 'EURO-STOP BRAKE KIT', 'PowerStop LLC', 'EURO-STOP BRAKE KIT', 2024, 'Genuine GEOMET® Coating',
       'Euro-Stop Disc Brake Pads ECE-R90 brake pads produce an equivalent amount of brake dust to the OE product. 
	   Disc brake rotors are coated using genuine GEOMET® for maximum protection against rust.', 10, 1000)
GO

select * from Brakes