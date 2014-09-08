using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Web;
using BradHaasSite;


namespace BradHaasSite
{
	/// <summary>
	/// Summary description for Project
	/// </summary>
	public class Project
	{
		public Project()
		{
			//
			// TODO: Add constructor logic here
			//
		}

		public static DataTable GetProjects()
		{
			SqlCommand cmd = DataAccess.CreateCommand();
			cmd.CommandText = "bhs_GetProjects";
			return DataAccess.ExecuteSelectCommand(cmd);
		}

		public void DeleteProjects()
		{
			int affectedRows = -1;
			SqlCommand cmd = DataAccess.CreateCommand();
			cmd.CommandText = "bhs_DeleteProjects";
			affectedRows = DataAccess.ExecuteNonQuery(cmd);

		}


	}

}