using System;
using System.Collections.Generic;
using System.Linq;  
using System.Web;
using System.Data.SqlClient;
using System.Data;
using System.Web.Configuration;
using BradHaasSite;

namespace BradHaasSite
{
/// <summary>
/// Summary description for connections
/// </summary>
	public class DataAccess
	{
		public DataAccess()
		{
			//
			// TODO: Add constructor logic here
			//
		}

		public static SqlCommand CreateCommand()
		{
			string connectionString = WebConfigurationManager.ConnectionStrings["BhNet"].ConnectionString;			
			SqlConnection conn = new SqlConnection();
			conn.ConnectionString = connectionString;

			SqlCommand cmd = conn.CreateCommand();
			cmd.CommandType = CommandType.StoredProcedure;
			return cmd;
		}

		public static DataTable ExecuteSelectCommand(SqlCommand command)
		{
		  DataTable table = new DataTable();
			
			// open connection to database
			command.Connection.Open();
			
			// execute the commmand and save results in the datatable
			SqlDataReader reader = command.ExecuteReader();
			table.Load(reader);
			reader.Close();

			command.Connection.Close();

			return table;
		}

		/// <summary>
		/// Executes an insert, delete or update.
		/// </summary>
		/// <returns>Returns int indicating cmnumber of affected rows.</returns>
		public static int ExecuteNonQuery(SqlCommand cmd)
		{
			int affectedRows = -1;

			try
			{
				// open the connection
				
				cmd.Connection.Open();

				// execute command and get number of affected rows
				affectedRows = cmd.ExecuteNonQuery();
			}
			catch(Exception ex)
			{
				// log errors and rethrow them
				throw ex;
				
			}
			finally
			{
				cmd.Connection.Close();
			}

			return affectedRows;
		}


	}

}