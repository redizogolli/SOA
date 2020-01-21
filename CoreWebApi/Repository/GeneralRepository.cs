﻿using Contracts;
using Dapper;
using Entities.DataTransferObjects;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace Repository
{
    public class GeneralRepository : IGeneralRepository
    {
        private string _connectionString = "Server=.\\SQLEXPRESS;Database=OrariProvimeve;Trusted_Connection=True;";
        public List<string> GetDeget()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var list = connection.Query<string>("GetDeget", commandType: CommandType.StoredProcedure).ToList();
                return list;
            }
        }

        public List<DitaDto> GetDitet()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var list = connection.Query<DitaDto>("dbo.GetDitet", commandType: CommandType.StoredProcedure).ToList();
                return list;
            }
        }

        public List<KlasaDto> GetKlasa()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var list = connection.Query<KlasaDto>("dbo.GetKlasa", commandType: CommandType.StoredProcedure).ToList();
                return list;
            }
        }

        public List<OrariDateKlaseDto> GetOrariDateKlaseDtos(int klasa, int dita)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@klasa", klasa);
            parameters.Add("@dita", dita);
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var list = connection.Query<OrariDateKlaseDto>("dbo.GetOrariByKlaseAndDate", param: parameters, commandType: CommandType.StoredProcedure).ToList();
                return list;
            }
        }

        public List<OrariStudentDto> GetOrariStudent(string dega, int viti, string paraleli)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@dega", dega);
            parameters.Add("@viti", viti);
            parameters.Add("@paraleli", paraleli);
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var list = connection.Query<OrariStudentDto>("dbo.GetOrariByDegeVitParalel", param: parameters, commandType: CommandType.StoredProcedure).ToList();
                return list;
            }
        }

        public List<OrarPedagogDto> GetOrarPedagog(string emri)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@Emri", emri);
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var list = connection.Query<OrarPedagogDto>("dbo.provimePedagog", param: parameters, commandType: CommandType.StoredProcedure).ToList();
                return list;
            }
        }

        public List<string> GetParaleli(string dega, int viti)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@dega", dega);
            parameters.Add("@vit", viti);
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var list = connection.Query<string>("dbo.GetParaleli", param: parameters, commandType: CommandType.StoredProcedure).ToList();
                return list;
            }
        }

        public List<string> GetPedagog()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var list = connection.Query<string>("dbo.GetPedagog", commandType: CommandType.StoredProcedure).ToList();
                return list;
            }
        }

        public List<int> GetVitetPerDege(string dega)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                var list = connection.Query<int>("dbo.GetVitetPerDege", param: new { dega = dega }, commandType: CommandType.StoredProcedure).ToList();
                return list;
            }
        }
    }
}
