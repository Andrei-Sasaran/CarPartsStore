using CarPartsStore.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Remoting.Messaging;
using System.Web.Http;

namespace CarPartsStore.Controllers
{
    public class UsersController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select * from [Users]
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
        public string Post(Users users)
        {
            try
            {
                string query = @"
                        insert into [Users] values
                        (
                        '"+users.email+ @"',
                        '"+users.password+ @"',
                        '"+users.userName+ @"',
                        '"+users.role+ @"',
                        '"+users.shoppingCart+ @"',
                        '"+users.totalPrice+@"'
                        )";
                DataTable dataTable = new DataTable();
                using( var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["CarPartsStoreDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var dataAdapter = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    dataAdapter.Fill(dataTable);
                }
                return "Added with succes!";
            } catch (Exception)
            {
                return "Add failed!" ;
            }
        }
        public string Delete(Users users)
        {
            try
            {
                string query = @"
                        DELETE FROM Users
                        WHERE email = '" + users.email + @"'
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
        [Route("api/Users/UpdateUsersPassword")]
        [HttpPut]
        public string UpdateUsersPassword(Users users)
        {
            try
            {
                string query = @"
                    update [Users]
                    set password='"+users.password+@"'
                    where email='"+users.email+@"'
                    ";
                DataTable dataTable = new DataTable();
                using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["CarPartsStoreDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var dataAdapter = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    dataAdapter.Fill(dataTable);
                }
                return "Password updated successfully!";
            }
            catch (Exception ex)
            {
                return "Password update failed!" + ex.Message;
            }
        }
        [Route("api/Users/UpdateUsersUsername")]
        [HttpPut]
        public string UpdateUsersUsername(Users users)
        {
            try
            {
                string query = @"
                    update [Users]
                    set username='" + users.userName + @"'
                    where email='" + users.email + @"'
                    ";
                DataTable dataTable = new DataTable();
                using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["CarPartsStoreDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var dataAdapter = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    dataAdapter.Fill(dataTable);
                }
                return "Username updated successfully!";
            }
            catch (Exception ex)
            {
                return "Username update failed!" + ex.Message;
            }
        }
        [Route("api/Users/UpdateUsersShoppinCart")]
        [HttpPut]
        public string UpdateUsersShoppingCart(Users users)
        {
            try
            {
                string query = @"
                    update [Users]
                    set shoppingCart='" + users.shoppingCart + @"'
                    ,totalPrice='" + users.totalPrice + @"'
                    where email='" + users.email + @"'
                    ";
                DataTable dataTable = new DataTable();
                using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["CarPartsStoreDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, connection))
                using (var dataAdapter = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    dataAdapter.Fill(dataTable);
                }
                return "ShoppingCart updated successfully!";
            }
            catch (Exception ex)
            {
                return "ShoppingCart update failed!" + ex.Message; 
            }
        }

        [Route("api/Users/Login")]
        [HttpPost]
        public Users Login(Users users)
        {
            string query = @"
                select * from [Users]
                where email = '"+users.email +@"'
                and password = '"+users.password +@"'
                ";
            DataTable dataTable = new DataTable();
            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["CarPartsStoreDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, connection))
                using (var dataAdapter = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    dataAdapter.Fill(dataTable);
                }
            if (dataTable.Rows.Count > 0)
            {
                return "Valid User";
            }
            else
            {
                return "Invalid User";
            }
            
        }
    }
}
