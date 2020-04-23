using System.Data;
using static Contracts.Utils.enums;

namespace Contracts
{
    public interface IHelper
    {
        IDbConnection GetDbConnection(DbTypes dbType, string connectionString);
        DbTypes GetDbType(string dbType);
    }
}
