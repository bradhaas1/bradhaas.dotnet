using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.IO;

public partial class apps_Default : System.Web.UI.Page
{
	protected void Page_Load(object sender, EventArgs e)
	{
		int start;
		string path = MapPath("~/apps");
		string targetDirectory = path;

		// Process the list of files found in the directory. 
		string[] fileEntries = Directory.GetDirectories(targetDirectory);
		var links = new List<string>();
		var linkNames = new List<string>();

		for (int i = 0; i < fileEntries.Length; i++)
		{

			start = fileEntries[i].LastIndexOf('\\');
			links.Add(fileEntries[i].Substring(start + 1));
			linkNames.Add(links[i].Replace("-", " "));


			//results.InnerHtml += links[i] + "<br />";

			Panel linkPanel = new Panel();

			HtmlAnchor NewAnchorControl = new HtmlAnchor();
			NewAnchorControl.HRef = links[i];
			NewAnchorControl.InnerText = linkNames[i];
			//NewAnchorControlhor.Attributes.Add("onclick", "SayHello('" + objTable.ID + "');");
			linkPanel.Controls.Add(NewAnchorControl);
			apps.Controls.Add(linkPanel);
		}
	}
}