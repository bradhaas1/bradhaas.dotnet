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
    /// Summary description for Task
    /// </summary>
    public class Task
    {
      public Task()
        {
          //
          // TODO: Add constructor logic here
          //
        }

			public static DataTable GetTasks()
				{
					SqlCommand cmd = DataAccess.CreateCommand();
					cmd.CommandText = "bhs_GetTasks";

					return DataAccess.ExecuteSelectCommand(cmd);
				}

			public static int AddTasks(string taskName, string taskDescription, string taskPriority )
				{
					SqlCommand cmd = DataAccess.CreateCommand();
					cmd.CommandType = CommandType.StoredProcedure;
					cmd.CommandText = "bhs_AddTasks";
					
					SqlParameter param = new SqlParameter();
					param.ParameterName = "@task_name";
					param.Value = taskName;
					param.DbType = DbType.String;
					cmd.Parameters.Add(param);

					param = cmd.CreateParameter();
					param.ParameterName = "@task_description";
					param.Value = taskDescription;
					param.DbType = DbType.String;
					cmd.Parameters.Add(param);

					param = cmd.CreateParameter();
					param.ParameterName = "@task_priority";
					param.Value = taskPriority;
					param.DbType = DbType.String;
					cmd.Parameters.Add(param);

					int result = -1;
					return result = DataAccess.ExecuteNonQuery(cmd);			
				}
			 
			public static int DeleteTasks(int taskID)
			{
				SqlCommand cmd = DataAccess.CreateCommand();
				cmd.CommandType = CommandType.StoredProcedure;
				cmd.CommandText = "bhs_DeleteTasks";

				SqlParameter param = new SqlParameter();
				param.ParameterName = "@taskID";
				param.Value = taskID;
				param.DbType = DbType.Int32;
				cmd.Parameters.Add(param);

				int result = -1;
				return result = DataAccess.ExecuteNonQuery(cmd);
			}

			public static int UpdateTasks(int id, string taskName, string taskDescription, string taskPriority)
			{
				SqlCommand cmd = DataAccess.CreateCommand();
				cmd.CommandType = CommandType.StoredProcedure;
				cmd.CommandText = "bhs_UpdateTasks";

				SqlParameter param = new SqlParameter();
				param.ParameterName = "@taskID";
				param.Value = id;
				param.DbType = DbType.Int32;
				cmd.Parameters.Add(param);
				
				param = new SqlParameter();
				param.ParameterName = "@taskName";
				param.Value = taskName;
				param.DbType = DbType.String;
				cmd.Parameters.Add(param);

				param = new SqlParameter();
				param.ParameterName = "@taskDescription";
				param.Value = taskDescription;
				param.DbType = DbType.String;
				cmd.Parameters.Add(param);

				param = new SqlParameter();
				param.ParameterName = "@taskPriority";
				param.Value = taskPriority;
				param.DbType = DbType.String;
				cmd.Parameters.Add(param);

				int result = -1;
				return result = DataAccess.ExecuteNonQuery(cmd);
			}
		}
}