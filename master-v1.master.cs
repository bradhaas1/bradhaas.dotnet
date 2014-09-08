using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Xml;

public partial class master_v1 : System.Web.UI.MasterPage
{
	protected void Page_Load(object sender, EventArgs e)
	{
		ShowNavigation();
	}

	protected void ShowNavigation(){

		XmlDocument xmlDoc = new XmlDocument();
		xmlDoc.Load(Server.MapPath("~/App_Data/navigation.xml"));

		XmlNodeList elmts;
		elmts = xmlDoc.GetElementsByTagName("link");

		//navMenu.Controls.Add(new LiteralControl("<span class='btmLeft'>"));
		//navMenu.Controls.Add(new LiteralControl("</span>"));
		foreach (XmlNode node in elmts)
		{
			//HyperLink link = new HyperLink();
			//link.Text = string.Format("<span class='link'>" + (node.InnerText) + "</span>");
			//link.NavigateUrl = node.InnerText + ".aspx";
			//link.CssClass = "menuItem";
			//navMenu.Controls.Add(link);

			var span = new LiteralControl("<a href='" + node.InnerText + "'>" + node.InnerText + "</a>&nbsp;&nbsp;");

			navMenu.Controls.Add(span);



			// Add a literal control for span element and
			// closing after link...apply css vlass for backgroubd image
			//navMenu.Controls.Add(new LiteralControl("<span>"));    
		}

		//navMenu.Controls.Add(new LiteralControl("<span class='btmRight'>"));
		//navMenu.Controls.Add(new LiteralControl("</span>"));
	}
}



