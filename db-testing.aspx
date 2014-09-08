<%@ Page Language="C#" AutoEventWireup="true" CodeFile="db-testing.aspx.cs" Inherits="db_testing" MasterPageFile="~/master-v1.master" Theme="Default" ClientIDMode="Static" %>

	<asp:Content ID="TestDB" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server" ClientIDMode="Static">
	<%--working stylesheet--%>
	<link href="../App_Themes/testDB.css" rel="stylesheet" />

	<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>

	<asp:Label ID="Result" runat="server" ClientIDMode="Static"></asp:Label><br />
	<br />

	<div class="leftNav">

		<asp:Button ID="GetClients" CssClass="btnTestDB" runat="server" OnClick="GetClients_Click" Text="GetClients()" ClientIDMode="Static" /><br />
		<asp:Button ID="GetProjects" CssClass="btnTestDB" runat="server" OnClick="GetProjects_Click" Text="GetProjects()" ClientIDMode="Static" /><br />
		<asp:Button ID="GetTasks" CssClass="btnTestDB" runat="server" OnClick="GetTasks_Click" Text="GetTasks()" ClientIDMode="Static" /><br />

	</div>

	<div class="content">

		<!-- RESULTS -->
		<asp:Panel id = "pnlBtnResults" runat="server" CssClass="pnlDisplayResult" ClientIDMode="Static">
			<h3>Results</h3>
			<asp:Label id="lblResults" runat="server" ClientIDMode="Static"></asp:Label>
			<div class="method_result"><asp:GridView ID="grid" runat="server" ClientIDMode="Static"></asp:GridView></div>
		</asp:Panel>

		<hr />

		<h2 id="hdrAddTask" ">Add Task</h2>
		<asp:Panel id = "pnlAddTask" runat="server" CssClass="pnlResults" ClientIDMode="Static">
			<label id="lblAddTaskClient" for="ddlAddTaskClient">Name</label>
			<asp:DropDownList ID="ddlAddTaskClients" ClientIDMode="Static" runat="server"></asp:DropDownList><br />


			<label id="lblAddTaskName" for="txtAddTaskName">Name</label>
			<asp:TextBox ID="txtAddTaskName" runat="server" ClientIDMode="Static"></asp:TextBox><br />
			<label id="lblAddTaskDesc" for="txtAddTaskDesc">Description</label>
			<asp:TextBox ID="txtAddTaskDesc" runat="server" ClientIDMode="Static"></asp:TextBox><br />
			<label id="lblAddTaskPri" for="txtAddTaskPri">Priority</label>
			<asp:TextBox ID="txtAddTaskPri" runat="server" ClientIDMode="Static"></asp:TextBox><br />
			<asp:Button ID="btnCreateTask" runat="server" Text="Create Task()" OnClick="btnCreateTask_Click" ClientIDMode="Static"  />
		</asp:Panel>
		<div style="clear:both;"></div>

		<h2 id="hdrDeleteTask" >Delete Task</h2>
		<asp:Panel ID="pnlDeleteTask" runat="server" CssClass="pnlResults" ClientIDMode="Static" >
			<label id="lblDeleteTaskID" for="txtDeleteTaskID">Task ID</label>
			<asp:TextBox ID="txtDeleteTaskID" runat="server" ClientIDMode="Static"></asp:TextBox><br />
			<asp:Button ID="btnDeleteTask" runat="server" Text="Delete Task()" OnClick="btnDeleteTask_Click" ClientIDMode="Static" />
		</asp:Panel>
		<div style="clear:both;"></div>

		<h2 id="hdrUpdateTask">Update Task</h2>
		<asp:Panel ID="pnlUpdateTask" runat="server" CssClass="pnlResults" ClientIDMode="Static">			
			<label id="lblUpdateTaskID" for="txtUpdateTaskID">Task ID</label>
			<asp:TextBox ID="txtUpdateTaskID" runat="server" ClientIDMode="Static"></asp:TextBox><br />
			<label id="lblUpdateTaskName" for="txtUpdateTaskName">Task Name</label>
			<asp:TextBox ID="txtUpdateTaskName" runat="server" ClientIDMode="Static"></asp:TextBox><br />
			<label id="lblUpdateTaskDesc" for="txtUpdateTaskDesc">Task Description</label>
			<asp:TextBox ID="txtUpdateTaskDesc" runat="server" ClientIDMode="Static"></asp:TextBox><br />
			<label id="lblUpdateTaskPri" for="txtUpdateTaskPri">Task Priority</label>
			<asp:TextBox ID="txtUpdateTaskPri" runat="server" ClientIDMode="Static"></asp:TextBox><br />
			<asp:Button ID="btnUpdateTask" runat="server" Text="Update Task()" OnClick="btnUpdateTask_Click" ClientIDMode="Static" />
		</asp:Panel>
		<div style="clear:both;"></div>


		<h2 id="hdrAddClient">Add Client</h2>
		<asp:Panel ID="pnlAddClient" runat="server" CssClass="pnlResults" ClientIDMode="Static">
			
			<label id="lblAddClientName" for="txtAddClientName">Name</label>
			<asp:TextBox ID="txtAddClientName" runat="server" ClientIDMode="Static"></asp:TextBox>

			<asp:Button ID="btnAddClient" runat="server" ClientIDMode="Static" Text="AddClient()" OnClick="btnAddClient_Click" />

		</asp:Panel>

		<h2 id="hdrDeleteClient">Delete Client</h2>
		<asp:Panel ID="pnlDeleteClient" runat="server" CssClass="pnlResults" ClientIDMode="Static">
			<label id="lblDeleteClientName" for="">Name</label>
			<asp:DropDownList ID="ddlClients" ClientIDMode="Static" runat="server"></asp:DropDownList>
			<asp:Button ID="btnDeleteClient" runat="server" ClientIDMode="Static" OnClick="btnDeleteClient_Click" Text="DeleteClient()" />

		</asp:Panel>

	</div>

</asp:Content>

