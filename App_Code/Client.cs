using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using BradHaasSite;

namespace BradHaasSite
{
    /// <summary>
    /// Summary description for Client
    /// </summary>
		/// 

    public class Client
    {
        public Client()
        {
            //
            // TODO: Add constructor logic here
            //
        }

				public static DataTable GetClients()
				{
					SqlCommand cmd = DataAccess.CreateCommand();
					cmd.CommandText = "bhs_GetClients";
					return DataAccess.ExecuteSelectCommand(cmd);
				}
    }
}