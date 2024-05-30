using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CarPartsStore.Models
{
    public class Users
    {
        public string email {  get; set; }
        public string password { get; set; }
        public string userName { get; set; }
        public int role {  get; set; }
        public string shoppingCart { get; set; }
        public float totalPrice { get; set; }
    }
}