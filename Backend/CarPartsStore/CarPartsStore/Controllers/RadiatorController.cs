﻿using System;
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
    public class RadiatorController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select * from [Radiator]
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
        public string Post(Radiator radiator)
        {
            try
            {
                string query = @"
                        insert into [Radiator] values
                        (
                        '" + radiator.id + @"',
                        '" + radiator.name + @"',
                        '" + radiator.manufacturer + @"',
                        '" + radiator.model + @"',
                        '" + radiator.year + @"',
                        '" + radiator.type + @"',
                        '" + radiator.description + @"',
                        '" + radiator.stock + @"',
                        '" + radiator.price + @"'
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
        public string Delete(Radiator radiator)
        {
            try
            {
                string query = @"
                        DELETE FROM Radiator
                        WHERE id = '" + radiator.id + @"'
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
