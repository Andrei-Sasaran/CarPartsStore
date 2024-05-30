using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CarPartsStore.Models
{
    public class Wheels
    {
        public int id { get; set; }
        public string name { get; set; }
        public string manufacturer { get; set; }
        public string model { get; set; }
        public int year { get; set; }
        public string type { get; set; }
        public string description { get; set; }
        public int stock { get; set; }
        public float price { get; set; }
    }
}