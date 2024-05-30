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
    public class TransmisionController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select * from [Transmision]
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
        public string Post(Transmision transmision)
        {
            try
            {
                string query = @"
                        insert into [Transmision] values
                        (
                        '" + transmision.id + @"',
                        '" + transmision.name + @"',
                        '" + transmision.manufacturer + @"',
                        '" + transmision.model + @"',
                        '" + transmision.year + @"',
                        '" + transmision.type + @"',
                        '" + transmision.description + @"',
                        '" + transmision.stock + @"',
                        '" + transmision.price + @"'
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
        public string Delete(Transmision transmision)
        {
            try
            {
                string query = @"
                        DELETE FROM Transmision
                        WHERE id = '" + transmision.id + @"'
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
