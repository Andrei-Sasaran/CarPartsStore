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
    public class EngineController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select * from [Engine]
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
        public string Post(Engine engine)
        {
            try
            {
                string query = @"
                        insert into [Engine] values
                        (
                        '" + engine.id + @"',
                        '" + engine.name + @"',
                        '" + engine.manufacturer + @"',
                        '" + engine.model + @"',
                        '" + engine.year + @"',
                        '" + engine.type + @"',
                        '" + engine.capacity + @"',
                        '" + engine.cylinderNumber + @"',
                        '" + engine.cylinderPlacement + @"',
                        '" + engine.description + @"',
                        '" + engine.stock + @"',
                        '" + engine.price + @"'
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
        public string Delete(Engine engine)
        {
            try
            {
                string query = @"
                        DELETE FROM Engine
                        WHERE id = '" + engine.id + @"'
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
