using System.Security.Principal;
using System.Globalization;
using System.Data.SqlClient;
using System.Data;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System.IO;
using System.Web.UI.HtmlControls;
using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO.Compression;
using ClosedXML.Excel;

namespace SmartI.Portal
{
    public class ExportReport : System.Web.UI.Page
    {
        public static string ExportReportData(DataTable data, string drpdwnvalue, string rptby, string createdby, string reportname)
        {
            string ZipFolder = string.Empty;
            string zipPath = string.Empty;
            HttpContext context = HttpContext.Current;
           // System.Web.HttpResponse Response = new HttpResponse(;
            try
            {

                DataTable table = (DataTable)data;
                if (drpdwnvalue == "Excel"|| drpdwnvalue == "EXCEL")
                {
                    string ExcelFolder = HttpContext.Current.Server.MapPath("~/ExcelReports");
                    ZipFolder = HttpContext.Current.Server.MapPath("~/ExcelReports/" + HttpContext.Current.Session.SessionID.ToString());
                    bool exists = Directory.Exists(ZipFolder);
                    if (!exists) Directory.CreateDirectory(ZipFolder);

                    string CurrentDateTime = Convert.ToString(DateTime.Now);
                    DateTime paramFromDate = Convert.ToDateTime(DateTime.Now); // paramFromDay|{7/1/2015 12:00:00 AM} System.DateTime
                    string dtFrom = paramFromDate.ToString("ddMMyyhhmmss");


                    //string FiilePath = ZipFolder + "/Report" + dtFrom + ".xlsx";
                    string FilePath = ZipFolder + "/"+reportname+"" + ".xlsx";
                    //  string FiilePath = ZipFolder + "/" + Session.SessionID.ToString() + ".xlsx";
                    //DataSet dtReport = (DataSet)Session["Datas"];// new DataTable();//

                   // CreateExcel.CreateExcelDocument(table, FiilePath);

                    string startPath = ZipFolder;
                     zipPath = ZipFolder + HttpContext.Current.Session.SessionID.ToString() + ".zip";
                    string zipfolder = HttpContext.Current.Session.SessionID.ToString();
                    //string zippath = Path.Combine(FiilePath, "CardInventory.zip");
                    // ZipFile.CreateFromDirectory(startPath, zipPath);

                    if (System.IO.File.Exists(zipPath))
                    {
                        System.IO.File.Delete(zipPath);
                    }
                    if (System.IO.File.Exists(FilePath))
                    {
                        System.IO.File.Delete(FilePath);
                    }

                    CreateExcel.CreateExcelDocument(table, FilePath);
                    using (ZipArchive newFile = ZipFile.Open(zipPath, ZipArchiveMode.Create))
                    {
                        newFile.CreateEntryFromFile(FilePath, reportname +".xlsx", CompressionLevel.Fastest);
                    }

                    HttpContext.Current.Response.Clear();
                    HttpContext.Current.Response.ContentType = "application/zip";
                    HttpContext.Current.Response.AppendHeader("Content-Disposition", "attachment; filename="+ reportname + ".zip");

                    FileInfo fileToDownload = new FileInfo(zipPath);
                    HttpContext.Current.Response.WriteFile(fileToDownload.FullName);
                    HttpContext.Current.Response.Flush();

                    File.Delete(zipPath);
                    File.Delete(FilePath);
                    Directory.Delete(ZipFolder);
                    HttpContext.Current.Response.Flush(); // Sends all currently buffered output to the client.
                    HttpContext.Current.Response.SuppressContent = true;  // Gets or sets a value indicating whether to send HTTP content to the client.
                    HttpContext.Current.ApplicationInstance.CompleteRequest();
                }

                if (drpdwnvalue == "PDF"|| drpdwnvalue == "Pdf")
                {

                    #region pdf with formating
                    Document pdfDoc = new Document(PageSize.A4, 30, 30, 40, 25);
                    System.IO.MemoryStream mStream = new System.IO.MemoryStream();
                    PdfWriter writer = PdfWriter.GetInstance(pdfDoc, mStream);
                    int cols = table.Columns.Count;
                    int rows = table.Rows.Count;
                    pdfDoc.Open();

                    iTextSharp.text.Table pdfTable = new iTextSharp.text.Table(cols, rows);
                    pdfTable.BorderWidth = 1;
                    pdfTable.Width = 100;
                    pdfTable.Padding = 1;
                    pdfTable.Spacing = 1;

                    //creating table headers
                    for (int i = 0; i < cols; i++)
                    {
                        Cell cellCols = new Cell();
                        Chunk chunkCols = new Chunk(table.Columns[i].ColumnName);
                        cellCols.Add(chunkCols);
                        pdfTable.AddCell(cellCols);

                    }
                    //creating table data (actual result)
                    for (int k = 0; k < rows; k++)
                    {
                        for (int j = 0; j < cols; j++)
                        {
                            Cell cellRows = new Cell();
                            Chunk chunkRows = new Chunk(HttpUtility.HtmlDecode(table.Rows[k][j].ToString()));
                            cellRows.Add(chunkRows);
                            pdfTable.AddCell(cellRows);

                        }
                    }

                    pdfDoc.Add(pdfTable);
                    pdfDoc.Close();
                  HttpContext.Current.Response.ContentType = "application/octet-stream";
                    HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment; filename="+ reportname + "");
                    HttpContext.Current.Response.Buffer = true;
                    HttpContext.Current.Response.Clear();
                    HttpContext.Current.Response.BinaryWrite(mStream.ToArray());
                    HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.Unicode;
                    HttpContext.Current.Response.Flush(); // Sends all currently buffered output to the client.
                    HttpContext.Current.Response.SuppressContent = true;  // Gets or sets a value indicating whether to send HTTP content to the client.
                    HttpContext.Current.ApplicationInstance.CompleteRequest();


                    #endregion
                }
            }
            catch (Exception ex)
            {
                bool exists = Directory.Exists(ZipFolder);
                bool zipPaths = Directory.Exists(zipPath);
                if (exists) Directory.Delete(ZipFolder);
                if (System.IO.File.Exists(zipPath))
                {
                    System.IO.File.Delete(zipPath);
                }

                HttpContext.Current.Response.Write(ex.ToString());
            }
            return null;
        }
    }
}