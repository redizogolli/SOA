using Contracts;
using Microsoft.Data.SqlClient;
using MySql.Data.MySqlClient;
using System.Data;
using static Contracts.Utils.enums;

namespace Repository
{
    public class Helper : IHelper
    {
        public IDbConnection GetDbConnection(DbTypes dbType, string connectionString)
        {
            switch (dbType)
            {
                case DbTypes.MySQL:
                    return new MySqlConnection(connectionString);
                case DbTypes.SQLServer:
                    return new SqlConnection(connectionString);
                default:
                    return null;
            }
        }

        public DbTypes GetDbType(string dbType)
        {
            switch (dbType)
            {
                case "SqlServer":
                    return DbTypes.SQLServer;
                case "MySql":
                    return DbTypes.MySQL;
                default:
                    return DbTypes.NotSupported;
            }
        }
    }
}
