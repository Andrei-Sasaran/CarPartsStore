using CarPartsStore.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarPartsStore.Controllers
{
    public class WheelsController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select * from [Wheels]
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
        public string Post(Wheels wheels)
        {
            try
            {
                string query = @"
                        insert into [Wheels] values
                        (
                        '" + wheels.id + @"',
                        '" + wheels.name + @"',
                        '" + wheels.manufacturer + @"',
                        '" + wheels.model + @"',
                        '" + wheels.year + @"',
                        '" + wheels.type + @"',
                        '" + wheels.description + @"',
                        '" + wheels.stock + @"',
                        '" + wheels.price + @"'
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
        public string Delete(Wheels wheels)
        {
            try
            {
                string query = @"
                        DELETE FROM Wheels
                        WHERE id = '" + wheels.id + @"'
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
