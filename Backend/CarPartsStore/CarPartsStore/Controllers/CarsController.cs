using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CarPartsStore.Models;

namespace CarPartsStore.Controllers
{
    public class CarsController : ApiController
    {
        public struct VIN
        {
            private static string ToLocation(string location)
            {
                string loc = "dontKnow";
                switch (location)
                {
                    case "1":
                        loc = "Germany";
                        break;
                    case "E":
                        loc = "England";
                        break;
                    case "3":
                        loc = "South Korea";
                        break;
                    case "R":
                        loc = "Romania";
                        break;
                    case "5":
                        loc = "United States";
                        break;
                    case "6":
                        loc = "France";
                        break;
                    default:
                        loc = "unknown";
                        break;
                }
                return loc;
            }
            private static string ToManufacturer(string manufacturer)
            {
                string man = "nan";
                switch (manufacturer)
                {
                    case "AU":
                        man = "Audi";
                        break;
                    case "BW":
                        man = "BMW";
                        break;
                    case "VW":
                        man = "Volkswagen";
                        break;
                    case "KI":
                        man = "Kia";
                        break;
                    case "DC":
                        man = "Dacia";
                        break;
                    case "FD":
                        man = "Ford";
                        break;
                    default:
                        man = "none";
                        break;
                }
                return man;
            }
            private static string ToFuelType(string portrait)
            {
                string fuel = portrait.Substring(0, 1);
                string resource = "none";
                switch (fuel)
                {
                    case "G":
                        resource = "Gasoline";
                        break;
                    case "D":
                        resource = "Diesel";
                        break;
                    case "H":
                        resource = "Hybrid";
                        break;
                    case "E":
                        resource = "Electric";
                        break;
                    default:
                        resource = "unknown fuel";
                        break;
                }
                return resource;
            }
            private static string ToModel(string portrait)
            {
                string model = "none";
                string modelCode = portrait.Substring(1, 2);
                switch (modelCode)
                {
                    case "39":
                        model = "E39";
                        break;
                    case "PS":
                        model = "Passat";
                        break;
                    case "G7":
                        model = "Golf 7";
                        break;
                    case "E9":
                        model = "EV9";
                        break;
                    case "CE":
                        model = "CEED";
                        break;
                    case "SP":
                        model = "Spring";
                        break;
                    case "LO":
                        model = "Logan";
                        break;
                    case "DS":
                        model = "Duster";
                        break;
                    case "MU":
                        model = "Mustang";
                        break;
                    default:
                        model = modelCode;
                        break;
                }
                return model;
            }
            private static int ToEngineSize(string portrait)
            {
                var subStringResult = portrait.Substring(3, 1);
                int engineSize;
                switch (subStringResult)
                {
                    case "0":
                        engineSize = 100; // for electric vehicles
                        break;
                    case "1":
                        engineSize = 25;
                        break;
                    case "B":
                        engineSize = 1968; // for gasoline/diesel engines
                        break;
                    case "C":
                        engineSize = 2998;
                        break;
                    case "D":
                        engineSize = 1991;
                        break;
                    case "E":
                        engineSize = 1968;
                        break;
                    case "F":
                        engineSize = 1984;
                        break;
                    case "G":
                        engineSize = 1984;
                        break;
                    case "H":
                        engineSize = 1198;
                        break;
                    case "I":
                        engineSize = 1390;
                        break;
                    case "J":
                        engineSize = 1461;
                        break;
                    case "K":
                        engineSize = 4999;
                        break;
                    case "L":
                        engineSize = 1297;
                        break;
                    case "X":
                        engineSize = 299521; // audi q7 Hybrid 2995 cc and 21kW/h
                        break;
                    default:
                        engineSize = -1;
                        break;
                }
                return engineSize;// in cc or/and kW/h
            }
            private static string ToEngineType(string portrait)
            {
                string type;
                var subStringResult = portrait.Substring(4, 1);

                switch (subStringResult)
                {
                    case "0":
                        type = "EV"; // for electric vehicles
                        break;
                    case "A":
                        type = "i3";
                        break;
                    case "B":
                        type = "i4"; // for gasoline/diesel engines
                        break;
                    case "C":
                        type = "i6";
                        break;
                    case "D":
                        type = "v6";
                        break;
                    case "E":
                        type = "rotary";
                        break;
                    case "K":
                        type = "v8";
                        break;
                    default:
                        type = "unknown";
                        break;
                }
                return type;
            }
            private static int ValidateSecurityCode(string securityCode)
            {
                int code = (securityCode == "1") ? 1 : (securityCode == "0") ? 0 : -1;
                return code;
            }
            private static int ToModelYear(string modelYearChar)
            {
                char c = modelYearChar[0];
                int year = 1933 + (int)c;
                return year;
            }
            private static string ToPlant(string assblyPlant)
            {
                string plant;
                switch (assblyPlant)
                {
                    case "C":
                        plant = "Chaina";
                        break;
                    case "P":
                        plant = "Pitsburg";
                        break;
                    case "R":
                        plant = "Regensburg";
                        break;
                    case "M":
                        plant = "Michigan";
                        break;
                    case "T":
                        plant = "Tibet";
                        break;
                    case "V":
                        plant = "Vietnam";
                        break;
                    case "L":
                        plant = "Ploiesti";
                        break;
                    case "N":
                        plant = "Nice";
                        break;
                    case "O":
                        plant = "Manchester";
                        break;
                    case "G":
                        plant = "Gwangju";
                        break;
                    default:
                        plant = "nowhere";
                        break;
                }
                return plant;
            }
            public VIN(string vinNumber)
            {
                VINNumber = vinNumber;
                portrait = VINNumber.Substring(3, 5);

                location = ToLocation(VINNumber.Substring(0, 1));
                manufacturer = ToManufacturer(VINNumber.Substring(1, 2));
                fuelType = ToFuelType(portrait);
                model = ToModel(portrait);
                engineSize = ToEngineSize(portrait);
                engineType = ToEngineType(portrait);
                securityCode = ValidateSecurityCode(VINNumber.Substring(8, 1));
                modelYear = ToModelYear(VINNumber.Substring(9, 1));
                assemblyPlant = ToPlant(VINNumber.Substring(10, 1));
                serialNumber = int.Parse(VINNumber.Substring(11, 6));
            }
            public string VINNumber { get; }
            public string location { get; }
            public string manufacturer { get; }
            public string portrait { get; }
            public string fuelType { get; }
            public string model { get; }
            public int engineSize { get; } // in cc or kW/h
            public string engineType { get; }
            public int securityCode { get; }
            public int modelYear { get; }
            public string assemblyPlant { get; }
            public int serialNumber { get; }
        }
        public HttpResponseMessage Get()
        {
            string query = @"
                    select * from [Cars]
                    ";
            DataTable dataTable = new DataTable();
            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["CarPartsStoreDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, connection))
            using (var dataAdapter = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                dataAdapter.Fill(dataTable);
            }
            return Request.CreateResponse(HttpStatusCode.OK, dataTable);
        }
        public string Post(Cars cars)
        {
            try
            {
                string query = @"
                        insert into [Cars] values
                        (
                        '" + cars.Vin + @"',
                        '" + cars.location + @"',
                        '" + cars.manufacturer + @"',
                        '" + cars.fuelType + @"',
                        '" + cars.model + @"',
                        '" + cars.engineSize + @"',
                        '" + cars.engineType + @"',
                        '" + cars.securityCode + @"',
                        '" + cars.modelYear + @"',
                        '" + cars.assemblyPlant + @"',
                        '" + cars.serialNumber + @"'
                        )";
                DataTable dataTable = new DataTable();
                using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["CarPartsStoreDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var dataAdapter = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    dataAdapter.Fill(dataTable);
                }
                return "Added with succes!";
            }
            catch (Exception)
            {
                return "Add failed!";
            }
        }
        [Route("api/Cars/PostFromVin")]
        [HttpPost]
        public string PostFromVIN(Cars cars)
        {
            try
            {
                VIN vin = new VIN(cars.Vin);
                string query = @"
                        insert into [Cars] values
                        (
                        '" + vin.VINNumber + @"',
                        '" + vin.location + @"',
                        '" + vin.manufacturer + @"',
                        '" + vin.fuelType + @"',
                        '" + vin.model + @"',
                        '" + vin.engineSize + @"',
                        '" + vin.engineType + @"',
                        '" + vin.securityCode + @"',
                        '" + vin.modelYear + @"',
                        '" + vin.assemblyPlant + @"',
                        '" + vin.serialNumber + @"'
                        )";
                DataTable dataTable = new DataTable();
                using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["CarPartsStoreDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var dataAdapter = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    dataAdapter.Fill(dataTable);
                }
                return "Add from VIN succeded!";
            }
            catch (Exception ex)
            {
                return "Add from VIN failed!" + ex.Message;
            }
        }
        public string Delete(Cars cars)
        {
            try
            {
                string query = @"
                        DELETE FROM Cars
                        WHERE Vin = '" + cars.Vin + @"'
                        ";
                DataTable dataTable = new DataTable();
                using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["CarPartsStoreDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var dataAdapter = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    dataAdapter.Fill(dataTable);
                }
                return "Deleted with succes!";
            }
            catch (Exception)
            {
                return "Delete failed!";
            }
        }
    }
}
