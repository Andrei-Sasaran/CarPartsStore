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
using static CarPartsStore.Controllers.CarsController;

namespace CarPartsStore.Controllers
{
    public class ShoppingCartController : ApiController
    {
        [Route("api/ShoppingCart/CreateShoppingCart")]
        [HttpPost]
        public string CreateShoppingCart(ShoppingCart shop)
        {
            try
            {
                string query = @"
                        Create table ["+ shop.tableName +@"]
                        (
                        [pieceCell] nvarchar(100),
                        [pieceId] int
                        )";
                DataTable dataTable = new DataTable();
                using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["CarPartsStoreDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var dataAdapter = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    dataAdapter.Fill(dataTable);
                }
                return "Created with succes!";
            }
            catch (Exception)
            {
                return "Creation failed!";
            }
        }
        [Route("api/ShoppingCart/DeleteShoppingCart")]
        [HttpPost]
        public string DeleteShoppingCart(ShoppingCart shop)
        {
            try
            {
                string query = @"
                        Drop table " + shop.tableName + @"";
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
        public HttpResponseMessage Get(ShoppingCart shop)
        {
            string query = @"
                    select * from "+ shop.tableName +@"
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
        [Route("api/ShoppingCart/AddToShoppingCart")]
        [HttpPost]
        public string AddToShoppingCart(ShoppingCart shop)
        {
            try
            {
                string query = @"
                        insert into ["+ shop.tableName+@"] values
                        (
                        '" + shop.pieceCell + @"',
                        '" + shop.pieceId + @"'
                        )";
                DataTable dataTable = new DataTable();
                using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["CarPartsStoreDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var dataAdapter = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    dataAdapter.Fill(dataTable);
                }
                return "Inserted with succes!";
            }
            catch (Exception)
            {
                return "Insert failed!";
            }
        }
        [Route("api/ShoppingCart/DeleteFromShoppingCart")]
        [HttpPost]
        public string DeleteFromShoppingCart(ShoppingCart shop)
        {
            try
            {
                string query = @"
                delete from "+ shop.tableName +@"
                where pieceCell = '"+ shop.pieceCell +@"' and pieceId = "+ shop.pieceId +@"
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
