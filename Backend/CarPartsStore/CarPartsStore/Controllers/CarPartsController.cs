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
    public class CarPartsController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
            select * from [CarParts]
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
        public string Post(CarParts carParts)
        {
            try
            {
                string query = @"
                insert into [CarParts] values
                (
                '" + carParts.portrait + @"',
                '" + carParts.radiator + @"',
                '" + carParts.suspension + @"',
                '" + carParts.brakes + @"',
                '" + carParts.motorOil + @"',
                '" + carParts.transmision + @"',
                '" + carParts.wheels + @"',
                '" + carParts.chasis + @"',
                '" + carParts.engine + @"'
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
        public string Delete(CarParts carParts)
        {
            try
            {
                string query = @"
                DELETE FROM CarParts
                WHERE portrait = '" + carParts.portrait + @"'
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
