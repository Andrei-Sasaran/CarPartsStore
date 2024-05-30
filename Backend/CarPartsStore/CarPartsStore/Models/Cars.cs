using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CarPartsStore.Models
{
    public class Cars
    {
        public int VIN {  get; set; }
        public string location { get; set; }
        public string manufacturer { get; set; }
        public string fuelType { get; set; }
        public string brand { get; set; }
        public int engineSize { get; set; }
        public int securityCode { get; set; }
        public int modelYear { get; set; }
        public string assembyPlant { get; set; }
        public int serialNumber { get; set; }
    }
}